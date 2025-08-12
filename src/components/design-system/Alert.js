import React, { forwardRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colorData from '../../data/colors.json';
import Button, { BUTTON_VARIANTS, TEXT_VARIANTS, ICON_VARIANTS, ICON_POSITIONS } from './Button';
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';

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
        background: '#FFFFFF',
        border: '#047857',
        icon: '#047857',
        text: '#0F172A',
        metadata: '#334155'
      },
      dark: {
        background: '#27272A',
        border: '#34D399',
        icon: '#34D399',
        text: '#D4D4D8',
        metadata: '#A1A1AA'
      }
    },
    [ALERT_SEVERITIES.WARNING]: {
      light: {
        background: '#FFFFFF',
        border: '#C2410C',
        icon: '#C2410C',
        text: '#0F172A',
        metadata: '#334155'
      },
      dark: {
        background: '#27272A',
        border: '#FDBA74',
        icon: '#FDBA74',
        text: '#D4D4D8',
        metadata: '#A1A1AA'
      }
    },
    [ALERT_SEVERITIES.ERROR]: {
      light: {
        background: '#FFFFFF',
        border: '#B91C1C',
        icon: '#B91C1C',
        text: '#0F172A',
        metadata: '#334155'
      },
      dark: {
        background: '#27272A',
        border: '#FCA5A5',
        icon: '#FCA5A5',
        text: '#D4D4D8',
        metadata: '#A1A1AA'
      }
    },
    [ALERT_SEVERITIES.INFO]: {
      light: {
        background: '#FFFFFF',
        border: '#1D4ED8',
        icon: '#1D4ED8',
        text: '#0F172A',
        metadata: '#334155'
      },
      dark: {
        background: '#27272A',
        border: '#60A5FA',
        icon: '#60A5FA',
        text: '#D4D4D8',
        metadata: '#A1A1AA'
      }
    }
  };

  return isDark ? severityColors[severity].dark : severityColors[severity].light;
};

const getSeverityIcon = (severity) => {
  const icons = {
    [ALERT_SEVERITIES.SUCCESS]: <CheckCircleIcon style={{ width: '24px', height: '24px', fill: 'currentColor' }} />,
    [ALERT_SEVERITIES.WARNING]: <WarningIcon style={{ width: '24px', height: '24px', fill: 'currentColor' }} />,
    [ALERT_SEVERITIES.ERROR]: <ErrorIcon style={{ width: '24px', height: '24px', fill: 'currentColor' }} />,
    [ALERT_SEVERITIES.INFO]: <InfoIcon style={{ width: '24px', height: '24px', fill: 'currentColor' }} />
  };
  
  return icons[severity];
};

