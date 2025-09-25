import React from 'react';
import styled from 'styled-components';
import { fontStack } from '../../styles/globalStyles';
import PropTypes from 'prop-types';
import PersonIcon from '@mui/icons-material/Person';

/**
 * Avatar variants for different display types
 */
const AVATAR_VARIANTS = {
  IMAGE: 'image',
  INITIALS: 'initials',
  ICON: 'icon'
};

/**
 * Size variants for the avatar
 */
const AVATAR_SIZES = {
  XLARGE: '64',
  LARGE: '48',
  MEDIUM: '40',
  SMALL: '32'
};

const getBackgroundColor = (variant, isDarkMode) => {
  if (variant === AVATAR_VARIANTS.INITIALS || variant === AVATAR_VARIANTS.ICON) {
    return isDarkMode ? '#CBD5E1' : '#E2E8F0';
  }
  return 'transparent';
};

const StyledAvatar = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  border-radius: 50%;
  background-color: ${props => getBackgroundColor(props.variant, props.isDarkMode)};
  border: 2px solid ${props => props.isDarkMode ? '#71717A' : '#64748B'};
  overflow: hidden;
  user-select: none;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  .initials {
    font-family: ${fontStack};
    font-weight: 600;
    color: ${props => props.isDarkMode ? '#000000' : '#0F172A'};
    font-size: ${props => {
      switch (props.size) {
        case AVATAR_SIZES.XLARGE:
          return '24px';
        case AVATAR_SIZES.LARGE:
          return '20px';
        case AVATAR_SIZES.MEDIUM:
          return '16px';
        case AVATAR_SIZES.SMALL:
          return '14px';
        default:
          return '16px';
      }
    }};
    line-height: 1;
    text-transform: uppercase;
  }

  .icon {
    color: ${props => props.isDarkMode ? '#000000' : '#0F172A'};
    width: ${props => `${parseInt(props.size) * 0.5}px`};
    height: ${props => `${parseInt(props.size) * 0.5}px`};
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.isDarkMode ? '#18181B' : '#FFFFFF'},
                0 0 0 4px ${props => props.isDarkMode ? '#93C5FD' : '#1D4ED8'};
  }
`;

const Avatar = ({
  variant = AVATAR_VARIANTS.ICON,
  size = AVATAR_SIZES.MEDIUM,
  src,
  initials,
  alt,
  isDarkMode = false,
  className,
  ...props
}) => {
  const [imgError, setImgError] = React.useState(false);

  const handleImgError = () => {
    setImgError(true);
  };

  const renderContent = () => {
    if (variant === AVATAR_VARIANTS.IMAGE && src && !imgError) {
      return <img src={src} alt={alt} onError={handleImgError} />;
    }

    if (variant === AVATAR_VARIANTS.INITIALS && initials) {
      return <span className="initials">{initials.slice(0, 2)}</span>;
    }

    return <PersonIcon className="icon" />;
  };

  return (
    <StyledAvatar
      variant={imgError ? AVATAR_VARIANTS.ICON : variant}
      size={size}
      isDarkMode={isDarkMode}
      className={className}
      role="img"
      aria-label={alt}
      {...props}
    >
      {renderContent()}
    </StyledAvatar>
  );
};

Avatar.propTypes = {
  /** The variant that determines avatar's display type */
  variant: PropTypes.oneOf(Object.values(AVATAR_VARIANTS)),
  /** The size of the avatar in pixels */
  size: PropTypes.oneOf(Object.values(AVATAR_SIZES)),
  /** The image source URL for image variant */
  src: PropTypes.string,
  /** The initials to display for initials variant */
  initials: PropTypes.string,
  /** Alt text for accessibility */
  alt: PropTypes.string,
  /** Whether to use dark mode styles */
  isDarkMode: PropTypes.bool,
  /** Additional CSS class name */
  className: PropTypes.string,
};

export { AVATAR_VARIANTS, AVATAR_SIZES };
export default Avatar;