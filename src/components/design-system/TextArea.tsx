import React, { forwardRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { fontStack } from '../../styles/globalStyles';
import colorData from '../../data/colors.json';

/**
 * TextArea themes
 */
export const TEXTAREA_THEMES = {
  LIGHT: 'light.a',
  DARK: 'dark.a'
};

/**
 * TextArea states
 */
export const TEXTAREA_STATES = {
  DEFAULT: 'default',
  FOCUSED: 'focused',
  ERROR: 'error',
  SUCCESS: 'success',
  REQUIRED_EMPTY: 'required_empty',
  DISABLED: 'disabled'
};

const getTextAreaColors = (state, theme, isFocused, isHovered, hasValue = false) => {
  const isDark = theme === TEXTAREA_THEMES.DARK;
  
  if (isDark) {
    // Dark theme colors
    if (state === TEXTAREA_STATES.DISABLED) {
      return {
        border: '#374151', // Darker border for disabled state
        background: '#1F2937', // Dark background for disabled state
        text: '#6B7280', // Muted text color for disabled state
        placeholder: '#6B7280', // Muted placeholder for disabled state
        label: '#6B7280', // Muted label for disabled state
        helper: '#6B7280', // Muted helper text for disabled state
        error: '#FCA5A5', // Consistent red-300 for dark theme asterisk
        disabledBackground: '#1F2937',
        hoverBorder: '#374151',
        focusBorder: '#374151',
        activeBorder: '#374151'
      };
    }

    if (state === TEXTAREA_STATES.ERROR) {
      return {
        border: '#FCA5A5', // red-300 for dark theme error
        background: '#2F0808', // dark red background for dark theme error
        text: '#D4D4D8', // light gray text for dark background
        placeholder: '#A1A1AA', // muted placeholder for dark background
        label: '#D4D4D8', // light gray label for dark background
        helper: '#FCA5A5', // red-300 for error helper text
        error: '#FCA5A5', // red-300 for dark theme asterisk
        hoverBorder: '#F87171',
        focusBorder: '#FCA5A5',
        activeBorder: '#FCA5A5'
      };
    }

    if (state === TEXTAREA_STATES.FOCUSED) {
      return {
        border: '#3B82F6', // --border/focus for dark theme
        background: '#1F2937',
        text: '#F9FAFB',
        placeholder: '#9CA3AF',
        label: '#F9FAFB',
        helper: '#9CA3AF',
        error: '#FCA5A5', // Consistent red-300 for dark theme asterisk
        hoverBorder: '#3B82F6',
        focusBorder: '#3B82F6',
        activeBorder: '#3B82F6'
      };
    }

    if (state === TEXTAREA_STATES.SUCCESS) {
      return {
        border: '#34D399', // emerald-400 for dark theme success
        background: '#064E3B', // emerald-900 for dark theme success background
        text: '#D4D4D8', // light gray text for dark background
        placeholder: '#A1A1AA', // muted placeholder for dark background
        label: '#D4D4D8', // light gray label for dark background
        helper: '#34D399', // emerald-400 for success helper text
        error: '#FCA5A5', // red-300 for dark theme asterisk
        hoverBorder: '#10B981',
        focusBorder: '#34D399',
        activeBorder: '#34D399'
      };
    }

    // Default state for dark theme
    return {
      border: '#4B5563',
      background: '#1F2937',
      text: '#F9FAFB',
      placeholder: '#9CA3AF',
      label: '#F9FAFB',
      helper: '#9CA3AF',
      error: '#FCA5A5', // Consistent red-300 for dark theme asterisk
      hoverBorder: '#6B7280',
      focusBorder: '#3B82F6',
      activeBorder: '#3B82F6'
    };
  } else {
    // Light theme colors
    if (state === TEXTAREA_STATES.DISABLED) {
      return {
        border: '#9CA3AF',
        background: '#F1F5F9',
        text: '#475569',
        placeholder: '#9CA3AF',
        label: '#475569',
        helper: '#475569',
        error: '#dc2626', // Figma spec: red-600 for light theme asterisk
        disabledBackground: '#F1F5F9',
        hoverBorder: '#9CA3AF',
        focusBorder: '#9CA3AF',
        activeBorder: '#9CA3AF'
      };
    }

    if (state === TEXTAREA_STATES.ERROR) {
      return {
        border: '#B91C1C', // --border/input-error from Figma
        background: '#FEF2F2', // --reference/error-weak from Figma
        text: '#0F172A', // --text/primary from Figma
        placeholder: '#9CA3AF',
        label: '#0F172A', // --text/primary from Figma
        helper: '#B91C1C', // --reference/error from Figma
        error: '#dc2626', // Figma spec: red-600 for light theme asterisk
        hoverBorder: '#F87171',
        focusBorder: '#B91C1C',
        activeBorder: '#B91C1C'
      };
    }

    if (state === TEXTAREA_STATES.SUCCESS) {
      return {
        border: '#047857', // --border/input-success from Figma
        background: '#ECFDF5', // --reference/success-weak from Figma
        text: '#0F172A', // --text/primary from Figma
        placeholder: '#9CA3AF',
        label: '#0F172A', // --text/primary from Figma
        helper: '#047857', // --reference/success from Figma
        error: '#dc2626', // Figma spec: red-600 for light theme asterisk
        hoverBorder: '#059669',
        focusBorder: '#047857',
        activeBorder: '#047857'
      };
    }

    if (state === TEXTAREA_STATES.REQUIRED_EMPTY) {
      return {
        border: '#9CA3AF',
        background: '#F1F5F9',
        text: '#475569',
        placeholder: '#9CA3AF',
        label: '#475569',
        helper: '#9CA3AF',
        error: '#dc2626', // Figma spec: red-600 for light theme asterisk
        hoverBorder: '#9CA3AF',
        focusBorder: '#9CA3AF',
        activeBorder: '#9CA3AF'
      };
    }

    if (state === TEXTAREA_STATES.FOCUSED) {
      return {
        border: '#1D4ED8', // --border/focus
        background: '#FFFFFF', // --surface/input-focus
        text: hasValue ? '#0F172A' : '#475569', // --text/primary or --reference/helper
        placeholder: '#475569', // --reference/helper
        label: '#0F172A', // --text/primary
        helper: '#64748B', // --reference/helper
        error: '#dc2626', // Figma spec: red-600 for light theme asterisk
        hoverBorder: '#1D4ED8',
        focusBorder: '#1D4ED8',
        activeBorder: '#1D4ED8'
      };
    }

    // Handle hover state for light theme
    if (isHovered && !isFocused) {
      return {
        border: '#64748B',
        background: '#FFFFFF',
        text: hasValue ? '#0F172A' : '#475569',
        placeholder: '#475569',
        label: '#0F172A',
        helper: '#64748B',
        error: '#dc2626', // Figma spec: red-600 for light theme asterisk
        hoverBorder: '#9CA3AF',
        focusBorder: '#1D4ED8',
        activeBorder: '#1D4ED8'
      };
    }

    // Default state for light theme
    return {
      border: '#64748B',
      background: hasValue ? '#FFFFFF' : '#F8FAFC',
      text: hasValue ? '#0F172A' : '#475569',
      placeholder: '#475569',
      label: '#0F172A',
      helper: '#64748B',
      error: '#dc2626', // Figma spec: red-600 for light theme asterisk
      hoverBorder: '#9CA3AF',
      focusBorder: '#1D4ED8',
      activeBorder: '#1D4ED8'
    };
  }
};

const TextAreaWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledTextArea = styled.textarea<{ 
  $colors: any; 
  $state?: string; 
  $theme?: string;
  $rows?: number;
  $resize?: string;
}>`
  width: 100%;
  padding: 8px 12px; /* Matching Figma: py-[8px] pl-[12px] pr-[8px] */
  border: 2px solid ${props => props.$colors.border};
  border-radius: 4px; /* Matching Figma: rounded-[4px] */
  font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, sans-serif; /* Matching Figma font stack */
  font-size: 14px; /* Matching Figma: text-[14px] */
  font-weight: 400; /* Matching Figma: SegoeUI Regular */
  line-height: 20px; /* Matching Figma: leading-[20px] */
  letter-spacing: 0;
  color: ${props => props.$colors.text};
  background-color: ${props => props.$colors.background};
  transition: border-color 0.15s ease-in-out, background-color 0.15s ease-in-out;
  resize: ${props => props.$resize};
  min-height: ${props => props.$rows * 1.4 + 0.75}em;
  box-sizing: border-box;
  
  /* Ensure consistent rendering across browsers */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  
  &::placeholder {
    color: ${props => props.$colors.placeholder};
    font-weight: 400;
    font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  }
  
  &:hover:not(:disabled) {
    border-color: ${props => props.$colors.hoverBorder || props.$colors.border};
    background-color: ${props => props.$colors.background === '#F8FAFC' ? '#FFFFFF' : props.$colors.background}; /* Hover changes background to white */
  }
  
  &:hover:disabled {
    cursor: not-allowed;
  }
  
  &:focus {
    outline: none;
    border-width: 2px;
    border-color: ${props => props.$colors.focusBorder || props.$colors.border};
    background-color: ${props => props.$colors.background === '#F8FAFC' ? '#FFFFFF' : props.$colors.background}; /* Focus changes background to white */
  }
  
  &:disabled {
    cursor: not-allowed;
    background-color: ${props => props.$colors.disabledBackground || props.$colors.background};
  }
  
  &:active:not(:disabled) {
    border-color: ${props => props.$colors.activeBorder || props.$colors.border};
  }
`;

const LabelContainer = styled.div`
  display: flex;
  gap: 4px; /* Matching Figma: gap-[4px] */
  align-items: flex-start;
  margin-bottom: 4px; /* Matching Figma: gap-[4px] */
  font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, sans-serif; /* Matching Figma font stack */
  font-size: 14px; /* Matching Figma: text-[14px] */
  font-weight: 600; /* Matching Figma: SegoeUI Semibold */
  line-height: 20px; /* Matching Figma: leading-[20px] */
  letter-spacing: 0;
`;

const RequiredAsterisk = styled.span<{ $colors: any }>`
  color: ${props => props.$colors.error};
  font-weight: 600; /* Matching Figma: SegoeUI Semibold */
  white-space: nowrap;
  flex-shrink: 0;
`;

const Label = styled.label<{ $colors: any }>`
  color: ${props => props.$colors.label};
  font-weight: 600; /* Matching Figma: SegoeUI Semibold */
  flex: 1;
  min-width: 0;
`;

const HelperText = styled.p<{ $colors: any }>`
  margin: 6px 0 0 0; /* Matching Figma spacing */
  font-size: 12px;
  font-weight: 400;
  color: ${props => props.$colors.helper};
  font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, sans-serif; /* Matching Figma font stack */
  line-height: 1.4;
  letter-spacing: 0;
`;

const ErrorText = styled.div<{ $colors: any }>`
  margin: 6px 0 0 0; /* Matching Figma spacing */
  display: flex;
  align-items: center;
  gap: 8px; /* Matching Figma: gap-[8px] */
  font-size: 12px;
  font-weight: 400;
  color: ${props => props.$colors.error};
  font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, sans-serif; /* Matching Figma font stack */
  line-height: 1.4;
  letter-spacing: 0;
`;

const SuccessText = styled.div<{ $colors: any }>`
  margin: 6px 0 0 0; /* Matching Figma spacing */
  display: flex;
  align-items: center;
  gap: 8px; /* Matching Figma: gap-[8px] */
  font-size: 12px;
  font-weight: 400;
  color: ${props => props.$colors.helper};
  font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, sans-serif; /* Matching Figma font stack */
  line-height: 1.4;
  letter-spacing: 0;
`;

interface TextAreaProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: boolean;
  errorMessage?: string;
  success?: boolean;
  successMessage?: string;
  helperText?: string;
  disabled?: boolean;
  required?: boolean;
  rows?: number;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  theme?: string;
  state?: string;
  id?: string;
  name?: string;
  className?: string;
  style?: React.CSSProperties;
  'aria-describedby'?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({
  label,
  placeholder,
  value = '',
  onChange,
  error = false,
  errorMessage,
  success = false,
  successMessage,
  helperText,
  disabled = false,
  required = false,
  rows = 4,
  resize = 'vertical',
  theme = TEXTAREA_THEMES.LIGHT,
  state,
  id,
  name,
  className,
  style,
  'aria-describedby': ariaDescribedby,
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [internalValue, setInternalValue] = useState(value);

  // Handle controlled vs uncontrolled state
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  // Determine the visual state
  const getVisualState = () => {
    if (state) return state;
    if (disabled) return TEXTAREA_STATES.DISABLED;
    if (error) return TEXTAREA_STATES.ERROR;
    if (success) return TEXTAREA_STATES.SUCCESS;
    if (isFocused) return TEXTAREA_STATES.FOCUSED; // Prioritize focus over required empty
    if (required && (!currentValue || currentValue.trim() === '')) return TEXTAREA_STATES.REQUIRED_EMPTY;
    return TEXTAREA_STATES.DEFAULT;
  };

  const visualState = getVisualState();
  const hasValue = currentValue && currentValue.trim() !== '';
  const colors = getTextAreaColors(visualState, theme, isFocused, isHovered, hasValue);

  useEffect(() => {
    if (!isControlled) {
      setInternalValue(value);
    }
  }, [value, isControlled]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (disabled) return; // Prevent changes when disabled
    
    const newValue = event.target.value;
    
    if (!isControlled) {
      setInternalValue(newValue);
    }

    if (onChange) {
      onChange(newValue);
    }
  };

  const handleFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    if (disabled) return; // Prevent focus when disabled
    setIsFocused(true);
  };

  const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    if (disabled) return; // Prevent blur when disabled
    setIsFocused(false);
  };

  const handleMouseEnter = () => {
    if (!disabled) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const textAreaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
  const helperId = helperText ? `${textAreaId}-helper` : undefined;
  const errorId = errorMessage ? `${textAreaId}-error` : undefined;
  const successId = successMessage ? `${textAreaId}-success` : undefined;
  const describedBy = [helperId, errorId, successId].filter(Boolean).join(' ') || undefined;

  return (
    <TextAreaWrapper
      className={className}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {label && (
        <LabelContainer>
          {required && (
            <RequiredAsterisk $colors={colors}>
              *
            </RequiredAsterisk>
          )}
          <Label 
            htmlFor={textAreaId}
            $colors={colors}
          >
            {label}
          </Label>
        </LabelContainer>
      )}
      <StyledTextArea
        ref={ref}
        id={textAreaId}
        name={name}
        placeholder={placeholder}
        value={currentValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        $rows={rows}
        $resize={resize}
        $colors={colors}
        $state={visualState}
        $theme={theme}
        aria-describedby={describedBy || ariaDescribedby}
        aria-invalid={error}
        aria-required={required}
        {...props}
      />
      {error && errorMessage && (
        <ErrorText 
          id={errorId}
          $colors={colors}
        >
          <ErrorIcon style={{ fontSize: 16 }} />
          {errorMessage}
        </ErrorText>
      )}
      {success && successMessage && (
        <SuccessText 
          id={successId}
          $colors={colors}
        >
          <CheckCircleIcon style={{ fontSize: 16 }} />
          {successMessage}
        </SuccessText>
      )}
      {!error && !success && helperText && (
        <HelperText 
          id={helperId}
          $colors={colors}
        >
          {helperText}
        </HelperText>
      )}
    </TextAreaWrapper>
  );
});

TextArea.displayName = 'TextArea';

TextArea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  success: PropTypes.bool,
  successMessage: PropTypes.string,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  rows: PropTypes.number,
  resize: PropTypes.oneOf(['none', 'vertical', 'horizontal', 'both']),
  theme: PropTypes.oneOf(Object.values(TEXTAREA_THEMES)),
  state: PropTypes.oneOf(Object.values(TEXTAREA_STATES)),
  id: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  'aria-describedby': PropTypes.string
};

export default TextArea;
