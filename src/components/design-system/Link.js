import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { fontStack } from '../../styles/globalStyles.js';
import cakeColorTokensData from '../../tokens/cake-color-tokens.json';

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
    'referenceHyperlink': { lightA: '#1D4ED8', darkA: '#1D4ED8' },
    'referenceHyperlinkHovered': { lightA: '#1E3A8A', darkA: '#1E3A8A' },
    'textDisabled': { lightA: '#475569', darkA: '#9CA3AF' }
  };
  
  if (fallbacks[tokenName]) {
    return fallbacks[tokenName][themeKey];
  }
  
  console.warn(`Color token "${tokenName}" not found in cake-color-tokens.json`);
  return isDarkMode ? '#9CA3AF' : '#475569';
};

/**
 * Styled link component
 */
const StyledLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${fontStack};
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  text-underline-position: from-font;
  color: ${props => {
    if (props.$disabled) {
      return getColorToken('textDisabled', props.isDarkMode);
    }
    return getColorToken('referenceHyperlink', props.isDarkMode);
  }};
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  pointer-events: ${props => props.$disabled ? 'none' : 'auto'};
  transition: color 0.2s ease-in-out;
  white-space: nowrap;
  
  &:hover {
    color: ${props => {
      if (props.$disabled) {
        return getColorToken('textDisabled', props.isDarkMode);
      }
      return getColorToken('referenceHyperlinkHovered', props.isDarkMode);
    }};
  }
  
  &:focus-visible {
    outline: 2px solid ${props => getColorToken('referenceFocus', props.isDarkMode)};
    outline-offset: 2px;
    border-radius: 2px;
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/**
 * Icon wrapper styled component
 */
const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: inherit;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

/**
 * Link component for navigation
 * 
 * @param {string} href - URL for the link (required unless disabled)
 * @param {ReactNode} children - Link text content
 * @param {ReactNode} icon - Optional icon element
 * @param {boolean} disabled - Whether the link is disabled
 * @param {boolean} isDarkMode - Whether to use dark mode styles
 * @param {string} className - Additional CSS class name
 * @param {string} target - Link target attribute
 * @param {string} rel - Link rel attribute
 */
const Link = ({
  href,
  children,
  icon,
  disabled = false,
  isDarkMode = false,
  className,
  target,
  rel,
  ...props
}) => {
  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
  };

  return (
    <StyledLink
      href={disabled ? undefined : href}
      $disabled={disabled}
      isDarkMode={isDarkMode}
      className={className}
      onClick={handleClick}
      target={target}
      rel={rel}
      aria-disabled={disabled}
      {...props}
    >
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {children}
    </StyledLink>
  );
};

Link.propTypes = {
  /** URL for the link (required unless disabled) */
  href: PropTypes.string,
  /** Link text content */
  children: PropTypes.node.isRequired,
  /** Optional icon element */
  icon: PropTypes.node,
  /** Whether the link is disabled */
  disabled: PropTypes.bool,
  /** Whether to use dark mode styles */
  isDarkMode: PropTypes.bool,
  /** Additional CSS class name */
  className: PropTypes.string,
  /** Link target attribute */
  target: PropTypes.string,
  /** Link rel attribute */
  rel: PropTypes.string
};

export default Link;






