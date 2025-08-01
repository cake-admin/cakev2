import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

interface ToggleOption {
  label: string;
  value: string;
  disabled?: boolean;
}

interface ToggleGroupProps {
  /** Array of options to display in the toggle group */
  options: ToggleOption[];
  /** Currently selected value (controlled mode) */
  value?: string;
  /** Default selected value (uncontrolled mode) */
  defaultValue?: string;
  /** Callback when selection changes */
  onChange?: (value: string) => void;
  /** Whether the entire toggle group is disabled */
  disabled?: boolean;
  /** Additional CSS class name */
  className?: string;
  /** Whether to use dark mode styles */
  isDarkMode?: boolean;
  /** The size variant of the toggle group */
  size?: 'medium' | 'large';
}

const Container = styled.div<{ $isDarkMode: boolean }>`
  display: inline-flex;
  background: ${props => props.$isDarkMode ? '#374151' : '#f1f5f9'};
  padding: 4px;
  border-radius: 8px;
  position: relative;
  gap: 4px;
`;

const ToggleButton = styled.button<{
  $selected: boolean;
  $isDarkMode: boolean;
  $size: 'medium' | 'large';
}>`
  position: relative;
  padding: ${props => props.$size === 'large' ? '8px 16px' : '6px 12px'};
  font-size: ${props => props.$size === 'large' ? '14px' : '12px'};
  line-height: 1;
  border: none;
  border-radius: 6px;
  font-family: 'Segoe UI', sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;
  min-width: 60px;
  
  background: ${props => props.$selected 
    ? props.$isDarkMode ? '#60a5fa' : '#3b82f6'
    : 'transparent'
  };
  
  color: ${props => {
    if (props.$selected) {
      return props.$isDarkMode ? '#111827' : '#ffffff';
    }
    return props.$isDarkMode ? '#e5e7eb' : '#1f2937';
  }};

  &:hover:not(:disabled) {
    background: ${props => props.$selected
      ? props.$isDarkMode ? '#60a5fa' : '#3b82f6'
      : props.$isDarkMode ? 'rgba(156, 163, 175, 0.1)' : 'rgba(0, 0, 0, 0.05)'
    };
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.$isDarkMode ? '#60a5fa' : '#3b82f6'};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    text-decoration: line-through;
  }
`;

export const ToggleGroup: React.FC<ToggleGroupProps> = ({
  options,
  value: controlledValue,
  defaultValue,
  onChange,
  disabled = false,
  className,
  isDarkMode = false,
  size = 'medium',
}) => {
  const [internalValue, setInternalValue] = useState<string | undefined>(defaultValue);
  const isControlled = controlledValue !== undefined;
  const selectedValue = isControlled ? controlledValue : internalValue;

  const handleClick = useCallback((clickedValue: string) => {
    if (disabled) return;

    if (!isControlled) {
      setInternalValue(clickedValue);
    }
    onChange?.(clickedValue);
  }, [disabled, isControlled, onChange]);

  return (
    <Container 
      className={className}
      $isDarkMode={isDarkMode}
      role="radiogroup"
    >
      {options.map((option) => (
        <ToggleButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          $selected={selectedValue === option.value}
          $isDarkMode={isDarkMode}
          $size={size}
          disabled={disabled || option.disabled}
          role="radio"
          aria-checked={selectedValue === option.value}
          type="button"
        >
          {option.label}
        </ToggleButton>
      ))}
    </Container>
  );
};

export default ToggleGroup;