import assistant from "../assets/images/assistant-image.png";
import professionnel from "../assets/images/professionnel-desing.png";
import kotikota from "../assets/images/kotikota-desing.png";
import pharma from "../assets/images/pharma-tech.png";
import guide from "../assets/images/guide.png";
import wifiZone from "../assets/images/WIFI-ZONE.png";
import extractData from "../assets/images/extract_data.png";
import collab from "../assets/images/collab-distance.png";
import surveillance from "../assets/images/app-surveillance.png";
import locationVoiture from "../assets/images/location-voiture.png";

/**
 * Thèmes de couleur par catégorie (accent, halo, dégradé de l indicateur des onglets).
 */
export const CATEGORY_THEMES = {
  frontend: {
    accent: "#4c8dff",
    soft: "rgba(76, 141, 255, .16)",
    grad: "linear-gradient(135deg, #4c8dff, #7db1ff)",
  },
  backend: {
    accent: "#8b6bff",
    soft: "rgba(139, 107, 255, .16)",
    grad: "linear-gradient(135deg, #8b6bff, #b79bff)",
  },
};

export const PROJECT_CATEGORIES = [
  { id: "frontend", label: "Design Frontend", icon: "fa-pen-ruler" },
  { id: "backend", label: "Application Backend", icon: "fa-server" },
];

export const PROJECTS = {
  frontend: [
    {
      id: "assistant-documentation",
      url: "https://assistant-ai-eight-gamma.vercel.app/",
      tag: "Assistant-Documentation",
      image: assistant,
      alt: "desing-professionnel",
      title: "Simplifiez la création, l\u0027organisation et la recherche de vos documents.",
    },
    {
      id: "agents-ia",
      url: "https://avenir-client.vercel.app/",
      tag: "UI/UX",
      image: professionnel,
      alt: "desing-professionnel",
      title: "Déployez des agents IA personnalisés facilement.",
    },
    {
      id: "koti-kota",
      url: "https://avenir-tech.netlify.app/",
      tag: "UI/UX",
      image: kotikota,
      alt: "Koti Kota",
      title: "Proposition d\u0027interface utilisateur pour Koti Kota",
    },
    {
      id: "pharma-techs",
      url: "https://pharma-techs.netlify.app/",
      tag: "Design Challenge",
      image: pharma,
      alt: "Pharma Techs",
      title: "Pharma Techs — réalisé dans le cadre d\u0027un défi de design",
    },
    {
      id: "guide",
      url: "https://avenir-tech-guide.netlify.app/",
      tag: "Site vitrine",
      image: guide,
      alt: "Guide",
      title: "Site de conseils pour une vie meilleure",
    },
    {
      id: "wifi-zone",
      url: "https://randriavaoselon.github.io/pageConnexion/",
      tag: "Portail captif",
      image: wifiZone,
      alt: "WIFI Zone",
      title: "Conception de la page de connexion MikroTik",
    },
  ],
  backend: [
    {
      id: "assistant-ia",
      url: "https://drive.google.com/file/d/1kldmOESZDoswiKxmVulToRenJ8nBuwQl/view?usp=sharing",
      tag: "Assistant IA",
      image: assistant,
      alt: "Extraction Excel/CSV",
      title: "Application d\u0027assistant IA intelligent et conversationnel",
    },
    {
      id: "extraction-data",
      url: "https://avenir-tech-data.onrender.com/",
      tag: "Data App",
      image: extractData,
      alt: "Extraction Excel/CSV",
      title: "Application d\u0027extraction de fichiers Excel et CSV",
    },
    {
      id: "collaboration",
      url: "https://drive.google.com/file/d/1cFgg3WXKSVUMgdaJFG5i0v-g24y6cZKK/view?usp=drive_link",
      tag: "Temps réel",
      image: collab,
      alt: "Collaboration à distance",
      title: "Application de collaboration à distance en temps réel",
    },
    {
      id: "monitoring",
      url: "https://drive.google.com/file/d/1cRUVbz20nJX-W4IxpnX8Wn_Txz8Vnny3/view?usp=drive_link",
      tag: "Monitoring",
      image: surveillance,
      alt: "Surveillance d\u0027équipes",
      title: "Outil de monitoring des équipes à distance",
    },
    {
      id: "location-voitures",
      url: "https://drive.google.com/file/d/1FltaklXiS2KTPLce9wiptm7JiPQlZA_M/view?usp=drive_link",
      tag: "Réservation",
      image: locationVoiture,
      alt: "Location de voitures",
      title: "Solution de réservation de voitures en ligne",
    },
  ],
};
