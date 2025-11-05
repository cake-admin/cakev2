import React, { useState } from 'react';
import styled from 'styled-components';
import Menu from '../components/design-system/Menu.tsx';
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

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const THEMES = {
  LIGHT_A: 'light.a',
  DARK_A: 'dark.a'
};

const MenuPage = () => {
  const [theme, setTheme] = useState(THEMES.LIGHT_A);
  const [selectedItem, setSelectedItem] = useState('Item 2');
  const [menuItems] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5'
  ]);

  const handleItemClick = (item) => {
    setSelectedItem(item === selectedItem ? '' : item);
  };

  return (
    <PageContainer>
      <Header>
        <Title>Menu</Title>
        <Description>
          Menu component for displaying a list of options that users can select from. 
          Supports various item states including hover, selected, focused, and disabled.
        </Description>
      </Header>

      <Section>
        <SectionTitle>Menu</SectionTitle>
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
          <MenuContainer>
            <Menu
              items={menuItems}
              selectedItem={selectedItem}
              theme={theme}
              onItemClick={handleItemClick}
            />
          </MenuContainer>
        </PreviewSection>
      </Section>
    </PageContainer>
  );
};

export default MenuPage;

