import React from 'react';
import styled from 'styled-components';
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';
import DownloadIcon from '@mui/icons-material/Download';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';

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
  font-size: 1.125rem; /* 18px */
  margin-bottom: 24px;
  color: #0F172A;
`;

const SectionDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #475569;
  margin-bottom: 32px;
  max-width: 800px;
`;

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`;

const IconCard = styled.div`
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const IconDisplay = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: #F8FAFC;
  border-radius: 6px;
  border: 1px solid #E2E8F0;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${props => props.color || '#475569'};
  font-size: 24px;
`;

const IconInfo = styled.div`
  flex: 1;
`;

const IconName = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: #0F172A;
  margin: 0 0 4px 0;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
`;

const IconDescription = styled.p`
  font-size: 12px;
  color: #64748B;
  margin: 0;
  line-height: 1.4;
`;

const CodeBlock = styled.pre`
  background: #1E293B;
  color: #E2E8F0;
  padding: 16px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 1.5;
  overflow-x: auto;
  margin: 16px 0;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
`;

const CodeInline = styled.code`
  background: #F1F5F9;
  color: #0F172A;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 14px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
`;

const ResourceCard = styled.div`
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 16px;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
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
`;

const ResourceLink = styled.a`
  color: #1D4ED8;
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

const GuidelinesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const GuidelinesItem = styled.li`
  position: relative;
  padding-left: 24px;
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 1.5;
  color: #475569;

  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #1D4ED8;
    font-weight: bold;
  }
