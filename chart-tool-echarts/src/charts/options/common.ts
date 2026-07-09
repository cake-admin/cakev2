import type { EChartsOption } from 'echarts';
import type { ChartTheme, ColorConfig } from '../../theme/chartTheme.types';
import type { DataModel } from '../../data/dataModel';
import type { HeaderConfig, StyleConfig } from '../types';
import type { ChartId } from '../registry';

/**
 * Rookery New — matches the design system. Family names use SINGLE quotes: this
 * string is emitted by ECharts into a double-quoted SVG `style="…"` attribute,
 * so double quotes here would break the XML and Figma refuses to import it.
 */
export const FONT = "'Rookery New','Rookery','Noto Sans',system-ui,sans-serif";

/** Everything an option builder needs. Pure inputs → one ECharts option. */
export interface ChartContext {
  type: ChartId;
  data: DataModel;
  color: ColorConfig;
  style: StyleConfig;
  header?: HeaderConfig;
  theme: ChartTheme;
  /** Force-disable animation (export/SSR renders the final frame). */
  staticFrame?: boolean;
  /**
   * Multiplier for every font/px size. The live preview leaves this at 1; the
   * SVG export sets it from the target dimensions so text & spacing are baked in
   * proportionally (Figma won't rescale `<text>` on resize, so we pre-size it).
   */
  scale?: number;
}

/**
 * Type-scale ladder for ALL chart text — fonts only ever land on these nice
 * sizes (no odd values like 11 or 22). Starts at 12 and steps up; extends past
 * 28 so large exports still scale cleanly.
 */
export const FONT_STEPS = [12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96];

function snapFont(size: number): number {
  let best = FONT_STEPS[0];
  for (const step of FONT_STEPS) {
    if (Math.abs(step - size) <= Math.abs(best - size)) best = step; // ties → larger step
  }
  return best;
}

/**
 * Scaled font size, snapped to the type-scale ladder. The base is normalized to
 * the ladder first, then multiplied by the export scale and re-snapped, so every
 * rendered font is a clean ladder value (12 minimum) at any dimension.
 */
export function fs(ctx: ChartContext, base: number): number {
  return snapFont(snapFont(base) * (ctx.scale ?? 1));
}

/** Scaled pixel measurement (offsets, widths, paddings, symbol sizes). */
export function px(ctx: ChartContext, base: number): number {
  return Math.round(base * (ctx.scale ?? 1) * 100) / 100;
}

function reducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

/** Shared entrance animation (honors reduced-motion + export static frame). */
export function animationOpts(ctx: ChartContext): EChartsOption {
  const on = !ctx.staticFrame && !reducedMotion();
  // Self-contained stagger + a `__src` tag so the code-snippet serializer can
  // emit clean source regardless of bundling/minification.
  const animationDelay = withSource((idx: number) => idx * 40, '(idx) => idx * 40');
  return { animation: on, animationDuration: 600, animationEasing: 'cubicOut', animationDelay };
}

/** Tag a function with the exact source the code-snippet exporter should emit. */
export function withSource<F extends (...args: never[]) => unknown>(fn: F, src: string): F {
  (fn as unknown as { __src: string }).__src = src;
  return fn;
}

/** Readable label color on a colored fill (contrast only — not a data color). */
export function readableText(fill: string): string {
  const h = fill.replace('#', '');
  if (h.length < 6) return '#ffffff';
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return lum > 0.6 ? '#1a1a1a' : '#ffffff';
}

export function formatValue(v: number): string {
  if (!Number.isFinite(v)) return String(v);
  return Number.isInteger(v)
    ? v.toLocaleString('en-US')
    : v.toLocaleString('en-US', { maximumFractionDigits: 2 });
}

export function seriesColors(ctx: ChartContext, count: number): string[] {
  return ctx.theme.color.resolve(ctx.color, Math.max(1, count));
}

/**
 * Native selection stays OFF — the "pressed" state is driven imperatively from
 * the EChart wrapper (mousedown swaps the emphasis color to the token Press
 * color), so we don't want click-to-select lingering. The token Press color is
 * still carried declaratively on each mark's `select.itemStyle.color`, which the
 * wrapper reads.
 */
