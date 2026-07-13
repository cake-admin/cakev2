# Cake Charts — design-system charting tool (ECharts edition)

An internal web app for designers to pick and customize charts, preview them
live, and hand them off to **Figma as clean, editable SVG**. Built on
[Apache ECharts](https://echarts.apache.org/) and **100% token-driven** — every
color traces to a cake& design token, and light/dark both come from the same
token export.

**Live:** https://cake.lenovo.com/dataviz (deployed from `main` by the Pages
workflow, nested under the main design-system site).

## Quick start

```bash
cd chart-tool-echarts
npm install
npm run dev        # http://localhost:5173
```

| Script | What |
|--------|------|
| `npm run dev` | Vite dev server |
| `npm run build` | Regenerate tokens (`prebuild`) + typecheck + production build |
| `npm run typecheck` | Types only |
| `npm test` | Vitest — color system, token traceability, SVG-export guarantees |
| `npm run gallery` | Renders every chart × both modes to `preview/index.html` for a quick visual audit |
| `npm run build:tokens` | Regenerate `src/tokens/tokens.json` from the Figma exports |

> ⚠️ This repo's path contains `&`, which breaks the npm `.bin` cmd shims (and
> `npx`) on Windows. The npm scripts already call tools via `node <bin>`, so
> they work as-is — avoid bare `npx vite` / `tsc` from this folder.

## Tokens (source of truth)

`scripts/build-tokens.mjs` generates `src/tokens/tokens.json` from the design
system's Figma DTCG exports at the repo root — it is **never hand-edited**:

- `../& theme.a/Light.a.tokens.json` + `Dark.a.tokens.json` (`&color` group) →
  structural tokens (surfaces, text, axis/grid, tooltip, semantic roles).
- `../& color hero/color.tokens.json` (named tones like `indigo/60`,
  mode-independent) → the fixed palettes:
  - **categorical** — 12 cake& hero tones, identical in light & dark (both pass contrast)
  - **sequential** — indigo single-hue ramp (80→30)
  - **semantic scale** — red→green (bad→good)
  - **diverging** — jade↔violet, two-ended
  - **single tokens** — the primary/secondary/tonal families selectable as one solid color

`prebuild` regenerates automatically for local builds. **CI does not** — the
deploy workflow builds `tsc + vite` directly because the `& *` export folders
aren't tracked; the committed `tokens.json` is the build's source of truth.

## Architecture

```
tokens.json ─► buildChartTheme(mode) ─► ChartTheme ─┐
                     │                              ▼
               colorScales.ts              buildOption(ctx) ── one pure fn per chart
               (palettes, ramps,                    │           (src/charts/options/*)
                hover/press states)                 ▼
                                     ┌── EChart.tsx (live preview, canvas,
                                     │    token hover/press interaction)
                                     └── renderStaticSvg (SSR SVG export,
                                          light + dark, Figma-safe)
```

- **Option builders** (`src/charts/options/*.ts`) — each chart type is a pure
  function `(ChartContext) → EChartsOption`; `buildOption.ts` dispatches on
  chart id. `ChartContext` carries `{ type, data, color, style, header, theme,
  staticFrame?, scale? }` — the same builder renders the live preview and the
  export. Shared helpers live in `common.ts` (axes, legend, grid insets, KPI
  header, font ladder, interaction states).
- **Registry** (`src/charts/registry.ts`) — 14 chart types (bar, line, area,
  pie family, scatter, jitter/strip, radar, treemap, funnel, gauge, heatmap,
  radial bar, positive/negative bar, waterfall). Adding a chart = one registry
  entry + one option builder. The "＋ More charts" catalog searches this list.
- **Color system** (`src/theme/colorScales.ts`) — `resolve(config, n)` returns
  mark colors for any variation (categorical / sequential / semantic /
  diverging / primary / secondary); ramps interpolate in **OKLab** beyond
  their token stops (straight-line mixing — no surprise hues through the
  neutral midpoint). `states()` supplies token Hover/Press colors; the
  `EChart` wrapper drives the pressed state (ECharts renders hover above
  select, so press rides on `emphasis`).
- **Data** (`src/data/*`) — one model, two shapes: `series` (cartesian) and
  `partition` (pie/treemap/funnel). The editor adapts to the chart type
  (single-series charts get a simple Category+Value editor).
- **Export** (`src/export/renderStaticSvg.tsx`) — ECharts' SSR SVG renderer at
  the requested pixel dimensions, animation off. Font sizes are pre-baked via
  `exportScale` and snapped to the type ladder (12/14/16/20/24/28…) because
  Figma won't rescale `<text>` on resize. Both light and dark variants are
  always produced; `clipboard.ts` copies, `CodeExport` emits the runnable
  ECharts option snippet.

## Figma-handoff gotchas (hard-won — don't regress)

1. **Font-family quoting**: the family string uses **single quotes**
   (`'Rookery New',…`) because ECharts emits it inside a double-quoted SVG
   `style="…"` attribute — double quotes produce invalid XML that Figma
   refuses to import. A test asserts this.
2. **Baselines**: Figma ignores `dominant-baseline="central"`, so
   `bakeBaselines()` rewrites it to `dy="0.32em"` — otherwise labels float
   above their swatches/ticks. Also test-guarded.
3. **Text sizing**: exports bake absolute font sizes for the chosen W×H
   (`exportScale`, geometric mean of the area ratio vs the 640×420 baseline),
   snapped to the ladder — no odd sizes like 11px or 22px.
4. All mark colors are exact token hexes — see the header/KPI, axis, and grid
   colors in `buildChartTheme.ts`.

## Verifying changes

```bash
npm test            # 48 tests: palettes, token traceability, export guarantees
npm run build       # typecheck + bundle
npm run gallery     # eyeball all 14 charts × 2 modes in preview/index.html
```

Manual round-trip: Export → **Copy** → paste into Figma (editable vectors,
real text) — or **Download** and drag the `.svg` in.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds this
app at base `/dataviz/` and nests it into the main site's Pages artifact →
**cake.lenovo.com/dataviz**. If you change the workflow, keep the dataviz
steps (they're what put the tool on the live site).
