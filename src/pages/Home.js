import React from 'react';
import styled from 'styled-components';
import Card from '../components/design-system/Card';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import ExtensionIcon from '@mui/icons-material/Extension';
import { fontStack } from '../styles/globalStyles';
import colorData from '../data/colors.json';

const PageContainer = styled.div`
  max-width: 680px;
  margin: 0 auto;
  padding: 60px 20px 120px 20px;
`;

const PageHeader = styled.div`
  margin-bottom: 40px;
`;

const PageTitle = styled.h1`
  color: ${colorData.slate[900]};
  font-family: ${fontStack};
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  padding-bottom: 24px;
  margin: 0;
`;

const PageDescription = styled.p`
  color: ${colorData.slate[700]};
  font-family: ${fontStack};
  font-size: 14px;
  line-height: 24px;
  margin: 0 0 24px 0;
`;

const Section = styled.section`
  padding: 16px 0px;
`;

const SectionTitle = styled.h2`
  color: ${colorData.slate[700]};
  font-family: ${fontStack};
  font-weight: 600;
  font-size: 18px;
  margin: 0 0 16px 0;
`;

const SectionDescription = styled.p`
  color: ${colorData.slate[700]};
  font-family: ${fontStack};
  font-size: 14px;
  line-height: 24px;
  margin: 0 0 32px 0;
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
  color: ${colorData.slate[900]};
  
  & > svg {
    width: 32px;
    height: 32px;
  }
`;

const Home = () => {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>One Lenovo "Cake" Design System</PageTitle>
        <PageDescription>
          The One Lenovo "Cake" Design System is a design framework aimed at creating a unified design language across all Lenovo software. Its purpose is to ensure consistency, improve usability, and enhance the overall user experience of Lenovo's diverse range of digital products.
        </PageDescription>
      </PageHeader>

      <Section>
        <SectionTitle>Core Principles</SectionTitle>
        <SectionDescription>
          Our design system is built on a foundation of consistency, accessibility, and flexibility. 
          Each component is designed to work seamlessly together while maintaining individual functionality.
        </SectionDescription>
        
        <CardsRow>
          <Card elevated style={{ height: '100%', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: '8px' }}>
            <Card.Body>
              <IconWrapper>
                <AutoFixHighIcon />
              </IconWrapper>
              <h3 style={{ margin: '0 0 12px 0', color: '#111827', fontFamily: '"Segoe UI", system-ui, sans-serif', fontSize: '14px', fontWeight: '600' }}>Consistency</h3>
              <p style={{ margin: 0, color: '#6b7280', lineHeight: '1.5', fontFamily: '"Segoe UI", Helvetica, sans-serif', fontSize: '14px' }}>
                Unified design language across all components ensures a cohesive user experience.
              </p>
            </Card.Body>
          </Card>
          
          <Card elevated style={{ height: '100%', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: '8px' }}>
            <Card.Body>
              <IconWrapper>
                <AccessibilityNewIcon />
              </IconWrapper>
              <h3 style={{ margin: '0 0 12px 0', color: '#111827', fontFamily: '"Segoe UI", system-ui, sans-serif', fontSize: '14px', fontWeight: '600' }}>Accessibility</h3>
              <p style={{ margin: 0, color: '#6b7280', lineHeight: '1.5', fontFamily: '"Segoe UI", Helvetica, sans-serif', fontSize: '14px' }}>
                All components meet <a href="https://www.w3.org/TR/WCAG22/" target="_blank" rel="noopener noreferrer" style={{ color: '#1D4ED8', textDecoration: 'none' }}>WCAG guidelines</a> and support keyboard navigation.
              </p>
            </Card.Body>
          </Card>
          
          <Card elevated style={{ height: '100%', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)', borderRadius: '8px' }}>
            <Card.Body>
              <IconWrapper>
                <ExtensionIcon />
              </IconWrapper>
              <h3 style={{ margin: '0 0 12px 0', color: '#111827', fontFamily: '"Segoe UI", system-ui, sans-serif', fontSize: '14px', fontWeight: '600' }}>Flexibility</h3>
              <p style={{ margin: 0, color: '#6b7280', lineHeight: '1.5', fontFamily: '"Segoe UI", Helvetica, sans-serif', fontSize: '14px' }}>
                Customizable components that adapt to different use cases and requirements.
              </p>
            </Card.Body>
          </Card>
        </CardsRow>
      </Section>
    </PageContainer>
  );
};

export default Home; 