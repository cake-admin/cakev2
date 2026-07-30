import React from 'react';
import styled, { css } from 'styled-components';

import designersLight from '../../assets/website/cards/card-header-designers-light.png';
import designersDark from '../../assets/website/cards/card-header-designers-dark.png';
import developersLight from '../../assets/website/cards/card-header-developers-light.png';
import developersDark from '../../assets/website/cards/card-header-developers-dark.png';
import resourcesLight from '../../assets/website/cards/card-header-resources-light.png';
import resourcesDark from '../../assets/website/cards/card-header-resources-dark.png';

const ILLUSTRATIONS = {
  designers: { light: designersLight, dark: designersDark },
  developers: { light: developersLight, dark: developersDark },
  resources: { light: resourcesLight, dark: resourcesDark },
};

const imageOffset = (type) => {
  if (type === 'resources') {
    return css`
      [data-theme='light.a'] &,
      [data-theme='win hct'] & {
        top: -20.23%;
      }
      [data-theme='dark.a'] & {
        top: -11.1%;
      }
    `;
  }
  return css`
    top: 0;
  `;
};

const Root = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 180px;
  overflow: hidden;
`;

const Frame = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`;

const ThemeImage = styled.img`
  position: absolute;
  left: 0;
  width: 100%;
  height: 170%;
  max-width: none;
  object-fit: cover;
  ${(props) => imageOffset(props.$type)}

  [data-theme='light.a'] &,
  [data-theme='win hct'] & {
    display: ${(props) => (props.$mode === 'light' ? 'block' : 'none')};
  }

  [data-theme='dark.a'] & {
    display: ${(props) => (props.$mode === 'dark' ? 'block' : 'none')};
  }
`;

const CardHeaderIllustration = ({ type = 'designers' }) => {
  const assets = ILLUSTRATIONS[type];

  return (
    <Root aria-hidden>
      <Frame>
        <ThemeImage $type={type} $mode="light" src={assets.light} alt="" />
        <ThemeImage $type={type} $mode="dark" src={assets.dark} alt="" />
      </Frame>
    </Root>
  );
};

export default CardHeaderIllustration;
