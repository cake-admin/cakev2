import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowRight, Languages, Moon, Sun } from 'lucide-react';

import { Button } from '@/cakeand/components/Button';
import { IconButton } from '@/cakeand/components/Button/IconButton';
import { Card } from '@/cakeand/components/Card';
import { SimpleCard } from '@/cakeand/components/Card/SimpleCard';

import { useSiteChrome } from '../layout/SiteChromeContext';
import { CakeWordmark } from '../components/CakeWordmark';
import { STORYBOOK_HOME } from '../data/routes';
import { media } from '../styles/breakpoints';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-900);
  width: 100%;
  padding-bottom: calc(var(--space-1000) + var(--space-500));
  background: var(--color-surfaces-canvas);
`;

const Hero = styled.header`
  width: 100%;
  padding: calc(var(--space-1000) + var(--space-800)) var(--space-300)
    var(--space-900);
  background: linear-gradient(
    178deg,
    color-mix(in srgb, var(--color-badge-indigo-light) 15%, transparent) 17%,
    color-mix(in srgb, var(--color-badge-magenta-light) 15%, transparent) 83%
  );

  ${media.md} {
    padding-inline: var(--space-800);
  }

  ${media.xl} {
    padding-inline: calc(var(--space-1000) + var(--space-800));
  }
`;

const HeroInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-500);
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  ${media.lg} {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    gap: var(--space-500);
  }
`;

const HeroCopy = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: var(--space-500);
  min-width: 0;
`;

const HeroWordmark = styled(CakeWordmark)`
  height: clamp(4rem, 10vw, 7.67rem);
`;

const HeroSubtitle = styled.p`
  margin: 0;
  max-width: 40rem;
  font-size: var(--type-size-page);
  font-weight: var(--font-weight-regular);
  line-height: 1.35;
  letter-spacing: 0.2px;
  color: var(--color-text-icon-secondary);
`;

const HeroTools = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-500);
  width: 100%;

  ${media.lg} {
    width: auto;
    flex-shrink: 0;
  }
`;

const ToolCluster = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(var(--space-650) + var(--space-200));
  width: 100%;
  max-width: 1440px;
  padding-inline: var(--space-300);

  ${media.md} {
    padding-inline: var(--space-800);
  }

  ${media.xl} {
    padding-inline: calc(var(--space-1000) + var(--space-800));
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-800);
  width: 100%;
`;

const SectionIntro = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-200);
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-size: var(--type-size-page);
  font-weight: var(--font-weight-bold);
  line-height: 1.35;
  letter-spacing: -0.4px;
  color: var(--color-text-icon-primary);
`;

const SectionLead = styled.p`
  margin: 0;
  font-size: var(--type-size-subtitle);
  font-weight: var(--font-weight-regular);
  line-height: 1.35;
  letter-spacing: 0.3px;
  color: var(--color-text-icon-secondary);
`;

const CardGrid = styled.div`
  display: grid;
  gap: var(--space-600);
  grid-template-columns: 1fr;

  ${media.md} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const CardLink = styled(Link)`
  display: block;
  height: 100%;
  text-decoration: none;
  color: inherit;
  border-radius: var(--radius-400);

  &:focus-visible {
    outline: var(--stroke-200) solid var(--color-primary-primary);
    outline-offset: var(--space-050);
  }
`;

const PromoCard = styled(Card)`
  height: 100%;
  box-shadow: var(--elevation-0);
`;

const MediaStrip = styled.div`
  width: 100%;
  height: 152px;
  overflow: hidden;
  background: var(--color-surfaces-on-container);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const KitButton = styled(Button)`
  && {
    color: var(--color-surfaces-inverse-container);
    box-shadow: inset 0 0 0 var(--stroke-200) var(--color-surfaces-inverse-container);

    &:hover:not(:disabled) {
      background: var(--color-surfaces-on-container);
    }
  }
`;

const FoundationCard = styled(Card)`
  height: 100%;
  box-shadow: var(--elevation-0);
`;

const FoundationInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-400);
  padding: var(--space-600);
`;

const FoundationIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: var(--radius-1000);
  background: var(--color-tonal-tonal-overlay);

  img {
    width: 24px;
    height: 24px;
  }
`;

const FoundationTitle = styled.h3`
  margin: 0;
  font-size: var(--type-size-title);
  font-weight: var(--font-weight-bold);
  line-height: 1.35;
  color: var(--color-text-icon-primary);
`;

const FoundationBody = styled.p`
  margin: 0;
  font-size: var(--type-size-subject);
  font-weight: var(--font-weight-regular);
  line-height: 1.35;
  letter-spacing: 0.2px;
  color: var(--color-text-icon-secondary);
`;

const BodyLink = styled.a`
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 2px;

  &:hover {
    color: var(--color-primary-primary);
  }
`;

const PageFooter = styled.footer`
  width: 100%;
  padding-inline: var(--space-300);
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-regular);
  line-height: 1.35;
  letter-spacing: 0.2px;
  text-align: center;
  color: var(--color-text-icon-placeholder);
`;