`;

const IconographyPage = () => {
  const semanticIcons = [
    {
      icon: <InfoIcon />,
      name: 'InfoIcon',
      description: 'Used for informational messages and help text',
      color: '#3B82F6'
    },
    {
      icon: <CheckCircleIcon />,
      name: 'CheckCircleIcon',
      description: 'Indicates success states and completed actions',
      color: '#10B981'
    },
    {
      icon: <WarningIcon />,
      name: 'WarningIcon',
      description: 'Shows warnings and cautionary information',
      color: '#F59E0B'
    },
    {
      icon: <ErrorIcon />,
      name: 'ErrorIcon',
      description: 'Displays error states and critical issues',
      color: '#EF4444'
    }
  ];

  const actionIcons = [
    {
      icon: <DownloadIcon />,
      name: 'DownloadIcon',
      description: 'File download and export actions',
      color: '#475569'
    },
    {
      icon: <ContentCopyIcon />,
      name: 'ContentCopyIcon',
      description: 'Copy to clipboard functionality',
      color: '#475569'
    },
    {
      icon: <ChevronRightIcon />,
      name: 'ChevronRightIcon',
      description: 'Forward navigation and next actions',
      color: '#475569'
    },
    {
      icon: <ChevronLeftIcon />,
      name: 'ChevronLeftIcon',
      description: 'Backward navigation and previous actions',
      color: '#475569'
    },
    {
      icon: <ExpandMoreIcon />,
      name: 'ExpandMoreIcon',
      description: 'Expand content or show more options',
      color: '#475569'
    },
    {
      icon: <ExpandLessIcon />,
      name: 'ExpandLessIcon',
      description: 'Collapse content or show fewer options',
      color: '#475569'
    }
  ];

  const navigationIcons = [
    {
      icon: <MenuIcon />,
      name: 'MenuIcon',
      description: 'Hamburger menu and navigation drawer',
      color: '#475569'
    },
    {
      icon: <CloseIcon />,
      name: 'CloseIcon',
      description: 'Close dialogs, modals, and dismiss actions',
      color: '#475569'
    },
    {
      icon: <SearchIcon />,
      name: 'SearchIcon',
      description: 'Search functionality and query input',
      color: '#475569'
    },
    {
      icon: <SettingsIcon />,
      name: 'SettingsIcon',
      description: 'Configuration and preferences',
      color: '#475569'
    }
  ];

  return (
    <PageContainer>
      <Header>
        <Title>Iconography</Title>
        <Description>
          Our design system adopts the Material Design icon library to ensure consistency and accessibility across all interfaces. 
          Material Design icons provide a comprehensive set of scalable vector icons that enhance user experience and provide 
          visual clarity. These icons are designed to be simple, modern, and accessible, making them perfect for creating 
          intuitive user interfaces.
        </Description>
      </Header>

      <Section>
        <SectionTitle>Semantic Status Icons</SectionTitle>
        <SectionDescription>
          Status icons communicate specific states and provide immediate visual feedback to users. 
          These icons use semantic colors to reinforce their meaning and improve accessibility.
        </SectionDescription>
        <IconGrid>
          {semanticIcons.map((iconData, index) => (
            <IconCard key={index}>
              <IconDisplay>
                <IconWrapper color={iconData.color}>
                  {iconData.icon}
                </IconWrapper>
                <IconInfo>
                  <IconName>{iconData.name}</IconName>
                  <IconDescription>{iconData.description}</IconDescription>
                </IconInfo>
              </IconDisplay>
            </IconCard>
          ))}
        </IconGrid>
      </Section>

      <Section>
        <SectionTitle>Action Icons</SectionTitle>
        <SectionDescription>
          Action icons represent common user interactions and system operations. 
          These icons help users understand available actions and improve interface efficiency.
        </SectionDescription>
        <IconGrid>
          {actionIcons.map((iconData, index) => (
            <IconCard key={index}>
              <IconDisplay>
                <IconWrapper color={iconData.color}>
                  {iconData.icon}
                </IconWrapper>
                <IconInfo>
                  <IconName>{iconData.name}</IconName>
                  <IconDescription>{iconData.description}</IconDescription>
                </IconInfo>
              </IconDisplay>
            </IconCard>
          ))}
        </IconGrid>
      </Section>

      <Section>
        <SectionTitle>Navigation & UI Icons</SectionTitle>
        <SectionDescription>
          Navigation and UI icons help users navigate through the interface and access different sections. 
          These icons provide consistent wayfinding and improve overall user experience.
        </SectionDescription>
        <IconGrid>
          {navigationIcons.map((iconData, index) => (
            <IconCard key={index}>
              <IconDisplay>
                <IconWrapper color={iconData.color}>
                  {iconData.icon}
                </IconWrapper>
                <IconInfo>
                  <IconName>{iconData.name}</IconName>
                  <IconDescription>{iconData.description}</IconDescription>
                </IconInfo>
              </IconDisplay>
            </IconCard>
          ))}
        </IconGrid>
      </Section>

      <Section>
        <SectionTitle>Implementation Guidelines</SectionTitle>
        <SectionDescription>
          Follow these guidelines to ensure consistent and accessible icon usage across your applications.
        </SectionDescription>
        
        <SectionTitle style={{ fontSize: '16px', marginTop: '24px' }}>Sizing</SectionTitle>
        <GuidelinesList>
          <GuidelinesItem>Use 16px for small contexts (tooltips, badges, inline elements)</GuidelinesItem>
          <GuidelinesItem>Use 20px for medium contexts (buttons, form elements, navigation)</GuidelinesItem>
          <GuidelinesItem>Use 24px for large contexts (headers, prominent actions, main navigation)</GuidelinesItem>
        </GuidelinesList>

        <SectionTitle style={{ fontSize: '16px', marginTop: '24px' }}>Color Usage</SectionTitle>
        <GuidelinesList>
          <GuidelinesItem>Use <CodeInline>inherit</CodeInline> to match parent text color for most icons</GuidelinesItem>
          <GuidelinesItem>Use semantic colors for status icons (blue for info, green for success, etc.)</GuidelinesItem>
          <GuidelinesItem>Ensure sufficient color contrast for accessibility (minimum 4.5:1 ratio)</GuidelinesItem>
        </GuidelinesList>

        <SectionTitle style={{ fontSize: '16px', marginTop: '24px' }}>Accessibility</SectionTitle>
        <GuidelinesList>
          <GuidelinesItem>Always provide meaningful <CodeInline>aria-label</CodeInline> attributes for icon-only buttons</GuidelinesItem>
          <GuidelinesItem>Use descriptive alt text for icons that convey important information</GuidelinesItem>
          <GuidelinesItem>Ensure icons are keyboard accessible and focusable when interactive</GuidelinesItem>
          <GuidelinesItem>Consider using text labels alongside icons for complex actions</GuidelinesItem>
        </GuidelinesList>

        <SectionTitle style={{ fontSize: '16px', marginTop: '24px' }}>When to Use Icons vs Text</SectionTitle>
        <GuidelinesItem>Use icons for common, universally understood actions (close, search, menu)</GuidelinesItem>
        <GuidelinesItem>Use text labels for specific or complex actions that require clarification</GuidelinesItem>
        <GuidelinesItem>Combine icons and text for primary actions to improve clarity</GuidelinesItem>
        <GuidelinesItem>Avoid using icons alone for critical actions without clear visual context</GuidelinesItem>
      </Section>

      <Section>
        <SectionTitle>Code Examples</SectionTitle>
        <SectionDescription>
          Here are common implementation patterns for using Material Design icons in your applications.
        </SectionDescription>

        <SectionTitle style={{ fontSize: '16px', marginTop: '24px' }}>Basic Import and Usage</SectionTitle>
        <CodeBlock>{`import InfoIcon from '@mui/icons-material/Info';

