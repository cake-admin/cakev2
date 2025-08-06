import React, { forwardRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colorData from '../../data/colors.json';

/**
 * Checkbox states
 */
const CHECKBOX_STATES = {
  UNCHECKED: 'unchecked',
  CHECKED: 'checked',
  INDETERMINATE: 'indeterminate'
};

/**
 * Checkbox themes
 */
const CHECKBOX_THEMES = {
  LIGHT: 'light.a',
  DARK: 'dark.a'
};

/**
 * Checkbox sizes
 */
const CHECKBOX_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

const getCheckboxColors = (state, theme, isDisabled, isFocused) => {
  const isDark = theme === CHECKBOX_THEMES.DARK;
  
  if (isDisabled) {
    if (isDark) {
      return {
        border: colorData.slate[600],
        background: colorData.slate[700],
        icon: colorData.slate[500],
        label: colorData.slate[400]
      };
    }
    return {
      border: colorData.slate[300],
      background: colorData.slate[100],
      icon: colorData.slate[400],
      label: colorData.slate[400]
    };
  }

  if (state === CHECKBOX_STATES.CHECKED || state === CHECKBOX_STATES.INDETERMINATE) {
    if (isDark) {
      return {
        border: colorData.blue[400],
        background: colorData.blue[400],
        icon: colorData.slate[900],
        label: colorData.slate[100]
      };
    }
    return {
      border: colorData.blue[500],
      background: colorData.blue[500],
      icon: 'white',
      label: colorData.slate[900]
    };
  }

  // Unchecked state
  if (isFocused) {
    if (isDark) {
      return {
        border: colorData.blue[400],
        background: 'transparent',
        icon: 'transparent',
        label: colorData.slate[100]
      };
    }
    return {
      border: colorData.blue[500],
      background: 'transparent',
      icon: 'transparent',
      label: colorData.slate[900]
    };
  }

  if (isDark) {
    return {
      border: colorData.slate[400],
      background: 'transparent',
      icon: 'transparent',
      label: colorData.slate[100]
    };
  }
  
  return {
    border: colorData.slate[300],
    background: 'transparent',
    icon: 'transparent',
    label: colorData.slate[900]
  };
};

const CheckboxContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.5 : 1};
  user-select: none;
  position: relative;
`;

const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  pointer-events: none;
`;

const CheckboxBox = styled.div`
  position: relative;
  width: ${props => {
    switch (props.size) {
      case CHECKBOX_SIZES.SMALL: return '14px';
      case CHECKBOX_SIZES.LARGE: return '18px';
      default: return '16px';
    }
  }};
  height: ${props => {
    switch (props.size) {
      case CHECKBOX_SIZES.SMALL: return '14px';
      case CHECKBOX_SIZES.LARGE: return '18px';
      default: return '16px';
    }
  }};
  border: 2px solid ${props => props.colors.border};
  border-radius: 3px;
  background-color: ${props => props.colors.background};
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  &:hover {
    border-color: ${props => {
      if (props.disabled) return props.colors.border;
      if (props.theme === CHECKBOX_THEMES.DARK) return colorData.blue[400];
      return colorData.blue[500];
    }};
  }
`;

const FocusRing = styled.div`
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border: 2px solid ${props => props.theme === CHECKBOX_THEMES.DARK ? colorData.blue[400] : colorData.blue[500]};
  border-radius: 5px;
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 0.2s ease;
  pointer-events: none;
`;

const CheckmarkIcon = styled.svg`
  width: ${props => {
    switch (props.size) {
      case CHECKBOX_SIZES.SMALL: return '8px';
      case CHECKBOX_SIZES.LARGE: return '12px';
      default: return '10px';
    }
  }};
  height: ${props => {
    switch (props.size) {
      case CHECKBOX_SIZES.SMALL: return '8px';
      case CHECKBOX_SIZES.LARGE: return '12px';
      default: return '10px';
    }
  }};
  fill: ${props => props.color};
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 0.2s ease;
`;

