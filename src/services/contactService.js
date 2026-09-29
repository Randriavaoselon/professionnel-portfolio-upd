
const API_URL = (import.meta.env.VITE_API_URL ?? "").replace(/\/$/, "");

/**
 * @param {{company_name: string, subject: string, email: string, message: string}} payload
 * @returns {Promise<{message: string}>}
 * @throws {Error} avec le message renvoyé par le serveur (validation, limite, etc.)
 */
export async function sendContactMessage(payload) {
  const response = await fetch(`${API_URL}/api/contact/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || `Erreur lors de l'envoi (HTTP ${response.status})`);
  }

  return data;
}