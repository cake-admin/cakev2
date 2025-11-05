import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CheckIcon from '@mui/icons-material/Check';
import { fontStack } from '../../styles/globalStyles';
import { getTokenColor } from '../../tokens/colorTokens';

/**
 * Menu Component
 * 
 * A basic menu component for displaying a list of selectable options.
 * Supports theme variations (light.a / dark.a) and various item states.
 * 
 * Features:
 * - Basic menu container with border and shadow styling
 * - Menu items with interactive states (default, hover, selected, focused, disabled)
 * - Theme support (light.a / dark.a)
 * - Item selection
 * - Keyboard navigation support
 * - Accessibility (ARIA attributes)
 * 
 * @example
 * <Menu
 *   items={['Item 1', 'Item 2', 'Item 3']}
 *   selectedItem="Item 1"
 *   theme="light.a"
 *   onItemClick={(item) => console.log(item)}
 * />
 */

/**
 * Menu themes
 */
export const MENU_THEMES = {
  LIGHT: 'light.a',
  DARK: 'dark.a'
};

/**
 * Menu item states
 */
export const MENU_ITEM_STATES = {
  DEFAULT: 'default',
  HOVER: 'hover',
  SELECTED: 'selected',
  SELECTED_HOVER: 'selected-hover',
  FOCUSED: 'focused',
  DISABLED: 'disabled'
};

interface MenuItemProps {
  item: string;
  state?: string;
  selected?: boolean;
  disabled?: boolean;
  theme?: string;
  onItemClick?: (item: string) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  forceState?: string;
}

const MenuContainer = styled.div<{ $theme?: string }>`
  background: ${props => getTokenColor('menu.surface.item', props.$theme || 'light.a')};
  border: none;
  border-radius: 8px;
  padding: 8px 0;
  width: 180px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
`;

const MenuItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuItemButton = styled.button<{ 
  $state?: string; 
  $theme?: string;
  $selected?: boolean;
  $disabled?: boolean;
}>`
  width: 100%;
  height: 40px;
  padding: 8px 24px;
  background: ${props => {
    const theme = props.$theme || 'light.a';
    if (props.$disabled) {
      return getTokenColor('menu.surface.itemDisabled', theme);
    }
    if (props.$selected && props.$state === MENU_ITEM_STATES.SELECTED_HOVER) {
      return getTokenColor('menu.surface.itemSelectedHover', theme);
    }
    if (props.$selected) {
      return getTokenColor('menu.surface.itemSelected', theme);
    }
    if (props.$state === MENU_ITEM_STATES.HOVER) {
      return getTokenColor('menu.surface.itemHover', theme);
    }
    if (props.$state === MENU_ITEM_STATES.FOCUSED) {
      return getTokenColor('menu.surface.itemFocused', theme);
    }
    return getTokenColor('menu.surface.item', theme);
  }};
  border: none;
  font-family: ${fontStack};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${props => {
    const theme = props.$theme || 'light.a';
    if (props.$disabled) {
      return getTokenColor('menu.text.itemDisabled', theme);
    }
    return getTokenColor('text.primary', theme);
  }};
  text-align: left;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  transition: background-color 0.15s ease-in-out, color 0.15s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  box-sizing: border-box;
  
  &:focus-visible {
    outline: none;
    box-shadow: inset 0 0 0 2px ${props => getTokenColor('border.focus', props.$theme || 'light.a')};
  }
  
  &:hover:not(:disabled) {
    background-color: ${props => {
      const theme = props.$theme || 'light.a';
      if (props.$selected) {
        return getTokenColor('menu.surface.itemSelectedHover', theme);
      }
      return getTokenColor('menu.surface.itemHover', theme);
    }};
  }
  
  &:active:not(:disabled) {
    background-color: ${props => {
      const theme = props.$theme || 'light.a';
      if (props.$selected) {
        return getTokenColor('menu.surface.itemSelectedHover', theme);
      }
      return getTokenColor('menu.surface.itemHover', theme);
    }};
  }
`;

const MenuItem: React.FC<MenuItemProps> = ({
  item,
  state = MENU_ITEM_STATES.DEFAULT,
  selected = false,
  disabled = false,
  theme = MENU_THEMES.LIGHT,
  onItemClick,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  forceState
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseEnter = () => {
    if (!disabled && !forceState) {
      setIsHovered(true);
      onMouseEnter?.();
    }
  };

  const handleMouseLeave = () => {
    if (!forceState) {
      setIsHovered(false);
      onMouseLeave?.();
    }
  };

  const handleFocus = () => {
    if (!disabled && !forceState) {
      setIsFocused(true);
      onFocus?.();
    }
  };

  const handleBlur = () => {
    if (!forceState) {
      setIsFocused(false);
      onBlur?.();
    }
  };

  const handleClick = () => {
    if (!disabled && onItemClick) {
      onItemClick(item);
    }
  };

  const currentState = forceState 
    ? forceState
    : disabled 
    ? MENU_ITEM_STATES.DISABLED
    : isFocused 
    ? MENU_ITEM_STATES.FOCUSED
    : selected && isHovered
    ? MENU_ITEM_STATES.SELECTED_HOVER
    : selected
    ? MENU_ITEM_STATES.SELECTED
    : isHovered
    ? MENU_ITEM_STATES.HOVER
    : MENU_ITEM_STATES.DEFAULT;

  const iconColor = getTokenColor('text.primary', theme);

  return (
    <MenuItemButton
      $state={currentState}
      $theme={theme}
      $selected={selected}
      $disabled={disabled}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      disabled={disabled}
      role="menuitem"
      aria-selected={selected}
      aria-disabled={disabled}
    >
      <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {item}
      </span>
      {selected && (
        <CheckIcon 
          style={{ 
            width: '16px', 
            height: '16px', 
            fontSize: '16px',
            color: iconColor,
            flexShrink: 0
          }} 
        />
      )}
    </MenuItemButton>
  );
};

interface MenuItemState {
  item: string;
  state?: string;
  selected?: boolean;
  disabled?: boolean;
}

interface MenuProps {
  items?: string[];
  selectedItem?: string;
  onItemClick?: (item: string) => void;
  theme?: string;
  width?: number;
  className?: string;
  style?: React.CSSProperties;
  itemStates?: MenuItemState[];
}

const Menu: React.FC<MenuProps> = ({
  items = [],
  selectedItem,
  onItemClick,
  theme = MENU_THEMES.LIGHT,
  width = 180,
  className,
  style,
  itemStates
}) => {
  return (
    <MenuContainer 
      $theme={theme}
      className={className}
      style={{ ...style, width: `${width}px` }}
      role="menu"
    >
      <MenuItemsContainer>
        {items.map((item, index) => {
          const itemState = itemStates?.find(state => state.item === item);
          return (
            <MenuItem
              key={index}
              item={item}
              selected={itemState?.selected !== undefined ? itemState.selected : selectedItem === item}
              disabled={itemState?.disabled || false}
              forceState={itemState?.state}
              theme={theme}
              onItemClick={onItemClick}
            />
          );
        })}
      </MenuItemsContainer>
    </MenuContainer>
  );
};

Menu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  selectedItem: PropTypes.string,
  onItemClick: PropTypes.func,
  theme: PropTypes.oneOf(Object.values(MENU_THEMES)),
  width: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
  itemStates: PropTypes.arrayOf(PropTypes.shape({
    item: PropTypes.string.isRequired,
    state: PropTypes.string,
    selected: PropTypes.bool,
    disabled: PropTypes.bool
  }))
};

export default Menu;

