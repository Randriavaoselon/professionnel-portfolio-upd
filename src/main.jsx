import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Ordre identique au template d'origine (style → realisation → header → footer)
import "./styles/style.css";
import "./styles/realisation.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/react-overrides.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
