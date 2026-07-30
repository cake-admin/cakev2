import { useLayoutEffect, useRef, useState, type RefObject } from 'react';

/** Collapsed sticky bar height (px) — fits 48px icon buttons with vertical padding. */
const COMPACT_HEIGHT = 88;

/** Vertical inset for the compact wordmark row within the sticky bar. */
const COMPACT_INSET = 16;

/** Scroll distance (px) over which the hero transitions from expanded to compact. */
const COLLAPSE_RANGE = 200;

function smoothstep(t: number) {
  return t * t * (3 - 2 * t);
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export interface HeroCollapseState {
  heroRef: RefObject<HTMLElement | null>;
  progress: number;
}

/**
 * Drives `--hero-progress` on the sticky hero from scroll position (0 → 1).
 * Visual collapse uses transform/opacity/clip-path only — never layout properties —
 * so shrinking the header cannot feed back into scroll position and cause jitter.
 */
export function useHeroCollapse(): HeroCollapseState {
  const heroRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    if (!hero) return undefined;

    let raf = 0;

    const syncExpandedHeight = () => {
      hero.style.setProperty('--hero-compact-h', `${COMPACT_HEIGHT}px`);
      const expandedH = hero.offsetHeight;
      hero.style.setProperty('--hero-expanded-h', `${expandedH}px`);

      const inner = hero.firstElementChild as HTMLElement | null;
      const shift = inner
        ? Math.max(inner.offsetTop - COMPACT_INSET, 0)
        : Math.max(expandedH - COMPACT_HEIGHT, 0);
      hero.style.setProperty('--hero-shift', `${shift}px`);
    };

    const updateProgress = () => {
      raf = 0;
      const raw = clamp(window.scrollY / COLLAPSE_RANGE, 0, 1);
      const next = smoothstep(raw);
      hero.style.setProperty('--hero-progress', next.toFixed(4));
      setProgress(next);
    };

    const schedule = () => {
      if (raf !== 0) return;
      raf = requestAnimationFrame(updateProgress);
    };

    const onResize = () => {
      syncExpandedHeight();
      schedule();
    };

    syncExpandedHeight();
    updateProgress();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    const ro = new ResizeObserver(onResize);
    ro.observe(hero);
    const inner = hero.firstElementChild;
    if (inner instanceof HTMLElement) {
      ro.observe(inner);
    }

    return () => {
      if (raf !== 0) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', onResize);
      ro.disconnect();
    };
  }, []);

  return { heroRef, progress };
}
