import { useEffect, useState } from 'react';

/** Scroll progress from 0 (top) to 1 (fully collapsed) over `range` pixels. */
export function useHeroCollapse(range = 160) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      const next = Math.min(1, Math.max(0, window.scrollY / range));
      setProgress((prev) => (Math.abs(prev - next) < 0.002 ? prev : next));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
    };
  }, [range]);

  return progress;
}

export function lerp(start: number, end: number, t: number) {
  return start + (end - start) * t;
}
