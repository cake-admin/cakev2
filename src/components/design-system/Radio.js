import React, { forwardRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colorData from '../../data/colors.json';

/**
 * Radio states
 */
const RADIO_STATES = {
  UNSELECTED: 'unselected',
  SELECTED: 'selected'
};

/**
 * Radio themes
 */
const RADIO_THEMES = {
  LIGHT: 'light.a',
  DARK: 'dark.a'
};

/**
 * Radio sizes
 */
const RADIO_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

const getRadioColors = (state, theme, isDisabled, isFocused, isHovered, isPressed) => {
  const isDark = theme === RADIO_THEMES.DARK;
  
  if (isDark) {
    // Dark theme colors (dark.a)
    if (isDisabled) {
      if (state === RADIO_STATES.SELECTED) {
        return {
          border: '#9CA3AF',
          background: '#27272A',
          dot: '#71717A',
          label: '#9CA3AF'
        };
      } else {
        return {
          border: '#9CA3AF',
          background: '#27272A',
          dot: 'transparent',
          label: '#9CA3AF'
        };
      }
    }

    if (state === RADIO_STATES.SELECTED) {
      if (isHovered) {
        return {
          border: '#93C5FD',
          background: 'transparent',
          dot: '#93C5FD',
          label: '#D4D4D8'
        };
      } else {
        return {
          border: '#93C5FD',
          background: 'transparent',
          dot: '#93C5FD',
          label: '#D4D4D8'
        };
      }
    }

    // Unselected state for dark theme
    if (isHovered) {
      return {
        border: '#D4D4D8',
        background: 'transparent',
        dot: 'transparent',
        label: '#D4D4D8'
      };
    } else if (isFocused) {
      return {
        border: '#71717A',
        background: 'transparent',
        dot: 'transparent',
        label: '#D4D4D8'
      };
    } else {
      return {
        border: '#71717A',
        background: 'transparent',
        dot: 'transparent',
        label: '#D4D4D8'
      };
    }
  } else {
    // Light theme colors (light.a)
    if (isDisabled) {
      return {
        border: '#64748B',
        background: '#F1F5F9',
        dot: '#1D4ED8',
        label: '#475569'
      };
    }

    if (state === RADIO_STATES.SELECTED) {
      if (isHovered) {
        return {
          border: '#1E40AF',
          background: '#1E40AF',
          dot: '#1E40AF',
          label: '#0F172A'
        };
      } else if (isFocused) {
        return {
          border: '#1D4ED8',
          background: '#1D4ED8',
          dot: '#1D4ED8',
          label: '#0F172A'
        };
      } else {
        return {
          border: '#1D4ED8',
          background: '#1D4ED8',
          dot: '#1D4ED8',
          label: '#0F172A'
        };
      }
    }

    // Unselected state for light theme
    if (isHovered) {
      return {
        border: '#0F172A',
        background: 'transparent',
        dot: 'transparent',
        label: '#0F172A'
      };
    } else if (isFocused) {
      return {
        border: '#64748B',
        background: 'transparent',
        dot: 'transparent',
        label: '#0F172A'
      };
    } else {
      return {
        border: '#64748B',
        background: 'transparent',
        dot: 'transparent',
        label: '#0F172A'
      };
    }
  }
};

const getRadioSize = (size) => {
  switch (size) {
    case RADIO_SIZES.SMALL:
      return {
        radioSize: '16px',
        dotSize: '8px',
        labelFontSize: '14px',
        focusRingSize: '24px'
      };
    case RADIO_SIZES.LARGE:
      return {
        radioSize: '24px',
        dotSize: '12px',
        labelFontSize: '16px',
        focusRingSize: '32px'
      };
    default: // MEDIUM
      return {
        radioSize: '14px',
        dotSize: '8px',
        labelFontSize: '14px',
        focusRingSize: '20px'
      };
  }
};

const RadioContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: ${props => props.isDisabled ? 'not-allowed' : 'pointer'};
  user-select: none;
  position: relative;
  outline: none;
`;

const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
`;

const RadioButton = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  position: relative;
  flex-shrink: 0;

  ${props => props.isHovered && props.theme === RADIO_THEMES.LIGHT && props.state === RADIO_STATES.UNSELECTED && `
    &::after {
      content: '';
      position: absolute;
      top: -4px;
      left: -4px;
      right: -4px;
      bottom: -4px;
      background: #E2E8F0;
      border-radius: 50%;
      opacity: 0.8;
      z-index: 0;
      transition: all 0.3s ease-out;
    }
  `}

  ${props => props.isHovered && props.theme === RADIO_THEMES.LIGHT && props.state === RADIO_STATES.SELECTED && `
    &::after {
      content: '';
      position: absolute;
      top: -4px;
      left: -4px;
      right: -4px;
      bottom: -4px;
      background: #DBEAFE;
      border-radius: 50%;
      opacity: 0.8;
      z-index: 0;
      transition: all 0.3s ease-out;
    }
  `}

  ${props => props.isHovered && props.theme === RADIO_THEMES.DARK && props.state === RADIO_STATES.UNSELECTED && `
    &::after {
      content: '';
      position: absolute;
      top: -4px;
      left: -4px;
      right: -4px;
      bottom: -4px;
      background: #64748B;
      border-radius: 50%;
      opacity: 0.25;
      z-index: 0;
      transition: all 0.3s ease-out;
    }
  `}

  ${props => props.isHovered && props.theme === RADIO_THEMES.DARK && props.state === RADIO_STATES.SELECTED && `
    &::after {
      content: '';
      position: absolute;
      top: -4px;
      left: -4px;
      right: -4px;
      bottom: -4px;
      background: #3B82F6;
      border-radius: 50%;
      opacity: 0.45;
      z-index: 0;
      transition: all 0.3s ease-out;
    }
  `}
`;

const RadioButtonInner = styled.div`
  width: ${props => getRadioSize(props.size).radioSize};
  height: ${props => getRadioSize(props.size).radioSize};
  border: 2px solid ${props => getRadioColors(props.state, props.theme, props.isDisabled, props.isFocused, props.isHovered, props.isPressed).border};
  border-radius: 50%;
  background: ${props => props.state === RADIO_STATES.SELECTED ? 'transparent' : getRadioColors(props.state, props.theme, props.isDisabled, props.isFocused, props.isHovered, props.isPressed).background};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;

  ${props => props.isFocused && props.theme === RADIO_THEMES.LIGHT && `
    &::after {
      content: '';
      position: absolute;
      top: -8px;
      left: -8px;
      right: -8px;
      bottom: -8px;
      border: 3px solid #1D4ED8;
      border-radius: 50%;
    }
  `}

  ${props => props.isFocused && props.theme === RADIO_THEMES.DARK && `
    &::after {
      content: '';
      position: absolute;
      top: -8px;
      left: -8px;
      right: -8px;
      bottom: -8px;
      border: 3px solid #93C5FD;
      border-radius: 50%;
    }
  `}
`;

const RadioDot = styled.div`
  width: ${props => getRadioSize(props.size).dotSize};
  height: ${props => getRadioSize(props.size).dotSize};
  border-radius: 50%;
  background: ${props => getRadioColors(props.state, props.theme, props.isDisabled, props.isFocused, props.isHovered, props.isPressed).dot};
  transition: all 0.2s ease-in-out;
  opacity: ${props => props.state === RADIO_STATES.SELECTED ? 1 : 0};
  position: relative;
  z-index: 2;
`;

const RadioInnerRing = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${props => getRadioSize(props.size).radioSize - 8}px;
  height: ${props => getRadioSize(props.size).radioSize - 8}px;
  border-radius: 50%;
  background: ${props => props.theme === RADIO_THEMES.LIGHT ? '#FFFFFF' : 'transparent'};
  opacity: ${props => props.state === RADIO_STATES.SELECTED ? 1 : 0};
  transition: all 0.2s ease-in-out;
  z-index: 1;
`;

const RadioLabel = styled.label`
  font-size: ${props => getRadioSize(props.size).labelFontSize};
  font-weight: 600;
  color: ${props => getRadioColors(props.state, props.theme, props.isDisabled, props.isFocused, props.isHovered, props.isPressed).label};
  cursor: ${props => props.isDisabled ? 'not-allowed' : 'pointer'};
  margin: 0;
  margin-top: 2px;
  display: flex;
  align-items: center;
`;

const Radio = forwardRef(({
  checked = false,
  disabled = false,
  label = '',
  name = '',
  value = '',
  size = RADIO_SIZES.MEDIUM,
  theme = RADIO_THEMES.LIGHT,
  onChange,
  onFocus,
  onBlur,
  className,
  id,
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const state = checked ? RADIO_STATES.SELECTED : RADIO_STATES.UNSELECTED;
  const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;

  const handleChange = (event) => {
    if (!disabled && onChange) {
      // Toggle the checked state
      const newEvent = {
        ...event,
        target: {
          ...event.target,
          checked: !checked,
          value: event.target.value
        }
      };
      onChange(newEvent);
    }
  };

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

  const handleClick = (event) => {
    if (!disabled && onChange) {
      // Clear focus state
      setIsFocused(false);
      
      // Toggle the checked state
      const newEvent = {
        ...event,
        target: {
          ...event.target,
          checked: !checked,
          value: value
        }
      };
      onChange(newEvent);
    }
  };

  const handleKeyDown = (event) => {
    if (!disabled && (event.key === ' ' || event.key === 'Enter')) {
      event.preventDefault();
      
      // Toggle the checked state
      const newEvent = {
        ...event,
        target: {
          ...event.target,
          checked: !checked,
          value: value
        }
      };
      onChange(newEvent);
    }
  };

  return (
    <RadioContainer
      isDisabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={disabled ? -1 : 0}
      role="radio"
      aria-checked={checked}
      className={className}
    >
      <RadioInput
        ref={ref}
        type="radio"
        id={radioId}
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      <RadioButton
        state={state}
        theme={theme}
        isDisabled={disabled}
        isFocused={isFocused}
        isHovered={isHovered}
        isPressed={isPressed}
        size={size}
      >
        <RadioButtonInner
          state={state}
          theme={theme}
          isDisabled={disabled}
          isFocused={isFocused}
          isHovered={isHovered}
          isPressed={isPressed}
          size={size}
        >
          <RadioInnerRing
            state={state}
            theme={theme}
            size={size}
          />
          <RadioDot
            state={state}
            theme={theme}
            isDisabled={disabled}
            isFocused={isFocused}
            isHovered={isHovered}
            isPressed={isPressed}
            size={size}
          />
        </RadioButtonInner>
      </RadioButton>
      {label && (
        <RadioLabel
          htmlFor={radioId}
          isDisabled={disabled}
          state={state}
          theme={theme}
          isFocused={isFocused}
          isHovered={isHovered}
          isPressed={isPressed}
          size={size}
          onClick={(e) => {
            e.preventDefault();
            handleClick(e);
          }}
        >
          {label}
        </RadioLabel>
      )}
    </RadioContainer>
  );
});

Radio.propTypes = {
  /** Whether the radio is checked */
  checked: PropTypes.bool,
  /** Whether the radio is disabled */
  disabled: PropTypes.bool,
  /** Label text for the radio */
  label: PropTypes.string,
  /** Name attribute for radio group */
  name: PropTypes.string,
  /** Value attribute for the radio */
  value: PropTypes.string,
  /** Size variant of the radio */
  size: PropTypes.oneOf(Object.values(RADIO_SIZES)),
  /** Theme variant */
  theme: PropTypes.oneOf(Object.values(RADIO_THEMES)),
  /** Change event handler */
  onChange: PropTypes.func,
  /** Focus event handler */
  onFocus: PropTypes.func,
  /** Blur event handler */
  onBlur: PropTypes.func,
  /** Additional CSS class name */
  className: PropTypes.string,
  /** ID for the radio input */
  id: PropTypes.string,
};

Radio.displayName = 'Radio';

export { RADIO_STATES, RADIO_THEMES, RADIO_SIZES };
export default Radio;

