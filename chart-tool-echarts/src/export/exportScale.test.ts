// @vitest-environment node
import { describe, it, expect } from 'vitest';
import { renderChartSvg, exportScale } from './renderStaticSvg';
import { CHART_REGISTRY } from '../charts/registry';
import { DEFAULT_STYLE } from '../charts/types';
import { FONT_STEPS } from '../charts/options/common';

function maxFont(svg: string): number {
  const re = /font-size[:=]\s*"?(\d+(?:\.\d+)?)/g;
  let m: RegExpExecArray | null;
  let max = 0;
  while ((m = re.exec(svg))) max = Math.max(max, parseFloat(m[1]));
  return max;
}

describe('export font scaling', () => {
  it('scale is 1× at the reference size, grows with area, and clamps', () => {
    expect(exportScale(640, 420)).toBe(1);
    expect(exportScale(1280, 840)).toBeCloseTo(2, 1);
    expect(exportScale(200, 150)).toBe(0.6); // clamped floor
    expect(exportScale(8000, 8000)).toBe(4); // clamped ceiling
  });

  it('bakes proportionally larger fonts into larger exports', () => {
    const def = CHART_REGISTRY.bar;
    const style = { ...DEFAULT_STYLE, ...def.defaultStyle };
    const base = {
      type: 'bar' as const,
      data: def.preset(),
      color: { variation: 'categorical' as const },
      style,
      mode: 'light' as const,
    };
    const small = maxFont(renderChartSvg({ ...base, width: 640, height: 420 }));
    const big = maxFont(renderChartSvg({ ...base, width: 1280, height: 840 }));
    expect(small).toBeGreaterThan(0);
    expect(big).toBeCloseTo(small * 2, 0);
  });

  it('only uses type-scale ladder font sizes (no odd values like 11/22)', () => {
    const allFonts = new Set<number>();
    const re = /font-size[:=]\s*"?(\d+(?:\.\d+)?)/g;
    for (const id of ['bar', 'pie', 'radar', 'gauge'] as const) {
      const def = CHART_REGISTRY[id];
      const style = { ...DEFAULT_STYLE, ...def.defaultStyle };
      for (const [width, height] of [[640, 420], [1280, 840]] as const) {
        const svg = renderChartSvg({ type: id, data: def.preset(), color: { variation: 'categorical' }, style, mode: 'light', width, height });
        let m: RegExpExecArray | null;
        while ((m = re.exec(svg))) allFonts.add(parseFloat(m[1]));
      }
    }
    expect(allFonts.size).toBeGreaterThan(0);
    for (const f of allFonts) expect(FONT_STEPS).toContain(f);
  });
});
