/**
 * CSV / TSV import: text → neutral `Table` → `DataModel`.
 *
 * The table is kept raw (every parsed line, no header split) and projected into
 * whichever shape the active chart consumes, so switching chart type re-projects
 * the same numbers instead of falling back to a demo preset — and so the "first
 * row is a header" toggle costs nothing to flip.
 *
 * Hand-rolled rather than pulling in a parser: it's ~100 lines, it keeps the
 * tool dependency-free (this repo's `&` path breaks npm `.bin` shims), and
 * sniffing the delimiter gives us tab-separated paste-from-Excel for free.
 */

import {
  genId,
  type DataKind,
  type DataModel,
  type PartitionData,
  type SeriesData,
  type XYData,
} from './dataModel';

export interface Table {
  /** Every parsed line, including the header row if there is one. */
  cells: string[][];
  /** Width of the widest row; every row is padded to this. */
  columns: number;
  delimiter: string;
}

export interface Mapping {
  hasHeader: boolean;
  /** series / partition: the column supplying category or slice labels. */
  labelCol: number;
  /** series / partition: columns supplying numbers (partition uses the first). */
  valueCols: number[];
  /** xy: the numeric columns for each axis. `sizeCol: null` = uniform points. */
  xCol: number;
  yCol: number;
  sizeCol: number | null;
}

export type ImportOutcome =
  | { ok: true; table: Table; mapping: Mapping }
  | { ok: false; error: string };

/** Beyond these a chart stops being readable and the editor stops being usable. */
export const MAX_ROWS = 500;
export const MAX_SERIES = 24;
export const MAX_BYTES = 2_000_000;

const DELIMITERS = [',', ';', '\t', '|'];

/* ------------------------------------------------------------------ parsing */

/**
 * RFC 4180 field splitter: quoted fields may contain the delimiter, newlines,
 * and `""` escapes. Handles CRLF and LF, and skips wholly blank lines (trailing
 * newlines otherwise show up as a phantom row of empty categories).
 */
function splitRows(text: string, delimiter: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = '';
  let quoted = false;

  const endField = () => {
    row.push(field);
    field = '';
  };
  const endRow = () => {
    endField();
    if (row.some((c) => c.trim() !== '')) rows.push(row);
    row = [];
  };

  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];

    if (quoted) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i += 1;
        } else {
          quoted = false;
        }
      } else {
        field += ch;
      }
      continue;
    }

    if (ch === '"' && field === '') quoted = true;
    else if (ch === delimiter) endField();
    else if (ch === '\r') {
      if (text[i + 1] === '\n') i += 1;
      endRow();
    } else if (ch === '\n') endRow();
    else field += ch;
  }
  if (field !== '' || row.length) endRow();

  return rows;
}

/**
 * Score a delimiter by how consistently it produces the same field count.
 * A delimiter that isn't in the file yields one column per row → score 0.
 */
function scoreDelimiter(text: string, delimiter: string): number {
  const rows = splitRows(text, delimiter).slice(0, 20);
  if (!rows.length) return 0;
  const counts = new Map<number, number>();
  rows.forEach((r) => counts.set(r.length, (counts.get(r.length) ?? 0) + 1));
  let best = 0;
  let bestN = 0;
  counts.forEach((n, width) => {
    if (n > bestN || (n === bestN && width > best)) {
      best = width;
      bestN = n;
    }
  });
  if (best < 2) return 0;
  return best * (bestN / rows.length);
}

export function parseDelimited(input: string): Table {
  const text = input.replace(/^﻿/, '');
  let delimiter = DELIMITERS[0];
  let bestScore = -1;
  DELIMITERS.forEach((d) => {
    const score = scoreDelimiter(text, d);
    if (score > bestScore) {
      bestScore = score;
      delimiter = d;
    }
  });

  const rows = splitRows(text, delimiter);
  const columns = rows.reduce((max, r) => Math.max(max, r.length), 0);
  return {
    // Pad ragged rows so every downstream index is safe.
    cells: rows.map((r) => {
      const padded = r.map((c) => c.trim());
      while (padded.length < columns) padded.push('');
      return padded;
    }),
    columns,
    delimiter,
  };
}

