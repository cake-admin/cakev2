import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DownloadIcon from '@mui/icons-material/Download';

/**
 * Button variants for different purposes
 */
const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  DANGER: 'danger',
  TEXT: 'text',
  ICON: 'icon'
};

const TEXT_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};

const ICON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};

/**
 * Size variants for the button
 */
const BUTTON_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  XLARGE: 'xlarge'
};

/**
 * Icon position options
 */
const ICON_POSITIONS = {
  NONE: 'none',
  LEFT: 'left',
  RIGHT: 'right'
};

/**
 * Button style options
 */
const BUTTON_STYLES = {
  PILL: 'pill',
  SQUARE: 'square'
};

const getBackgroundColor = (variant, isDarkMode, iconVariant) => {
  if (variant === BUTTON_VARIANTS.ICON) {
    return 'transparent'; // Default state: no background for icon buttons
  }
  if (variant === BUTTON_VARIANTS.TEXT) {
    return 'transparent'; // Default state: no background for text buttons
  }

  if (isDarkMode) {
    switch (variant) {
      case BUTTON_VARIANTS.PRIMARY:
        return '#93C5FD'; // Blue 300
      case BUTTON_VARIANTS.SECONDARY:
        return '#CBD5E1'; // Slate 300
      case BUTTON_VARIANTS.DANGER:
        return '#FCA5A5'; // Red 300
      default:
        return '#93C5FD';
    }
  }

  switch (variant) {
    case BUTTON_VARIANTS.PRIMARY:
      return '#1D4ED8'; // Blue 700
    case BUTTON_VARIANTS.SECONDARY:
      return '#E2E8F0'; // Slate 200
    case BUTTON_VARIANTS.DANGER:
      return '#B91C1C'; // Red 700
    default:
      return '#1D4ED8';
  }
};

const getHoverBackgroundColor = (variant, isDarkMode, textVariant, iconVariant) => {
  if (variant === BUTTON_VARIANTS.ICON) {
    if (iconVariant === ICON_VARIANTS.PRIMARY) {
      return isDarkMode ? 'rgba(59, 130, 246, 0.45)' : '#DBEAFE'; // Primary icon button hover: #3B82F6 45% opacity in dark mode, light blue in light mode
    }
    if (isDarkMode) {
      return 'rgba(100, 116, 139, 0.25)'; // Secondary icon button dark mode hover: #64748B with 25% opacity
    }
    return '#E2E8F0'; // Secondary icon button light mode hover: Slate 200
  }
  if (variant === BUTTON_VARIANTS.TEXT) {
    if (isDarkMode) {
      if (textVariant === TEXT_VARIANTS.PRIMARY) {
        return 'rgba(59, 130, 246, 0.45)'; // Primary text button dark mode hover: #3B82F6 45% opacity
      }
      return 'rgba(100, 116, 139, 0.25)'; // Secondary text button dark mode hover: #64748B with 25% opacity
    }
    if (textVariant === TEXT_VARIANTS.PRIMARY) {
      return '#DBEAFE'; // Primary text button light mode hover: Light blue
    }
    return '#E2E8F0'; // Secondary text button light mode hover: Slate 200
  }

  if (isDarkMode) {
    switch (variant) {
      case BUTTON_VARIANTS.PRIMARY:
        return '#60A5FA'; // Blue 400
      case BUTTON_VARIANTS.SECONDARY:
        return '#94A3B8'; // Slate 400
      case BUTTON_VARIANTS.DANGER:
        return '#EF4444'; // Red 500
      default:
        return '#60A5FA';
    }
  }

  switch (variant) {
    case BUTTON_VARIANTS.PRIMARY:
      return '#1E3A8A'; // Blue 900
    case BUTTON_VARIANTS.SECONDARY:
      return '#CBD5E1'; // Slate 300
    case BUTTON_VARIANTS.DANGER:
      return '#7F1D1D'; // Red 900
    default:
      return '#1E3A8A';
  }
};

