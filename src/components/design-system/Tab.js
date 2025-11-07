import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { fontStack } from '../../styles/globalStyles';
import { getTokenColor, THEMES } from '../../tokens/colorTokens';

/**
 * Tab orientations
 */
export const TAB_ORIENTATIONS = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical'
};

/**
 * Tab themes
 */
export const TAB_THEMES = {
  LIGHT: 'light.a',
  DARK: 'dark.a'
};

const TabContainer = styled.div`
  position: relative;
  display: flex;
  align-items: ${props => props.$orientation === TAB_ORIENTATIONS.VERTICAL ? 'flex-start' : 'center'};
  flex-direction: ${props => props.$orientation === TAB_ORIENTATIONS.VERTICAL ? 'column' : 'row'};
  width: ${props => props.$orientation === TAB_ORIENTATIONS.VERTICAL ? 'auto' : '100%'};
  background-color: ${props => {
    if (props.$orientation === TAB_ORIENTATIONS.VERTICAL) {
      return 'transparent';
    }
    return getTokenColor('tab.surface.unselected', props.theme);
  }};
`;

const TabList = styled.div`
  display: flex;
  flex-direction: ${props => props.$orientation === TAB_ORIENTATIONS.VERTICAL ? 'column' : 'row'};
  align-items: ${props => props.$orientation === TAB_ORIENTATIONS.VERTICAL ? 'stretch' : 'center'};
  gap: ${props => props.$orientation === TAB_ORIENTATIONS.VERTICAL ? '0' : '0'};
  overflow-x: ${props => props.$orientation === TAB_ORIENTATIONS.VERTICAL ? 'visible' : 'auto'};
  overflow-y: ${props => props.$orientation === TAB_ORIENTATIONS.VERTICAL ? 'auto' : 'hidden'};
  scroll-behavior: smooth;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  
  width: ${props => {
    if (props.$orientation === TAB_ORIENTATIONS.VERTICAL) {
      return '200px';
    }
    if (!props.hasOverflow) return '100%';
    let width = '100%';
    // Always reserve space for buttons when overflow exists
    if (props.hasOverflow) {
      width = `calc(${width} - 96px)`; // 48px for left + 48px for right
    }
    return width;
  }};
  margin-left: ${props => props.hasOverflow && props.$orientation !== TAB_ORIENTATIONS.VERTICAL ? '48px' : '0'};
  margin-right: ${props => props.hasOverflow && props.$orientation !== TAB_ORIENTATIONS.VERTICAL ? '48px' : '0'};
`;

const TabItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: ${props => props.$orientation === TAB_ORIENTATIONS.VERTICAL ? 'flex-start' : 'center'};
  height: 48px;
  width: ${props => props.$orientation === TAB_ORIENTATIONS.VERTICAL ? '200px' : 'auto'};
  padding: ${props => props.$orientation === TAB_ORIENTATIONS.VERTICAL ? '12px 16px 12px 24px' : '8px 24px'};
  gap: 12px;
  border: none;
  background-color: ${props => {
    if (props.$disabled) {
      return getTokenColor('tab.surface.disabled', props.theme);
    }
    if (props.$orientation === TAB_ORIENTATIONS.VERTICAL) {
      if (props.$selected) {
        return getTokenColor('surface.itemSelectedOnCanvas', props.theme);
      }
      return getTokenColor('background.canvas', props.theme);
    }
    if (props.$selected) {
      return getTokenColor('tab.surface.selected', props.theme);
    }
    return getTokenColor('tab.surface.unselected', props.theme);
  }};
  color: ${props => {
    // Handle disabled + selected combination first
    if (props.$disabled && props.$selected) {
      return getTokenColor('icon.disabled', props.theme);
    }
    if (props.$disabled) {
      return getTokenColor('tab.text.disabled', props.theme);
    }
    if (props.$orientation === TAB_ORIENTATIONS.VERTICAL) {
      if (props.$selected) {
        return getTokenColor('reference.primary', props.theme);
      }
      return getTokenColor('text.primary', props.theme);
    }
    if (props.$selected) {
      return getTokenColor('tab.text.selected', props.theme);
    }
    return getTokenColor('tab.text.unselected', props.theme);
  }};
  border-bottom: ${props => {
    if (props.$orientation === TAB_ORIENTATIONS.VERTICAL) {
      return 'none';
    }
    return props.$selected ? '4px solid' : '4px solid transparent';
  }};
  border-bottom-color: ${props => {
    if (props.$orientation === TAB_ORIENTATIONS.VERTICAL) {
      return 'transparent';
    }
    // Handle disabled + selected combination
    if (props.$disabled && props.$selected) {
      return getTokenColor('icon.disabled', props.theme);
    }
    return props.$selected ? getTokenColor('tab.border.selected', props.theme) : 'transparent';
  }};
  border-left: none;
  border-radius: 0;
  font-family: ${fontStack};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  white-space: nowrap;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  transition: background-color 0.2s ease, color 0.2s ease, border-bottom-color 0.2s ease, border 0.2s ease;
  user-select: none;
  position: relative;
  
  &:hover {
    background-color: ${props => {
      if (props.$disabled) {
        return getTokenColor('tab.surface.disabled', props.theme);
      }
      if (props.$orientation === TAB_ORIENTATIONS.VERTICAL) {
        if (props.$selected) {
          return getTokenColor('surface.itemSelectedHover', props.theme);
        }
        return getTokenColor('surface.itemHover', props.theme);
      }
      if (props.$selected) {
        return getTokenColor('tab.surface.selected', props.theme);
      }
      return getTokenColor('tab.surface.hover', props.theme);
    }};
  }
  
  &:focus-visible {
    outline: none;
    ${props => {
      if (props.$orientation === TAB_ORIENTATIONS.VERTICAL) {
        const focusColor = getTokenColor('reference.focus', props.theme);
        return `border: 3px solid ${focusColor};`;
      }
      const focusColor = getTokenColor('border.focus', props.theme);
      return `box-shadow: inset 0 0 0 2px ${focusColor};`;
    }}
  }
  
  &:active {
    background-color: ${props => {
      if (props.$disabled) {
        return getTokenColor('tab.surface.disabled', props.theme);
      }
      if (props.$orientation === TAB_ORIENTATIONS.VERTICAL) {
        if (props.$selected) {
          return getTokenColor('surface.itemSelectedHover', props.theme);
        }
        return getTokenColor('surface.itemHover', props.theme);
      }
      if (props.$selected) {
        return getTokenColor('tab.surface.selected', props.theme);
      }
      return getTokenColor('tab.surface.hover', props.theme);
    }};
  }
`;

const LeftBorderIndicator = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background-color: ${props => {
    if (props.$disabled) {
      return getTokenColor('icon.disabled', props.theme);
    }
    return getTokenColor('reference.primary', props.theme);
  }};
`;