/* ------------------------------------------------------------------ numbers */

/**
 * Coerce a spreadsheet cell to a number, or `null` if it isn't one. Real
 * exports are full of `$1,234.00`, `45%`, `(12)` (accounting negative) and
 * European `1.234,56` — reading those as 0 would quietly draw a wrong chart.
 *
 * Percentages keep their face value: `45%` → 45, because that's the number a
 * designer expects to see plotted.
 */
export function parseNumber(raw: string | undefined | null): number | null {
  if (raw == null) return null;
  let s = String(raw).trim();
  if (!s) return null;

  let negative = false;
  if (/^\(.*\)$/.test(s)) {
    negative = true;
    s = s.slice(1, -1).trim();
  }

  s = s.replace(/[$€£¥₹%]/g, '').replace(/[\s _]/g, '');
  if (/^[+-]/.test(s)) {
    if (s[0] === '-') negative = !negative;
    s = s.slice(1);
  }
  if (!s) return null;

  const dots = (s.match(/\./g) ?? []).length;
  const commas = (s.match(/,/g) ?? []).length;
  if (commas && dots) {
    // Whichever separator comes last is the decimal point.
    if (s.lastIndexOf(',') > s.lastIndexOf('.')) s = s.replace(/\./g, '').replace(',', '.');
    else s = s.replace(/,/g, '');
  } else if (commas) {
    const tail = s.slice(s.lastIndexOf(',') + 1);
    // `1,234` is ambiguous; groups of exactly 3 digits read as thousands
    // separators (the common case), anything else as a decimal comma.
    if (commas > 1 || tail.length === 3) s = s.replace(/,/g, '');
    else s = s.replace(',', '.');
  } else if (dots > 1) {
    s = s.replace(/\./g, '');
  }

  if (!/^\d*\.?\d+$/.test(s) && !/^\d+\.$/.test(s)) return null;
  const n = Number(s);
  if (!Number.isFinite(n)) return null;
  return negative ? -n : n;
}

/* ------------------------------------------------------------------ mapping */

export function headersOf(table: Table, mapping: Mapping): string[] {
  const head = mapping.hasHeader ? table.cells[0] : undefined;
  return Array.from({ length: table.columns }, (_, i) => head?.[i]?.trim() || `Column ${i + 1}`);
}

export function bodyOf(table: Table, mapping: Mapping): string[][] {
  return mapping.hasHeader ? table.cells.slice(1) : table.cells;
}

/** Share of non-empty cells in a column that read as numbers. */
function numericShare(rows: string[][], col: number): number {
  const filled = rows.map((r) => r[col] ?? '').filter((c) => c !== '');
  if (!filled.length) return 0;
  return filled.filter((c) => parseNumber(c) !== null).length / filled.length;
}

function countNumeric(row: string[] | undefined): number {
  return (row ?? []).filter((c) => parseNumber(c) !== null).length;
}

export function inferMapping(table: Table): Mapping {
  // A header row is a row with fewer numbers in it than the rows below.
  const below = table.cells.slice(1, 6);
  const hasHeader =
    table.cells.length > 1 && countNumeric(table.cells[0]) < Math.max(...below.map(countNumeric), 0);

  const body = hasHeader ? table.cells.slice(1) : table.cells;
  const cols = Array.from({ length: table.columns }, (_, i) => i);
  const numeric = cols.filter((c) => numericShare(body, c) >= 0.6);

  const labelCol = cols.find((c) => !numeric.includes(c)) ?? 0;
  const valueCols = numeric.filter((c) => c !== labelCol);

  return {
    hasHeader,
    labelCol,
    valueCols: valueCols.length ? valueCols : cols.filter((c) => c !== labelCol),
    xCol: numeric[0] ?? 0,
    yCol: numeric[1] ?? (numeric[0] === 0 ? 1 : 0),
    sizeCol: numeric[2] ?? null,
  };
}

/* --------------------------------------------------------------- projection */

export interface Projection {
  data: DataModel;
  warnings: string[];
}

function label(row: string[], mapping: Mapping, i: number): string {
  return row[mapping.labelCol]?.trim() || `Row ${i + 1}`;
}

