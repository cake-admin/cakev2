import React from 'react';
import styled from 'styled-components';
import { fontStack } from '../../styles/globalStyles';
import colorData from '../../data/colors.json';

const HeaderContainer = styled.div`
  margin-bottom: 32px;
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.h1`
  margin: 0 0 16px 0;
  font-size: 32px;
  font-weight: 600;
  color: ${colorData.slate[900]};
  font-family: ${fontStack};
  line-height: 1.2;
`;

const Description = styled.p`
  margin: 0;
  color: ${colorData.slate[700]};
  font-size: 14px;
  line-height: 1.6;
  font-family: ${fontStack};
  max-width: 800px;
`;

const SectionHeader = styled.div`
  margin: 48px 0 24px 0;
  
  &:first-child {
    margin-top: 0;
  }
`;

const SectionTitle = styled.h2`
  margin: 0 0 12px 0;
  font-size: 24px;
  font-weight: 600;
  color: ${colorData.slate[900]};
  font-family: ${fontStack};
  line-height: 1.2;
`;

const SectionDescription = styled.p`
  margin: 0;
  color: ${colorData.slate[700]};
  font-size: 14px;
  line-height: 1.6;
  font-family: ${fontStack};
  max-width: 800px;
`;

export const PageHeader = ({ title, description }) => (
  <HeaderContainer>
    <Title>{title}</Title>
    {description && <Description>{description}</Description>}
  </HeaderContainer>
);

export const Section = ({ title, description, children }) => (
  <>
    <SectionHeader>
      <SectionTitle>{title}</SectionTitle>
      {description && <SectionDescription>{description}</SectionDescription>}
    </SectionHeader>
    {children}
  </>
);

export default PageHeader;