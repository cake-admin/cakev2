import React from 'react';
import styled from 'styled-components';
import { fontStack } from '../../styles/globalStyles';

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

const Section = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 0 0 16px 0;
`;

const FigmaLibraries = () => {
  return (
    <PageContainer>
      <Header>
        <Title>Figma Libraries</Title>
        <Description>
          Access and use our official Figma libraries to ensure consistency across your designs.
          These libraries contain all the components, styles, and patterns used in the Cake design system.
        </Description>
      </Header>

      <Section>
        <SectionTitle>Getting Started</SectionTitle>
        <Description>
          To get started with our Figma libraries, request access through your team lead or project manager.
          Once granted access, you'll be able to use all of our components and styles in your Figma designs.
        </Description>
      </Section>

      <Section>
        <SectionTitle>Available Libraries</SectionTitle>
        <Description>
          • Core Components Library - Contains all basic UI components<br />
          • Icons Library - Complete set of system icons<br />
          • Patterns Library - Common UI patterns and layouts<br />
          • Brand Assets - Logos, colors, and other brand resources
        </Description>
      </Section>

      <Section>
        <SectionTitle>Best Practices</SectionTitle>
        <Description>
          • Always use components from the library instead of creating new ones<br />
          • Keep your designs in sync with the latest library updates<br />
          • Report any issues or suggestions through the design system team<br />
          • Follow the component documentation for proper usage guidelines
        </Description>
      </Section>
    </PageContainer>
  );
};

export default FigmaLibraries; 