const AlertContainer = styled.div`
  position: ${props => props.type === ALERT_TYPES.TOAST ? 'fixed' : 'relative'};
  ${props => props.type === ALERT_TYPES.TOAST && `
    z-index: 1000;
    ${props.position === 'top-left' ? 'left: 20px;' : 
      props.position === 'top-right' ? 'right: 20px;' : 
      props.position === 'top-center' ? 'left: 20px; right: 20px;' :
      props.position === 'bottom-left' ? 'left: 20px;' :
      props.position === 'bottom-right' ? 'right: 20px;' :
      props.position === 'bottom-center' ? 'left: 20px; right: 20px;' :
      'left: 20px; right: 20px;'}
    ${props.position.includes('top') ? 'top: 20px;' : 'bottom: 20px;'}
    
    @media (min-width: 769px) {
      ${props.position === 'top-center' ? 'left: 50%; right: auto; transform: translateX(-50%);' : ''}
      ${props.position === 'bottom-center' ? 'left: 50%; right: auto; transform: translateX(-50%);' : ''}
    }
  `}
  
  background: ${props => getAlertColors(props.severity, props.theme).background};
  border: none;
  border-radius: 4px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${props => props.variant === ALERT_VARIANTS.ADVANCED ? getAlertColors(props.severity, props.theme).icon : props.variant === ALERT_VARIANTS.SIMPLE ? getAlertColors(props.severity, props.theme).icon : getAlertColors(props.severity, props.theme).border};
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  padding: ${props => props.variant === ALERT_VARIANTS.SIMPLE ? '12px 16px' : '16px'};
  box-shadow: 0px 8px 12px 6px rgba(0, 0, 0, 0.15);
  max-width: 512px;
  min-width: ${props => props.type === ALERT_TYPES.TOAST ? '320px' : 'auto'};
  
  /* Responsive styling for toast alerts */
  ${props => props.type === ALERT_TYPES.TOAST && `
    @media (max-width: 768px) {
      min-width: 280px;
      max-width: calc(100vw - 40px);
      margin: 0 20px;
    }
    
    @media (max-width: 480px) {
      min-width: 260px;
      max-width: calc(100vw - 32px);
      margin: 0 16px;
      padding: ${props.variant === ALERT_VARIANTS.SIMPLE ? '10px 12px' : '14px'};
    }
  `}
  
  ${props => props.type === ALERT_TYPES.TOAST && `
    animation: slideIn${props.position.replace('-', '')} 0.3s ease-out;
    
    @keyframes slideIn${props.position.replace('-', '')} {
      from {
        opacity: 0;
        transform: ${props.position === 'top-left' ? 'translateX(-100%)' : 
          props.position === 'top-right' ? 'translateX(100%)' : 
          props.position === 'top-center' ? 'translateY(-100%) translateX(-50%)' :
          props.position === 'bottom-left' ? 'translateX(-100%)' :
          props.position === 'bottom-right' ? 'translateX(100%)' :
          props.position === 'bottom-center' ? 'translateY(100%) translateX(-50%)' :
          'translateY(100%) translateX(-50%)'};
      }
      to {
        opacity: 1;
        transform: ${props.position === 'top-center' || props.position === 'bottom-center' ? 'translateX(-50%)' : 'translateY(0) translateX(0)'};
      }
    }
  `}
  
  ${props => props.isExiting && props.type === ALERT_TYPES.TOAST && `
    animation: slideOut${props.position.replace('-', '')} 0.3s ease-in;
    
    @keyframes slideOut${props.position.replace('-', '')} {
      from {
        opacity: 1;
        transform: ${props.position === 'top-center' || props.position === 'bottom-center' ? 'translateX(-50%)' : 'translateY(0) translateX(0)'};
      }
      to {
        opacity: 0;
        transform: ${props.position === 'top-left' ? 'translateX(-100%)' : 
          props.position === 'top-right' ? 'translateX(100%)' : 
          props.position === 'top-center' ? 'translateY(-100%) translateX(-50%)' :
          props.position === 'bottom-left' ? 'translateX(-100%)' :
          props.position === 'bottom-right' ? 'translateX(100%)' :
          props.position === 'bottom-center' ? 'translateY(100%) translateX(-50%)' :
          'translateY(100%) translateX(-50%)'};
      }
    }
  `}
`;

const AlertContent = styled.div`
  display: flex;
  align-items: ${props => props.variant === ALERT_VARIANTS.SIMPLE ? 'center' : 'flex-start'};
  gap: 16px;
  
  /* Responsive styling for smaller screens */
  @media (max-width: 480px) {
    gap: 12px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.variant === ALERT_VARIANTS.SIMPLE ? getAlertColors(props.severity, props.theme).icon : getAlertColors(props.severity, props.theme).icon};
  background: transparent;
  border-radius: 0;
  width: auto;
  height: auto;
  flex-shrink: 0;
`;

const TextContainer = styled.div`
  flex: 1;
  min-width: 0;
  display: ${props => props.variant === ALERT_VARIANTS.SIMPLE ? 'flex' : 'block'};
  align-items: ${props => props.variant === ALERT_VARIANTS.SIMPLE ? 'center' : 'flex-start'};
  gap: ${props => props.variant === ALERT_VARIANTS.SIMPLE ? '16px' : '0'};
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.4;
  color: ${props => getAlertColors(props.severity, props.theme).text};
  margin-bottom: ${props => props.variant === ALERT_VARIANTS.ADVANCED ? '4px' : '0'};
  margin-top: ${props => props.variant === ALERT_VARIANTS.SIMPLE ? '2px' : '0'};
`;

