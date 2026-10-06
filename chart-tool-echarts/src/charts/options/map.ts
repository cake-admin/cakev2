import type { EChartsOption } from 'echarts';
import { isPartition } from '../../data/dataModel';
import { echarts } from '../echartsSetup';
import { centroidForRegion, expandContinentData } from '../geo/centroids';
import { WORLD_MAP_NAME } from '../geo/registerWorldMap';
import {
  animationOpts,
  FONT,
  fs,
  headerGraphic,
  headerLeftReserve,
  headerTopReserve,
  px,
  readableText,
  seriesColors,
  tooltipFor,
  withSource,
  type ChartContext,
} from './common';

// echarts-gl is loaded asynchronously by PreviewStage before globe options are
// applied. Node/SVG SSR never imports it (it references `self`).

/** Sample a continuous value onto the active ramp (for per-region hover states). */
function colorForValue(value: number, minV: number, maxV: number, samples: string[]): string {
  if (samples.length === 0) return '#888888';
  if (samples.length === 1 || maxV === minV) return samples[Math.floor(samples.length / 2)];
  const t = Math.min(1, Math.max(0, (value - minV) / (maxV - minV)));
  return samples[Math.round(t * (samples.length - 1))];
}

function calloutEnd([lon, lat]: [number, number], index = 0, total = 1): [number, number] {
  // Push outward from a soft map “center”, then fan by index so nearby
  // countries (Europe, E. Asia) don’t start on top of each other.
  const cx = 10;
  const cy = 20;
  const awayLon = lon - cx;
  const awayLat = lat - cy;
  const len = Math.hypot(awayLon, awayLat) || 1;
  const ux = awayLon / len;
  const uy = awayLat / len;
  const fan = ((index - (total - 1) / 2) / Math.max(total, 1)) * 0.9;
  const cos = Math.cos(fan);
  const sin = Math.sin(fan);
  const rx = ux * cos - uy * sin;
  const ry = ux * sin + uy * cos;
  // Keep leaders short so pills stay inside the inset map frame.
  const dist = 12 + (index % 4) * 2;
  return [lon + rx * dist, lat + ry * dist * 0.55];
}

/** Rough pill size in lon/lat degrees for overlap tests. */
function estimateLabelSizeDeg(label: string): { w: number; h: number } {
  return { w: Math.max(12, label.length * 1.05 + 3), h: 5.5 };
}

type CalloutPlacement = {
  from: [number, number];
  to: [number, number];
  w: number;
  h: number;
};

/** Keep callout tips inside a safe world frame so SVG/Figma don’t clip pills. */
function clampCalloutTip(to: [number, number], halfW: number, halfH: number): [number, number] {
  // World map projects ~±180×±90; leave a gutter so the pill body stays on-canvas.
  const minLon = -168 + halfW;
  const maxLon = 168 - halfW;
  const minLat = -52 + halfH;
  const maxLat = 72 - halfH;
  return [
    Math.min(maxLon, Math.max(minLon, to[0])),
    Math.min(maxLat, Math.max(minLat, to[1])),
  ];
}

/**
 * Separate overlapping callout endpoints. Prefers vertical (lat) shifts so
 * Europe / E. Asia stacks read as a column instead of a pile.
 */
