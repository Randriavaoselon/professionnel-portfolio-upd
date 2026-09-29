import aboutPhoto from "../../assets/images/about_me2.png";
import { SITE } from "../../data/site";

export default function About() {
  return (
    <section id="apropos" className="about-me">
      <div className="container">
        <div className="row about-row">
          <div className="col-content">
            <h3 className="about-subtitle">Qui suis-je ?</h3>
            <p className="about-text">
              Développeur passionné par la résolution de problèmes complexes et
              l'innovation technologique. Mon parcours m'a permis d'acquérir une solide
              expertise en <strong>Python</strong> et <strong>Django</strong>, tout en
              explorant les frontières de l'<strong>Intelligence Artificielle</strong>{" "}
              avec des outils comme Groq et OpenAI.
            </p>
            <p className="about-text">
              Mon objectif est de concevoir des solutions performantes, scalables et
              centrées sur l'utilisateur, en alliant rigueur technique et créativité.
            </p>

            <div className="about-actions">
              <a
                href={SITE.cvUrl}
                className="btn-cv"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultez mon CV <i className="fas fa-file-download"></i>
              </a>
            </div>
          </div>

          <div className="col-visual align-bottom">
            <div className="image-frame">
              <img src={aboutPhoto} alt="Mon espace de travail" className="about-photo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
