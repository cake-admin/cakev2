import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TextField, { TEXTFIELD_THEMES, TEXTFIELD_STATES } from '../TextField.tsx';
import { getTokenColor, THEMES } from '../../../tokens/colorTokens';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const AI_TEXT_FIELD_STATES = {
  REST: 'rest',
  HOVER: 'hover',
  FOCUS: 'focus',
  TEXT_ENTERED: 'text entered',
  DISABLED: 'disabled'
};

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 56px;
  padding: 8px 12px 8px 16px;
  background-color: ${props => {
    if (props.$state === AI_TEXT_FIELD_STATES.DISABLED) {
      return getTokenColor('textField.surface.disabled', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A);
    }
    if (props.$state === AI_TEXT_FIELD_STATES.FOCUS) {
      return getTokenColor('textField.surface.inputFocus', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A);
    }
    if (props.$state === AI_TEXT_FIELD_STATES.HOVER || props.$state === AI_TEXT_FIELD_STATES.TEXT_ENTERED) {
      return getTokenColor('textField.surface.inputHover', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A);
    }
    return getTokenColor('textField.surface.input', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A);
  }};
  border: ${props => {
    if (props.$isFocused) {
      return '3px solid';
    }
    return '1px solid';
  }} ${props => {
    if (props.$state === AI_TEXT_FIELD_STATES.DISABLED) {
      return getTokenColor('textField.border.disabled', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A);
    }
    if (props.$isFocused) {
      return getTokenColor('textField.border.focus', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A);
    }
    return getTokenColor('textField.border.input', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A);
  }};
  border-radius: 4px;
  box-sizing: border-box;
  position: relative;
  transition: border-width 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
  max-width: 640px;
  min-width: 320px;
  
  ${props => props.$disabled && `
    cursor: not-allowed;
    opacity: 0.6;
  `}
`;

const TextFieldWrapper = styled.div`
  flex: 1;
  position: relative;
  
  /* Hide label and helper text from TextField */
  > div > div:first-child {
    display: none !important; /* Hide LabelContainer */
  }
  
  > div > p {
    display: none !important; /* Hide helper/error text */
  }
  
  /* Remove TextField's border and background - container provides it */
  input {
    border: none !important;
    background: transparent !important;
    padding: 0 !important;
    height: auto !important;
    font-family: 'Segoe UI', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: ${props => 
      getTokenColor('text.primary', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)} !important;
    width: 100%;
    outline: none;
    
    &::placeholder {
      color: ${props =>
        getTokenColor('reference.helper', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)} !important;
    }
    
    &:disabled {
      cursor: not-allowed;
      color: ${props =>
        getTokenColor('textField.text.disabled', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)} !important;
    }
    
    /* Remove hover/focus background changes */
    &:hover {
      background: transparent !important;
      border: none !important;
    }
    
    &:focus {
      background: transparent !important;
      border: none !important;
      outline: none;
    }
  }
`;

const StyledIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  padding: 0;
  outline: none;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  flex-shrink: 0;
  
  &:hover:not(:disabled) {
    background-color: ${props => 
      getTokenColor('surface.itemHover', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
  }
  
  &:active:not(:disabled) {
    background-color: ${props => 
      getTokenColor('surface.itemSelected', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
  }
  
  &:disabled {
    opacity: 0.5;
  }
  
  svg {
    width: 16px;
    height: 16px;
    color: ${props => {
      if (props.$disabled) {
        return getTokenColor('icon.disabled', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A);
      }
      // Send icon is blue when text is entered
      if (props.$isSendIcon && props.$hasText) {
        return getTokenColor('reference.primary', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A);
      }
      return getTokenColor('icon.primary', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A);
    }};
  }
`;

