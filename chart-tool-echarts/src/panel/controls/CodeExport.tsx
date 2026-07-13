import { useMemo, useState } from 'react';
import { useChartStore } from '../../state/chartStore';
import { buildOption } from '../../charts/options/buildOption';
import { optionToCode } from '../../export/optionToCode';
import { copyText, downloadText } from '../../export/clipboard';
import { CHART_REGISTRY } from '../../charts/registry';
import { buildChartTheme } from '../../theme/buildChartTheme';
import { TOKENS } from '../../tokens/loadTokens';
import type { Mode } from '../../tokens/tokens.types';

const MODES: Mode[] = ['light', 'dark'];

/** Copy/download the ECharts `option` (as runnable code) for the current chart, per mode. */
export function CodeExport() {
  const type = useChartStore((s) => s.type);
  const data = useChartStore((s) => s.data);
  const color = useChartStore((s) => s.color);
  const style = useChartStore((s) => s.style);
  const header = useChartStore((s) => s.header);
  const [open, setOpen] = useState(false);
  const [previewMode, setPreviewMode] = useState<Mode>('light');
  const [status, setStatus] = useState('');

  const codeFor = useMemo(() => {
    return (mode: Mode) =>
      optionToCode(buildOption({ type, data, color, style, header, theme: buildChartTheme(TOKENS, mode) }));
  }, [type, data, color, style, header]);

  const def = CHART_REGISTRY[type];
  const flash = (msg: string) => {
    setStatus(msg);
    window.setTimeout(() => setStatus(''), 2000);
  };

  return (
    <>
      <p className="field__hint">
        The ECharts <code>option</code> that renders this chart — colors resolved per mode, ready to
        paste into a project.
      </p>
      {MODES.map((mode) => (
        <div className="export-row" key={mode}>
          <span className="export-row__label">{mode}</span>
          <button
            type="button"
            className="btn btn--sm"
            onClick={async () => flash((await copyText(codeFor(mode))) ? `Copied ${mode} code` : 'Copy failed')}
          >
            Copy
          </button>
          <button
            type="button"
            className="btn btn--sm"
            onClick={() => {
              downloadText(codeFor(mode), `${def.exportName}-${mode}.js`);
              flash(`Downloaded ${mode} code`);
            }}
          >
            Download
          </button>
          <button
            type="button"
            className="btn btn--sm"
            onClick={() => {
              setPreviewMode(mode);
              setOpen((o) => (previewMode === mode ? !o : true));
            }}
            aria-expanded={open && previewMode === mode}
          >
            {open && previewMode === mode ? 'Hide' : 'View'}
          </button>
        </div>
      ))}
      {open ? (
        <pre className="code-block" tabIndex={0}>
          <code>{codeFor(previewMode)}</code>
        </pre>
      ) : null}
      <div className="export-status" role="status" aria-live="polite">
        {status}
      </div>
    </>
  );
}
