import styled, { keyframes } from 'styled-components';

const drift = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.1);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
`;

const Canvas = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
`;

const Blob = styled.div<{ $variant: 1 | 2 | 3 | 4 }>`
  position: absolute;
  width: 50rem;
  height: 50rem;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.55;
  animation: ${drift} 20s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  ${(p) => {
    const fills: Record<1 | 2 | 3 | 4, string> = {
      1: `radial-gradient(
          circle,
          color-mix(in srgb, var(--color-badge-blue) 22%, transparent) 0%,
          color-mix(in srgb, var(--color-badge-indigo) 14%, transparent) 50%,
          transparent 100%
        )`,
      2: `radial-gradient(
          circle,
          color-mix(in srgb, var(--color-badge-magenta) 16%, transparent) 0%,
          color-mix(in srgb, var(--color-badge-jade) 10%, transparent) 50%,
          transparent 100%
        )`,
      3: `radial-gradient(
          circle,
          color-mix(in srgb, var(--color-badge-purple) 14%, transparent) 0%,
          color-mix(in srgb, var(--color-badge-blue) 8%, transparent) 50%,
          transparent 100%
        )`,
      4: `radial-gradient(
          circle,
          color-mix(in srgb, var(--color-badge-jade) 12%, transparent) 0%,
          color-mix(in srgb, var(--color-badge-magenta) 8%, transparent) 50%,
          transparent 100%
        )`,
    };

    const positions: Record<1 | 2 | 3 | 4, string> = {
      1: 'top: -25rem; left: -12rem; animation-delay: 0s;',
      2: 'top: 50%; right: -18rem; animation-delay: -5s;',
      3: 'bottom: -12rem; left: 50%; animation-delay: -10s;',
      4: 'top: 20%; left: 20%; animation-delay: -15s;',
    };

    return `
      background: ${fills[p.$variant]};
      ${positions[p.$variant]}
    `;
  }}
`;

/**
 * Decorative canvas gradient — token-tinted aurora blobs behind the home hero.
 * Matches the legacy Cake site treatment without hardcoded hex values.
 */
export function AuroraBackground() {
  return (
    <Canvas aria-hidden>
      <Blob $variant={1} />
      <Blob $variant={2} />
      <Blob $variant={3} />
      <Blob $variant={4} />
    </Canvas>
  );
}
