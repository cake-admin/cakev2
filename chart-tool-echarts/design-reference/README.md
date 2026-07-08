# Design reference (source of truth)

Drop the Figma component screenshots here. They are the **visual source of truth**
for the chart styling — each chart part is derived from the component that already
made that styling decision.

Expected files (any image format; names are a suggestion):

| File | Figma node | Drives |
|------|------------|--------|
| `button.png` | 2-1011 | Panel buttons, segmented controls, focus rings |
| `tables.png` | 2-6787 | In-panel data editor, optional data-table companion |
| `tooltips.png` | 2-10449 | Hover tooltip (bg, text, radius, shadow, caret) |
| `loading.png` | 3-1955 | Preview loading / skeleton, motion character |
| `progress-bar.png` | 2-10744 | Bar/column fills, rounded corners, track |
| `divider.png` | 2-10630 | Gridlines + axis baselines (stroke/weight/dash) |

Once these are in, tune the values in `src/theme/buildChartTheme.ts`
(`shape`, `tooltip`, gridline opacity, etc.) and the bar/area fill treatments to
match pixel-for-pixel. The architecture does not change — only the constants.
