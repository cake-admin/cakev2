import React from 'react';
import styled from 'styled-components';
import Card from '../components/design-system/Card';
import colorData from '../data/colors.json';

const PageContainer = styled.div`
  padding: 32px;
  width: 100%;
  box-sizing: border-box;
  font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
`;

const Title = styled.h1`
  margin: 0 0 24px 0;
  font-size: 32px;
  font-weight: 600;
  color: ${colorData.slate[900]};
  font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Description = styled.p`
  margin: 0 0 32px 0;
  color: ${colorData.slate[700]};
  font-size: 14px;
  line-height: 1.6;
  font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
  max-width: 800px;
`;

const HighlightBox = styled.div`
  background-color: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 32px;
  max-width: 800px;

  h2 {
    margin: 0 0 16px 0;
    font-size: 20px;
    font-weight: 600;
    color: ${colorData.slate[900]};
  }

  p {
    margin: 0;
    color: ${colorData.slate[700]};
    font-size: 14px;
    line-height: 1.6;
  }

  strong {
    color: #1D4ED8;
  }
`;

const ChangelogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  width: 100%;
`;

const ChangelogCard = styled(Card)`
  padding: 24px;
`;

const UpdateDate = styled.div`
  font-size: 12px;
  color: ${colorData.slate[700]};
  margin-bottom: 8px;
`;

const UpdateTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${colorData.slate[900]};
  margin: 0 0 16px 0;
`;

const UpdateType = styled.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 16px;
  
  ${props => {
    switch (props.type) {
      case 'Major':
        return 'background-color: #E8F5E9; color: #2E7D32;';
      case 'Minor':
        return 'background-color: #E3F2FD; color: #1565C0;';
      case 'Patch':
        return 'background-color: #FFF3E0; color: #E65100;';
      default:
        return 'background-color: #F5F5F5; color: #616161;';
    }
  }}
`;

const UpdateList = styled.ul`
  margin: 0;
  padding-left: 20px;
  
  li {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-bottom: 8px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const WhatsNew = () => {
  const updates = [
    {
      version: 'v4.0.1',
      date: 'March 15, 2024',
      type: 'Major',
      changes: [
        'Enhanced component library with improved accessibility',
        'New color system with better contrast ratios',
        'Dark mode support across all components',
        'Advanced form components and validation',
        'Performance optimizations and bug fixes'
      ]
    },
    {
      version: 'v3.0.0',
      date: 'February 15, 2024',
      type: 'Major',
      changes: [
        'Complete design system overhaul',
        'Redesigned component architecture',
        'New theming system',
        'Improved responsive design',
        'Enhanced component APIs'
      ]
    },
    {
      version: 'v2.0.0',
      date: 'January 15, 2024',
      type: 'Major',
      changes: [
        'Advanced component library',
        'Interactive documentation',
        'New design tokens system',
        'Improved accessibility standards'
      ]
    },
    {
      version: 'v1.0.0',
      date: 'January 1, 2024',
      type: 'Major',
      changes: [
        'Initial stable release',
        'Core component library',
        'Basic documentation',
        'Design tokens and theming support'
      ]
    }
  ];

  return (
    <PageContainer>
      <Title>What's New</Title>
      
      <HighlightBox>
        <h2>Coming Soon</h2>
        <p>
          Stay tuned for the upcoming release of Lenovo's <strong>Cake for AI</strong> design sub-system 
          built to support smarter, more intuitive interfaces across company wide applications. 
          Cake for AI will include best practices, reusable components, and design patterns 
          for creating thoughtful AI-driven user experiences.
        </p>
      </HighlightBox>

      <Description>
        Track the latest updates, improvements, and fixes to the Cake Design System. 
        Each release represents significant changes and additions to help you stay informed 
        about our evolving design language.
      </Description>

      <ChangelogGrid>
        {updates.map((update, index) => (
          <ChangelogCard key={index}>
            <UpdateDate>{update.date}</UpdateDate>
            <UpdateTitle>{update.version}</UpdateTitle>
            <UpdateType type={update.type}>{update.type} Release</UpdateType>
            <UpdateList>
              {update.changes.map((change, changeIndex) => (
                <li key={changeIndex}>{change}</li>
              ))}
            </UpdateList>
          </ChangelogCard>
        ))}
      </ChangelogGrid>
    </PageContainer>
  );
};

export default WhatsNew; 