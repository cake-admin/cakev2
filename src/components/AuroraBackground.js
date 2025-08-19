import React from 'react';
import styled, { keyframes } from 'styled-components';

const auroraAnimation = keyframes`
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

const AuroraContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  pointer-events: none;
`;

const AuroraBlob = styled.div`
  position: absolute;
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(59, 130, 246, 0.15) 0%,
    rgba(147, 51, 234, 0.1) 25%,
    rgba(236, 72, 153, 0.08) 50%,
    rgba(34, 197, 94, 0.06) 75%,
    transparent 100%
  );
  filter: blur(60px);
  animation: ${auroraAnimation} 20s ease-in-out infinite;
  opacity: 0.6;
  
  &:nth-child(1) {
    top: -400px;
    left: -200px;
    animation-delay: 0s;
    background: radial-gradient(
      circle,
      rgba(59, 130, 246, 0.2) 0%,
      rgba(147, 51, 234, 0.15) 50%,
      transparent 100%
    );
  }
  
  &:nth-child(2) {
    top: 50%;
    right: -300px;
    animation-delay: -5s;
    background: radial-gradient(
      circle,
      rgba(236, 72, 153, 0.15) 0%,
      rgba(34, 197, 94, 0.1) 50%,
      transparent 100%
    );
  }
  
  &:nth-child(3) {
    bottom: -200px;
    left: 50%;
    animation-delay: -10s;
    background: radial-gradient(
      circle,
      rgba(147, 51, 234, 0.12) 0%,
      rgba(59, 130, 246, 0.08) 50%,
      transparent 100%
    );
  }
  
  &:nth-child(4) {
    top: 20%;
    left: 20%;
    animation-delay: -15s;
    background: radial-gradient(
      circle,
      rgba(34, 197, 94, 0.1) 0%,
      rgba(236, 72, 153, 0.08) 50%,
      transparent 100%
    );
  }
`;

const AuroraBackground = () => {
  return (
    <AuroraContainer>
      <AuroraBlob />
      <AuroraBlob />
      <AuroraBlob />
      <AuroraBlob />
    </AuroraContainer>
  );
};

export default AuroraBackground;
