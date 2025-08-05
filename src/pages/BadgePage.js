import React, { useState } from 'react';
import styled from 'styled-components';
import Badge, { BADGE_COLORS, BADGE_SIZES } from '../components/design-system/Badge';

const PageContainer = styled.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`;

const Header = styled.div`
  margin-bottom: 48px;
`;

const Title = styled.h1`
  font-size: 1.5rem; /* 24px */
  margin-bottom: 16px;
  color: #0F172A;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`;

const Section = styled.section`
  margin-bottom: 48px;
`;

const SectionTitle = styled.h2`
  font-size: 1.125rem; /* 18px */
  margin-bottom: 24px;
  color: #0F172A;
`;

const ControlsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`;

const Control = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: 600;
  color: #0F172A;
`;

const Select = styled.select`
  padding: 8px 32px 8px 12px;
  border: 1px solid #E2E8F0;
  border-radius: 4px;
  font-size: 14px;
  background-color: #FFFFFF;
  color: #0F172A;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #3B82F6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  &:hover {
    border-color: #CBD5E1;
  }
`;

const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #E2E8F0;
  border-radius: 4px;
  font-size: 14px;
  background-color: #FFFFFF;
  color: #0F172A;
  
  &:focus {
    outline: none;
    border-color: #3B82F6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  &:hover {
    border-color: #CBD5E1;
  }
`;

const PreviewSection = styled.div`
  background: ${props => props.isDarkMode ? '#18181B' : '#FFFFFF'};
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;



const THEMES = {
  LIGHT_A: 'light.a',
  DARK_A: 'dark.a'
};

const BadgePage = () => {
  // Basic badge section state
  const [basicColor, setBasicColor] = useState(BADGE_COLORS.BLUE);
  const [basicSize, setBasicSize] = useState(BADGE_SIZES.MEDIUM);
  const [basicContent, setBasicContent] = useState('1');
  const [basicTheme, setBasicTheme] = useState(THEMES.LIGHT_A);
  const isBasicDarkMode = basicTheme === THEMES.DARK_A;



  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  return (
    <PageContainer>
      <Header>
        <Title>Badge</Title>
        <Description>
          The Badge component is a compact UI element used to display small amounts of information, 
          such as notification counts, status indicators, or numerical labels. It automatically 
          adapts its shape from circular (for single digits) to pill-shaped (for multi-digit numbers) 
          to provide optimal visual presentation.
        </Description>
      </Header>

      <Section>
        <SectionTitle>Basic badge</SectionTitle>
        <ControlsGrid>
          <Control>
            <Label>Color</Label>
            <Select value={basicColor} onChange={(e) => setBasicColor(e.target.value)}>
              {Object.values(BADGE_COLORS).map((color) => (
                <option key={color} value={color}>{capitalizeFirstLetter(color)}</option>
              ))}
            </Select>
          </Control>

          <Control>
            <Label>Size</Label>
            <Select value={basicSize} onChange={(e) => setBasicSize(e.target.value)}>
              {Object.values(BADGE_SIZES).map((size) => (
                <option key={size} value={size}>{capitalizeFirstLetter(size)}</option>
              ))}
            </Select>
          </Control>

          <Control>
            <Label>Content</Label>
            <Input 
              type="text" 
              value={basicContent} 
              onChange={(e) => setBasicContent(e.target.value)}
              placeholder="Enter badge content"
            />
          </Control>

          <Control>
            <Label>Theme</Label>
            <Select value={basicTheme} onChange={(e) => setBasicTheme(e.target.value)}>
              <option value={THEMES.LIGHT_A}>Light.a</option>
              <option value={THEMES.DARK_A}>Dark.a</option>
            </Select>
          </Control>
        </ControlsGrid>

        <PreviewSection isDarkMode={isBasicDarkMode}>
          <Badge
            color={basicColor}
            size={basicSize}
            isDarkMode={isBasicDarkMode}
          >
            {basicContent}
          </Badge>
        </PreviewSection>
      </Section>


    </PageContainer>
  );
};

export default BadgePage; 