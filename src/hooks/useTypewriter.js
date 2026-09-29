import { useEffect, useState } from "react";

/**
 * Effet machine à écrire : renvoie le texte tapé caractère par caractère.
 * @param {string} text  Texte complet
 * @param {number} speed Délai entre deux caractères (ms)
 */
export function useTypewriter(text, speed = 70) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let index = 0;
    setCount(0);

    const timer = setInterval(() => {
      index += 1;
      setCount(index);
      if (index >= text.length) clearInterval(timer);
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return text.slice(0, count);
}
