import React, { forwardRef, useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Radio, { RADIO_THEMES } from './Radio.js';
import Checkbox, { CHECKBOX_THEMES } from './Checkbox.js';
import cakeColorTokensData from '../../tokens/cake-color-tokens.json';

/**
 * SegmentedControl modes
 */
const SEGMENTED_CONTROL_MODES = {
  RADIO: 'radio',
  CHECKBOX: 'checkbox'
};

/**
 * SegmentedControl themes
 */
const SEGMENTED_CONTROL_THEMES = {
  LIGHT: 'light.a',
  DARK: 'dark.a'
};

// Parse cake-color-tokens.json to get color values
let cakeColorTokens;
try {
  cakeColorTokens = typeof cakeColorTokensData === 'string' 
    ? JSON.parse(cakeColorTokensData)
    : cakeColorTokensData;
} catch (error) {
  console.error('Failed to parse cake-color-tokens.json:', error);
  cakeColorTokens = {};
}

const getColorToken = (tokenName, theme) => {
  const isDark = theme === SEGMENTED_CONTROL_THEMES.DARK;
  const themeKey = isDark ? 'darkA' : 'lightA';
  
  // Token names in JSON use camelCase (e.g., borderPrimary, surfaceItem)
  // Use token name directly since we're already passing camelCase names
  if (cakeColorTokens[tokenName] && cakeColorTokens[tokenName][themeKey]) {
    return cakeColorTokens[tokenName][themeKey];
  }
  
  // Fallback colors matching Figma design (only used if token not found)
  // These should match the values in cake-color-tokens.json exactly
  const fallbacks = {
    'borderPrimary': { lightA: '#CBD5E1', darkA: '#52525B' },
    'borderRadioPrimary': { lightA: '#1D4ED8', darkA: '#93C5FD' },
    'surfaceItem': { lightA: '#FFFFFF', darkA: '#18181B' },
    'surfaceItemHover': { lightA: '#F1F5F9', darkA: '#27272A' },
    'surfaceItemSelected': { lightA: '#EFF6FF', darkA: '#60A5FA0D' },
    'surfaceItemSelectedHover': { lightA: '#DBEAFE', darkA: '#60A5FA1A' },
    'textPrimary': { lightA: '#0F172A', darkA: '#D4D4D8' }
  };
  
  if (fallbacks[tokenName]) {
    return fallbacks[tokenName][themeKey];
  }
  
  console.warn(`Color token "${tokenName}" not found in cake-color-tokens.json`);
  return isDark ? '#52525B' : '#CBD5E1';
};

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0;
  position: relative;
`;

const Segment = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 48px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  border: 2px solid ${props => {
    if (props.$disabled) {
      return getColorToken('borderPrimary', props.$theme);
    }
    if (props.$selected) {
      return getColorToken('borderRadioPrimary', props.$theme);
    }
    return getColorToken('borderPrimary', props.$theme);
  }};
  background: ${props => {
    if (props.$disabled) {
      return getColorToken('surfaceItem', props.$theme);
    }
    if (props.$selected) {
      if (props.$isHovered) {
        return getColorToken('surfaceItemSelectedHover', props.$theme);
      }
      return getColorToken('surfaceItemSelected', props.$theme);
    }
    if (props.$isHovered) {
      return getColorToken('surfaceItemHover', props.$theme);
    }
    return getColorToken('surfaceItem', props.$theme);
  }};
  border-radius: 4px;
  padding: 12px 24px 12px 12px;
  box-sizing: border-box;
  transition: all 0.15s ease-in-out;
  user-select: none;
  
  &:not(:last-child) {
    margin-right: 16px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -6px;
    left: -6px;
    right: -6px;
    bottom: -6px;
    border: 3px solid ${props => getColorToken('borderRadioPrimary', props.$theme)};
    border-radius: 6px;
    opacity: ${props => props.$isFocused ? 1 : 0};
    pointer-events: none;
    transition: opacity 0.2s ease;
    z-index: 1;
  }
  
  &:focus-visible {
    outline: none;
  }
  
  &:active:not([$disabled]) {
    transform: scale(0.98);
  }
`;

const VisualOnlyWrapper = styled.div`
  pointer-events: none;
  width: 100%;
  display: flex;
  align-items: center;
  
  /* Hide from screen readers since segment container handles announcements */
  & > * {
    pointer-events: none;
  }
`;

const SegmentedControl = forwardRef(({
  mode = SEGMENTED_CONTROL_MODES.RADIO,
  options = [],
  value: controlledValue,
  defaultValue,
  values: controlledValues,
  defaultValues,
  onChange,
  theme = SEGMENTED_CONTROL_THEMES.LIGHT,
  disabled = false,
  name,
  className,
  id,
  ...props
}, ref) => {
  // Handle controlled vs uncontrolled for radio mode
  const isRadioMode = mode === SEGMENTED_CONTROL_MODES.RADIO;
  const isControlled = isRadioMode 
    ? controlledValue !== undefined
    : controlledValues !== undefined;
  
  const [internalValue, setInternalValue] = useState(
    isRadioMode ? defaultValue : undefined
  );
  const [internalValues, setInternalValues] = useState(
    !isRadioMode ? (defaultValues || []) : undefined
  );
  
  const currentValue = isRadioMode
    ? (isControlled ? controlledValue : internalValue)
    : undefined;
  const currentValues = !isRadioMode
    ? (isControlled ? controlledValues : internalValues)
    : undefined;
  
  const isSelected = useCallback((optionValue) => {
    if (isRadioMode) {
      return currentValue === optionValue;
    } else {
      return Array.isArray(currentValues) && currentValues.includes(optionValue);
    }
  }, [isRadioMode, currentValue, currentValues]);
  
  const handleChange = useCallback((optionValue, checked) => {
    if (disabled) return;
    
    if (isRadioMode) {
      const newValue = checked ? optionValue : undefined;
      
      if (!isControlled) {
        setInternalValue(newValue);
      }
      
      if (onChange) {
        onChange(newValue);
      }
    } else {
      const current = Array.isArray(currentValues) ? [...currentValues] : [];
      let newValues;
      
      if (checked) {
        newValues = [...current, optionValue];
      } else {
        newValues = current.filter(v => v !== optionValue);
      }
      
      if (!isControlled) {
        setInternalValues(newValues);
      }
      
      if (onChange) {
        onChange(newValues);
      }
    }
  }, [disabled, isRadioMode, isControlled, currentValues, onChange]);
  
  const radioName = useMemo(() => {
    if (isRadioMode && name) {
      return name;
    }
    if (isRadioMode && !name) {
      return `segmented-control-radio-${Math.random().toString(36).substr(2, 9)}`;
    }
    return undefined;
  }, [isRadioMode, name]);
  
  const containerId = id || `segmented-control-${Math.random().toString(36).substr(2, 9)}`;
  
  // Track hover state for each segment
  const [hoveredSegment, setHoveredSegment] = useState(null);
  // Track focus state for each segment (independent from nested controls)
  const [focusedSegment, setFocusedSegment] = useState(null);
  
  const handleSegmentClick = useCallback((optionValue, event) => {
    if (disabled) return;
    
    // Stop event propagation to prevent any nested element interactions
    if (event) {
      event.stopPropagation();
    }
    
    if (isRadioMode) {
      // For radio, toggle selection (can deselect if already selected)
      const newValue = currentValue === optionValue ? undefined : optionValue;
      
      if (!isControlled) {
        setInternalValue(newValue);
      }
      
      if (onChange) {
        onChange(newValue);
      }
    } else {
      // For checkbox, toggle selection
      const current = Array.isArray(currentValues) ? [...currentValues] : [];
      const isCurrentlySelected = current.includes(optionValue);
      const newValues = isCurrentlySelected
        ? current.filter(v => v !== optionValue)
        : [...current, optionValue];
      
      if (!isControlled) {
        setInternalValues(newValues);
      }
      
      if (onChange) {
        onChange(newValues);
      }
    }
  }, [disabled, isRadioMode, isControlled, currentValue, currentValues, onChange]);
  
  const handleKeyDown = useCallback((optionValue, event) => {
    if (disabled) return;
    
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleSegmentClick(optionValue, event);
    }
  }, [disabled, handleSegmentClick]);
  
  return (
    <Container
      ref={ref}
      className={className}
      role={isRadioMode ? 'radiogroup' : 'group'}
      id={containerId}
      aria-label={props['aria-label']}
      {...props}
    >
      {options.map((option, index) => {
        const selected = isSelected(option.value);
        const optionDisabled = disabled || option.disabled;
        const isHovered = hoveredSegment === option.value;
        const isFocused = focusedSegment === option.value;
        
        if (isRadioMode) {
          return (
            <Segment
              key={option.value}
              $selected={selected}
              $isHovered={isHovered}
              $isFocused={isFocused}
              $disabled={optionDisabled}
              $theme={theme}
              onClick={(e) => handleSegmentClick(option.value, e)}
              onKeyDown={(e) => handleKeyDown(option.value, e)}
              onFocus={() => !optionDisabled && setFocusedSegment(option.value)}
              onBlur={() => setFocusedSegment(null)}
              onMouseEnter={() => !optionDisabled && setHoveredSegment(option.value)}
              onMouseLeave={() => setHoveredSegment(null)}
              tabIndex={optionDisabled ? -1 : 0}
              role="radio"
              aria-checked={selected}
              aria-label={option.label}
            >
              <VisualOnlyWrapper aria-hidden="true">
                <Radio
                  checked={selected}
                  disabled={optionDisabled}
                  label={option.label}
                  name={radioName}
                  value={option.value}
                  theme={theme}
                />
              </VisualOnlyWrapper>
            </Segment>
          );
        } else {
          return (
            <Segment
              key={option.value}
              $selected={selected}
              $isHovered={isHovered}
              $isFocused={isFocused}
              $disabled={optionDisabled}
              $theme={theme}
              onClick={(e) => handleSegmentClick(option.value, e)}
              onKeyDown={(e) => handleKeyDown(option.value, e)}
              onFocus={() => !optionDisabled && setFocusedSegment(option.value)}
              onBlur={() => setFocusedSegment(null)}
              onMouseEnter={() => !optionDisabled && setHoveredSegment(option.value)}
              onMouseLeave={() => setHoveredSegment(null)}
              tabIndex={optionDisabled ? -1 : 0}
              role="checkbox"
              aria-checked={selected}
              aria-label={option.label}
            >
              <VisualOnlyWrapper aria-hidden="true">
                <Checkbox
                  checked={selected}
                  disabled={optionDisabled}
                  label={option.label}
                  value={option.value}
                  theme={theme}
                />
              </VisualOnlyWrapper>
            </Segment>
          );
        }
      })}
    </Container>
  );
});

