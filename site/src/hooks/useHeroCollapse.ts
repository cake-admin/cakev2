import { useLayoutEffect, useRef, type RefObject } from 'react';

const COMPACT_VISUAL_H = 88;

function smoothstep(t: number) {
  return t * t * (3 - 2 * t);
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export interface HeroCollapseRefs {
  sectionRef: RefObject<HTMLDivElement | null>;
  heroRef: RefObject<HTMLElement | null>;
}

/** Drive `--hero-progress` from scroll into a fixed-height hero section (no layout feedback loop). */
export function useHeroCollapse(): HeroCollapseRefs {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const collapseRangeRef = useRef(160);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const hero = heroRef.current;
    if (!section || !hero) return undefined;

    let raf = 0;

    const updateProgress = () => {
      const scrollY = window.scrollY;
      const top = section.offsetTop;
      const raw = clamp((scrollY - top) / collapseRangeRef.current, 0, 1);
      hero.style.setProperty('--hero-progress', smoothstep(raw).toFixed(4));
    };

    const syncSectionMetrics = () => {
      hero.style.setProperty('--hero-progress', '0');
      const height = section.offsetHeight;
      section.style.minHeight = `${height}px`;
      collapseRangeRef.current = Math.max(height - COMPACT_VISUAL_H, 120);
      updateProgress();
    };

    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateProgress);
    };

    syncSectionMetrics();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', syncSectionMetrics, { passive: true });

    const ro = new ResizeObserver(syncSectionMetrics);
    ro.observe(section);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', syncSectionMetrics);
      ro.disconnect();
    };
  }, []);

  return { sectionRef, heroRef };
}
