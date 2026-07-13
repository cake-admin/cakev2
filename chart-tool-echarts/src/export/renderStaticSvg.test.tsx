// @vitest-environment node
// ECharts SSR needs no DOM; the node env avoids jsdom's stub <canvas> throwing
// during text measurement (and matches how the gallery renders under vite-node).
import { describe, it, expect } from 'vitest';
import { renderChartSvg } from './renderStaticSvg';
import { CHART_IDS, CHART_REGISTRY } from '../charts/registry';
import { DEFAULT_STYLE } from '../charts/types';

describe('ECharts SVG export', () => {
  it.each(CHART_IDS)('renders %s as a clean, text-bearing SVG (light + dark)', (id) => {
    const def = CHART_REGISTRY[id];
    const style = { ...DEFAULT_STYLE, ...def.defaultStyle };
    (['light', 'dark'] as const).forEach((mode) => {
      const svg = renderChartSvg({
        type: id,
        data: def.preset(),
        color: { variation: 'categorical' },
        style,
        mode,
      });
      expect(svg.startsWith('<svg')).toBe(true);
      expect(svg).toContain('<title>'); // accessible handoff
      expect(svg).toContain('<text'); // real text, not raster
      expect(svg).not.toContain('foreignObject');
      expect(svg).not.toContain('onmouse'); // no interactivity leaked into export
      // Malformed-XML guard: font-family must be single-quoted so it nests in
      // the double-quoted style="…" attribute. Double quotes break the XML and
      // Figma refuses to import ("unable to reproduce SVG").
      expect(svg).not.toContain('"Rookery New"');
      expect(svg).toContain("'Rookery New'");
      // Figma ignores dominant-baseline; centering must be baked into dy instead.
      expect(svg).not.toContain('dominant-baseline="central"');
    });
  });

  it('embeds the mode-appropriate surface as the background', () => {
    const def = CHART_REGISTRY.bar;
    const style = { ...DEFAULT_STYLE, ...def.defaultStyle };
    const light = renderChartSvg({ type: 'bar', data: def.preset(), color: { variation: 'categorical' }, style, mode: 'light' });
    const dark = renderChartSvg({ type: 'bar', data: def.preset(), color: { variation: 'categorical' }, style, mode: 'dark' });
    expect(light).not.toEqual(dark); // light/dark are distinct token-driven renders
  });
});