export const SELECTED_MODE = false as const;

/**
 * Token-driven interaction states for a mark, mirroring the visx edition:
 *  - hover  → emphasis.itemStyle.color  (real token Hover sibling or OKLCH-derived)
 *  - press  → select.itemStyle.color    (token Press), engaged on press
 * Spread onto a series (series-colored charts) or a data item (per-mark colors).
 */
export function markStates(ctx: ChartContext, rest: string, focus: 'self' | 'series' | 'none' = 'self') {
  const s = ctx.theme.color.states(ctx.color, rest);
  return {
    emphasis: { focus, itemStyle: { color: s.hover } },
    select: { itemStyle: { color: s.press } },
  };
}

/** Token-driven axis styling (lines mirror the divider, labels mirror text). */
export function axisCommon(ctx: ChartContext, show: boolean) {
  const theme = ctx.theme;
  return {
    show,
    axisLine: { show, lineStyle: { color: theme.axis.line } },
    axisTick: { show, lineStyle: { color: theme.axis.line } },
    axisLabel: { show, color: theme.axis.label, fontFamily: FONT, fontSize: fs(ctx, 11) },
    nameTextStyle: { color: theme.text.secondary, fontFamily: FONT, fontSize: fs(ctx, 12) },
  };
}

export function tooltipFor(theme: ChartTheme): EChartsOption['tooltip'] {
  return {
    show: true,
    backgroundColor: theme.tooltip.bg,
    borderColor: theme.tooltip.border,
    borderWidth: 1,
    padding: [8, 12],
    textStyle: { color: theme.tooltip.text, fontFamily: FONT, fontSize: 12 },
    extraCssText: `border-radius:${theme.tooltip.radius}px;box-shadow:${theme.tooltip.shadow};`,
  };
}

export function legendFor(ctx: ChartContext, show: boolean): EChartsOption['legend'] {
  if (!show) return { show: false };
  const right = ctx.style.legendPosition === 'right';
  return {
    show: true,
    type: 'scroll',
    icon: 'roundRect',
    itemWidth: px(ctx, 12),
    itemHeight: px(ctx, 12),
    itemGap: px(ctx, 16),
    textStyle: { color: ctx.theme.text.secondary, fontFamily: FONT, fontSize: fs(ctx, 12) },
    ...(right
      ? { orient: 'vertical', right: px(ctx, 8), top: 'middle' }
      : { bottom: px(ctx, 8), left: 'center' }),
  };
}

/** Which header lines actually render: toggled on AND non-empty. */
function headerLines(h: HeaderConfig) {
  return {
    title: h.showTitle && !!h.title,
    value: h.showValue && !!h.value,
    subtitle: h.showSubtitle && !!h.subtitle,
    get any() {
      return this.title || this.value || this.subtitle;
    },
  };
}

/** Vertical advance (base px @1×) each visible line contributes to the header stack. */
const HEADER_ADVANCE = { title: 30, value: 56, subtitle: 20 } as const;

/**
 * Reserved space (px @ scale) a top-placed header takes off the top of the plot,
 * sized to the visible lines so a title-only header doesn't leave a huge gap and
 * a full KPI keeps comfortable breathing room before the chart.
 */
export function headerTopReserve(ctx: ChartContext): number {
  const h = ctx.header;
  if (!h?.show || h.placement !== 'top') return 0;
  const v = headerLines(h);
  if (!v.any) return 0;
  let inner = 0;
  if (v.title) inner += HEADER_ADVANCE.title;
  if (v.value) inner += HEADER_ADVANCE.value;
  if (v.subtitle) inner += HEADER_ADVANCE.subtitle;
  return px(ctx, 20 + inner + 24); // group top + content + gap to plot
}

/** Reserved space (px @ scale) a left-placed header takes off the left of the plot. */
export function headerLeftReserve(ctx: ChartContext): number {
  const h = ctx.header;
  if (!h?.show || h.placement !== 'left') return 0;
  const v = headerLines(h);
  if (!v.any) return 0;
  return px(ctx, v.value ? 232 : 160);
}