const AiTextField = ({
  value: controlledValue,
  placeholder = 'Ask a question...',
  hasAttachment = false,
  state: manualState,
  onChange,
  onSend,
  onAttachment,
  isDarkMode = false,
  disabled = false,
  theme,
  className,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const inputElementRef = useRef(null);
  const textFieldWrapperRef = useRef(null);
  
  // Support both controlled and uncontrolled modes
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;
  const hasValue = currentValue && currentValue.trim() !== '';
  
  // Determine the visual state
  const getVisualState = () => {
    // Manual state override takes precedence
    if (manualState) return manualState;
    
    if (disabled) return AI_TEXT_FIELD_STATES.DISABLED;
    if (hasValue) return AI_TEXT_FIELD_STATES.TEXT_ENTERED;
    if (isFocused) return AI_TEXT_FIELD_STATES.FOCUS;
    if (isHovered) return AI_TEXT_FIELD_STATES.HOVER;
    return AI_TEXT_FIELD_STATES.REST;
  };
  
  const visualState = getVisualState();
  const textFieldTheme = theme || (isDarkMode ? TEXTFIELD_THEMES.DARK : TEXTFIELD_THEMES.LIGHT);
  
  // Map AI states to TextField states
  const getTextFieldState = () => {
    if (manualState === AI_TEXT_FIELD_STATES.DISABLED || disabled) {
      return TEXTFIELD_STATES.DISABLED;
    }
    if (isFocused) {
      return TEXTFIELD_STATES.FOCUSED;
    }
    return undefined; // Let TextField handle default/hover states
  };
  
  useEffect(() => {
    if (!isControlled) {
      setInternalValue(controlledValue || '');
    }
  }, [controlledValue, isControlled]);
  
  const handleChange = (newValue) => {
    if (disabled) return;
    
    if (!isControlled) {
      setInternalValue(newValue);
    }
    
    if (onChange) {
      // Create a synthetic event-like object for compatibility
      const syntheticEvent = {
        target: { value: newValue },
        preventDefault: () => {},
        stopPropagation: () => {}
      };
      onChange(syntheticEvent, newValue);
    }
  };
  
  // Use effect to detect focus via ref - check periodically for input element
  useEffect(() => {
    const checkForInput = () => {
      if (textFieldWrapperRef.current) {
        const inputElement = textFieldWrapperRef.current.querySelector('input');
        if (inputElement && inputElement !== inputElementRef.current) {
          inputElementRef.current = inputElement;
          
          const handleFocus = () => {
            if (!disabled) {
              setIsFocused(true);
            }
          };
          
          const handleBlur = () => {
            setIsFocused(false);
          };
          
          inputElement.addEventListener('focus', handleFocus);
          inputElement.addEventListener('blur', handleBlur);
          
          // Store cleanup function on the element
          inputElement._aiTextFieldCleanup = () => {
            inputElement.removeEventListener('focus', handleFocus);
            inputElement.removeEventListener('blur', handleBlur);
          };
        }
      }
    };
    
    // Check immediately and after a short delay
    checkForInput();
    const timeoutId = setTimeout(checkForInput, 100);
    
    return () => {
      clearTimeout(timeoutId);
      if (inputElementRef.current && inputElementRef.current._aiTextFieldCleanup) {
        inputElementRef.current._aiTextFieldCleanup();
        delete inputElementRef.current._aiTextFieldCleanup;
      }
    };
  }, [disabled]);
  
  const handleMouseEnter = () => {
    if (!disabled) {
      setIsHovered(true);
    }
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  const handleSend = () => {
    if (!disabled && hasValue && onSend) {
      onSend(currentValue);
      if (!isControlled) {
        setInternalValue('');
      }
    }
  };
  
  // Handle Enter key via wrapper
  useEffect(() => {
    const inputElement = inputElementRef.current;
    if (!inputElement) return;
    
    const handleKeyPress = (e) => {
      if (e.key === 'Enter' && !e.shiftKey && !disabled && hasValue) {
        e.preventDefault();
        if (onSend) {
          onSend(currentValue);
          if (!isControlled) {
            setInternalValue('');
          }
        }
      }
    };
    
    inputElement.addEventListener('keypress', handleKeyPress);
    
    return () => {
      inputElement.removeEventListener('keypress', handleKeyPress);
    };
  }, [hasValue, disabled, currentValue, onSend, isControlled]);
  
  const handleAttachmentClick = () => {
    if (!disabled && onAttachment) {
      onAttachment();
    }
  };
  
  return (
    <StyledContainer
      ref={containerRef}
      className={className}
      isDarkMode={isDarkMode}
      $state={visualState}
      $isFocused={isFocused && !disabled}
      $disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <TextFieldWrapper ref={textFieldWrapperRef} isDarkMode={isDarkMode}>
        <TextField
          value={currentValue}
          placeholder={placeholder}
          onChange={handleChange}
          disabled={disabled}
          theme={textFieldTheme}
          state={getTextFieldState()}
          style={{
            width: '100%'
          }}
          aria-label="AI chat input"
        />
      </TextFieldWrapper>
      {hasAttachment && (
        <StyledIconButton
          isDarkMode={isDarkMode}
          $disabled={disabled}
          onClick={handleAttachmentClick}
          disabled={disabled}
          aria-label="Attach file"
        >
          <AttachFileIcon />
        </StyledIconButton>
      )}
      <StyledIconButton
        isDarkMode={isDarkMode}
        $disabled={disabled || !hasValue}
        $isSendIcon={true}
        $hasText={hasValue}
        onClick={handleSend}
        disabled={disabled || !hasValue}
        aria-label="Send message"
      >
        <SendIcon />
      </StyledIconButton>
    </StyledContainer>
  );
};

AiTextField.propTypes = {
  /** Input value (controlled mode) */
  value: PropTypes.string,
  /** Placeholder text */
  placeholder: PropTypes.string,
  /** Whether to show attachment icon */
  hasAttachment: PropTypes.bool,
  /** Manual state override ('rest', 'hover', 'focus', 'text entered', 'disabled') */
  state: PropTypes.oneOf(['rest', 'hover', 'focus', 'text entered', 'disabled']),
  /** Input change handler. Receives (event, newValue) */
  onChange: PropTypes.func,
  /** Send button click handler. Receives the input value */
  onSend: PropTypes.func,
  /** Attachment button click handler */
  onAttachment: PropTypes.func,
  /** Whether to use dark mode styles */
  isDarkMode: PropTypes.bool,
  /** Theme for TextField ('light.a' or 'dark.a') */
  theme: PropTypes.string,
  /** Whether the input is disabled */
  disabled: PropTypes.bool,
  /** Additional CSS class name */
  className: PropTypes.string,
};

export { AI_TEXT_FIELD_STATES };
export default AiTextField;
