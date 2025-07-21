import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  /* Size variants */
  ${props => {
    switch (props.size) {
      case 'small':
        return `
          padding: 8px 16px;
          font-size: 14px;
          min-height: 36px;
        `;
      case 'large':
        return `
          padding: 16px 32px;
          font-size: 16px;
          min-height: 52px;
        `;
      default: // medium
        return `
          padding: 12px 24px;
          font-size: 14px;
          min-height: 44px;
        `;
    }
  }}
  
  /* Variant styles */
  ${props => {
    switch (props.variant) {
      case 'secondary':
        return `
          background-color: #f3f4f6;
          color: #374151;
          border: 1px solid #d1d5db;
          
          &:hover:not(:disabled) {
            background-color: #e5e7eb;
            border-color: #9ca3af;
          }
          
          &:active:not(:disabled) {
            background-color: #d1d5db;
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          color: #2563eb;
          border: 1px solid #2563eb;
          
          &:hover:not(:disabled) {
            background-color: #eff6ff;
          }
          
          &:active:not(:disabled) {
            background-color: #dbeafe;
          }
        `;
      case 'ghost':
        return `
          background-color: transparent;
          color: #374151;
          border: 1px solid transparent;
          
          &:hover:not(:disabled) {
            background-color: #f3f4f6;
          }
          
          &:active:not(:disabled) {
            background-color: #e5e7eb;
          }
        `;
      case 'danger':
        return `
          background-color: #dc2626;
          color: white;
          border: 1px solid #dc2626;
          
          &:hover:not(:disabled) {
            background-color: #b91c1c;
            border-color: #b91c1c;
          }
          
          &:active:not(:disabled) {
            background-color: #991b1b;
          }
        `;
      default: // primary
        return `
          background-color: #2563eb;
          color: white;
          border: 1px solid #2563eb;
          
          &:hover:not(:disabled) {
            background-color: #1d4ed8;
            border-color: #1d4ed8;
          }
          
          &:active:not(:disabled) {
            background-color: #1e40af;
          }
        `;
    }
  }}
`;

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false,
  onClick,
  type = 'button',
  ...props 
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button; 