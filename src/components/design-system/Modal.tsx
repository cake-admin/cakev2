import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { createPortal } from 'react-dom';
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';
import { fontStack } from '../../styles/globalStyles';
import { getTokenColor } from '../../tokens/colorTokens';
import Button, { BUTTON_VARIANTS, BUTTON_STYLES } from './Button';

// Animation keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

// Status types for ConfirmationModal
export const MODAL_STATUS = {
  INFO: 'Info',
  SUCCESS: 'Success',
  WARNING: 'Warning',
  ERROR: 'Error'
} as const;

export type ModalStatus = typeof MODAL_STATUS[keyof typeof MODAL_STATUS];

// Common interfaces
interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme?: 'light.a' | 'dark.a';
  className?: string;
  closeOnOverlayClick?: boolean;
}

// BasicModal Props
export interface BasicModalProps extends BaseModalProps {
  header: string;
  subtitle?: string;
  copy?: string;
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  primaryButtonDisabled?: boolean;
  secondaryButtonDisabled?: boolean;
}

// ConfirmationModal Props
export interface ConfirmationModalProps extends BaseModalProps {
  title: string;
  body: string;
  status?: ModalStatus;
  showCheckbox?: boolean;
  checkboxLabel?: string;
  checkboxChecked?: boolean;
  onCheckboxChange?: (checked: boolean) => void;
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  primaryButtonDisabled?: boolean;
  secondaryButtonDisabled?: boolean;
}

// Styled Components
const ModalOverlay = styled.div<{ $theme?: string }>`
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
  animation: ${fadeIn} 0.2s ease-out;
`;

const ModalContainer = styled.div<{ $theme?: string }>`
  background-color: ${props => getTokenColor('surface.card', props.$theme || 'light.a')};
  border: 1px solid ${props => getTokenColor('menu.border.zero', props.$theme || 'light.a')};
  border-radius: 16px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  max-width: 662px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: ${slideIn} 0.3s ease-out;
  position: relative;
`;

const ConfirmationModalContainer = styled.div<{ $theme?: string }>`
  background-color: ${props => getTokenColor('surface.card', props.$theme || 'light.a')};
  border: 1px solid ${props => getTokenColor('menu.border.zero', props.$theme || 'light.a')};
  border-radius: 16px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  max-width: 526px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: ${slideIn} 0.3s ease-out;
  position: relative;
`;

// BasicModal Header
const BasicModalHeader = styled.div<{ $theme?: string }>`
  background-color: ${props => getTokenColor('surface.card', props.$theme || 'light.a')};
  border-bottom: 1px solid ${props => getTokenColor('border.default', props.$theme || 'light.a')};
  box-sizing: border-box;
  display: flex;
  height: 80px;
  align-items: center;
  padding: 0 16px 0 24px;
  gap: 16px;
  flex-shrink: 0;
`;

const HeaderTitle = styled.h2<{ $theme?: string }>`
  flex: 1;
  font-family: ${fontStack};
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: ${props => getTokenColor('text.primary', props.$theme || 'light.a')};
  margin: 0;
`;

