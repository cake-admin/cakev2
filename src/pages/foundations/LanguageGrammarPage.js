import React from 'react';
import styled from 'styled-components';
import Card from '../../components/design-system/Card';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { fontStack } from '../../styles/globalStyles';
import colorData from '../../data/colors.json';

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
  margin-bottom: 1rem;
  color: #0F172A;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`;

const Section = styled.div`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #0F172A;
  font-weight: 600;
`;

const Subsection = styled.div`
  margin-bottom: 2rem;
`;

const SubsectionTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #1E293B;
  font-weight: 600;
`;

const ContentText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #475569;
  margin-bottom: 1rem;
  max-width: 680px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const LinkText = styled.a`
  color: #3B82F6;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const GuidelinesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const CardTitle = styled.h3`
  margin: 0 0 0.75rem 0;
  color: #334155;
  font-family: ${fontStack};
  font-size: 1.125rem;
  font-weight: 600;
`;

const CardText = styled.p`
  margin: 0;
  color: #334155;
  line-height: 1.5;
  font-family: ${fontStack};
  font-size: 1rem;
`;

// Do's and Don'ts styling
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 2rem;

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

const ExampleText = styled.div`
  margin-bottom: 0;
  font-family: ${fontStack};
  font-size: 1rem;
  color: #334155;
  font-weight: 500;
`;

const WidowExampleText = styled.div`
  margin-bottom: 0;
  font-family: ${fontStack};
  font-size: 1rem;
  color: #334155;
  font-weight: 500;
  width: 200px;
  line-height: 1.4;
`;

const OrphanExampleText = styled.div`
  margin-bottom: 0;
  font-family: ${fontStack};
  font-size: 1rem;
  color: #334155;
  font-weight: 500;
  width: 120px;
  line-height: 1.2;
`;

const DoDontCardText = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: #4b5563;
  margin: 0;
`;

// Resources section styled components
const ResourceCard = styled.div`
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
`;

const ResourceTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #0F172A;
  margin: 0 0 8px 0;
`;

const ResourceDescription = styled.p`
  font-size: 14px;
  color: #475569;
  margin: 0 0 12px 0;
  line-height: 1.5;
  max-width: 680px;
