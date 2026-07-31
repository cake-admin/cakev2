import { describe, it, expect, beforeEach } from 'vitest';
import {
  bodyOf,
  headersOf,
  importText,
  inferMapping,
  parseDelimited,
  parseNumber,
  toDataModel,
  MAX_ROWS,
  MAX_SERIES,
} from './csv';
import { isPartition, isSeries, isXY } from './dataModel';
import { useChartStore } from '../state/chartStore';

const SALES = 'Region,Q1,Q2\nNorth,120,180\nSouth,90,140\nEast,150,110';

function parse(text: string) {
  const table = parseDelimited(text);
  return { table, mapping: inferMapping(table) };
}

describe('parseDelimited', () => {
  it('keeps a quoted field containing the delimiter intact', () => {
    const { cells } = parseDelimited('a,b\n"North, upper",5');
    expect(cells[1]).toEqual(['North, upper', '5']);
  });

  it('unescapes doubled quotes', () => {
    const { cells } = parseDelimited('a,b\n"say ""hi""",5');
    expect(cells[1][0]).toBe('say "hi"');
  });

  it('handles a newline inside a quoted field', () => {
    const { cells } = parseDelimited('a,b\n"two\nlines",5');
    expect(cells).toHaveLength(2);
    expect(cells[1][0]).toBe('two\nlines');
  });

  it('handles CRLF line endings', () => {
    const { cells } = parseDelimited('a,b\r\n1,2\r\n3,4');
    expect(cells).toEqual([
      ['a', 'b'],
      ['1', '2'],
      ['3', '4'],
    ]);
  });

  it('strips a leading BOM', () => {
    expect(parseDelimited('﻿Region,Q1\nNorth,1').cells[0][0]).toBe('Region');
  });

  it('skips blank lines, including a trailing newline', () => {
    expect(parseDelimited('a,b\n1,2\n\n3,4\n').cells).toHaveLength(3);
  });

  it('sniffs semicolons (European exports)', () => {
    const t = parseDelimited('Region;Q1\nNorth;120');
    expect(t.delimiter).toBe(';');
    expect(t.cells[1]).toEqual(['North', '120']);
  });

  it('sniffs tabs (pasted from a spreadsheet)', () => {
    const t = parseDelimited('Region\tQ1\nNorth\t120');
    expect(t.delimiter).toBe('\t');
    expect(t.columns).toBe(2);
  });

  it('reads a quoted thousands-separated number inside a comma file', () => {
    const { table, mapping } = parse('Region,Revenue\nNorth,"1,234"\nSouth,"2,000"');
    const { data } = toDataModel(table, mapping, 'series');
    if (!isSeries(data)) throw new Error('expected series');
    expect(data.series[0].points.map((p) => p.y)).toEqual([1234, 2000]);
  });

  it('reads European decimals from a semicolon file', () => {
    const { table, mapping } = parse('Region;Umsatz\nNord;1.234,56\nSüd;987,25');
    const { data } = toDataModel(table, mapping, 'series');
    if (!isSeries(data)) throw new Error('expected series');
    expect(data.series[0].points.map((p) => p.y)).toEqual([1234.56, 987.25]);
  });

  it('pads ragged rows to the widest row', () => {
    const t = parseDelimited('a,b,c\n1,2\n3,4,5');
    expect(t.columns).toBe(3);
    t.cells.forEach((r) => expect(r).toHaveLength(3));
    expect(t.cells[1][2]).toBe('');
  });
});

describe('parseNumber', () => {
  it.each([
    ['120', 120],
    ['-4.5', -4.5],
    ['$1,234.00', 1234],
    ['1,234', 1234],
    ['45%', 45],
    ['(12)', -12],
    ['($1,200)', -1200],
    ['1.234,56', 1234.56],
    ['12,5', 12.5],
    ['1 234', 1234],
    ['+7', 7],
  ])('reads %s as %s', (input, expected) => {
    expect(parseNumber(input)).toBe(expected);
  });

  it.each(['', '   ', 'n/a', 'North', '12abc', '--', null, undefined])('rejects %s', (input) => {
    expect(parseNumber(input as string)).toBeNull();
  });
});

