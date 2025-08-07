import React from 'react';
import styled from 'styled-components';
import Card from '../components/design-system/Card';
import Chip, { CHIP_TYPES, CHIP_SIZES, CHIP_STYLES } from '../components/design-system/Chip';
import colorData from '../data/colors.json';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';

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

const ChangelogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 1200px;
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

const StyledSuccessIcon = styled(CheckCircleIcon)`
  color: ${props => props.isDarkMode ? '#18181B' : '#047857'};
`;

const StyledInfoIcon = styled(InfoIcon)`
  color: ${props => props.isDarkMode ? '#18181B' : '#1D4ED8'};
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
  const isDarkMode = false; // Using light theme

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
      <Header>
        <Title>What's New</Title>
        
        <Description>
          Track the latest updates, improvements, and fixes to the Cake Design System. 
          Each release represents significant changes and additions to help you stay informed 
          about our evolving design language.
        </Description>
      </Header>

      <ChangelogGrid>
        {(() => {
          const sortedUpdates = updates.sort((a, b) => new Date(b.date) - new Date(a.date));
          
          return sortedUpdates.map((update, index) => (
            <Card key={index} hoverable elevated>
              <Card.Body>
                <StyledUpdateDate>{update.date}</StyledUpdateDate>
                <StyledCardTitle>{update.version}</StyledCardTitle>
                <BadgeContainer>
                  {update.current && (
                    <Chip
                      type={CHIP_TYPES.SUCCESS}
                      size={CHIP_SIZES.SMALL}
                      chipStyle={CHIP_STYLES.PILL}
                      label="Current"
                      rightIcon={<StyledSuccessIcon isDarkMode={isDarkMode} />}
                      isDarkMode={isDarkMode}
                    />
                  )}
                  <Chip
                    type={CHIP_TYPES.INFO}
                    size={CHIP_SIZES.SMALL}
                    chipStyle={CHIP_STYLES.PILL}
                    label={`${update.type} release`}
                    isDarkMode={isDarkMode}
                  />
                </BadgeContainer>
                <UpdateList>
                  {update.changes.map((change, changeIndex) => (
                    <li key={changeIndex}>{change}</li>
                  ))}
                </UpdateList>
              </Card.Body>
            </Card>
          ));
        })()}
      </ChangelogGrid>
    </PageContainer>
  );
};

export default WhatsNew; 