const CloseButton = styled.button<{ $theme?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 100px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${props => getTokenColor('text.primary', props.$theme || 'light.a')};
  padding: 0;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${props => {
      const theme = props.$theme || 'light.a';
      return theme === 'dark.a' 
        ? getTokenColor('menu.surface.itemHover', theme)
        : getTokenColor('menu.surface.itemHover', theme);
    }};
  }
  
  &:focus {
    outline: 2px solid ${props => getTokenColor('border.focus', props.$theme || 'light.a')};
    outline-offset: 2px;
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

// BasicModal Content
const BasicModalContent = styled.div<{ $theme?: string }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 32px;
  padding-bottom: 40px;
  flex-shrink: 0;
`;

const Subtitle = styled.h3<{ $theme?: string }>`
  font-family: ${fontStack};
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  color: ${props => getTokenColor('text.primary', props.$theme || 'light.a')};
  margin: 0;
`;

const CopyText = styled.p<{ $theme?: string }>`
  font-family: ${fontStack};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${props => getTokenColor('text.secondary', props.$theme || 'light.a')};
  margin: 0;
`;

// BasicModal Footer
const BasicModalFooter = styled.div<{ $theme?: string }>`
  border-top: 1px solid ${props => getTokenColor('border.default', props.$theme || 'light.a')};
  box-sizing: border-box;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: flex-end;
  padding: 24px 32px;
  flex-shrink: 0;
`;

// ConfirmationModal Content
const ConfirmationModalContent = styled.div<{ $theme?: string }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
`;

const ConfirmationHeader = styled.div<{ $theme?: string }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TitleRow = styled.div<{ $theme?: string }>`
  display: flex;
  gap: 12px;
  align-items: flex-start;
`;

const StatusIconWrapper = styled.div<{ $status: ModalStatus; $theme?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  color: ${props => {
    const theme = props.$theme || 'light.a';
    switch (props.$status) {
      case MODAL_STATUS.INFO:
        return getTokenColor('alert.info.icon', theme);
      case MODAL_STATUS.SUCCESS:
        return getTokenColor('alert.success.icon', theme);
      case MODAL_STATUS.WARNING:
        return getTokenColor('alert.warning.icon', theme);
      case MODAL_STATUS.ERROR:
        return getTokenColor('alert.error.icon', theme);
      default:
        return getTokenColor('alert.info.icon', theme);
    }
  }};
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const ConfirmationTitle = styled.h2<{ $theme?: string }>`
  flex: 1;
  font-family: ${fontStack};
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: ${props => getTokenColor('text.primary', props.$theme || 'light.a')};
  margin: 0;
`;

const ConfirmationBody = styled.div<{ $theme?: string }>`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

const BodyText = styled.p<{ $theme?: string }>`
  flex: 1;
  font-family: ${fontStack};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${props => getTokenColor('text.secondary', props.$theme || 'light.a')};
  margin: 0;
`;

const CheckboxContainer = styled.div<{ $theme?: string }>`
  box-sizing: border-box;
  display: flex;
  gap: 8px;
  align-items: center;
  height: 24px;
  padding: 0 4px;
  border-radius: 4px;
`;

const CheckboxInput = styled.input<{ $theme?: string }>`
  width: 16px;
  height: 16px;
  margin: 0;
  cursor: pointer;
  accent-color: ${props => getTokenColor('checkbox.border.checked', props.$theme || 'light.a')};
`;

const CheckboxLabel = styled.label<{ $theme?: string }>`
  font-family: ${fontStack};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: ${props => getTokenColor('text.primary', props.$theme || 'light.a')};
  cursor: pointer;
  user-select: none;
`;

const ConfirmationFooter = styled.div<{ $theme?: string }>`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: flex-end;
`;

// Helper function to get status icon
const getStatusIcon = (status: ModalStatus) => {
  switch (status) {
    case MODAL_STATUS.INFO:
      return <InfoIcon />;
    case MODAL_STATUS.SUCCESS:
      return <CheckCircleIcon />;
    case MODAL_STATUS.WARNING:
      return <WarningIcon />;
    case MODAL_STATUS.ERROR:
      return <ErrorIcon />;
    default:
      return <InfoIcon />;
  }
};

// BasicModal Component
export const BasicModal: React.FC<BasicModalProps> = ({
  isOpen,
  onClose,
  header,
  subtitle,
  copy,
  primaryButtonLabel = 'Primary',
  secondaryButtonLabel = 'Secondary',
  onPrimaryClick,
  onSecondaryClick,
  primaryButtonDisabled = false,
  secondaryButtonDisabled = false,
  theme = 'light.a',
  className,
  closeOnOverlayClick = true
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      // Store the previously focused element
      previousActiveElement.current = document.activeElement as HTMLElement;
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      
      // Focus the modal
      if (modalRef.current) {
        modalRef.current.focus();
      }
    } else {
      // Restore body scroll
      document.body.style.overflow = 'unset';
      
      // Return focus to the previously focused element
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isOpen, onClose]);

  // Focus trap
  useEffect(() => {
    if (!isOpen) return;

    const modal = modalRef.current;
    if (!modal) return;

    const focusableElements = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    return () => {
      document.removeEventListener('keydown', handleTabKey);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const isDarkMode = theme === 'dark.a';

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  const handlePrimaryClick = () => {
    if (onPrimaryClick) {
      onPrimaryClick();
    } else {
      onClose();
    }
  };

  const handleSecondaryClick = () => {
    if (onSecondaryClick) {
      onSecondaryClick();
    } else {
      onClose();
    }
  };

  const modalContent = (
    <ModalOverlay 
      $theme={theme}
      onClick={handleOverlayClick}
      aria-modal="true"
      role="dialog"
    >
      <ModalContainer
        ref={modalRef}
        $theme={theme}
        className={className}
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
        aria-labelledby="basic-modal-title"
        aria-describedby={subtitle || copy ? "basic-modal-description" : undefined}
      >
        <BasicModalHeader $theme={theme}>
          <HeaderTitle id="basic-modal-title" $theme={theme}>
            {header}
          </HeaderTitle>
          <CloseButton
            $theme={theme}
            onClick={onClose}
            aria-label="Close modal"
            type="button"
          >
            <CloseIcon />
          </CloseButton>
        </BasicModalHeader>

        <BasicModalContent $theme={theme}>
          {subtitle && (
            <Subtitle id="basic-modal-description" $theme={theme}>
              {subtitle}
            </Subtitle>
          )}
          {copy && (
            <CopyText id={!subtitle ? "basic-modal-description" : undefined} $theme={theme}>
              {copy}
            </CopyText>
          )}
        </BasicModalContent>

        <BasicModalFooter $theme={theme}>
          <Button
            variant={BUTTON_VARIANTS.SECONDARY}
            label={secondaryButtonLabel}
            onClick={handleSecondaryClick}
            disabled={secondaryButtonDisabled}
            isDarkMode={isDarkMode}
            buttonStyle={BUTTON_STYLES.PILL}
            size="medium"
          />
          <Button
            variant={BUTTON_VARIANTS.PRIMARY}
            label={primaryButtonLabel}
            onClick={handlePrimaryClick}
            disabled={primaryButtonDisabled}
            isDarkMode={isDarkMode}
            buttonStyle={BUTTON_STYLES.PILL}
            size="medium"
          />
        </BasicModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );

  return createPortal(modalContent, document.body);
};

// ConfirmationModal Component
export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  title,
  body,
  status = MODAL_STATUS.INFO,
  showCheckbox = false,
  checkboxLabel = 'Do not show again',
  checkboxChecked = false,
  onCheckboxChange,
  primaryButtonLabel = 'Primary',
  secondaryButtonLabel = 'Secondary',
  onPrimaryClick,
  onSecondaryClick,
  primaryButtonDisabled = false,
  secondaryButtonDisabled = false,
  theme = 'light.a',
  className,
  closeOnOverlayClick = true
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const [localCheckboxChecked, setLocalCheckboxChecked] = useState(checkboxChecked);

  useEffect(() => {
    setLocalCheckboxChecked(checkboxChecked);
  }, [checkboxChecked]);

  useEffect(() => {
    if (isOpen) {
      // Store the previously focused element
      previousActiveElement.current = document.activeElement as HTMLElement;
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      
      // Focus the modal
      if (modalRef.current) {
        modalRef.current.focus();
      }
    } else {
      // Restore body scroll
      document.body.style.overflow = 'unset';
      
      // Return focus to the previously focused element
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isOpen, onClose]);

  // Focus trap
  useEffect(() => {
    if (!isOpen) return;

    const modal = modalRef.current;
    if (!modal) return;

    const focusableElements = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    return () => {
      document.removeEventListener('keydown', handleTabKey);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const isDarkMode = theme === 'dark.a';

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  const handlePrimaryClick = () => {
    if (onPrimaryClick) {
      onPrimaryClick();
    } else {
      onClose();
    }
  };

  const handleSecondaryClick = () => {
    if (onSecondaryClick) {
      onSecondaryClick();
    } else {
      onClose();
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setLocalCheckboxChecked(checked);
    onCheckboxChange?.(checked);
  };

  const modalContent = (
    <ModalOverlay 
      $theme={theme}
      onClick={handleOverlayClick}
      aria-modal="true"
      role="dialog"
    >
      <ConfirmationModalContainer
        ref={modalRef}
        $theme={theme}
        className={className}
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
        aria-labelledby="confirmation-modal-title"
        aria-describedby="confirmation-modal-description"
      >
        <ConfirmationModalContent $theme={theme}>
          <ConfirmationHeader $theme={theme}>
            <TitleRow $theme={theme}>
              <StatusIconWrapper $status={status} $theme={theme}>
                {getStatusIcon(status)}
              </StatusIconWrapper>
              <ConfirmationTitle id="confirmation-modal-title" $theme={theme}>
                {title}
              </ConfirmationTitle>
            </TitleRow>
            <ConfirmationBody $theme={theme}>
              <BodyText id="confirmation-modal-description" $theme={theme}>
                {body}
              </BodyText>
            </ConfirmationBody>
            {showCheckbox && (
              <CheckboxContainer $theme={theme}>
                <CheckboxInput
                  type="checkbox"
                  id="confirmation-checkbox"
                  checked={localCheckboxChecked}
                  onChange={handleCheckboxChange}
                  $theme={theme}
                />
                <CheckboxLabel htmlFor="confirmation-checkbox" $theme={theme}>
                  {checkboxLabel}
                </CheckboxLabel>
              </CheckboxContainer>
            )}
          </ConfirmationHeader>
          <ConfirmationFooter $theme={theme}>
            <Button
              variant={BUTTON_VARIANTS.SECONDARY}
              label={secondaryButtonLabel}
              onClick={handleSecondaryClick}
              disabled={secondaryButtonDisabled}
              isDarkMode={isDarkMode}
              buttonStyle={BUTTON_STYLES.PILL}
              size="medium"
            />
            <Button
              variant={BUTTON_VARIANTS.PRIMARY}
              label={primaryButtonLabel}
              onClick={handlePrimaryClick}
              disabled={primaryButtonDisabled}
              isDarkMode={isDarkMode}
              buttonStyle={BUTTON_STYLES.PILL}
              size="medium"
            />
          </ConfirmationFooter>
        </ConfirmationModalContent>
      </ConfirmationModalContainer>
    </ModalOverlay>
  );

  return createPortal(modalContent, document.body);
};

// Default export with both components
const Modal = {
  Basic: BasicModal,
  Confirmation: ConfirmationModal
};

export default Modal;

