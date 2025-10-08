import React from 'react';
import styled from 'styled-components';
import Card from '../../../components/design-system/Card';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import MotoAi from '../../../assets/ai/moto_ai.svg';
import MotoAiColor from '../../../assets/ai/moto_ai_color.svg';
import Robo1 from '../../../assets/ai/robo_1.svg';
import Robo2 from '../../../assets/ai/robo_2.svg';
import figmaLogo from '../../../assets/figma/icon full color.svg';
import { fontStack } from '../../../styles/globalStyles';

const PageContainer = styled.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
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
  margin-bottom: 32px;
`;

const Section = styled.section`
  margin-bottom: 48px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 24px;
  color: #0F172A;
`;

const SectionText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 32px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

const StyledCard = styled(Card)`
  position: relative;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  height: auto;
  min-height: fit-content;
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => props.smaller ? 'repeat(2, 96px)' : 'repeat(2, 108px)'};
  gap: 24px;
  margin-bottom: 16px;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled.img`
  width: ${props => props.smaller ? '96px' : '108px'};
  height: ${props => props.smaller ? '96px' : '108px'};
`;


const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  background-color: ${props => props.type === 'do' ? '#f0fdf4' : '#fef2f2'};
  padding: 16px 16px 12px;
  margin: -24px -24px 16px -24px;
  border-bottom: 4px solid ${props => props.type === 'do' ? '#047857' : '#B91C1C'};
`;

const HeaderIcon = styled.div`
  color: ${props => props.type === 'do' ? '#047857' : '#B91C1C'};
  display: flex;
  align-items: center;
`;

const HeaderText = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.type === 'do' ? '#047857' : '#B91C1C'};
  margin: 0;
`;

const CardText = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: #4b5563;
  margin: 0;
`;

// Resources section styled components
const ResourcesCardsRow = styled.div`
  padding-top: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  width: 100%;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 2fr;
  }
`;

const ResourcesCardTitle = styled.h3`
  margin: 0 0 12px 0;
  color: #334155;
  font-family: ${fontStack};
  font-size: 18px;
  font-weight: 600;
`;

const ResourcesCardText = styled.p`
  margin: 0;
  color: #334155;
  line-height: 1.5;
  font-family: ${fontStack};
  font-size: 14px;
  max-width: 680px;
`;

const FigmaLogo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 64px;
  height: 64px;
  margin-bottom: 16px;
  margin-right: 16px;
  
  img {
    width: 64px;
    height: 64px;
  }
`;

const ResourcesCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
  gap: 16px;
`;

const OpenInIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: #64748B;
  opacity: 0.8;
  transition: opacity 0.2s ease;
  
  svg {
    width: 16px;
    height: 16px;
  }
  
  &:hover {
    opacity: 1;
    color: #475569;
  }
`;

const CakeAiPage = () => {
  const cakeAiResource = {
    title: 'Cake for AI (C4AI)',
    description: 'Specialized components and patterns for AI-powered interfaces and experiences.',
    link: 'https://www.figma.com/community/file/1537497596724978160/cake-for-ai'
  };

  return (
    <PageContainer>
      <Title>Cake AI</Title>
      <Description>
        Our AI design system ensures a consistent, recognizable look across all products and platforms. It's designed to communicate intelligence, approachability, and trust while aligning with the broader brand language.
      </Description>
      
      <Section>
        <SectionTitle>Logo usage</SectionTitle>
        <SectionText>
          Lenovo's AI identity will maintain consistency across all software applications. The Moto AI logo has been adapted as the standard iconography for AI features within these applications.
        </SectionText>
        
                <CardGrid>
          <StyledCard type="do">
            <Card.Body>
              <CardHeader type="do">
                <HeaderIcon type="do">
                  <CheckCircleIcon />
                </HeaderIcon>
                <HeaderText type="do">Do</HeaderText>
              </CardHeader>
              <ImageContainer>
                <StyledImage src={MotoAiColor} alt="Moto AI color icon" />
                <StyledImage src={MotoAi} alt="Moto AI icon" />
              </ImageContainer>
              <CardText>Use the Moto AI logo as the primary visual identity for Lenovo AI software.</CardText>
            </Card.Body>
          </StyledCard>



          <StyledCard type="dont">
            <Card.Body>
              <CardHeader type="dont">
                <HeaderIcon type="dont">
                  <CancelIcon />
                </HeaderIcon>
                <HeaderText type="dont">Don't</HeaderText>
              </CardHeader>
              <ImageContainer smaller>
                <StyledImage smaller src={Robo1} alt="Example of robot imagery to avoid - robot 1" />
                <StyledImage smaller src={Robo2} alt="Example of robot imagery to avoid - robot 2" />
              </ImageContainer>
              <CardText>
                Do not use robot and / or android images for Lenovo AI software.
              </CardText>
            </Card.Body>
          </StyledCard>

        </CardGrid>
      </Section>

      <Section>
        <SectionTitle>Resources</SectionTitle>
        <SectionText>
          Access design resources and components specifically designed for AI-powered interfaces and experiences.
        </SectionText>
        <ResourcesCardsRow>
          <a href={cakeAiResource.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card elevated hoverable>
              <Card.Body style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <ResourcesCardHeader>
                  <FigmaLogo>
                    <img src={figmaLogo} alt="Figma" />
                  </FigmaLogo>
                  <OpenInIcon>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h12V3H5c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-7h-2v7z"/>
                    </svg>
                  </OpenInIcon>
                </ResourcesCardHeader>
                <ResourcesCardTitle>{cakeAiResource.title}</ResourcesCardTitle>
                <ResourcesCardText style={{ marginBottom: '20px', flex: 1 }}>
                  {cakeAiResource.description}
                </ResourcesCardText>
              </Card.Body>
            </Card>
          </a>
        </ResourcesCardsRow>
      </Section>
    </PageContainer>
  );
};

export default CakeAiPage;