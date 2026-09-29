import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { CATEGORY_THEMES, PROJECT_CATEGORIES, PROJECTS } from "../../data/projects";

/* ---------- Carte projet ---------- */
function RealisationCard({ project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="realisations-card"
    >
      <div className="realisations-card-image">
        <span className="realisations-card-tag">{project.tag}</span>
        <img src={project.image} alt={project.alt} loading="lazy" />
      </div>
      <div className="realisations-card-body">
        <p className="realisations-card-title">{project.title}</p>
        <span className="realisations-card-link">
          Voir le projet <i className="fas fa-external-link-alt"></i>
        </span>
      </div>
    </a>
  );
}

/* ---------- Panneau (slider d'une catégorie) ---------- */
function RealisationPanel({ category, projects, isActive }) {
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(1);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateNavState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanPrev(track.scrollLeft > 4);
    setCanNext(track.scrollLeft < maxScroll - 4);
  }, []);

  // Largeur d'une carte + espacement = pas de défilement
  const getStep = () => {
    const track = trackRef.current;
    const card = track?.querySelector(".realisations-card");
    if (!card) return 0;
    const styles = window.getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap) || 22;
    return card.getBoundingClientRect().width + gap;
  };

  const scrollByDirection = (direction) => {
    const step = getStep();
    if (!step) return;
    trackRef.current.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  // Compteur : carte visible à au moins 60 %
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    const cards = Array.from(track.querySelectorAll(".realisations-card"));

    // Cartes actuellement visibles ; le compteur suit la première d'entre elles
    const visible = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cards.indexOf(entry.target);
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            visible.add(index);
          } else {
            visible.delete(index);
          }
        });
        if (visible.size > 0) setCurrent(Math.min(...visible) + 1);
        updateNavState();
      },
      { root: track, threshold: [0.6] },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [projects, updateNavState]);

  // Recalcule l'état des flèches à l'affichage du panneau et au redimensionnement
  useEffect(() => {
    if (!isActive) return undefined;
    const frame = requestAnimationFrame(updateNavState);
    window.addEventListener("resize", updateNavState);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateNavState);
    };
  }, [isActive, updateNavState]);

  return (
    <div className={`realisations-panel ${isActive ? "is-active" : ""}`.trim()} data-panel={category}>
      <div className="realisations-track-wrap">
        <div
          className="realisations-track"
          ref={trackRef}
          onScroll={updateNavState}
          data-track={category}
        >
          {projects.map((project) => (
            <RealisationCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className="realisations-controls">
        <button
          type="button"
          className="realisations-nav-btn"
          aria-label="Précédent"
          disabled={!canPrev}
          onClick={() => scrollByDirection(-1)}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <span className="realisations-counter">
          <b>{current}</b>/{projects.length}
        </span>
        <button
          type="button"
          className="realisations-nav-btn"
          aria-label="Suivant"
          disabled={!canNext}
          onClick={() => scrollByDirection(1)}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

/* ---------- Section ---------- */
export default function Realisations() {
  const [activeCategory, setActiveCategory] = useState(PROJECT_CATEGORIES[0].id);
  const [indicator, setIndicator] = useState({ width: 0, x: 0 });
  const tabsRef = useRef(null);
  const tabRefs = useRef({});

  const theme = CATEGORY_THEMES[activeCategory];

  // Positionne l'indicateur glissant sous l'onglet actif
  const moveIndicator = useCallback(() => {
    const tab = tabRefs.current[activeCategory];
    if (!tab) return;
    setIndicator({ width: tab.offsetWidth, x: tab.offsetLeft - 5 });
  }, [activeCategory]);

  useLayoutEffect(() => {
    moveIndicator();
  }, [moveIndicator]);

  useEffect(() => {
    const container = tabsRef.current;
    if (!container) return undefined;
    const observer = new ResizeObserver(moveIndicator);
    observer.observe(container);
    window.addEventListener("resize", moveIndicator);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", moveIndicator);
    };
  }, [moveIndicator]);

  return (
    <section
      id="realisation"
      className="realisations-section"
      style={{ "--accent": theme.accent, "--accent-soft": theme.soft }}
    >
      <div className="container">
        <div className="realisations-header">
          <h1 className="realisations-title">
            Mes <span className="realisations-title-color">Réalisations</span>
          </h1>

          <div className="realisations-tabs" role="tablist" ref={tabsRef}>
            <div
              className="realisations-indicator"
              id="realisationsIndicator"
              style={{
                width: `${indicator.width}px`,
                transform: `translateX(${indicator.x}px)`,
                background: theme.grad,
              }}
            ></div>

            {PROJECT_CATEGORIES.map(({ id, label, icon }) => (
              <button
                key={id}
                type="button"
                ref={(el) => {
                  tabRefs.current[id] = el;
                }}
                className={`realisations-tab ${activeCategory === id ? "is-active" : ""}`.trim()}
                role="tab"
                aria-selected={activeCategory === id}
                onClick={() => setActiveCategory(id)}
              >
                <i className={`fas ${icon}`}></i>
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="realisations-viewport">
          {PROJECT_CATEGORIES.map(({ id }) => (
            <RealisationPanel
              key={id}
              category={id}
              projects={PROJECTS[id]}
              isActive={activeCategory === id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
