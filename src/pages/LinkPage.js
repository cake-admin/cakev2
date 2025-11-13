import React, { useState } from 'react';
import styled from 'styled-components';
import Link from '../components/design-system/Link.js';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { fontStack } from '../styles/globalStyles.js';
import cakeColorTokensData from '../tokens/cake-color-tokens.json';
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

// Parse cake-color-tokens.json
let cakeColorTokens;
try {
  cakeColorTokens = typeof cakeColorTokensData === 'string' 
    ? JSON.parse(cakeColorTokensData)
    : cakeColorTokensData;
} catch (error) {
  console.error('Failed to parse cake-color-tokens.json:', error);
  cakeColorTokens = {};
}

/**
 * Get color token value
 */
const getColorToken = (tokenName, isDarkMode) => {
  const themeKey = isDarkMode ? 'darkA' : 'lightA';
  
  if (cakeColorTokens[tokenName] && cakeColorTokens[tokenName][themeKey]) {
    return cakeColorTokens[tokenName][themeKey];
  }
  
  // Fallback colors
  const fallbacks = {
    'textPrimary': { lightA: '#0F172A', darkA: '#D4D4D8' },
    'textSecondary': { lightA: '#334155', darkA: '#A1A1AA' }
  };
  
  if (fallbacks[tokenName]) {
    return fallbacks[tokenName][themeKey];
  }
  
  console.warn(`Color token "${tokenName}" not found in cake-color-tokens.json`);
  return isDarkMode ? '#A1A1AA' : '#334155';
};

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
`;

const LinkRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
`;

const ExampleCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  padding: 24px;
  border-radius: 4px;
  background: ${props => props.isDarkMode ? '#18181B' : '#FFFFFF'};
  border: 1px solid ${props => props.isDarkMode ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 0)'};
  width: 100%;
  max-width: 432px;
`;

const ExampleHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  width: 100%;
`;

const ExampleSubtitle = styled.p`
  font-family: ${fontStack};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
  color: ${props => getColorToken('textPrimary', props.isDarkMode)};
`;

const ExampleBody = styled.p`
  font-family: ${fontStack};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
  color: ${props => getColorToken('textSecondary', props.isDarkMode)};
`;

const ExamplesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 24px;
  width: 100%;
`;

const THEMES = {
  LIGHT_A: 'light.a',
  DARK_A: 'dark.a'
};

const LinkPage = () => {
  const [theme, setTheme] = useState(THEMES.LIGHT_A);
  const isDarkMode = theme === THEMES.DARK_A;

  return (
    <PageContainer>
      <Header>
        <Title>Link</Title>
        <Description>
          Interactive link component for navigation with optional icon support. 
          Links provide clear visual feedback for clickable text and support multiple states including enabled, hovered, and disabled.
        </Description>
      </Header>

      <Section>
        <SectionTitle>Link States</SectionTitle>
        <ControlsGrid>
          <Control>
            <Label>Theme</Label>
            <Select value={theme} onChange={(e) => setTheme(e.target.value)}>
              <option value={THEMES.LIGHT_A}>Light.a</option>
              <option value={THEMES.DARK_A}>Dark.a</option>
            </Select>
          </Control>
        </ControlsGrid>

        <PreviewSection theme={theme}>
          <LinkContainer>
            <LinkRow>
              <Link href="#" isDarkMode={isDarkMode}>
                Link
              </Link>
              <Link href="#" icon={<OpenInNewIcon />} isDarkMode={isDarkMode}>
                Link with icon
              </Link>
            </LinkRow>
            <LinkRow>
              <Link href="#" disabled isDarkMode={isDarkMode}>
                Disabled link
              </Link>
              <Link href="#" icon={<OpenInNewIcon />} disabled isDarkMode={isDarkMode}>
                Disabled link with icon
              </Link>
            </LinkRow>
          </LinkContainer>
        </PreviewSection>
      </Section>

      <Section>
        <SectionTitle>Usage Examples</SectionTitle>
        <PreviewSection theme={theme}>
          <ExampleCard isDarkMode={isDarkMode}>
            <ExampleHeader isDarkMode={isDarkMode}>
              <ExampleSubtitle isDarkMode={isDarkMode}>Subtitle</ExampleSubtitle>
              <ExampleBody isDarkMode={isDarkMode}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
              </ExampleBody>
            </ExampleHeader>
            <Link href="#" icon={<OpenInNewIcon />} isDarkMode={isDarkMode}>
              Open in windows settings
            </Link>
          </ExampleCard>
        </PreviewSection>
      </Section>
    </PageContainer>
  );
};

export default LinkPage;

