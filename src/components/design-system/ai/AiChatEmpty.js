import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AiEmptyState from './AiEmptyState.js';
import AiRecommendedPrompts from './AiRecommendedPrompts.js';
import AiChatInput from './AiChatInput.js';
import AiDisclaimer from './AiDisclaimer.js';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 128px;
  padding: 32px;
  max-width: 640px;
  width: 100%;
  box-sizing: border-box;
`;

const StyledMainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  width: 100%;
`;

const StyledInputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  width: 100%;
`;

const AiChatEmpty = ({
  isDarkMode = false,
  prompts = [],
  onPromptClick,
  onSend,
  onAttachment,
  hasAttachment = false,
  disclaimerText,
  heading,
  subheading,
  inputPlaceholder,
  className,
  ...props
}) => {
  return (
    <StyledContainer className={className} {...props}>
      <StyledMainContent>
        <AiEmptyState
          isDarkMode={isDarkMode}
          heading={heading}
          subheading={subheading}
        />
        {prompts && prompts.length > 0 && (
          <AiRecommendedPrompts
            prompts={prompts}
            onPromptClick={onPromptClick}
            isDarkMode={isDarkMode}
          />
        )}
      </StyledMainContent>
      <StyledInputSection>
        <AiChatInput
          isDarkMode={isDarkMode}
          placeholder={inputPlaceholder}
          hasAttachment={hasAttachment}
          onSend={onSend}
          onAttachment={onAttachment}
        />
        <AiDisclaimer
          isDarkMode={isDarkMode}
          text={disclaimerText}
        />
      </StyledInputSection>
    </StyledContainer>
  );
};

AiChatEmpty.propTypes = {
  /** Whether to use dark mode styles */
  isDarkMode: PropTypes.bool,
  /** Array of prompt text strings to display */
  prompts: PropTypes.arrayOf(PropTypes.string),
  /** Callback when a prompt is clicked. Receives (prompt, index) */
  onPromptClick: PropTypes.func,
  /** Callback when message is sent. Receives the input value */
  onSend: PropTypes.func,
  /** Callback when attachment button is clicked */
  onAttachment: PropTypes.func,
  /** Whether to show attachment icon */
  hasAttachment: PropTypes.bool,
  /** Custom disclaimer text */
  disclaimerText: PropTypes.string,
  /** Custom heading text */
  heading: PropTypes.string,
  /** Custom subheading text */
  subheading: PropTypes.string,
  /** Custom input placeholder */
  inputPlaceholder: PropTypes.string,
  /** Additional CSS class name */
  className: PropTypes.string,
};

export default AiChatEmpty;




