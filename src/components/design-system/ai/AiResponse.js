import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MotoAiAvatar from './MotoAiAvatar.js';
import AiChatBubble from './AiChatBubble.js';
import Tooltip, { TOOLTIP_POSITIONS } from '../Tooltip.js';
import RegenerateActionButton from './RegenerateActionButton.js';
import Pin, { PIN_THEMES } from '../Pin.js';
import Menu from '../Menu.tsx';
import cakeColorTokens from '../../../tokens/cake-color-tokens.json';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
`;

const StyledBubbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  max-width: 480px;
`;

const StyledActionsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 480px;
`;

const StyledTimestamp = styled.p`
  font-family: 'Segoe UI', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: ${props => 
    props.isDarkMode 
      ? cakeColorTokens.referenceHelper.darkA 
      : cakeColorTokens.referenceHelper.lightA};
  margin: 0;
  white-space: nowrap;
`;

const StyledActionsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: flex-end;
  width: 240px;
`;

const StyledActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  width: 32px;
  height: 24px;
  border: 1px solid ${props => 
    props.isDarkMode 
      ? cakeColorTokens.borderWeak.darkA 
      : cakeColorTokens.borderWeak.lightA};
  border-radius: 4px;
  background-color: ${props => 
    props.isDarkMode 
      ? cakeColorTokens.surfaceCard.darkA 
      : cakeColorTokens.surfaceCard.lightA};
  cursor: pointer;
  padding: 6px 8px;
  overflow: hidden;
  transition: background-color 0.2s ease, color 0.2s ease;
  
  &:hover {
    background-color: ${props => 
      props.isDarkMode 
        ? cakeColorTokens.surfaceIconButtonSecondaryHover.darkA 
        : cakeColorTokens.surfaceIconButtonSecondaryHover.lightA};
    
    svg {
      color: ${props => 
        props.isDarkMode 
          ? cakeColorTokens.iconIconButtonSecondaryHover.darkA 
          : cakeColorTokens.iconIconButtonSecondaryHover.lightA};
    }
  }
  
  &:active {
    background-color: ${props => 
      props.isDarkMode 
        ? cakeColorTokens.surfaceIconButtonSecondaryPress.darkA 
        : cakeColorTokens.surfaceIconButtonSecondaryPress.lightA};
    
    svg {
      color: ${props => 
        props.isDarkMode 
          ? cakeColorTokens.iconIconButtonSecondaryPressed.darkA 
          : cakeColorTokens.iconIconButtonSecondaryPressed.lightA};
    }
  }
  
  svg {
    width: 16px;
    height: 16px;
    color: ${props => 
      props.isDarkMode 
        ? cakeColorTokens.iconIconButtonSecondary.darkA 
        : cakeColorTokens.iconIconButtonSecondary.lightA};
    transition: color 0.2s ease;
  }
`;

const StyledFeedbackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  height: 24px;
  width: 32px;
  border: none;
  background-color: ${props => 
    props.isDarkMode 
      ? cakeColorTokens.surfaceCard.darkA 
      : cakeColorTokens.surfaceCard.lightA};
  cursor: pointer;
  padding: 6px 8px;
  overflow: hidden;
  transition: background-color 0.2s ease, color 0.2s ease;
  
  &:hover {
    background-color: ${props => 
      props.isDarkMode 
        ? cakeColorTokens.surfaceItemHover.darkA 
        : cakeColorTokens.surfaceItemHover.lightA};
  }
  
  &:active {
    background-color: ${props => 
      props.isDarkMode 
        ? cakeColorTokens.surfaceItemSelected.darkA 
        : cakeColorTokens.surfaceItemSelected.lightA};
  }
  
  svg {
    width: 16px;
    height: 16px;
    color: ${props => 
      props.isDarkMode 
        ? cakeColorTokens.iconPrimary.darkA 
        : cakeColorTokens.iconPrimary.lightA};
    transition: color 0.2s ease;
  }
  
  ${props => {
    const borderColor = props.isDarkMode 
      ? cakeColorTokens.borderWeak.darkA 
      : cakeColorTokens.borderWeak.lightA;
    
    if (props.$isThumbsUp) {
      return `
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        border-right: ${props.$showRightBorder ? `1px solid ${borderColor}` : 'none'};
      `;
    } else {
      return `
        border-top-right-radius: ${props.$showRightBorder ? '0' : '4px'};
        border-bottom-right-radius: ${props.$showRightBorder ? '0' : '4px'};
        border-right: ${props.$showRightBorder ? `1px solid ${borderColor}` : 'none'};
      `;
    }
  }}
`;

const StyledGiveFeedbackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 24px;
  padding: 6px 12px;
  border: none;
  background-color: ${props => 
    props.$disabled
      ? (props.isDarkMode 
          ? cakeColorTokens.referenceSurfaceDisabled.darkA 
          : cakeColorTokens.referenceSurfaceDisabled.lightA)
      : (props.isDarkMode 
          ? cakeColorTokens.surfaceCard.darkA 
          : cakeColorTokens.surfaceCard.lightA)};
  color: ${props => 
    props.$disabled
      ? (props.isDarkMode 
          ? cakeColorTokens.surfaceDisabled.darkA 
          : cakeColorTokens.surfaceDisabled.lightA)
      : (props.isDarkMode 
          ? cakeColorTokens.textPrimary.darkA 
          : cakeColorTokens.textPrimary.lightA)};
  font-family: 'Segoe UI', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  transition: background-color 0.2s ease, color 0.2s ease;
  white-space: nowrap;
  
  &:hover:not(:disabled) {
    background-color: ${props => 
      props.isDarkMode 
        ? cakeColorTokens.surfaceItemHover.darkA 
        : cakeColorTokens.surfaceItemHover.lightA};
  }
  
  &:active:not(:disabled) {
    background-color: ${props => 
      props.isDarkMode 
        ? cakeColorTokens.surfaceItemSelected.darkA 
        : cakeColorTokens.surfaceItemSelected.lightA};
  }
`;

const StyledFeedbackDivider = styled.div`
  width: 1px;
  height: 23px;
  background-color: ${props => 
    props.isDarkMode 
      ? cakeColorTokens.borderWeak.darkA 
      : cakeColorTokens.borderWeak.lightA};
  flex-shrink: 0;
`;

const StyledFeedbackContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${props => 
    props.isDarkMode 
      ? cakeColorTokens.borderWeak.darkA 
      : cakeColorTokens.borderWeak.lightA};
  border-radius: 4px;
  background-color: ${props => 
    props.isDarkMode 
      ? cakeColorTokens.surfaceCard.darkA 
      : cakeColorTokens.surfaceCard.lightA};
`;

const OverflowMenuContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const OverflowMenuWrapper = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  z-index: 1000;
`;

// Format timestamp in user-friendly format
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

const AiResponse = ({
  text = '',
  time,
  isDarkMode = false,
  className,
  onFeedbackGood,
  onFeedbackBad,
  onGiveFeedback,
  onRegenerate,
  onPin,
  onOverflow,
  overflowMenuItems = ['Copy', 'Delete', 'Edit', 'Share'],
  onOverflowMenuItemClick,
  regenerateState = 'rest',
  regenerateCurrentIndex = 1,
  regenerateTotalCount = 1,
  onRegeneratePrevious,
  onRegenerateNext,
  isPinned: controlledIsPinned,
  ...props
}) => {
  const [feedbackState, setFeedbackState] = useState(null); // null, 'good', or 'bad'
  const [feedbackProvided, setFeedbackProvided] = useState(false);
  const [internalIsPinned, setInternalIsPinned] = useState(false);
  const [currentTimestamp, setCurrentTimestamp] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const overflowButtonRef = useRef(null);
  const menuRef = useRef(null);
  
  // Support both controlled and uncontrolled modes for pin state
  const isPinnedControlled = controlledIsPinned !== undefined;
  const isPinned = isPinnedControlled ? controlledIsPinned : internalIsPinned;
  
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

  const handleFeedbackGood = () => {
    const newState = feedbackState === 'good' ? null : 'good';
    setFeedbackState(newState);
    if (onFeedbackGood) {
      onFeedbackGood(newState === 'good');
    }
  };

  const handleFeedbackBad = () => {
    const newState = feedbackState === 'bad' ? null : 'bad';
    setFeedbackState(newState);
    if (onFeedbackBad) {
      onFeedbackBad(newState === 'bad');
    }
  };

  const handleGiveFeedback = () => {
    if (!feedbackProvided && feedbackState === 'bad') {
      setFeedbackProvided(true);
      if (onGiveFeedback) {
        onGiveFeedback();
      }
    }
  };

  const handlePinClick = () => {
    // Toggle internal state if uncontrolled
    if (!isPinnedControlled) {
      setInternalIsPinned(prev => !prev);
    }
    
    // Call parent's onPin callback with new state
    if (onPin) {
      const newPinnedState = !isPinned;
      onPin(newPinnedState);
    }
  };

  const handleOverflowClick = () => {
    setIsMenuOpen(prev => !prev);
    // Call legacy onOverflow callback if provided for backward compatibility
    if (onOverflow) {
      onOverflow();
    }
  };

  const handleMenuItemClick = useCallback((item) => {
    setIsMenuOpen(false);
    if (onOverflowMenuItemClick) {
      onOverflowMenuItemClick(item);
    }
  }, [onOverflowMenuItemClick]);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        overflowButtonRef.current &&
        !overflowButtonRef.current.contains(event.target) &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <StyledContainer className={className} {...props}>
      <StyledRow>
        <MotoAiAvatar isDarkMode={isDarkMode} />
        <StyledBubbleContainer>
          <AiChatBubble text={text} isDarkMode={isDarkMode} />
          <StyledActionsRow>
            <StyledTimestamp isDarkMode={isDarkMode}>
              {time !== undefined ? time : currentTimestamp || 'Today, 12:00 PM'}
            </StyledTimestamp>
            <StyledActionsGroup>
              <StyledFeedbackContainer isDarkMode={isDarkMode}>
                <Tooltip
                  content="Good feedback"
                  position={TOOLTIP_POSITIONS.TOP}
                  isDarkMode={isDarkMode}
                >
                  <StyledFeedbackButton
                    isDarkMode={isDarkMode}
                    $isThumbsUp={true}
                    $showRightBorder={feedbackState !== 'bad'}
                    onClick={handleFeedbackGood}
                    aria-label="Thumbs up"
                    aria-pressed={feedbackState === 'good'}
                  >
                    {feedbackState === 'good' ? (
                      <ThumbUpIcon />
                    ) : (
                      <ThumbUpOutlinedIcon />
                    )}
                  </StyledFeedbackButton>
                </Tooltip>
                <Tooltip
                  content="Bad feedback"
                  position={TOOLTIP_POSITIONS.TOP}
                  isDarkMode={isDarkMode}
                >
                  <StyledFeedbackButton
                    isDarkMode={isDarkMode}
                    $isThumbsUp={false}
                    $showRightBorder={feedbackState === 'bad'}
                    onClick={handleFeedbackBad}
                    aria-label="Thumbs down"
                    aria-pressed={feedbackState === 'bad'}
                  >
                    {feedbackState === 'bad' ? (
                      <ThumbDownIcon />
                    ) : (
                      <ThumbDownOutlinedIcon />
                    )}
                  </StyledFeedbackButton>
                </Tooltip>
                {feedbackState === 'bad' && (
                  <>
                    <StyledFeedbackDivider isDarkMode={isDarkMode} />
                    <StyledGiveFeedbackButton
                    isDarkMode={isDarkMode}
                    $disabled={feedbackProvided}
                    disabled={feedbackProvided}
                    onClick={handleGiveFeedback}
                    aria-label="Give feedback"
                  >
                    Give feedback
                  </StyledGiveFeedbackButton>
                  </>
                )}
              </StyledFeedbackContainer>
              <Tooltip
                content={regenerateState === 'max' ? "Regenerate (max reached)" : "Regenerate"}
                position={TOOLTIP_POSITIONS.TOP}
                isDarkMode={isDarkMode}
              >
                <RegenerateActionButton
                  state={regenerateState}
                  currentIndex={regenerateCurrentIndex}
                  totalCount={regenerateTotalCount}
                  isDarkMode={isDarkMode}
                  onRegenerate={onRegenerate}
                  onPrevious={onRegeneratePrevious}
                  onNext={onRegenerateNext}
                />
              </Tooltip>
              <Tooltip
                content={isPinned ? "Unpin" : "Pin"}
                position={TOOLTIP_POSITIONS.TOP}
                isDarkMode={isDarkMode}
              >
                <Pin
                  isPinned={isPinned}
                  theme={isDarkMode ? PIN_THEMES.DARK : PIN_THEMES.LIGHT}
                  onClick={handlePinClick}
                />
              </Tooltip>
              <OverflowMenuContainer>
                <Tooltip
                  content="More options"
                  position={TOOLTIP_POSITIONS.TOP}
                  isDarkMode={isDarkMode}
                >
                  <StyledActionButton
                    ref={overflowButtonRef}
                    isDarkMode={isDarkMode}
                    onClick={handleOverflowClick}
                    aria-label="More options"
                    aria-haspopup="true"
                    aria-expanded={isMenuOpen}
                  >
                    <MoreHorizIcon />
                  </StyledActionButton>
                </Tooltip>
                {isMenuOpen && (
                  <OverflowMenuWrapper ref={menuRef}>
                    <Menu
                      items={overflowMenuItems}
                      theme={isDarkMode ? 'dark.a' : 'light.a'}
                      onItemClick={handleMenuItemClick}
                      width={180}
                    />
                  </OverflowMenuWrapper>
                )}
              </OverflowMenuContainer>
            </StyledActionsGroup>
          </StyledActionsRow>
        </StyledBubbleContainer>
      </StyledRow>
    </StyledContainer>
  );
};

AiResponse.propTypes = {
  /** The text content of the response */
  text: PropTypes.string,
  /** Timestamp to display. If not provided, will automatically generate from user's local machine time */
  time: PropTypes.string,
  /** Whether to use dark mode styles */
  isDarkMode: PropTypes.bool,
  /** Additional CSS class name */
  className: PropTypes.string,
  /** Callback when thumbs up is clicked */
  onFeedbackGood: PropTypes.func,
  /** Callback when thumbs down is clicked */
  onFeedbackBad: PropTypes.func,
  /** Callback when give feedback button is clicked */
  onGiveFeedback: PropTypes.func,
  /** Callback when regenerate button is clicked */
  onRegenerate: PropTypes.func,
  /** Callback when pin button is clicked. Receives the new pinned state (boolean) */
  onPin: PropTypes.func,
  /** Whether the pin is in pinned state (controlled mode). If not provided, component manages its own state (uncontrolled mode) */
  isPinned: PropTypes.bool,
  /** Callback when overflow menu button is clicked (legacy prop, kept for backward compatibility) */
  onOverflow: PropTypes.func,
  /** Array of menu items to display in the overflow menu */
  overflowMenuItems: PropTypes.arrayOf(PropTypes.string),
  /** Callback when a menu item is clicked. Receives the item string as parameter */
  onOverflowMenuItemClick: PropTypes.func,
  /** State of the regenerate button: 'rest', 'regeneration', or 'max' */
  regenerateState: PropTypes.oneOf(['rest', 'regeneration', 'max']),
  /** Current regeneration index (1-based) */
  regenerateCurrentIndex: PropTypes.number,
  /** Total number of regenerations available */
  regenerateTotalCount: PropTypes.number,
  /** Callback when previous regeneration button is clicked */
  onRegeneratePrevious: PropTypes.func,
  /** Callback when next regeneration button is clicked */
  onRegenerateNext: PropTypes.func,
};

export default AiResponse;


