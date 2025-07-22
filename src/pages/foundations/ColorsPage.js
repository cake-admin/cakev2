import React from 'react';
import styled from 'styled-components';
import ColorBlock from '../../components/design-system/ColorBlock';
import colorData from '../../data/colors.json';

const PageContainer = styled.div`
  padding: 32px;
  width: 100%;
  box-sizing: border-box;
  font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
`;

const Title = styled.h1`
  margin: 0 0 24px 0;
  font-size: 32px;
  font-weight: 600;
  color: #333;
  font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
`;

const ColorSection = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 4px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  color: #666;
  text-transform: none;
  font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
  width: 120px;
  min-width: 120px;
  margin: 0;
  padding-right: 24px;
  position: sticky;
  top: 0;
`;

const ColorGridContainer = styled.div`
  flex: 1;
  min-width: 0;
`;

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 4px;
  width: 100%;
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(12, 1fr);
  }
`;

const Description = styled.p`
  margin: 0 0 32px 0;
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
  max-width: 800px;
`;

const ColorsPage = () => {
  const formatColorName = (category, shade) => {
    if (category === 'common' || category === 'brand') {
      return shade;
    }
    return shade;
  };

  // Get all categories in the order they appear in the JSON file
  const categories = Object.keys(colorData);

  // Define the order of shades
  const shadeOrder = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];

  const renderColorGrid = (category, colors) => {
    if (category === 'common' || category === 'brand') {
      return (
        <ColorGridContainer>
          <ColorGrid>
            {Object.entries(colors).map(([name, hex]) => (
              <ColorBlock
                key={`${category}-${name}`}
                name={name}
                hex={hex}
              />
            ))}
          </ColorGrid>
        </ColorGridContainer>
      );
    }

    return (
      <ColorGridContainer>
        <ColorGrid>
          {shadeOrder.map(shade => (
            <ColorBlock
              key={`${category}-${shade}`}
              name={shade}
              hex={colors[shade]}
            />
          ))}
        </ColorGrid>
      </ColorGridContainer>
    );
  };

  return (
    <PageContainer>
      <Title>Color</Title>
      <Description>
        Color is a fundamental part of our design language. It sets the tone for our brand, guides user attention, 
        and ensures accessible, consistent experiences across products. This section outlines our core color palette 
        and provides usage guidance to maintain visual harmony, support accessibility, and reinforce brand identity.
      </Description>

      {/* Render all color categories in their original order */}
      {categories.map(category => {
        const colors = colorData[category];
        const displayName = category.charAt(0).toUpperCase() + category.slice(1);
        
        return (
          <ColorSection key={category}>
            <SectionTitle>{displayName}</SectionTitle>
            {renderColorGrid(category, colors)}
          </ColorSection>
        );
      })}
    </PageContainer>
  );
};

export default ColorsPage; 