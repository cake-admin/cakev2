import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Animation keyframes
const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

interface DropdownButtonProps {
  /** The text label for the button */
  label?: string;
  /** Array of items to show in the dropdown */
  items?: string[];
  /** Whether the button is disabled */
  disabled?: boolean;
  /** The style variant of the button (pill or square) */
  buttonStyle?: 'pill' | 'square';
  /** The size variant of the button */
  size?: 'medium' | 'large';
  /** Whether to use dark mode styles */
  isDarkMode?: boolean;
  /** Optional class name for custom styling */
  className?: string;
  /** Callback when an item is selected */
  onSelect?: (item: string) => void;
  /** Optional custom items renderer */
  renderItem?: (item: string, isSelected: boolean) => React.ReactNode;
  /** Position of the dropdown menu */
  position?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
  /** The variant of the button (primary or secondary) */
  variant?: 'primary' | 'secondary';
}

const StyledDropdownButton = styled.button<{
  $isOpen: boolean;
  buttonStyle: string;
  size: string;
  isDarkMode: boolean;
  variant?: 'primary' | 'secondary';
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: ${props => props.size === 'large' ? '8px 24px' : '6px 20px'};
  height: ${props => props.size === 'large' ? '40px' : '32px'};
  background-color: ${props => {
    if (props.disabled) return props.isDarkMode ? '#52525B' : '#E2E8F0';
    if (props.variant === 'secondary') {
      return props.isDarkMode ? '#CBD5E1' : '#E2E8F0';
    }
    return props.isDarkMode ? '#93C5FD' : '#1D4ED8';
  }};
  color: ${props => {
    if (props.disabled) return props.isDarkMode ? '#9CA3AF' : '#94A3B8';
    if (props.variant === 'secondary') {
      return props.isDarkMode ? '#000000' : '#0F172A';
    }
    return props.isDarkMode ? '#18181B' : '#FFFFFF';
  }};
  
  border: none;
  border-radius: ${props => props.buttonStyle === 'pill' ? '100px' : '8px'};
  font-family: 'Segoe UI', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: background-color 200ms ease-in-out, transform 200ms ease-in-out, box-shadow 200ms ease-in-out;
  user-select: none;
  position: relative;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    color: ${props => {
      if (props.disabled) return props.isDarkMode ? '#9CA3AF' : '#94A3B8';
      return props.variant === 'secondary' ? '#0F172A' : 'inherit';
    }};
    transform: rotate(${props => props.$isOpen ? '180deg' : '0deg'});
    transition: transform 0s;
  }

  &:hover:not(:disabled) {
    background-color: ${props => {
      if (props.variant === 'secondary') {
        return props.isDarkMode ? '#94A3B8' : '#CBD5E1';
      }
      return props.isDarkMode ? '#60A5FA' : '#1E3A8A';
    }};
    color: ${props => {
      if (props.variant === 'secondary') {
        return props.isDarkMode ? '#000000' : '#0F172A';
      }
      return props.isDarkMode ? '#18181B' : '#FFFFFF';
    }};
  }

  &:active:not(:disabled) {
    background-color: ${props => {
      if (props.variant === 'secondary') {
        return props.isDarkMode ? '#CBD5E1' : '#CBD5E1';
      }
      return props.isDarkMode ? '#93C5FD' : '#1E40AF';
    }};
    color: ${props => {
      if (props.variant === 'secondary') {
        // Keep the same text color as default state
        return props.isDarkMode ? '#000000' : '#0F172A';
      }
      return props.isDarkMode ? '#18181B' : '#FFFFFF';
    }};
  }

  &:focus-visible {
    outline: none;
    box-shadow: ${props => {
      const focusColor = '#3B82F6'; // blue-500 for focus ring
      return `0 0 0 2px ${props.isDarkMode ? '#18181B' : '#FFFFFF'}, 0 0 0 4px ${focusColor}`;
    }};
    background-color: ${props => {
      if (props.variant === 'secondary') {
        return props.isDarkMode ? '#CBD5E1' : '#E2E8F0';
      }
      return props.isDarkMode ? '#93C5FD' : '#1D4ED8';
    }};
  }


`;

const DropdownMenu = styled.div<{ position: string; isDarkMode: boolean }>`
  position: absolute;
  ${props => props.position.startsWith('bottom') ? 'top: calc(100% + 8px)' : 'bottom: calc(100% + 8px)'};
  ${props => props.position.endsWith('right') ? 'right: 0' : 'left: 0'};
  min-width: 100%;
  background: ${props => props.isDarkMode ? '#18181B' : '#FFFFFF'};
  border-radius: 8px;
  border: ${props => props.isDarkMode ? '1px solid #52525B' : '1px solid #E2E8F0'}; // border-gray-200 in light mode
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); // shadow-lg
  z-index: 1000;
  overflow: hidden;
  padding: 4px 0;
  animation: ${slideDown} 0.2s ease-out;
`;

const MenuItem = styled.button<{ selected: boolean; isDarkMode: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 8px 16px;
  background: none;
  border: none;
  font-family: 'Segoe UI', sans-serif;
  font-size: 14px;
  color: ${props => props.isDarkMode ? '#D4D4D8' : '#374151'}; // text-gray-700 in light mode
  cursor: pointer;
  transition: background-color 200ms ease-in-out;

  &:hover {
    background-color: ${props => props.isDarkMode ? '#27272A' : '#F8FAFC'}; // bg-gray-50 in light mode
  }
`;

export const DropdownButton: React.FC<DropdownButtonProps> = ({
  label = 'Dropdown',
  items = [],
  disabled = false,
  buttonStyle = 'pill',
  size = 'medium',
  isDarkMode = false,
  className,
  onSelect,
  renderItem,
  position = 'bottom-left',
  variant = 'primary',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleClick = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
    onSelect?.(item);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        setIsOpen(!isOpen);
        break;
      case 'ArrowDown':
        if (isOpen && items.length > 0) {
          event.preventDefault();
          const currentIndex = selectedItem ? items.indexOf(selectedItem) : -1;
          const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
          setSelectedItem(items[nextIndex]);
        }
        break;
      case 'ArrowUp':
        if (isOpen && items.length > 0) {
          event.preventDefault();
          const currentIndex = selectedItem ? items.indexOf(selectedItem) : 0;
          const prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
          setSelectedItem(items[prevIndex]);
        }
        break;
    }
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <StyledDropdownButton
        ref={buttonRef}
        disabled={disabled}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        $isOpen={isOpen}
        buttonStyle={buttonStyle}
        size={size}
        isDarkMode={isDarkMode}
        className={className}
        variant={variant}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-disabled={disabled}
      >
        {label}
        <span className="icon">
          <KeyboardArrowDownIcon />
        </span>
      </StyledDropdownButton>
      {isOpen && (
        <DropdownMenu ref={menuRef} position={position} isDarkMode={isDarkMode} role="menu">
          {items.map((item, index) => (
            <MenuItem
              key={index}
              onClick={() => handleItemClick(item)}
              selected={selectedItem === item}
              isDarkMode={isDarkMode}
              role="menuitem"
              tabIndex={-1}
            >
              {renderItem ? renderItem(item, selectedItem === item) : item}
            </MenuItem>
          ))}
        </DropdownMenu>
      )}
    </div>
  );
};

export default DropdownButton;