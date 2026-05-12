import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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

const AnnouncementGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 32px;
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

const AnnouncementLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
`;

const AnnouncementLink = styled(Link)`
  font-size: 14px;
  font-weight: 600;
  color: #1D4ED8;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;

  &:hover {
    text-decoration: underline;
    color: #1E3A8A;
  }
`;

const WhatsNew = () => {
  const isDarkMode = false; // Using light theme

  // Get current date for the announcement
  const getCurrentDate = () => {
    const now = new Date();
    return now.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const announcement = {
    title: '🎉 New AI guidelines added',
    date: 'May 12, 2026',
    description: 'We\'ve introduced a new AI section to the Cake design system to support a more consistent and scalable approach to AI experiences across Lenovo products. This update includes AI design principles, gradient usage guidance, and logo and icon direction that define how AI should be communicated through visual treatment, hierarchy, motion, and brand expression rather than relying on a single universal symbol.\n\nThe new guidance outlines when to use AI gradients, how to apply segment-specific treatments for consumer, commercial, and internal products, and when AI logos or icons are appropriate within product experiences. These updates are intended to help teams create recognizable AI moments while avoiding icon overload and maintaining consistency across different product contexts.',
    links: [
      { label: 'AI Overview', to: '/foundations/ai/overview' },
      { label: 'AI Gradient', to: '/foundations/ai/gradient' },
      { label: 'AI Logo & Icon', to: '/foundations/ai/logo-icon' },
    ]
  };

  const updates = [
    {
      version: '🎉 Cake Web V2 Update',
      date: 'October 8, 2025',
      type: 'Major',
      current: false,
      changes: [
        'Launched Cake Web V2 — a modern, responsive design system built with React',
        'Comprehensive accessibility features meeting WCAG 2.2 AA standards',
        'Standardized design tokens and an enhanced component library'
      ]
    },
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

      {/* Announcement Card */}
      <AnnouncementGrid>
        <Card elevated hoverable>
          <Card.Body>
            <StyledUpdateDate>{announcement.date}</StyledUpdateDate>
            <StyledCardTitle>{announcement.title}</StyledCardTitle>
            {announcement.description.split('\n\n').map((para, i) => (
              <Description key={i} style={{ marginTop: i === 0 ? '16px' : '12px', marginBottom: '0' }}>
                {para}
              </Description>
            ))}
            {announcement.links && (
              <AnnouncementLinks>
                {announcement.links.map(link => (
                  <AnnouncementLink key={link.to} to={link.to}>
                    {link.label} →
                  </AnnouncementLink>
                ))}
              </AnnouncementLinks>
            )}
          </Card.Body>
        </Card>
      </AnnouncementGrid>

      {/* Version Updates */}
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