import { useState } from "react";
import { SITE } from "../../data/site";
import { sendContactMessage } from "../../services/contactService";

const INITIAL_FORM = { company_name: "", subject: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setFeedback(null);

    try {
      const data = await sendContactMessage(form);
      setFeedback({ type: "success", text: `✓ ${data.message}` });
      setForm(INITIAL_FORM);
    } catch (error) {
      console.error("Error:", error);
      const text =
        error instanceof TypeError || !error.message
          ? "Oups ! Une erreur est survenue."
          : error.message;
      setFeedback({ type: "error", text });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="row contact-row shadow-box">
          <div className="col-contact-form">
            <form
              className="contact-form"
              id="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <input
                  type="text"
                  id="company_name"
                  name="company_name"
                  placeholder="Nom d'entreprise"
                  value={form.company_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Sujet"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Votre Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Votre Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-submit"
                id="btn-submit"
                disabled={isSending}
              >
                {isSending ? "Envoi en cours..." : "Envoyer le message"}
              </button>
              <div
                id="form-response"
                role="status"
                style={{
                  color: feedback?.type === "success" ? "#f0c37a" : "red",
                }}
              >
                {feedback?.text}
              </div>
            </form>
          </div>

          <div className="col-contact-info highlighted-info">
            <h4 className="info-title">Parlons de votre projet</h4>
            <p className="info-text">
              Disponible pour de nouvelles opportunités de collaboration.
              N'hésitez pas à me contacter pour discuter de vos besoins
              techniques.
            </p>
            <ul className="info-details">
              <li>
                <i className="fas fa-phone"></i> <span>Téléphone :</span>{" "}
                {SITE.contact.phone}
              </li>
              <li>
                <i className="fas fa-envelope"></i> <span>Email :</span>{" "}
                {SITE.contact.email}
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i> <span>Adresse :</span>{" "}
                {SITE.contact.address}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
