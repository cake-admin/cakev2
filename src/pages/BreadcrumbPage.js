import React, { useState } from 'react';
import styled from 'styled-components';
import Breadcrumb, { SEPARATOR_TYPES, BREADCRUMB_SIZES } from '../components/design-system/Breadcrumb';

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
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const THEMES = {
  LIGHT_A: 'light.a',
  DARK_A: 'dark.a'
};

// Sample breadcrumb data
const sampleItems = [
  { label: 'Item', href: '/' },
  { label: 'Item', href: '/item2' },
  { label: 'Item', href: '/item3' },
  { label: 'Item', href: '/item4' },
  { label: 'Item', href: '/item5' }
];

const BreadcrumbPage = () => {
  // Basic breadcrumb section state
  const [basicTheme, setBasicTheme] = useState(THEMES.LIGHT_A);
  const [basicShowBack, setBasicShowBack] = useState(true);
  const [basicItemCount, setBasicItemCount] = useState(2);
  
  const isBasicDarkMode = basicTheme === THEMES.DARK_A;
  
  // Get items based on count
  const getItems = (count) => {
    return sampleItems.slice(0, Math.max(1, Math.min(count, sampleItems.length)));
  };

  const handleBackClick = (e) => {
    console.log('Back button clicked');
  };

  const handleItemClick = (index, e) => {
    console.log(`Breadcrumb item ${index} clicked:`, getItems(basicItemCount)[index]);
  };

  return (
    <PageContainer>
      <Header>
        <Title>Breadcrumb</Title>
        <Description>
          The Breadcrumb Component is a navigation aid that provides users with a trail of links representing their current location within a hierarchical structure. It allows users to easily trace their path back to previous pages or sections within an application or website.
        </Description>
      </Header>

      <Section>
        <ControlsGrid>
          <Control>
            <Label>Number of Items</Label>
            <Select 
              value={basicItemCount} 
              onChange={(e) => setBasicItemCount(parseInt(e.target.value))}
            >
              <option value={2}>2 items</option>
              <option value={3}>3 items</option>
              <option value={4}>4 items</option>
              <option value={5}>5 items</option>
            </Select>
          </Control>

          <Control>
            <Label>Show Back Button</Label>
            <Select 
              value={basicShowBack ? 'yes' : 'no'} 
              onChange={(e) => setBasicShowBack(e.target.value === 'yes')}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Select>
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
          <Breadcrumb
            items={getItems(basicItemCount)}
            showBackButton={basicShowBack}
            backButtonText="Back"
            separatorType={SEPARATOR_TYPES.CHEVRON}
            size={BREADCRUMB_SIZES.MEDIUM}
            isDarkMode={isBasicDarkMode}
            onBackClick={handleBackClick}
            onItemClick={handleItemClick}
          />
        </PreviewSection>
      </Section>
    </PageContainer>
  );
};

export default BreadcrumbPage; 