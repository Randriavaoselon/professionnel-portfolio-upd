import { useEffect, useRef, useState } from "react";
import { SITE } from "../../data/site";

export default function Presentation() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  // L'attribut `muted` de <video> doit être piloté via la propriété DOM
  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted;
  }, [muted]);

  return (
    <section id="presentation" className="presentation-section">
      <div className="container">
        <div className="row presentation-row">
          <div className="col-video">
            <div className="video-wrapper" style={{ position: "relative" }}>
              <video
                id="myVideo"
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="presentation-video"
              >
                <source src={SITE.videoUrl} type="video/webm" />
              </video>

              <button
                type="button"
                id="muteBtn"
                className="mute-control"
                onClick={() => setMuted((value) => !value)}
                aria-label={muted ? "Activer le son" : "Couper le son"}
              >
                <i className={`fas ${muted ? "fa-volume-mute" : "fa-volume-up"}`}></i>
              </button>
            </div>
          </div>

          <div className="col-text-presentation">
            <span className="mini-subtitle">Innovation &amp; Technologie</span>
            <h3 className="presentation-title">
              C’est en <span className="presentation-title-color">forgeant</span> qu’on{" "}
              <span className="presentation-title-color">devient</span> forgeron
            </h3>
            <br />
            <p className="presentation-description">
              À travers mes projets, je m'efforce de repousser les limites du possible en
              intégrant des architectures backend robustes avec les dernières avancées en
              intelligence artificielle. Chaque ligne de code est pensée pour offrir une
              expérience utilisateur fluide et impactante.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
