import { useThemeMode } from '../../theme/ThemeProvider';
import type { Mode } from '../../tokens/tokens.types';

const MODES: Mode[] = ['light', 'dark'];

export function ModeToggle() {
  const { mode, setMode } = useThemeMode();
  return (
    <div className="seg seg--mode" role="group" aria-label="Theme mode">
      {MODES.map((m) => (
        <button
          key={m}
          type="button"
          className={`seg__btn ${mode === m ? 'seg__btn--active' : ''}`}
          style={{ textTransform: 'capitalize' }}
          onClick={() => setMode(m)}
        >
          {m}
        </button>
      ))}
    </div>
  );
}