describe('inferMapping', () => {
  it('detects a header row and maps labels then values', () => {
    const { mapping } = parse(SALES);
    expect(mapping).toMatchObject({ hasHeader: true, labelCol: 0, valueCols: [1, 2] });
  });

  it('detects a file with no header row', () => {
    const { table, mapping } = parse('North,120,180\nSouth,90,140');
    expect(mapping.hasHeader).toBe(false);
    expect(bodyOf(table, mapping)).toHaveLength(2);
    expect(headersOf(table, mapping)).toEqual(['Column 1', 'Column 2', 'Column 3']);
  });

  it('picks the first non-numeric column as the label column', () => {
    const { mapping } = parse('Id,Region,Value\n1,North,120\n2,South,90');
    expect(mapping.labelCol).toBe(1);
    expect(mapping.valueCols).toEqual([0, 2]);
  });

  it('maps the first three numeric columns to x/y/size', () => {
    const { mapping } = parse('x,y,r\n1,2,3\n4,5,6');
    expect(mapping).toMatchObject({ xCol: 0, yCol: 1, sizeCol: 2 });
  });

  it('uses the first column as labels when every column is numeric (e.g. years)', () => {
    const { table, mapping } = parse('Year,Revenue\n2023,120\n2024,180');
    expect(mapping.labelCol).toBe(0);
    expect(mapping.valueCols).toEqual([1]);
    const { data } = toDataModel(table, mapping, 'series');
    if (!isSeries(data)) throw new Error('expected series');
    expect(data.series[0].points.map((p) => p.x)).toEqual(['2023', '2024']);
  });

  it('treats a column as numeric despite a few blanks', () => {
    const { mapping } = parse('Region,Q1\nNorth,120\nSouth,\nEast,150\nWest,90');
    expect(mapping.valueCols).toEqual([1]);
  });
});

describe('toDataModel', () => {
  it('projects to series: one series per value column, shared categories', () => {
    const { table, mapping } = parse(SALES);
    const { data } = toDataModel(table, mapping, 'series');
    if (!isSeries(data)) throw new Error('expected series');
    expect(data.series.map((s) => s.name)).toEqual(['Q1', 'Q2']);
    expect(data.series[0].points).toEqual([
      { x: 'North', y: 120 },
      { x: 'South', y: 90 },
      { x: 'East', y: 150 },
    ]);
    // The matrix editor reads categories from series[0] and edits positionally.
    expect(data.series[1].points.map((p) => p.x)).toEqual(data.series[0].points.map((p) => p.x));
    data.series.forEach((s) => expect(s.id).toBeTruthy());
  });

  it('projects to partition using the first value column, and says so', () => {
    const { table, mapping } = parse(SALES);
    const { data, warnings } = toDataModel(table, mapping, 'partition');
    if (!isPartition(data)) throw new Error('expected partition');
    expect(data.slices.map((s) => [s.label, s.value])).toEqual([
      ['North', 120],
      ['South', 90],
      ['East', 150],
    ]);
    expect(warnings.join(' ')).toContain('one value column');
  });

  it('projects to xy and drops rows without numeric x and y', () => {
    const { table, mapping } = parse('x,y,r\n1,2,3\nn/a,5,6\n7,8,9');
    const { data, warnings } = toDataModel(table, mapping, 'xy');
    if (!isXY(data)) throw new Error('expected xy');
    expect(data.points.map((p) => [p.x, p.y, p.size])).toEqual([
      [1, 2, 3],
      [7, 8, 9],
    ]);
    expect(warnings.join(' ')).toContain('Skipped 1 row');
  });

  it('omits size when no size column is mapped', () => {
    const { table, mapping } = parse('x,y\n1,2');
    const { data } = toDataModel(table, { ...mapping, sizeCol: null }, 'xy');
    if (!isXY(data)) throw new Error('expected xy');
    expect(data.points[0].size).toBeUndefined();
  });

  it('reads non-numeric cells as 0 and counts them', () => {
    const { table, mapping } = parse('Region,Q1\nNorth,120\nSouth,n/a');
    const { data, warnings } = toDataModel(table, mapping, 'series');
    if (!isSeries(data)) throw new Error('expected series');
    expect(data.series[0].points[1].y).toBe(0);
    expect(warnings.join(' ')).toContain("1 cell wasn't a number");
  });

  it('falls back to a positional label when the label cell is empty', () => {
    const { table, mapping } = parse('Region,Q1\n,120');
    const { data } = toDataModel(table, mapping, 'series');
    if (!isSeries(data)) throw new Error('expected series');
    expect(data.series[0].points[0].x).toBe('Row 1');
  });

  it('truncates past the row and series caps, with a warning each', () => {
    const cols = Array.from({ length: MAX_SERIES + 3 }, (_, i) => `C${i}`);
    const header = ['Region', ...cols].join(',');
    const rows = Array.from({ length: MAX_ROWS + 10 }, (_, i) => [`r${i}`, ...cols.map(() => '1')].join(','));
    const { table, mapping } = parse([header, ...rows].join('\n'));
    const { data, warnings } = toDataModel(table, mapping, 'series');
    if (!isSeries(data)) throw new Error('expected series');
    expect(data.series).toHaveLength(MAX_SERIES);
    expect(data.series[0].points).toHaveLength(MAX_ROWS);
    expect(warnings.join(' ')).toContain(`first ${MAX_ROWS}`);
    expect(warnings.join(' ')).toContain(`first ${MAX_SERIES}`);
  });
});

