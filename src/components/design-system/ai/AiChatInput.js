import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getTokenColor, THEMES } from '../../../tokens/colorTokens';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 56px;
  padding: 8px 12px 8px 16px;
  background-color: ${props => 
    getTokenColor('textField.surface.input', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
  border: 1px solid ${props => 
    getTokenColor('textField.border.input', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
  border-radius: 4px;
  box-sizing: border-box;
  position: relative;
  transition: border-color 0.2s ease, background-color 0.2s ease;
  
  &:focus-within {
    border-color: ${props => 
      getTokenColor('textField.border.focus', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
    background-color: ${props => 
      getTokenColor('textField.surface.inputFocus', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
  }
  
  &:hover:not(:focus-within) {
    background-color: ${props => 
      getTokenColor('textField.surface.inputHover', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
  }
  
  ${props => props.$disabled && `
    background-color: ${getTokenColor('textField.surface.disabled', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
    border-color: ${getTokenColor('textField.border.disabled', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
    cursor: not-allowed;
    opacity: 0.6;
  `}
`;

const StyledInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-family: 'Segoe UI', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${props => 
    getTokenColor('text.primary', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
  
  &::placeholder {
    color: ${props => 
      getTokenColor('reference.helper', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
  }
  
  &:disabled {
    cursor: not-allowed;
    color: ${props => 
      getTokenColor('textField.text.disabled', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
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
    color: ${props => 
      getTokenColor('icon.primary', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
  }
`;

const AiChatInput = ({
  value = '',
  placeholder = 'Ask a question...',
  hasAttachment = false,
  onChange,
  onSend,
  onAttachment,
  isDarkMode = false,
  disabled = false,
  className,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(e, newValue);
    }
  };

  const handleSend = () => {
    if (!disabled && inputValue.trim() && onSend) {
      onSend(inputValue);
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleAttachmentClick = () => {
    if (!disabled && onAttachment) {
      onAttachment();
    }
  };

  return (
    <StyledContainer 
      isDarkMode={isDarkMode} 
      $disabled={disabled}
      className={className}
      {...props}
    >
      <StyledInput
        type="text"
        value={inputValue}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        isDarkMode={isDarkMode}
        disabled={disabled}
        aria-label="Chat input"
      />
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
        $disabled={disabled || !inputValue.trim()}
        onClick={handleSend}
        disabled={disabled || !inputValue.trim()}
        aria-label="Send message"
      >
        <SendIcon />
      </StyledIconButton>
    </StyledContainer>
  );
};

AiChatInput.propTypes = {
  /** Input value */
  value: PropTypes.string,
  /** Placeholder text */
  placeholder: PropTypes.string,
  /** Whether to show attachment icon */
  hasAttachment: PropTypes.bool,
  /** Input change handler. Receives (event, newValue) */
  onChange: PropTypes.func,
  /** Send button click handler. Receives the input value */
  onSend: PropTypes.func,
  /** Attachment button click handler */
  onAttachment: PropTypes.func,
  /** Whether to use dark mode styles */
  isDarkMode: PropTypes.bool,
  /** Whether the input is disabled */
  disabled: PropTypes.bool,
  /** Additional CSS class name */
  className: PropTypes.string,
};

export default AiChatInput;




