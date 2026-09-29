import { useEffect } from "react";
import { SKILL_CATEGORIES } from "../../data/skills";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";

export default function SkillsModal({ isOpen, onClose }) {
  useBodyScrollLock(isOpen);

  // Fermeture avec la touche Échap
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  // Fermeture en cliquant sur le fond noir
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) onClose();
  };

  return (
    <div
      id="skillsModal"
      className={`modal ${isOpen ? "is-open" : ""}`.trim()}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      aria-labelledby="skillsModalTitle"
    >
      <div className="modal-content">
        <span
          className="close-btn"
          onClick={onClose}
          role="button"
          tabIndex={0}
          aria-label="Fermer"
          onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClose()}
        >
          &times;
        </span>
        <h2 className="modal-title" id="skillsModalTitle">
          Stack Technique Complète
        </h2>

        <div className="modal-grid">
          {SKILL_CATEGORIES.map((category) => (
            <div className="category" key={category.title}>
              <h3>{category.title}</h3>
              <ul>
                {category.items.map((item) => (
                  <li key={item.label} className={item.icon ? "" : "no-icon"}>
                    {item.icon && <i className={`fas ${item.icon}`}></i>}
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}