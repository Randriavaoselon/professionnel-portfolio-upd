import { useEffect, useState } from "react";

/**
 * Renvoie la classe d état du header selon le sens du défilement :
 *  - "" : tout en haut de la page (transparent)
 *  - "show-on-down" : on descend → header affiché
 *  - "hide-on-up" : on remonte → header caché
 */
export function useHeaderScroll(threshold = 100) {
  const [stateClass, setStateClass] = useState("");

  useEffect(() => {
    let lastScrollTop = 0;

    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop <= threshold) {
        setStateClass("");
      } else if (scrollTop > lastScrollTop) {
        setStateClass("show-on-down");
      } else {
        setStateClass("hide-on-up");
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return stateClass;
}
