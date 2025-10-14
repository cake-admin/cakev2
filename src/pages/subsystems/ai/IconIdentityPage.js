import React from 'react';
import styled from 'styled-components';
import Card from '../../../components/design-system/Card';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import MotoAi from '../../../assets/ai/moto_ai.svg';
import MotoAiColor from '../../../assets/ai/moto_ai_color.svg';
import Robo1 from '../../../assets/ai/robo_1.svg';
import Robo2 from '../../../assets/ai/robo_2.svg';
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
  font-family: ${fontStack};
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
  margin-bottom: 32px;
  font-family: ${fontStack};
`;

const Section = styled.section`
  margin-bottom: 48px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 24px;
  color: #0F172A;
  font-family: ${fontStack};
`;

const SectionText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
  font-family: ${fontStack};
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
  font-family: ${fontStack};
`;

const CardText = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: #4b5563;
  margin: 0;
  font-family: ${fontStack};
`;

const IconIdentityPage = () => {
  return (
    <PageContainer>
      <Title>Icon & Identity</Title>
      <Description>
        Lenovo's AI identity maintains consistency across all software applications. The Moto AI logo has been adapted as the standard iconography for AI features within these applications.
      </Description>
      
      <Section>
        <SectionTitle>Logo Usage</SectionTitle>
        <SectionText>
          Use the Moto AI logo as the primary visual identity for Lenovo AI software to maintain brand consistency and recognition across all platforms.
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
        <SectionTitle>Brand Guidelines</SectionTitle>
        <SectionText>
          Our AI identity communicates intelligence, approachability, and trust while aligning with the broader Lenovo brand language.
        </SectionText>
        
        <CardGrid>
          <StyledCard>
            <Card.Body>
              <CardText>
                <strong>Consistency:</strong> Always use the approved Moto AI logo across all AI-powered features and applications.
              </CardText>
            </Card.Body>
          </StyledCard>
          
          <StyledCard>
            <Card.Body>
              <CardText>
                <strong>Color Variations:</strong> Use the full-color version on light backgrounds and the monochrome version when color is not available.
              </CardText>
            </Card.Body>
          </StyledCard>
          
          <StyledCard>
            <Card.Body>
              <CardText>
                <strong>Clear Space:</strong> Maintain adequate clear space around the logo to ensure visual clarity and impact.
              </CardText>
            </Card.Body>
          </StyledCard>
        </CardGrid>
      </Section>
    </PageContainer>
  );
};

export default IconIdentityPage;
