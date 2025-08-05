import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * Badge color variants
 */
const BADGE_COLORS = {
  BLUE: 'blue',
  RED: 'red'
};

/**
 * Badge size variants
 */
const BADGE_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

const getBackgroundColor = (color, isDarkMode) => {
  if (isDarkMode) {
    switch (color) {
      case BADGE_COLORS.BLUE:
        return '#60A5FA'; // Blue 400
      case BADGE_COLORS.RED:
        return '#FB7185'; // Rose 400
      default:
        return '#60A5FA';
    }
  }

  switch (color) {
    case BADGE_COLORS.BLUE:
      return '#3B82F6'; // Blue 500
    case BADGE_COLORS.RED:
      return '#EF4444'; // Red 500
    default:
      return '#3B82F6';
  }
};

const getTextColor = (color, isDarkMode) => {
  if (isDarkMode) {
    return '#18181B'; // Zinc 900 for dark mode
  }
  return '#FFFFFF'; // White for light mode
};

const getBadgeSize = (size) => {
  switch (size) {
    case BADGE_SIZES.SMALL:
      return {
        minWidth: '16px',
        height: '16px',
        fontSize: '10px',
        padding: '0 4px'
      };
    case BADGE_SIZES.LARGE:
      return {
        minWidth: '24px',
        height: '24px',
        fontSize: '14px',
        padding: '0 8px'
      };
    default: // MEDIUM
      return {
        minWidth: '20px',
        height: '20px',
        fontSize: '12px',
        padding: '0 6px'
      };
  }
};

const StyledBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  font-family: 'Segoe UI', sans-serif;
  font-weight: 600;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  border-radius: ${props => {
    const content = props.children?.toString() || '';
    const isSingleDigit = /^\d{1}$/.test(content);
    return isSingleDigit ? '50%' : '12px';
  }};
  
  /* Size styles */
  min-width: ${props => getBadgeSize(props.size).minWidth};
  height: ${props => getBadgeSize(props.size).height};
  font-size: ${props => getBadgeSize(props.size).fontSize};
  padding: ${props => {
    const content = props.children?.toString() || '';
    const isSingleDigit = /^\d{1}$/.test(content);
    const basePadding = getBadgeSize(props.size).padding;
    
    if (isSingleDigit) {
      return '0'; // No padding for circular badges
    }
    return basePadding;
  }};
  
  /* Color styles */
  background-color: ${props => getBackgroundColor(props.color, props.isDarkMode)};
  color: ${props => getTextColor(props.color, props.isDarkMode)};
  
  /* Transitions */
  transition: all 0.2s ease-in-out;
  
  /* Focus styles for accessibility */
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.isDarkMode ? '#93C5FD' : '#1D4ED8'};
  }
`;

const Badge = ({
  color = BADGE_COLORS.BLUE,
  size = BADGE_SIZES.MEDIUM,
  isDarkMode = false,
  children = '1',
  className,
  ...props
}) => {
  return (
    <StyledBadge
      color={color}
      size={size}
      isDarkMode={isDarkMode}
      className={className}
      role="status"
      aria-label={`Badge: ${children}`}
      {...props}
    >
      {children}
    </StyledBadge>
  );
};

Badge.propTypes = {
  /** The color variant of the badge */
  color: PropTypes.oneOf(Object.values(BADGE_COLORS)),
  /** The size variant of the badge */
  size: PropTypes.oneOf(Object.values(BADGE_SIZES)),
  /** Whether to use dark mode styles */
  isDarkMode: PropTypes.bool,
  /** The content to display in the badge */
  children: PropTypes.node,
  /** Additional CSS class name */
  className: PropTypes.string,
};

export { BADGE_COLORS, BADGE_SIZES };
export default Badge; 