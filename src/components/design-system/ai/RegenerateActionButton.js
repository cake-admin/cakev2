import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SyncIcon from '@mui/icons-material/Sync';
import SyncProblemOutlinedIcon from '@mui/icons-material/SyncProblemOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import cakeColorTokens from '../../../tokens/cake-color-tokens.json';

const REGENERATE_STATES = {
  REST: 'rest',
  REGENERATION: 'regeneration',
  MAX: 'max'
};

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
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
  overflow: clip;
`;

const StyledRestButtonInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 32px;
  height: 24px;
  padding: 6px 8px;
  overflow: clip;
  border-radius: inherit;
`;

const StyledRestButton = styled.button`
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
  padding: 0;
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

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  width: 32px;
  height: 24px;
  border: none;
  border-radius: 0;
  background-color: ${props => 
    props.$disabled
      ? (props.isDarkMode 
          ? cakeColorTokens.referenceSurfaceDisabled.darkA 
          : cakeColorTokens.referenceSurfaceDisabled.lightA)
      : (props.isDarkMode 
          ? cakeColorTokens.surfaceCard.darkA 
          : cakeColorTokens.surfaceCard.lightA)};
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  padding: 6px 8px;
  overflow: clip;
  transition: background-color 0.2s ease, color 0.2s ease;
  
  &:hover:not(:disabled) {
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
  
  &:active:not(:disabled) {
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
      props.$disabled
        ? (props.isDarkMode 
            ? cakeColorTokens.surfaceDisabled.darkA 
            : cakeColorTokens.surfaceDisabled.lightA)
        : (props.isDarkMode 
            ? cakeColorTokens.iconIconButtonSecondary.darkA 
            : cakeColorTokens.iconIconButtonSecondary.lightA)};
    transition: color 0.2s ease;
  }
`;

const StyledPaginationButton = styled(StyledButton)`
  border-left: 1px solid ${props => 
    props.isDarkMode 
      ? cakeColorTokens.borderWeak.darkA 
      : cakeColorTokens.borderWeak.lightA};
`;

const StyledCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 24px;
  padding: 6px 8px;
  border-left: 1px solid ${props => 
    props.isDarkMode 
      ? cakeColorTokens.borderWeak.darkA 
      : cakeColorTokens.borderWeak.lightA};
  background-color: ${props => 
    props.isDarkMode 
      ? cakeColorTokens.surfaceCard.darkA 
      : cakeColorTokens.surfaceCard.lightA};
`;

const StyledCounterInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 32px;
  padding: 0 6px;
`;

const StyledCounterText = styled.p`
  font-family: 'Segoe UI', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: ${props => 
    props.isDarkMode 
      ? cakeColorTokens.textPrimary.darkA 
      : cakeColorTokens.textPrimary.lightA};
  margin: 0;
  text-align: center;
  flex: 1 1 0;
  min-width: 0;
  min-height: 1px;
`;

const RegenerateActionButton = ({
  state = REGENERATE_STATES.REST,
  currentIndex = 1,
  totalCount = 1,
  isDarkMode = false,
  onRegenerate,
  onPrevious,
  onNext,
  className,
  ...props
}) => {
  const isRestState = state === REGENERATE_STATES.REST;
  const isMaxState = state === REGENERATE_STATES.MAX;
  const canGoPrevious = currentIndex > 1;
  const canGoNext = currentIndex < totalCount;

  const handleRegenerate = (e) => {
    if (!isMaxState && onRegenerate) {
      onRegenerate(e);
    }
  };

  const handlePrevious = (e) => {
    if (canGoPrevious && onPrevious) {
      onPrevious(e);
    }
  };

  const handleNext = (e) => {
    if (canGoNext && onNext) {
      onNext(e);
    }
  };

  if (isRestState) {
    return (
      <StyledRestButton
        isDarkMode={isDarkMode}
        onClick={handleRegenerate}
        aria-label="Regenerate"
        className={className}
        {...props}
      >
        <StyledRestButtonInner>
          <SyncIcon />
        </StyledRestButtonInner>
      </StyledRestButton>
    );
  }

  return (
    <StyledContainer isDarkMode={isDarkMode} className={className} {...props}>
      <StyledButton
        isDarkMode={isDarkMode}
        $disabled={isMaxState}
        disabled={isMaxState}
        onClick={handleRegenerate}
        aria-label={isMaxState ? "Regenerate (max reached)" : "Regenerate"}
        aria-disabled={isMaxState}
      >
        {isMaxState ? <SyncProblemOutlinedIcon /> : <SyncIcon />}
      </StyledButton>
      <StyledPaginationButton
        isDarkMode={isDarkMode}
        $disabled={!canGoPrevious}
        disabled={!canGoPrevious}
        onClick={handlePrevious}
        aria-label="Previous regeneration"
        aria-disabled={!canGoPrevious}
      >
        <ChevronLeftIcon />
      </StyledPaginationButton>
      <StyledCounter isDarkMode={isDarkMode}>
        <StyledCounterInner>
          <StyledCounterText isDarkMode={isDarkMode}>
            {currentIndex}/{totalCount}
          </StyledCounterText>
        </StyledCounterInner>
      </StyledCounter>
      <StyledPaginationButton
        isDarkMode={isDarkMode}
        $disabled={!canGoNext}
        disabled={!canGoNext}
        onClick={handleNext}
        aria-label="Next regeneration"
        aria-disabled={!canGoNext}
      >
        <ChevronRightIcon />
      </StyledPaginationButton>
    </StyledContainer>
  );
};

RegenerateActionButton.propTypes = {
  /** The state of the regenerate button: 'rest', 'regeneration', or 'max' */
  state: PropTypes.oneOf(['rest', 'regeneration', 'max']),
  /** Current regeneration index (1-based) */
  currentIndex: PropTypes.number,
  /** Total number of regenerations available */
  totalCount: PropTypes.number,
  /** Whether to use dark mode styles */
  isDarkMode: PropTypes.bool,
  /** Callback when regenerate button is clicked */
  onRegenerate: PropTypes.func,
  /** Callback when previous button is clicked */
  onPrevious: PropTypes.func,
  /** Callback when next button is clicked */
  onNext: PropTypes.func,
  /** Additional CSS class name */
  className: PropTypes.string,
};

RegenerateActionButton.REGENERATE_STATES = REGENERATE_STATES;

export default RegenerateActionButton;