const IndeterminateIcon = styled.div`
  width: ${props => {
    switch (props.size) {
      case CHECKBOX_SIZES.SMALL: return '6px';
      case CHECKBOX_SIZES.LARGE: return '10px';
      default: return '8px';
    }
  }};
  height: 2px;
  background-color: ${props => props.color};
  border-radius: 1px;
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 0.2s ease;
`;

const Label = styled.label`
  font-size: ${props => {
    switch (props.size) {
      case CHECKBOX_SIZES.SMALL: return '12px';
      case CHECKBOX_SIZES.LARGE: return '16px';
      default: return '14px';
    }
  }};
  font-weight: 600;
  color: ${props => props.colors.label};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  line-height: 1.4;
  transition: color 0.2s ease;
`;

const Checkbox = forwardRef(({
  checked = false,
  indeterminate = false,
  disabled = false,
  label = 'Label',
  theme = CHECKBOX_THEMES.LIGHT,
  size = CHECKBOX_SIZES.MEDIUM,
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
  const [internalChecked, setInternalChecked] = useState(checked);

  // Handle controlled vs uncontrolled state
  const isControlled = checked !== undefined;
  const currentChecked = isControlled ? checked : internalChecked;

  // Determine the visual state
  const getVisualState = () => {
    if (indeterminate) return CHECKBOX_STATES.INDETERMINATE;
    if (currentChecked) return CHECKBOX_STATES.CHECKED;
    return CHECKBOX_STATES.UNCHECKED;
  };

  const visualState = getVisualState();
  const colors = getCheckboxColors(visualState, theme, disabled, isFocused);

  useEffect(() => {
    if (!isControlled) {
      setInternalChecked(checked);
    }
  }, [checked, isControlled]);

  const handleChange = (event) => {
    if (disabled) return;

    const newChecked = event.target.checked;
    
    if (!isControlled) {
      setInternalChecked(newChecked);
    }

    if (onChange) {
      onChange(event);
    }
  };

  const handleFocus = (event) => {
    setIsFocused(true);
    if (onFocus) {
      onFocus(event);
    }
  };

  const handleBlur = (event) => {
    setIsFocused(false);
    if (onBlur) {
      onBlur(event);
    }
  };

  const handleContainerClick = (event) => {
    if (disabled) return;
    
    // Prevent double-triggering if clicking on the label
    if (event.target.tagName === 'LABEL') return;
    
    // Create a synthetic event to trigger the hidden input
    const syntheticEvent = {
      target: {
        checked: !currentChecked,
        type: 'checkbox'
      }
    };
    
    handleChange(syntheticEvent);
  };

  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <CheckboxContainer
      disabled={disabled}
      className={className}
      style={style}
      onClick={handleContainerClick}
    >
      <HiddenInput
        ref={ref}
        type="checkbox"
        id={checkboxId}
        name={name}
        value={value}
        checked={currentChecked}
        disabled={disabled}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-describedby={ariaDescribedby}
        {...props}
      />
      <CheckboxBox
        colors={colors}
        disabled={disabled}
        theme={theme}
        size={size}
      >
        <FocusRing 
          visible={isFocused} 
          theme={theme}
        />
        {visualState === CHECKBOX_STATES.CHECKED && (
          <CheckmarkIcon 
            visible={true} 
            color={colors.icon}
            size={size}
            viewBox="0 0 24 24"
          >
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </CheckmarkIcon>
        )}
        {visualState === CHECKBOX_STATES.INDETERMINATE && (
          <IndeterminateIcon 
            visible={true} 
            color={colors.icon}
            size={size}
          />
        )}
      </CheckboxBox>
      <Label 
        htmlFor={checkboxId} 
        disabled={disabled}
        colors={colors}
        size={size}
      >
        {label}
      </Label>
    </CheckboxContainer>
  );
});

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  theme: PropTypes.oneOf(Object.values(CHECKBOX_THEMES)),
  size: PropTypes.oneOf(Object.values(CHECKBOX_SIZES)),
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  'aria-describedby': PropTypes.string
};

export default Checkbox;
export { CHECKBOX_STATES, CHECKBOX_THEMES, CHECKBOX_SIZES }; 