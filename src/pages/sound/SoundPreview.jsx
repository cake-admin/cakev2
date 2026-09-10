import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import { Pause, Play } from 'lucide-react';
import { IconButton } from '../../cakeand/components/Button/IconButton';
import { HelperString } from '../../cakeand/components/Elements/HelperString';
import { formatDuration, getSoundUrl } from '../../data/sound-catalog';
import SoundWaveform from './SoundWaveform';

const PlayerContext = createContext(null);

export const SoundPlayerProvider = ({ children }) => {
  const audioRef = useRef(null);
  const [activeId, setActiveId] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [errorId, setErrorId] = useState(null);

  useEffect(() => {
    const audio = new Audio();
    audio.preload = 'none';
    audio.addEventListener('ended', () => setPlaying(false));
    audio.addEventListener('pause', () => setPlaying(false));
    audio.addEventListener('play', () => setPlaying(true));
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.removeAttribute('src');
      audio.load();
      audioRef.current = null;
    };
  }, []);

  const toggle = useCallback(async (file) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (activeId === file.id && !audio.paused) {
      audio.pause();
      return;
    }

    setErrorId(null);
    if (activeId !== file.id) {
      audio.pause();
      audio.src = getSoundUrl(file);
      audio.preload = 'none';
      setActiveId(file.id);
    }

    try {
      await audio.play();
    } catch {
      setPlaying(false);
      setErrorId(file.id);
    }
  }, [activeId]);

  const value = useMemo(
    () => ({ activeId, errorId, playing, toggle }),
    [activeId, errorId, playing, toggle],
  );

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
};

const Preview = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: var(--space-300);
  min-width: 0;
`;

const Visual = styled.div`
  min-width: 0;
`;

const Duration = styled.span`
  display: block;
  margin-top: var(--space-050);
  color: var(--color-text-icon-secondary);
  font-size: var(--type-size-caption);
  line-height: 1.35;
`;

const ErrorWrap = styled.div`
  margin-top: var(--space-100);
`;

const SoundPreview = ({ sound, file = sound.primary, showWaveform = true }) => {
  const player = useContext(PlayerContext);
  if (!player) {
    throw new Error('SoundPreview must be used inside SoundPlayerProvider');
  }

  const isActive = player.activeId === file.id;
  const isPlaying = isActive && player.playing;
  const hasError = player.errorId === file.id;
  const variantLabel = file.variant ? ` variant ${file.variant}` : '';

  return (
    <div>
      <Preview>
        <IconButton
          label={`${isPlaying ? 'Pause' : 'Play'} ${sound.name}${variantLabel}`}
          icon={isPlaying ? <Pause /> : <Play />}
          intent="primary"
          variant={isPlaying ? 'fill' : 'outline'}
          size="md"
          aria-pressed={isPlaying}
          onClick={() => player.toggle(file)}
        />
        <Visual>
          {showWaveform ? (
            <SoundWaveform
              peaks={file.peaks}
              label={`Static waveform for ${sound.name}${variantLabel}`}
            />
          ) : null}
          <Duration>
            {formatDuration(file.durationMs)}
            {file.variant ? ` · Variant ${String(file.variant).padStart(2, '0')}` : ' · Primary'}
          </Duration>
        </Visual>
      </Preview>
      {hasError ? (
        <ErrorWrap>
          <HelperString role="status" tone="error">
            This preview could not be played. Check the file or browser audio settings.
          </HelperString>
        </ErrorWrap>
      ) : null}
    </div>
  );
};

export default SoundPreview;