const STARTER_CARDS = [
  {
    key: 'designers',
    title: 'Designers',
    body: 'Access our Figma libraries, iconography, and patterns guidelines to create consistent Lenovo experiences.',
    cta: 'Get Figma kit',
    href: '/get-started/figma-libraries',
    media: '/home/card-designers.png',
    external: false,
  },
  {
    key: 'developers',
    title: 'Developers',
    body: 'Explore our full component library in Storybook to see interactive examples, usage guidelines, and available props for every component.',
    cta: 'View Storybook',
    href: STORYBOOK_HOME,
    media: '/home/card-developers.png',
    external: true,
  },
  {
    key: 'resources',
    title: 'Resources',
    body: 'Visit our Resources page for downloadable brand assets, approved fonts, logos, color palettes, and links to our full brand guidelines.',
    cta: 'View resources',
    href: '/resources',
    media: '/home/card-resources.png',
    external: false,
  },
] as const;

const FOUNDATION_CARDS = [
  {
    key: 'accessibility',
    title: 'Accessibility',
    icon: '/home/icon-accessibility.png',
    body: (
      <>
        Every Cake& component is built to meet{' '}
        <BodyLink href="https://www.w3.org/TR/WCAG22/" target="_blank" rel="noopener noreferrer">
          WCAG 2.2 AA standards
        </BodyLink>
        , ensuring your experiences are accessible, inclusive, and usable by everyone, regardless of
        ability or device.
      </>
    ),
  },
  {
    key: 'brand',
    title: 'Brand',
    icon: '/home/icon-brand.png',
    body: "Maintain brand consistency across all your applications. Cake& provides the building blocks that reflect Lenovo's design language and values.",
  },
  {
    key: 'modularity',
    title: 'Modularity',
    icon: '/home/icon-modularity.png',
    body: 'Build with confidence using our modular component system. Mix and match components to create consistent, scalable interfaces that adapt to your needs.',
  },
] as const;

function PromoCardContent({
  title,
  body,
  cta,
  media,
}: {
  title: string;
  body: string;
  cta: string;
  media: string;
}) {
  return (
    <SimpleCard
      media={
        <MediaStrip>
          <img src={media} alt="" />
        </MediaStrip>
      }
      title={title}
      body={body}
      actions={
        <KitButton size="md" variant="outline" intent="secondary" endIcon={<ArrowRight size={16} />}>
          {cta}
        </KitButton>
      }
    />
  );
}

/**
 * Home page — Figma Cake--Website node 66:7534.
 */
export function HomePage() {
  const { themeMode, onToggleTheme } = useSiteChrome();
  const isDark = themeMode === 'dark.a';

  return (
    <Page>
      <Hero>
        <HeroInner>
          <HeroCopy>
            <HeroWordmark />
            <HeroSubtitle>Lenovo design system for Web &amp; Windows OS.</HeroSubtitle>
          </HeroCopy>

          <HeroTools>
            <ToolCluster>
              <IconButton
                label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
                icon={isDark ? <Sun /> : <Moon />}
                intent="primary"
                variant="fill"
                size="lg"
                onClick={onToggleTheme}
              />
              <IconButton
                label="Language"
                icon={<Languages />}
                intent="secondary"
                variant="ghost"
                size="lg"
              />
            </ToolCluster>
          </HeroTools>
        </HeroInner>
      </Hero>

      <Content>
        <Section>
          <SectionIntro>
            <SectionTitle>Get started</SectionTitle>
            <SectionLead>Everything you need to start building consistent experiences.</SectionLead>
          </SectionIntro>

          <CardGrid>
            {STARTER_CARDS.map((card) =>
              card.external ? (
                <PromoCard key={card.key} elevation="low">
                  <a
                    href={card.href}
                    style={{ display: 'block', height: '100%', textDecoration: 'none', color: 'inherit' }}
                  >
                    <PromoCardContent
                      title={card.title}
                      body={card.body}
                      cta={card.cta}
                      media={card.media}
                    />
                  </a>
                </PromoCard>
              ) : (
                <CardLink key={card.key} to={card.href}>
                  <PromoCard elevation="low">
                    <PromoCardContent
                      title={card.title}
                      body={card.body}
                      cta={card.cta}
                      media={card.media}
                    />
                  </PromoCard>
                </CardLink>
              ),
            )}
          </CardGrid>
        </Section>

        <Section>
          <SectionIntro>
            <SectionTitle>Shared foundations</SectionTitle>
          </SectionIntro>

          <CardGrid>
            {FOUNDATION_CARDS.map((card) => (
              <FoundationCard key={card.key} elevation="low">
                <FoundationInner>
                  <FoundationIcon aria-hidden>
                    <img src={card.icon} alt="" />
                  </FoundationIcon>
                  <FoundationTitle>{card.title}</FoundationTitle>
                  <FoundationBody>{card.body}</FoundationBody>
                </FoundationInner>
              </FoundationCard>
            ))}
          </CardGrid>
        </Section>

        <PageFooter>© 2026 Cake& Design System. All rights reserved.</PageFooter>
      </Content>
    </Page>
  );
}
