import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * Chip variants for different states
 */
const CHIP_TYPES = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error'
};

/**
 * Size variants for the chip
 */
const CHIP_SIZES = {
  SMALL: 'small',
  LARGE: 'large',
};

/**
 * Style variants for the chip shape
 */
const CHIP_STYLES = {
  PILL: 'pill',
  SQUARE: 'square',
};

const getBackgroundColor = (type, isDarkMode) => {
  if (isDarkMode) {
    switch (type) {
      case CHIP_TYPES.INFO:
        return '#93C5FD';
      case CHIP_TYPES.SUCCESS:
        return '#34D399';
      case CHIP_TYPES.WARNING:
        return '#FDBA74';
      case CHIP_TYPES.ERROR:
        return '#FCA5A5';
      default:
        return '#93C5FD';
    }
  }

  switch (type) {
    case CHIP_TYPES.INFO:
      return '#EFF6FF';
    case CHIP_TYPES.SUCCESS:
      return '#ECFDF5';
    case CHIP_TYPES.WARNING:
      return '#FFF7ED';
    case CHIP_TYPES.ERROR:
      return '#FEF2F2';
    default:
      return '#EFF6FF';
  }
};

const ChipContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${props => {
    if (props.isIconOnly) {
      return '0';
    }
    if (props.size === 'small' && props.leftIcon) {
      return '4px 12px 4px 8px';
    }
    if (props.size === 'large' && props.leftIcon) {
      return '6px 16px 6px 12px';
    }
    if (!props.leftIcon && !props.rightIcon) {
      return props.size === 'small' ? '4px 12px' : '6px 16px';
    }
    return props.size === 'small' ? '4px 12px' : '6px 16px';
  }};
  height: ${props => {
    if (props.isIconOnly) {
      return props.size === 'small' ? '24px' : '32px';
    }
    return props.size === 'small' ? '24px' : '32px';
  }};
  width: ${props => {
    if (props.isIconOnly) {
      return props.size === 'small' ? '24px' : '32px';
    }
    return 'auto';
  }};
  aspect-ratio: ${props => props.isIconOnly ? '1 / 1' : 'auto'};
  background-color: ${props => getBackgroundColor(props.type, props.isDarkMode)};
  border-radius: ${props => {
    if (props.isIconOnly) {
      return props.chipStyle === 'square' ? '4px' : '50%';
    }
    return props.chipStyle === 'pill' ? '100px' : '4px';
  }};
  color: #0F172A;
  font-family: 'Segoe UI', sans-serif;
  font-weight: 600;
  font-size: ${props => props.size === 'small' ? '12px' : '14px'};
  line-height: 1;
  box-sizing: border-box;
  user-select: none;
  transition: all 0.2s ease-in-out;

  .icon-left {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => props.size === 'small' ? '16px' : '20px'};
    height: ${props => props.size === 'small' ? '16px' : '20px'};
    margin-right: ${props => !props.isIconOnly && (props.size === 'small' ? '6px' : '8px')};
    flex-shrink: 0;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  .icon-right {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => props.size === 'small' ? '16px' : '20px'};
    height: ${props => props.size === 'small' ? '16px' : '20px'};
    margin-left: ${props => props.size === 'small' ? '6px' : '8px'};
    flex-shrink: 0;

    svg {
      width: 100%;
      height: 100%;
    }
  }
`;

const Chip = ({
  type = CHIP_TYPES.INFO,
  size = CHIP_SIZES.SMALL,
  chipStyle = CHIP_STYLES.PILL,
  label,
  leftIcon,
  rightIcon,
  isIconOnly = false,
  className,
  isDarkMode = false,
  ...props
}) => {
  return (
    <ChipContainer
      type={type}
      size={size}
      chipStyle={chipStyle}
      className={className}
      isDarkMode={isDarkMode}
      isIconOnly={isIconOnly}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      role="status"
      {...props}
    >
      {isIconOnly ? (
        <span className="icon-left">{leftIcon}</span>
      ) : (
        <>
          {leftIcon && <span className="icon-left">{leftIcon}</span>}
          {label}
          {rightIcon && <span className="icon-right">{rightIcon}</span>}
        </>
      )}
    </ChipContainer>
  );
};

Chip.propTypes = {
  /** The type of chip that determines its background color */
  type: PropTypes.oneOf(Object.values(CHIP_TYPES)),
  /** The size variant of the chip */
  size: PropTypes.oneOf(Object.values(CHIP_SIZES)),
  /** The style variant that determines the border radius */
  chipStyle: PropTypes.oneOf(Object.values(CHIP_STYLES)),
  /** The text content of the chip */
  label: PropTypes.string,
  /** Optional icon component to display on the left */
  leftIcon: PropTypes.node,
  /** Optional icon component to display on the right */
  rightIcon: PropTypes.node,
  /** Whether to show only the icon without text */
  isIconOnly: PropTypes.bool,
  /** Additional CSS class name */
  className: PropTypes.string,
  /** Whether to use dark mode styles */
  isDarkMode: PropTypes.bool,
};

export { CHIP_TYPES, CHIP_SIZES, CHIP_STYLES };
export default Chip;