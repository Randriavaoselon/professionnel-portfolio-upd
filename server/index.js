import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import nodemailer from "nodemailer";

const {
  PORT = 5000,
  CORS_ORIGINS = "http://localhost:5173",
  MAIL_TO,
  SMTP_HOST = "smtp.gmail.com",
  SMTP_PORT = "465",
  SMTP_USER,
  SMTP_PASS,
  MAIL_DRY_RUN = "false",
} = process.env;

const dryRun = MAIL_DRY_RUN === "true";

if (!dryRun && (!SMTP_USER || !SMTP_PASS || !MAIL_TO)) {
  console.error(
    "Configuration incomplète : SMTP_USER, SMTP_PASS et MAIL_TO sont requis."
  );
  process.exit(1);
}

/* ---------- Transport email ---------- */
const transporter = dryRun
  ? null
  : nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

/* ---------- Utilitaires ---------- */
const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

// Supprime les retours à la ligne pour empêcher l'injection d'en-têtes email
const singleLine = (value) => value.replace(/[\r\n]+/g, " ").trim();

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const LIMITS = {
  company_name: 120,
  subject: 150,
  email: 254,
  message: 5000,
};

function validateContact(body) {
  const errors = {};
  const data = {};

  for (const [field, max] of Object.entries(LIMITS)) {
    const raw = body?.[field];
    const value = typeof raw === "string" ? raw.trim() : "";

    if (!value) errors[field] = "Ce champ est obligatoire.";
    else if (value.length > max) errors[field] = `Maximum ${max} caractères.`;
    else data[field] = value;
  }

  if (data.email && !EMAIL_REGEX.test(data.email)) {
    errors.email = "Adresse email invalide.";
  }

  return { data, errors, valid: Object.keys(errors).length === 0 };
}

/* ---------- Application ---------- */
const app = express();

app.set("trust proxy", 1);
app.use(helmet());
app.use(
  cors({
    origin: CORS_ORIGINS.split(",").map((origin) => origin.trim()),
    methods: ["POST", "GET"],
  })
);
app.use(express.json({ limit: "10kb" }));

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    message: "Trop de messages envoyés. Réessayez dans quelques minutes.",
  },
});

app.get("/api/health", (_req, res) => res.json({ status: "ok" }));

app.post("/api/contact", contactLimiter, async (req, res, next) => {
  const { data, errors, valid } = validateContact(req.body);

  if (!valid) {
    return res
      .status(400)
      .json({ message: "Veuillez vérifier les champs du formulaire.", errors });
  }

  const mail = {
    from: `"Portfolio" <${SMTP_USER}>`,
    to: MAIL_TO,
    replyTo: singleLine(data.email),
    subject: `[Portfolio] ${singleLine(data.subject)}`,
    text: [
      `Entreprise : ${data.company_name}`,
      `Email : ${data.email}`,
      `Sujet : ${data.subject}`,
      "",
      data.message,
    ].join("\n"),
    html: `
      <h2>Nouveau message depuis le portfolio</h2>
      <p><strong>Entreprise :</strong> ${escapeHtml(data.company_name)}</p>
      <p><strong>Email :</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Sujet :</strong> ${escapeHtml(data.subject)}</p>
      <hr />
      <p style="white-space: pre-wrap;">${escapeHtml(data.message)}</p>
    `,
  };

  try {
    if (dryRun) {
      console.log("[DRY RUN] Email non envoyé :\n", mail.text);
    } else {
      await transporter.sendMail(mail);
    }
    return res
      .status(201)
      .json({ message: "Votre message a bien été envoyé. Merci !" });
  } catch (error) {
    return next(error);
  }
});

// 404 JSON
app.use((_req, res) => res.status(404).json({ message: "Route introuvable." }));

// Gestion centralisée des erreurs (JSON invalide, échec SMTP...)
// eslint-disable-next-line no-unused-vars
app.use((error, _req, res, _next) => {
  if (error.type === "entity.parse.failed") {
    return res.status(400).json({ message: "Requête invalide." });
  }
  console.error("Erreur serveur :", error);
  return res
    .status(500)
    .json({ message: "Impossible d'envoyer le message pour le moment." });
});

if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(
      `API portfolio démarrée sur le port ${PORT}${dryRun ? " (DRY RUN)" : ""}`
    );
  });
}

export default app;

// app.listen(PORT, () => {
//   console.log(`API portfolio démarrée sur le port ${PORT}${dryRun ? " (DRY RUN)" : ""}`);
// });
