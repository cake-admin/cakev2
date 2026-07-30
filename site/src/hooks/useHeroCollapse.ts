import { useLayoutEffect, useRef, useState, type RefObject } from 'react';

/** Collapsed sticky bar height (px) — fits 48px icon buttons with vertical padding. */
const COMPACT_HEIGHT = 88;

/** Icon row height in the compact bar — matches IconButton `lg` (48px). */
const COMPACT_ROW_HEIGHT = 48;

/** Scroll distance (px) over which the hero transitions from expanded to compact. */
const COLLAPSE_RANGE = 200;

/** Reach the final compact vertical position earlier than full visual collapse. */
const PIN_RANGE = 0.65;

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

      const paddingTop = Number.parseFloat(getComputedStyle(hero).paddingTop) || 0;
      const paddingBottom = Number.parseFloat(getComputedStyle(hero).paddingBottom) || 0;
      const inner = hero.querySelector('[data-hero-inner]');
      const flowH =
        inner instanceof HTMLElement ? inner.offsetHeight : 0;
      const expandedH = paddingTop + flowH + paddingBottom;

      hero.style.setProperty('--hero-expanded-h', `${expandedH}px`);
      hero.style.setProperty('--hero-padding-top', `${paddingTop}px`);
      hero.style.setProperty('--hero-padding-bottom', `${paddingBottom}px`);
      hero.style.setProperty('--hero-flow-h', `${flowH}px`);
      hero.style.setProperty('--hero-surface-h', `${flowH}px`);
      hero.style.setProperty(
        '--hero-compact-top',
        `${(COMPACT_HEIGHT - COMPACT_ROW_HEIGHT) / 2}px`,
      );
    };

    const updateProgress = () => {
      raf = 0;
      const raw = clamp(window.scrollY / COLLAPSE_RANGE, 0, 1);
      const next = smoothstep(raw);
      const pinRaw = clamp(window.scrollY / (COLLAPSE_RANGE * PIN_RANGE), 0, 1);
      const pinNext = smoothstep(pinRaw);
      hero.style.setProperty('--hero-progress', next.toFixed(4));
      hero.style.setProperty('--hero-pin-progress', pinNext.toFixed(4));
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
    const inner = hero.querySelector('[data-hero-inner]');
    if (inner instanceof HTMLElement) {
      ro.observe(inner);
    }
    const surface = hero.querySelector('[data-hero-surface]');
    if (surface instanceof HTMLElement) {
      ro.observe(surface);
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
