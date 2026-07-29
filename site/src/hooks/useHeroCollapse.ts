import { useLayoutEffect, useRef, type RefObject } from 'react';

const COLLAPSE_RANGE = 180;

function smoothstep(t: number) {
  return t * t * (3 - 2 * t);
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

/** Drives --hero-progress on the hero from scroll position (0 → 1 over COLLAPSE_RANGE px). */
export function useHeroCollapse(): RefObject<HTMLElement | null> {
  const heroRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    if (!hero) return undefined;

    let raf = 0;

    const updateProgress = () => {
      const raw = clamp(window.scrollY / COLLAPSE_RANGE, 0, 1);
      hero.style.setProperty('--hero-progress', smoothstep(raw).toFixed(4));
    };

    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  return heroRef;
}
