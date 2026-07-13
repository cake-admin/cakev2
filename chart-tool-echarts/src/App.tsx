import type { CSSProperties } from 'react';
import { ThemeProvider, useChartTheme, useThemeMode } from './theme/ThemeProvider';
import { PreviewStage } from './preview/PreviewStage';
import { CustomizationPanel } from './panel/CustomizationPanel';
import './styles.css';

/**
 * Inner shell (inside ThemeProvider) so the whole app chrome is driven by the
 * same tokens as the charts (dark mode restyles everything). No header bar — the
 * brand floats over the stage and the control panel runs full-height.
 */
function AppShell() {
  const theme = useChartTheme();
  const { mode } = useThemeMode();

  const chromeVars = {
    '--chrome-bg': theme.surface.card,
    '--chrome-bg-2': theme.surface.canvas,
    '--chrome-border': theme.border.weak,
    '--chrome-border-strong': theme.border.standard,
    '--chrome-text': theme.text.primary,
    '--chrome-text-2': theme.text.secondary,
    '--chrome-text-3': theme.text.helper,
    '--accent': theme.color.base.primary,
  } as CSSProperties;

  return (
    <div className="app" data-theme={mode} style={chromeVars}>
      <main className="app__main">
        <span className="app__brand-float">cake&amp; data visualization</span>
        <PreviewStage />
        <CustomizationPanel />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider initialMode="light">
      <AppShell />
    </ThemeProvider>
  );
}
