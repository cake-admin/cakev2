import React, { forwardRef, useState, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getTokenColor, THEMES } from '../../tokens/colorTokens';
import { fontStack } from '../../styles/globalStyles';

/**
 * Toggle themes
 */
const TOGGLE_THEMES = {
  LIGHT: 'light.a',
  DARK: 'dark.a'
};

/**
 * Toggle states
 */
const TOGGLE_STATES = {
  ENABLED: 'Enabled',
  HOVERED: 'Hovered',
  PRESSED: 'Pressed',
  FOCUS: 'Focus',
  DISABLED: 'Disabled'
};

const getToggleColors = (isOn, theme, state, isHovered, isPressed, isFocused, isDisabled) => {
  const isDark = theme === TOGGLE_THEMES.DARK;
  
  if (isDisabled) {
    return {
      track: getTokenColor('toggle.track.disabled', theme),
      thumb: getTokenColor('toggle.thumb.disabled', theme),
      label: getTokenColor('toggle.label.disabled', theme)
    };
  }

  if (isOn) {
    // Toggle is ON
    if (isPressed) {
      return {
        track: getTokenColor('toggle.track.on', theme),
        thumb: getTokenColor('toggle.thumb.pressed', theme),
        label: getTokenColor('toggle.label.default', theme)
      };
    } else if (isHovered || state === TOGGLE_STATES.HOVERED) {
      return {
        track: getTokenColor('toggle.track.onHover', theme),
        thumb: getTokenColor('toggle.thumb.on', theme),
        label: getTokenColor('toggle.label.default', theme)
      };
    } else {
      return {
        track: getTokenColor('toggle.track.on', theme),
        thumb: getTokenColor('toggle.thumb.on', theme),
        label: getTokenColor('toggle.label.default', theme)
      };
    }
  } else {
    // Toggle is OFF
    if (isPressed || state === TOGGLE_STATES.PRESSED) {
      return {
        track: getTokenColor('toggle.track.off', theme),
        thumb: getTokenColor('toggle.thumb.off', theme),
        label: getTokenColor('toggle.label.default', theme)
      };
    } else if (isHovered || state === TOGGLE_STATES.HOVERED) {
      return {
        track: getTokenColor('toggle.track.offHover', theme),
        thumb: getTokenColor('toggle.thumb.off', theme),
        label: getTokenColor('toggle.label.default', theme)
      };
    } else {
      return {
        track: getTokenColor('toggle.track.off', theme),
        thumb: getTokenColor('toggle.thumb.off', theme),
        label: getTokenColor('toggle.label.default', theme)
      };
    }
  }
};

const ToggleContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 16px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  user-select: none;
  position: relative;
