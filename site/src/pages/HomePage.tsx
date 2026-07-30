import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowRight, Languages, Moon, Sun } from 'lucide-react';

import { Button } from '@/cakeand/components/Button';
import { IconButton } from '@/cakeand/components/Button/IconButton';
import { Card } from '@/cakeand/components/Card';

import { HeroSearch } from '../components/HeroSearch';
import { useSiteChrome } from '../layout/SiteChromeContext';
import { useSiteTranslation } from '../i18n/useSiteTranslation';
import { useHeroCollapse } from '../hooks/useHeroCollapse';
import { CakeWordmark } from '../components/CakeWordmark';
import { STORYBOOK_HOME } from '../data/routes';
import { media } from '../styles/breakpoints';

/** Figma Cake--Website — node 66:7534 (light) / 117:2578 (dark). */
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
  --hero-progress: 0;
  --hero-compact-h: 88px;
  --hero-expanded-h: 320px;
  --hero-shift: 0px;
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  overflow: hidden;
  clip-path: inset(
    0 0 calc(var(--hero-progress) * (var(--hero-expanded-h) - var(--hero-compact-h))) 0
  );
  padding: calc(var(--space-1000) + var(--space-500)) var(--space-300) var(--space-900);
  border-bottom: var(--stroke-100) solid
    color-mix(
      in srgb,
      var(--color-stroke-border) calc(var(--hero-progress) * 70%),
      transparent
    );

  /* Figma 95:1365 — indigo/magenta gradient wash. */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    background: linear-gradient(
      177.91deg,
      color-mix(in srgb, var(--color-badge-indigo-light) 15%, transparent) 17.02%,
      color-mix(in srgb, var(--color-badge-magenta-light) 15%, transparent) 82.98%
    );
    opacity: calc(1 - var(--hero-progress) * 0.92);
  }

  /* Frosted glass when scrolled — semi-transparent + blur. */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    background: color-mix(
      in srgb,
      var(--color-surfaces-container-blur) calc(var(--hero-progress) * 72%),
      transparent
    );
    -webkit-backdrop-filter: blur(calc(var(--hero-progress) * 48px)) saturate(1.8);
    backdrop-filter: blur(calc(var(--hero-progress) * 48px)) saturate(1.8);
    box-shadow: inset 0 1px 0
      color-mix(in srgb, var(--color-surfaces-inverse-container) calc(var(--hero-progress) * 30%), transparent);
  }

  ${media.sm} {
    padding-inline: var(--space-400);
  }

  ${media.md} {
    padding-inline: var(--space-800);
  }

  ${media.xl} {
    padding-inline: calc(var(--space-1000) + var(--space-800));
  }
`;

const HeroInner = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--space-500);
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  transform: translate3d(0, calc(var(--hero-progress) * var(--hero-shift) * -1), 0);
  transform-origin: top center;
  backface-visibility: hidden;

  @media (prefers-reduced-motion: reduce) {
    transform: none;
  }

  ${media.maxSm} {
    flex-direction: column;
    align-items: stretch;
  }
`;

const HeroBrand = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: var(--space-500);
  min-width: 0;
`;

const HeroWordmark = styled(CakeWordmark)`
  height: clamp(2.75rem, 11vw, 5.5rem);
  max-width: 100%;
  transform: scale(calc(1 - var(--hero-progress) * 0.42));
  transform-origin: left bottom;

  ${media.sm} {
    height: clamp(3.25rem, 10vw, 5.5rem);
  }

  ${media.md} {
    height: 5.5rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transform: none;
  }
`;

const HeroSubtitle = styled.p`
  margin: 0;
  max-width: 40rem;
  font-size: var(--type-size-subject);
  font-weight: var(--font-weight-regular);
  line-height: 1.35;
  letter-spacing: 0.2px;
  color: var(--color-text-icon-secondary);
  opacity: calc(1 - var(--hero-progress));
  pointer-events: none;

  ${media.sm} {
    font-size: var(--type-size-subtitle);
  }

  ${media.md} {
    font-size: var(--type-size-page);
  }
`;

const HeroTools = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: var(--space-500);

  ${media.maxSm} {
    flex-wrap: wrap;
    justify-content: flex-end;
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

/** Figma card header illustration — 180px tall (nodes 66:7534 / 117:2578). */
const PromoCardMedia = styled.div`
  flex-shrink: 0;
  height: 180px;
  overflow: hidden;
  background: var(--color-surfaces-on-container);

  img {
    display: block;
    width: 100%;
    height: 170%;
    max-width: none;
    object-fit: cover;
    object-position: top center;
  }
`;

const PromoCardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-400);
  padding: var(--space-500);
  flex: 1 1 auto;
`;

const PromoCardTitle = styled.h3`
  margin: 0;
  font-size: var(--type-size-title);
  font-weight: var(--font-weight-bold);
  line-height: 1.35;
  color: var(--color-text-icon-primary);
`;

const PromoCardText = styled.p`
  margin: 0;
  flex: 1 1 auto;
  font-size: var(--type-size-subject);
  font-weight: var(--font-weight-regular);
  line-height: 1.35;
  letter-spacing: 0.2px;
  color: var(--color-text-icon-secondary);
`;

