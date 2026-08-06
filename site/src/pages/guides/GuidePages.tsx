import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ExternalLink } from 'lucide-react';

import { Card } from '@/cakeand/components/Card';
import { SimpleCard } from '@/cakeand/components/Card/SimpleCard';

import { DocPage } from '../../components/DocPage';

const CardLink = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;

  &:focus-visible {
    outline: var(--stroke-200) solid var(--color-primary-primary);
    outline-offset: var(--space-050);
    border-radius: var(--radius-300);
  }
`;

const FigmaLogo = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: var(--space-300);
`;

export function ResourcesPage() {
  return (
    <DocPage
      title="Resources"
      description="Access our collection of design resources including Figma libraries and brand assets for Lenovo products."
    >
      <DocPage.Section>
        <DocPage.SectionTitle>Figma libraries</DocPage.SectionTitle>
        <DocPage.SectionBody>
          <p>Design system libraries and components for different use cases and industries.</p>
        </DocPage.SectionBody>
        <DocPage.Grid>
          <CardLink
            href="https://www.figma.com/community/file/1397963315281891204/cake-one-lenovo-design-system"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card elevation="high">
              <SimpleCard
                media={
                  <FigmaLogo src="/figma-logo.svg" alt="" />
                }
                title="cake&"
                body="Core design system components and foundations for Lenovo products."
                actions={
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 'var(--space-100)',
                      color: 'var(--color-primary-primary)',
                      fontWeight: 'var(--font-weight-bold)',
                    }}
                  >
                    Open in Figma
                    <ExternalLink size={16} aria-hidden />
                  </span>
                }
              />
            </Card>
          </CardLink>
        </DocPage.Grid>
      </DocPage.Section>
    </DocPage>
  );
}

export function FigmaLibrariesPage() {
  return (
    <DocPage
      title="Figma libraries"
      description="Install the cake& Figma libraries to design with the same components and tokens used in code."
    >
      <DocPage.SectionBody>
        <p>
          The primary library is available on the Figma Community. For full setup instructions,
          see the Resources page or open the library directly.
        </p>
        <p>
          <Link to="/resources">View resources →</Link>
        </p>
      </DocPage.SectionBody>
    </DocPage>
  );
}
