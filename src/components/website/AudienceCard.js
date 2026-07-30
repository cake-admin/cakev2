import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { fontStack } from '../../styles/globalStyles';

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
      @media (prefers-color-scheme: light) {
        top: -20.23%;
      }
      @media (prefers-color-scheme: dark) {
        top: -11.1%;
      }
    `;
  }
  return css`
    top: 0;
  `;
};

const CardRoot = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  border-radius: 24px;
  background: var(--audience-card-bg, #ffffff);
  box-shadow:
    0 1px 2px var(--audience-card-shadow-light, rgba(0, 0, 0, 0.05)),
    0 0 4px var(--audience-card-shadow-heavy, rgba(0, 0, 0, 0.12));

  @media (prefers-color-scheme: dark) {
    --audience-card-bg: #25262d;
    --audience-card-shadow-light: rgba(0, 0, 0, 0.2);
    --audience-card-shadow-heavy: rgba(0, 0, 0, 0.25);
    --audience-card-title: #ffffff;
    --audience-card-body: #c6c6cf;
    --audience-card-button-border: #f9f9f9;
    --audience-card-button-text: #f9f9f9;
  }
`;

const HeaderMedia = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 100%;
  height: 180px;
  overflow: hidden;
  background: #f3f4f6;

  @media (prefers-color-scheme: dark) {
    background: #1a1b21;
  }
`;

const HeaderFrame = styled.div`
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

  @media (prefers-color-scheme: light) {
    display: ${(props) => (props.$mode === 'light' ? 'block' : 'none')};
  }

  @media (prefers-color-scheme: dark) {
    display: ${(props) => (props.$mode === 'dark' ? 'block' : 'none')};
  }
`;

const Content = styled.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 16px;
  min-height: 0;
  padding: 24px;
`;

const Title = styled.h3`
  margin: 0;
  font-family: ${fontStack};
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.35;
  color: var(--audience-card-title, #25262d);
`;

const BodyBlock = styled.div`
  display: flex;
  flex: ${(props) => (props.$stretch ? '1 0 0' : '0 0 auto')};
  flex-direction: column;
  gap: 24px;
  min-height: ${(props) => (props.$stretch ? '0' : 'auto')};
  justify-content: ${(props) => (props.$stretch ? 'space-between' : 'flex-start')};
`;

const Body = styled.p`
  margin: 0;
  font-family: ${fontStack};
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.2px;
  line-height: 1.35;
  color: var(--audience-card-body, #44464e);
`;

const ActionButton = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  gap: 8px;
  height: 40px;
  padding: 10px 16px;
  border: 2px solid var(--audience-card-button-border, #121318);
  border-radius: 999px;
  background: transparent;
  color: var(--audience-card-button-text, #121318);
  font-family: ${fontStack};
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.1px;
  line-height: 1.35;
`;

const CardLink = styled(Link)`
  display: block;
  height: 100%;
  color: inherit;
  text-decoration: none;
`;

const CardAnchor = styled.a`
  display: block;
  height: 100%;
  color: inherit;
  text-decoration: none;
`;

const AudienceCard = ({
  type,
  title,
  body,
  actionLabel,
  href,
  to,
  stretchActions = false,
}) => {
  const assets = ILLUSTRATIONS[type];

  const card = (
    <CardRoot>
      <HeaderMedia aria-hidden>
        <HeaderFrame>
          <ThemeImage $type={type} $mode="light" src={assets.light} alt="" />
          <ThemeImage $type={type} $mode="dark" src={assets.dark} alt="" />
        </HeaderFrame>
      </HeaderMedia>
      <Content>
        <Title>{title}</Title>
        <BodyBlock $stretch={stretchActions}>
          <Body>{body}</Body>
          <ActionButton>
            {actionLabel}
            <ArrowForwardIcon aria-hidden style={{ width: 16, height: 16 }} />
          </ActionButton>
        </BodyBlock>
      </Content>
    </CardRoot>
  );

  if (href) {
    return (
      <CardAnchor href={href} target="_blank" rel="noopener noreferrer">
        {card}
      </CardAnchor>
    );
  }

  return <CardLink to={to}>{card}</CardLink>;
};

export default AudienceCard;
