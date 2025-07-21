import React, { useEffect } from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  animation: fadeIn 0.2s ease-out;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContent = styled.div`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  max-width: ${props => props.size === 'large' ? '800px' : props.size === 'small' ? '400px' : '600px'};
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  animation: slideIn 0.3s ease-out;
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-20px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

const ModalHeader = styled.div`
  padding: 24px 24px 0 24px;
  border-bottom: ${props => props.showBorder ? '1px solid #e5e7eb' : 'none'};
  margin-bottom: ${props => props.showBorder ? '0' : '16px'};
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #111827;
`;

const ModalSubtitle = styled.p`
  margin: 8px 0 0 0;
  font-size: 14px;
  color: #6b7280;
`;

const ModalBody = styled.div`
  padding: 24px;
`;

const ModalFooter = styled.div`
  padding: 0 24px 24px 24px;
  display: flex;
  gap: 12px;
  justify-content: ${props => props.align || 'flex-end'};
  
  ${props => props.showBorder && `
    border-top: 1px solid #e5e7eb;
    padding-top: 20px;
    margin-top: 16px;
  `}
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  color: #6b7280;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f3f4f6;
    color: #374151;
  }
`;

const Modal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  size = 'medium',
  showCloseButton = true,
  showBorder = true,
  footer,
  footerAlign = 'flex-end',
  ...props
}) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <ModalOverlay onClick={onClose}>
      <ModalContent size={size} onClick={(e) => e.stopPropagation()} {...props}>
        {(title || subtitle) && (
          <ModalHeader showBorder={showBorder}>
            {title && <ModalTitle>{title}</ModalTitle>}
            {subtitle && <ModalSubtitle>{subtitle}</ModalSubtitle>}
          </ModalHeader>
        )}
        
        <ModalBody>
          {children}
        </ModalBody>
        
        {footer && (
          <ModalFooter align={footerAlign} showBorder={showBorder}>
            {footer}
          </ModalFooter>
        )}
        
        {showCloseButton && (
          <CloseButton onClick={onClose} aria-label="Close modal">
            ×
          </CloseButton>
        )}
      </ModalContent>
    </ModalOverlay>
  );

  return createPortal(modalContent, document.body);
};

export default Modal; 