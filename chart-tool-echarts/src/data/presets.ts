import { genId, type PartitionData, type SeriesData, type XYData } from './dataModel';

/** Factories so every load/reset gets fresh ids (needed for the dnd editor). */

export function barPreset(): SeriesData {
  // Three series so grouped/stacked variants demo well; "single" mode uses the first.
  const cats = ['Q1', 'Q2', 'Q3', 'Q4'];
  const a = [42, 58, 35, 71];
  const b = [30, 40, 28, 52];
  const c = [22, 33, 19, 44];
  return {
    kind: 'series',
    series: [
      { id: genId('series'), name: '2023', points: cats.map((x, i) => ({ x, y: a[i] })) },
      { id: genId('series'), name: '2024', points: cats.map((x, i) => ({ x, y: b[i] })) },
      { id: genId('series'), name: '2025', points: cats.map((x, i) => ({ x, y: c[i] })) },
    ],
  };
}

export function linePreset(): SeriesData {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const a = [20, 34, 31, 48, 52, 61];
  const b = [12, 18, 27, 33, 41, 55];
  return {
    kind: 'series',
    series: [
      { id: genId('series'), name: '2024', points: months.map((m, i) => ({ x: m, y: a[i] })) },
      { id: genId('series'), name: '2025', points: months.map((m, i) => ({ x: m, y: b[i] })) },
    ],
  };
}

export function areaPreset(): SeriesData {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const a = [30, 44, 39, 58, 66, 79];
  const b = [18, 26, 33, 40, 49, 62];
  return {
    kind: 'series',
    series: [
      { id: genId('series'), name: 'Organic', points: months.map((m, i) => ({ x: m, y: a[i] })) },
      { id: genId('series'), name: 'Paid', points: months.map((m, i) => ({ x: m, y: b[i] })) },
    ],
  };
}

export function piePreset(): PartitionData {
  return {
    kind: 'partition',
    slices: [
      { id: genId('slice'), label: 'Desktop', value: 52 },
      { id: genId('slice'), label: 'Mobile', value: 34 },
      { id: genId('slice'), label: 'Tablet', value: 9 },
      { id: genId('slice'), label: 'Other', value: 5 },
    ],
  };
}

export function radarPreset(): SeriesData {
  const axes = ['Speed', 'Power', 'Range', 'Comfort', 'Tech', 'Value'];
  const a = [70, 55, 40, 65, 80, 50];
  const b = [45, 72, 62, 50, 55, 78];
  return {
    kind: 'series',
    series: [
      { id: genId('series'), name: 'Model A', points: axes.map((x, i) => ({ x, y: a[i] })) },
      { id: genId('series'), name: 'Model B', points: axes.map((x, i) => ({ x, y: b[i] })) },
    ],
  };
}

export function treemapPreset(): PartitionData {
  const items: Array<[string, number]> = [
    ['Search', 42],
    ['Direct', 28],
    ['Social', 19],
    ['Email', 13],
    ['Referral', 9],
    ['Ads', 7],
  ];
  return {
    kind: 'partition',
    slices: items.map(([label, value]) => ({ id: genId('slice'), label, value })),
  };
}

export function jitterPreset(): SeriesData {
  // Categorical strip / jitter plot: each series repeats the same ordered list of
  // size buckets (aligned across series so the matrix editor stays consistent),
  // with several points per bucket to read as a distribution cloud.
  const cats = ['Xs', 'Xs', 'Xs', 'S', 'S', 'S', 'M', 'M', 'M', 'L', 'L', 'L', 'XL', 'XL', 'XL', 'XXl', 'XXl', 'XXl'];
  const a = [37, 31, 20, -6, 18, -4, 4, 15, -1, -10, 14, -16, -5, 20, 11, 1, 21, -5];
  const b = [-6, -24, -9, 20, -3, 17, 29, 8, -2, 24, 5, -5, 6, -6, 3, 27, 13, -4];
  const c = [-8, 17, -4, 15, 28, 0, 13, 23, 7, 36, -11, 6, 19, 5, -6, 31, -16, 12];
  return {
    kind: 'series',
    series: [
      { id: genId('series'), name: 'Product 1', points: cats.map((x, i) => ({ x, y: a[i] })) },
      { id: genId('series'), name: 'Product 2', points: cats.map((x, i) => ({ x, y: b[i] })) },
      { id: genId('series'), name: 'Product 3', points: cats.map((x, i) => ({ x, y: c[i] })) },
    ],
  };
}

export function heatmapPreset(): SeriesData {
  // A matrix: columns = days (x), rows = series (y), cell = value. Reuses the
  // series shape so the matrix data editor edits cells directly.
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const rows: Array<[string, number[]]> = [
    ['Team A', [12, 34, 56, 41, 22]],
    ['Team B', [48, 27, 18, 63, 39]],
    ['Team C', [9, 52, 44, 31, 70]],
    ['Team D', [25, 16, 61, 47, 33]],
  ];
  return {
    kind: 'series',
    series: rows.map(([name, vals]) => ({
      id: genId('series'),
      name,
      points: days.map((x, i) => ({ x, y: vals[i] })),
    })),
  };
}

export function posNegPreset(): SeriesData {
  // Net change per month — mix of positive & negative so the semantic coloring shows.
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
  const v = [24, -12, 31, -8, 18, -22, 40, -6];
  return {
    kind: 'series',
    series: [{ id: genId('series'), name: 'Net change', points: months.map((x, i) => ({ x, y: v[i] })) }],
  };
}

export function waterfallPreset(): SeriesData {
  // Sequential deltas; the chart accumulates them into a running total.
  const steps: Array<[string, number]> = [
    ['Sales', 50],
    ['Refunds', -12],
    ['Upsell', 28],
    ['Churn', -20],
    ['Fees', -8],
  ];
  return {
    kind: 'series',
    series: [{ id: genId('series'), name: 'Cash flow', points: steps.map(([x, y]) => ({ x, y })) }],
  };
}

export function scatterPreset(): XYData {
  const pts: Array<[number, number, number]> = [
    [12, 22, 8],
    [18, 30, 14],
    [25, 18, 6],
    [31, 45, 20],
    [38, 33, 11],
    [44, 52, 16],
    [50, 41, 9],
    [57, 63, 22],
    [63, 48, 13],
    [70, 72, 18],
    [76, 59, 10],
    [82, 81, 24],
  ];
  return {
    kind: 'xy',
    points: pts.map(([x, y, size]) => ({ id: genId('pt'), x, y, size })),
  };
}
