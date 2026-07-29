import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  Accessibility,
  ArrowRight,
  Blocks,
  Palette,
} from 'lucide-react';

import { Card } from '@/cakeand/components/Card';
import { SimpleCard } from '@/cakeand/components/Card/SimpleCard';

import { media } from '../styles/breakpoints';

const Page = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: var(--space-1000);
`;

const Hero = styled.header`
  margin-bottom: var(--space-600);
`;

const HeroTitle = styled.h1`
  margin: 0 0 var(--space-200);
  font-size: clamp(3rem, 10vw, 6rem);
  font-weight: var(--font-weight-bold);
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: var(--color-text-icon-primary);
`;

const HeroSubtitle = styled.p`
  margin: 0;
  max-width: 40rem;
  font-size: clamp(var(--type-size-subtitle), 3vw, var(--type-size-title));
  font-weight: var(--font-weight-regular);
  line-height: 1.35;
  color: var(--color-text-icon-secondary);
`;

const Grid = styled.div`
  display: grid;
  gap: var(--space-400);
  grid-template-columns: 1fr;

  ${media.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const FeatureGrid = styled(Grid)`
  ${media.lg} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const Section = styled.section`
  margin-top: var(--space-800);
`;

const SectionTitle = styled.h2`
  margin: 0 0 var(--space-400);
  font-size: var(--type-size-title);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-icon-primary);
`;

const CardLink = styled(Link)`
  display: block;
  height: 100%;
  text-decoration: none;
  color: inherit;

  &:focus-visible {
    outline: var(--stroke-200) solid var(--color-primary-primary);
    outline-offset: var(--space-050);
    border-radius: var(--radius-300);
  }
`;

const FeatureCardInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-300);
  padding: var(--space-500);
`;

const BodyLink = styled.a`
  color: var(--color-primary-primary);
  text-decoration: underline;
  text-underline-offset: 2px;

  &:hover {
    color: var(--color-primary-primary-hover);
  }
`;

const IconBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-200);
  background: var(--color-surfaces-on-container);
  color: var(--color-text-icon-primary);

  & > svg {
    width: 24px;
    height: 24px;
  }
`;

const ReleaseBox = styled.div`
  padding: var(--space-300);
  border: var(--stroke-100) solid var(--color-stroke-border);
  border-radius: var(--radius-300);
  background: var(--color-surfaces-on-container);
`;

const ReleaseDate = styled.p`
  margin: 0 0 var(--space-100);
  font-size: var(--type-size-caption);
  color: var(--color-text-icon-secondary);
`;

const ReleaseHeadline = styled.p`
  margin: 0;
  font-size: var(--type-size-subject);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-icon-primary);
`;

const CardAction = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-100);
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary-primary);
`;

/**
 * Home page — Figma Cake--Website node 66:7534.
 * Content mirrors the legacy home while using cake& components + tokens.
 */
export function HomePage() {
  return (
    <Page>
      <Hero>
        <HeroTitle>Cake</HeroTitle>
        <HeroSubtitle>Ingredients for great design.</HeroSubtitle>
      </Hero>

      <Grid>
        <CardLink to="/resources">
          <Card elevation="high">
            <SimpleCard
              title="Get started"
              body="Start building modular, accessible, and brand-aligned features using our core components. Explore foundations, patterns, and reusable components to design faster across Lenovo products."
              actions={
                <CardAction>
                  Access Figma libraries
                  <ArrowRight size={16} aria-hidden />
                </CardAction>
              }
            />
          </Card>
        </CardLink>

        <CardLink to="/whats-new">
          <Card elevation="high">
            <SimpleCard
              title="What's new"
              body={
                <ReleaseBox>
                  <ReleaseDate>May 12, 2026</ReleaseDate>
                  <ReleaseHeadline>New AI guidelines added</ReleaseHeadline>
                </ReleaseBox>
              }
              actions={
                <CardAction>
                  Find out what&apos;s new
                  <ArrowRight size={16} aria-hidden />
                </CardAction>
              }
            />
          </Card>
        </CardLink>
      </Grid>

      <Section>
        <SectionTitle>Why build with Cake?</SectionTitle>
        <FeatureGrid>
          <Card elevation="low">
            <FeatureCardInner>
              <IconBadge aria-hidden><Accessibility /></IconBadge>
              <SimpleCard
                title="Accessibility"
                body={
                  <>
                    Every cake& component is built to meet{' '}
                    <BodyLink
                      href="https://www.w3.org/TR/WCAG22/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WCAG 2.2 AA standards
                    </BodyLink>
                    , ensuring your experiences are accessible, inclusive, and usable by everyone.
                  </>
                }
              />
            </FeatureCardInner>
          </Card>

          <Card elevation="low">
            <FeatureCardInner>
              <IconBadge aria-hidden><Palette /></IconBadge>
              <SimpleCard
                title="Brand"
                body="Maintain brand consistency across all your applications. cake& provides building blocks that reflect Lenovo's design language and values."
              />
            </FeatureCardInner>
          </Card>

          <Card elevation="low">
            <FeatureCardInner>
              <IconBadge aria-hidden><Blocks /></IconBadge>
              <SimpleCard
                title="Modularity"
                body="Build with confidence using our modular component system. Mix and match components to create consistent, scalable interfaces that adapt to your needs."
              />
            </FeatureCardInner>
          </Card>
        </FeatureGrid>
      </Section>
    </Page>
  );
}
