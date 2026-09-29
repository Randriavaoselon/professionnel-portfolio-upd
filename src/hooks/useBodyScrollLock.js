import { useEffect } from "react";

/** Bloque le défilement de la page tant que `locked` est vrai (modale ouverte). */
export function useBodyScrollLock(locked) {
  useEffect(() => {
    if (!locked) return undefined;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [locked]);
}
