import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import UserChatBubble from './UserChatBubble.js';
import Tooltip, { TOOLTIP_POSITIONS } from '../Tooltip.js';
import { getTokenColor, THEMES } from '../../../tokens/colorTokens';
import StarIcon from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const StyledRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
  justify-content: flex-end;
`;

const StyledBubbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-end;
  max-width: 480px;
`;

const StyledActionsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  max-width: 480px;
  gap: 16px;
`;

const StyledTimestamp = styled.p`
  font-family: 'Segoe UI', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: ${props => 
    getTokenColor('reference.helper', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
  margin: 0;
  white-space: nowrap;
`;

const StyledFavoriteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  width: 32px;
  height: 24px;
  border: 1px solid ${props => 
    getTokenColor('border.weak', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
  border-radius: 4px;
  background-color: ${props => 
    getTokenColor('surface.card', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
  cursor: pointer;
  padding: 6px 8px;
  overflow: visible;
  outline: none;
  transition: background-color 0.2s ease, color 0.2s ease;
  
  /* Focus ring - only visible on keyboard navigation (tab), not on mouse click */
  &::before {
    content: '';
    position: absolute;
    inset: -1px;
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
  
  &:hover {
    background-color: ${props => 
      getTokenColor('surface.itemHover', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
    
    svg {
      color: ${props => 
        getTokenColor('icon.primary', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
    }
  }
  
  &:active {
    background-color: ${props => 
      getTokenColor('surface.itemSelected', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
    
    svg {
      color: ${props => 
        getTokenColor('icon.primary', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
    }
  }
  
  svg {
    width: 16px;
    height: 16px;
    color: ${props => 
      getTokenColor('icon.primary', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
    transition: color 0.2s ease;
  }
`;

// Format timestamp in user-friendly format (same as AiResponse)
const formatTimestamp = (date) => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const messageDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  
  let dateLabel;
  if (messageDate.getTime() === today.getTime()) {
    dateLabel = 'Today';
  } else if (messageDate.getTime() === yesterday.getTime()) {
    dateLabel = 'Yesterday';
  } else {
    // Format as "MM/DD/YYYY" or use locale-specific format
    dateLabel = date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    });
  }
  
  const timeString = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
  
  return `${dateLabel}, ${timeString}`;
};

const UserResponse = ({
  text = '',
  time,
  isDarkMode = false,
  className,
  onFavorite,
  isFavorited: controlledIsFavorited,
  ...props
}) => {
  const [internalIsFavorited, setInternalIsFavorited] = useState(false);
  const [currentTimestamp, setCurrentTimestamp] = useState(null);
  
  // Support both controlled and uncontrolled modes for favorite state
  const isFavoritedControlled = controlledIsFavorited !== undefined;
  const isFavorited = isFavoritedControlled ? controlledIsFavorited : internalIsFavorited;
  
  // Generate timestamp from user's local machine time when time prop is not provided
  useEffect(() => {
    if (time === undefined) {
      const updateTimestamp = () => {
        const now = new Date();
        setCurrentTimestamp(formatTimestamp(now));
      };
      
      // Update immediately
      updateTimestamp();
      
      // Update every minute to keep time current
      const interval = setInterval(updateTimestamp, 60000);
      
      return () => clearInterval(interval);
    } else {
      // Clear generated timestamp if time prop is provided
      setCurrentTimestamp(null);
    }
  }, [time]);

  const handleFavoriteClick = () => {
    // Toggle internal state if uncontrolled
    if (!isFavoritedControlled) {
      setInternalIsFavorited(prev => !prev);
    }
    
    // Call parent's onFavorite callback with new state
    if (onFavorite) {
      const newFavoritedState = !isFavorited;
      onFavorite(newFavoritedState);
    }
  };

  return (
    <StyledContainer className={className} {...props}>
      <StyledRow>
        <StyledBubbleContainer>
          <UserChatBubble text={text} isDarkMode={isDarkMode} />
          <StyledActionsRow>
            <StyledTimestamp isDarkMode={isDarkMode}>
              {time !== undefined ? time : currentTimestamp || 'Today, 12:00 PM'}
            </StyledTimestamp>
            <Tooltip
              content={isFavorited ? "Remove favorite" : "Add favorite"}
              position={TOOLTIP_POSITIONS.TOP}
              isDarkMode={isDarkMode}
            >
              <StyledFavoriteButton
                isDarkMode={isDarkMode}
                onClick={handleFavoriteClick}
                aria-label={isFavorited ? "Remove favorite" : "Add favorite"}
                aria-pressed={isFavorited}
              >
                {isFavorited ? (
                  <StarIcon sx={{ fontSize: '16px' }} />
                ) : (
                  <StarBorderOutlinedIcon sx={{ fontSize: '16px' }} />
                )}
              </StyledFavoriteButton>
            </Tooltip>
          </StyledActionsRow>
        </StyledBubbleContainer>
      </StyledRow>
    </StyledContainer>
  );
};

UserResponse.propTypes = {
  /** The text content of the response */
  text: PropTypes.string,
  /** Timestamp to display. If not provided, will automatically generate from user's local machine time */
  time: PropTypes.string,
  /** Whether to use dark mode styles */
  isDarkMode: PropTypes.bool,
  /** Additional CSS class name */
  className: PropTypes.string,
  /** Callback when favorite button is clicked. Receives the new favorited state (boolean) */
  onFavorite: PropTypes.func,
  /** Whether the message is favorited (controlled mode). If not provided, component manages its own state (uncontrolled mode) */
  isFavorited: PropTypes.bool,
};

export default UserResponse;