const Message = styled.div`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.4;
  color: ${props => getAlertColors(props.severity, props.theme).text};
  opacity: ${props => props.variant === ALERT_VARIANTS.ADVANCED ? '1' : '0.9'};
`;

const ActionsContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: ${props => props.variant === ALERT_VARIANTS.ADVANCED ? '12px' : '0'};
  flex-wrap: wrap;
  margin-left: ${props => props.variant === ALERT_VARIANTS.SIMPLE ? 'auto' : props.variant === ALERT_VARIANTS.ADVANCED ? '-20px' : '0'};
`;

const ActionButton = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  ${props => props.variant === 'primary' && `
    background: transparent;
    color: ${props => props.isAdvanced ? '#3B82F6' : props => props.isSimple ? '#2563EB' : '#3B82F6'};
    
    &:hover {
      background: ${props => props.isAdvanced ? 'rgba(59, 130, 246, 0.05)' : props => props.isSimple ? 'rgba(37, 99, 235, 0.05)' : 'rgba(59, 130, 246, 0.05)'};
    }
  `}
  
  ${props => props.variant === 'secondary' && `
    background: transparent;
    color: ${props => props.isAdvanced ? '#475569' : props => props.isSimple ? '#4B5563' : getAlertColors(props.severity, props.theme).text};
    border: none;
    
    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  `}
  
  ${props => props.variant === 'tertiary' && `
    background: transparent;
    color: ${props => props.isAdvanced ? '#475569' : props => props.isSimple ? '#4B5563' : getAlertColors(props.severity, props.theme).text};
    
    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  `}
`;



