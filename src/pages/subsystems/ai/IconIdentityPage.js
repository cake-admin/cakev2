import React from 'react';
import styled from 'styled-components';
import Card from '../../../components/design-system/Card';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import MotoAi from '../../../assets/ai/moto_ai.svg';
import MotoAiColor from '../../../assets/ai/moto_ai_color.svg';
import Robo1 from '../../../assets/ai/robo_1.svg';
import Robo2 from '../../../assets/ai/robo_2.svg';

const PageContainer = styled.div`
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 24px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 32px;
  color: #4A5568;
`;

const Section = styled.section`
  margin-bottom: 48px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`;

const SectionText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #4A5568;
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

const IconIdentityPage = () => {
  return (
    <PageContainer>
      <Title>Icon & Identity</Title>
      <Description>
        Guidelines and components for AI-powered icon generation and brand identity management in the Cake Design System.
      </Description>
      
      <Section>
        <SectionTitle>AI Identity</SectionTitle>
        <SectionText>
          Our AI features should feel intelligent, trustworthy, and human-centered — not cold, robotic, or impersonal. This section outlines principles for visually representing AI in a way that reflects our values and product goals.
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
              <CardText>Use the Moto AI icon as the primary visual identity for AI for Lenovo software solutions.</CardText>
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
              <CardText>
                Do not use AI branding or iconography unless your feature has been reviewed and approved by the Responsible AI Committee. Your feature must meet the established AI feature definition criteria and guidelines before incorporating any AI-specific visual elements.
              </CardText>
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
              <CardText>
                Do not modify, alter, or create variations of the Moto AI icon. The icon should be used as provided to maintain consistency across all Lenovo software solutions.
              </CardText>
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
                While robot icons and android faces are a common shorthand for AI, we deliberately steer away from these for several reasons:
              </CardText>
              <div style={{ marginTop: '16px' }}>
                <CardText style={{ fontWeight: '600', marginBottom: '8px' }}>1. Cliché and Overused</CardText>
                <CardText style={{ marginBottom: '16px' }}>
                  Robot imagery is widely used and lacks distinction. It makes our brand look generic, not thoughtful or innovative.
                </CardText>

                <CardText style={{ fontWeight: '600', marginBottom: '8px' }}>2. Cold and Mechanical</CardText>
                <CardText style={{ marginBottom: '16px' }}>
                  Our AI is designed to be helpful, approachable, and collaborative — not distant or machine-like. Robot faces often send the wrong emotional signal.
                </CardText>

                <CardText style={{ fontWeight: '600', marginBottom: '8px' }}>3. Limits Brand Flexibility</CardText>
                <CardText style={{ marginBottom: '16px' }}>
                  Robotic imagery ties us to a narrow interpretation of AI. As our capabilities grow (e.g., copilots, recommendations, insights), we need a broader and more timeless visual language.
                </CardText>

                <CardText style={{ fontWeight: '600', marginBottom: '8px' }}>4. May Trigger Distrust</CardText>
                <CardText>
                  Robot faces can evoke "uncanny valley" discomfort or fears of AI replacing humans. We want to inspire confidence, not anxiety.
                </CardText>
              </div>
            </Card.Body>
          </StyledCard>
        </CardGrid>
      </Section>
    </PageContainer>
  );
};

export default IconIdentityPage;