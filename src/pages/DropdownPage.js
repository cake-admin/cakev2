import React, { useState } from 'react';
import styled from 'styled-components';
import Dropdown from '../components/design-system/Dropdown.tsx';
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

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 400px;
`;

const THEMES = {
  LIGHT_A: 'light.a',
  DARK_A: 'dark.a'
};

const STATES = {
  ENABLED: 'enabled',
  HOVERED: 'hovered',
  ACTIVE: 'active',
  SELECTED: 'selected',
  DISABLED: 'disabled'
};

const DropdownPage = () => {
  const [theme, setTheme] = useState(THEMES.LIGHT_A);
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedItemWithScroll, setSelectedItemWithScroll] = useState('');
  const [dropdownState, setDropdownState] = useState(STATES.ENABLED);
  const [basicItems] = useState([
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5'
  ]);
  const [scrollItems] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
    'Item 8',
    'Item 9',
    'Item 10',
    'Item 11',
    'Item 12',
    'Item 13',
    'Item 14',
    'Item 15'
  ]);

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  const handleSelectWithScroll = (item) => {
    setSelectedItemWithScroll(item);
  };

  const isDisabled = dropdownState === STATES.DISABLED;

  return (
    <PageContainer>
      <Header>
        <Title>Dropdown</Title>
        <Description>
          Dropdown component for selecting options from a list. Supports scrolling for long lists 
          and various interaction states. The dropdown displays a labeled input trigger that opens 
          a menu with selectable items.
        </Description>
      </Header>

      <Section>
        <SectionTitle>Basic Dropdown</SectionTitle>
        <ControlsGrid>
          <Control>
            <Label>Theme</Label>
            <Select value={theme} onChange={(e) => setTheme(e.target.value)}>
              <option value={THEMES.LIGHT_A}>Light.a</option>
              <option value={THEMES.DARK_A}>Dark.a</option>
            </Select>
          </Control>
          <Control>
            <Label>State</Label>
            <Select value={dropdownState} onChange={(e) => setDropdownState(e.target.value)}>
              <option value={STATES.ENABLED}>Enabled</option>
              <option value={STATES.DISABLED}>Disabled</option>
            </Select>
          </Control>
        </ControlsGrid>

        <PreviewSection theme={theme}>
          <DropdownContainer>
            <Dropdown
              label="Label"
              placeholder="Select"
              items={basicItems}
              selectedItem={selectedItem}
              disabled={isDisabled}
              theme={theme}
              onSelect={handleSelect}
            />
          </DropdownContainer>
        </PreviewSection>
      </Section>

      <Section>
        <SectionTitle>Dropdown with Scroll</SectionTitle>
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
          <DropdownContainer>
            <Dropdown
              label="Long List"
              placeholder="Select an item"
              items={scrollItems}
              selectedItem={selectedItemWithScroll}
              hasScroll={true}
              theme={theme}
              onSelect={handleSelectWithScroll}
            />
          </DropdownContainer>
        </PreviewSection>
      </Section>
    </PageContainer>
  );
};

export default DropdownPage;

