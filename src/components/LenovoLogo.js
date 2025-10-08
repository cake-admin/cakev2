import React from 'react';
import styled from 'styled-components';
import logoVert from '../assets/logo_vert.svg';

const LogoContainer = styled.div`
  position: fixed;
  bottom: 136px;
  right: 0;
  width: 48px;
  background-color: #e1251b;
  padding: 8px;
  cursor: pointer;
  z-index: 1000;
  
  @media (max-width: 768px) {
    width: 36px;
    padding: 6px;
  }
  
  @media (max-width: 480px) {
    width: 32px;
    padding: 4px;
  }
`;

const LogoImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const LenovoLogo = () => {
  const handleClick = () => {
    window.open('https://lenovo.com', '_blank', 'noopener,noreferrer');
  };

  return (
    <LogoContainer onClick={handleClick} role="button" tabIndex="0" aria-label="Visit Lenovo.com">
      <LogoImage src={logoVert} alt="Lenovo" />
    </LogoContainer>
  );
};

export default LenovoLogo;
