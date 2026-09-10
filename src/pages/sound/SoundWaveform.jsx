import React from 'react';
import styled from 'styled-components';

const WaveformSvg = styled.svg`
  display: block;
  width: 100%;
  height: 48px;
  color: var(--color-primary-primary);
`;

const Baseline = styled.line`
  stroke: var(--color-stroke-border);
  stroke-width: var(--stroke-100);
`;

/**
 * A static representation derived from the real OGG samples at sync time.
 * It is decorative: adjacent text supplies name, duration, and character.
 */
const SoundWaveform = ({ peaks = [], label = 'Sound waveform' }) => {
  if (!peaks.length) return null;

  const width = 288;
  const center = 24;
  const step = width / peaks.length;
  const bars = peaks.map((peak, index) => {
    const height = Math.max(1, peak * 20);
    return {
      x: index * step + step / 2,
      y1: center - height,
      y2: center + height,
    };
  });

  return (
    <WaveformSvg viewBox={`0 0 ${width} 48`} role="img" aria-label={label}>
      <Baseline x1="0" x2={width} y1={center} y2={center} />
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