/**
 * Project the table into the shape the chart consumes. Always returns a usable
 * `DataModel` — the import is validated up front by `importText`, so the
 * fallbacks here only matter for a mapping the user has narrowed to nothing.
 */
export function toDataModel(table: Table, mapping: Mapping, kind: DataKind): Projection {
  const warnings: string[] = [];
  const heads = headersOf(table, mapping);

  let body = bodyOf(table, mapping);
  if (body.length > MAX_ROWS) {
    warnings.push(`Showing the first ${MAX_ROWS} of ${body.length} rows.`);
    body = body.slice(0, MAX_ROWS);
  }

  const cols = Array.from({ length: table.columns }, (_, i) => i);
  let valueCols = mapping.valueCols.filter((c) => c < table.columns);
  if (!valueCols.length) valueCols = cols.filter((c) => c !== mapping.labelCol).slice(0, 1);

  if (kind === 'xy') {
    const points: XYData['points'] = [];
    let dropped = 0;
    body.forEach((row) => {
      const x = parseNumber(row[mapping.xCol]);
      const y = parseNumber(row[mapping.yCol]);
      if (x === null || y === null) {
        dropped += 1;
        return;
      }
      const size = mapping.sizeCol === null ? undefined : parseNumber(row[mapping.sizeCol]) ?? undefined;
      points.push({ id: genId('pt'), x, y, ...(size === undefined ? {} : { size }) });
    });
    if (dropped) warnings.push(`Skipped ${dropped} row${dropped === 1 ? '' : 's'} without numeric x and y.`);
    return { data: { kind: 'xy', points } satisfies XYData, warnings };
  }

  if (kind === 'partition') {
    const col = valueCols[0];
    if (valueCols.length > 1) warnings.push(`This chart uses one value column — showing “${heads[col]}”.`);
    const slices: PartitionData['slices'] = body.map((row, i) => ({
      id: genId('slice'),
      label: label(row, mapping, i),
      value: parseNumber(row[col]) ?? 0,
    }));
    return { data: { kind: 'partition', slices } satisfies PartitionData, warnings };
  }

  if (valueCols.length > MAX_SERIES) {
    warnings.push(`Showing the first ${MAX_SERIES} of ${valueCols.length} value columns.`);
    valueCols = valueCols.slice(0, MAX_SERIES);
  }

  // Every series shares the same ordered x values — the matrix editor reads its
  // categories from series[0] and edits the rest positionally.
  let blanks = 0;
  const series: SeriesData['series'] = valueCols.map((col) => ({
    id: genId('series'),
    name: heads[col],
    points: body.map((row, i) => {
      const y = parseNumber(row[col]);
      if (y === null && (row[col] ?? '') !== '') blanks += 1;
      return { x: label(row, mapping, i), y: y ?? 0 };
    }),
  }));
  if (blanks) warnings.push(`${blanks} cell${blanks === 1 ? " wasn't a number" : "s weren't numbers"} — read as 0.`);

  return { data: { kind: 'series', series } satisfies SeriesData, warnings };
}

/* -------------------------------------------------------------- entry point */

/** Parse pasted or uploaded text, rejecting anything that can't make a chart. */
export function importText(text: string): ImportOutcome {
  if (text.length > MAX_BYTES) return { ok: false, error: 'That file is over 2 MB — try a smaller export.' };

  const table = parseDelimited(text);
  if (!table.cells.length) return { ok: false, error: "That file looks empty — there's nothing to chart." };
  if (table.columns < 2) return { ok: false, error: 'Needs at least two columns: labels and values.' };

  const mapping = inferMapping(table);
  // `inferMapping` only claims a header when there are rows beneath it, so the
  // body is never empty here — a header-only file reads as one headerless row
  // and is caught by the numeric check below.
  const hasNumbers = Array.from({ length: table.columns }, (_, i) => i).some(
    (c) => numericShare(bodyOf(table, mapping), c) >= 0.6,
  );
  if (!hasNumbers) return { ok: false, error: "No numeric column found — check the file's number formatting." };

  return { ok: true, table, mapping };
}
