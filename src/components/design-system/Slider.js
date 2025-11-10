import React, { forwardRef, useState, useCallback, useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getTokenColor, THEMES } from '../../tokens/colorTokens';
import { fontStack } from '../../styles/globalStyles';

/**
 * Slider themes
 */
const SLIDER_THEMES = {
  LIGHT: 'light.a',
  DARK: 'dark.a'
};

/**
 * Slider states
 */
const SLIDER_STATES = {
  ENABLED: 'Enabled',
  HOVERED: 'Hovered',
  PRESSED: 'Pressed',
  FOCUS: 'Focus',
  DISABLED: 'Disabled'
};

const getSliderColors = (theme, state, isHovered, isPressed, isFocused, isDisabled) => {
  if (isDisabled) {
    return {
      track: getTokenColor('border.disabled', theme),
      fill: getTokenColor('border.disabled', theme),
      thumb: getTokenColor('border.disabled', theme),
      label: getTokenColor('text.disabled', theme),
      value: getTokenColor('text.disabled', theme)
    };
  }

  if (isPressed || state === SLIDER_STATES.PRESSED) {
    return {
      track: getTokenColor('border.default', theme),
      fill: getTokenColor('reference.primary', theme),
      thumb: getTokenColor('reference.primary', theme),
      label: getTokenColor('text.primary', theme),
      value: getTokenColor('text.primary', theme)
    };
  } else if (isHovered || state === SLIDER_STATES.HOVERED) {
    return {
      track: getTokenColor('border.default', theme),
      fill: getTokenColor('button.primary.backgroundHover', theme),
      thumb: getTokenColor('button.primary.backgroundHover', theme),
      label: getTokenColor('text.primary', theme),
      value: getTokenColor('text.primary', theme)
    };
  } else if (isFocused || state === SLIDER_STATES.FOCUS) {
    return {
      track: getTokenColor('border.default', theme),
      fill: getTokenColor('reference.primary', theme),
      thumb: getTokenColor('reference.primary', theme),
      label: getTokenColor('text.primary', theme),
      value: getTokenColor('text.primary', theme)
    };
  } else {
    return {
      track: getTokenColor('border.default', theme),
      fill: getTokenColor('reference.primary', theme),
      thumb: getTokenColor('reference.primary', theme),
      label: getTokenColor('text.primary', theme),
      value: getTokenColor('text.primary', theme)
    };
  }
};

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  position: relative;
`;

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 24px;
  display: flex;
  align-items: center;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  user-select: none;
`;

const SliderTrack = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 4px;
  border-radius: 2px;
  background-color: ${props => props.colors.track};
  transition: background-color 0.2s ease;
`;

const SliderFill = styled.div`
  position: absolute;
  left: 0;
  height: 4px;
  border-radius: 2px;
  background-color: ${props => props.colors.fill};
  transition: ${props => props.isDragging 
    ? 'background-color 0.2s ease' 
    : 'background-color 0.2s ease, width 0.1s ease'};
  width: ${props => props.percentage}%;
