import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { fontStack } from '../../styles/globalStyles';
import { getTokenColor, THEMES } from '../../tokens/colorTokens';
import PropTypes from 'prop-types';

/**
 * Tooltip position options
 */
const TOOLTIP_POSITIONS = {
  TOP: 'top',
  BOTTOM: 'bottom',
  LEFT: 'left',
  RIGHT: 'right'
};

const TooltipWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const TooltipContent = styled.div`
  position: absolute;
  z-index: 1000;
  padding: 8px 12px;
  background-color: ${props => props.isDarkMode 
    ? getTokenColor('text.primary', THEMES.DARK_A)
    : getTokenColor('text.primary', THEMES.LIGHT_A)};
  color: ${props => props.isDarkMode
    ? getTokenColor('background.canvas', THEMES.DARK_A)
    : getTokenColor('background.canvas', THEMES.LIGHT_A)};
  border-radius: 4px;
  font-family: ${fontStack};
  font-size: 0.875rem;
  line-height: 1.4;
  white-space: nowrap;
  pointer-events: none;
  opacity: ${props => props.$visible ? 1 : 0};
  visibility: ${props => props.$visible ? 'visible' : 'hidden'};
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
  /* Position styles */
  ${props => {
    switch (props.position) {
      case TOOLTIP_POSITIONS.TOP:
        return `
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(-4px);
          margin-bottom: 4px;
        `;
      case TOOLTIP_POSITIONS.BOTTOM:
        return `
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(4px);
          margin-top: 4px;
        `;
      case TOOLTIP_POSITIONS.LEFT:
        return `
          right: 100%;
          top: 50%;
          transform: translateY(-50%) translateX(-4px);
          margin-right: 4px;
        `;
      case TOOLTIP_POSITIONS.RIGHT:
        return `
          left: 100%;
          top: 50%;
          transform: translateY(-50%) translateX(4px);
          margin-left: 4px;
        `;
      default:
        return '';
    }
  }}
`;

const Tooltip = ({
  children,
  content,
  position = TOOLTIP_POSITIONS.TOP,
  isDarkMode = false,
  disabled = false,
  delay = 0,
  className,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState(position);
  const wrapperRef = useRef(null);
  const tooltipRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const showTooltip = () => {
    if (disabled || !content) return;
    
    if (delay > 0) {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, delay);
    } else {
      setIsVisible(true);
    }
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  // Calculate position to prevent overflow
  useEffect(() => {
    if (isVisible && tooltipRef.current && wrapperRef.current) {
      const tooltip = tooltipRef.current;
      const wrapper = wrapperRef.current;
      const rect = wrapper.getBoundingClientRect();
      const tooltipRect = tooltip.getBoundingClientRect();
      
      // Check if tooltip would overflow viewport and adjust position if needed
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      let newPosition = position;
      
      if (position === TOOLTIP_POSITIONS.TOP && rect.top - tooltipRect.height < 0) {
        newPosition = TOOLTIP_POSITIONS.BOTTOM;
      } else if (position === TOOLTIP_POSITIONS.BOTTOM && rect.bottom + tooltipRect.height > viewportHeight) {
        newPosition = TOOLTIP_POSITIONS.TOP;
      } else if (position === TOOLTIP_POSITIONS.LEFT && rect.left - tooltipRect.width < 0) {
        newPosition = TOOLTIP_POSITIONS.RIGHT;
      } else if (position === TOOLTIP_POSITIONS.RIGHT && rect.right + tooltipRect.width > viewportWidth) {
        newPosition = TOOLTIP_POSITIONS.LEFT;
      }
      
      setTooltipPosition(newPosition);
    }
  }, [isVisible, position]);

  const handleMouseEnter = () => showTooltip();
  const handleMouseLeave = () => hideTooltip();
  const handleFocus = () => showTooltip();
  const handleBlur = () => hideTooltip();

  if (!content || disabled) {
    return <>{children}</>;
  }

  const tooltipId = `tooltip-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <TooltipWrapper
      ref={wrapperRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={className}
      {...props}
    >
      {React.cloneElement(children, {
        'aria-describedby': tooltipId
      })}
      {isVisible && (
        <TooltipContent
          ref={tooltipRef}
          id={tooltipId}
          role="tooltip"
          position={tooltipPosition}
          isDarkMode={isDarkMode}
          $visible={isVisible}
        >
          {content}
        </TooltipContent>
      )}
    </TooltipWrapper>
  );
};

Tooltip.propTypes = {
  /** The trigger element that will show the tooltip */
  children: PropTypes.node.isRequired,
  /** The content to display in the tooltip */
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /** Position of the tooltip relative to the trigger */
  position: PropTypes.oneOf(Object.values(TOOLTIP_POSITIONS)),
  /** Whether to use dark mode styling */
  isDarkMode: PropTypes.bool,
  /** Whether the tooltip is disabled */
  disabled: PropTypes.bool,
  /** Delay in milliseconds before showing the tooltip */
  delay: PropTypes.number,
  /** Additional CSS class name */
  className: PropTypes.string
};

export { TOOLTIP_POSITIONS };
export default Tooltip;

