import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SyncIcon from '@mui/icons-material/Sync';
import SyncProblemOutlinedIcon from '@mui/icons-material/SyncProblemOutlined';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { getTokenColor, THEMES } from '../../../tokens/colorTokens';

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
    getTokenColor('border.weak', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
  border-radius: 4px;
  background-color: ${props => 
    getTokenColor('surface.card', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
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
  padding: 0;
  outline: none;
  transition: background-color 0.2s ease, color 0.2s ease;
  
  /* Focus ring - only visible on keyboard navigation (tab), not on mouse click */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 32px;
    height: 24px;
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
      getTokenColor('reference.secondaryWeak', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
    
    svg {
      color: ${props => 
        getTokenColor('icon.primary', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
    }
  }
  
  &:active {
    background-color: ${props => 
      getTokenColor('surface.iconButtonSecondaryPress', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
    
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

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  width: 32px;
  height: 24px;
  border: none;
  background-color: ${props => {
    const theme = props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A;
    return props.$disabled
      ? getTokenColor('reference.surfaceDisabled', theme)
      : getTokenColor('surface.card', theme);
  }};
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  padding: 6px 8px;
  overflow: clip;
  outline: none;
  transition: background-color 0.2s ease, color 0.2s ease;
  
  /* Border-radius based on position */
  ${props => {
    if (props.$isFirst) {
      return `
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      `;
    } else if (props.$isLast) {
      return `
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      `;
    } else {
      return `
        border-radius: 0;
      `;
    }
  }}
  
  /* Focus ring - only visible on keyboard navigation (tab), not on mouse click */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 32px;
    height: 24px;
    border: 1.5px solid ${props => 
      getTokenColor('border.focus', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease-in-out;
    ${props => {
      if (props.$isFirst) {
        return `
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        `;
      } else if (props.$isLast) {
        return `
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
        `;
      } else {
        return `
          border-radius: 0;
        `;
      }
    }}
  }
  
  &:focus-visible::before {
    opacity: 1;
  }
  
  &:hover:not(:disabled) {
    background-color: ${props => 
      getTokenColor('reference.secondaryWeak', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
    
    svg {
      color: ${props => 
        getTokenColor('icon.primary', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
    }
  }
  
  &:active:not(:disabled) {
    background-color: ${props => 
      getTokenColor('surface.iconButtonSecondaryPress', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
    
    svg {
      color: ${props => 
        getTokenColor('icon.primary', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
    }
  }
  
  svg {
    width: 16px;
    height: 16px;
    color: ${props => {
      const theme = props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A;
      return props.$disabled
        ? getTokenColor('surface.disabled', theme)
        : getTokenColor('icon.primary', theme);
    }};
    transition: color 0.2s ease;
  }
`;

const StyledPaginationButton = styled(StyledButton)`
  border-left: 1px solid ${props => 
    getTokenColor('border.weak', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
`;

const StyledCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 24px;
  padding: 6px 8px;
  border-left: 1px solid ${props => 
    getTokenColor('border.weak', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
  background-color: ${props => 
    getTokenColor('surface.card', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
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
    getTokenColor('text.primary', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
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
          <SyncIcon fontSize="small" />
        </StyledRestButtonInner>
      </StyledRestButton>
    );
  }

  return (
    <StyledContainer isDarkMode={isDarkMode} className={className} {...props}>
      <StyledButton
        isDarkMode={isDarkMode}
        $disabled={isMaxState}
        $isFirst={true}
        disabled={isMaxState}
        onClick={handleRegenerate}
        aria-label={isMaxState ? "Regenerate (max reached)" : "Regenerate"}
        aria-disabled={isMaxState}
      >
        {isMaxState ? <SyncProblemOutlinedIcon fontSize="small" /> : <SyncIcon fontSize="small" />}
      </StyledButton>
      <StyledPaginationButton
        isDarkMode={isDarkMode}
        $disabled={!canGoPrevious}
        disabled={!canGoPrevious}
        onClick={handlePrevious}
        aria-label="Previous regeneration"
        aria-disabled={!canGoPrevious}
      >
        <ChevronLeftIcon fontSize="small" />
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
        $isLast={true}
        disabled={!canGoNext}
        onClick={handleNext}
        aria-label="Next regeneration"
        aria-disabled={!canGoNext}
      >
        <ChevronRightIcon fontSize="small" />
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

