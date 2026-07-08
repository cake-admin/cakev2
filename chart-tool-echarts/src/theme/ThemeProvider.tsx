import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { TOKENS } from '../tokens/loadTokens';
import type { Mode } from '../tokens/tokens.types';
import { buildChartTheme } from './buildChartTheme';
import type { ChartTheme } from './chartTheme.types';

interface ThemeContextValue {
  mode: Mode;
  setMode: (mode: Mode) => void;
  toggleMode: () => void;
  theme: ChartTheme;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({
  children,
  initialMode = 'light',
}: {
  children: ReactNode;
  initialMode?: Mode;
}) {
  const [mode, setMode] = useState<Mode>(initialMode);
  const theme = useMemo(() => buildChartTheme(TOKENS, mode), [mode]);
  const value = useMemo<ThemeContextValue>(
    () => ({
      mode,
      setMode,
      toggleMode: () => setMode((m) => (m === 'light' ? 'dark' : 'light')),
      theme,
    }),
    [mode, theme],
  );
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useChartTheme(): ChartTheme {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useChartTheme must be used within ThemeProvider');
  return ctx.theme;
}

export function useThemeMode() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useThemeMode must be used within ThemeProvider');
  return { mode: ctx.mode, setMode: ctx.setMode, toggleMode: ctx.toggleMode };
}
