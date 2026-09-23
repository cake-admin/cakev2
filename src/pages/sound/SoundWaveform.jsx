import React from 'react';
import styled from 'styled-components';

/* No background of its own: the waveform inherits whichever surface it is
   placed on, and its strokes follow that surface's primary token — dark blue
   on the light audio-wave surface, cyan on the Windows HCT card. */
const WaveformSvg = styled.svg`
  display: block;
  width: 100%;
  height: 56px;
  color: var(--color-primary-primary);
`;

/**
 * A static representation derived from the real OGG samples at sync time.
 * It is decorative: adjacent text supplies name, duration, and character.
 */
const SoundWaveform = ({ peaks = [], label = 'Sound waveform' }) => {
  if (!peaks.length) return null;

  const width = 288;
  const center = 28;
  const step = width / peaks.length;
  const bars = peaks.map((peak, index) => {
    const height = Math.max(1, peak * 23);
    return {
      x: index * step + step / 2,
      y1: center - height,
      y2: center + height,
    };
  });

  return (
    <WaveformSvg viewBox={`0 0 ${width} 56`} role="img" aria-label={label}>
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        {bars.map((bar, index) => (
          <line
            // Peak order is stable data generated from the source file.
            key={index}
            x1={bar.x}
            x2={bar.x}
            y1={bar.y1}
            y2={bar.y2}
          />
        ))}
      </g>
    </WaveformSvg>
  );
};

export default SoundWaveform;
