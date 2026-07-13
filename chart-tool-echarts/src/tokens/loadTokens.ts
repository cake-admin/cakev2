import rawTokensJson from './tokens.json';
import {
  generatedTokensSchema,
  MODE_TO_TOKEN_KEY,
  REQUIRED_TOKENS,
  type Mode,
  type Palette,
  type RawTokens,
  type Semantic,
  type SemanticRole,
  type SingleToken,
} from './tokens.types';

/** Used only if tokens.json lacks a sequential ramp (indigo 80→30). */
const FALLBACK_SEQUENTIAL: Palette = {
  lightA: ['#bcc3ff', '#98a4ff', '#7586ff', '#5066ff', '#394edb', '#2034b7'],
  darkA: ['#bcc3ff', '#98a4ff', '#7586ff', '#5066ff', '#394edb', '#2034b7'],
};

/** Used only if tokens.json lacks the semantic (red→green) ramp. */
const FALLBACK_SEMANTIC_SCALE: Palette = {
  lightA: ['#df2e3c', '#ffb779', '#f9e374', '#b9d237', '#4aa42c'],
  darkA: ['#df2e3c', '#ffb779', '#f9e374', '#b9d237', '#4aa42c'],
};

/** Used only if tokens.json lacks the diverging (jade↔violet) ramp. */
const FALLBACK_DIVERGING: Palette = {
  lightA: ['#2cc27e', '#44df95', '#f3f0e7', '#b89bff', '#6d35e0'],
  darkA: ['#2cc27e', '#44df95', '#f3f0e7', '#b89bff', '#6d35e0'],
};

/** Used only if tokens.json lacks a semantic set (mirrors build-tokens output). */
const FALLBACK_SEMANTIC: Semantic = {
  positive: { lightA: '#38871d', darkA: '#84db65' },
  negative: { lightA: '#df2e3c', darkA: '#feb4b1' },
  warning: { lightA: '#fcbb42', darkA: '#fcbb42' },
  info: { lightA: '#0077dc', darkA: '#a7c8fe' },
  neutral: { lightA: '#ababab', darkA: '#ababab' },
};

/**
 * Parse + validate the generated token JSON once at module load. We strip the
 * `$comment` documentation key before validation so the file can be annotated.
 * The file is generated from the design system's Figma export — see
 * scripts/build-tokens.mjs (`npm run build:tokens`).
 */
function parseTokens(): {
  tokens: RawTokens;
  categorical: Palette;
  sequential: Palette;
  semanticScale: Palette;
  diverging: Palette;
  semantic: Semantic;
  singleTokens: SingleToken[];
} {
  const { $comment, ...rest } = rawTokensJson as Record<string, unknown>;
  void $comment;
  const result = generatedTokensSchema.safeParse(rest);
  if (!result.success) {
    console.error('[tokens] tokens.json failed validation:', result.error.flatten());
    const fallback = rest as {
      tokens?: RawTokens;
      categorical?: Palette;
      sequential?: Palette;
      semanticScale?: Palette;
      diverging?: Palette;
      semantic?: Semantic;
      singleTokens?: SingleToken[];
    };
    return {
      tokens: fallback.tokens ?? {},
      categorical: fallback.categorical ?? { lightA: [], darkA: [] },
      sequential: fallback.sequential ?? FALLBACK_SEQUENTIAL,
      semanticScale: fallback.semanticScale ?? FALLBACK_SEMANTIC_SCALE,
      diverging: fallback.diverging ?? FALLBACK_DIVERGING,
      semantic: fallback.semantic ?? FALLBACK_SEMANTIC,
      singleTokens: fallback.singleTokens ?? [],
    };
  }
  return {
    ...result.data,
    sequential: result.data.sequential ?? FALLBACK_SEQUENTIAL,
    semanticScale: result.data.semanticScale ?? FALLBACK_SEMANTIC_SCALE,
    diverging: result.data.diverging ?? FALLBACK_DIVERGING,
    semantic: result.data.semantic ?? FALLBACK_SEMANTIC,
  };
}

const parsed = parseTokens();

export const TOKENS: RawTokens = parsed.tokens;
export const CATEGORICAL: Palette = parsed.categorical;
export const SEQUENTIAL: Palette = parsed.sequential;
export const SEMANTIC_SCALE: Palette = parsed.semanticScale;
export const DIVERGING: Palette = parsed.diverging;
export const SEMANTIC: Semantic = parsed.semantic;

/** Named token variations (primary/secondary/tonal families) selectable as a
 *  chart's single color. Used by the color controls list. */
export const SINGLE_TOKENS: SingleToken[] = parsed.singleTokens;

/** The design system's categorical chart palette for a mode. */
export function categoricalFor(mode: Mode): string[] {
  return mode === 'dark' ? CATEGORICAL.darkA : CATEGORICAL.lightA;
}

/** The sequential single-hue ramp (light → dark) for a mode. */
export function sequentialFor(mode: Mode): string[] {
  return mode === 'dark' ? SEQUENTIAL.darkA : SEQUENTIAL.lightA;
}

/** The semantic red→green ramp (low → high / bad → good) for a mode. */
export function semanticScaleFor(mode: Mode): string[] {
  return mode === 'dark' ? SEMANTIC_SCALE.darkA : SEMANTIC_SCALE.lightA;
}

/** The diverging cyan↔violet ramp (low → high) for a mode. */
export function divergingFor(mode: Mode): string[] {
  return mode === 'dark' ? DIVERGING.darkA : DIVERGING.lightA;
}

/** Semantic role → color for a mode (positive/negative/warning/info/neutral). */
export function semanticFor(mode: Mode): Record<SemanticRole, string> {
  const key = MODE_TO_TOKEN_KEY[mode];
  return {
    positive: SEMANTIC.positive[key],
    negative: SEMANTIC.negative[key],
    warning: SEMANTIC.warning[key],
    info: SEMANTIC.info[key],
    neutral: SEMANTIC.neutral[key],
  };
}

/** Map of single-token id → color string for a mode. */
export function singleColorsFor(mode: Mode): Record<string, string> {
  const key = mode === 'dark' ? 'darkA' : 'lightA';
  const map: Record<string, string> = {};
  for (const token of SINGLE_TOKENS) map[token.id] = token[key];
  return map;
}

/**
 * Resolve a token name to its hex value for a given mode. Throws in dev if a
 * required token is missing so problems are caught early (mirrors the existing
 * `scripts/validate-tokens.js` philosophy). Falls back to a neutral gray.
 */
export function resolveToken(tokens: RawTokens, name: string, mode: Mode): string {
  const token = tokens[name];
  if (!token) {
    console.warn(`[tokens] missing token "${name}" — using fallback`);
    return mode === 'dark' ? '#a1a1aa' : '#334155';
  }
  return token[MODE_TO_TOKEN_KEY[mode]] ?? (mode === 'dark' ? '#a1a1aa' : '#334155');
}

/** A bound resolver for ergonomics inside theme builders. */
export function makeResolver(tokens: RawTokens, mode: Mode) {
  return (name: string): string => resolveToken(tokens, name, mode);
}

/**
 * "Token doctor": report missing required tokens. Used by the dev console and
 * can be surfaced in the UI later.
 */
export function checkRequiredTokens(tokens: RawTokens): string[] {
  return REQUIRED_TOKENS.filter((name) => !tokens[name]).map(
    (name) => `Missing required token: ${name}`,
  );
}

// Emit warnings once at startup.
const warnings = checkRequiredTokens(TOKENS);
if (warnings.length > 0) {
  console.warn('[tokens] token doctor:\n' + warnings.join('\n'));
}
