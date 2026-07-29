import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  Accessibility,
  ArrowRight,
  PenTool,
  Puzzle,
} from 'lucide-react';

import { Card } from '@/cakeand/components/Card';
import { SimpleCard } from '@/cakeand/components/Card/SimpleCard';

import { AuroraBackground } from '../components/AuroraBackground';
import { media } from '../styles/breakpoints';

const PageWrap = styled.div`
  position: relative;
  isolation: isolate;
`;

const Page = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1000px;
  margin: 0 auto;
  padding: var(--space-800) var(--space-300) calc(var(--space-1000) + var(--space-500));

  ${media.md} {
    padding-inline: var(--space-500);
  }
`;

const Hero = styled.header`
  margin-bottom: var(--space-500);
`;

const HeroTitle = styled.h1`
  margin: 0 0 var(--space-200);
  font-size: clamp(4rem, 12vw, 8rem);
  font-weight: var(--font-weight-bold);
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--color-text-icon-primary);

  ${media.maxSm} {
    line-height: 1.2;
  }
`;

const HeroSubtitle = styled.p`
  margin: 0;
  max-width: 42.5rem;
  font-size: clamp(var(--type-size-title), 4vw, 2.25rem);
  font-weight: var(--font-weight-regular);
  line-height: 1.4;
  color: var(--color-text-icon-secondary);
`;

const PromoGrid = styled.div`
  display: grid;
  gap: var(--space-500);
  grid-template-columns: 1fr;
  align-items: stretch;

  ${media.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  gap: var(--space-500);
  grid-template-columns: 1fr;
  align-items: stretch;

  ${media.md} {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
`;

const Section = styled.section`
  margin-top: var(--space-600);
  padding-block: var(--space-300);
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
  border-radius: var(--radius-400);
  transition: transform 160ms ease, box-shadow 160ms ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: var(--stroke-200) solid var(--color-primary-primary);
    outline-offset: var(--space-050);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;

const PromoCard = styled(Card)`
  height: 100%;
  transition: box-shadow 160ms ease;

  ${CardLink}:hover & {
    box-shadow: var(--elevation-1, var(--elevation-0));
  }
`;

const FeatureCard = styled(Card)`
  height: 100%;
`;

const FeatureCardInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-300);
  padding: var(--space-500);
  height: 100%;
`;

const IconBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-100);
  color: var(--color-text-icon-primary);

  & > svg {
    width: 2rem;
    height: 2rem;
  }
`;

const BodyLink = styled.a`
  color: var(--color-primary-primary);
  text-decoration: none;

  &:hover {
    color: var(--color-primary-primary-hover);
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`;

const ReleaseBox = styled.div`
  padding: var(--space-400);
  border: var(--stroke-100) solid var(--color-stroke-border);
  border-radius: var(--radius-300);
  background: var(--color-surfaces-container);
`;

const ReleaseDate = styled.p`
  margin: 0 0 var(--space-200);
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

const FeatureBody = styled.div`
  flex: 1 1 auto;
`;

/**
 * Home page — Figma Cake--Website node 66:7534.
 * Layout and copy match the production cake.lenovo.com home, styled with cake& tokens.
 */
export function HomePage() {
  return (
    <PageWrap>
      <AuroraBackground />
      <Page>
        <Hero>
          <HeroTitle>Cake</HeroTitle>
          <HeroSubtitle>Ingredients for great design.</HeroSubtitle>
        </Hero>

        <PromoGrid>
          <CardLink to="/resources">
            <PromoCard elevation="high">
              <SimpleCard
                title="Get started"
                body="Start building modular, accessible, and brand-aligned features using our core components. Explore foundations, patterns, and reusable components to design faster and more consistently across Lenovo products."
                actions={
                  <CardAction>
                    Access Figma Libraries
                    <ArrowRight size={16} aria-hidden />
                  </CardAction>
                }
              />
            </PromoCard>
          </CardLink>

          <CardLink to="/whats-new">
            <PromoCard elevation="high">
              <SimpleCard
                title="What's new"
                body={
                  <ReleaseBox>
                    <ReleaseDate>May 12, 2026</ReleaseDate>
                    <ReleaseHeadline>🎉 New AI guidelines added</ReleaseHeadline>
                  </ReleaseBox>
                }
                actions={
                  <CardAction>
                    Find out what&apos;s new
                    <ArrowRight size={16} aria-hidden />
                  </CardAction>
                }
              />
            </PromoCard>
          </CardLink>
        </PromoGrid>

        <Section>
          <SectionTitle>Why build with Cake?</SectionTitle>
          <FeatureGrid>
            <FeatureCard elevation="high">
              <FeatureCardInner>
                <IconBadge aria-hidden>
                  <Accessibility />
                </IconBadge>
                <FeatureBody>
                  <SimpleCard
                    title="Accessibility"
                    body={
                      <>
                        Every Cake component is built to meet{' '}
                        <BodyLink
                          href="https://www.w3.org/TR/WCAG22/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          WCAG 2.2 AA standards
                        </BodyLink>
                        , ensuring your experiences are accessible, inclusive, and usable by everyone,
                        regardless of ability or device.
                      </>
                    }
                  />
                </FeatureBody>
              </FeatureCardInner>
            </FeatureCard>

            <FeatureCard elevation="high">
              <FeatureCardInner>
                <IconBadge aria-hidden>
                  <PenTool />
                </IconBadge>
                <FeatureBody>
                  <SimpleCard
                    title="Brand"
                    body="Maintain brand consistency across all your applications. Cake provides the building blocks that reflect Lenovo's design language and values."
                  />
                </FeatureBody>
              </FeatureCardInner>
            </FeatureCard>

            <FeatureCard elevation="high">
              <FeatureCardInner>
                <IconBadge aria-hidden>
                  <Puzzle />
                </IconBadge>
                <FeatureBody>
                  <SimpleCard
                    title="Modularity"
                    body="Build with confidence using our modular component system. Mix and match components to create consistent, scalable interfaces that adapt to your needs."
                  />
                </FeatureBody>
              </FeatureCardInner>
            </FeatureCard>
          </FeatureGrid>
        </Section>
      </Page>
    </PageWrap>
  );
}
