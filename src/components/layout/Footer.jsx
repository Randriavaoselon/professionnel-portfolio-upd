import { FOOTER_LINKS, SITE } from "../../data/site";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row footer-row">
          <div className="col-footer-left">
            <h1 className="footer-logo">
              MON<span className="text-gold"> PORTFOLIO</span>
            </h1>
            <h4 className="footer-tagline">{SITE.tagline}</h4>

            <nav className="footer-nav">
              <ul>
                {FOOTER_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="col-footer-right">
            <p className="footer-address">
              <i className="fas fa-map-marker-alt"></i>
              {SITE.address}
            </p>
            <div className="footer-map">
              <iframe
                title="Localisation — Mahajanga, Madagascar"
                src={SITE.mapEmbedUrl}
                width="100%"
                height="120"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>&copy; {SITE.year} Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
