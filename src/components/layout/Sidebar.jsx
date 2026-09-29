import { SIDEBAR_LINKS, SITE } from "../../data/site";

/** Menu latéral rétractable (déployé au survol, masqué sous 1024px). */
export default function Sidebar() {
  return (
    <aside className="sidebar-menu" id="sidebar">
      <div className="sidebar-content">
        <ul className="sidebar-links">
          {SIDEBAR_LINKS.map(({ href, icon, label }) => (
            <li key={href}>
              <a href={href}>
                <i className={`fas ${icon}`}></i>
                <span className="link-text">{label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="sidebar-footer">
          <a href={SITE.cvUrl} className="cv-download-btn" download>
            <i className="fas fa-file-download"></i>
            <span className="link-text">Télécharger CV</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
