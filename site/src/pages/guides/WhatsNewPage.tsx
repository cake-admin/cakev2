import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Badge } from '@/cakeand/components/Badge';
import { Card } from '@/cakeand/components/Card';
import { SimpleCard } from '@/cakeand/components/Card/SimpleCard';

import { DocPage } from '../../components/DocPage';

const Meta = styled.p`
  margin: 0 0 var(--space-200);
  font-size: var(--type-size-caption);
  color: var(--color-text-icon-secondary);
`;

const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-200);
  margin: var(--space-200) 0 var(--space-300);
`;

const LinkRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-300);
  margin-top: var(--space-300);

  a {
    color: var(--color-primary-primary);
    font-weight: var(--font-weight-bold);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const updates = [
  {
    version: 'cake& website redesign',
    date: 'July 2026',
    type: 'Major',
    current: true,
    changes: [
      'New Vite-based documentation site using cake& components and design tokens',
      'Responsive navigation shell with mobile drawer',
      'Component pages deep-link to Storybook as the API source of truth',
    ],
  },
  {
    version: 'New AI guidelines',
    date: 'May 12, 2026',
    type: 'Major',
    current: false,
    changes: [
      'AI design principles, gradient usage, and logo/icon direction',
      'Segment-specific treatments for consumer, commercial, and internal products',
    ],
  },
  {
    version: 'cake& package 4.x',
    date: '2025',
    type: 'Major',
    current: false,
    changes: [
      'Radix-first component architecture with token-driven styling',
      'Storybook as canonical component documentation',
      'Published npm package and designer starter template',
    ],
  },
];

export function WhatsNewPage() {
  return (
    <DocPage
      title="What's new"
      description="Track the latest updates, improvements, and additions to the cake& design system."
    >
      <DocPage.Section>
        <Card elevation="high">
          <SimpleCard
            title="New AI guidelines added"
            body="We've introduced an AI section to support consistent AI experiences across Lenovo products — including gradient usage, logo and icon direction, and segment-specific treatments. Explore the foundations section to learn more."
            actions={
              <LinkRow>
                <Link to="/foundations/ai/overview">AI overview →</Link>
                <Link to="/foundations/ai/gradient">AI gradient →</Link>
                <Link to="/foundations/ai/logo-icon">AI logo & icon →</Link>
              </LinkRow>
            }
          />
        </Card>
      </DocPage.Section>

      <DocPage.Section>
        <DocPage.SectionTitle>Release history</DocPage.SectionTitle>
        <DocPage.Grid>
          {updates.map((update) => (
            <Card key={update.version} elevation="low">
              <SimpleCard
                title={update.version}
                body={
                  <>
                    <Meta>{update.date}</Meta>
                    <BadgeRow>
                      {update.current ? (
                        <Badge color="green" tone="subtle">
                          Current
                        </Badge>
                      ) : null}
                      <Badge color="secondary" tone="subtle">
                        {update.type} release
                      </Badge>
                    </BadgeRow>
                    <ul style={{ margin: 0, paddingLeft: 'var(--space-500)' }}>
                      {update.changes.map((change) => (
                        <li key={change}>{change}</li>
                      ))}
                    </ul>
                  </>
                }
              />
            </Card>
          ))}
        </DocPage.Grid>
      </DocPage.Section>
    </DocPage>
  );
}

export function AboutCakePage() {
  return (
    <DocPage
      title="About cake&"
      description="cake& is Lenovo's unified design system for building consistent, accessible, high-quality experiences across digital products."
    >
      <DocPage.Grid>
        <Card elevation="low">
          <SimpleCard
            title="Foundations"
            body="Colors, typography, spacing, and elevation — the token layer every component builds on."
            actions={<Link to="/foundations/colors">Explore colors →</Link>}
          />
        </Card>
        <Card elevation="low">
          <SimpleCard
            title="Components"
            body="63 Radix-backed React components documented in Storybook with live controls and accessibility checks."
            actions={<Link to="/components/button">Browse components →</Link>}
          />
        </Card>
        <Card elevation="low">
          <SimpleCard
            title="Content"
            body="Language, grammar, and tone guidelines for clear, purposeful product copy."
            actions={<Link to="/foundations/language-grammar">Read guidelines →</Link>}
          />
        </Card>
      </DocPage.Grid>

      <DocPage.Section>
        <DocPage.SectionTitle>Key features</DocPage.SectionTitle>
        <DocPage.SectionBody>
          <ul>
            <li>
              <strong>Unified components</strong> — reusable UI with consistent behavior and visuals
            </li>
            <li>
              <strong>Design tokens</strong> — ~470 CSS custom properties generated from Figma
            </li>
            <li>
              <strong>Accessibility</strong> — WCAG 2.2 AA target on every interactive component
            </li>
            <li>
              <strong>Documentation</strong> — Storybook as the source of truth for APIs and states
            </li>
          </ul>
        </DocPage.SectionBody>
      </DocPage.Section>
    </DocPage>
  );
}

export function VersionControlPage() {
  return (
    <DocPage
      title="Version control"
      description="Version history and changelog for the cake& design system and documentation site."
    >
      <DocPage.SectionBody>
        <p>
          The published package version is tracked in GitHub Releases. The documentation site and
          Storybook deploy automatically when changes merge to <code>main</code>.
        </p>
        <p>
          See <Link to="/whats-new">What&apos;s new</Link> for user-facing release notes, or visit{' '}
          <a href="https://github.com/cake-admin/cakev2/releases" target="_blank" rel="noopener noreferrer">
            GitHub Releases
          </a>{' '}
          for package tarballs.
        </p>
      </DocPage.SectionBody>
    </DocPage>
  );
}