function deconflictCallouts(items: CalloutPlacement[], iterations = 48): void {
  const maxDrift = 28;
  for (let iter = 0; iter < iterations; iter++) {
    let moved = false;
    for (let i = 0; i < items.length; i++) {
      for (let j = i + 1; j < items.length; j++) {
        const a = items[i];
        const b = items[j];
        const dx = a.to[0] - b.to[0];
        const dy = a.to[1] - b.to[1];
        const minDx = (a.w + b.w) / 2 + 1.2;
        const minDy = (a.h + b.h) / 2 + 1.0;
        if (Math.abs(dx) >= minDx || Math.abs(dy) >= minDy) continue;

        const overlapX = minDx - Math.abs(dx);
        const overlapY = minDy - Math.abs(dy);
        if (overlapY >= overlapX || Math.abs(dx) < minDx * 0.45) {
          const dir = dy === 0 ? (i % 2 === 0 ? 1 : -1) : Math.sign(dy);
          const push = Math.max(overlapY / 2, 0.8);
          a.to[1] += dir * push;
          b.to[1] -= dir * push;
        } else {
          const dir = dx === 0 ? (i % 2 === 0 ? 1 : -1) : Math.sign(dx);
          const push = Math.max(overlapX / 2, 0.8);
          a.to[0] += dir * push;
          b.to[0] -= dir * push;
        }
        moved = true;
      }
    }
    for (const it of items) {
      const vx = it.to[0] - it.from[0];
      const vy = it.to[1] - it.from[1];
      const d = Math.hypot(vx, vy);
      if (d > maxDrift) {
        const s = maxDrift / d;
        it.to[0] = it.from[0] + vx * s;
        it.to[1] = it.from[1] + vy * s;
      }
      const clamped = clampCalloutTip(it.to, it.w / 2, it.h / 2);
      it.to[0] = clamped[0];
      it.to[1] = clamped[1];
    }
    if (!moved) break;
  }
}

type RegionRow = { name: string; value: number; labelName: string; color: string };

function regionRows(ctx: ChartContext): {
  rows: RegionRow[];
  mapData: Array<{
    name: string;
    value: number;
    /** Shared hover key — continent name in continent mode, else region name. */
    linkKey: string;
    itemStyle?: { areaColor?: string };
  }>;
  minV: number;
  maxSafe: number;
  ramp: string[];
  samples: string[];
  continentMode: boolean;
  usesVisualMap: boolean;
} {
  const data = isPartition(ctx.data) ? ctx.data : { kind: 'partition' as const, slices: [] };
  const slices = data.slices;
  const continentMode = ctx.style.mapRegion === 'continent';
  const values = slices.map((s) => s.value);
  const minV = values.length ? Math.min(...values) : 0;
  const maxV = values.length ? Math.max(...values) : 1;
  const maxSafe = maxV === minV ? minV + 1 : maxV;

  const variation = ctx.color.variation;
  const samples =
    variation === 'diverging'
      ? ctx.theme.color.diverging(32)
      : variation === 'semantic'
        ? ctx.theme.color.semanticScale(32)
        : variation === 'categorical' || variation === 'primary' || variation === 'secondary'
          ? ctx.theme.color.resolve(ctx.color, Math.max(slices.length, 1))
          : ctx.theme.color.sequential(32);
  const ramp =
    variation === 'diverging'
      ? ctx.theme.color.divergingRamp
      : variation === 'semantic'
        ? ctx.theme.color.semanticRamp
        : ctx.theme.color.sequentialRamp;

  const catColors = seriesColors(ctx, Math.max(slices.length, 1));
  const discretePalette =
    continentMode ||
    variation === 'categorical' ||
    variation === 'primary' ||
    variation === 'secondary';
  const colorByLabel = new Map<string, string>();
  slices.forEach((s, i) => {
    if (discretePalette) {
      colorByLabel.set(s.label, catColors[i % catColors.length]);
    } else {
      colorByLabel.set(s.label, colorForValue(s.value, minV, maxSafe, samples));
    }
  });

  if (continentMode) {
    const expanded = expandContinentData(slices);
    const rows: RegionRow[] = slices.map((s) => ({
      name: s.label,
      value: s.value,
      labelName: s.label,
      color: colorByLabel.get(s.label) ?? '#888888',
    }));
    const mapData = expanded.map((e) => ({
      name: e.name,
      value: e.value,
      linkKey: e.continent,
      itemStyle: { areaColor: colorByLabel.get(e.continent) },
    }));
    return { rows, mapData, minV, maxSafe, ramp, samples, continentMode, usesVisualMap: false };
  }

  const rows: RegionRow[] = slices.map((s) => ({
    name: s.label,
    value: s.value,
    labelName: s.label,
    color: colorByLabel.get(s.label) ?? '#888888',
  }));
  const mapData = rows.map((r) => ({
    name: r.name,
    value: r.value,
    linkKey: r.name,
    itemStyle: { areaColor: r.color },
  }));
  // Continuous ramps → visualMap drives fills. Discrete palettes must NOT use
  // visualMap or the choropleth stays on the sequential ramp while pills update.
  const usesVisualMap =
    variation === 'sequential' || variation === 'diverging' || variation === 'semantic';
  return { rows, mapData, minV, maxSafe, ramp, samples, continentMode, usesVisualMap };
}