const TabScrollButton = styled.button`
  position: absolute;
  top: 0;
  ${props => props.direction === 'left' ? 'left: 0;' : 'right: 0;'}
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${props => getTokenColor('tab.surface.unselected', props.theme)};
  color: ${props => {
    if (props.$disabled) {
      return getTokenColor('tab.icon.scrollDisabled', props.theme);
    }
    return getTokenColor('tab.icon.scroll', props.theme);
  }};
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  transition: background-color 0.2s ease, color 0.2s ease;
  z-index: 1;
  flex-shrink: 0;
  
  &:hover {
    background-color: ${props => {
      if (props.$disabled) {
        return getTokenColor('tab.surface.unselected', props.theme);
      }
      return getTokenColor('tab.surface.hover', props.theme);
    }};
    color: ${props => {
      if (props.$disabled) {
        return getTokenColor('tab.icon.scrollDisabled', props.theme);
      }
      return getTokenColor('tab.icon.scrollHover', props.theme);
    }};
  }
  
  &:focus-visible {
    outline: none;
    box-shadow: ${props => {
      const focusColor = getTokenColor('border.focus', props.theme);
      return `inset 0 0 0 2px ${focusColor}`;
    }};
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const Tab = ({
  tabs = [],
  selectedTab,
  onTabChange,
  theme = TAB_THEMES.LIGHT,
  orientation = TAB_ORIENTATIONS.HORIZONTAL,
  disabled = false,
  className,
  ...props
}) => {
  const tabListRef = useRef(null);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);
  const [focusedTabIndex, setFocusedTabIndex] = useState(null);

  // Check for overflow
  const checkOverflow = useCallback(() => {
    if (!tabListRef.current) return;
    
    const container = tabListRef.current;
    const isVertical = orientation === TAB_ORIENTATIONS.VERTICAL;
    const hasOverflowContent = isVertical 
      ? container.scrollHeight > container.clientHeight
      : container.scrollWidth > container.clientWidth;
    setHasOverflow(hasOverflowContent);
    
    if (hasOverflowContent && !isVertical) {
      setShowLeftButton(container.scrollLeft > 0);
      setShowRightButton(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 1
      );
    } else {
      setShowLeftButton(false);
      setShowRightButton(false);
    }
  }, [orientation]);

  // Handle scroll
  const handleScroll = useCallback(() => {
    if (!tabListRef.current || orientation === TAB_ORIENTATIONS.VERTICAL) return;
    const container = tabListRef.current;
    setShowLeftButton(container.scrollLeft > 0);
    setShowRightButton(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 1
    );
  }, [orientation]);

  // Scroll functions
  const scrollLeft = useCallback(() => {
    if (!tabListRef.current || !showLeftButton) return;
    const container = tabListRef.current;
    const scrollAmount = 200; // pixels to scroll
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }, [showLeftButton]);

  const scrollRight = useCallback(() => {
    if (!tabListRef.current || !showRightButton) return;
    const container = tabListRef.current;
    const scrollAmount = 200; // pixels to scroll
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }, [showRightButton]);

  // Scroll selected tab into view
  const scrollToSelected = useCallback(() => {
    if (!tabListRef.current || !hasOverflow) return;
    
    const selectedIndex = tabs.findIndex(tab => tab.id === selectedTab);
    if (selectedIndex === -1) return;
    
    const container = tabListRef.current;
    const tabElements = container.children;
    if (!tabElements[selectedIndex]) return;
    
    const selectedTabElement = tabElements[selectedIndex];
    const containerRect = container.getBoundingClientRect();
    const tabRect = selectedTabElement.getBoundingClientRect();
    const isVertical = orientation === TAB_ORIENTATIONS.VERTICAL;
    
    if (isVertical) {
      if (tabRect.top < containerRect.top) {
        container.scrollBy({
          top: tabRect.top - containerRect.top - 10,
          behavior: 'smooth'
        });
      } else if (tabRect.bottom > containerRect.bottom) {
        container.scrollBy({
          top: tabRect.bottom - containerRect.bottom + 10,
          behavior: 'smooth'
        });
      }
    } else {
      if (tabRect.left < containerRect.left) {
        container.scrollBy({
          left: tabRect.left - containerRect.left - 10,
          behavior: 'smooth'
        });
      } else if (tabRect.right > containerRect.right) {
        container.scrollBy({
          left: tabRect.right - containerRect.right + 10,
          behavior: 'smooth'
        });
      }
    }
  }, [tabs, selectedTab, hasOverflow, orientation]);

  // Check overflow on mount and resize
  useEffect(() => {
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [checkOverflow, tabs, orientation]);

  // Scroll to selected tab when it changes
  useEffect(() => {
    scrollToSelected();
  }, [scrollToSelected]);

  // Handle tab click
  const handleTabClick = (tabId) => {
    if (disabled) return;
    onTabChange?.(tabId);
  };

  // Keyboard navigation
  const handleKeyDown = (event, currentIndex) => {
    if (disabled) return;
    
    const isVertical = orientation === TAB_ORIENTATIONS.VERTICAL;
    let newIndex = currentIndex;
    
    switch (event.key) {
      case 'ArrowLeft':
        if (!isVertical) {
          event.preventDefault();
          newIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
        } else {
          return;
        }
        break;
      case 'ArrowRight':
        if (!isVertical) {
          event.preventDefault();
          newIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
        } else {
          return;
        }
        break;
      case 'ArrowUp':
        if (isVertical) {
          event.preventDefault();
          newIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
        } else {
          return;
        }
        break;
      case 'ArrowDown':
        if (isVertical) {
          event.preventDefault();
          newIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
        } else {
          return;
        }
        break;
      case 'Home':
        event.preventDefault();
        newIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        newIndex = tabs.length - 1;
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (tabs[currentIndex] && !tabs[currentIndex].disabled) {
          handleTabClick(tabs[currentIndex].id);
        }
        return;
      default:
        return;
    }
    
    // Focus the new tab
    if (newIndex >= 0 && newIndex < tabs.length) {
      setFocusedTabIndex(newIndex);
      const tabElements = tabListRef.current?.children;
      if (tabElements && tabElements[newIndex]) {
        tabElements[newIndex].focus();
      }
    }
  };

  return (
    <TabContainer
      className={className}
      theme={theme}
      $orientation={orientation}
      {...props}
    >
      {hasOverflow && orientation !== TAB_ORIENTATIONS.VERTICAL && (
        <TabScrollButton
          direction="left"
          theme={theme}
          $disabled={!showLeftButton}
          onClick={scrollLeft}
          aria-label="Scroll tabs left"
          tabIndex={showLeftButton ? 0 : -1}
        >
          <ChevronLeftIcon />
        </TabScrollButton>
      )}
      
      <TabList
        ref={tabListRef}
        role="tablist"
        aria-label="Tabs"
        aria-orientation={orientation === TAB_ORIENTATIONS.VERTICAL ? 'vertical' : 'horizontal'}
        theme={theme}
        $orientation={orientation}
        hasOverflow={hasOverflow}
        showLeftButton={showLeftButton}
        showRightButton={showRightButton}
        onScroll={handleScroll}
      >
        {tabs.map((tab, index) => {
          const isSelected = selectedTab === tab.id;
          const isDisabled = disabled || tab.disabled;
          const tabId = `tab-${tab.id}`;
          const panelId = `tabpanel-${tab.id}`;
          
          return (
            <TabItem
              key={tab.id}
              id={tabId}
              role="tab"
              aria-selected={isSelected}
              aria-controls={panelId}
              aria-disabled={isDisabled}
              tabIndex={isSelected && !isDisabled ? 0 : -1}
              $selected={isSelected}
              $disabled={isDisabled}
              $orientation={orientation}
              theme={theme}
              onClick={() => handleTabClick(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onFocus={() => setFocusedTabIndex(index)}
              onBlur={() => {
                // Only clear focus if not moving to another tab
                setTimeout(() => {
                  if (!tabListRef.current?.contains(document.activeElement)) {
                    setFocusedTabIndex(null);
                  }
                }, 0);
              }}
            >
              {orientation === TAB_ORIENTATIONS.VERTICAL && isSelected && (
                <LeftBorderIndicator
                  $disabled={isDisabled}
                  theme={theme}
                />
              )}
              {tab.label}
            </TabItem>
          );
        })}
      </TabList>
      
      {hasOverflow && orientation !== TAB_ORIENTATIONS.VERTICAL && (
        <TabScrollButton
          direction="right"
          theme={theme}
          $disabled={!showRightButton}
          onClick={scrollRight}
          aria-label="Scroll tabs right"
          tabIndex={showRightButton ? 0 : -1}
        >
          <ChevronRightIcon />
        </TabScrollButton>
      )}
    </TabContainer>
  );
};

Tab.propTypes = {
  /** Array of tab objects with id, label, and optional disabled property */
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
      disabled: PropTypes.bool
    })
  ).isRequired,
  /** Currently selected tab ID */
  selectedTab: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Callback function called when a tab is selected */
  onTabChange: PropTypes.func,
  /** Theme variant */
  theme: PropTypes.oneOf(Object.values(TAB_THEMES)),
  /** Tab orientation (horizontal or vertical) */
  orientation: PropTypes.oneOf(Object.values(TAB_ORIENTATIONS)),
  /** Whether the entire tab group is disabled */
  disabled: PropTypes.bool,
  /** Additional CSS class name */
  className: PropTypes.string
};

export default Tab;

