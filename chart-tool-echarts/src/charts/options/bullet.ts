import type { EChartsOption } from 'echarts';
import { formatHex, interpolate } from 'culori';
import { isSeries, type Series, type SeriesData } from '../../data/dataModel';
import { SEGMENT_GAP } from '../types';
import {
  animationOpts,
  axisCommon,
  FONT,
  fs,
  gridFor,
  headerGraphic,
  legendFor,
  markStates,
  px,
  readableText,
  seriesColors,
  tooltipFor,
  withSource,
  type ChartContext,
} from './common';

/**
 * Filled I-beam, drawn slightly taller than the bar. ECharts scales `path://`
 * symbols into `symbolSize`, so the caps stay in proportion.
 */
const TARGET_SYMBOL =
  'path://M0,0 H12 V2.4 H7.15 V19.6 H12 V22 H0 V19.6 H4.85 V2.4 H0 Z';

interface BulletRow {
  key: string;
  label: string;
  subtitle: string;
  /** Section values, left to right. One entry in single-fill mode. */
  sections: number[];
  /** Sum of `sections`. */
  value: number;
  /** Marker position. Null when the dataset has no target series. */
  target: number | null;
  /** Background track. A stored max of 0 sizes this to the larger of value and target. */
  track: number;
}

/**
 * Pill radii for one stacked section. The first visible section rounds the left
 * end, the last visible section rounds the right end, and a lone section is a
 * full pill. Zero-width sections are skipped.
 */
export function bulletSegmentRadius(values: number[], index: number, r: number): number | number[] {
  let first = -1;
  let last = -1;
  for (let i = 0; i < values.length; i++) {
    if (values[i] > 0) {
      if (first < 0) first = i;
      last = i;
    }
  }
  if (first < 0 || (index !== first && index !== last)) return 0;
  const left = index === first;
  const right = index === last;
  if (left && right) return r;
  return left ? [r, 0, 0, r] : [0, r, r, 0];
}

/**
 * Rows plus the series that play each role.
 * Single fill: series[0] value, [1] target, [2] track.
 * Sections: every series except the last two is a section; the second-to-last
 * is the target and the last is the track. Fewer than three series cannot
 * reserve both roles, so they stay sections (and a target, when a second exists).
 */
export function bulletModel(
  data: SeriesData,
  sectionsOn: boolean,
  marks: { target?: boolean; max?: boolean } = {},
): {
  rows: BulletRow[];
  sectionNames: string[];
  targetName: string;
  trackName: string;
} {
  const showTarget = marks.target !== false;
  const showMax = marks.max !== false;
  const series = data.series;
  let sectionSeries = series.slice(0, 1);
  let targetSeries: Series | undefined = series[1];
  let maxSeries: Series | undefined = series[2];
  if (sectionsOn) {
    if (series.length >= 3) {
      sectionSeries = series.slice(0, -2);
      targetSeries = series[series.length - 2];
      maxSeries = series[series.length - 1];
    } else if (series.length === 2) {
      sectionSeries = series.slice(0, 1);
      targetSeries = series[1];
      maxSeries = undefined;
    } else {
      sectionSeries = series.slice(0, 1);
      targetSeries = undefined;
      maxSeries = undefined;
    }
  }
  if (!showTarget) targetSeries = undefined;
  if (!showMax) maxSeries = undefined;

  const labelPoints = sectionSeries[0]?.points ?? [];
  const rows = labelPoints.map((p, i) => {
    const sections = sectionSeries.map((s) => Math.max(0, s.points[i]?.y ?? 0));
    const value = sections.reduce((sum, n) => sum + n, 0);
    const target = targetSeries ? Math.max(0, targetSeries.points[i]?.y ?? 0) : null;
    const rawMax = maxSeries?.points[i]?.y ?? 0;
    const track = rawMax > 0 ? rawMax : Math.max(value, target ?? 0);
    return {
      key: String(i),
      label: p.x,
      subtitle: p.note?.trim() ?? '',
      sections,
      value,
      target,
      track,
    };
  });

  return {
    rows,
    sectionNames: sectionSeries.map((s, i) => s.name?.trim() || (sectionsOn ? `Section ${i + 1}` : 'Value')),
    targetName: targetSeries ? targetSeries.name?.trim() || 'Target' : '',
    trackName: maxSeries?.name?.trim() || 'Maximum',
  };
}

/** Single-fill rows (target marker + track). */
export function bulletRows(data: SeriesData): BulletRow[] {
  return bulletModel(data, false).rows;
}