function buildCalloutSeries(ctx: ChartContext, rows: RegionRow[], continentMode: boolean) {
  if (!ctx.style.showDirectLabels) return [];
  const grain = continentMode ? 'continent' : 'country';
  const { theme } = ctx;
  const fontSize = fs(ctx, 12);
  const padX = px(ctx, 8);
  const padY = px(ctx, 4);
  const borderW = Math.max(1, px(ctx, 1));
  const radius = px(ctx, 8);

  const placements: Array<CalloutPlacement & { row: RegionRow; labelText: string }> = [];
  rows.forEach((r, index) => {
    const from = centroidForRegion(r.name, grain);
    if (!from) return;
    const labelText = `${r.labelName}: ${Math.round(r.value)}%`;
    const size = estimateLabelSizeDeg(labelText);
    placements.push({
      row: r,
      labelText,
      from,
      to: calloutEnd(from, index, rows.length),
      w: size.w,
      h: size.h,
    });
  });
  deconflictCallouts(placements);

  // Silent leaders only — pills live on scatter so they can take hover + link
  // highlight with the map region via shared `name` / `linkKey`.
  const lineData: Array<Record<string, unknown>> = placements.map((p) => ({
    coords: [p.from, p.to],
    name: p.row.labelName,
    lineStyle: { color: p.row.color, width: px(ctx, 1) },
  }));

  const scatterData: Array<Record<string, unknown>> = placements.map((p) => {
    const st = theme.color.states(ctx.color, p.row.color);
    // Hit plate sized like the pill; keep it visually invisible so the label
    // background is the only “chip” (roundRect+label was reading as a 3D disc).
    const w = Math.max(px(ctx, 48), Math.round(p.labelText.length * fontSize * 0.62) + padX * 2);
    const h = fontSize + padY * 2 + borderW * 2;
    return {
      name: p.row.labelName,
      linkKey: p.row.labelName,
      value: p.to,
      percent: p.row.value,
      symbolSize: [w, h],
      itemStyle: {
        color: 'rgba(0,0,0,0.01)',
        borderWidth: 0,
        opacity: 1,
      },
      label: {
        show: true,
        formatter: p.labelText,
        position: 'inside',
        opacity: 1,
        color: readableText(p.row.color),
        fontFamily: FONT,
        fontSize,
        fontWeight: 600,
        backgroundColor: p.row.color,
        borderColor: 'rgba(0,0,0,0.28)',
        borderWidth: borderW,
        padding: [padY, padX],
        borderRadius: radius,
        lineHeight: fs(ctx, 14),
      },
      emphasis: {
        scale: false,
        itemStyle: { color: 'rgba(0,0,0,0.01)', borderWidth: 0, opacity: 1 },
        label: {
          show: true,
          opacity: 1,
          color: readableText(st.hover),
          backgroundColor: st.hover,
          borderColor: theme.text.primary,
          borderWidth: borderW,
        },
      },
      select: {
        itemStyle: { color: 'rgba(0,0,0,0.01)' },
        label: { backgroundColor: st.press, color: readableText(st.press) },
      },
    };
  });

  return [
    {
      type: 'lines' as const,
      coordinateSystem: 'geo',
      geoIndex: 0,
      zlevel: 2,
      polyline: false,
      silent: true,
      effect: { show: false },
      symbol: ['none', 'circle'],
      symbolSize: [0, px(ctx, 4)],
      data: lineData,
      lineStyle: { opacity: 1, curveness: 0.12 },
      emphasis: { disabled: true },
      tooltip: { show: false },
      label: { show: false },
    },
    {
      type: 'scatter' as const,
      coordinateSystem: 'geo',
      geoIndex: 0,
      zlevel: 3,
      symbol: 'rect',
      symbolKeepAspect: false,
      data: scatterData,
      emphasis: { scale: false },
      tooltip: { show: true },
      // Geo deconflict already placed tips — don't shift labels off the hit plate.
      labelLayout: { hideOverlap: false },
    },
  ];
}

