import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getTokenColor, THEMES } from '../../tokens/colorTokens.js';
import PushPinIcon from '@mui/icons-material/PushPin';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';

/**
 * Pin state variants
 */
const PIN_STATES = {
  REST: 'rest',
  HOVER: 'hover',
  FOCUS: 'focus',
  DISABLED: 'disabled'
};

/**
 * Pin themes
 */
const PIN_THEMES = {
  LIGHT: 'light.a',
  DARK: 'dark.a'
};

const getBackgroundColor = (state, isPinned, theme) => {
  const isDark = theme === PIN_THEMES.DARK;
  
  if (state === PIN_STATES.DISABLED) {
    return getTokenColor('reference.surfaceDisabled', theme);
  }
  
  if (state === PIN_STATES.HOVER) {
    // Match other action buttons: use reference.secondaryWeak
    return getTokenColor('reference.secondaryWeak', theme);
  }
  
  // Rest state - both pinned and unpinned use the same background
  // Use surface.card for both light and dark modes to match other action buttons
  return getTokenColor('surface.card', theme);
};

const getBorderColor = (state, isPinned, theme) => {
  if (state === PIN_STATES.DISABLED) {
    return getTokenColor('border.disabled', theme);
  }
  
  // Both pinned and unpinned use the same border color
  return getTokenColor('border.weak', theme);
};

const getIconColor = (state, isPinned, theme) => {
  const isDark = theme === PIN_THEMES.DARK;
  
  if (state === PIN_STATES.DISABLED) {
    return getTokenColor('icon.disabled', theme);
  }
  
  // Both pinned and unpinned use the same icon color per design spec
  return getTokenColor('icon.primary', theme);
};

const StyledPinButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  width: 32px;
  height: 24px;
  padding: 6px 8px;
  border: 1px solid ${props => getBorderColor(props.$state, props.$isPinned, props.theme)};
  border-radius: 4px;
  background-color: ${props => getBackgroundColor(props.$state, props.$isPinned, props.theme)};
  cursor: ${props => props.$state === PIN_STATES.DISABLED ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease-in-out;
  user-select: none;
  outline: none;
  overflow: visible;
  
  /* Focus ring - only visible on keyboard navigation (tab), not on mouse click */
  /* Matches Figma: left-0 top-0, h-[24px] w-[32px], border-[1.5px] */
  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    box-sizing: border-box;
    border: 1.5px solid ${props => getTokenColor('border.focus', props.theme)};
    border-radius: 4px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease-in-out;
  }
  
  &:focus-visible::before {
    opacity: 1;
  }
  
  &:hover {
    background-color: ${props => {
      if (props.$state === PIN_STATES.DISABLED) {
        return getTokenColor('reference.surfaceDisabled', props.theme);
      }
      // Match other action buttons: use reference.secondaryWeak
      return getTokenColor('reference.secondaryWeak', props.theme);
    }};
  }
  
  &:active {
    background-color: ${props => {
      if (props.$state === PIN_STATES.DISABLED) {
        return getTokenColor('reference.surfaceDisabled', props.theme);
      }
      // Match other action buttons: use surfaceIconButtonSecondaryPress
      return getTokenColor('surface.iconButtonSecondaryPress', props.theme);
    }};
  }
  
  svg {
    width: 16px !important;
    height: 16px !important;
    font-size: 16px !important;
    color: ${props => getIconColor(props.$state, props.$isPinned, props.theme)};
    fill: currentColor;
    transition: color 0.2s ease-in-out;
  }
`;

const Pin = ({
  isPinned: controlledIsPinned,
  state = PIN_STATES.REST,
  theme = PIN_THEMES.LIGHT,
  disabled = false,
  onClick,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [internalIsPinned, setInternalIsPinned] = useState(false);
  
  // Support both controlled and uncontrolled modes
  const isControlled = controlledIsPinned !== undefined;
  const isPinned = isControlled ? controlledIsPinned : internalIsPinned;
  
  // Determine actual state based on props and internal state
  const actualState = disabled 
    ? PIN_STATES.DISABLED 
    : (state === PIN_STATES.FOCUS || isFocused)
      ? PIN_STATES.FOCUS
      : (state === PIN_STATES.HOVER || isHovered)
        ? PIN_STATES.HOVER
        : PIN_STATES.REST;
  
  const handleClick = (e) => {
    if (disabled) return;
    
    // Toggle internal state if uncontrolled
    if (!isControlled) {
      setInternalIsPinned(prev => !prev);
    }
    
    // Call user's onClick handler
    onClick?.(e);
  };
  
  const handleMouseEnter = () => {
    if (!disabled) {
      setIsHovered(true);
    }
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  const handleFocus = (e) => {
    if (!disabled) {
      setIsFocused(true);
    }
  };
  
  const handleBlur = (e) => {
    setIsFocused(false);
  };
  
  const defaultAriaLabel = isPinned ? 'Unpin' : 'Pin';
  
  return (
    <StyledPinButton
      $isPinned={isPinned}
      $state={actualState}
      theme={theme}
      disabled={disabled}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={className}
      aria-label={ariaLabel || defaultAriaLabel}
      aria-pressed={isPinned}
      tabIndex={disabled ? -1 : 0}
      {...props}
    >
      <span key={isPinned ? 'pinned' : 'unpinned'}>
        {isPinned ? (
          <PushPinIcon sx={{ fontSize: '16px', width: '16px', height: '16px' }} />
        ) : (
          <PushPinOutlinedIcon sx={{ fontSize: '16px', width: '16px', height: '16px' }} />
        )}
      </span>
    </StyledPinButton>
  );
};

Pin.propTypes = {
  /** Whether the pin is in pinned state (controlled mode). If not provided, component manages its own state (uncontrolled mode) */
  isPinned: PropTypes.bool,
  /** The state variant of the pin */
  state: PropTypes.oneOf(Object.values(PIN_STATES)),
  /** Theme variant */
  theme: PropTypes.oneOf(Object.values(PIN_THEMES)),
  /** Whether the pin is disabled */
  disabled: PropTypes.bool,
  /** Click handler */
  onClick: PropTypes.func,
  /** Additional CSS class name */
  className: PropTypes.string,
  /** ARIA label for accessibility */
  'aria-label': PropTypes.string
};

export { PIN_STATES, PIN_THEMES };
export default Pin;

