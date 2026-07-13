// @vitest-environment node
import { describe, it, expect } from 'vitest';
import { optionToCode } from './optionToCode';
import { buildOption } from '../charts/options/buildOption';
import { CHART_IDS, CHART_REGISTRY } from '../charts/registry';
import { DEFAULT_STYLE } from '../charts/types';
import { buildChartTheme } from '../theme/buildChartTheme';
import { TOKENS } from '../tokens/loadTokens';

const theme = buildChartTheme(TOKENS, 'light');

describe('code snippet export', () => {
  it.each(CHART_IDS)('produces a runnable, self-contained snippet for %s', (id) => {
    const def = CHART_REGISTRY[id];
    const style = { ...DEFAULT_STYLE, ...def.defaultStyle };
    const code = optionToCode(
      buildOption({ type: id, data: def.preset(), color: { variation: 'categorical' }, style, theme }),
    );

    expect(code).toContain('chart.setOption(option)');
    expect(code).toContain('const option = {');
    // No closure variables leaked from the builders into serialized functions.
    expect(code).not.toMatch(/\bcategories\[/);
    expect(code).not.toContain('[object Object]');
    expect(code).not.toContain('=> (on ?');

    // The body (sans ESM import) must be syntactically valid JS.
    const body = code.replace(/^import .*$/m, '');
    expect(() => new Function('echarts', 'document', body)).not.toThrow();
  });
});
