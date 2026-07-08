# Cake Charts — design-system charting tool

An internal web app for designers to pick/customize charts, preview their
animation, and hand them off to Figma as **clean, editable SVG**. Charts are
built from scratch (no dependency on the legacy design-system components) and are
**100% token-driven** — light and dark are derived from the same base tokens.

> Standalone app. It lives in `chart-tool/` and does not touch the rest of the repo.

## Quick start

```bash
cd chart-tool
npm install
npm run dev        # http://localhost:5173
```

Scripts:

| Script | What |
|--------|------|
| `npm run dev` | Vite dev server |
| `npm run build` | Typecheck (`tsc --noEmit`) + production build |
| `npm run typecheck` | Types only |
| `npm test` | Vitest (color system, theme token-traceability, SVG export) |

> ⚠️ This repo's path contains `&`, which breaks the npm/.bin cmd shims (and `npx`)
> on Windows. The npm scripts are therefore wired to call tools via `node <bin>`,
> so they work as-is. Avoid bare `npx vite` / `tsc` from this folder.

## Tokens (source of truth)

Chart tokens are **generated from the design system's Figma export** in the repo-root
`& theme.a/` folder (DTCG format), not hand-authored:

- `npm run build:tokens` reads `../& theme.a/Light.a.tokens.json` + `Dark.a.tokens.json`
  via `scripts/build-tokens.mjs` and writes `src/tokens/tokens.json` (structural tokens
  + the design system's **badge categorical palette**). It runs automatically on `prebuild`.
- The chart token names → DTCG paths mapping lives in `scripts/build-tokens.mjs`;
  required names are listed in `src/tokens/tokens.types.ts`.

> **Styling reference (pulled from Figma):** the six reference components were read
> live via the Figma MCP and their specs applied:
> - **Progress bar → bars:** pill fills (rounded, `radius = min(cornerRadius, barW/2)`,
>   default 12), solid flat categorical fills, track = `stroke/border`.
> - **Divider → grid/axis:** 1px strokes — axis baseline = `stroke/border`, gridlines = `stroke/border low`.
> - **Tooltips → hover:** radius 12, padding 8×12, two-layer shadow (heavier on dark),
>   bg = `surfaces/inverseContainer`, text = `text+icon/inverse`.
> - **Loading → spinner:** 3.5px stroke, primary arc on a `tonal/tonalSecondaryOverlay` track.
> Re-pull anytime with the Figma MCP; constants live in `src/theme/buildChartTheme.ts`.

## How it works

```
tokens.json ──► buildChartTheme(mode) ──► ChartTheme ──► chart components (visx SVG)
                       │                        ▲                 │
                 colorScales (OKLCH)            │            renderStaticSvg ──► copy / download (light + dark)
                 categorical + tonal,      ThemeProvider
                 mode-aware                (light/dark)
```

- **Color** (`src/theme/colorScales.ts`): **categorical** scales use the design
  system's authored badge palette (18 hues, already mode-correct); **tonal** scales
  are derived in **OKLCH** from the chosen base with per-mode lightness/chroma windows
  (lighter + slightly desaturated on dark, so colors don't go muddy). A near-neutral
  base (e.g. the DS's black/white secondary) is dropped from categorical leads so it
  doesn't read as text. Falls back to fully OKLCH-derived scales if no palette is present.
  Architected to add more bases and scale types (diverging, multi-hue) without rework.
- **Charts** (`src/charts/*`): Bar, Line, Area, Pie/Donut, Scatter — each built on
  shared primitives (`ChartFrame`, `Axis`, `GridLines`, `Legend`). Styling is mapped
  from the Figma references (progress→bars, divider→grid, tooltips→hover, button→
  controls, tables→data editor, loading→skeleton).
- **Registry** (`src/charts/registry.ts`): the one extension point. Add a chart =
  add one entry (preset + default style + component). Future types map cleanly:
  stacked/grouped reuse `series`; bubble reuses `xy` (size scale already present);
  sparkline is a chrome-disabled variant; combo composes primitives; heatmap adds a
  mark + reuses the tonal/sequential color path.
- **Data** (`src/data/*`): one model, three shapes — `series` (bar/line/area),
  `xy` (scatter), `partition` (pie). The data editor adapts to the shape and supports
  add / edit / drag-reorder / remove, seeded from per-type presets.
- **Animation** (`src/animation/motion.ts`): one shared timing (duration/easing/
  stagger) across all charts — bars grow, lines draw, areas reveal, arcs fade,
  points scale in. Preview-only; honors `prefers-reduced-motion`; stripped on export.
- **Export** (`src/export/*`): `renderChartSvg` re-renders the chart in `exportMode`
  (no motion, no interactivity) via `renderToStaticMarkup`, then `serializeSvg`
  normalizes it. Output has named `<g>` groups (`axis`, `bars`, `legend`, …), real
  `<text>`, `<title>`/`<desc>`, and no `foreignObject` — so Figma imports a tidy,
  editable layer tree. Both **light and dark** are offered, via **Copy** (clipboard
  writes `image/svg+xml` + `text/plain`) and **Download** `.svg`.

## Verifying the Figma handoff

`npm test` asserts every chart exports as `<svg>` with named groups + real `<text>`
in both modes. To verify the round-trip manually: Export → **Copy** → paste into
Figma (you should get vector layers grouped as `axis` / `bars` / `legend` …), and
**Download** → drag the `.svg` into Figma.

## Notes / future work

- During export you may see benign `useLayoutEffect` SSR warnings from framer-motion
  (renderToStaticMarkup). They don't affect output; tests confirm the SVG is clean.
- Future: CSV import, shareable config (URL/JSON), "download both" as a zip,
  per-chart code-splitting via the registry, ΔE palette nudging for >6 categories,
  Storybook for primitives, and visual snapshot tests.
