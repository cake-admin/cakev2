import tokensData from './tokens.json';
import { font } from './typography';

/**
 * cake& theme.
 *
 * Colors are generated from the Figma DTCG export ("& theme.a") by
 * scripts/build-cakeand-tokens.mjs. Spacing, radius, and typography are
 * design-system conventions layered on top (no token export for them yet).
 */
export type ThemeMode = 'light.a' | 'dark.a';

export type CakeColors = (typeof tokensData)['theme']['light.a'];

const space = {
  none: '0',
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '32px',
  '4xl': '48px',
} as const;

const radius = {
  none: '0',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  pill: '999px',
  round: '50%',
} as const;

const makeTheme = (mode: ThemeMode) => {
  const color = tokensData.theme[mode] as CakeColors;
  return {
    mode,
    color,
    space,
    radius,
    font,
    typography: font.presets,
    elevation: {
      low: `0 1px 2px 0 ${color.elevation.dropShadowLight}`,
      high: `0 12px 32px -4px ${color.elevation.dropShadowHeavy}`,
    },
  };
};

export const lightTheme = makeTheme('light.a');
export const darkTheme = makeTheme('dark.a');

export const themes: Record<ThemeMode, CakeTheme> = {
  'light.a': lightTheme,
  'dark.a': darkTheme,
};

export type CakeTheme = ReturnType<typeof makeTheme>;

export const isDarkMode = (mode: ThemeMode) => mode === 'dark.a';
