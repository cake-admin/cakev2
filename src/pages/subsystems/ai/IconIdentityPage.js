import React from 'react';
import styled from 'styled-components';
import Card from '../../../components/design-system/Card';
import DbConsumer from '../../../assets/ai/db_consumer.svg';
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

const IconShowcaseCard = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  display: inline-flex;
  flex-direction: column;
  padding: 24px 32px 32px;
  gap: 8px;
  margin-top: 24px;
  overflow: hidden;
`;

const IconImage = styled.img`
  width: 128px;
  height: 128px;
`;

const IconCaption = styled.p`
  font-size: 16px;
  line-height: 22px;
  color: #334155;
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

        <IconShowcaseCard>
          <IconImage src={DbConsumer} alt="The Double Bubble AI icon" />
          <IconCaption>The "Double Bubble" AI icon</IconCaption>
        </IconShowcaseCard>
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