/** Must match `geo.aspectScale` below. */
const MAP_ASPECT_SCALE = 0.75;
/**
 * Our world.json lon span is 360°, lat span ~139.34° (Antarctica clipped).
 * ECharts view aspect = (bboxW/bboxH) × aspectScale — NOT a naive 2×0.75.
 */
const MAP_VIEW_ASPECT = (360 / 139.34169921875) * MAP_ASPECT_SCALE;

/**
 * `layoutSize` % is of `min(frameW,frameH)` and becomes map *width* when aspect>1.
 * Pick the % that contain-fits the real geo bbox with `marginFrac` empty border.
 */
function mapLayoutSize(ctx: ChartContext, marginFrac = 0.05): string {
  const viewW = Math.max(1, ctx.frame?.width ?? 640);
  const viewH = Math.max(1, ctx.frame?.height ?? 420);
  const availW = viewW * (1 - marginFrac);
  const availH = viewH * (1 - marginFrac);
  const mapW = availW / availH > MAP_VIEW_ASPECT ? availH * MAP_VIEW_ASPECT : availW;
  const pct = (mapW / Math.min(viewW, viewH)) * 100;
  return `${Math.round(pct * 10) / 10}%`;
}

function buildFlatMap(ctx: ChartContext): EChartsOption {
  const { rows, mapData, minV, maxSafe, ramp, continentMode, usesVisualMap } = regionRows(ctx);
  const { style, theme } = ctx;
  const legendShown = style.showLegend && usesVisualMap;
  const topPad = headerTopReserve(ctx);
  const leftPad = headerLeftReserve(ctx);
  // layoutCenter + layoutSize (not left/right/top/bottom): specifying all four
  // box insets makes ECharts ignore aspect and stretch the choropleth.
  const centerX = leftPad > 0 ? '56%' : '50%';
  const centerY = legendShown ? '46%' : topPad > 0 ? '52%' : '50%';
  const layoutSize = mapLayoutSize(ctx, 0.05);

  const borderW = px(ctx, 1);
  const borderHoverW = px(ctx, 1.5);
  const emptyFill = theme.surface.canvas;
  const borderColor = theme.border.standard;

  const pctTooltip = withSource(
    (p: {
      name?: string;
      value?: unknown;
      data?: { value?: unknown; name?: string; percent?: number };
    }) => {
      const name = p?.name ?? p?.data?.name ?? '';
      const pct = p?.data?.percent;
      if (pct != null && Number.isFinite(pct)) return `${name}: ${Math.round(pct)}%`;
      const raw = p?.value ?? p?.data?.value;
      // Scatter tips are [lon, lat] — only treat a scalar (or last of non-coord) as %.
      if (Array.isArray(raw) && raw.length >= 2) return name;
      const n = Number(Array.isArray(raw) ? raw[raw.length - 1] : raw);
      if (!Number.isFinite(n)) return name;
      return `${name}: ${Math.round(n)}%`;
    },
    "(p) => { const name = (p && (p.name || (p.data && p.data.name))) || ''; const pct = p && p.data && p.data.percent; if (pct != null && Number.isFinite(pct)) return `${name}: ${Math.round(pct)}%`; const raw = p && (p.value != null ? p.value : p.data && p.data.value); if (Array.isArray(raw) && raw.length >= 2) return name; const n = Number(Array.isArray(raw) ? raw[raw.length - 1] : raw); return Number.isFinite(n) ? `${name}: ${Math.round(n)}%` : name; }",
  );

  const pctTick = withSource(
    (v: unknown) => `${Math.round(Number(v))}%`,
    '(v) => `${Math.round(Number(v))}%`',
  );

  const regions = mapData.map((d) => {
    const color = d.itemStyle?.areaColor ?? theme.surface.canvas;
    const st = theme.color.states(ctx.color, color);
    return {
      name: d.name,
      value: d.value,
      linkKey: d.linkKey,
      itemStyle: {
        areaColor: color,
        borderColor,
        borderWidth: borderW,
      },
      emphasis: {
        label: { show: false },
        itemStyle: {
          areaColor: st.hover,
          borderColor: theme.text.primary,
          borderWidth: borderHoverW,
        },
      },
      select: { itemStyle: { areaColor: st.press } },
    };
  });

  // Paint fills on `geo.regions`. With geoIndex, series data alone is unreliable
  // once visualMap is off (continent / categorical) — country mode looked fine
  // mainly because the continuous visualMap drove area colors.
  const geoRegions = regions.map((r) => ({
    name: r.name,
    linkKey: r.linkKey,
    itemStyle: r.itemStyle,
    emphasis: r.emphasis,
    select: r.select,
  }));

  return {
    textStyle: { fontFamily: FONT, color: theme.text.primary, fontSize: fs(ctx, 12) },
    ...animationOpts(ctx),
    tooltip: {
      ...tooltipFor(theme),
      trigger: 'item',
      textStyle: { color: theme.tooltip.text, fontFamily: FONT, fontSize: fs(ctx, 12) },
      formatter: pctTooltip as unknown as string,
    },
    graphic: headerGraphic(ctx),
    // With `series.map` + `geoIndex`, geo owns the pickable region shapes.
    // silent/emphasis-disabled here kills hover even when callouts are off.
    geo: {
      map: WORLD_MAP_NAME,
      layoutCenter: [centerX, centerY],
      layoutSize,
      aspectScale: MAP_ASPECT_SCALE,
      roam: ctx.staticFrame ? false : 'scale',
      itemStyle: {
        areaColor: emptyFill,
        borderColor,
        borderWidth: borderW,
      },
      regions: geoRegions,
      emphasis: {
        disabled: false,
        label: { show: false },
      },
      silent: false,
      tooltip: { show: true },
    },
    visualMap: usesVisualMap
      ? {
          show: legendShown,
          min: minV,
          max: maxSafe,
          calculable: true,
          realtime: true,
          hoverLink: true,
          orient: 'horizontal',
          left: 'center',
          bottom: px(ctx, 8),
          itemWidth: px(ctx, 12),
          itemHeight: px(ctx, 180),
          inRange: { color: ramp },
          formatter: pctTick,
          textStyle: {
            color: theme.text.secondary,
            fontFamily: FONT,
            fontSize: fs(ctx, 12),
          },
        }
      : undefined,
    series: [
      {
        type: 'map',
        geoIndex: 0,
        map: WORLD_MAP_NAME,
        selectedMode: false,
        data: regions,
        itemStyle: {
          areaColor: emptyFill,
          borderColor,
          borderWidth: borderW,
        },
        emphasis: {
          disabled: false,
          label: { show: false },
        },
        select: { disabled: true },
        label: { show: false },
      },
      ...buildCalloutSeries(ctx, rows, continentMode),
    ] as EChartsOption['series'],
  };
}

