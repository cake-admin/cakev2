import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

/**
 * Button variants for different purposes
 */
const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  DANGER: 'danger'
};

/**
 * Size variants for the button
 */
const BUTTON_SIZES = {
  MEDIUM: 'medium',
  LARGE: 'large'
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

const getBackgroundColor = (variant, isDarkMode) => {
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

const getHoverBackgroundColor = (variant, isDarkMode) => {
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

const getPressedBackgroundColor = (variant, isDarkMode) => {
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

const getTextColor = (variant, isDarkMode) => {
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
  width: 12px;
  height: 12px;
  border: 2px solid ${props => props.isDarkMode ? '#52525B' : '#CBD5E1'};
  border-top: 2px solid ${props => props.isDarkMode ? '#93C5FD' : '#1D4ED8'};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  margin-left: 8px;
`;

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: ${props => {
    const verticalPadding = props.size === BUTTON_SIZES.LARGE ? '12px' : '8px';
    const horizontalPadding = props.size === BUTTON_SIZES.LARGE ? '24px' : '20px';
    return `${verticalPadding} ${horizontalPadding}`;
  }};
  height: ${props => props.size === BUTTON_SIZES.LARGE ? '40px' : '32px'};
  max-width: 264px;
  width: fit-content;
  white-space: nowrap;
  overflow: hidden;
  text-rendering: geometricPrecision;
  -webkit-font-smoothing: antialiased;
  
  /* Style for the label text to enable middle truncation */
  span.button-text {
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-flex;
    align-items: center;
    position: relative;
    max-width: 100%;
    min-height: 100%;
    font-size: ${props => props.size === BUTTON_SIZES.LARGE ? '16px' : '14px'};
    transform: translateY(0.5px);
  }
  
  background-color: ${props => {
    if (props.$disabled || props.$loading) {
      return props.isDarkMode ? '#1F2937' : '#E5E7EB';
    }
    return getBackgroundColor(props.variant, props.isDarkMode);
  }};
  color: ${props => {
    if (props.$disabled || props.$loading) {
      return props.isDarkMode ? '#9CA3AF' : '#475569';
    }
    return getTextColor(props.variant, props.isDarkMode);
  }};
  border: none;
  border-radius: ${props => props.buttonStyle === BUTTON_STYLES.PILL ? '100px' : '4px'};
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
        return props.isDarkMode ? '#1F2937' : '#E5E7EB';
      }
      return getHoverBackgroundColor(props.variant, props.isDarkMode);
    }};
  }

  &:active {
    background-color: ${props => {
      if (props.$disabled || props.$loading) {
        return props.isDarkMode ? '#1F2937' : '#E5E7EB';
      }
      return getPressedBackgroundColor(props.variant, props.isDarkMode);
    }};
  }

  &:focus-visible {
    outline: none;
    box-shadow: ${props => {
      const focusColor = props.isDarkMode ? '#93C5FD' : '#1D4ED8';
      return `0 0 0 2px ${props.isDarkMode ? '#18181B' : '#FFFFFF'}, 0 0 0 5px ${focusColor}`;
    }};
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => props.size === BUTTON_SIZES.LARGE ? '20px' : '16px'};
    height: ${props => props.size === BUTTON_SIZES.LARGE ? '20px' : '16px'};
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
  size = BUTTON_SIZES.MEDIUM,
  iconPosition = ICON_POSITIONS.NONE,
  buttonStyle = BUTTON_STYLES.PILL,
  label = 'Button',
  disabled = false,
  loading = false,
  isDarkMode = false,
  className,
  onClick,
  ...props
}) => {
  const showIcon = iconPosition !== ICON_POSITIONS.NONE && !loading;
  const icon = <OpenInNewIcon />;

  const getButtonLabel = () => {
    const variantName = variant.charAt(0).toUpperCase() + variant.slice(1).toLowerCase();
    return iconPosition !== ICON_POSITIONS.NONE ? `${variantName} with icon` : variantName;
  };

  const handleClick = (e) => {
    if (disabled || loading) return;
    onClick?.(e);
  };

  return (
    <StyledButton
      variant={variant}
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
      {!loading && iconPosition === ICON_POSITIONS.LEFT && <span className="icon">{icon}</span>}
      <span className="button-text">{label}</span>
      {!loading && iconPosition === ICON_POSITIONS.RIGHT && <span className="icon">{icon}</span>}
      {loading && <LoadingSpinner isDarkMode={isDarkMode} />}
    </StyledButton>
  );
};

Button.propTypes = {
  /** The variant that determines button's purpose and styling */
  variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)),
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
};

export { BUTTON_VARIANTS, BUTTON_SIZES, ICON_POSITIONS, BUTTON_STYLES };
export default Button; 