const getPressedBackgroundColor = (variant, isDarkMode, textVariant, iconVariant) => {
  if (variant === BUTTON_VARIANTS.ICON) {
    if (iconVariant === ICON_VARIANTS.PRIMARY) {
      return isDarkMode ? 'rgba(59, 130, 246, 0.35)' : '#BFDBFE'; // Primary icon button pressed: #3B82F6 35% opacity in dark mode, darker blue in light mode
    }
    if (isDarkMode) {
      return 'rgba(100, 116, 139, 0.35)'; // Secondary icon button dark mode pressed: #64748B with 35% opacity
    }
    return '#CBD5E1'; // Secondary icon button light mode pressed: Slate 300
  }
  if (variant === BUTTON_VARIANTS.TEXT) {
    if (isDarkMode) {
      if (textVariant === TEXT_VARIANTS.PRIMARY) {
        return 'rgba(59, 130, 246, 0.35)'; // Primary text button dark mode pressed: #3B82F6 35% opacity
      }
      return 'rgba(100, 116, 139, 0.35)'; // Secondary text button dark mode pressed: #64748B with 35% opacity
    }
    if (textVariant === TEXT_VARIANTS.PRIMARY) {
      return '#BFDBFE'; // Primary text button light mode pressed: Slightly darker blue
    }
    return '#CBD5E1'; // Secondary text button light mode pressed: Slate 300
  }

  if (isDarkMode) {
    switch (variant) {
      case BUTTON_VARIANTS.PRIMARY:
        return '#93C5FD'; // Blue 300
      case BUTTON_VARIANTS.SECONDARY:
        return '#CBD5E1'; // Slate 300
      case BUTTON_VARIANTS.DANGER:
        return '#FCA5A5'; // Red 300
      default:
        return '#93C5FD';
    }
  }

  switch (variant) {
    case BUTTON_VARIANTS.PRIMARY:
      return '#1D4ED8'; // Blue 700
    case BUTTON_VARIANTS.SECONDARY:
      return '#E2E8F0'; // Slate 200
    case BUTTON_VARIANTS.DANGER:
      return '#B91C1C'; // Red 700
    default:
      return '#1D4ED8';
  }
};