/** Cache choropleth→texture so option rebuilds don't spawn new ECharts/WebGL contexts. */
let textureCacheKey = '';
let textureCacheUrl = '';

/** Offscreen 2D map → PNG data-URL for the WebGL globe baseTexture. */
function paintGlobeTexture(
  mapData: Array<Record<string, unknown>>,
  ocean: string,
  border: string,
): string {
  if (typeof document === 'undefined') return ocean;

  const key = JSON.stringify({ mapData, ocean, border });
  if (key === textureCacheKey && textureCacheUrl) return textureCacheUrl;

  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 1024;
  const chart = echarts.init(canvas, undefined, { renderer: 'canvas', width: 2048, height: 1024 });
  try {
    const regions = mapData.map((d) => ({
      name: String(d.name ?? ''),
      itemStyle: {
        areaColor:
          (d.itemStyle as { areaColor?: string } | undefined)?.areaColor ?? ocean,
        borderColor: border,
        borderWidth: 0.75,
      },
    }));
    chart.setOption({
      animation: false,
      backgroundColor: ocean,
      geo: {
        map: WORLD_MAP_NAME,
        silent: true,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        boundingCoords: [
          [-180, 90],
          [180, -90],
        ],
        itemStyle: {
          areaColor: ocean,
          borderColor: border,
          borderWidth: 0.75,
        },
        regions,
        emphasis: { disabled: true },
        label: { show: false },
      },
      series: [
        {
          type: 'map',
          geoIndex: 0,
          map: WORLD_MAP_NAME,
          silent: true,
          data: mapData,
          itemStyle: {
            areaColor: ocean,
            borderColor: border,
            borderWidth: 0.75,
          },
          emphasis: { disabled: true },
          label: { show: false },
        },
      ],
    });
    chart.resize();
    // Snapshot before dispose — a live canvas tied to a disposed chart blanks out.
    textureCacheUrl = canvas.toDataURL('image/png');
    textureCacheKey = key;
    return textureCacheUrl;
  } finally {
    chart.dispose();
  }
}

