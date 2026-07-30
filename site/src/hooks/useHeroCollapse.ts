import { useLayoutEffect, useRef, type RefObject } from 'react';

/** Collapsed sticky bar height (px). */
const COMPACT_HEIGHT = 80;

/** Scroll distance (px) over which the hero transitions from expanded to compact. */
const COLLAPSE_RANGE = 200;

function smoothstep(t: number) {
  return t * t * (3 - 2 * t);
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

/**
 * Drives `--hero-progress` on the sticky hero from scroll position (0 → 1).
 * Visual collapse uses transform/opacity/clip-path only — never layout properties —
 * so shrinking the header cannot feed back into scroll position and cause jitter.
 */
export function useHeroCollapse(): RefObject<HTMLElement | null> {
  const heroRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    if (!hero) return undefined;

    let raf = 0;

    const syncExpandedHeight = () => {
      hero.style.setProperty('--hero-compact-h', `${COMPACT_HEIGHT}px`);
      hero.style.setProperty('--hero-expanded-h', `${hero.offsetHeight}px`);
    };

    const updateProgress = () => {
      raf = 0;
      const raw = clamp(window.scrollY / COLLAPSE_RANGE, 0, 1);
      hero.style.setProperty('--hero-progress', smoothstep(raw).toFixed(4));
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

    return () => {
      if (raf !== 0) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', onResize);
      ro.disconnect();
    };
  }, []);

  return heroRef;
}