describe('importText', () => {
  it('accepts a well-formed file', () => {
    const out = importText(SALES);
    expect(out.ok).toBe(true);
  });

  it.each([
    ['', 'empty'],
    ['just\none\ncolumn', 'two columns'],
    ['Region,Notes\nNorth,fine\nSouth,ok', 'No numeric column'],
    ['Region,Q1', 'No numeric column'], // header-only: nothing below it to chart
  ])('rejects %j', (text, fragment) => {
    const out = importText(text);
    expect(out.ok).toBe(false);
    if (!out.ok) expect(out.error).toContain(fragment);
  });
});

describe('chartStore import', () => {
  beforeEach(() => {
    useChartStore.getState().resetData();
    useChartStore.getState().setType('bar');
  });

  it('adopting an import replaces the preset data', () => {
    const out = importText(SALES);
    if (!out.ok) throw new Error(out.error);
    useChartStore.getState().setImport(out.table, out.mapping, 'sales.csv');

    const { data, importName } = useChartStore.getState();
    if (!isSeries(data)) throw new Error('expected series');
    expect(importName).toBe('sales.csv');
    expect(data.series[0].points.map((p) => p.x)).toEqual(['North', 'South', 'East']);
  });

  it('keeps imported data across a chart-type switch, re-shaped per chart', () => {
    const out = importText(SALES);
    if (!out.ok) throw new Error(out.error);
    useChartStore.getState().setImport(out.table, out.mapping, 'sales.csv');

    useChartStore.getState().setType('line');
    const line = useChartStore.getState().data;
    if (!isSeries(line)) throw new Error('expected series');
    expect(line.series[0].points.map((p) => p.x)).toEqual(['North', 'South', 'East']);

    useChartStore.getState().setType('pie');
    const pie = useChartStore.getState().data;
    if (!isPartition(pie)) throw new Error('expected partition');
    expect(pie.slices.map((s) => s.label)).toEqual(['North', 'South', 'East']);

    useChartStore.getState().setType('scatter');
    const scatter = useChartStore.getState().data;
    if (!isXY(scatter)) throw new Error('expected xy');
    expect(scatter.points.map((p) => [p.x, p.y])).toEqual([
      [120, 180],
      [90, 140],
      [150, 110],
    ]);
  });

  it('re-projects when the mapping changes', () => {
    const out = importText(SALES);
    if (!out.ok) throw new Error(out.error);
    useChartStore.getState().setImport(out.table, out.mapping, 'sales.csv');
    useChartStore.getState().setMapping({ ...out.mapping, valueCols: [2] });

    const data = useChartStore.getState().data;
    if (!isSeries(data)) throw new Error('expected series');
    expect(data.series.map((s) => s.name)).toEqual(['Q2']);
  });

  it('always yields something to draw, even with the mapping narrowed to nothing', () => {
    const out = importText(SALES);
    if (!out.ok) throw new Error(out.error);
    useChartStore.getState().setImport(out.table, out.mapping, 'sales.csv');
    useChartStore.getState().setMapping({ ...out.mapping, valueCols: [] });

    const data = useChartStore.getState().data;
    if (!isSeries(data)) throw new Error('expected series');
    expect(data.series).toHaveLength(1);
    expect(data.series[0].points.length).toBeGreaterThan(0);
  });

  it('falls back to presets after resetData', () => {
    const out = importText(SALES);
    if (!out.ok) throw new Error(out.error);
    useChartStore.getState().setImport(out.table, out.mapping, 'sales.csv');
    useChartStore.getState().resetData();

    expect(useChartStore.getState().importedTable).toBeNull();
    useChartStore.getState().setType('line');
    const data = useChartStore.getState().data;
    if (!isSeries(data)) throw new Error('expected series');
    expect(data.series[0].points[0].x).toBe('Jan');
  });
});
