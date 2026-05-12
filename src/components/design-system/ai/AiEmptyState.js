import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import motoAiIcon from '../../../assets/ai/moto_ai.svg';
import motoAiColorIcon from '../../../assets/ai/moto_ai_color.svg';
import { getTokenColor, THEMES } from '../../../tokens/colorTokens';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;
`;

const StyledLogoContainer = styled.div`
  width: 96px;
  height: 96px;
  position: relative;
  overflow: clip;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  text-align: center;
`;

const StyledHeading = styled.p`
  font-family: 'Segoe UI', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  margin: 0;
  color: ${props => 
    getTokenColor('text.primary', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
`;

const StyledSubheading = styled.p`
  font-family: 'Segoe UI', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
  color: ${props => 
    getTokenColor('text.secondary', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
`;

const AiEmptyState = ({
  isDarkMode = false,
  heading = 'Hello, how may I assist you today?',
  subheading = 'Below are some ideas to get you started.',
  className,
  ...props
}) => {
  return (
    <StyledContainer className={className} {...props}>
      <StyledLogoContainer>
        <img 
          src={isDarkMode ? motoAiIcon : motoAiColorIcon} 
          alt="Moto AI" 
        />
      </StyledLogoContainer>
      <StyledTextContainer>
        <StyledHeading isDarkMode={isDarkMode}>
          {heading}
        </StyledHeading>
        <StyledSubheading isDarkMode={isDarkMode}>
          {subheading}
        </StyledSubheading>
      </StyledTextContainer>
    </StyledContainer>
  );
};

AiEmptyState.propTypes = {
  /** Whether to use dark mode styles */
  isDarkMode: PropTypes.bool,
  /** Custom heading text */
  heading: PropTypes.string,
  /** Custom subheading text */
  subheading: PropTypes.string,
  /** Additional CSS class name */
  className: PropTypes.string,
};

export default AiEmptyState;




