import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Card from '../components/design-system/Card';
import Chip from '../components/design-system/Chip';
import InfoIcon from '@mui/icons-material/Info';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CampaignIcon from '@mui/icons-material/Campaign';
import ExploreIcon from '@mui/icons-material/Explore';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { fontStack } from '../styles/globalStyles';
import colorData from '../data/colors.json';





const PageContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 20px 120px 20px;
`;

const PageHeader = styled.div`
  margin-bottom: 40px;
`;

const ReleaseCard = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(0, 0, 0, 0.05);
  min-width: 200px;
`;

const ReleaseDate = styled.div`
  color: #64748B;
  font-family: ${fontStack};
  font-size: 0.875rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
`;

const ReleaseVersion = styled.div`
  color: #0F172A;
  font-family: ${fontStack};
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`;

const ReleaseChips = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const StyledSuccessIcon = styled(CheckCircleIcon)`
  color: #047857;
`;

const EmeraldChip = styled(Chip)`
  background-color: #D1FAE5 !important;
  color: #065F46 !important;
  
  .icon-left svg {
    color: #10B981 !important;
  }
`;


const WelcomeTitle = styled.h1`
  color: #0F172A;
  font-family: ${fontStack};
  font-weight: 800;
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1.2;
  padding-bottom: 1.25rem;
  margin: 0;

  @media (max-width: 640px) {
    line-height: 1.3;
  }
`;

const PageTitle = styled.h1`
  color: #0F172A;
  font-family: ${fontStack};
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 1.2;
  margin: 0 0 1rem 0;
`;

const PageSubheader = styled.h2`
  color: #334155;
  font-family: ${fontStack};
  font-weight: 400;
  font-stretch: 580;
  font-size: 1.75rem;
  line-height: 1.4;
  margin: 0 0 0.5rem 0;
  max-width: 680px;
`;

const PageDescription = styled.p`
  color: #334155;
  font-family: ${fontStack};
  font-weight: 400;
  font-stretch: 580;
  font-size: 0.875rem;
  line-height: 1.5rem;
  margin: 0 0 1.5rem 0;
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

const SectionDescription = styled.p`
  color: #334155;
  font-family: ${fontStack};
  font-weight: 400;
  font-stretch: 580;
  font-size: 0.875rem;
  line-height: 1.5rem;
  margin: 0 0 1rem 0;
  max-width: 680px;
`;

const CardsRow = styled.div`
  padding-top: 0.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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
      <PageContainer>
      <PageHeader>
        <WelcomeTitle>Welcome to Cake</WelcomeTitle>
        <PageSubheader>Ingredients for great design.</PageSubheader>
      </PageHeader>

      <CardsRow>
        <Link to="/resources" style={{ textDecoration: 'none', color: 'inherit', height: '100%', display: 'block' }}>
          <Card elevated hoverable style={{ height: '100%' }}>
            <Card.Body style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <IconWrapper>
                  <ExploreIcon />
                </IconWrapper>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '1.25rem', height: '1.25rem', color: '#475569', opacity: 1 }}>
                  <ArrowForwardIcon style={{ width: '1.25rem', height: '1.25rem' }} />
                </div>
              </div>
              <CardTitle style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Get started</CardTitle>
              <CardText style={{ marginBottom: '1.25rem', flex: 1, fontSize: '1rem' }}>
              Start building with Cake using Figma libraries for core components, foundations, AI, and subsystems like PC Software, Enterprise, and Gaming.
              </CardText>
            </Card.Body>
          </Card>
        </Link>

        <Link to="/whats-new" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
          <Card elevated hoverable>
            <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <IconWrapper>
                  <CampaignIcon />
                </IconWrapper>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '1.25rem', height: '1.25rem', color: '#475569', opacity: 1 }}>
                  <ArrowForwardIcon style={{ width: '1.25rem', height: '1.25rem' }} />
                </div>
              </div>
              <CardTitle style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>What's new</CardTitle>
              <CardText style={{ marginBottom: '1rem', flex: 1, fontSize: '1rem' }}>
                Track the latest updates, improvements, and fixes to the Cake Design System.
              </CardText>
              <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                <div style={{ 
                  padding: '1rem',
                  border: '1px solid #E2E8F0',
                  borderRadius: '0.75rem',
                  background: '#fafafa'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <ReleaseDate style={{ fontSize: '0.75rem', marginBottom: '0.5rem' }}>May 1, 2025</ReleaseDate>
                      <ReleaseVersion style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>v1.4.0</ReleaseVersion>
                    </div>
                    <Chip 
                      type="success" 
                      label="Current" 
                      leftIcon={<StyledSuccessIcon />}
                      size="small"
                    />
                  </div>
                </div>
              </div>

            </Card.Body>
          </Card>
        </Link>


      </CardsRow>

      <Section style={{ marginTop: '5rem' }}>
        <SectionTitle style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#0F172A' }}>
          Why build with Cake?
        </SectionTitle>
        <SectionDescription style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
          Discover the core principles that make Cake the perfect foundation for your next feature.
        </SectionDescription>
        
        <CardsRow>
          <Card elevated style={{ height: '100%' }}>
            <Card.Body style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
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

          <Card elevated style={{ height: '100%' }}>
            <Card.Body style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
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

          <Card elevated style={{ height: '100%' }}>
            <Card.Body style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
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
        </CardsRow>
      </Section>
    </PageContainer>
    </>
  );
};

export default Home; 