/** Plot-area insets for cartesian charts — reserve header (top/left) + legend. */
export function gridFor(ctx: ChartContext, legendShown: boolean): EChartsOption['grid'] {
  const legBottom = legendShown && ctx.style.legendPosition === 'bottom';
  const legRight = legendShown && ctx.style.legendPosition === 'right';
  return {
    left: headerLeftReserve(ctx) || px(ctx, 8),
    right: px(ctx, 16 + (legRight ? 116 : 0)),
    top: headerTopReserve(ctx) || px(ctx, 16),
    bottom: px(ctx, 8 + (legBottom ? 40 : 0)),
    containLabel: true,
  };
}

/**
 * Layout for radial charts (pie / radar / polar). A top-placed header reserves a
 * proportional top band, so we BOTH push the center down AND cap the outer radius
 * to fit the free band below it — otherwise the ring rides up under the header on
 * export (the old center-only nudge left the top crowding the KPI). The band is
 * sized by how many header lines are visible so a 1-line header reserves less
 * than a full KPI. `outer` is the max outer-radius percent (999 = "use the
 * chart's own default" when there's no top header to reserve against).
 */
export function radialFit(
  ctx: ChartContext,
  legendShown: boolean,
): { center: [string, string]; outer: number } {
  const h = ctx.header;
  let x = 50;
  if (h?.show && h.placement === 'left') x += 16;
  if (legendShown && ctx.style.legendPosition === 'right') x -= 10;

  let topBand = 0;
  if (h?.show && h.placement === 'top') {
    const v = headerLines(h);
    const lines = (v.title ? 1 : 0) + (v.value ? 1 : 0) + (v.subtitle ? 1 : 0);
    topBand = lines >= 3 ? 0.32 : lines === 2 ? 0.24 : lines === 1 ? 0.16 : 0;
  }
  const bottomBand = legendShown && ctx.style.legendPosition === 'bottom' ? 0.1 : 0;

  // Center vertically within the free band; radius fits it (with a small margin).
  const y = Math.round((topBand + (1 - bottomBand)) / 2 * 100);
  const avail = 1 - topBand - bottomBand;
  const outer = topBand > 0 ? Math.max(30, Math.round(avail * 100) - 6) : 999;
  return { center: [`${x}%`, `${y}%`], outer };
}

/**
 * KPI header (title / big value / subtitle) as positioned vector text — a small
 * label, a large emphasized value, and a muted subtitle, matching the design
 * reference. No divider rule (the reference has none); sizes snap to the ladder.
 */
export function headerGraphic(ctx: ChartContext): EChartsOption['graphic'] {
  const h = ctx.header;
  if (!h?.show) return undefined;
  const t = ctx.theme;
  const v = headerLines(h);
  if (!v.any) return undefined;
  const left = h.placement === 'left';
  const children: Array<Record<string, unknown>> = [];
  let y = 0;
  // Use separate fontSize/fontWeight/fontFamily (NOT the `font` shorthand): the
  // SVG renderer emits them as discrete `font-size`/`font-weight`/`font-family`
  // properties, which Figma's SVG importer honors — it ignores the CSS `font`
  // shorthand, which would otherwise collapse all three lines to one size.
  if (v.title) {
    children.push({ type: 'text', y, style: { text: h.title, fontFamily: FONT, fontWeight: 600, fontSize: fs(ctx, 16), fill: t.text.primary } });
    y += px(ctx, HEADER_ADVANCE.title);
  }
  if (v.value) {
    children.push({ type: 'text', y, style: { text: h.value, fontFamily: FONT, fontWeight: 700, fontSize: fs(ctx, 40), fill: t.text.primary } });
    y += px(ctx, HEADER_ADVANCE.value);
  }
  if (v.subtitle) {
    children.push({ type: 'text', y, style: { text: h.subtitle, fontFamily: FONT, fontWeight: 400, fontSize: fs(ctx, 14), fill: t.text.helper } });
  }
  return [
    {
      type: 'group',
      left: px(ctx, 20),
      top: left ? 'middle' : px(ctx, 20),
      children,
    },
  ] as EChartsOption['graphic'];
}
