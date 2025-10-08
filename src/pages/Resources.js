import React from 'react';
import styled from 'styled-components';
import Card from '../components/design-system/Card';
import { fontStack } from '../styles/globalStyles';
import colorData from '../data/colors.json';
import figmaLogo from '../assets/figma/icon full color.svg';

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
  margin-bottom: 16px;
  color: #0F172A;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  max-width: 800px;
`;

const Section = styled.section`
  margin-bottom: 48px;
`;

const SectionTitle = styled.h2`
  color: #334155;
  font-family: ${fontStack};
  font-weight: 600;
  font-size: 18px;
  margin: 0 0 16px 0;
`;

const SectionDescription = styled.p`
  color: #334155;
  font-family: ${fontStack};
  font-size: 14px;
  line-height: 24px;
  margin: 0 0 24px 0;
  max-width: 680px;
`;

const CardsRow = styled.div`
  padding-top: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  width: 100%;
`;

const CardTitle = styled.h3`
  margin: 0 0 12px 0;
  color: #334155;
  font-family: ${fontStack};
  font-size: 18px;
  font-weight: 600;
`;

const CardText = styled.p`
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

const CardHeader = styled.div`
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

const ExternalLink = styled.a`
  color: #1D4ED8;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Resources = () => {
  const figmaLibraries = [
    {
      title: 'Cake',
      description: 'Core design system components and foundations for Lenovo products.',
      link: 'https://www.figma.com/community/file/1397963315281891204/cake-one-lenovo-design-system'
    },
    {
      title: 'Cake for AI (C4AI)',
      description: 'Specialized components and patterns for AI-powered interfaces and experiences.',
      link: 'https://www.figma.com/community/file/1537497596724978160/cake-for-ai'
    },
  ];



  return (
    <PageContainer>
      <Header>
        <Title>Resources</Title>
        <Description>
          Access our comprehensive collection of design resources including Figma libraries and brand assets 
          designed for different use cases and industries.
        </Description>
      </Header>

      <Section>
        <SectionTitle>Figma Libraries</SectionTitle>
        <SectionDescription>
          Design system libraries and components for different use cases and industries.
        </SectionDescription>
                 <CardsRow>
           {figmaLibraries.map((library, index) => (
             <a href={library.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
               <Card key={index} elevated hoverable>
               <Card.Body style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                 <CardHeader>
                   <FigmaLogo>
                     <img src={figmaLogo} alt="Figma" />
                   </FigmaLogo>
                   <OpenInIcon>
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                       <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h12V3H5c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-7h-2v7z"/>
                     </svg>
                   </OpenInIcon>
                 </CardHeader>
                 <CardTitle>{library.title}</CardTitle>
                 <CardText style={{ marginBottom: '20px', flex: 1 }}>
                   {library.description}
                 </CardText>
               </Card.Body>
             </Card>
             </a>
           ))}
         </CardsRow>
      </Section>
    </PageContainer>
  );
};

export default Resources;