const getTextColor = (variant, isDarkMode, textVariant, iconVariant) => {
  if (variant === BUTTON_VARIANTS.ICON) {
    if (iconVariant === ICON_VARIANTS.PRIMARY) {
      return isDarkMode ? '#93C5FD' : '#1D4ED8'; // Primary icon button: Blue 300 in dark mode, Blue 700 in light mode
    }
    return isDarkMode ? '#E2E8F0' : '#1E293B'; // Secondary icon button: Slate 200 in dark mode, Slate 800 in light mode
  }
  if (variant === BUTTON_VARIANTS.TEXT) {
    if (textVariant === TEXT_VARIANTS.PRIMARY) {
      return isDarkMode ? '#93C5FD' : '#1D4ED8'; // Primary text button color
    }
    return isDarkMode ? '#E2E8F0' : '#334155'; // Secondary text button: Slate 200 in dark mode, Slate 700 in light mode
  }

  if (isDarkMode) {
    switch (variant) {
      case BUTTON_VARIANTS.PRIMARY:
        return '#18181B'; // Zinc 900
      case BUTTON_VARIANTS.SECONDARY:
        return '#000000'; // Black
      case BUTTON_VARIANTS.DANGER:
        return '#18181B'; // Zinc 900
      default:
        return '#18181B';
    }
  }

  switch (variant) {
    case BUTTON_VARIANTS.PRIMARY:
      return '#FFFFFF';
    case BUTTON_VARIANTS.SECONDARY:
      return '#0F172A'; // Slate 900
    case BUTTON_VARIANTS.DANGER:
      return '#FFFFFF';
    default:
      return '#FFFFFF';
  }
};

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingSpinner = styled.div`
  width: ${props => {
    if (props.variant === BUTTON_VARIANTS.ICON) {
      switch (props.size) {
        case BUTTON_SIZES.SMALL:
          return '16px';
        case BUTTON_SIZES.MEDIUM:
          return '20px';
        case BUTTON_SIZES.LARGE:
          return '24px';
        case BUTTON_SIZES.XLARGE:
          return '28px';
        default:
          return '20px';
      }
    }
    return props.size === BUTTON_SIZES.LARGE ? '20px' : '16px';
  }};
  height: ${props => {
    if (props.variant === BUTTON_VARIANTS.ICON) {
      switch (props.size) {
        case BUTTON_SIZES.SMALL:
          return '16px';
        case BUTTON_SIZES.MEDIUM:
          return '20px';
        case BUTTON_SIZES.LARGE:
          return '24px';
        case BUTTON_SIZES.XLARGE:
          return '28px';
        default:
          return '20px';
      }
    }
    return props.size === BUTTON_SIZES.LARGE ? '20px' : '16px';
  }};
  border: 2px solid ${props => props.isDarkMode ? '#52525B' : '#CBD5E1'};
  border-top: 2px solid ${props => props.isDarkMode ? '#93C5FD' : '#1D4ED8'};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  margin: 0;
`;

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  
  /* Track hover state for text color changes */
  &:hover {
    color: ${props => {
      if (props.$disabled || props.$loading) {
        return props.isDarkMode ? '#9CA3AF' : '#475569'; // Keep disabled/loading color unchanged on hover
      }
      if (props.variant === BUTTON_VARIANTS.ICON) {
        if (props.iconVariant === ICON_VARIANTS.PRIMARY) {
          return props.isDarkMode ? '#93C5FD' : '#1E40AF'; // Primary icon hover color
        }
        return props.isDarkMode ? '#E2E8F0' : '#0F172A'; // Secondary icon hover color: Slate 200 in dark mode, Slate 900 in light mode
      }
      if (props.variant === BUTTON_VARIANTS.TEXT) {
        if (props.textVariant === TEXT_VARIANTS.PRIMARY) {
          return props.isDarkMode ? '#93C5FD' : '#1E3A8A';
        }
        return props.isDarkMode ? '#E2E8F0' : '#1E293B'; // Secondary text hover color
      }
      return props.color;
    }};
  }
  
  /* Track pressed state for text color changes */
  &:active {
    color: ${props => {
      if (props.$disabled || props.$loading) {
        return props.isDarkMode ? '#9CA3AF' : '#475569';  // Keep disabled/loading color unchanged on active
      }
      if (props.variant === BUTTON_VARIANTS.ICON) {
        if (props.iconVariant === ICON_VARIANTS.PRIMARY) {
          return props.isDarkMode ? '#93C5FD' : '#1E3A8A'; // Primary icon pressed color
        }
        return props.isDarkMode ? '#E2E8F0' : '#0F172A'; // Secondary icon pressed color
      }
      if (props.variant === BUTTON_VARIANTS.TEXT) {
        if (props.textVariant === TEXT_VARIANTS.PRIMARY) {
          return props.isDarkMode ? '#93C5FD' : '#1E3A8A';
        }
        return props.isDarkMode ? '#E2E8F0' : '#0F172A'; // Secondary text pressed color
      }
      return props.color;
    }};
  }
  padding: ${props => {
    if (props.variant === BUTTON_VARIANTS.ICON) {
      return '0';
    }
    const verticalPadding = props.size === BUTTON_SIZES.LARGE ? '12px' : '8px';
    const horizontalPadding = props.size === BUTTON_SIZES.LARGE ? '24px' : '20px';
    return `${verticalPadding} ${horizontalPadding}`;
  }};
  height: ${props => {
    if (props.variant === BUTTON_VARIANTS.ICON) {
      switch (props.size) {
        case BUTTON_SIZES.SMALL:
          return '24px';
        case BUTTON_SIZES.MEDIUM:
          return '32px';
        case BUTTON_SIZES.LARGE:
          return '40px';
        case BUTTON_SIZES.XLARGE:
          return '48px';
        default:
          return '32px';
      }
    }
    return props.size === BUTTON_SIZES.LARGE ? '40px' : '32px';
  }};
  width: ${props => props.variant === BUTTON_VARIANTS.ICON ? 'auto' : 'fit-content'};
  aspect-ratio: ${props => props.variant === BUTTON_VARIANTS.ICON ? '1 / 1' : 'auto'};
  max-width: ${props => props.variant === BUTTON_VARIANTS.ICON ? 'none' : '264px'};
  display: ${props => props.variant === BUTTON_VARIANTS.ICON ? 'inline-flex' : 'inline-flex'};
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-rendering: geometricPrecision;
  -webkit-font-smoothing: antialiased;
  
  /* Style for the label text to enable middle truncation */
  span.button-text {
    display: inline-flex;
    align-items: center;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: ${props => props.size === BUTTON_SIZES.LARGE ? '16px' : '14px'};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transform: translateY(0.5px);
    min-height: 100%;
    line-height: 1;
  }
  
  background-color: ${props => {
    if (props.$disabled || props.$loading) {
      return 'transparent';  // No background for disabled/loading states
    }
    return getBackgroundColor(props.variant, props.isDarkMode);
  }};
  color: ${props => {
    if (props.$disabled || props.$loading) {
      return props.isDarkMode ? '#9CA3AF' : '#475569';  // Consistent disabled/loading color
    }
    return getTextColor(props.variant, props.isDarkMode, props.textVariant, props.iconVariant);
  }};
  border: none;
  border-radius: ${props => {
    if (props.variant === BUTTON_VARIANTS.ICON) {
      return props.buttonStyle === BUTTON_STYLES.PILL ? '100%' : '4px';  // Circular for pill, 4px for square
    }
    return props.buttonStyle === BUTTON_STYLES.PILL ? '100px' : '4px';
  }};
  font-family: 'Segoe UI', sans-serif;
  font-weight: 600;
  font-size: ${props => props.size === BUTTON_SIZES.LARGE ? '16px' : '14px'};
  line-height: 1;
  cursor: ${props => (props.$disabled || props.$loading) ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease-in-out;
  user-select: none;
  gap: 8px;

  &:hover {
    background-color: ${props => {
      if (props.$disabled || props.$loading) {
        return 'transparent';  // No hover background for disabled/loading states
      }
      return getHoverBackgroundColor(props.variant, props.isDarkMode, props.textVariant, props.iconVariant);
    }};
  }

  &:active {
    background-color: ${props => {
      if (props.$disabled || props.$loading) {
        return 'transparent';  // No active background for disabled/loading states
      }
      return getPressedBackgroundColor(props.variant, props.isDarkMode, props.textVariant, props.iconVariant);
    }};
  }

  &:focus-visible {
    outline: none;
    box-shadow: ${props => {
      const focusColor = props.isDarkMode ? '#93C5FD' : '#1D4ED8';
      if (props.variant === BUTTON_VARIANTS.ICON) {
        return `0 0 0 2px ${focusColor}`;  // Simple circular outline for icon buttons
      }
      return `0 0 0 2px ${props.isDarkMode ? '#18181B' : '#FFFFFF'}, 0 0 0 5px ${focusColor}`;
    }};
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => {
      if (props.variant === BUTTON_VARIANTS.ICON) {
        switch (props.size) {
          case BUTTON_SIZES.SMALL:
            return '16px';
          case BUTTON_SIZES.MEDIUM:
            return '20px';
          case BUTTON_SIZES.LARGE:
            return '24px';
          case BUTTON_SIZES.XLARGE:
            return '28px';
          default:
            return '20px';
        }
      }
      return props.size === BUTTON_SIZES.LARGE ? '20px' : '16px';
    }};
    height: ${props => {
      if (props.variant === BUTTON_VARIANTS.ICON) {
        switch (props.size) {
          case BUTTON_SIZES.SMALL:
            return '16px';
          case BUTTON_SIZES.MEDIUM:
            return '20px';
          case BUTTON_SIZES.LARGE:
            return '24px';
          case BUTTON_SIZES.XLARGE:
            return '28px';
          default:
            return '20px';
        }
      }
      return props.size === BUTTON_SIZES.LARGE ? '20px' : '16px';
    }};
    flex-shrink: 0;
    color: ${props => {
      if (props.$disabled || props.$loading) {
        return props.isDarkMode ? '#9CA3AF' : '#475569';
      }
      return 'inherit';
    }};

    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

const Button = ({
  variant = BUTTON_VARIANTS.PRIMARY,
  textVariant = TEXT_VARIANTS.PRIMARY,
  iconVariant = ICON_VARIANTS.PRIMARY,
  size = BUTTON_SIZES.MEDIUM,
  iconPosition = ICON_POSITIONS.NONE,
  buttonStyle = BUTTON_STYLES.PILL,
  label = 'Button',
  disabled = false,
  loading = false,
  isDarkMode = false,
  className,
  onClick,
  customIcon,
  ...props
}) => {
  const isIconButton = variant === BUTTON_VARIANTS.ICON;
  const showIcon = (iconPosition !== ICON_POSITIONS.NONE && !loading) || isIconButton;
  
  // Use custom icon if provided, otherwise use default icons
  const getIcon = () => {
    if (customIcon) {
      return customIcon;
    }
    return isIconButton ? <DownloadIcon /> : <OpenInNewIcon />;
  };

  const handleClick = (e) => {
    if (disabled || loading) return;
    onClick?.(e);
  };

  return (
    <StyledButton
      variant={variant}
      textVariant={textVariant}
      iconVariant={iconVariant}
      size={size}
      buttonStyle={buttonStyle}
      $disabled={disabled}
      $loading={loading}
      isDarkMode={isDarkMode}
      className={className}
      onClick={handleClick}
      aria-disabled={disabled || loading}
      {...props}
    >
      {!loading && (isIconButton || iconPosition === ICON_POSITIONS.LEFT) && <span className="icon">{getIcon()}</span>}
      {!isIconButton && <span className="button-text">{label}</span>}
      {!loading && !isIconButton && iconPosition === ICON_POSITIONS.RIGHT && <span className="icon">{getIcon()}</span>}
      {loading && <LoadingSpinner variant={variant} size={size} isDarkMode={isDarkMode} />}
    </StyledButton>
  );
};

Button.propTypes = {
  /** The variant that determines button's purpose and styling */
  variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)),
  /** The variant for text buttons (primary or secondary) */
  textVariant: PropTypes.oneOf(Object.values(TEXT_VARIANTS)),
  /** The variant for icon buttons (primary or secondary) */
  iconVariant: PropTypes.oneOf(Object.values(ICON_VARIANTS)),
  /** The size variant of the button */
  size: PropTypes.oneOf(Object.values(BUTTON_SIZES)),
  /** Position of the icon relative to text */
  iconPosition: PropTypes.oneOf(Object.values(ICON_POSITIONS)),
  /** The style of the button corners */
  buttonStyle: PropTypes.oneOf(Object.values(BUTTON_STYLES)),
  /** The text content of the button */
  label: PropTypes.string,
  /** Whether the button is disabled */
  disabled: PropTypes.bool,
  /** Whether the button is in loading state */
  loading: PropTypes.bool,
  /** Whether to use dark mode styles */
  isDarkMode: PropTypes.bool,
  /** Additional CSS class name */
  className: PropTypes.string,
  /** Click handler */
  onClick: PropTypes.func,
  /** Whether to force show the focus ring */
  focused: PropTypes.bool,
  /** Custom icon element to use instead of default icons */
  customIcon: PropTypes.node,
};

export { BUTTON_VARIANTS, BUTTON_SIZES, ICON_POSITIONS, BUTTON_STYLES, TEXT_VARIANTS, ICON_VARIANTS };
export default Button; 