`;

const SliderThumb = styled.div`
  position: absolute;
  left: ${props => props.percentage}%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.colors.thumb};
  border: 2px solid ${props => props.colors.thumb};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: ${props => props.isDragging 
    ? 'none' 
    : 'transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'grab'};
  z-index: 2;

  &:active {
    cursor: ${props => props.disabled ? 'not-allowed' : 'grabbing'};
    transform: translateX(-50%) scale(1.1);
  }

  &:hover {
    ${props => !props.disabled && !props.isDragging && `
      transform: translateX(-50%) scale(1.05);
    `}
  }
`;

const SliderInput = styled.input`
  position: absolute;
  width: 100%;
  height: 24px;
  opacity: 0;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  z-index: 3;
  margin: 0;
  padding: 0;
`;

const SliderLabel = styled.label`
  font-family: ${fontStack};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: ${props => props.colors.label};
  margin: 0;
  white-space: nowrap;
  transition: color 0.2s ease;
`;

const SliderValue = styled.span`
  font-family: ${fontStack};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${props => props.colors.value};
  margin: 0;
  white-space: nowrap;
  transition: color 0.2s ease;
`;

const SliderLabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const FocusRing = styled.div`
  position: absolute;
  top: -4px;
  left: ${props => props.percentage}%;
  transform: translateX(-50%);
  width: 32px;
  height: 32px;
  border: 3px solid ${props => getTokenColor('reference.focus', props.theme)};
  border-radius: 50%;
  pointer-events: none;
  box-sizing: border-box;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.2s ease;

  ${props => props.isFocused && `
    opacity: 1;
  `}
`;

const SliderPopover = styled.div`
  position: absolute;
  bottom: 100%;
  left: ${props => props.percentage}%;
  transform: translateX(-50%);
  margin-bottom: 8px;
  padding: 8px 12px;
  background-color: ${props => getTokenColor('text.primary', props.theme)};
  color: ${props => getTokenColor('background.canvas', props.theme)};
  border-radius: 4px;
  font-family: ${fontStack};
  font-size: 0.875rem;
  line-height: 1.4;
  white-space: nowrap;
  pointer-events: none;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 1000;
  opacity: ${props => props.$visible ? 1 : 0};
  visibility: ${props => props.$visible ? 'visible' : 'hidden'};
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
`;

const SliderWithInputsWrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  width: 100%;
`;

const SliderInputField = styled.input`
  width: 64px;
  height: 40px;
  padding: 8px 12px;
  border: 2px solid ${props => props.$colors.border};
  border-radius: 4px;
  font-family: ${fontStack};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${props => props.$colors.text};
  background-color: ${props => props.$colors.background};
  transition: border-color 0.15s ease-in-out, background-color 0.15s ease-in-out;
  box-sizing: border-box;
  text-align: right;
  
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  
  &:hover:not(:disabled) {
    border-color: ${props => props.$colors.hoverBorder || props.$colors.border};
    background-color: ${props => props.$colors.background === '#F8FAFC' ? '#FFFFFF' : props.$colors.background};
  }
  
  &:focus {
    outline: none;
    border-width: 2px;
    border-color: ${props => props.$colors.focusBorder || props.$colors.border};
    background-color: ${props => props.$colors.background === '#F8FAFC' ? '#FFFFFF' : props.$colors.background};
  }
  
  &:disabled {
    cursor: not-allowed;
    background-color: ${props => props.$colors.disabledBackground || props.$colors.background};
  }
  
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

const SliderTrackWrapper = styled.div`
  flex: 1;
  position: relative;
  height: 24px;
  display: flex;
  align-items: center;
`;

const getInputFieldColors = (theme, disabled) => {
  const isDark = theme === SLIDER_THEMES.DARK;
  
  if (disabled) {
    return {
      border: isDark ? '#374151' : '#9CA3AF',
      background: isDark ? '#1F2937' : '#F1F5F9',
      text: isDark ? '#6B7280' : '#475569',
      hoverBorder: isDark ? '#374151' : '#9CA3AF',
      focusBorder: isDark ? '#374151' : '#9CA3AF',
      disabledBackground: isDark ? '#1F2937' : '#F1F5F9'
    };
  }
  
  return {
    border: isDark ? '#4B5563' : '#64748B',
    background: isDark ? '#1F2937' : '#F8FAFC',
    text: isDark ? '#F9FAFB' : '#0F172A',
    hoverBorder: isDark ? '#4B5563' : '#64748B',
    focusBorder: isDark ? '#3B82F6' : '#1D4ED8',
    disabledBackground: isDark ? '#1F2937' : '#F1F5F9'
  };
};

/**
 * Format slider value based on step precision
 * @param {number} value - The value to format
 * @param {number} step - The step increment
 * @returns {string} Formatted value string
 */
const formatSliderValue = (value, step) => {
  // Calculate decimal places based on step
  const stepString = step.toString();
  const decimalIndex = stepString.indexOf('.');
  
  if (decimalIndex === -1) {
    // Step is an integer, display as integer
    return Math.round(value).toString();
  }
  
  // Step has decimals, calculate precision
  const decimalPlaces = stepString.length - decimalIndex - 1;
  
  // Format with appropriate precision
  const formatted = value.toFixed(decimalPlaces);
  
  // Remove trailing zeros
  return parseFloat(formatted).toString();
};

const Slider = forwardRef(({
  value: controlledValue,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  label = '',
  showValue = false,
  withInputField = false,
  theme = SLIDER_THEMES.LIGHT,
  onChange,
  onFocus,
  onBlur,
  id,
  name,
  className,
  style,
  'aria-describedby': ariaDescribedby,
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const initialValue = controlledValue !== undefined ? controlledValue : (min + max) / 2;
  const [internalValue, setInternalValue] = useState(initialValue);
  const [inputValue, setInputValue] = useState(() => {
    if (withInputField) {
      return formatSliderValue(initialValue, step);
    }
    return '';
  });
  const sliderRef = useRef(null);
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  // Clamp value to min/max range
  const clampedValue = Math.max(min, Math.min(max, currentValue));
  
  // Calculate percentage for positioning
  const percentage = ((clampedValue - min) / (max - min)) * 100;

  // Sync input value with slider value when slider changes
  useEffect(() => {
    if (withInputField) {
      const formattedValue = formatSliderValue(clampedValue, step);
      setInputValue(formattedValue);
    } else {
      setInputValue('');
    }
  }, [clampedValue, step, withInputField]);

  const colors = getSliderColors(
    theme,
    disabled ? SLIDER_STATES.DISABLED : SLIDER_STATES.ENABLED,
    isHovered,
    isPressed,
    isFocused,
    disabled
  );

  const handleChange = useCallback((event) => {
    if (disabled) return;

    const newValue = parseFloat(event.target.value);
    
    if (!isControlled) {
      setInternalValue(newValue);
    }

    if (onChange) {
      onChange(event);
    }
  }, [disabled, isControlled, onChange]);

  const handleInputChange = useCallback((event) => {
    if (disabled) return;
    
    const inputVal = event.target.value;
    setInputValue(inputVal);
    
    // Allow empty input while typing
    if (inputVal === '' || inputVal === '-') {
      return;
    }
    
    const numValue = parseFloat(inputVal);
    
    // Validate the input
    if (!isNaN(numValue)) {
      const clampedInput = Math.max(min, Math.min(max, numValue));
      const steppedValue = Math.round(clampedInput / step) * step;
      const finalValue = Math.max(min, Math.min(max, steppedValue));
      
      if (!isControlled) {
        setInternalValue(finalValue);
      }
      
      // Create synthetic event for onChange
      const syntheticEvent = {
        target: {
          value: finalValue.toString(),
          ...event.target
        },
        ...event
      };
      
      if (onChange) {
        onChange(syntheticEvent);
      }
    }
  }, [disabled, min, max, step, isControlled, onChange]);

  const handleInputBlur = useCallback((event) => {
    // On blur, ensure the input shows a valid value
    const numValue = parseFloat(event.target.value);
    
    if (isNaN(numValue) || event.target.value === '' || event.target.value === '-') {
      // Reset to current slider value
      const formattedValue = formatSliderValue(clampedValue, step);
      setInputValue(formattedValue);
    } else {
      // Ensure value is within bounds and stepped
      const clampedInput = Math.max(min, Math.min(max, numValue));
      const steppedValue = Math.round(clampedInput / step) * step;
      const finalValue = Math.max(min, Math.min(max, steppedValue));
      const formattedValue = formatSliderValue(finalValue, step);
      setInputValue(formattedValue);
      
      if (finalValue !== clampedValue) {
        if (!isControlled) {
          setInternalValue(finalValue);
        }
        
        const syntheticEvent = {
          target: {
            value: finalValue.toString(),
            ...event.target
          },
          ...event
        };
        
        if (onChange) {
          onChange(syntheticEvent);
        }
      }
    }
    
    if (onBlur) {
      onBlur(event);
    }
  }, [clampedValue, step, min, max, isControlled, onChange, onBlur]);

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
    setIsDragging(false);
  };

  const handleMouseDown = () => {
    if (!disabled) {
      setIsPressed(true);
      setIsDragging(true);
    }
  };

  const handleMouseUp = () => {
    setIsPressed(false);
    setIsDragging(false);
  };

  const handleTouchStart = () => {
    if (!disabled) {
      setIsPressed(true);
      setIsDragging(true);
    }
  };

  const handleTouchEnd = () => {
    setIsPressed(false);
    setIsDragging(false);
  };

  const sliderId = id || `slider-${Math.random().toString(36).substr(2, 9)}`;

  // Combine refs
  useEffect(() => {
    if (ref) {
      if (typeof ref === 'function') {
        ref(sliderRef.current);
      } else {
        ref.current = sliderRef.current;
      }
    }
  }, [ref]);

  // Handle global mouse/touch up events to reset dragging state
  useEffect(() => {
    if (isDragging) {
      const handleGlobalMouseUp = () => {
        setIsDragging(false);
        setIsPressed(false);
      };

      const handleGlobalTouchEnd = () => {
        setIsDragging(false);
        setIsPressed(false);
      };

      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.addEventListener('touchend', handleGlobalTouchEnd);

      return () => {
        document.removeEventListener('mouseup', handleGlobalMouseUp);
        document.removeEventListener('touchend', handleGlobalTouchEnd);
      };
    }
  }, [isDragging]);

  const inputFieldColors = getInputFieldColors(theme, disabled);
  const valueInputId = `${sliderId}-value-input`;

  const renderSliderTrack = () => (
    <SliderWrapper disabled={disabled}>
      <FocusRing
        percentage={percentage}
        theme={theme}
        isFocused={isFocused}
      />
      {isDragging && !disabled && (
        <SliderPopover
          percentage={percentage}
          theme={theme}
          $visible={isDragging}
          role="tooltip"
        >
          {formatSliderValue(clampedValue, step)}
        </SliderPopover>
      )}
      <SliderTrack colors={colors} />
      <SliderFill colors={colors} percentage={percentage} isDragging={isDragging} />
      <SliderThumb
        colors={colors}
        percentage={percentage}
        disabled={disabled}
        isDragging={isDragging}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
      <SliderInput
        ref={sliderRef}
        id={sliderId}
        type="range"
        min={min}
        max={max}
        step={step}
        value={clampedValue}
        disabled={disabled}
        theme={theme}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        aria-label={label || 'Slider'}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={clampedValue}
        aria-describedby={ariaDescribedby}
        tabIndex={disabled ? -1 : 0}
        {...props}
      />
    </SliderWrapper>
  );

  return (
    <SliderContainer
      className={className}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {(label || showValue) && (
        <SliderLabelRow>
          {label && (
            <SliderLabel
              htmlFor={sliderId}
              colors={colors}
            >
              {label}
            </SliderLabel>
          )}
          {showValue && !withInputField && (
            <SliderValue colors={colors}>
              {clampedValue}
            </SliderValue>
          )}
        </SliderLabelRow>
      )}
      {withInputField ? (
        <SliderWithInputsWrapper>
          <SliderTrackWrapper>
            {renderSliderTrack()}
          </SliderTrackWrapper>
          <SliderInputField
            id={valueInputId}
            type="number"
            min={min}
            max={max}
            step={step}
            value={inputValue}
            disabled={disabled}
            $colors={inputFieldColors}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onFocus={handleFocus}
            aria-label={`Current value: ${clampedValue}`}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={clampedValue}
          />
        </SliderWithInputsWrapper>
      ) : (
        renderSliderTrack()
      )}
    </SliderContainer>
  );
});

Slider.displayName = 'Slider';

Slider.propTypes = {
  /** Current value of the slider */
  value: PropTypes.number,
  /** Minimum value */
  min: PropTypes.number,
  /** Maximum value */
  max: PropTypes.number,
  /** Step increment */
  step: PropTypes.number,
  /** Whether the slider is disabled */
  disabled: PropTypes.bool,
  /** Label text for the slider */
  label: PropTypes.string,
  /** Whether to show the current value */
  showValue: PropTypes.bool,
  /** Whether to show input field on the right */
  withInputField: PropTypes.bool,
  /** Theme variant */
  theme: PropTypes.oneOf(Object.values(SLIDER_THEMES)),
  /** Change event handler */
  onChange: PropTypes.func,
  /** Focus event handler */
  onFocus: PropTypes.func,
  /** Blur event handler */
  onBlur: PropTypes.func,
  /** ID for the slider */
  id: PropTypes.string,
  /** Name attribute */
  name: PropTypes.string,
  /** Additional CSS class name */
  className: PropTypes.string,
  /** Additional inline styles */
  style: PropTypes.object,
  /** ARIA describedby attribute */
  'aria-describedby': PropTypes.string
};

export { SLIDER_THEMES, SLIDER_STATES };
export default Slider;

