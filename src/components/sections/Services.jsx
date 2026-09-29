import serviceImage from "../../assets/images/My_service2.png";

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="row services-row">
          <div className="col-visual services-col-img">
            <div className="services-image-frame">
              <img src={serviceImage} alt="Développement" className="services-photo" />
            </div>
          </div>

          <div className="col-content services-col-text">
            <div className="text-wrapper">
              <h3 className="services-title">
                <span className="services-title-expertise">Expertise</span> Technique
              </h3>
              <p className="services-text">
                Je transforme vos idées en solutions numériques performantes grâce à
                l'écosystème <strong>Python/Django</strong>. Mon expertise va de la
                sécurisation d'applications web (authentification avancée) à la création
                d'agents IA autonomes. En exploitant la puissance de{" "}
                <strong>Groq</strong>, <strong>OpenAI</strong> et{" "}
                <strong>Google Gemini</strong>, ainsi que l'analyse audio de{" "}
                <strong>Deepgram</strong>, je développe des systèmes capables de gérer et
                d'automatiser vos tâches métier de manière intelligente.
              </p>

              <div className="services-actions">
                <a href="#contact" className="btn-services">
                  En savoir plus <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