`;

const ResourceLink = styled.a`
  color: #3B82F6;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const LanguageGrammarPage = () => {
  return (
    <PageContainer>
      <Header>
        <Title>Language & Grammar</Title>
        <Description>
          Guidelines for creating clear, accessible, and purposeful content that aligns with Lenovo's tone of voice 
          and supports our mission of Smarter Technology for All.
        </Description>
      </Header>

      <Section>
        <SectionTitle>Tone of Voice</SectionTitle>
        
        <ContentText>
          We are tech optimists: We believe in the power of technology to enable positive human-centered outcomes and we know that a global, inclusive perspective is critical to real change.
        </ContentText>

        <Subsection>
          <SubsectionTitle>Lenovo is</SubsectionTitle>
          
          <GuidelinesGrid>
            <Card>
              <Card.Body>
                <CardTitle>Purposeful</CardTitle>
                <CardText>
                  There is an intent to everything we do.
                </CardText>
              </Card.Body>
            </Card>
            
            <Card>
              <Card.Body>
                <CardTitle>Unexpected</CardTitle>
                <CardText>
                  We don't sound like everyone else.
                </CardText>
              </Card.Body>
            </Card>
            
            <Card>
              <Card.Body>
                <CardTitle>Brave</CardTitle>
                <CardText>
                  We are confident in our point of view.
                </CardText>
              </Card.Body>
            </Card>
          </GuidelinesGrid>
        </Subsection>

      </Section>

      <Section>
        <SectionTitle>Content Guidelines</SectionTitle>
        
        <Subsection>
          <SubsectionTitle>Generally, the text itself is</SubsectionTitle>
          
          <GuidelinesGrid>
            <Card>
              <Card.Body>
                <CardTitle>Accessible</CardTitle>
                <CardText>
                  Language below a 7th grade reading level.<br/><br/>
                  Every element has text for screen readers including URLs and button states.<br/><br/>
                  Available in the languages our users are most proficient in.
                </CardText>
              </Card.Body>
            </Card>
            
            <Card>
              <Card.Body>
                <CardTitle>Purposeful</CardTitle>
                <CardText>
                  What our user can or should do to meet the goals in their best interest is clear.<br/><br/>
                  Suggestions supports Lenovo's mission of Smarter Technology for All.
                </CardText>
              </Card.Body>
            </Card>
            
            <Card>
              <Card.Body>
                <CardTitle>Concise</CardTitle>
                <CardText>
                  Information presented is relevant at the moment of the experience.<br/><br/>
                  Text is &lt;50 characters wide and &lt;4 lines long.<br/><br/>
                  Buttons have three or fewer words.
                </CardText>
              </Card.Body>
            </Card>
            
            <Card>
              <Card.Body>
                <CardTitle>Conversational</CardTitle>
                <CardText>
                  The words, phrases, and ideas presented are familiar or well explained.<br/><br/>
                  Directions are presented in useful, logical, and complete steps.
                </CardText>
              </Card.Body>
            </Card>
            
            <Card>
              <Card.Body>
                <CardTitle>Clear</CardTitle>
                <CardText>
                  Actions have unambiguous results.<br/><br/>
                  Error messages help our users to move forward.<br/><br/>
                  The same term means the same thing every time it is used.<br/><br/>
                  Policy information is easy to find.
                </CardText>
              </Card.Body>
            </Card>
          </GuidelinesGrid>
        </Subsection>
      </Section>

      <Section>
        <SectionTitle>Capitalization</SectionTitle>
        
        <ContentText>
          Sentence case should be used in all titles, headings, menu items, lists, labels and buttons.
        </ContentText>

        <CardGrid>
          <StyledCard>
            <Card.Body>
              <CardHeader type="do">
                <HeaderIcon type="do">
                  <CheckCircleIcon />
                </HeaderIcon>
                <HeaderText type="do">Do use sentence case for all UI text elements.</HeaderText>
              </CardHeader>
              <ExampleText>
                Check for updates
              </ExampleText>
            </Card.Body>
          </StyledCard>

          <StyledCard>
            <Card.Body>
              <CardHeader type="dont">
                <HeaderIcon type="dont">
                  <CancelIcon />
                </HeaderIcon>
                <HeaderText type="dont">Don't use title case or capitalize every word.</HeaderText>
              </CardHeader>
              <ExampleText>
                Check for Updates
              </ExampleText>
            </Card.Body>
          </StyledCard>
        </CardGrid>
      </Section>

      <Section>
        <SectionTitle>Punctuation</SectionTitle>
        
        <GuidelinesGrid>
          <Card>
            <Card.Body>
              <CardTitle>Consistent</CardTitle>
              <CardText>
                Punctuation is consistent.
              </CardText>
            </Card.Body>
          </Card>
          
          <Card>
            <Card.Body>
              <CardTitle>Headers</CardTitle>
              <CardText>
                Short strings such as headers do not need punctuation.
              </CardText>
            </Card.Body>
          </Card>
          
          <Card>
            <Card.Body>
              <CardTitle>Full sentences</CardTitle>
              <CardText>
                Full sentences always get full punctuation.
              </CardText>
            </Card.Body>
          </Card>
          
          <Card>
            <Card.Body>
              <CardTitle>Exclamation points</CardTitle>
              <CardText>
                Friendly, delightful uses of exclamation points are encouraged!
              </CardText>
            </Card.Body>
          </Card>
        </GuidelinesGrid>
      </Section>

      <Section>
        <SectionTitle>Body text</SectionTitle>
        
        <GuidelinesGrid>
          <Card>
            <Card.Body>
              <CardTitle>Detailed but not technical</CardTitle>
              <CardText>
                Body text should be detailed but not overly technical.
              </CardText>
            </Card.Body>
          </Card>
          
          <Card>
            <Card.Body>
              <CardTitle>Concise with opportunities</CardTitle>
              <CardText>
                Be concise but offer opportunities to learn more.
              </CardText>
            </Card.Body>
          </Card>
          
          <Card>
            <Card.Body>
              <CardTitle>Familiar language</CardTitle>
              <CardText>
                Use familiar language, especially when discussing technical or unfamiliar topics.
              </CardText>
            </Card.Body>
          </Card>
          
          <Card>
            <Card.Body>
              <CardTitle>Support with visuals</CardTitle>
              <CardText>
                Support with visuals.
              </CardText>
            </Card.Body>
          </Card>
          
          <Card>
            <Card.Body>
              <CardTitle>Avoid orphans and widows</CardTitle>
              <CardText>
                One word alone on a line (an orphan) and two words alone on a line (a widow) are to be avoided wherever possible.
              </CardText>
            </Card.Body>
          </Card>
        </GuidelinesGrid>
        
        <ContentText>
          Example:
        </ContentText>

        <CardGrid>
          <StyledCard>
            <Card.Body>
              <CardHeader type="do">
                <HeaderIcon type="do">
                  <CheckCircleIcon />
                </HeaderIcon>
                <HeaderText type="do">Do</HeaderText>
              </CardHeader>
              <ExampleText>
                This is a good example where there are several words on every line.
              </ExampleText>
            </Card.Body>
          </StyledCard>

          <StyledCard>
            <Card.Body>
              <CardHeader type="dont">
                <HeaderIcon type="dont">
                  <CancelIcon />
                </HeaderIcon>
                <HeaderText type="dont">Don't</HeaderText>
              </CardHeader>
              <WidowExampleText>
                This is an example where two words, called a widow, are alone on a line as a result of a line break.
              </WidowExampleText>
            </Card.Body>
          </StyledCard>

          <StyledCard>
            <Card.Body>
              <CardHeader type="dont">
                <HeaderIcon type="dont">
                  <CancelIcon />
                </HeaderIcon>
                <HeaderText type="dont">Don't</HeaderText>
              </CardHeader>
              <OrphanExampleText>
                This is an example where one word, called an orphan, is alone on a line as a result of a line break.
              </OrphanExampleText>
            </Card.Body>
          </StyledCard>
        </CardGrid>
      </Section>

      <Section>
        <SectionTitle>Resources</SectionTitle>
        
        <ContentText>
          Access official documentation and additional resources to expand your content toolkit.
        </ContentText>

        <ResourceCard>
          <ResourceTitle>Lenovo brand voice and tone guidelines</ResourceTitle>
          <ResourceDescription>
            Official Lenovo brand guidelines for tone of voice, messaging, and content strategy.
          </ResourceDescription>
          <ResourceLink href="https://brandworld.lenovo.com/tone-of-voice/" target="_blank" rel="noopener noreferrer">
            Visit Lenovo brand guidelines
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h12V3H5c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-7h-2v7z"/>
            </svg>
          </ResourceLink>
        </ResourceCard>
      </Section>
    </PageContainer>
  );
};

export default LanguageGrammarPage;
