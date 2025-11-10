import React, { useState } from 'react';
import styled from 'styled-components';
import Button, { BUTTON_VARIANTS, BUTTON_SIZES, ICON_VARIANTS } from '../components/design-system/Button.js';
import Tooltip, { TOOLTIP_POSITIONS } from '../components/design-system/Tooltip.js';
import { getTokenColor, THEMES } from '../tokens/colorTokens.js';
import InfoIcon from '@mui/icons-material/Info';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

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
  font-size: 2rem;
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
  font-size: 1.125rem;
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

const PreviewSection = styled.div`
  background: ${props => props.isDarkMode ? '#18181B' : '#FFFFFF'};
  padding: 48px;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  min-height: 200px;
`;

const ExampleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`;

const ExampleCard = styled.div`
  background: ${props => getTokenColor('surface.card', props.isDarkMode ? THEMES.DARK_A : THEMES.LIGHT_A)};
  padding: 24px;
  border-radius: 8px;
  border: 1px solid ${props => props.isDarkMode ? '#3F3F46' : '#E2E8F0'};
`;

const ExampleTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${props => props.isDarkMode ? '#D4D4D8' : '#0F172A'};
  margin-bottom: 16px;
`;

const ExampleContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80px;
`;

const TooltipPage = () => {
  const [position, setPosition] = useState(TOOLTIP_POSITIONS.TOP);
  const [theme, setTheme] = useState(THEMES.LIGHT_A);
  const isDarkMode = theme === THEMES.DARK_A;

  return (
    <PageContainer>
      <Header>
        <Title>Tooltip</Title>
        <Description>
          Tooltips provide contextual information when users hover over or focus on an element. 
          They are useful for displaying additional details, help text, or brief explanations without 
          cluttering the interface.
        </Description>
      </Header>

      <Section>
        <SectionTitle>Basic tooltip</SectionTitle>
        <ControlsGrid>
          <Control>
            <Label>Position</Label>
            <Select value={position} onChange={(e) => setPosition(e.target.value)}>
              <option value={TOOLTIP_POSITIONS.TOP}>Top</option>
              <option value={TOOLTIP_POSITIONS.BOTTOM}>Bottom</option>
              <option value={TOOLTIP_POSITIONS.LEFT}>Left</option>
              <option value={TOOLTIP_POSITIONS.RIGHT}>Right</option>
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

        <PreviewSection isDarkMode={isDarkMode}>
          <Tooltip 
            content="This is a tooltip example" 
            position={position} 
            isDarkMode={isDarkMode}
          >
            <Button
              variant={BUTTON_VARIANTS.ICON}
              iconVariant={ICON_VARIANTS.SECONDARY}
              size={BUTTON_SIZES.MEDIUM}
              isDarkMode={isDarkMode}
              customIcon={<InfoIcon />}
              aria-label="Information"
            />
          </Tooltip>
        </PreviewSection>
      </Section>

      <Section>
        <SectionTitle>Position examples</SectionTitle>
        <ExampleGrid>
          <ExampleCard isDarkMode={isDarkMode}>
            <ExampleTitle isDarkMode={isDarkMode}>Top</ExampleTitle>
            <ExampleContent>
              <Tooltip 
                content="Tooltip on top" 
                position={TOOLTIP_POSITIONS.TOP} 
                isDarkMode={isDarkMode}
              >
                <Button
                  variant={BUTTON_VARIANTS.ICON}
                  iconVariant={ICON_VARIANTS.SECONDARY}
                  size={BUTTON_SIZES.MEDIUM}
                  isDarkMode={isDarkMode}
                  customIcon={<HelpOutlineIcon />}
                  aria-label="Help"
                />
              </Tooltip>
            </ExampleContent>
          </ExampleCard>

          <ExampleCard isDarkMode={isDarkMode}>
            <ExampleTitle isDarkMode={isDarkMode}>Bottom</ExampleTitle>
            <ExampleContent>
              <Tooltip 
                content="Tooltip on bottom" 
                position={TOOLTIP_POSITIONS.BOTTOM} 
                isDarkMode={isDarkMode}
              >
                <Button
                  variant={BUTTON_VARIANTS.ICON}
                  iconVariant={ICON_VARIANTS.SECONDARY}
                  size={BUTTON_SIZES.MEDIUM}
                  isDarkMode={isDarkMode}
                  customIcon={<HelpOutlineIcon />}
                  aria-label="Help"
                />
              </Tooltip>
            </ExampleContent>
          </ExampleCard>

          <ExampleCard isDarkMode={isDarkMode}>
            <ExampleTitle isDarkMode={isDarkMode}>Left</ExampleTitle>
            <ExampleContent>
              <Tooltip 
                content="Tooltip on left" 
                position={TOOLTIP_POSITIONS.LEFT} 
                isDarkMode={isDarkMode}
              >
                <Button
                  variant={BUTTON_VARIANTS.ICON}
                  iconVariant={ICON_VARIANTS.SECONDARY}
                  size={BUTTON_SIZES.MEDIUM}
                  isDarkMode={isDarkMode}
                  customIcon={<HelpOutlineIcon />}
                  aria-label="Help"
                />
              </Tooltip>
            </ExampleContent>
          </ExampleCard>

          <ExampleCard isDarkMode={isDarkMode}>
            <ExampleTitle isDarkMode={isDarkMode}>Right</ExampleTitle>
            <ExampleContent>
              <Tooltip 
                content="Tooltip on right" 
                position={TOOLTIP_POSITIONS.RIGHT} 
                isDarkMode={isDarkMode}
              >
                <Button
                  variant={BUTTON_VARIANTS.ICON}
                  iconVariant={ICON_VARIANTS.SECONDARY}
                  size={BUTTON_SIZES.MEDIUM}
                  isDarkMode={isDarkMode}
                  customIcon={<HelpOutlineIcon />}
                  aria-label="Help"
                />
              </Tooltip>
            </ExampleContent>
          </ExampleCard>
        </ExampleGrid>
      </Section>
    </PageContainer>
  );
};

export default TooltipPage;

