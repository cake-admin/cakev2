import React, { useState } from 'react';
import styled from 'styled-components';
import Spinner, { SPINNER_SIZES } from '../components/design-system/Spinner.js';
import {
  PageContainer,
  Header,
  Title,
  Description,
  Section,
  SectionTitle,
  ControlsGrid,
  Control,
  Label,
  Select,
  PreviewSection
} from '../components/ComponentPageTemplate';

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
`;

const THEMES = {
  LIGHT_A: 'light.a',
  DARK_A: 'dark.a'
};

const SpinnerPage = () => {
  const [size, setSize] = useState(SPINNER_SIZES.SMALL);
  const [theme, setTheme] = useState(THEMES.LIGHT_A);
  const isDarkMode = theme === THEMES.DARK_A;

  return (
    <PageContainer>
      <Header>
        <Title>Loading</Title>
        <Description>
          Loading indicator component for displaying progress and loading states. 
          The spinner provides visual feedback to users that content is being loaded or processed.
        </Description>
      </Header>

      <Section>
        <SectionTitle>Spinner</SectionTitle>
        <ControlsGrid>
          <Control>
            <Label>Size</Label>
            <Select value={size} onChange={(e) => setSize(e.target.value)}>
              <option value={SPINNER_SIZES.XSMALL}>Extra Small (16px)</option>
              <option value={SPINNER_SIZES.SMALL}>Small (24px)</option>
              <option value={SPINNER_SIZES.LARGE}>Large (64px)</option>
            </Select>
          </Control>
          <Control>
            <Label>Theme</Label>
            <Select value={theme} onChange={(e) => setTheme(e.target.value)}>
              <option value={THEMES.LIGHT_A}>Light.a</option>
              <option value={THEMES.DARK_A}>Dark.a</option>
            </Select>
          </Control>
        </ControlsGrid>

        <PreviewSection theme={theme}>
          <SpinnerContainer>
            <Spinner size={size} isDarkMode={isDarkMode} />
          </SpinnerContainer>
        </PreviewSection>
      </Section>
    </PageContainer>
  );
};

export default SpinnerPage;