const PromoCardActions = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-300);
`;

const PromoCardInner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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
  min-height: 275px;
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
    object-fit: contain;
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

const STARTER_CARD_KEYS = ['designers', 'developers', 'resources'] as const;

const STARTER_CARD_META = {
  designers: {
    href: '/get-started/figma-libraries',
    media: { light: '/home/card-designers.png', dark: '/home/card-designers-dark.png' },
    external: false,
  },
  developers: {
    href: STORYBOOK_HOME,
    media: { light: '/home/card-developers.png', dark: '/home/card-developers-dark.png' },
    external: true,
  },
  resources: {
    href: '/resources',
    media: { light: '/home/card-resources.png', dark: '/home/card-resources-dark.png' },
    external: false,
  },
} as const;

const FOUNDATION_CARD_KEYS = ['accessibility', 'brand', 'modularity'] as const;

const FOUNDATION_CARD_ICONS = {
  accessibility: '/home/icon-accessibility.svg',
  brand: '/home/icon-brand.svg',
  modularity: '/home/icon-modularity.svg',
} as const;

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
    <PromoCardInner>
      <PromoCardMedia>
        <img src={media} alt="" />
      </PromoCardMedia>
      <PromoCardBody>
        <PromoCardTitle>{title}</PromoCardTitle>
        <PromoCardText>{body}</PromoCardText>
        <PromoCardActions>
          <KitButton size="md" variant="outline" intent="secondary" endIcon={<ArrowRight size={16} />}>
            {cta}
          </KitButton>
        </PromoCardActions>
      </PromoCardBody>
    </PromoCardInner>
  );
}

export function HomePage() {
  const { themeMode, onToggleTheme, locale, onToggleLocale } = useSiteChrome();
  const t = useSiteTranslation();
  const isDark = themeMode === 'dark.a';
  const { heroRef, progress } = useHeroCollapse();

  return (
    <Page>
      <Hero ref={heroRef}>
        <HeroInner>
          <HeroBrand>
            <HeroWordmark />
            <HeroSubtitle>{t.home.heroSubtitle}</HeroSubtitle>
          </HeroBrand>
          <HeroTools>
            <HeroSearch progress={progress} />
            <ToolCluster>
              <IconButton
                label={isDark ? t.chrome.switchToLightTheme : t.chrome.switchToDarkTheme}
                icon={isDark ? <Sun /> : <Moon />}
                intent="secondary"
                variant="ghost"
                size="lg"
                onClick={onToggleTheme}
              />
              <IconButton
                label={locale === 'en' ? t.chrome.switchToChinese : t.chrome.switchToEnglish}
                icon={<Languages />}
                intent="secondary"
                variant="ghost"
                size="lg"
                onClick={onToggleLocale}
              />
            </ToolCluster>
          </HeroTools>
        </HeroInner>
      </Hero>

      <Content>
        <Section>
          <SectionIntro>
            <SectionTitle>{t.home.getStartedTitle}</SectionTitle>
            <SectionLead>{t.home.getStartedLead}</SectionLead>
          </SectionIntro>

          <CardGrid>
            {STARTER_CARD_KEYS.map((key) => {
              const card = t.home.starterCards[key];
              const meta = STARTER_CARD_META[key];
              const media = isDark ? meta.media.dark : meta.media.light;

              return meta.external ? (
                <PromoCard key={key} elevation="low">
                  <a
                    href={meta.href}
                    style={{ display: 'block', height: '100%', textDecoration: 'none', color: 'inherit' }}
                  >
                    <PromoCardContent
                      title={card.title}
                      body={card.body}
                      cta={card.cta}
                      media={media}
                    />
                  </a>
                </PromoCard>
              ) : (
                <CardLink key={key} to={meta.href}>
                  <PromoCard elevation="low">
                    <PromoCardContent
                      title={card.title}
                      body={card.body}
                      cta={card.cta}
                      media={media}
                    />
                  </PromoCard>
                </CardLink>
              );
            })}
          </CardGrid>
        </Section>

        <Section>
          <SectionIntro>
            <SectionTitle>{t.home.sharedFoundationsTitle}</SectionTitle>
          </SectionIntro>

          <CardGrid>
            {FOUNDATION_CARD_KEYS.map((key) => {
              const icon = FOUNDATION_CARD_ICONS[key];

              if (key === 'accessibility') {
                const card = t.home.foundationCards.accessibility;
                return (
                  <FoundationCard key={key} elevation="low">
                    <FoundationInner>
                      <FoundationIcon aria-hidden>
                        <img src={icon} alt="" />
                      </FoundationIcon>
                      <FoundationTitle>{card.title}</FoundationTitle>
                      <FoundationBody>
                        {card.body}
                        <BodyLink href="https://www.w3.org/TR/WCAG22/" target="_blank" rel="noopener noreferrer">
                          {card.wcagLinkLabel}
                        </BodyLink>
                        {card.bodyAfterLink}
                      </FoundationBody>
                    </FoundationInner>
                  </FoundationCard>
                );
              }

              const card = t.home.foundationCards[key];
              return (
                <FoundationCard key={key} elevation="low">
                  <FoundationInner>
                    <FoundationIcon aria-hidden>
                      <img src={icon} alt="" />
                    </FoundationIcon>
                    <FoundationTitle>{card.title}</FoundationTitle>
                    <FoundationBody>{card.body}</FoundationBody>
                  </FoundationInner>
                </FoundationCard>
              );
            })}
          </CardGrid>
        </Section>

        <PageFooter>{t.home.footer}</PageFooter>
      </Content>
    </Page>
  );
}