/** Same-hue track: the accent stepped toward the card so it reads behind the fill. */
function trackColor(card: string, accent: string): string {
  const mix = interpolate([card, accent], 'oklab');
  return (mix && formatHex(mix(0.42))) || accent;
}

function bindSource<F extends (...args: never[]) => unknown>(src: string): F {
  const fn = new Function(`return (${src})`)() as F;
  return withSource(fn, src);
}

function axisLabelSource(rows: BulletRow[]): string {
  const map = JSON.stringify(
    Object.fromEntries(rows.map((r) => [r.key, { label: r.label, subtitle: r.subtitle }])),
  );
  // Built as plain strings so the rich-text braces stay in the generated source.
  // The emitted function closes `{label|…}` before the newline, then `{note|…}`.
  return [
    'function (value) {',
    `  var rows = ${map};`,
    "  var row = rows[String(value)] || { label: String(value), subtitle: '' };",
    "  var name = String(row.label).replace(/[{}|]/g, '');",
    "  var sub = String(row.subtitle || '').replace(/[{}|]/g, '');",
    "  if (!sub) return '{label|' + name + '}';",
    "  return '{label|' + name + '}\\n{note|' + sub + '}';",
    '}',
  ].join('\n');
}

function tooltipSource(rows: BulletRow[]): string {
  const map = Object.fromEntries(rows.map((r) => [r.key, { label: r.label, subtitle: r.subtitle }]));
  return `function (params) {
  var rows = ${JSON.stringify(map)};
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  var list = Array.isArray(params) ? params : [params];
  var first = list[0] || {};
  var key = String(first.axisValue != null ? first.axisValue : (first.name || ''));
  var row = rows[key] || { label: key, subtitle: '' };
  var title = esc(row.label) + (row.subtitle ? ' · ' + esc(row.subtitle) : '');
  var lines = [];
  for (var i = 0; i < list.length; i++) {
    var p = list[i];
    if (!p || !p.seriesName) continue;
    var v = p.value;
    if (Object.prototype.toString.call(v) === '[object Array]') v = v[0];
    if (v && typeof v === 'object') v = v.value;
    lines.push((p.marker || '') + esc(p.seriesName) + ': ' + esc(v));
  }
  return lines.length ? title + '<br/>' + lines.join('<br/>') : title;
}`;
}

const SECTION_LABEL = `function (p) { var v = p && p.value; if (v && typeof v === 'object') v = v.value; return v ? String(v) : ''; }`;

/**
 * Bullet — horizontal progress bars against a track, with a target marker.
 * One category is a single bar; more categories list top to bottom in data order.
 * `style.bulletSections` stacks several fills in each bar (one color per status).
 */
