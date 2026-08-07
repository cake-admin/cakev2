import { useMemo, useState } from 'react';
import { useChartStore } from '../../state/chartStore';
import { buildOption } from '../../charts/options/buildOption';
import { optionToCode } from '../../export/optionToCode';
import {
  buildEchartsTheme,
  echartsThemeName,
  echartsThemeToCode,
} from '../../export/echartsTheme';
import { copyText, downloadText } from '../../export/clipboard';
import { CHART_REGISTRY } from '../../charts/registry';
import { buildChartTheme } from '../../theme/buildChartTheme';
import { TOKENS } from '../../tokens/loadTokens';
import type { Mode } from '../../tokens/tokens.types';

const MODES: Mode[] = ['light', 'dark', 'hct'];

type ExportKind = 'option' | 'theme';

/** Copy/download chart option code and a reusable ECharts theme per mode. */
export function CodeExport() {
  const type = useChartStore((s) => s.type);
  const data = useChartStore((s) => s.data);
  const color = useChartStore((s) => s.color);
  const style = useChartStore((s) => s.style);
  const header = useChartStore((s) => s.header);
  const [open, setOpen] = useState<{ kind: ExportKind; mode: Mode } | null>(null);
  const [status, setStatus] = useState('');

  const optionCodeFor = useMemo(() => {
    return (mode: Mode) =>
      optionToCode(buildOption({ type, data, color, style, header, theme: buildChartTheme(TOKENS, mode) }));
  }, [type, data, color, style, header]);

  const themeCodeFor = useMemo(() => {
    return (mode: Mode) => {
      const theme = buildChartTheme(TOKENS, mode);
      const name = echartsThemeName(mode, color.variation);
      return echartsThemeToCode(buildEchartsTheme(theme, color), name);
    };
  }, [color]);

  const def = CHART_REGISTRY[type];
  const flash = (msg: string) => {
    setStatus(msg);
    window.setTimeout(() => setStatus(''), 2000);
  };

  const toggleView = (kind: ExportKind, mode: Mode) => {
    setOpen((cur) => (cur && cur.kind === kind && cur.mode === mode ? null : { kind, mode }));
  };

  const preview =
    open == null
      ? null
      : open.kind === 'option'
        ? optionCodeFor(open.mode)
        : themeCodeFor(open.mode);

  return (
    <>
      <div className="field__label" style={{ marginTop: 4 }}>
        Chart option
      </div>
      <p className="field__hint">
        The ECharts <code>option</code> for this chart — colors resolved per mode, ready to paste.
      </p>
      {MODES.map((mode) => (
        <div className="export-row" key={`option-${mode}`}>
          <span className="export-row__label">{mode}</span>
          <button
            type="button"
            className="btn btn--sm"
            onClick={async () =>
              flash((await copyText(optionCodeFor(mode))) ? `Copied ${mode} option` : 'Copy failed')
            }
          >
            Copy
          </button>
          <button
            type="button"
            className="btn btn--sm"
            onClick={() => {
              downloadText(optionCodeFor(mode), `${def.exportName}-${mode}.js`);
              flash(`Downloaded ${mode} option`);
            }}
          >
            Download
          </button>
          <button
            type="button"
            className="btn btn--sm"
            onClick={() => toggleView('option', mode)}
            aria-expanded={open?.kind === 'option' && open.mode === mode}
          >
            {open?.kind === 'option' && open.mode === mode ? 'Hide' : 'View'}
          </button>
        </div>
      ))}

      <div className="field__label" style={{ marginTop: 16 }}>
        ECharts theme
      </div>
      <p className="field__hint">
        A reusable <code>echarts.registerTheme(...)</code> object from the current Color theme and
        mode — not chart-specific. Use with <code>echarts.init(dom, themeName)</code>.
      </p>
      {MODES.map((mode) => (
        <div className="export-row" key={`theme-${mode}`}>
          <span className="export-row__label">{mode}</span>
          <button
            type="button"
            className="btn btn--sm"
            onClick={async () =>
              flash((await copyText(themeCodeFor(mode))) ? `Copied ${mode} theme` : 'Copy failed')
            }
          >
            Copy
          </button>
          <button
            type="button"
            className="btn btn--sm"
            onClick={() => {
              downloadText(
                themeCodeFor(mode),
                `cake-echarts-theme-${mode}-${color.variation}.js`,
              );
              flash(`Downloaded ${mode} theme`);
            }}
          >
            Download
          </button>
          <button
            type="button"
            className="btn btn--sm"
            onClick={() => toggleView('theme', mode)}
            aria-expanded={open?.kind === 'theme' && open.mode === mode}
          >
            {open?.kind === 'theme' && open.mode === mode ? 'Hide' : 'View'}
          </button>
        </div>
      ))}

      {preview ? (
        <pre className="code-block" tabIndex={0}>
          <code>{preview}</code>
        </pre>
      ) : null}
      <div className="export-status" role="status" aria-live="polite">
        {status}
      </div>
    </>
  );
}
