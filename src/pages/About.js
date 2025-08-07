import React from 'react';
import styled from 'styled-components';
import Card from '../components/design-system/Card';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import ExtensionIcon from '@mui/icons-material/Extension';
import { fontStack } from '../styles/globalStyles';
import colorData from '../data/colors.json';

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
  padding: 16px 0px;
`;

const SectionTitle = styled.h2`
  color: #334155;
  font-family: ${fontStack};
  font-weight: 600;
  font-size: 18px;
  margin: 0 0 8px 0;
`;

const SectionDescription = styled.p`
  color: #334155;
  font-family: ${fontStack};
  font-size: 14px;
  line-height: 24px;
  margin: 0 0 16px 0;
  max-width: 680px;
`;

const CardsRow = styled.div`
  padding-top: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  width: 100%;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;
  color: #1E293B;
  
  & > svg {
    width: 32px;
    height: 32px;
  }
`;

const CardTitle = styled.h3`
  margin: 0 0 12px 0;
  color: #334155;
  font-family: ${fontStack};
  font-size: 14px;
  font-weight: 600;
`;

const CardText = styled.p`
  margin: 0;
  color: #334155;
  line-height: 1.5;
  font-family: ${fontStack};
  font-size: 14px;
  max-width: 680px;

  a {
    color: #1D4ED8;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const About = () => {
  return (
    <PageContainer>
      <Header>
        <Title>About</Title>
        <Description>
          Discover the principles and foundations that make Cake the perfect ingredient for great design. 
          The One Lenovo "Cake" Design System is a design framework aimed at creating a unified design 
          language across all Lenovo software.
        </Description>
      </Header>

      <Section>
        <SectionTitle>Core Principles</SectionTitle>
        <SectionDescription>
          Our design system is built on a foundation of consistency, accessibility, and flexibility. 
          Each component is designed to work seamlessly together while maintaining individual functionality.
        </SectionDescription>
        
        <CardsRow>
          <Card hoverable elevated>
            <Card.Body>
              <IconWrapper>
                <AutoFixHighIcon />
              </IconWrapper>
              <CardTitle>Consistency</CardTitle>
              <CardText>
                Unified design language across all components ensures a cohesive user experience.
              </CardText>
            </Card.Body>
          </Card>
          
          <Card hoverable elevated>
            <Card.Body>
              <IconWrapper>
                <AccessibilityNewIcon />
              </IconWrapper>
              <CardTitle>Accessibility</CardTitle>
              <CardText>
                All components meet <a href="https://www.w3.org/TR/WCAG22/" target="_blank" rel="noopener noreferrer">WCAG guidelines</a> and support keyboard navigation.
              </CardText>
            </Card.Body>
          </Card>
          
          <Card hoverable elevated>
            <Card.Body>
              <IconWrapper>
                <ExtensionIcon />
              </IconWrapper>
              <CardTitle>Flexibility</CardTitle>
              <CardText>
                Customizable components that adapt to different use cases and requirements.
              </CardText>
            </Card.Body>
          </Card>
        </CardsRow>
      </Section>
    </PageContainer>
  );
};

export default About;
