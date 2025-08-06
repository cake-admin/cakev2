import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fontStack } from '../../styles/globalStyles';
import colorData from '../../data/colors.json';

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

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 48px;
`;

const Card = styled(Link)`
  background: white;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 24px;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  }
`;

const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #1D4ED8;
  margin: 0 0 12px 0;
  font-family: ${fontStack};
`;

const CardDescription = styled.p`
  margin: 0;
  color: ${colorData.slate[700]};
  font-size: 14px;
  line-height: 1.6;
`;

const Section = styled.div`
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: ${colorData.slate[900]};
  margin: 0 0 16px 0;
  font-family: ${fontStack};
`;

const List = styled.ul`
  margin: 0 0 24px 0;
  padding-left: 20px;
  color: ${colorData.slate[700]};
  font-size: 14px;
  line-height: 1.6;
  
  li {
    margin-bottom: 8px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    color: ${colorData.slate[900]};
  }
`;

const AboutCake = () => {
  return (
    <PageContainer>
      <Header>
        <Title>About Cake</Title>
        <Description>
          Cake is One Lenovo's unified design system that helps teams build consistent, 
          high-quality experiences across all Lenovo digital products. It provides a comprehensive 
          set of tools, components, and guidelines to create cohesive, user-centered experiences 
          efficiently while maintaining Lenovo's brand identity and quality standards.
        </Description>
      </Header>

      <CardsGrid>
        <Card to="/foundations/colors">
          <CardTitle>Foundations</CardTitle>
          <CardDescription>
            Explore our core design foundations including colors, typography, spacing, 
            and grid systems that form the basis of our design language.
          </CardDescription>
        </Card>

        <Card to="/components/button">
          <CardTitle>Components</CardTitle>
          <CardDescription>
            Discover our library of reusable UI components, built with accessibility 
            and flexibility in mind to help you create consistent interfaces.
          </CardDescription>
        </Card>

        <Card to="/content/guidelines">
          <CardTitle>Content</CardTitle>
          <CardDescription>
            Learn about our content guidelines, voice and tone, writing style, and 
            best practices for creating clear and consistent user experiences.
          </CardDescription>
        </Card>
      </CardsGrid>

      <Section>
        <SectionTitle>Key Features</SectionTitle>
        <List>
          <li>
            <strong>Unified Components:</strong> A comprehensive library of reusable UI 
            components that maintain consistency across all Lenovo products.
          </li>
          <li>
            <strong>Design Tokens:</strong> Standardized design variables for colors, 
            typography, spacing, and other foundational elements.
          </li>
          <li>
            <strong>Accessibility:</strong> Built-in accessibility features ensuring all 
            components meet WCAG guidelines.
          </li>
          <li>
            <strong>Documentation:</strong> Detailed guidelines and best practices for 
            implementing the design system effectively.
          </li>
        </List>
      </Section>

      <Section>
        <SectionTitle>Who It's For</SectionTitle>
        <List>
          <li>
            <strong>Designers:</strong> Create consistent designs using our Figma libraries 
            and guidelines.
          </li>
          <li>
            <strong>Developers:</strong> Build robust applications using our React component 
            library and documentation.
          </li>
          <li>
            <strong>Product Managers:</strong> Ensure product consistency and quality across 
            the Lenovo ecosystem.
          </li>
          <li>
            <strong>Content Strategists:</strong> Maintain consistent voice and tone using 
            our content guidelines.
          </li>
        </List>
      </Section>

      <Section>
        <SectionTitle>Version Information</SectionTitle>
        <Description>
          Cake is continuously evolving to meet the needs of our teams and users. The current 
          version (4.0.1) introduces improved accessibility features, expanded component 
          library, and enhanced documentation.
        </Description>
      </Section>
    </PageContainer>
  );
};

export default AboutCake; 