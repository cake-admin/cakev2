import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import motoAiIcon from '../../../assets/ai/moto_ai.svg';

const StyledAvatar = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  position: relative;
  overflow: clip;
  flex-shrink: 0;
  
  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    object-position: center;
    filter: ${props => props.isDarkMode ? 'brightness(0) invert(1) brightness(0.63)' : 'none'};
    /* 
     * Dark mode filter explanation:
     * - brightness(0): Makes icon black
     * - invert(1): Inverts to white
     * - brightness(0.63): Adjusts to target color #a1a1aa (161/255 ≈ 0.63)
     * This converts the dark #0F172A icon to light #a1a1aa in dark mode
     */
  }
`;

const MotoAiAvatar = ({
  isDarkMode = false,
  className,
  ...props
}) => {
  return (
    <StyledAvatar
      isDarkMode={isDarkMode}
      className={className}
      role="img"
      aria-label="Moto AI avatar"
      {...props}
    >
      <img src={motoAiIcon} alt="Moto AI" />
    </StyledAvatar>
  );
};

MotoAiAvatar.propTypes = {
  /** Whether to use dark mode styles */
  isDarkMode: PropTypes.bool,
  /** Additional CSS class name */
  className: PropTypes.string,
};

export default MotoAiAvatar;


