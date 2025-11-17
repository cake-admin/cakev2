import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import cakeColorTokens from '../../../tokens/cake-color-tokens.json';

const StyledBubble = styled.div`
  background-color: ${props => 
    props.isDarkMode 
      ? cakeColorTokens.referencePrimaryWeaker.darkA 
      : cakeColorTokens.referencePrimaryWeaker.lightA};
  border: 1px solid ${props => 
    props.isDarkMode 
      ? cakeColorTokens.borderWeak.darkA 
      : cakeColorTokens.borderWeak.lightA};
  border-radius: 4px 4px 0 4px;
  padding: 16px;
  max-width: 480px;
  font-family: 'Segoe UI', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${props => 
    props.isDarkMode 
      ? cakeColorTokens.textPrimary.darkA 
      : cakeColorTokens.textPrimary.lightA};
  word-wrap: break-word;
`;

const UserChatBubble = ({
  text = '',
  isDarkMode = false,
  className,
  ...props
}) => {
  return (
    <StyledBubble
      isDarkMode={isDarkMode}
      className={className}
      role="article"
      aria-label="User message"
      {...props}
    >
      {text}
    </StyledBubble>
  );
};

UserChatBubble.propTypes = {
  /** The text content of the chat bubble */
  text: PropTypes.string,
  /** Whether to use dark mode styles */
  isDarkMode: PropTypes.bool,
  /** Additional CSS class name */
  className: PropTypes.string,
};

export default UserChatBubble;

