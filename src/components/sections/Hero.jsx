import { Fragment } from "react";
import profileImage from "../../assets/images/profileHomme-rb2.png";
import { useTypewriter } from "../../hooks/useTypewriter";

const FULL_NAME = "RANDRIAVAO Selon";
// Indices des initiales mises en évidence (R et S)
const HIGHLIGHTED = new Set([0, 11]);

export default function Hero() {
  const typed = useTypewriter(FULL_NAME, 70);

  return (
    <section id="accueil" className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-image">
            <img
              src={profileImage}
              alt="Description de l'image"
              className="responsive-image"
            />
          </div>

          <div className="col-text">
            <span className="sup-title">Bonjour, je m'appelle</span>
            <h1 className="main-title" id="typing-text">
              {[...typed].map((char, index) => (
                <Fragment key={index}>
                  {HIGHLIGHTED.has(index) ? (
                    <span className="highlight-letter">{char}</span>
                  ) : (
                    char
                  )}
                </Fragment>
              ))}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
