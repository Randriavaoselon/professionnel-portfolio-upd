import { publicUrl } from "../utils/publicUrl";

export const SITE = {
  name: "RANDRIAVAO Selon",
  tagline: "Développeur Full-Stack & IA",
  headerTitle: "Demain sera ce que nous en ferons",
  headerSubtitle: "La meilleure façon de prédire l\u0027avenir, c\u0027est de le créer",
  cvUrl: publicUrl("pdf/Selon_CV.pdf"),
  videoUrl: publicUrl("videos/introduction.webm"),
  year: 2026,
  address: "Lot 0203D0150, Mahajanga 401, Madagascar",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d960.1823001079889!2d46.35477963421097!3d-15.712517634109952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2203fb0e9ebb193b%3A0xc07773f7e60747ad!2sTranombarotra%20Pompe%20Be!5e0!3m2!1sfr!2smg!4v1775569827971!5m2!1sfr!2smg",
  contact: {
    phone: "+261 32 14 146 19",
    email: "selonrandriavao@gmail.com",
    address: "Mahajanga, Madagascar",
  },
};

/** Liens du menu latéral rétractable */
export const SIDEBAR_LINKS = [
  { href: "#competences", icon: "fa-code", label: "Mes Compétences" },
  { href: "#apropos", icon: "fa-user", label: "À propos de moi" },
  { href: "#services", icon: "fa-laptop-code", label: "Mes Services" },
  { href: "#realisation", icon: "fa-project-diagram", label: "Mes Réalisations" },
  { href: "#presentation", icon: "fa-user-tie", label: "Ma Présentation" },
  { href: "#contact", icon: "fa-envelope", label: "Contact Rapide" },
];

/** Liens de navigation du pied de page */
export const FOOTER_LINKS = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#realisation", label: "Réalisations" },
  { href: "#presentation", label: "Présentation" },
];