const Timestamp = styled.div`
  font-size: 12px;
  color: ${props => getAlertColors(props.severity, props.theme).metadata};
  opacity: ${props => props.variant === ALERT_VARIANTS.ADVANCED ? '1' : '0.7'};
  margin-top: ${props => props.variant === ALERT_VARIANTS.ADVANCED ? '16px' : '0'};
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
  keepVisible = false,
  ...props
}, ref) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [timeLeft, setTimeLeft] = useState(autoDismissTime);
  const [isHovered, setIsHovered] = useState(false);
  const [isDismissing, setIsDismissing] = useState(false);
  const [currentTimestamp, setCurrentTimestamp] = useState('');

  // Reset animation states when component mounts (for fresh toast instances)
  useEffect(() => {
    if (type === ALERT_TYPES.TOAST) {
      setIsVisible(true);
      setIsExiting(false);
      setIsDismissing(false);
      setIsHovered(false);
      setTimeLeft(autoDismissTime);
    }
  }, [type, autoDismissTime]);

  // Generate and update current timestamp if none provided
  useEffect(() => {
    if (timestamp === undefined && variant === ALERT_VARIANTS.ADVANCED) {
      const updateTimestamp = () => {
        const now = new Date();
        const formattedDate = now.toLocaleDateString('en-US', {
          month: '2-digit',
          day: '2-digit',
          year: 'numeric'
        });
        const formattedTime = now.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        });
        setCurrentTimestamp(`${formattedDate} • ${formattedTime}`);
      };

      // Update immediately
      updateTimestamp();
      
      // Update every minute
      const interval = setInterval(updateTimestamp, 60000);
      
      return () => clearInterval(interval);
    } else if (timestamp !== undefined) {
      // Clear current timestamp if a specific timestamp is provided
      setCurrentTimestamp('');
    }
  }, [timestamp, variant, type]);

  useEffect(() => {
    let timer;
    
    if (autoDismiss && type === ALERT_TYPES.TOAST && !isHovered && isVisible) {
      timer = setTimeout(() => {
        handleDismiss();
      }, autoDismissTime);
    }
    
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [autoDismiss, autoDismissTime, type, isHovered, isVisible]);

  useEffect(() => {
    if (autoDismiss && type === ALERT_TYPES.TOAST) {
      const interval = setInterval(() => {
        setTimeLeft(prev => Math.max(0, prev - 100));
      }, 100);
      
      return () => clearInterval(interval);
    }
  }, [autoDismiss, type]);

  const handleDismiss = () => {
    if (isDismissing || !isVisible) {
      return; // Prevent multiple dismiss calls
    }
    
    if (keepVisible) {
      // For demonstration purposes, don't hide the alert
      onDismiss?.();
      return;
    }
    
    setIsDismissing(true);
    
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <AlertContent variant={variant}>
        <IconContainer variant={variant} severity={severity} theme={theme}>
          {getSeverityIcon(severity)}
        </IconContainer>
        
        {variant === ALERT_VARIANTS.SIMPLE ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              {title && <Title variant={variant} severity={severity} theme={theme}>{title}</Title>}
            </div>
            <ActionsContainer variant={variant} style={{ marginLeft: 'auto', marginTop: 0, gap: '8px' }}>
              {actions.map((action, index) => (
                <Button
                  key={index}
                  variant={BUTTON_VARIANTS.TEXT}
                  textVariant={action.variant === 'primary' ? TEXT_VARIANTS.PRIMARY : TEXT_VARIANTS.SECONDARY}
                  size="small"
                  label={action.label}
                  onClick={() => handleAction(action)}
                  style={{ padding: '8px 12px' }}
                  isDarkMode={theme === ALERT_THEMES.DARK}
                />
              ))}
              {dismissible && (
                <Button
                  variant={BUTTON_VARIANTS.ICON}
                  iconVariant={ICON_VARIANTS.SECONDARY}
                  size="medium"
                  customIcon={<CloseIcon />}
                  onClick={handleDismiss}
                  aria-label="Close alert"
                  isDarkMode={theme === ALERT_THEMES.DARK}
                />
              )}
            </ActionsContainer>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', flex: 1 }}>
              <TextContainer variant={variant}>
                {title && <Title variant={variant} severity={severity} theme={theme}>{title}</Title>}
                {message && variant !== ALERT_VARIANTS.SIMPLE && <Message severity={severity} theme={theme}>{message}</Message>}
              </TextContainer>
              
              {/* Dismiss button for advanced variant */}
              {dismissible && variant !== ALERT_VARIANTS.SIMPLE && (
                <Button
                  variant={BUTTON_VARIANTS.ICON}
                  iconVariant={ICON_VARIANTS.SECONDARY}
                  size="medium"
                  customIcon={<CloseIcon />}
                  onClick={handleDismiss}
                  aria-label="Close alert"
                  isDarkMode={theme === ALERT_THEMES.DARK}
                  style={{ flexShrink: 0, marginTop: '2px' }}
                />
              )}
            </div>
            
            {/* Buttons for advanced variant */}
            {variant === ALERT_VARIANTS.ADVANCED && actions.length > 0 && (
              <ActionsContainer variant={variant}>
                {actions.map((action, index) => (
                  <Button
                    key={index}
                    variant={BUTTON_VARIANTS.TEXT}
                    textVariant={action.variant === 'primary' ? TEXT_VARIANTS.PRIMARY : TEXT_VARIANTS.SECONDARY}
                    size="small"
                    label={action.label}
                    iconPosition={action.icon ? ICON_POSITIONS.LEFT : ICON_POSITIONS.NONE}
                    customIcon={action.icon}
                    onClick={() => handleAction(action)}
                    isDarkMode={theme === ALERT_THEMES.DARK}
                  />
                ))}
              </ActionsContainer>
            )}
            
            {/* Timestamp for advanced variant - positioned below buttons */}
            {variant === ALERT_VARIANTS.ADVANCED && (timestamp !== null && (timestamp || currentTimestamp)) && (
              <Timestamp variant={variant} severity={severity} theme={theme}>
                {timestamp || currentTimestamp}
              </Timestamp>
            )}
          </div>
        )}
      </AlertContent>
      

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
    icon: PropTypes.node,
    onClick: PropTypes.func
  })),
  timestamp: PropTypes.string,
  className: PropTypes.string,
  keepVisible: PropTypes.bool
};

export default Alert;
export {
  ALERT_TYPES,
  ALERT_VARIANTS,
  ALERT_SEVERITIES,
  ALERT_THEMES,
  ALERT_POSITIONS
};
