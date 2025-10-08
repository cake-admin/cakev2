import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Card from '../components/design-system/Card';
import Chip from '../components/design-system/Chip';
import Button, { BUTTON_VARIANTS, BUTTON_SIZES } from '../components/design-system/Button';
import InfoIcon from '@mui/icons-material/Info';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CampaignIcon from '@mui/icons-material/Campaign';
import ExploreIcon from '@mui/icons-material/Explore';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AuroraBackground from '../components/AuroraBackground';


import { fontStack } from '../styles/globalStyles';
import colorData from '../data/colors.json';





const PageContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 20px 120px 20px;
  position: relative;
  z-index: 1;
`;

const PageHeader = styled.div`
  margin-bottom: 20px;
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
  font-size: clamp(4rem, 12vw, 8rem);
  line-height: 1.1;
  padding-bottom: 0.5rem;
  margin: 0;

  @media (max-width: 640px) {
    line-height: 1.2;
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
  font-size: 2.25rem;
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

const LinkButton = styled.button`
  background: none;
  border: none;
  color: #1D4ED8;
  font-family: ${fontStack};
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  margin: 0;
  text-align: left;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    color: #1E3A8A;
  }
  
  &:focus {
    outline: none;
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
        <Link to="/resources" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
          <Card elevated hoverable style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Card.Body style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div>
                <CardTitle style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Get started</CardTitle>
                <CardText style={{ marginBottom: '1.25rem', fontSize: '1rem' }}>
                Start building modular, accessible, and brand-aligned features using our core components. Explore foundations, patterns, and reusable components to design faster and more consistently across Lenovo products.
                </CardText>
              </div>
              <div style={{ marginTop: 'auto' }}>
                <button style={{
                  background: 'none',
                  border: 'none',
                  color: '#1D4ED8',
                  fontFamily: fontStack,
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  padding: '0',
                  margin: '0',
                  textAlign: 'left',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  Access Figma Libraries
                  <ArrowForwardIcon style={{ width: '16px', height: '16px' }} />
                </button>
              </div>
            </Card.Body>
          </Card>
        </Link>

                <Link to="/whats-new" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
          <Card elevated hoverable style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Card.Body style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div>
                <CardTitle style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>What's new</CardTitle>
                <div style={{ 
                  padding: '1rem',
                  border: '1px solid #E2E8F0',
                  borderRadius: '0.75rem',
                  background: 'white'
                }}>
                  <div>
                    <ReleaseDate style={{ fontSize: '0.75rem', marginBottom: '0.5rem' }}>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</ReleaseDate>
                    <ReleaseVersion style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>🎉 Cake Web V2 Update</ReleaseVersion>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                <button style={{
                  background: 'none',
                  border: 'none',
                  color: '#1D4ED8',
                  fontFamily: fontStack,
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  padding: '0',
                  margin: '0',
                  textAlign: 'left',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  Find out what's new
                  <ArrowForwardIcon style={{ width: '16px', height: '16px' }} />
                </button>
              </div>

            </Card.Body>
          </Card>
        </Link>


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
        </CardsRow>
      </Section>
    </PageContainer>
    </>
  );
};

export default Home; 