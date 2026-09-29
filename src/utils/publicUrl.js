/**
 * Construit l URL d un fichier du dossier /public en respectant la config `base` de Vite.
 * @param {string} path Chemin relatif (ex: "pdf/Selon_CV.pdf")
 */
export const publicUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