/**
 * echarts-gl only applies `value[2]` after it builds an altitude axis from the
 * data extent. If every point shares the same alt (e.g. all `1`), max−min is 0
 * and they all map to the same radius — so 1/2/4 looked identical. Invisible
 * anchors at 0 and ALT_SCALE_MAX fix the scale; LABEL_ALT is the real lift.
 * Physical height ≈ LABEL_ALT / ALT_SCALE_MAX × (globeOuterRadius − globeRadius).
 */
const GLOBE_ALT_SCALE_MAX = 20;
/** Mild lift off the mesh — enough to stop clipping, not float into empty space. */
const GLOBE_LABEL_ALT = 2;
const GLOBE_RADIUS = 100;
const GLOBE_OUTER_RADIUS = 150;

/** Region pills on the globe surface — no leader lines. */
function buildGlobeCallouts(
  ctx: ChartContext,
  rows: RegionRow[],
  continentMode: boolean,
): NonNullable<EChartsOption['series']> {
  if (!ctx.style.showDirectLabels) return [];

  const grain = continentMode ? 'continent' : 'country';
  // Scale anchors (must differ) so altitudeAxis is created and LABEL_ALT means something.
  const scatterData: Array<Record<string, unknown>> = [
    {
      name: '__alt_min',
      value: [0, 0, 0] as [number, number, number],
      itemStyle: { opacity: 0 },
      label: { show: false },
      symbolSize: 1,
      silent: true,
    },
    {
      name: '__alt_max',
      value: [0, 0, GLOBE_ALT_SCALE_MAX] as [number, number, number],
      itemStyle: { opacity: 0 },
      label: { show: false },
      symbolSize: 1,
      silent: true,
    },
  ];

  const placements: Array<CalloutPlacement & { row: RegionRow; labelText: string }> = [];
  rows.forEach((r, index) => {
    const from = centroidForRegion(r.name, grain);
    if (!from) return;
    const labelText = `${r.labelName}: ${Math.round(r.value)}%`;
    const size = estimateLabelSizeDeg(labelText);
    // Start near the region (shorter than flat callouts) then deconflict.
    const tip = calloutEnd(from, index, rows.length);
    const to: [number, number] = [
      from[0] + (tip[0] - from[0]) * 0.35,
      from[1] + (tip[1] - from[1]) * 0.35,
    ];
    placements.push({ row: r, labelText, from, to, w: size.w * 0.85, h: size.h });
  });
  deconflictCallouts(placements, 56);

  for (const p of placements) {
    // IMPORTANT: LabelsBuilder multiplies label opacity by item visual opacity.
    // Keep opacity 1; tiny symbolSize keeps the marker nearly invisible.
    scatterData.push({
      name: p.row.labelName,
      value: [p.to[0], p.to[1], GLOBE_LABEL_ALT] as [number, number, number],
      percent: p.row.value,
      itemStyle: { color: p.row.color, opacity: 1 },
      label: {
        show: true,
        formatter: () => p.labelText,
        distance: 2,
        position: 'top',
        opacity: 1,
        color: readableText(p.row.color),
        fontFamily: FONT,
        fontSize: fs(ctx, 11),
        fontWeight: 600,
        backgroundColor: p.row.color,
        padding: [2, 5],
        borderRadius: 6,
        borderColor: 'rgba(0,0,0,0.28)',
        borderWidth: 1,
        textStyle: {
          color: readableText(p.row.color),
          fontFamily: FONT,
          fontSize: fs(ctx, 11),
          fontWeight: 600,
          backgroundColor: p.row.color,
          padding: [2, 5],
          borderRadius: 6,
          borderColor: 'rgba(0,0,0,0.28)',
          borderWidth: 1,
          opacity: 1,
        },
      },
    });
  }

  return [
    {
      type: 'scatter3D',
      coordinateSystem: 'globe',
      globeIndex: 0,
      zlevel: 10,
      symbol: 'circle',
      // Small enough to read as “no dot”, large enough that GL still lays out labels.
      symbolSize: 2,
      data: scatterData,
      itemStyle: { opacity: 1 },
      label: {
        show: true,
        distance: 2,
        position: 'top',
        opacity: 1,
      },
      emphasis: {
        label: { show: true, opacity: 1 },
        itemStyle: { opacity: 1 },
      },
    },
  ] as NonNullable<EChartsOption['series']>;
}

