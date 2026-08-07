import { describe, it, expect } from 'vitest';
import { stackSegmentRadius } from './stackRadius';
import { fillStyle, hctDecal, wireframeDecal } from './wireframe';
import type { ChartContext } from './common';
import { DEFAULT_STYLE } from '../types';

describe('stackSegmentRadius', () => {
  it('rounds only the top of a vertical stack (bottom stays sharp)', () => {
    const values = [10, 20, 30];
    const r = 12;
    expect(stackSegmentRadius(values, 0, false, r)).toBe(0); // bottom / axis end
    expect(stackSegmentRadius(values, 1, false, r)).toBe(0); // middle
    expect(stackSegmentRadius(values, 2, false, r)).toEqual([r, r, 0, 0]); // top
  });

  it('rounds only the far end of a horizontal stack (axis end stays sharp)', () => {
    const values = [5, 5, 5];
    const r = 12;
    expect(stackSegmentRadius(values, 0, true, r)).toBe(0); // left / axis end
    expect(stackSegmentRadius(values, 1, true, r)).toBe(0);
    expect(stackSegmentRadius(values, 2, true, r)).toEqual([0, r, r, 0]); // right
  });

  it('skips zero segments when finding the outer end', () => {
    const values = [0, 10, 0, 20];
    const r = 8;
    expect(stackSegmentRadius(values, 0, false, r)).toBe(0);
    expect(stackSegmentRadius(values, 1, false, r)).toBe(0);
    expect(stackSegmentRadius(values, 2, false, r)).toBe(0);
    expect(stackSegmentRadius(values, 3, false, r)).toEqual([r, r, 0, 0]);
  });

  it('rounds only the outer end of a lone visible segment', () => {
    expect(stackSegmentRadius([0, 12, 0], 1, false, 12)).toEqual([12, 12, 0, 0]);
    expect(stackSegmentRadius([0, 12, 0], 1, true, 12)).toEqual([0, 12, 12, 0]);
  });
});

describe('wireframeDecal', () => {
  const baseCtx = {
    type: 'bar' as const,
    data: { kind: 'series' as const, series: [] },
    color: { variation: 'secondary' as const },
    style: DEFAULT_STYLE,
    theme: { mode: 'light' as const },
  } as unknown as ChartContext;

  it('returns no decal for the first 6 wireframe shades', () => {
    for (let i = 0; i < 6; i++) {
      expect(wireframeDecal(baseCtx, i)).toBeUndefined();
    }
  });

  it('returns a pattern decal from the 7th mark onward', () => {
    const d = wireframeDecal(baseCtx, 6);
    expect(d).toBeDefined();
    expect(d?.symbol).toBeTruthy();
    expect(d?.color).toMatch(/rgba/);
  });

  it('does nothing outside wireframe mode', () => {
    const ctx = { ...baseCtx, color: { variation: 'categorical' as const } } as ChartContext;
    expect(wireframeDecal(ctx, 10)).toBeUndefined();
  });
});

describe('hctDecal', () => {
  const palette = ['#75e9fc', '#ffffff', '#a6a6a6', '#8ee3f0', '#75e9fc', '#ffffff'];
  const hctCtx = {
    type: 'bar' as const,
    data: { kind: 'series' as const, series: [] },
    color: { variation: 'categorical' as const },
    style: DEFAULT_STYLE,
    theme: {
      mode: 'hct' as const,
      surface: { canvas: '#202020', card: '#202020' },
      color: {
        resolve: (_cfg: unknown, count: number) =>
          Array.from({ length: count }, (_, i) => palette[i % palette.length]),
      },
    },
  } as unknown as ChartContext;

  it('leaves the first clearly distinct HCT stops unpatterned', () => {
    expect(hctDecal(hctCtx, 0, palette[0])).toBeUndefined();
    expect(hctDecal(hctCtx, 1, palette[1])).toBeUndefined();
    expect(hctDecal(hctCtx, 2, palette[2])).toBeUndefined();
  });

  it('patterns from the 4th categorical mark onward', () => {
    const d = hctDecal(hctCtx, 3, palette[3]);
    expect(d).toBeDefined();
    expect(d?.symbol).toBeTruthy();
  });

  it('patterns a recycled cyan that collides with an earlier series', () => {
    const d = hctDecal(hctCtx, 4, palette[4]);
    expect(d).toBeDefined();
  });

  it('does nothing in light mode', () => {
    const ctx = {
      ...hctCtx,
      theme: { ...hctCtx.theme, mode: 'light' as const },
    } as unknown as ChartContext;
    expect(hctDecal(ctx, 10, '#75e9fc')).toBeUndefined();
  });

  it('does not pattern solid primary variation', () => {
    const ctx = {
      ...hctCtx,
      color: { variation: 'primary' as const },
    } as unknown as ChartContext;
    expect(hctDecal(ctx, 5, '#8ee3f0')).toBeUndefined();
  });
});

describe('fillStyle', () => {
  it('attaches HCT decals without breaking wireframe attachment', () => {
    const wf = {
      type: 'bar' as const,
      data: { kind: 'series' as const, series: [] },
      color: { variation: 'secondary' as const },
      style: DEFAULT_STYLE,
      theme: { mode: 'dark' as const },
    } as unknown as ChartContext;
    expect(fillStyle(wf, '#888', 6).decal).toBeDefined();
    expect(fillStyle(wf, '#888', 0).decal).toBeUndefined();
  });
});