// Basic usage
<InfoIcon />

// With custom styling
<InfoIcon style={{ fontSize: 24, color: '#3B82F6' }} />

// With accessibility
<InfoIcon aria-label="Information" />`}</CodeBlock>

        <SectionTitle style={{ fontSize: '16px', marginTop: '24px' }}>Icon with Text Combination</SectionTitle>
        <CodeBlock>{`import DownloadIcon from '@mui/icons-material/Download';

// Icon with text
<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
  <DownloadIcon />
  <span>Download Report</span>
</div>

// In a button
<Button>
  <DownloadIcon style={{ marginRight: '8px' }} />
  Download
</Button>`}</CodeBlock>

        <SectionTitle style={{ fontSize: '16px', marginTop: '24px' }}>Semantic Status Implementation</SectionTitle>
        <CodeBlock>{`import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

// Success state
<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
  <CheckCircleIcon style={{ color: '#10B981' }} />
  <span>Operation completed successfully</span>
</div>

// Error state
<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
  <ErrorIcon style={{ color: '#EF4444' }} />
  <span>An error occurred</span>
</div>`}</CodeBlock>
      </Section>

      <Section>
        <SectionTitle>Resources</SectionTitle>
        <SectionDescription>
          Access official documentation and additional icon libraries to expand your icon toolkit.
        </SectionDescription>

        <ResourceCard>
          <ResourceTitle>Google Material Design Icons Library</ResourceTitle>
          <ResourceDescription>
            Official Material Design icon library with comprehensive icon sets, search functionality, and download options.
          </ResourceDescription>
          <ResourceLink href="https://fonts.google.com/icons" target="_blank" rel="noopener noreferrer">
            Visit Material Design Icons →
          </ResourceLink>
        </ResourceCard>

        <ResourceCard>
          <ResourceTitle>MUI Icons Installation & Usage</ResourceTitle>
          <ResourceDescription>
            Complete documentation for installing and using Material-UI icons in React applications.
          </ResourceDescription>
          <ResourceLink href="https://mui.com/material-ui/material-icons/" target="_blank" rel="noopener noreferrer">
            MUI Icons Documentation →
          </ResourceLink>
          <CodeBlock style={{ marginTop: '12px' }}>{`npm install @mui/icons-material`}</CodeBlock>
        </ResourceCard>

        <ResourceCard>
          <ResourceTitle>Material Design Icons (Community)</ResourceTitle>
          <ResourceDescription>
            Community-supported alternatives and extended icon sets following Material Design guidelines. 
            Especially helpful for finding specialized icons not available in the core Material library.
          </ResourceDescription>
          <ResourceLink href="https://pictogrammers.com/library/mdi/" target="_blank" rel="noopener noreferrer">
            Visit Material Design Icons Community →
          </ResourceLink>
        </ResourceCard>
      </Section>
    </PageContainer>
  );
};

export default IconographyPage;
