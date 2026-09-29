import { useEffect, useState } from "react";

/** true lorsque la page a défilé de plus de `threshold` pixels. */
export function useScrollThreshold(threshold = 300) {
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setPassed(y > threshold);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return passed;
}