function buildGlobeMap(ctx: ChartContext): EChartsOption {
  // Globe needs WebGL; SVG/static export falls back to flat so gallery/tests stay green.
  if (ctx.staticFrame || typeof document === 'undefined') return buildFlatMap(ctx);

  const { rows, mapData, continentMode } = regionRows(ctx);
  const { theme } = ctx;
  const ocean = theme.surface.onContainerHigh;
  const border = theme.border.standard;
  let texture: string;
  try {
    texture = paintGlobeTexture(mapData as Array<Record<string, unknown>>, ocean, border);
  } catch {
    // Texture paint failed (rare) — still show a plain globe rather than crashing React.
    texture = ocean;
  }

  return {
    backgroundColor: ctx.style.transparentBackground ? 'transparent' : theme.surface.card,
    textStyle: { fontFamily: FONT, color: theme.text.primary },
    ...animationOpts(ctx),
    tooltip: {
      ...tooltipFor(theme),
      formatter: (p: {
        name?: string;
        value?: unknown;
        data?: { percent?: number; name?: string };
      }) => {
        const name = p?.name ?? p?.data?.name ?? '';
        const pct = p?.data?.percent;
        if (pct != null && Number.isFinite(pct)) return `${name}: ${Math.round(pct)}%`;
        const v = p?.value;
        // Prefer explicit percent; fall back only if value isn't a lon/lat/alt triple.
        if (typeof v === 'number' && Number.isFinite(v)) return `${name}: ${Math.round(v)}%`;
        return name;
      },
    } as EChartsOption['tooltip'],
    graphic: headerGraphic(ctx),
    globe: {
      baseTexture: texture,
      // 'color' shows the albedo as-is (no night-side blackout from Lambert).
      shading: 'color',
      environment: 'none',
      baseColor: '#ffffff',
      globeRadius: GLOBE_RADIUS,
      globeOuterRadius: GLOBE_OUTER_RADIUS,
      light: {
        main: { intensity: 1.2, shadow: false },
        ambient: { intensity: 0.85 },
      },
      viewControl: {
        autoRotate: false,
        // Closer camera fills the card — 185 left a large empty ring around the sphere.
        distance: 140,
        alpha: 20,
        beta: 20,
        panSensitivity: 0,
        // Keep zoom from pulling the camera back out into empty space.
        minDistance: 120,
        maxDistance: 200,
      },
    },
    series: buildGlobeCallouts(ctx, rows, continentMode),
  };
}

/**
 * World choropleth — country or continent partition data (values as %).
 * Flat map supports SVG export; globe is WebGL (preview + PNG only).
 */
export function buildMap(ctx: ChartContext): EChartsOption {
  if (ctx.style.mapProjection === 'globe') return buildGlobeMap(ctx);
  return buildFlatMap(ctx);
}