export function buildBullet(ctx: ChartContext): EChartsOption {
  const data = isSeries(ctx.data) ? ctx.data : { kind: 'series' as const, series: [] };
  const { style, theme } = ctx;
  const sectionsOn = style.bulletSections;
  const model = bulletModel(data, sectionsOn, { target: style.bulletShowTarget, max: style.bulletShowMax });
  const rows = model.rows;
  const sectionColors = seriesColors(ctx, Math.max(1, model.sectionNames.length));
  const accent = sectionColors[0];
  const track = trackColor(theme.surface.card, sectionsOn ? theme.text.helper : accent);
  const legendShown = style.showLegend && rows.length > 0;
  const legendNames = [...model.sectionNames, ...(model.targetName ? [model.targetName] : [])];

  const barWidth = px(ctx, 18);
  const radius = px(ctx, 9);
  const extent = rows.reduce((max, row) => Math.max(max, row.value, row.track, row.target ?? 0), 0);
  // Extra room so a target number sitting to the right of the marker is not clipped.
  const axisMax = (extent > 0 ? extent : 1) * (style.showDirectLabels && style.bulletShowTarget ? 1.16 : 1.08);
  const gap = px(ctx, SEGMENT_GAP);
  const stackBorder = sectionsOn
    ? { borderColor: theme.surface.card, borderWidth: gap / 2 }
    : {};

  const outsideLabel = style.showDirectLabels
    ? {
        show: true,
        position: 'right' as const,
        color: theme.text.secondary,
        fontFamily: FONT,
        fontSize: fs(ctx, 12),
        fontWeight: 600 as const,
        formatter: '{c}',
      }
    : { show: false };

  const legendBase = legendFor(ctx, legendShown, legendShown ? legendNames : undefined);
  const legend =
    legendShown && legendBase && !Array.isArray(legendBase)
      ? {
          ...legendBase,
          data: [
            ...model.sectionNames.map((name) => ({ name, icon: 'roundRect' })),
            ...(model.targetName ? [{ name: model.targetName, icon: TARGET_SYMBOL }] : []),
          ],
        }
      : legendBase;

  const series: unknown[] = [];
  if (style.bulletShowMax) {
    series.push({
      type: 'bar',
      name: model.trackName,
      barWidth,
      barGap: '-100%',
      z: 1,
      silent: true,
      tooltip: { show: false },
      emphasis: { disabled: true },
      itemStyle: { color: track, borderRadius: radius },
      data: rows.map((row) => row.track),
    });
  }

  model.sectionNames.forEach((name, si) => {
    const color = sectionColors[si % sectionColors.length];
    const insideLabel = style.showDirectLabels
      ? {
          show: true,
          position: 'inside' as const,
          color: readableText(color),
          fontFamily: FONT,
          fontSize: fs(ctx, 12),
          fontWeight: 600 as const,
          formatter: bindSource<(p: { value?: unknown }) => string>(SECTION_LABEL),
        }
      : { show: false };
    series.push({
      type: 'bar',
      name,
      color,
      stack: sectionsOn ? 'sections' : undefined,
      barWidth,
      barGap: '-100%',
      z: 2,
      label: sectionsOn ? insideLabel : outsideLabel,
      ...(sectionsOn ? {} : { itemStyle: { color, borderRadius: radius } }),
      ...markStates(ctx, color, 'none'),
      data: rows.map((row) => {
        const value = row.sections[si] ?? 0;
        if (!sectionsOn) return value;
        return {
          value,
          itemStyle: {
            color,
            borderRadius: bulletSegmentRadius(row.sections, si, radius),
            ...stackBorder,
          },
        };
      }),
    });
  });

  if (model.targetName) {
    series.push({
      type: 'scatter',
      name: model.targetName,
      color: theme.text.primary,
      z: 3,
      clip: false,
      symbol: TARGET_SYMBOL,
      symbolKeepAspect: true,
      symbolSize: [px(ctx, 11), px(ctx, 26)],
      itemStyle: { color: theme.text.primary, opacity: 1 },
      label: style.showDirectLabels
        ? {
            show: true,
            position: 'right' as const,
            distance: px(ctx, 8),
            color: theme.text.secondary,
            fontFamily: FONT,
            fontSize: fs(ctx, 12),
            fontWeight: 600 as const,
            formatter: '{@[0]}',
          }
        : { show: false },
      labelLayout: { hideOverlap: true },
      data: rows.map((row) => [row.target ?? 0, row.key]),
    });
  }

  const catAxis = {
    type: 'category' as const,
    data: rows.map((row) => row.key),
    inverse: true,
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: {
      show: true,
      margin: px(ctx, 12),
      interval: 0,
      color: theme.text.primary,
      fontFamily: FONT,
      fontSize: fs(ctx, 14),
      align: 'right' as const,
      formatter: bindSource<(value: string) => string>(axisLabelSource(rows)),
      rich: {
        label: {
          fontFamily: FONT,
          fontWeight: 700,
          fontSize: fs(ctx, 14),
          color: theme.text.primary,
          align: 'right' as const,
          lineHeight: px(ctx, 18),
        },
        note: {
          fontFamily: FONT,
          fontWeight: 400,
          fontSize: fs(ctx, 12),
          color: theme.text.helper,
          align: 'right' as const,
          lineHeight: px(ctx, 16),
        },
      },
    },
    splitLine: { show: false },
  };
  const valAxis = {
    type: 'value' as const,
    min: 0,
    max: axisMax,
    ...axisCommon(ctx, style.showAxes),
    splitLine: { show: style.showGrid, lineStyle: { color: theme.grid.line } },
  };

  return {
    textStyle: { fontFamily: FONT },
    color: [...sectionColors, theme.text.primary],
    ...animationOpts(ctx),
    grid: gridFor(ctx, legendShown),
    tooltip: {
      ...tooltipFor(theme),
      trigger: 'axis',
      axisPointer: { type: 'none' },
      formatter: bindSource<(params: unknown) => string>(tooltipSource(rows)),
    },
    legend,
    graphic: headerGraphic(ctx),
    xAxis: valAxis,
    yAxis: catAxis,
    series: series as EChartsOption['series'],
  };
}
