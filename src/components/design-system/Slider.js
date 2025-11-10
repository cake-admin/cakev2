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

const Slider = forwardRef(({
  value: controlledValue,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  label = '',
  showValue = false,
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
  const [internalValue, setInternalValue] = useState(controlledValue !== undefined ? controlledValue : (min + max) / 2);
  const sliderRef = useRef(null);
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  // Clamp value to min/max range
  const clampedValue = Math.max(min, Math.min(max, currentValue));
  
  // Calculate percentage for positioning
  const percentage = ((clampedValue - min) / (max - min)) * 100;

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
          {showValue && (
            <SliderValue colors={colors}>
              {clampedValue}
            </SliderValue>
          )}
        </SliderLabelRow>
      )}
      <SliderWrapper disabled={disabled}>
        <FocusRing
          percentage={percentage}
          theme={theme}
          isFocused={isFocused}
        />
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

