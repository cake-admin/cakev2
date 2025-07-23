import React from 'react';
import styled from 'styled-components';
import Card from '../components/design-system/Card';
import colorData from '../data/colors.json';
import { Check as CheckIcon } from '@mui/icons-material';

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

const ChangelogGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 1200px;
`;

const CurrentVersionWrapper = styled.div`
  width: 100%;
`;

const OlderVersionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  width: 100%;
`;

const StyledUpdateDate = styled.div`
  font-size: 14px;
  color: ${colorData.slate[600]};
  margin-bottom: 12px;
`;

const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 12px 0 20px;
`;

const CurrentBadge = styled.span`
  display: inline-flex;
  align-items: center;
  background-color: #ECFDF5;
  color: #047857;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 13px;
  font-weight: 500;
  gap: 6px;

  .MuiSvgIcon-root {
    font-size: 16px;
  }
`;

const UpdateType = styled.span`
  display: inline-block;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 13px;
  font-weight: 500;
  
  ${props => {
    switch (props.type) {
      case 'Major':
        return 'background-color: #EEF3FF; color: #1E293B;';
      case 'Minor':
        return 'background-color: #F1F5F9; color: #1E293B;';
      case 'Patch':
        return 'background-color: #FFF3E0; color: #E65100;';
      default:
        return 'background-color: #F5F5F5; color: #616161;';
    }
  }}
`;

const UpdateList = styled.ul`
  margin: 0;
  padding-left: 24px;
  
  li {
    font-size: 14px;
    color: ${colorData.slate[700]};
    line-height: 1.6;
    margin-bottom: 12px;
    padding-left: 4px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const StyledCardTitle = styled(Card.Title)`
  font-size: 24px !important;
  font-weight: 600 !important;
  color: ${colorData.slate[900]} !important;
  margin: 0 !important;
`;

const WhatsNew = () => {
  const updates = [
    {
      version: 'v1.4.0',
      date: 'May 1, 2025',
      type: 'Major',
      current: true,
      changes: [
        'Updated core components and focus state to meet WCAG 2.2 guidelines',
        'Improved interaction consistency across all core components',
        'Color contrast improvements for better readability and accessibility'
      ]
    },
    {
      version: 'v1.3.0',
      date: 'July 17, 2024',
      type: 'Minor',
      current: false,
      changes: [
        'Improved core component consistency and usability',
        'Refined Figma layout for easier navigation',
        'Added sections for raw components, themes, and usage guidelines'
      ]
    },
    {
      version: 'v1.2.8',
      date: 'May 16, 2024',
      type: 'Minor',
      current: false,
      changes: [
        'Added Date Picker component',
        'Updated asterisk required to error color token and SegoeUI font 14 style'
      ]
    },
    {
      version: 'v1.2.7',
      date: 'May 8, 2024',
      type: 'Minor',
      current: false,
      changes: [
        'Added Alerts component',
        'Added "inline-alert" color token'
      ]
    },
    {
      version: 'v1.2.3',
      date: 'April 19, 2024',
      type: 'Minor',
      current: false,
      changes: [
        'Added Horizontal Tabs component',
        'S & XS breakpoint behaviors'
      ]
    },
    {
      version: 'v1.2.0',
      date: 'March 7, 2024',
      type: 'Minor',
      current: false,
      changes: [
        'Enhancements to Alert components',
        'Additional color tokens'
      ]
    }
  ];

  return (
    <PageContainer>
      <Title>What's New</Title>
      
      <Description>
        Track the latest updates, improvements, and fixes to the Cake Design System. 
        Each release represents significant changes and additions to help you stay informed 
        about our evolving design language.
      </Description>

      <ChangelogGrid>
        {(() => {
          const sortedUpdates = updates.sort((a, b) => new Date(b.date) - new Date(a.date));
          const currentVersion = sortedUpdates.find(update => update.current);
          const olderVersions = sortedUpdates.filter(update => !update.current);
          
          return (
            <>
              {currentVersion && (
                <CurrentVersionWrapper>
                  <Card hoverable elevated>
                    <Card.Body>
                      <StyledUpdateDate>{currentVersion.date}</StyledUpdateDate>
                      <StyledCardTitle>{currentVersion.version}</StyledCardTitle>
                      <BadgeContainer>
                        <CurrentBadge>
                          <CheckIcon />
                          Current
                        </CurrentBadge>
                        <UpdateType type={currentVersion.type}>{currentVersion.type} release</UpdateType>
                      </BadgeContainer>
                      <UpdateList>
                        {currentVersion.changes.map((change, changeIndex) => (
                          <li key={changeIndex}>{change}</li>
                        ))}
                      </UpdateList>
                    </Card.Body>
                  </Card>
                </CurrentVersionWrapper>
              )}
              <OlderVersionsGrid>
                {olderVersions.map((update, index) => (
                  <Card key={index} hoverable elevated>
                    <Card.Body>
                      <StyledUpdateDate>{update.date}</StyledUpdateDate>
                      <StyledCardTitle>{update.version}</StyledCardTitle>
                      <BadgeContainer>
                        <UpdateType type={update.type}>{update.type} release</UpdateType>
                      </BadgeContainer>
                      <UpdateList>
                        {update.changes.map((change, changeIndex) => (
                          <li key={changeIndex}>{change}</li>
                        ))}
                      </UpdateList>
                    </Card.Body>
                  </Card>
                ))}
              </OlderVersionsGrid>
            </>
          );
        })()}
      </ChangelogGrid>
    </PageContainer>
  );
};

export default WhatsNew; 