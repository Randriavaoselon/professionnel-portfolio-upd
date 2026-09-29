import { useScrollThreshold } from "../../hooks/useScrollThreshold";

export default function ScrollTopButton() {
  const visible = useScrollThreshold(300);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      id="scrollTopBtn"
      className={`scroll-top-btn ${visible ? "show" : ""}`.trim()}
      onClick={scrollToTop}
      aria-label="Revenir en haut de la page"
    >
      <i className="fas fa-chevron-up"></i>
    </button>
  );
}
