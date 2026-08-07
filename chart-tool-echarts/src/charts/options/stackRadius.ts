/**
 * Outer-only corner radii for a stacked bar column/row.
 *
 * ECharts stacks series[0] at the baseline. Only the farthest non-zero segment
 * (away from the category axis) gets rounded outer corners; the axis-adjacent
 * end and all middle segments stay sharp (radius 0). The 2px segment gap
 * separates adjacent fills visually.
 *
 * Returns `[tl, tr, br, bl]` in ECharts borderRadius order, or `0`.
 */
export function stackSegmentRadius(
  values: number[],
  seriesIndex: number,
  horizontal: boolean,
  r: number,
): number | number[] {
  let outer = -1;
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== 0) outer = i;
  }
  // All zeros — no visible mark.
  if (outer < 0) return 0;
  // Only the farthest (outer) segment is rounded.
  if (seriesIndex !== outer) return 0;

  if (horizontal) {
    // Stack grows left → right: round the right (far) end only.
    return [0, r, r, 0];
  }
  // Stack grows bottom → top: round the top end only.
  return [r, r, 0, 0];
}
