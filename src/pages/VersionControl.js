import React from 'react';
import styled from 'styled-components';
import Card from '../components/design-system/Card';

const PageContainer = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const PageHeader = styled.div`
  margin-bottom: 40px;
`;

const PageTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #111827;
  margin: 0 0 8px 0;
`;

const PageSubtitle = styled.p`
  font-size: 18px;
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
`;

const Section = styled.section`
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 16px 0;
`;

const SectionDescription = styled.p`
  font-size: 16px;
  color: #6b7280;
  margin: 0 0 32px 0;
  line-height: 1.6;
`;

const VersionTimeline = styled.div`
  position: relative;
  padding-left: 32px;
  
  &::before {
    content: '';
    position: absolute;
    left: 16px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #e5e7eb;
  }
`;

const VersionEntry = styled.div`
  position: relative;
  margin-bottom: 40px;
  
  &::before {
    content: '';
    position: absolute;
    left: -24px;
    top: 8px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${props => {
      if (props.isLatest) return '#2563eb';
      if (props.isMajor) return '#dc2626';
      if (props.isMinor) return '#059669';
      return '#6b7280';
    }};
    border: 2px solid #ffffff;
    box-shadow: 0 0 0 2px #e5e7eb;
  }
`;

const VersionHeader = styled.div`
  margin-bottom: 16px;
`;

const VersionNumber = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 4px 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const VersionDate = styled.div`
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 8px;
`;

const VersionBadge = styled.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  ${props => {
    if (props.type === 'latest') return 'background: #eff6ff; color: #2563eb;';
    if (props.type === 'major') return 'background: #fef2f2; color: #dc2626;';
    if (props.type === 'minor') return 'background: #f0fdf4; color: #059669;';
    return 'background: #f3f4f6; color: #6b7280;';
  }}
`;

const ChangeList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ChangeItem = styled.li`
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${props => {
      if (props.type === 'added') return '#059669';
      if (props.type === 'changed') return '#d97706';
      if (props.type === 'removed') return '#dc2626';
      return '#6b7280';
    }};
  }
`;

const ChangeText = styled.span`
  color: #374151;
  line-height: 1.5;
`;

const BreakingChange = styled.div`
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  padding: 12px;
  margin: 12px 0;
  
  &::before {
    content: '⚠️ Breaking Change';
    display: block;
    font-weight: 600;
    color: #dc2626;
    margin-bottom: 4px;
    font-size: 14px;
  }
`;

