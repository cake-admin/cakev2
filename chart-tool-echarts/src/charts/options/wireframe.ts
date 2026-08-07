import { oklab } from 'culori';
import { WIREFRAME_SHADE_LIMIT } from '../../theme/chartTheme.types';
import type { ChartContext } from './common';

/**
 * ECharts decal patterns for series that need extra differentiation —
 * wireframe greys beyond the shade limit, and HCT series that are too similar
 * to neighbors / the canvas. Applied as `itemStyle.decal`.
 */
const DECAL_PATTERNS: ReadonlyArray<Record<string, unknown>> = [
  // Diagonal stripes
  {
    symbol: 'rect',
    symbolSize: 1,
    dashArrayX: [1, 0],
    dashArrayY: [4, 3],
    rotation: Math.PI / 4,
  },
  // Dots
  {
    symbol: 'circle',
    symbolSize: 0.55,
    dashArrayX: 5,
    dashArrayY: 5,
    rotation: 0,
  },
  // Cross-hatch (dense diagonal the other way)
  {
    symbol: 'rect',
    symbolSize: 1,
    dashArrayX: [1, 0],
    dashArrayY: [3, 2],
    rotation: -Math.PI / 4,
  },
  // Horizontal stripes
  {
    symbol: 'rect',
    symbolSize: 1,
    dashArrayX: [1, 0],
    dashArrayY: [3, 3],
    rotation: 0,
  },
  // Vertical stripes
  {
    symbol: 'rect',
    symbolSize: 1,
    dashArrayX: [1, 0],
    dashArrayY: [3, 3],
    rotation: Math.PI / 2,
  },
  // Larger dots
  {
    symbol: 'circle',
    symbolSize: 0.8,
    dashArrayX: 7,
    dashArrayY: 7,
    rotation: 0,
  },
];

/**
 * How many HCT categorical stops are treated as shade-only before patterns
 * always kick in. The official win-hct data palette is cyan-heavy; beyond this
 * index we overlay decals even when pairwise distance still passes.
 */
export const HCT_DISTINCT_LIMIT = 3;

/** OKLab ΔE below which two fills are hard to tell apart on a chart. */
const HCT_SIMILARITY_THRESHOLD = 0.14;

/** Minimum OKLab lightness gap vs canvas for a solid fill to stay readable. */
const HCT_BG_LIGHTNESS_GAP = 0.22;

/** True when the active color theme is wireframe (secondary). */
export function isWireframe(ctx: ChartContext): boolean {
  return ctx.color.variation === 'secondary';
}

function decalInk(mode: ChartContext['theme']['mode']): string {
  // Ink contrast: darker hatch on light canvas, lighter on dark/HCT.
  return mode === 'light' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.45)';
}

function patternAt(offset: number, mode: ChartContext['theme']['mode']): Record<string, unknown> {
  const pattern = DECAL_PATTERNS[offset % DECAL_PATTERNS.length];
  return { ...pattern, color: decalInk(mode) };
}

function oklabDelta(a: string, b: string): number {
  const A = oklab(a);
  const B = oklab(b);
  if (!A || !B) return 1;
  const da = (A.a ?? 0) - (B.a ?? 0);
  const db = (A.b ?? 0) - (B.b ?? 0);
  return Math.hypot(A.l - B.l, da, db);
}

function lightnessOf(hex: string): number {
  return oklab(hex)?.l ?? 0.5;
}

/**
 * Decal for mark `index` in wireframe mode. Indices 0…5 are shade-only;
 * from the 7th mark onward, cycle pattern overlays for differentiation.
 */
export function wireframeDecal(
  ctx: ChartContext,
  index: number,
): Record<string, unknown> | undefined {
  if (!isWireframe(ctx) || index < WIREFRAME_SHADE_LIMIT) return undefined;
  return patternAt(index - WIREFRAME_SHADE_LIMIT, ctx.theme.mode);
}

/**
 * HCT series distinction: the win-hct data tokens cluster in cyan / white /
 * gray. Overlay a decal when the mark is beyond the distinguishable subset,
 * too close to an earlier series color, or too close to the canvas.
 */
export function hctDecal(
  ctx: ChartContext,
  index: number,
  color: string,
): Record<string, unknown> | undefined {
  if (ctx.theme.mode !== 'hct') return undefined;
  // Single-token "primary" mode is intentionally one solid — patterns would
  // fight the product meaning. Wireframe has its own path.
  if (ctx.color.variation === 'primary' || isWireframe(ctx)) return undefined;

  const canvas = ctx.theme.surface.canvas;
  const prior = ctx.theme.color.resolve(ctx.color, Math.max(index, 0));
  const similarToPrior = prior.some((prev, i) => i < index && oklabDelta(color, prev) < HCT_SIMILARITY_THRESHOLD);
  const weakOnCanvas = Math.abs(lightnessOf(color) - lightnessOf(canvas)) < HCT_BG_LIGHTNESS_GAP;
  const pastDistinct = index >= HCT_DISTINCT_LIMIT;

  if (!pastDistinct && !similarToPrior && !weakOnCanvas) return undefined;

  // Pattern index: count how many earlier marks already needed a pattern so
  // adjacent patterned series don't share the same hatch by accident.
  let patternOffset = 0;
  if (pastDistinct || similarToPrior || weakOnCanvas) {
    for (let i = 0; i < index; i++) {
      const c = prior[i] ?? color;
      const sim = prior.slice(0, i).some((p) => oklabDelta(c, p) < HCT_SIMILARITY_THRESHOLD);
      const weak = Math.abs(lightnessOf(c) - lightnessOf(canvas)) < HCT_BG_LIGHTNESS_GAP;
      if (i >= HCT_DISTINCT_LIMIT || sim || weak) patternOffset += 1;
    }
  }
  return patternAt(patternOffset, ctx.theme.mode);
}

/**
 * Wireframe or HCT decal for mark `index` (whichever applies). Prefer this over
 * calling the mode helpers separately from option builders.
 */
export function seriesDecal(
  ctx: ChartContext,
  index: number,
  color: string,
): Record<string, unknown> | undefined {
  return wireframeDecal(ctx, index) ?? hctDecal(ctx, index, color);
}

/** Merge fill color + optional wireframe/HCT decal into an itemStyle fragment. */
export function fillStyle(
  ctx: ChartContext,
  color: string,
  index: number,
  extra: Record<string, unknown> = {},
): Record<string, unknown> {
  const decal = seriesDecal(ctx, index, color);
  return decal ? { color, decal, ...extra } : { color, ...extra };
}
