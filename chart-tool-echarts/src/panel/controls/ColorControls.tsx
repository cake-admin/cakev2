import { useMemo } from 'react';
import { useChartStore } from '../../state/chartStore';
import { useChartTheme } from '../../theme/ThemeProvider';
import { SINGLE_TOKENS } from '../../tokens/loadTokens';
import type { Variation } from '../../theme/chartTheme.types';
import type { SingleToken } from '../../tokens/tokens.types';

const VARIATIONS: Array<{ id: Variation; label: string; hint: string; hidden?: boolean }> = [
  { id: 'categorical', label: 'Categorical', hint: 'Distinct cake& tones — identical in light & dark' },
  { id: 'sequential', label: 'Sequential', hint: 'Single-hue indigo ramp (light→dark) — heatmap, area, funnel' },
  { id: 'semantic', label: 'Semantic', hint: 'Red→green ramp (bad→good) — gauge, KPI, heatmap' },
  { id: 'diverging', label: 'Diverging', hint: 'Jade↔violet two-ended ramp — heatmap, choropleth' },
  { id: 'primary', label: 'Primary', hint: 'Pick one primary-family token', hidden: true },
  { id: 'secondary', label: 'Wireframe', hint: 'Pick one wireframe token from the secondary family' },
];

const VISIBLE_VARIATIONS = VARIATIONS.filter((v) => !v.hidden);

/** Variations that pick a single token from a family (vs. a fixed palette). */
const TOKEN_VARIATIONS: ReadonlySet<Variation> = new Set(['primary', 'secondary']);

const KIND_ORDER = ['Normal', 'Tonal', 'Overlay'] as const;
type Kind = (typeof KIND_ORDER)[number];

/** Which base family a token belongs to (tonal* is a primary tint; tonalSecondary* is secondary). */
function baseOf(label: string): 'primary' | 'secondary' {
  return label.startsWith('secondary') || label.startsWith('tonalSecondary') ? 'secondary' : 'primary';
}
function kindOf(label: string): Kind {
  if (/overlay/i.test(label)) return 'Overlay';
  if (label.startsWith('tonal')) return 'Tonal';
  return 'Normal';
}

const displayValue = (color: string): string => (color.startsWith('#') ? color.toUpperCase() : color);
const DEFAULT_TOKEN: Record<'primary' | 'secondary', string> = {
  primary: 'primary.primary',
  secondary: 'secondary.secondary',
};

export function ColorControls() {
  const color = useChartStore((s) => s.color);
  const setColor = useChartStore((s) => s.setColor);
  const theme = useChartTheme();
  const isDark = theme.mode === 'dark';
  const swatchOf = (t: SingleToken): string => (isDark ? t.darkA : t.lightA);

  const subgroups = useMemo(() => {
    if (!TOKEN_VARIATIONS.has(color.variation)) return [];
    const scoped = SINGLE_TOKENS.filter((t) => baseOf(t.label) === color.variation);
    return KIND_ORDER.map((kind) => ({
      kind,
      tokens: scoped.filter((t) => kindOf(t.label) === kind),
    })).filter((g) => g.tokens.length > 0);
  }, [color.variation]);

  // Ramp variations preview their actual token stops (not interpolated samples),
  // so the swatch count matches what was specified.
  const rampOf: Partial<Record<Variation, string[]>> = {
    sequential: theme.color.sequentialRamp,
    semantic: theme.color.semanticRamp,
    diverging: theme.color.divergingRamp,
  };
  const preview =
    rampOf[color.variation] ?? theme.color.resolve(color, color.variation === 'categorical' ? 12 : 1);
  const activeVariation = VARIATIONS.find((v) => v.id === color.variation);

  const selectVariation = (id: Variation) => {
    if (!TOKEN_VARIATIONS.has(id)) {
      setColor({ variation: id });
      return;
    }
    // Keep the current token if it belongs to this family, else use the default.
    const family = id as 'primary' | 'secondary';
    const current = SINGLE_TOKENS.find((t) => t.id === color.token);
    const keep = current && baseOf(current.label) === family ? color.token : DEFAULT_TOKEN[family];
    setColor({ variation: family, token: keep });
  };

  return (
    <>
      <div className="field__label">Variation</div>
      <div className="seg seg--wrap">
        {VISIBLE_VARIATIONS.map((v) => (
          <button
            key={v.id}
            type="button"
            className={`seg__btn ${color.variation === v.id ? 'seg__btn--active' : ''}`}
            onClick={() => selectVariation(v.id)}
          >
            {v.label}
          </button>
        ))}
      </div>
      {activeVariation ? (
        <p className="field__hint" style={{ margin: '8px 0 0' }}>
          {activeVariation.hint}
        </p>
      ) : null}

      {TOKEN_VARIATIONS.has(color.variation) ? (
        <div className="token-list token-list--scroll" style={{ marginTop: 12 }}>
          {subgroups.map(({ kind, tokens }) => (
            <div key={kind} className="token-group">
              <div className="token-group__title">{kind}</div>
              {tokens.map((t) => {
                const c = swatchOf(t);
                const selected = color.token === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    className={`token-row ${selected ? 'token-row--active' : ''}`}
                    onClick={() => setColor({ token: t.id })}
                    aria-pressed={selected}
                  >
                    <span className="token-row__swatch" style={{ background: c }} />
                    <span className="token-row__meta">
                      <span className="token-row__label">{t.label}</span>
                      <span className="token-row__sub">{t.path}</span>
                      <span className="token-row__value">{displayValue(c)}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      ) : null}

      <div className="swatch-row" aria-hidden="true">
        {preview.map((c, i) => (
          <span key={`${c}-${i}`} className="swatch" style={{ background: c }} />
        ))}
      </div>
    </>
  );
}
