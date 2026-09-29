import python from "../assets/images/python-rb.png";
import django from "../assets/images/Django-rb.png";
import html5 from "../assets/images/HTML5-rb.png";
import css3 from "../assets/images/CSS3-rb.png";
import javascript from "../assets/images/javascript-rb.png";

/** Compétences mises en avant (logos) */
export const MAIN_SKILLS = [
  { name: "Python", image: python },
  { name: "Django", image: django },
  { name: "HTML5", image: html5 },
  { name: "CSS3", image: css3 },
  { name: "Javascript", image: javascript },
];

/** Contenu de la modale « Stack Technique Complète » */
export const SKILL_CATEGORIES = [
  {
    title: "IA",
    items: [
      { icon: "fa-bolt", label: "GROQ (LPU Inference)" },
      { icon: "fa-microphone", label: "DeepGram (STT/TTS)" },
      { icon: "fa-gemini", label: "Google Gemini / Vertex AI" },
      { icon: "fa-brain", label: "OpenAI (GPT-4/DALL-E)" },
    ],
  },
  {
    title: "Backend",
    items: [
      { label: "Python / Django / REST API" },
      { label: "Java / SpringBoot / REST API" },
      { label: "VBA Excel" },
      { label: "PostgreSQL/MySQL/SQLite" },
      { label: "Docker" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { label: "HTML5 / CSS3" },
      { label: "JavaScript (ES6+)" },
      { label: "Bootstrap" },
      { label: "ReactJs" },
    ],
  },
  {
    title: "Outils & Autres",
    items: [
      { label: "Git / GitHub" },
      { label: "Linux" },
      { label: "Visual studio code" },
      { label: "IntelliJ IDEA Community" },
      { label: "POSTMAN" },
      { label: "DOCKER DESKTOP" },
      { label: "XAMPP" },
      { label: "EXCEL / WORD" },
      { label: "Odoo ERP / Odoo Site web" },
    ],
  },
];
