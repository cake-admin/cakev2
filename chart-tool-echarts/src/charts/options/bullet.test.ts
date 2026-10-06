// @vitest-environment node
import { describe, it, expect } from 'vitest';
import { buildOption } from './buildOption';
import { bulletRows, bulletModel } from './bullet';
import { bulletPreset, bulletSectionsPreset } from '../../data/presets';
import { CHART_REGISTRY } from '../registry';
import { DEFAULT_STYLE } from '../types';
import { buildChartTheme } from '../../theme/buildChartTheme';
import { TOKENS } from '../../tokens/loadTokens';
import { renderChartSvg } from '../../export/renderStaticSvg';
import { genId, type SeriesData } from '../../data/dataModel';

const theme = buildChartTheme(TOKENS, 'dark');

function optionFor(data: SeriesData) {
  const def = CHART_REGISTRY.bullet;
  return buildOption({
    type: 'bullet',
    data,
    color: { variation: 'categorical' },
    style: { ...DEFAULT_STYLE, ...def.defaultStyle },
    theme,
  });
}

describe('bullet chart', () => {
  it('draws a target marker for every row and keeps the first row at the top', () => {
    const data = bulletPreset();
    const rows = bulletRows(data);
    const option = optionFor(data);
    const yAxis = option.yAxis as { inverse?: boolean; data?: string[] };
    const series = option.series as Array<{ type?: string; data?: unknown[] }>;
    const marker = series.find((s) => s.type === 'scatter');

    expect(yAxis.inverse).toBe(true);
    expect(yAxis.data).toEqual(rows.map((row) => row.key));
    expect(marker?.data).toEqual(rows.map((row) => [row.target, row.key]));
    expect(rows[0]).toMatchObject({ label: 'ISG', subtitle: 'M. Tan', value: 76, target: 96, track: 100 });
  });

  it('sizes a missing or zero max to the larger of value and target', () => {
    const data: SeriesData = {
      kind: 'series',
      series: [
        { id: genId('series'), name: 'Value', points: [{ x: 'Only', y: 30, note: 'One row' }] },
        { id: genId('series'), name: 'Target', points: [{ x: 'Only', y: 80 }] },
      ],
    };
    expect(bulletRows(data)[0]).toMatchObject({ value: 30, target: 80, track: 80 });
  });

  it('omits the marker when there is no target series', () => {
    const data: SeriesData = {
      kind: 'series',
      series: [{ id: genId('series'), name: 'Value', points: [{ x: 'Only', y: 40 }] }],
    };
    const series = optionFor(data).series as Array<{ type?: string }>;
    expect(series.some((s) => s.type === 'scatter')).toBe(false);
    expect(bulletRows(data)[0].track).toBe(40);
  });

  it('exports both label lines as text', () => {
    const def = CHART_REGISTRY.bullet;
    const svg = renderChartSvg({
      type: 'bullet',
      data: bulletPreset(),
      color: { variation: 'categorical' },
      style: { ...DEFAULT_STYLE, ...def.defaultStyle },
      mode: 'dark',
    });
    expect(svg).toContain('ISG');
    expect(svg).toContain('M. Tan');
    expect(svg).not.toContain('{note|');
    expect(svg).toContain('Target');
  });

  it('stacks a section per status and keeps one target marker', () => {
    const data = bulletSectionsPreset();
    const model = bulletModel(data, true);
    const def = CHART_REGISTRY.bullet;
    const option = buildOption({
      type: 'bullet',
      data,
      color: { variation: 'categorical' },
      style: { ...DEFAULT_STYLE, ...def.defaultStyle, bulletSections: true },
      theme,
    });
    const series = option.series as Array<{ type?: string; name?: string; stack?: string; data?: unknown[] }>;
    const stacked = series.filter((s) => s.stack === 'sections');

    expect(stacked.map((s) => s.name)).toEqual(['Sent', 'Not yet sent', 'Accepted', 'Rejected']);
    expect(model.rows[0].sections).toEqual([36, 14, 22, 8]);
    expect(model.rows[0].value).toBe(80);
    expect(model.rows[0].target).toBe(96);
    const marker = series.find((s) => s.type === 'scatter');
    expect(marker?.data).toEqual(model.rows.map((row) => [row.target, row.key]));

    const svg = renderChartSvg({
      type: 'bullet',
      data,
      color: { variation: 'categorical' },
      style: { ...DEFAULT_STYLE, ...def.defaultStyle, bulletSections: true },
      mode: 'dark',
    });
    expect(svg).toContain('Sent');
    expect(svg).toContain('Rejected');
    expect(svg).toContain('M. Tan');
    expect(svg).not.toContain('{note|');
  });

  it('writes the target value beside the marker when direct labels are on', () => {
    const data = bulletPreset();
    const def = CHART_REGISTRY.bullet;
    const style = { ...DEFAULT_STYLE, ...def.defaultStyle, showDirectLabels: true };
    const option = buildOption({
      type: 'bullet',
      data,
      color: { variation: 'categorical' },
      style,
      theme,
    });
    const marker = (option.series as Array<{ type?: string; label?: { show?: boolean; formatter?: string } }>).find(
      (s) => s.type === 'scatter',
    );
    expect(marker?.label?.show).toBe(true);
    expect(marker?.label?.formatter).toBe('{@[0]}');

    const svg = renderChartSvg({
      type: 'bullet',
      data,
      color: { variation: 'categorical' },
      style,
      mode: 'dark',
    });
    expect(svg).toContain('>96<');
  });

  it('hides the marker and the track without dropping sections', () => {
    const data = bulletSectionsPreset();
    const model = bulletModel(data, true, { target: false, max: false });
    const def = CHART_REGISTRY.bullet;
    const option = buildOption({
      type: 'bullet',
      data,
      color: { variation: 'categorical' },
      style: {
        ...DEFAULT_STYLE,
        ...def.defaultStyle,
        bulletSections: true,
        bulletShowTarget: false,
        bulletShowMax: false,
      },
      theme,
    });
    const series = option.series as Array<{ type?: string; name?: string }>;

    expect(model.sectionNames).toEqual(['Sent', 'Not yet sent', 'Accepted', 'Rejected']);
    expect(model.rows[0].target).toBeNull();
    expect(model.rows[0].track).toBe(80);
    expect(series.map((s) => s.name)).toEqual(['Sent', 'Not yet sent', 'Accepted', 'Rejected']);
    expect(series.some((s) => s.type === 'scatter')).toBe(false);
  });
});
