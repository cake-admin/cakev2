import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../components/design-system/Button';
import Card from '../components/design-system/Card';

const PageContainer = styled.div`
  max-width: 680px;
  margin: 0 auto;
  padding: 60px 0px 120px 0px;
`;

const PageHeader = styled.div`
  margin-bottom: 40px;
`;

const PageTitle = styled.h1`
  color: #171717;
  font-family: "Segoe UI", system-ui, sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  padding-bottom: 24px;
  margin: 0;
`;

const PageDescription = styled.p`
  color: #334155;
  font-family: "Segoe UI", Helvetica, sans-serif;
  font-size: 14px;
  line-height: 24px;
  margin: 0 0 24px 0;
`;

const Section = styled.section`
  padding: 16px 0px;
`;

const SectionTitle = styled.h2`
  color: #334155;
  font-family: "Segoe UI", system-ui, sans-serif;
  font-weight: 600;
  font-size: 18px;
  margin: 0 0 16px 0;
`;

const SectionDescription = styled.p`
  color: #334155;
  font-family: "Segoe UI", Helvetica, sans-serif;
  font-size: 14px;
  line-height: 24px;
  margin: 0 0 32px 0;
`;

const CardsRow = styled.div`
  padding-top: 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;
  width: 100%;
`;

const ComponentCard = styled(Card)`
  cursor: pointer;
  text-decoration: none;
  width: 300px;
  height: 200px;
  display: flex;
  overflow: hidden;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  flex: auto;
  transition: transform 0.8s ease, box-shadow 0.8s ease;
  
  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  }
`;

const ComponentIcon = styled.div`
  width: 48px;
  height: 48px;
  background: #1D4ED8;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-top: 32px;
`;

const StatCard = styled.div`
  background: #ffffff;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #E2E8F0;
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #1D4ED8;
  margin-bottom: 8px;
  font-family: "Segoe UI", system-ui, sans-serif;
`;

const StatLabel = styled.div`
  font-size: 14px;
  color: #6b7280;
  font-weight: 500;
  font-family: "Segoe UI", system-ui, sans-serif;
`;

const Home = () => {
  const components = [
    {
      title: 'Button',
      description: 'Interactive buttons with multiple variants, sizes, and states.',
      icon: '🔘',
      path: '/components/button'
    },
    {
      title: 'Card',
      description: 'Content containers with various layouts and interactive states.',
      icon: '📄',
      path: '/components/card'
    },
    {
      title: 'Input',
      description: 'Form inputs with validation states and helper text.',
      icon: '📝',
      path: '/components/input'
    },
    {
      title: 'Modal',
      description: 'Overlay dialogs with backdrop and keyboard navigation.',
      icon: '🪟',
      path: '/components/modal'
    }
  ];

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Design System</PageTitle>
        <PageDescription>
          A comprehensive collection of reusable components, guided by clear standards, 
          that can be assembled together to build any number of applications.
        </PageDescription>
      </PageHeader>

      <Section>
        <SectionTitle>Core Principles</SectionTitle>
        <SectionDescription>
          Our design system is built on a foundation of consistency, accessibility, and flexibility. 
          Each component is designed to work seamlessly together while maintaining individual functionality.
        </SectionDescription>
        
        <CardsRow>
          <Card elevated>
            <Card.Body>
              <h3 style={{ margin: '0 0 12px 0', color: '#111827', fontFamily: '"Segoe UI", system-ui, sans-serif', fontSize: '14px', fontWeight: '600' }}>Consistency</h3>
              <p style={{ margin: 0, color: '#6b7280', lineHeight: '1.5', fontFamily: '"Segoe UI", Helvetica, sans-serif', fontSize: '14px' }}>
                Unified design language across all components ensures a cohesive user experience.
              </p>
            </Card.Body>
          </Card>
          
          <Card elevated>
            <Card.Body>
              <h3 style={{ margin: '0 0 12px 0', color: '#111827', fontFamily: '"Segoe UI", system-ui, sans-serif', fontSize: '14px', fontWeight: '600' }}>Accessibility</h3>
              <p style={{ margin: 0, color: '#6b7280', lineHeight: '1.5', fontFamily: '"Segoe UI", Helvetica, sans-serif', fontSize: '14px' }}>
                All components meet WCAG guidelines and support keyboard navigation.
              </p>
            </Card.Body>
          </Card>
          
          <Card elevated>
            <Card.Body>
              <h3 style={{ margin: '0 0 12px 0', color: '#111827', fontFamily: '"Segoe UI", system-ui, sans-serif', fontSize: '14px', fontWeight: '600' }}>Flexibility</h3>
              <p style={{ margin: 0, color: '#6b7280', lineHeight: '1.5', fontFamily: '"Segoe UI", Helvetica, sans-serif', fontSize: '14px' }}>
                Customizable components that adapt to different use cases and requirements.
              </p>
            </Card.Body>
          </Card>
        </CardsRow>
      </Section>

      <Section>
        <SectionTitle>Components</SectionTitle>
        <SectionDescription>
          Browse our collection of reusable components. Each component includes interactive examples, 
          usage guidelines, and code snippets.
        </SectionDescription>
        
        <CardsRow>
          {components.map((component) => (
            <ComponentCard key={component.path} hoverable as={Link} to={component.path}>
              <Card.Body>
                <ComponentIcon>{component.icon}</ComponentIcon>
                <Card.Title>{component.title}</Card.Title>
                <Card.Subtitle>{component.description}</Card.Subtitle>
              </Card.Body>
            </ComponentCard>
          ))}
        </CardsRow>
      </Section>

      <Section>
        <SectionTitle>System Stats</SectionTitle>
        <SectionDescription>
          Our design system continues to grow and evolve with your feedback and needs.
        </SectionDescription>
        
        <StatsGrid>
          <StatCard>
            <StatNumber>4</StatNumber>
            <StatLabel>Core Components</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>12+</StatNumber>
            <StatLabel>Variants</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>100%</StatNumber>
            <StatLabel>Accessible</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>3</StatNumber>
            <StatLabel>Size Options</StatLabel>
          </StatCard>
        </StatsGrid>
      </Section>
    </PageContainer>
  );
};

export default Home; 