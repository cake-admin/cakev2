import { useEffect, useRef } from 'react';

const DEFAULT_RANGE = 160;

/** Attach to the sticky hero and drive `--hero-progress` (0–1) from scroll. */
export function useHeroCollapse(range = DEFAULT_RANGE) {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = heroRef.current;
    if (!node) return undefined;

    let raf = 0;

    const update = () => {
      const progress = Math.min(1, Math.max(0, window.scrollY / range));
      node.style.setProperty('--hero-progress', progress.toFixed(4));
    };

    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [range]);

  return heroRef;
}