`;

const ToggleButton = styled.button`
  position: relative;
  width: 40px;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  outline: none;
  flex-shrink: 0;

  &::before {
    content: '';
    position: absolute;
    top: -6px;
    left: -6px;
    width: 52px;
    height: 36px;
    border: 3px solid ${props => getTokenColor('toggle.focus.ring', props.theme)};
    border-radius: 100px;
    pointer-events: none;
    box-sizing: border-box;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:focus-visible::before {
    opacity: 1;
  }
`;

const ToggleTrack = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 24px;
  border-radius: 100px;
  background-color: ${props => props.colors.track};
  transition: background-color 0.2s ease;
  z-index: 3;
`;

const ToggleThumb = styled.div`
  position: absolute;
  top: 4px;
  left: ${props => {
    if (props.isPressed) {
      return props.isOn ? '12px' : '4px';
    }
    return props.isOn ? '20px' : '4px';
  }};
  width: ${props => props.isPressed ? '24px' : '16px'};
  height: 16px;
  border-radius: 100px;
  background-color: ${props => props.colors.thumb};
  transition: all 0.2s ease;
  z-index: 4;
`;

const ToggleLabel = styled.label`
  font-family: ${fontStack};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: ${props => props.colors.label};
  margin: 0;
  white-space: nowrap;
  transition: color 0.2s ease;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

const Toggle = forwardRef(({
  checked = false,
  disabled = false,
  label = 'Label',
  theme = TOGGLE_THEMES.LIGHT,
  onChange,
  onFocus,
  onBlur,
  id,
  name,
  value,
  className,
  style,
  'aria-describedby': ariaDescribedby,
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [internalChecked, setInternalChecked] = useState(checked);

  // Handle controlled vs uncontrolled state
  const isControlled = checked !== undefined;
  const currentChecked = isControlled ? checked : internalChecked;

  const colors = getToggleColors(
    currentChecked,
    theme,
    disabled ? TOGGLE_STATES.DISABLED : TOGGLE_STATES.ENABLED,
    isHovered,
    isPressed,
    isFocused,
    disabled
  );

  const handleChange = useCallback((event) => {
    if (disabled) return;

    const newChecked = !currentChecked;
    
    if (!isControlled) {
      setInternalChecked(newChecked);
    }

    if (onChange) {
      // Create a synthetic event similar to checkbox/radio
      const syntheticEvent = {
        ...event,
        target: {
          ...event.target,
          checked: newChecked,
          type: 'checkbox',
          value: value
        }
      };
      onChange(syntheticEvent);
    }
  }, [disabled, isControlled, onChange, currentChecked, value]);

  const handleFocus = (event) => {
    if (!disabled) {
      setIsFocused(true);
      if (onFocus) {
        onFocus(event);
      }
    }
  };

  const handleBlur = (event) => {
    setIsFocused(false);
    if (onBlur) {
      onBlur(event);
    }
  };

  const handleMouseEnter = () => {
    if (!disabled) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
  };

  const handleMouseDown = () => {
    if (!disabled) {
      setIsPressed(true);
    }
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  const handleKeyDown = (event) => {
    if (disabled) return;
    
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      handleChange(event);
    }
  };

  const toggleId = id || `toggle-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <ToggleContainer
      disabled={disabled}
      className={className}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ToggleButton
        ref={ref}
        id={toggleId}
        type="button"
        role="switch"
        aria-checked={currentChecked}
        aria-label={label}
        aria-describedby={ariaDescribedby}
        disabled={disabled}
        theme={theme}
        onClick={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0}
        {...props}
      >
        <ToggleTrack colors={colors} />
        <ToggleThumb
          isOn={currentChecked}
          isPressed={isPressed}
          colors={colors}
        />
      </ToggleButton>
      {label && (
        <ToggleLabel
          htmlFor={toggleId}
          colors={colors}
          disabled={disabled}
          onClick={(e) => {
            if (!disabled) {
              e.preventDefault();
              handleChange(e);
            }
          }}
        >
          {label}
        </ToggleLabel>
      )}
    </ToggleContainer>
  );
});

Toggle.displayName = 'Toggle';

Toggle.propTypes = {
  /** Whether the toggle is checked (on) */
  checked: PropTypes.bool,
  /** Whether the toggle is disabled */
  disabled: PropTypes.bool,
  /** Label text for the toggle */
  label: PropTypes.string,
  /** Theme variant */
  theme: PropTypes.oneOf(Object.values(TOGGLE_THEMES)),
  /** Change event handler */
  onChange: PropTypes.func,
  /** Focus event handler */
  onFocus: PropTypes.func,
  /** Blur event handler */
  onBlur: PropTypes.func,
  /** ID for the toggle */
  id: PropTypes.string,
  /** Name attribute */
  name: PropTypes.string,
  /** Value attribute */
  value: PropTypes.string,
  /** Additional CSS class name */
  className: PropTypes.string,
  /** Additional inline styles */
  style: PropTypes.object,
  /** ARIA describedby attribute */
  'aria-describedby': PropTypes.string
};

export { TOGGLE_THEMES, TOGGLE_STATES };
export default Toggle;

