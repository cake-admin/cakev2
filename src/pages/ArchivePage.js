import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { fontStack } from '../styles/globalStyles';

const PageContainer = styled.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`;

const Header = styled.div`
  margin-bottom: 48px;
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin: 0 0 16px 0;
  color: #0f172a;
  font-family: ${fontStack};
`;

const PageSubtitle = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #475569;
  max-width: 720px;
  margin: 0;
  font-family: ${fontStack};
`;

const Section = styled.section`
  margin-bottom: 56px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #0f172a;
  margin: 0 0 8px 0;
  font-family: ${fontStack};
`;

const SectionMeta = styled.p`
  font-size: 14px;
  color: #64748b;
  margin: 0 0 24px 0;
  font-family: ${fontStack};
`;

const ArchiveNotice = styled.div`
  background: #fefce8;
  border: 1px solid #fde68a;
  border-radius: 6px;
  padding: 12px 16px;
  margin-bottom: 32px;
  font-size: 14px;
  color: #92400e;
  font-family: ${fontStack};
  line-height: 1.5;
`;

const PageList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const PageListItem = styled.li``;

const ArchiveLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px 20px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  text-decoration: none;
  color: inherit;
  transition: background 0.15s, border-color 0.15s;

  &:hover {
    background: #f8fafc;
    border-color: #cbd5e1;
  }
`;

const LinkTitle = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: #0f172a;
  font-family: ${fontStack};
`;

const LinkDescription = styled.span`
  font-size: 13px;
  color: #64748b;
  font-family: ${fontStack};
  line-height: 1.5;
`;

const LegacyBadge = styled.span`
  display: inline-block;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #92400e;
  background: #fef3c7;
  border: 1px solid #fde68a;
  border-radius: 3px;
  padding: 2px 6px;
  margin-top: 2px;
  width: fit-content;
`;

const archivedSections = [
  {
    version: 'Cake v1.x — Components > AI',
    archivedOn: 'May 2026',
    reason:
      'AI visual language was reclassified from a component to a foundation. The guidance below reflects how AI was documented prior to this change.',
    pages: [
      {
        path: '/archive/ai-icon-identity',
        title: 'AI Icon & Identity',
        description:
          'Previous brand identity guidelines for the Moto AI logo, the "Double Bubble" icon, and usage rules for Lenovo AI software.',
      },
      {
        path: '/archive/ai-response',
        title: 'AI Response',
        description:
          'Component documentation for the AI Response component including regeneration, pinning, favoriting, and shimmer thinking indicator.',
      },
    ],
  },
];

const ArchivePage = () => {
  return (
    <PageContainer>
      <Header>
        <PageTitle>Archive</PageTitle>
        <PageSubtitle>
          Previous versions of design system documentation are preserved here for legacy reference.
          These pages reflect guidance that has since been superseded by updated standards and should
          not be used for new work.
        </PageSubtitle>
      </Header>

      {archivedSections.map((section) => (
        <Section key={section.version}>
          <SectionTitle>{section.version}</SectionTitle>
          <SectionMeta>Archived {section.archivedOn}</SectionMeta>

          <ArchiveNotice>{section.reason}</ArchiveNotice>

          <PageList>
            {section.pages.map((page) => (
              <PageListItem key={page.path}>
                <ArchiveLink to={page.path}>
                  <LinkTitle>{page.title}</LinkTitle>
                  <LinkDescription>{page.description}</LinkDescription>
                  <LegacyBadge>Legacy</LegacyBadge>
                </ArchiveLink>
              </PageListItem>
            ))}
          </PageList>
        </Section>
      ))}
    </PageContainer>
  );
};

export default ArchivePage;
