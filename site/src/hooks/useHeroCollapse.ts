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
  const lockedHeightRef = useRef(0);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const hero = heroRef.current;
    if (!section || !hero) return undefined;

    let raf = 0;
    let resizeTimer = 0;

    const updateProgress = () => {
      const scrollY = window.scrollY;
      const top = section.offsetTop;
      const raw = clamp((scrollY - top) / collapseRangeRef.current, 0, 1);
      hero.style.setProperty('--hero-progress', smoothstep(raw).toFixed(4));
    };

    const lockSectionHeight = () => {
      const measured = section.offsetHeight;
      if (measured <= 0) return;
      lockedHeightRef.current = measured;
      section.style.minHeight = `${measured}px`;
      collapseRangeRef.current = Math.max(measured - COMPACT_VISUAL_H, 120);
    };

    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateProgress);
    };

    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        lockSectionHeight();
        updateProgress();
      }, 150);
    };

    lockSectionHeight();
    updateProgress();

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    const ro = new ResizeObserver(() => {
      const measured = section.offsetHeight;
      if (Math.abs(measured - lockedHeightRef.current) > 2) {
        lockSectionHeight();
        updateProgress();
      }
    });
    ro.observe(section);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(resizeTimer);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', onResize);
      ro.disconnect();
    };
  }, []);

  return { sectionRef, heroRef };
}
