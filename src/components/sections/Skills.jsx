import { MAIN_SKILLS } from "../../data/skills";

export default function Skills({ onOpenModal }) {
  return (
    <section id="competences" className="language-skill">
      <div className="container">
        <h2 className="skill-title">
          Mes <span className="white-text">Compétences</span>
          {/* Bouton « Voir Tout » affiché uniquement sur mobile */}
          <div
            className="skill-item btn-more btn-hiden-desktop btn-trigger-modal"
            onClick={onOpenModal}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpenModal()}
          >
            <span>+ Voir Tout</span>
          </div>
        </h2>

        <div className="skills-wrapper">
          {MAIN_SKILLS.map(({ name, image }) => (
            <div className="skill-item" key={name}>
              <img src={image} alt={name} />
            </div>
          ))}

          <div
            className="skill-item btn-more btn-trigger-modal"
            onClick={onOpenModal}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpenModal()}
          >
            <span>+ Voir Tout</span>
          </div>
        </div>
      </div>
    </section>
  );
}
