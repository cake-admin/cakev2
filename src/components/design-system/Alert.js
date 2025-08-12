import React, { forwardRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colorData from '../../data/colors.json';

/**
 * Alert types
 */
const ALERT_TYPES = {
  TOAST: 'toast',
  INLINE: 'inline'
};

/**
 * Alert variants
 */
const ALERT_VARIANTS = {
  SIMPLE: 'simple',
  ADVANCED: 'advanced'
};

/**
 * Alert severities
 */
const ALERT_SEVERITIES = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  INFO: 'info'
};

/**
 * Alert themes
 */
const ALERT_THEMES = {
  LIGHT: 'light.a',
  DARK: 'dark.a'
};

/**
 * Alert positions (for toast)
 */
const ALERT_POSITIONS = {
  TOP_RIGHT: 'top-right',
  TOP_LEFT: 'top-left',
  BOTTOM_RIGHT: 'bottom-right',
  BOTTOM_LEFT: 'bottom-left',
  TOP_CENTER: 'top-center',
  BOTTOM_CENTER: 'bottom-center'
};

const getAlertColors = (severity, theme) => {
  const isDark = theme === ALERT_THEMES.DARK;
  
  const severityColors = {
    [ALERT_SEVERITIES.SUCCESS]: {
      light: {
        background: '#F0FDF4',
        border: '#BBF7D0',
        icon: '#16A34A',
        text: '#166534'
      },
      dark: {
        background: '#052e16',
        border: '#166534',
        icon: '#4ADE80',
        text: '#BBF7D0'
      }
    },
    [ALERT_SEVERITIES.WARNING]: {
      light: {
        background: '#FFFBEB',
        border: '#FDE68A',
        icon: '#D97706',
        text: '#92400E'
      },
      dark: {
        background: '#451a03',
        border: '#92400E',
        icon: '#FBBF24',
        text: '#FDE68A'
      }
    },
    [ALERT_SEVERITIES.ERROR]: {
      light: {
        background: '#FEF2F2',
        border: '#FECACA',
        icon: '#DC2626',
        text: '#991B1B'
      },
      dark: {
        background: '#450a0a',
        border: '#991B1B',
        icon: '#F87171',
        text: '#FECACA'
      }
    },
    [ALERT_SEVERITIES.INFO]: {
      light: {
        background: '#EFF6FF',
        border: '#BFDBFE',
        icon: '#2563EB',
        text: '#1E40AF'
      },
      dark: {
        background: '#0c4a6e',
        border: '#1E40AF',
        icon: '#60A5FA',
        text: '#BFDBFE'
      }
    }
  };

  return isDark ? severityColors[severity].dark : severityColors[severity].light;
};

const getSeverityIcon = (severity) => {
  const icons = {
    [ALERT_SEVERITIES.SUCCESS]: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    ),
    [ALERT_SEVERITIES.WARNING]: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    [ALERT_SEVERITIES.ERROR]: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
    ),
    [ALERT_SEVERITIES.INFO]: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    )
  };
  
  return icons[severity];
};

const AlertContainer = styled.div`
  position: ${props => props.type === ALERT_TYPES.TOAST ? 'fixed' : 'relative'};
  ${props => props.type === ALERT_TYPES.TOAST && `
    z-index: 1000;
    ${props.position.includes('top') ? 'top: 20px;' : 'bottom: 20px;'}
    ${props.position.includes('left') ? 'left: 20px;' : props.position.includes('right') ? 'right: 20px;' : 'left: 50%; transform: translateX(-50%);'}
  `}
  
  background: ${props => getAlertColors(props.severity, props.theme).background};
  border: 1px solid ${props => getAlertColors(props.severity, props.theme).border};
  border-radius: 8px;
  padding: ${props => props.variant === ALERT_VARIANTS.SIMPLE ? '12px 16px' : '16px'};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  max-width: ${props => props.type === ALERT_TYPES.TOAST ? '400px' : '100%'};
  min-width: ${props => props.type === ALERT_TYPES.TOAST ? '300px' : 'auto'};
  
  ${props => props.type === ALERT_TYPES.TOAST && `
    animation: slideIn 0.3s ease-out;
    
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: ${props.position.includes('top') ? 'translateY(-100%)' : 'translateY(100%)'} ${props.position.includes('center') ? 'translateX(-50%)' : ''};
      }
      to {
        opacity: 1;
        transform: ${props.position.includes('center') ? 'translateX(-50%)' : 'translateY(0)'};
      }
    }
  `}
  
  ${props => props.isExiting && props.type === ALERT_TYPES.TOAST && `
    animation: slideOut 0.3s ease-in;
    
    @keyframes slideOut {
      from {
        opacity: 1;
        transform: ${props.position.includes('center') ? 'translateX(-50%)' : 'translateY(0)'};
      }
      to {
        opacity: 0;
        transform: ${props.position.includes('top') ? 'translateY(-100%)' : 'translateY(100%)'} ${props.position.includes('center') ? 'translateX(-50%)' : ''};
      }
    }
  `}
`;

const AlertContent = styled.div`
  display: flex;
  align-items: ${props => props.variant === ALERT_VARIANTS.SIMPLE ? 'center' : 'flex-start'};
  gap: 12px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => getAlertColors(props.severity, props.theme).icon};
  flex-shrink: 0;
`;

const TextContainer = styled.div`
  flex: 1;
  min-width: 0;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.4;
  color: ${props => getAlertColors(props.severity, props.theme).text};
  margin-bottom: ${props => props.variant === ALERT_VARIANTS.ADVANCED ? '4px' : '0'};
`;

