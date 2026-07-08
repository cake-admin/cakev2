import type { EChartsOption } from 'echarts';

/* eslint-disable @typescript-eslint/no-explicit-any */

const IDENT = /^[A-Za-z_$][A-Za-z0-9_$]*$/;

/** Re-indent a (possibly multi-line) function source under the current depth. */
function reindent(src: string, indent: string): string {
  const lines = src.replace(/\r\n/g, '\n').split('\n');
  return lines.map((line, i) => (i === 0 ? line : indent + line.trimStart())).join('\n');
}

/** Serialize a value to a JS literal. Functions emit their `__src` tag or source. */
function ser(value: any, indent: string): string {
  if (value === null) return 'null';
  const t = typeof value;

  if (t === 'function') {
    const src = value.__src ?? value.toString();
    return reindent(String(src), indent);
  }
  if (t === 'number' || t === 'boolean') return String(value);
  if (t === 'string') return JSON.stringify(value);

  if (Array.isArray(value)) {
    const items = value.filter((v) => v !== undefined);
    if (items.length === 0) return '[]';
    const inner = indent + '  ';
    return `[\n${items.map((v) => inner + ser(v, inner)).join(',\n')}\n${indent}]`;
  }

  if (t === 'object') {
    const keys = Object.keys(value).filter((k) => value[k] !== undefined && !k.startsWith('__'));
    if (keys.length === 0) return '{}';
    const inner = indent + '  ';
    const props = keys.map((k) => {
      const key = IDENT.test(k) ? k : JSON.stringify(k);
      return `${inner}${key}: ${ser(value[k], inner)}`;
    });
    return `{\n${props.join(',\n')}\n${indent}}`;
  }

  return 'undefined';
}

/**
 * Produce a runnable ECharts snippet that reproduces the current chart. Colors,
 * fonts, and sizes are already resolved to concrete values in the option, so the
 * snippet is self-contained (no design-token runtime needed).
 */
export function optionToCode(option: EChartsOption): string {
  const body = ser(option, '');
  return `import * as echarts from 'echarts';

// Mount target, e.g.: <div id="chart" style="width: 640px; height: 420px"></div>
const chart = echarts.init(document.getElementById('chart'));

const option = ${body};

chart.setOption(option);`;
}
