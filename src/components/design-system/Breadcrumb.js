import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button, { BUTTON_VARIANTS, TEXT_VARIANTS, ICON_POSITIONS } from './Button';

/**
 * Breadcrumb separator variants
 */
const SEPARATOR_TYPES = {
  CHEVRON: 'chevron',
  SLASH: 'slash',
  ARROW: 'arrow'
};

/**
 * Breadcrumb size variants
 */
const BREADCRUMB_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

const getTextColor = (isDarkMode, isActive = false) => {
  if (isDarkMode) {
    return isActive ? '#FFFFFF' : '#A1A1AA';
  }
  return isActive ? '#0F172A' : '#64748B';
};

const getSeparatorColor = (isDarkMode) => {
  return isDarkMode ? '#52525B' : '#CBD5E1';
};

const getBreadcrumbSize = (size) => {
  switch (size) {
    case BREADCRUMB_SIZES.SMALL:
      return {
        fontSize: '12px',
        lineHeight: '16px',
        iconSize: '14px',
        padding: '4px 8px'
      };
    case BREADCRUMB_SIZES.LARGE:
      return {
        fontSize: '16px',
        lineHeight: '24px',
        iconSize: '20px',
        padding: '8px 12px'
      };
    default: // MEDIUM
      return {
        fontSize: '14px',
        lineHeight: '20px',
        iconSize: '16px',
        padding: '6px 10px'
      };
  }
};

const BreadcrumbContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'Segoe UI', sans-serif;
  font-size: ${props => getBreadcrumbSize(props.size).fontSize};
  line-height: ${props => getBreadcrumbSize(props.size).lineHeight};
  
  /* Accessibility */
  aria-label: "Breadcrumb navigation";
`;



const BreadcrumbList = styled.ol`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  padding-left: 16px;
`;

const BreadcrumbItem = styled.li`
  display: flex;
  align-items: center;
`;

const BreadcrumbLink = styled.a`
  display: inline-flex;
  align-items: center;
  padding: ${props => getBreadcrumbSize(props.size).padding};
  color: ${props => props.isDarkMode ? '#D4D4D8' : '#171717'};
  text-decoration: none;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  
  &:hover {
    color: ${props => props.isDarkMode ? '#93C5FD' : '#1D4ED8'};
  }
  
  &:active {
    color: ${props => props.isDarkMode ? '#60A5FA' : '#1E3A8A'};
  }
  
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px #1D4ED8;
  }
`;

const BreadcrumbCurrent = styled.span`
  display: inline-flex;
  align-items: center;
  padding: ${props => getBreadcrumbSize(props.size).padding};
  color: ${props => props.isDarkMode ? '#D4D4D8' : '#171717'};
  font-size: 18px;
  font-weight: 600;
  cursor: default;
`;

const Separator = styled.span`
  display: inline-flex;
  align-items: center;
  color: ${props => props.isDarkMode ? '#A1A1AA' : '#171717'};
  margin: 0 8px;
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const BackArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

// Custom back button component using the Button component
const BackButtonWrapper = styled.div`
  margin-bottom: 8px;
`;

// Custom back button component using the Button component
const BackButton = ({ size, isDarkMode, onClick, backButtonText, ...props }) => {
  return (
    <Button
      variant={BUTTON_VARIANTS.TEXT}
      textVariant={TEXT_VARIANTS.SECONDARY}
      iconPosition={ICON_POSITIONS.LEFT}
      label={backButtonText}
      size={size}
      isDarkMode={isDarkMode}
      onClick={onClick}
      aria-label={`${backButtonText} button`}
      customIcon={<BackArrowIcon />}
      {...props}
    />
  );
};

const getSeparatorIcon = (separatorType) => {
  switch (separatorType) {
    case SEPARATOR_TYPES.ARROW:
      return <ArrowIcon />;
    case SEPARATOR_TYPES.SLASH:
      return '/';
    default: // CHEVRON
      return <ChevronIcon />;
  }
};

const Breadcrumb = ({
  items = [],
  showBackButton = true,
  backButtonText = 'Back',
  separatorType = SEPARATOR_TYPES.CHEVRON,
  size = BREADCRUMB_SIZES.MEDIUM,
  isDarkMode = false,
  onBackClick,
  onItemClick,
  className,
  ...props
}) => {
  const handleBackClick = (e) => {
    e.preventDefault();
    if (onBackClick) {
      onBackClick(e);
    }
  };

  const handleItemClick = (index, e) => {
    e.preventDefault();
    if (onItemClick) {
      onItemClick(index, e);
    }
  };

  const renderSeparator = () => (
    <Separator isDarkMode={isDarkMode} size={size}>
      {getSeparatorIcon(separatorType)}
    </Separator>
  );

  return (
    <BreadcrumbContainer
      size={size}
      isDarkMode={isDarkMode}
      className={className}
      aria-label="Breadcrumb navigation"
      {...props}
    >
      {showBackButton && (
        <BackButtonWrapper>
          <BackButton
            size={size}
            isDarkMode={isDarkMode}
            onClick={handleBackClick}
            backButtonText={backButtonText}
          />
        </BackButtonWrapper>
      )}
      
      <BreadcrumbList>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isClickable = !isLast && item.onClick !== false;
          
          return (
            <BreadcrumbItem key={index}>
              {isLast ? (
                <BreadcrumbCurrent size={size} isDarkMode={isDarkMode}>
                  {item.label}
                </BreadcrumbCurrent>
              ) : (
                <BreadcrumbLink
                  size={size}
                  isDarkMode={isDarkMode}
                  href={item.href || '#'}
                  onClick={isClickable ? (e) => handleItemClick(index, e) : undefined}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </BreadcrumbLink>
              )}
              {!isLast && renderSeparator()}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </BreadcrumbContainer>
  );
};

Breadcrumb.propTypes = {
  /** Array of breadcrumb items with label and optional href */
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.bool])
  })),
  /** Whether to show the back button */
  showBackButton: PropTypes.bool,
  /** Text for the back button */
  backButtonText: PropTypes.string,
  /** Type of separator between breadcrumb items */
  separatorType: PropTypes.oneOf(Object.values(SEPARATOR_TYPES)),
  /** Size variant of the breadcrumb */
  size: PropTypes.oneOf(Object.values(BREADCRUMB_SIZES)),
  /** Whether to use dark mode styles */
  isDarkMode: PropTypes.bool,
  /** Callback when back button is clicked */
  onBackClick: PropTypes.func,
  /** Callback when breadcrumb item is clicked */
  onItemClick: PropTypes.func,
  /** Additional CSS class name */
  className: PropTypes.string,
};

export { SEPARATOR_TYPES, BREADCRUMB_SIZES };
export default Breadcrumb; 