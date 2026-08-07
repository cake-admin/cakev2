import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
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
  /** When set, theme mode is controlled by the parent (e.g. site TopNav). */
  mode: controlledMode,
}: {
  children: ReactNode;
  initialMode?: Mode;
  mode?: Mode;
}) {
  const [internalMode, setInternalMode] = useState<Mode>(initialMode);
  const isControlled = controlledMode != null;
  const mode = controlledMode ?? internalMode;

  useEffect(() => {
    if (controlledMode != null) setInternalMode(controlledMode);
  }, [controlledMode]);

  const setMode = useCallback(
    (next: Mode) => {
      if (!isControlled) setInternalMode(next);
    },
    [isControlled],
  );

  const theme = useMemo(() => buildChartTheme(TOKENS, mode), [mode]);
  const value = useMemo<ThemeContextValue>(
    () => ({
      mode,
      setMode,
      toggleMode: () =>
        setMode(mode === 'light' ? 'dark' : mode === 'dark' ? 'hct' : 'light'),
      theme,
    }),
    [mode, theme, setMode],
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
