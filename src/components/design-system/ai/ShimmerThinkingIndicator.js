import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import MotoAiAvatar from './MotoAiAvatar.js';
import { getTokenColor, THEMES } from '../../../tokens/colorTokens';

/**
 * Shimmer animation keyframes
 * Animates background-position from right (200%) to left (-200%)
 */
const shimmerText = keyframes`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`;

/**
 * Convert hex color to rgba string with opacity
 */
const hexToRgba = (hex, opacity = 1) => {
  if (!hex || typeof hex !== 'string' || !hex.startsWith('#')) {
    return `rgba(71, 85, 105, ${opacity})`; // fallback
  }
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StyledShimmerText = styled.span`
  font-family: 'Segoe UI', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: transparent;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: ${props => {
    const baseColor = getTokenColor('reference.helper', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A);
    const shimmerColor = props.isDarkMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(200, 200, 200, 0.95)';
    const baseColorRgba = hexToRgba(baseColor, 0.85);
    
    return `linear-gradient(
      90deg,
      ${baseColorRgba} 0%,
      ${baseColorRgba} 40%,
      ${baseColorRgba} 40%,
      ${shimmerColor} 45%,
      ${shimmerColor} 55%,
      ${baseColorRgba} 60%,
      ${baseColorRgba} 100%
    )`;
  }};
  background-size: 200% 100%;
  background-position: 200% 0;
  animation: ${shimmerText} 2s linear infinite;
  will-change: background-position;
  display: inline-block;
  
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background-position: 0 0;
    color: ${props => 
      getTokenColor('reference.helper', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
    -webkit-text-fill-color: ${props => 
      getTokenColor('reference.helper', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
    opacity: 0.85;
  }
`;

const ShimmerThinkingIndicator = ({
  messages = [],
  interval = 2500,
  isDarkMode = false,
  className,
  ...props
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle message cycling
  useEffect(() => {
    // Don't cycle if there are 0 or 1 messages
    if (messages.length <= 1) {
      return;
    }

    const cycleInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, interval);

    return () => clearInterval(cycleInterval);
  }, [messages.length, interval]);

  // Determine the text to display
  const displayText = messages.length === 0 
    ? 'Thinking...' 
    : messages.length === 1 
      ? messages[0] 
      : messages[currentIndex] || messages[0];

  return (
    <StyledContainer className={className} {...props}>
      <MotoAiAvatar isDarkMode={isDarkMode} />
      <StyledShimmerText
        isDarkMode={isDarkMode}
        role="status"
        aria-live="polite"
        aria-label="AI is thinking"
      >
        {displayText}
      </StyledShimmerText>
    </StyledContainer>
  );
};

ShimmerThinkingIndicator.propTypes = {
  /** Array of messages to cycle through. Empty array or single message will show shimmer without cycling */
  messages: PropTypes.arrayOf(PropTypes.string),
  /** Time between message rotations in milliseconds */
  interval: PropTypes.number,
  /** Whether to use dark mode styles */
  isDarkMode: PropTypes.bool,
  /** Additional CSS class name */
  className: PropTypes.string,
};

export default ShimmerThinkingIndicator;

