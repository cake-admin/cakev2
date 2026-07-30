import React from 'react';
import styled from 'styled-components';
import Card from '../components/design-system/Card';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import AuroraBackground from '../components/AuroraBackground';
import AudienceCard from '../components/website/AudienceCard';

import { fontStack } from '../styles/globalStyles';





const PageContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 60px 20px 120px 20px;
  position: relative;
  z-index: 1;
`;

const PageHeader = styled.div`
  margin-bottom: 20px;
`;

const WelcomeTitle = styled.h1`
  color: #0F172A;
  font-family: ${fontStack};
  font-weight: 800;
  font-size: clamp(4rem, 12vw, 8rem);
  line-height: 1.1;
  padding-bottom: 0.5rem;
  margin: 0;

  @media (max-width: 640px) {
    line-height: 1.2;
  }
`;

const PageSubheader = styled.h2`
  color: #334155;
  font-family: ${fontStack};
  font-weight: 400;
  font-stretch: 580;
  font-size: 2.25rem;
  line-height: 1.4;
  margin: 0 0 0.5rem 0;
  max-width: 680px;
`;

const Section = styled.section`
  padding: 1rem 0px;
`;

const SectionTitle = styled.h2`
  color: #334155;
  font-family: ${fontStack};
  font-weight: 600;
  font-size: 1.125rem;
  margin: 0 0 0.5rem 0;
`;

const CardsRow = styled.div`
  padding-top: 0.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  width: 100%;
  align-items: stretch;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
  color: #1E293B;
  
  & > svg {
    width: 2rem;
    height: 2rem;
  }
`;

const CardTitle = styled.h3`
  margin: 0 0 0.75rem 0;
  color: #334155;
  font-family: ${fontStack};
  font-size: 0.875rem;
  font-weight: 600;
`;

const CardText = styled.p`
  margin: 0;
  color: #334155;
  line-height: 1.5;
  font-family: ${fontStack};
  font-weight: 400;
  font-stretch: 580;
  font-size: 0.875rem;
  max-width: 680px;

  a {
    color: #1D4ED8;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Home = () => {

    return (
    <>
    <AuroraBackground />
    <PageContainer>
      <PageHeader>
        <WelcomeTitle>Cake</WelcomeTitle>
        <PageSubheader>
          Ingredients for great design.
        </PageSubheader>
      </PageHeader>

      <CardsRow>
        <AudienceCard
          type="designers"
          title="Designers"
          body="Access our Figma libraries, iconography, and patterns guidelines to create consistent Lenovo experiences."
          actionLabel="Get Figma kit"
          to="/get-started/figma-libraries"
          stretchActions
        />
        <AudienceCard
          type="developers"
          title="Developers"
          body="Explore our full component library in Storybook to see interactive examples, usage guidelines, and available props for every component."
          actionLabel="View Storybook"
          href="https://cake.lenovo.com/storybook/"
        />
        <AudienceCard
          type="resources"
          title="Resources"
          body="Visit our Resources page for downloadable brand assets, approved fonts, logos, color palettes, and links to our full brand guidelines."
          actionLabel="View resources"
          to="/resources"
        />
      </CardsRow>

      <Section style={{ marginTop: '2rem' }}>
        <SectionTitle style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#0F172A' }}>
          Why build with Cake?
        </SectionTitle>
        
        <CardsRow>
          <Card elevated style={{ display: 'flex', flexDirection: 'column' }}>
            <Card.Body style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <IconWrapper>
                  <svg width="2rem" height="2rem" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>
                  </svg>
                </IconWrapper>
              </div>
              <CardTitle style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Accessibility</CardTitle>
              <CardText style={{ marginBottom: '1.25rem', flex: 1, fontSize: '1rem' }}>
                Every Cake component is built to meet{' '}
                <a 
                  href="https://www.w3.org/TR/WCAG22/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#1D4ED8', textDecoration: 'none' }}
                >
                  WCAG 2.2 AA standards
                </a>
                , ensuring your experiences are accessible, inclusive, and usable by everyone, regardless of ability or device.
              </CardText>
            </Card.Body>
          </Card>

          <Card elevated style={{ display: 'flex', flexDirection: 'column' }}>
            <Card.Body style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <IconWrapper>
                  <DesignServicesIcon />
                </IconWrapper>
              </div>
              <CardTitle style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Brand</CardTitle>
              <CardText style={{ marginBottom: '1.25rem', flex: 1, fontSize: '1rem' }}>
                Maintain brand consistency across all your applications. Cake provides the building blocks that reflect Lenovo's design language and values.
              </CardText>
            </Card.Body>
          </Card>

          <Card elevated style={{ display: 'flex', flexDirection: 'column' }}>
            <Card.Body style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <IconWrapper>
                  <svg width="2rem" height="2rem" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H19c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/>
                  </svg>
                </IconWrapper>
              </div>
              <CardTitle style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Modularity</CardTitle>
              <CardText style={{ marginBottom: '1.25rem', flex: 1, fontSize: '1rem' }}>
                Build with confidence using our modular component system. Mix and match components to create consistent, scalable interfaces that adapt to your needs.
              </CardText>
            </Card.Body>
          </Card>
        </CardsRow>
      </Section>
    </PageContainer>
    </>
  );
};

export default Home; 