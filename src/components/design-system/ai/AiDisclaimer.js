import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getTokenColor, THEMES } from '../../../tokens/colorTokens';

const StyledContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  max-width: 371px;
  text-align: center;
`;

const StyledText = styled.p`
  font-family: 'Segoe UI', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  margin: 0;
  color: ${props => 
    getTokenColor('reference.helper', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
  
  a {
    color: ${props => 
      getTokenColor('reference.hyperlink', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const AiDisclaimer = ({
  text = 'AI disclaimer information goes here with links and resources available.',
  isDarkMode = false,
  className,
  ...props
}) => {
  // Parse text and convert links to anchor tags if needed
  const renderText = () => {
    // If text contains HTML-like content, render as dangerouslySetInnerHTML
    // Otherwise, try to detect links and convert them
    if (typeof text === 'string' && text.includes('<')) {
      return <StyledText isDarkMode={isDarkMode} dangerouslySetInnerHTML={{ __html: text }} />;
    }
    
    // Simple link detection - look for "links" word and wrap in anchor
    const parts = text.split(/(links)/i);
    return (
      <StyledText isDarkMode={isDarkMode}>
        {parts.map((part, index) => 
          part.toLowerCase() === 'links' ? (
            <a key={index} href="#" onClick={(e) => e.preventDefault()}>
              {part}
            </a>
          ) : (
            part
          )
        )}
      </StyledText>
    );
  };

  return (
    <StyledContainer className={className} {...props}>
      {renderText()}
    </StyledContainer>
  );
};

AiDisclaimer.propTypes = {
  /** Disclaimer text. Supports HTML or plain text. Links will be automatically styled. */
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** Whether to use dark mode styles */
  isDarkMode: PropTypes.bool,
  /** Additional CSS class name */
  className: PropTypes.string,
};

export default AiDisclaimer;