const Message = styled.div`
  font-size: 14px;
  line-height: 1.4;
  color: ${props => getAlertColors(props.severity, props.theme).text};
  opacity: 0.9;
`;

const ActionsContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: ${props => props.variant === ALERT_VARIANTS.ADVANCED ? '12px' : '0'};
  flex-wrap: wrap;
`;

const ActionButton = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  ${props => props.variant === 'primary' && `
    background: #3B82F6;
    color: white;
    
    &:hover {
      background: #2563EB;
    }
  `}
  
  ${props => props.variant === 'secondary' && `
    background: transparent;
    color: ${props => getAlertColors(props.severity, props.theme).text};
    border: 1px solid ${props => getAlertColors(props.severity, props.theme).border};
    
    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  `}
  
  ${props => props.variant === 'tertiary' && `
    background: transparent;
    color: ${props => getAlertColors(props.severity, props.theme).text};
    
    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  `}
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  color: ${props => getAlertColors(props.severity, props.theme).text};
  opacity: 0.7;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 1;
    background: rgba(0, 0, 0, 0.05);
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const Timestamp = styled.div`
  font-size: 12px;
  color: ${props => getAlertColors(props.severity, props.theme).text};
  opacity: 0.7;
  margin-top: ${props => props.variant === ALERT_VARIANTS.ADVANCED ? '8px' : '0'};
`;

const Alert = forwardRef(({
  type = ALERT_TYPES.INLINE,
  variant = ALERT_VARIANTS.SIMPLE,
  severity = ALERT_SEVERITIES.INFO,
  theme = ALERT_THEMES.LIGHT,
  position = ALERT_POSITIONS.TOP_RIGHT,
  title,
  message,
  dismissible = false,
  autoDismiss = false,
  autoDismissTime = 5000,
  onDismiss,
  onAction,
  actions = [],
  timestamp,
  className,
  ...props
}, ref) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [timeLeft, setTimeLeft] = useState(autoDismissTime);

  useEffect(() => {
    if (autoDismiss && type === ALERT_TYPES.TOAST) {
      const timer = setTimeout(() => {
        handleDismiss();
      }, autoDismissTime);
      
      return () => clearTimeout(timer);
    }
  }, [autoDismiss, autoDismissTime, type]);

  useEffect(() => {
    if (autoDismiss && type === ALERT_TYPES.TOAST) {
      const interval = setInterval(() => {
        setTimeLeft(prev => Math.max(0, prev - 100));
      }, 100);
      
      return () => clearInterval(interval);
    }
  }, [autoDismiss, type]);

  const handleDismiss = () => {
    if (type === ALERT_TYPES.TOAST) {
      setIsExiting(true);
      setTimeout(() => {
        setIsVisible(false);
        onDismiss?.();
      }, 300);
    } else {
      setIsVisible(false);
      onDismiss?.();
    }
  };

  const handleAction = (action) => {
    onAction?.(action);
  };

  if (!isVisible) {
    return null;
  }

  const colors = getAlertColors(severity, theme);

  return (
    <AlertContainer
      ref={ref}
      type={type}
      variant={variant}
      severity={severity}
      theme={theme}
      position={position}
      isExiting={isExiting}
      className={className}
      role="alert"
      aria-live={type === ALERT_TYPES.TOAST ? "polite" : "assertive"}
      {...props}
    >
      <AlertContent variant={variant}>
        <IconContainer severity={severity} theme={theme}>
          {getSeverityIcon(severity)}
        </IconContainer>
        
        <TextContainer>
          {title && <Title variant={variant} severity={severity} theme={theme}>{title}</Title>}
          {message && <Message severity={severity} theme={theme}>{message}</Message>}
          
          {variant === ALERT_VARIANTS.ADVANCED && actions.length > 0 && (
            <ActionsContainer variant={variant}>
              {actions.map((action, index) => (
                <ActionButton
                  key={index}
                  variant={action.variant || 'secondary'}
                  severity={severity}
                  theme={theme}
                  onClick={() => handleAction(action)}
                >
                  {action.label}
                </ActionButton>
              ))}
            </ActionsContainer>
          )}
          
          {variant === ALERT_VARIANTS.ADVANCED && timestamp && (
            <Timestamp variant={variant} severity={severity} theme={theme}>
              {timestamp}
            </Timestamp>
          )}
        </TextContainer>
      </AlertContent>
      
      {dismissible && (
        <CloseButton
          severity={severity}
          theme={theme}
          onClick={handleDismiss}
          aria-label="Close alert"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </CloseButton>
      )}
    </AlertContainer>
  );
});

Alert.displayName = 'Alert';

Alert.propTypes = {
  type: PropTypes.oneOf(Object.values(ALERT_TYPES)),
  variant: PropTypes.oneOf(Object.values(ALERT_VARIANTS)),
  severity: PropTypes.oneOf(Object.values(ALERT_SEVERITIES)),
  theme: PropTypes.oneOf(Object.values(ALERT_THEMES)),
  position: PropTypes.oneOf(Object.values(ALERT_POSITIONS)),
  title: PropTypes.string,
  message: PropTypes.string,
  dismissible: PropTypes.bool,
  autoDismiss: PropTypes.bool,
  autoDismissTime: PropTypes.number,
  onDismiss: PropTypes.func,
  onAction: PropTypes.func,
  actions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
    onClick: PropTypes.func
  })),
  timestamp: PropTypes.string,
  className: PropTypes.string
};

export default Alert;
export {
  ALERT_TYPES,
  ALERT_VARIANTS,
  ALERT_SEVERITIES,
  ALERT_THEMES,
  ALERT_POSITIONS
};