SegmentedControl.displayName = 'SegmentedControl';

SegmentedControl.propTypes = {
  /** Mode of the segmented control: 'radio' for single selection or 'checkbox' for multiple selection */
  mode: PropTypes.oneOf(Object.values(SEGMENTED_CONTROL_MODES)),
  /** Array of options to display */
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool
  })).isRequired,
  /** Selected value for radio mode (controlled) */
  value: PropTypes.string,
  /** Default selected value for radio mode (uncontrolled) */
  defaultValue: PropTypes.string,
  /** Selected values for checkbox mode (controlled) */
  values: PropTypes.arrayOf(PropTypes.string),
  /** Default selected values for checkbox mode (uncontrolled) */
  defaultValues: PropTypes.arrayOf(PropTypes.string),
  /** Callback when selection changes. For radio mode, receives a string. For checkbox mode, receives an array of strings. */
  onChange: PropTypes.func,
  /** Theme variant */
  theme: PropTypes.oneOf(Object.values(SEGMENTED_CONTROL_THEMES)),
  /** Whether the entire segmented control is disabled */
  disabled: PropTypes.bool,
  /** Name attribute for radio group (radio mode only) */
  name: PropTypes.string,
  /** Additional CSS class name */
  className: PropTypes.string,
  /** ID for the container */
  id: PropTypes.string,
  /** ARIA label for the container */
  'aria-label': PropTypes.string
};

export default SegmentedControl;
export { SEGMENTED_CONTROL_MODES, SEGMENTED_CONTROL_THEMES };

