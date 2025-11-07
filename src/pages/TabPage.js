import React, { useState } from 'react';
import styled from 'styled-components';
import Tab, { TAB_THEMES, TAB_ORIENTATIONS } from '../components/design-system/Tab';
import { getTokenColor } from '../tokens/colorTokens';

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

const PreviewSection = styled.div`
  background: ${props => getTokenColor('background.canvas', props.theme || (props.isDarkMode ? 'dark.a' : 'light.a'))};
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const PreviewContainer = styled.div`
  width: 100%;
  max-width: ${props => props.maxWidth || '100%'};
`;

const THEMES = {
  LIGHT_A: 'light.a',
  DARK_A: 'dark.a'
};

const STATES = {
  DISABLED: 'disabled'
};

const TabPage = () => {
  // Basic tabs section state
  const [basicTheme, setBasicTheme] = useState(THEMES.LIGHT_A);
  const [basicState, setBasicState] = useState('');
  const [basicSelectedTab, setBasicSelectedTab] = useState('tab1');

  // Overflow tabs section state
  const [overflowTheme, setOverflowTheme] = useState(THEMES.LIGHT_A);
  const [overflowState, setOverflowState] = useState('');
  const [overflowSelectedTab, setOverflowSelectedTab] = useState('tab1');

  // Basic tabs data
  const basicTabs = [
    { id: 'tab1', label: 'Tab' },
    { id: 'tab2', label: 'Tab' },
    { id: 'tab3', label: 'Tab' },
    { id: 'tab4', label: 'Tab' },
    { id: 'tab5', label: 'Tab' },
    { id: 'tab6', label: 'Tab' },
    { id: 'tab7', label: 'Tab' }
  ];

  // Overflow tabs data (more tabs to trigger overflow)
  const overflowTabs = [
    { id: 'tab1', label: 'Tab' },
    { id: 'tab2', label: 'Tab' },
    { id: 'tab3', label: 'Tab' },
    { id: 'tab4', label: 'Tab' },
    { id: 'tab5', label: 'Tab' },
    { id: 'tab6', label: 'Tab' },
    { id: 'tab7', label: 'Tab' },
    { id: 'tab8', label: 'Tab' },
    { id: 'tab9', label: 'Tab' },
    { id: 'tab10', label: 'Tab' },
    { id: 'tab11', label: 'Tab' },
    { id: 'tab12', label: 'Tab' }
  ];

  return (
    <PageContainer>
      <Header>
        <Title>Tab</Title>
        <Description>
          The Tab component is used to organize content into multiple panels that can be switched between. 
          Tabs provide a clear way to navigate between different sections of content while maintaining context.
        </Description>
      </Header>

      <Section>
        <SectionTitle>Basic horizontal tabs</SectionTitle>
        <ControlsGrid>
          <Control>
            <Label>Theme</Label>
            <Select value={basicTheme} onChange={(e) => setBasicTheme(e.target.value)}>
              <option value={THEMES.LIGHT_A}>Light.a</option>
              <option value={THEMES.DARK_A}>Dark.a</option>
            </Select>
          </Control>

          <Control>
            <Label>State</Label>
            <Select value={basicState} onChange={(e) => setBasicState(e.target.value)}>
              <option value="">None</option>
              <option value={STATES.DISABLED}>Disabled</option>
            </Select>
          </Control>
        </ControlsGrid>

        <PreviewSection theme={basicTheme}>
          <PreviewContainer maxWidth="600px">
            <Tab
              tabs={basicTabs}
              selectedTab={basicSelectedTab}
              onTabChange={setBasicSelectedTab}
              theme={basicTheme}
              disabled={basicState === STATES.DISABLED}
            />
          </PreviewContainer>
        </PreviewSection>
      </Section>

      <Section>
        <SectionTitle>Horizontal tabs with overflow</SectionTitle>
        <ControlsGrid>
          <Control>
            <Label>Theme</Label>
            <Select value={overflowTheme} onChange={(e) => setOverflowTheme(e.target.value)}>
              <option value={THEMES.LIGHT_A}>Light.a</option>
              <option value={THEMES.DARK_A}>Dark.a</option>
            </Select>
          </Control>

          <Control>
            <Label>State</Label>
            <Select value={overflowState} onChange={(e) => setOverflowState(e.target.value)}>
              <option value="">None</option>
              <option value={STATES.DISABLED}>Disabled</option>
            </Select>
          </Control>
        </ControlsGrid>

        <PreviewSection theme={overflowTheme}>
          <PreviewContainer maxWidth="600px">
            <Tab
              tabs={overflowTabs}
              selectedTab={overflowSelectedTab}
              onTabChange={setOverflowSelectedTab}
              theme={overflowTheme}
              disabled={overflowState === STATES.DISABLED}
            />
          </PreviewContainer>
        </PreviewSection>
      </Section>
    </PageContainer>
  );
};

export default TabPage;