const VersionControl = () => {
  const versions = [
    {
      version: '1.0.0',
      date: '2024-01-15',
      type: 'latest',
      isLatest: true,
      isMajor: true,
      description: 'Initial release of the design system',
      changes: [
        { type: 'added', text: 'Button component with 5 variants and 3 sizes' },
        { type: 'added', text: 'Card component with header, body, and footer sections' },
        { type: 'added', text: 'Input component with validation states' },
        { type: 'added', text: 'Modal component with backdrop and keyboard navigation' },
        { type: 'added', text: 'Responsive navigation with mobile support' },
        { type: 'added', text: 'Interactive documentation site with live examples' }
      ]
    },
    {
      version: '0.9.0',
      date: '2024-01-10',
      type: 'major',
      isMajor: true,
      description: 'Beta release with core components',
      changes: [
        { type: 'added', text: 'Basic Button component implementation' },
        { type: 'added', text: 'Card component with basic styling' },
        { type: 'added', text: 'Input component with basic states' },
        { type: 'changed', text: 'Updated color palette for better accessibility' },
        { type: 'changed', text: 'Improved typography scale' }
      ]
    },
    {
      version: '0.8.0',
      date: '2024-01-05',
      type: 'minor',
      isMinor: true,
      description: 'Foundation and design tokens',
      changes: [
        { type: 'added', text: 'Design tokens for colors, spacing, and typography' },
        { type: 'added', text: 'Base component architecture' },
        { type: 'added', text: 'Styling system with styled-components' },
        { type: 'added', text: 'Basic documentation structure' }
      ]
    },
    {
      version: '0.7.0',
      date: '2024-01-01',
      type: 'patch',
      description: 'Project setup and initial structure',
      changes: [
        { type: 'added', text: 'React project setup with Create React App' },
        { type: 'added', text: 'Routing with React Router' },
        { type: 'added', text: 'Styled-components for styling' },
        { type: 'added', text: 'Basic project structure and configuration' }
      ]
    }
  ];

  const getChangeTypeLabel = (type) => {
    switch (type) {
      case 'added': return 'Added';
      case 'changed': return 'Changed';
      case 'removed': return 'Removed';
      case 'fixed': return 'Fixed';
      default: return 'Updated';
    }
  };

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Version Control</PageTitle>
        <PageSubtitle>
          Track the evolution of our design system through version history and changelog entries.
        </PageSubtitle>
      </PageHeader>

      <Section>
        <SectionTitle>Current Version</SectionTitle>
        <SectionDescription>
          We're currently on version 1.0.0, which represents the first stable release of our design system.
        </SectionDescription>

        <Card elevated>
          <Card.Header>
            <Card.Title>Version 1.0.0 - Initial Release</Card.Title>
            <Card.Subtitle>Released on January 15, 2024</Card.Subtitle>
          </Card.Header>
          <Card.Body>
            <p style={{ margin: '0 0 16px 0', color: '#6b7280', lineHeight: '1.6' }}>
              This is the first stable release of our design system. It includes all core components 
              with comprehensive documentation and interactive examples.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{
                background: '#eff6ff',
                color: '#2563eb',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: '500'
              }}>
                Stable Release
              </span>
              <span style={{
                background: '#f0fdf4',
                color: '#059669',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: '500'
              }}>
                Production Ready
              </span>
            </div>
          </Card.Body>
        </Card>
      </Section>

      <Section>
        <SectionTitle>Changelog</SectionTitle>
        <SectionDescription>
          A complete history of all changes, improvements, and new features added to the design system.
        </SectionDescription>

        <VersionTimeline>
          {versions.map((version, index) => (
            <VersionEntry 
              key={version.version}
              isLatest={version.isLatest}
              isMajor={version.isMajor}
              isMinor={version.isMinor}
            >
              <VersionHeader>
                <VersionNumber>
                  v{version.version}
                  {version.isLatest && <VersionBadge type="latest">Latest</VersionBadge>}
                  {version.isMajor && <VersionBadge type="major">Major</VersionBadge>}
                  {version.isMinor && <VersionBadge type="minor">Minor</VersionBadge>}
                </VersionNumber>
                <VersionDate>{version.date}</VersionDate>
                <p style={{ margin: 0, color: '#6b7280', lineHeight: '1.5' }}>
                  {version.description}
                </p>
              </VersionHeader>

              <ChangeList>
                {version.changes.map((change, changeIndex) => (
                  <ChangeItem key={changeIndex} type={change.type}>
                    <ChangeText>
                      <strong>{getChangeTypeLabel(change.type)}:</strong> {change.text}
                    </ChangeText>
                  </ChangeItem>
                ))}
              </ChangeList>
            </VersionEntry>
          ))}
        </VersionTimeline>
      </Section>

      <Section>
        <SectionTitle>Versioning Strategy</SectionTitle>
        <SectionDescription>
          We follow semantic versioning (SemVer) to ensure clear communication about the nature of changes.
        </SectionDescription>

        <CardGrid>
          <Card>
            <Card.Body>
              <h3 style={{ margin: '0 0 12px 0', color: '#111827' }}>Major Versions</h3>
              <p style={{ margin: 0, color: '#6b7280', lineHeight: '1.5' }}>
                Incompatible API changes that may require updates to existing implementations. 
                These releases include breaking changes and new major features.
              </p>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h3 style={{ margin: '0 0 12px 0', color: '#111827' }}>Minor Versions</h3>
              <p style={{ margin: 0, color: '#6b7280', lineHeight: '1.5' }}>
                New functionality added in a backwards-compatible manner. These releases 
                include new features and improvements to existing components.
              </p>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h3 style={{ margin: '0 0 12px 0', color: '#111827' }}>Patch Versions</h3>
              <p style={{ margin: 0, color: '#6b7280', lineHeight: '1.5' }}>
                Backwards-compatible bug fixes and minor improvements. These releases 
                focus on stability and bug fixes without new features.
              </p>
            </Card.Body>
          </Card>
        </CardGrid>
      </Section>

      <Section>
        <SectionTitle>Upcoming Features</SectionTitle>
        <SectionDescription>
          Planned features and improvements for future releases of the design system.
        </SectionDescription>

        <CardGrid>
          <Card>
            <Card.Body>
              <h3 style={{ margin: '0 0 12px 0', color: '#111827' }}>v1.1.0 - Enhanced Components</h3>
              <ul style={{ margin: 0, color: '#6b7280', lineHeight: '1.5' }}>
                <li>Dropdown component with search and multi-select</li>
                <li>Table component with sorting and pagination</li>
                <li>Toast notification system</li>
                <li>Enhanced form validation</li>
              </ul>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h3 style={{ margin: '0 0 12px 0', color: '#111827' }}>v1.2.0 - Advanced Features</h3>
              <ul style={{ margin: 0, color: '#6b7280', lineHeight: '1.5' }}>
                <li>Date picker component</li>
                <li>File upload component</li>
                <li>Rich text editor</li>
                <li>Advanced data visualization</li>
              </ul>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <h3 style={{ margin: '0 0 12px 0', color: '#111827' }}>v2.0.0 - Major Overhaul</h3>
              <ul style={{ margin: 0, color: '#6b7280', lineHeight: '1.5' }}>
                <li>Dark mode support</li>
                <li>Customizable theme system</li>
                <li>Animation library integration</li>
                <li>Performance optimizations</li>
              </ul>
            </Card.Body>
          </Card>
        </CardGrid>
      </Section>
    </PageContainer>
  );
};

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-top: 32px;
`;

export default VersionControl; 