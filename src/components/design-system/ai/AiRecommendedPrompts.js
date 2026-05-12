import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getTokenColor, THEMES } from '../../../tokens/colorTokens';

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
  justify-content: center;
  max-width: 800px;
`;

const StyledPromptButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
  height: 62px;
  padding: 15px 16px;
  border: 1.5px solid #ad1a98;
  border-radius: 4px;
  background-color: ${props => 
    getTokenColor('surface.card', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  outline: none;
  transition: background-color 0.2s ease;
  position: relative;
  max-width: 192px;
  min-width: 160px;
  
  /* Focus ring */
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    box-sizing: border-box;
    border: 1.5px solid ${props => 
      getTokenColor('border.focus', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
    border-radius: 4px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease-in-out;
  }
  
  &:focus-visible::before {
    opacity: 1;
  }
  
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
    cursor: not-allowed;
  }
`;

const StyledPromptText = styled.p`
  font-family: 'Segoe UI', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  margin: 0;
  color: ${props => 
    getTokenColor('text.secondary', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
  text-align: left;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

const AiRecommendedPrompts = ({
  prompts = [],
  onPromptClick,
  isDarkMode = false,
  disabled = false,
  className,
  ...props
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handlePromptClick = (prompt, index) => {
    if (!disabled && onPromptClick) {
      onPromptClick(prompt, index);
    }
  };

  if (!prompts || prompts.length === 0) {
    return null;
  }

  return (
    <StyledContainer className={className} {...props}>
      {prompts.map((prompt, index) => (
        <StyledPromptButton
          key={index}
          isDarkMode={isDarkMode}
          $disabled={disabled}
          onClick={() => handlePromptClick(prompt, index)}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          disabled={disabled}
          aria-label={`Suggested prompt: ${prompt}`}
        >
          <StyledPromptText isDarkMode={isDarkMode}>
            {prompt}
          </StyledPromptText>
        </StyledPromptButton>
      ))}
    </StyledContainer>
  );
};

AiRecommendedPrompts.propTypes = {
  /** Array of prompt text strings */
  prompts: PropTypes.arrayOf(PropTypes.string),
  /** Callback when prompt is clicked. Receives (prompt, index) */
  onPromptClick: PropTypes.func,
  /** Whether to use dark mode styles */
  isDarkMode: PropTypes.bool,
  /** Whether all prompts are disabled */
  disabled: PropTypes.bool,
  /** Additional CSS class name */
  className: PropTypes.string,
};

export default AiRecommendedPrompts;




