import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { fontStack } from '../../styles/globalStyles';
import colorData from '../../data/colors.json';

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-family: ${fontStack};
  font-size: 14px;
  line-height: 1.5;
  color: ${colorData.slate[900]};
  background-color: #ffffff;
  transition: all 0.2s ease;
  
  &::placeholder {
    color: ${colorData.slate[700]};
  }
  
  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }
  
  &:disabled {
    background-color: #f9fafb;
    color: ${colorData.slate[700]};
    cursor: not-allowed;
  }
  
  /* Size variants */
  ${props => {
    switch (props.size) {
      case 'small':
        return `
          padding: 8px 12px;
          font-size: 13px;
        `;
      case 'large':
        return `
          padding: 16px 20px;
          font-size: 16px;
        `;
      default:
        return '';
    }
  }}
  
  /* State styles */
  ${props => {
    if (props.error) {
      return `
        border-color: #dc2626;
        
        &:focus {
          border-color: #dc2626;
          box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
        }
      `;
    }
    if (props.success) {
      return `
        border-color: #059669;
        
        &:focus {
          border-color: #059669;
          box-shadow: 0 0 0 3px rgba(5, 150, 105, 0.1);
        }
      `;
    }
    return '';
  }}
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: ${colorData.slate[900]};
  margin-bottom: 6px;
  font-family: ${fontStack};
  
  ${props => props.required && `
    &::after {
      content: ' *';
      color: #dc2626;
    }
  `}
`;

const HelperText = styled.p`
  margin: 4px 0 0 0;
  font-size: 12px;
  color: ${colorData.slate[700]};
  font-family: ${fontStack};
  
  ${props => props.error && `
    color: #dc2626;
  `}
  
  ${props => props.success && `
    color: #059669;
  `}
`;

const InputIcon = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  pointer-events: none;
`;

const Input = ({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  size = 'medium',
  disabled = false,
  required = false,
  error = false,
  success = false,
  helperText,
  icon,
  ...props
}) => {
  const [inputValue, setInputValue] = React.useState(value || '');

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <InputWrapper>
      {label && (
        <Label required={required}>
          {label}
        </Label>
      )}
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        size={size}
        disabled={disabled}
        error={error}
        success={success}
        {...props}
      />
      {icon && <InputIcon>{icon}</InputIcon>}
      {helperText && (
        <HelperText error={error} success={success}>
          {helperText}
        </HelperText>
      )}
    </InputWrapper>
  );
};

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 8px 24px;
  border-bottom: 1px solid #E2E8F0;
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  background: #F8FAFC;
  border-radius: 6px;
  transition: all 0.2s ease;

  &:hover {
    background: #F1F5F9;
  }

  &:focus-within {
    background: #FFFFFF;
    box-shadow: 0 0 0 2px #E2E8F0;
  }
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  left: 12px;
  color: #64748B;
  display: flex;
  align-items: center;

  & > svg {
    font-size: 20px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 36px;
  padding: 0 64px 0 36px;
  border: none;
  background: transparent;
  font-size: 14px;
  color: #171717;
  font-family: inherit;

  &::placeholder {
    color: #94A3B8;
  }

  &:focus {
    outline: none;
  }
`;

const ShortcutKey = styled.div`
  position: absolute;
  right: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const KeyboardKey = styled.kbd`
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 4px;
  padding: 2px 4px;
  font-size: 11px;
  color: #64748B;
  font-family: inherit;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
`;

export const SearchBar = ({ onSearch }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      e.target.focus();
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <SearchContainer>
      <SearchWrapper>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <SearchInput
          type="text"
          placeholder="Search..."
          onChange={(e) => onSearch?.(e.target.value)}
        />
        <ShortcutKey>
          <KeyboardKey>{navigator.platform.includes('Mac') ? '⌘' : 'Ctrl'}</KeyboardKey>
          <KeyboardKey>K</KeyboardKey>
        </ShortcutKey>
      </SearchWrapper>
    </SearchContainer>
  );
};

export default Input; 