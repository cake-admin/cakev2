import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { fontStack } from '../../styles/globalStyles';

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
  onChange?: (value: string | undefined) => void;
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
  background: ${props => props.$isDarkMode ? '#1F2937' : '#F1F5F9'};
  position: relative;
  border-radius: 4px;
  border: 2px solid ${props => props.$isDarkMode ? '#52525B' : '#CBD5E1'};
  padding: 0;
  gap: 0;
  box-sizing: content-box;
  overflow: hidden;
`;

const ToggleButton = styled.button<{
  $selected: boolean;
  $isDarkMode: boolean;
  $size: 'medium' | 'large';
  $isFirst?: boolean;
  $isLast?: boolean;
}>`
  position: relative;
  padding: ${props => props.$size === 'large' ? '8px 24px' : '6px 16px'};
  height: ${props => props.$size === 'large' ? '40px' : '32px'};
  font-size: ${props => props.$size === 'large' ? '15px' : '14px'};
  line-height: 1;
  border: none;

  &:not(:last-child) {
    border-right: 2px solid ${props => props.$isDarkMode 
      ? '#52525B'
      : '#CBD5E1'
    };
  }

  &:not(:last-child)[aria-checked="true"],
  &:not(:last-child) + button[aria-checked="true"] {
    border-right-color: ${props => props.$isDarkMode ? '#52525B' : 'transparent'};
  }
  border-radius: ${props => {
    if (props.$isFirst) return '2px 0 0 2px';
    if (props.$isLast) return '0 2px 2px 0';
    return '0';
  }};
  
  ${props => props.$selected && `
    background: ${props.$isDarkMode ? '#93C5FD' : '#1D4ED8'};
    color: ${props.$isDarkMode ? '#18181B' : '#FFFFFF'};
  `}
  font-family: ${fontStack};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  white-space: nowrap;
  min-width: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  
  background: ${props => {
    if (props.$selected) {
      return props.$isDarkMode ? '#93C5FD' : '#1D4ED8';
    }
    return props.$isDarkMode ? '#CBD5E1' : '#E2E8F0';
  }};
  
  color: ${props => {
    if (props.$selected) {
      return props.$isDarkMode ? '#18181B' : '#FFFFFF';
    }
    return props.$isDarkMode ? '#000000' : '#0F172A';
  }};

  &:hover:not(:disabled) {
    background: ${props => {
      if (props.$selected) {
        return props.$isDarkMode ? '#60A5FA' : '#1E3A8A';
      }
      return props.$isDarkMode ? '#94A3B8' : '#CBD5E1';
    }};
  }

  &:active:not(:disabled) {
    background: ${props => {
      if (props.$selected) {
        return props.$isDarkMode ? '#60A5FA' : '#1E3A8A';
      }
      return props.$isDarkMode ? '#CBD5E1' : '#CBD5E1';
    }};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.$isDarkMode ? '#93C5FD' : '#1D4ED8'};
  }

  &:disabled {
    background: ${props => props.$isDarkMode ? '#1F2937' : '#E5E7EB'} !important;
    color: ${props => props.$isDarkMode ? '#9CA3AF' : '#475569'};
    cursor: not-allowed;
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

    // If clicking the already selected value, deselect it
    const newValue = selectedValue === clickedValue ? undefined : clickedValue;

    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  }, [disabled, isControlled, onChange, selectedValue]);

  return (
    <Container 
      className={className}
      $isDarkMode={isDarkMode}
      role="radiogroup"
    >
      {options.map((option, index) => (
        <ToggleButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          $selected={selectedValue === option.value}
          $isDarkMode={isDarkMode}
          $size={size}
          $isFirst={index === 0}
          $isLast={index === options.length - 1}
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