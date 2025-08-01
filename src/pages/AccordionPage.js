import React, { useState } from 'react';
import styled from 'styled-components';
import Accordion from '../components/design-system/Accordion';

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
  font-size: 1.5rem;
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
  background: ${props => props.isDarkMode ? '#000000' : '#FFFFFF'};
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const THEMES = {
  LIGHT_A: 'light',
  DARK_A: 'dark'
};

const loremText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.';

const sampleItems = [
  {
    id: '1',
    title: 'Title',
    content: loremText
  },
  {
    id: '2',
    title: 'Title',
    content: loremText,
    subtitle: 'Subtitle'
  },
  {
    id: '3',
    title: 'Title',
    content: loremText
  },
  {
    id: '4',
    title: 'Title',
    content: loremText
  }
];

const AccordionPage = () => {
  const [theme, setTheme] = useState(THEMES.LIGHT_A);
  const isDarkMode = theme === THEMES.DARK_A;

  return (
    <PageContainer>
      <Header>
        <Title>Accordion</Title>
        <Description>
          Accordions are interactive components that expand and collapse to reveal content,
          helping users manage information density and maintain context.
        </Description>
      </Header>

      <Section>
        <SectionTitle>Accordion</SectionTitle>
        <ControlsGrid>
          <Control>
            <Label>Theme</Label>
            <Select value={theme} onChange={(e) => setTheme(e.target.value)}>
              <option value={THEMES.LIGHT_A}>Light.a</option>
              <option value={THEMES.DARK_A}>Dark.a</option>
            </Select>
          </Control>

        </ControlsGrid>

        <PreviewSection isDarkMode={isDarkMode}>
          <Accordion
            items={sampleItems}
            theme={theme}
          />
        </PreviewSection>
      </Section>
    </PageContainer>
  );
};

export default AccordionPage;