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
  --hero-pin-progress: 0;
  --hero-compact-h: 88px;
  --hero-expanded-h: 320px;
  --hero-padding-top: 0px;
  --hero-compact-top: 20px;
  --hero-flow-h: 0px;
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  /* Pull page content up as the hero visually collapses so cards scroll under the frosted bar. */
  margin-bottom: calc(
    var(--hero-progress) * (var(--hero-compact-h) - var(--hero-expanded-h))
  );
  padding: calc(var(--space-1000) + var(--space-500)) var(--space-300) var(--space-900);

  /* Figma 95:1365 — indigo/magenta gradient wash (hidden once frosted bar takes over). */
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
    opacity: calc(1 - var(--hero-progress));
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

/** Frosted sticky bar — sibling outside clip-path so backdrop-filter samples scroll content. */
const HeroFrost = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: var(--hero-compact-h);
  z-index: 0;
  pointer-events: none;
  opacity: var(--hero-progress);
  /* Foundations/Special Surfaces — container blur recipe (fill + blur + elevation). */
  background: var(--color-surfaces-container-blur);
  -webkit-backdrop-filter: blur(45px);
  backdrop-filter: blur(45px);
  border-bottom: var(--stroke-100) solid var(--color-stroke-border-container);
  box-shadow: var(--elevation-3);
`;

const HeroSurface = styled.div.attrs({ 'data-hero-surface': true })`
  height: var(--hero-flow-h);
  overflow: hidden;
  clip-path: inset(
    0 0 calc(var(--hero-progress) * max(0px, var(--hero-surface-h) - var(--hero-compact-h))) 0
  );
  pointer-events: none;
`;

const HeroInner = styled.div.attrs({ 'data-hero-inner': true })`
  position: absolute;
  z-index: 1;
  top: calc(
    var(--hero-padding-top) * (1 - var(--hero-pin-progress)) +
      var(--hero-compact-top) * var(--hero-pin-progress)
  );
  left: var(--space-300);
  right: var(--space-300);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-500);
  width: auto;
  max-width: 1440px;
  margin: 0 auto;
  backface-visibility: hidden;

  ${media.sm} {
    left: var(--space-400);
    right: var(--space-400);
  }

  ${media.md} {
    left: var(--space-800);
    right: var(--space-800);
  }

  ${media.xl} {
    left: calc(var(--space-1000) + var(--space-800));
    right: calc(var(--space-1000) + var(--space-800));
  }

  ${media.maxSm} {
    flex-direction: column;
    align-items: stretch;
  }

  @media (prefers-reduced-motion: reduce) {
    top: calc(
      var(--hero-padding-top) * (1 - var(--hero-progress)) +
        var(--hero-compact-top) * var(--hero-progress)
    );
  }
`;

const HeroBrand = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-width: 0;
`;

const HeroWordmark = styled(CakeWordmark)`
  --hero-wordmark-expanded: clamp(2.75rem, 11vw, 5.5rem);
  --hero-wordmark-compact: 1.75rem;
  max-width: 100%;
  height: calc(
    var(--hero-wordmark-compact) * var(--hero-progress) +
      var(--hero-wordmark-expanded) * (1 - var(--hero-progress))
  );

  ${media.sm} {
    --hero-wordmark-expanded: clamp(3.25rem, 10vw, 5.5rem);
    --hero-wordmark-compact: 2rem;
  }

  ${media.md} {
    --hero-wordmark-expanded: 5.5rem;
    --hero-wordmark-compact: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  position: absolute;
  top: calc(100% + var(--space-500));
  left: 0;
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

const HeroTools = styled.div.attrs({ 'data-hero-tools': true })`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 48px;
  gap: var(--space-500);

  ${media.maxSm} {
    flex-wrap: wrap;
    justify-content: flex-end;
    height: auto;
  }
`;

const ToolCluster = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
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
        <HeroFrost aria-hidden />
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
        <HeroSurface aria-hidden />
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
