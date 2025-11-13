import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import cakeColorTokensData from '../../tokens/cake-color-tokens.json';

/**
 * Spinner size variants
 */
const SPINNER_SIZES = {
  XSMALL: 'xsml',
  SMALL: 'sml',
  LARGE: 'lrg'
};

// Parse cake-color-tokens.json
let cakeColorTokens;
try {
  cakeColorTokens = typeof cakeColorTokensData === 'string' 
    ? JSON.parse(cakeColorTokensData)
    : cakeColorTokensData;
} catch (error) {
  console.error('Failed to parse cake-color-tokens.json:', error);
  cakeColorTokens = {};
}

/**
 * Get color token value
 */
const getColorToken = (tokenName, isDarkMode) => {
  const themeKey = isDarkMode ? 'darkA' : 'lightA';
  
  if (cakeColorTokens[tokenName] && cakeColorTokens[tokenName][themeKey]) {
    return cakeColorTokens[tokenName][themeKey];
  }
  
  // Fallback colors
  const fallbacks = {
    'borderPrimary': { lightA: '#CBD5E1', darkA: '#52525B' },
    'referencePrimary': { lightA: '#1D4ED8', darkA: '#93C5FD' }
  };
  
  if (fallbacks[tokenName]) {
    return fallbacks[tokenName][themeKey];
  }
  
  console.warn(`Color token "${tokenName}" not found in cake-color-tokens.json`);
  return isDarkMode ? '#52525B' : '#CBD5E1';
};

/**
 * Get spinner size in pixels
 */
const getSpinnerSize = (size) => {
  switch (size) {
    case SPINNER_SIZES.XSMALL:
      return '16px';
    case SPINNER_SIZES.SMALL:
      return '24px';
    case SPINNER_SIZES.LARGE:
      return '64px';
    default:
      return '24px';
  }
};

/**
 * Rotation animation
 */
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

/**
 * Styled spinner component
 */
const StyledSpinner = styled.div`
  width: ${props => getSpinnerSize(props.size)};
  height: ${props => getSpinnerSize(props.size)};
  border: 2px solid ${props => getColorToken('borderPrimary', props.isDarkMode)};
  border-top: 2px solid ${props => getColorToken('referencePrimary', props.isDarkMode)};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  display: inline-block;
  box-sizing: border-box;
  
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    border-top-color: ${props => getColorToken('referencePrimary', props.isDarkMode)};
  }
`;

/**
 * Spinner component for displaying loading states
 * 
 * @param {string} size - Size variant (xsml, sml, lrg)
 * @param {boolean} isDarkMode - Whether to use dark mode styles
 * @param {string} className - Additional CSS class name
 * @param {string} ariaLabel - Accessibility label (defaults to "Loading")
 */
const Spinner = ({
  size = SPINNER_SIZES.SMALL,
  isDarkMode = false,
  className,
  ariaLabel = 'Loading',
  ...props
}) => {
  return (
    <StyledSpinner
      size={size}
      isDarkMode={isDarkMode}
      className={className}
      role="status"
      aria-label={ariaLabel}
      {...props}
    />
  );
};

Spinner.propTypes = {
  /** The size variant of the spinner */
  size: PropTypes.oneOf(Object.values(SPINNER_SIZES)),
  /** Whether to use dark mode styles */
  isDarkMode: PropTypes.bool,
  /** Additional CSS class name */
  className: PropTypes.string,
  /** Accessibility label for screen readers */
  ariaLabel: PropTypes.string
};

export { SPINNER_SIZES };
export default Spinner;

