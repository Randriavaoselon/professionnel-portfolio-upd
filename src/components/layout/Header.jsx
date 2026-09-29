import logo from "../../assets/images/logo-rb.png";
import { SITE } from "../../data/site";
import { useHeaderScroll } from "../../hooks/useHeaderScroll";

export default function Header() {
  const scrollClass = useHeaderScroll();

  return (
    <header className={`main-header ${scrollClass}`.trim()}>
      <div className="header-container">
        {/* Partie gauche : logo */}
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Logo Projet" />
          </a>
        </div>

        {/* Partie droite : titre et sous-titre */}
        <div className="header-text-block">
          <h2 className="header-title">{SITE.headerTitle}</h2>
          <p className="header-subtitle">{SITE.headerSubtitle}</p>
        </div>
      </div>
    </header>
  );
}
