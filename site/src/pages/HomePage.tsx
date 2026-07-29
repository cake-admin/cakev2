import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowRight, Languages, Moon, Sun } from 'lucide-react';

import { Button } from '@/cakeand/components/Button';
import { IconButton } from '@/cakeand/components/Button/IconButton';
import { Card } from '@/cakeand/components/Card';
import { SimpleCard } from '@/cakeand/components/Card/SimpleCard';

import { useSiteChrome } from '../layout/SiteChromeContext';
import { useSiteTranslation } from '../i18n/useSiteTranslation';
import { lerp, useHeroCollapse } from '../hooks/useHeroCollapse';
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

const Hero = styled.header<{ $progress: number }>`
  --hero-progress: ${(p) => p.$progress};
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  padding-top: ${(p) => lerp(64, 16, p.$progress)}px;
  padding-bottom: ${(p) => lerp(48, 12, p.$progress)}px;
  padding-inline: var(--space-300);
  border-bottom: ${(p) =>
    p.$progress > 0.05
      ? 'var(--stroke-100) solid color-mix(in srgb, var(--color-stroke-border) 70%, transparent)'
      : 'var(--stroke-100) solid transparent'};
  background:
    linear-gradient(
      178deg,
      color-mix(in srgb, var(--color-badge-indigo-light) calc(15% - var(--hero-progress) * 10%), transparent)
        17%,
      color-mix(in srgb, var(--color-badge-magenta-light) calc(15% - var(--hero-progress) * 10%), transparent)
        83%
    ),
    color-mix(
      in srgb,
      var(--color-surfaces-canvas) calc(55% + var(--hero-progress) * 40%),
      transparent
    );
  -webkit-backdrop-filter: blur(calc(var(--hero-progress) * 14px));
  backdrop-filter: blur(calc(var(--hero-progress) * 14px));

  ${media.sm} {
    padding-top: ${(p) => lerp(72, 16, p.$progress)}px;
    padding-bottom: ${(p) => lerp(56, 12, p.$progress)}px;
    padding-inline: var(--space-400);
  }

  ${media.md} {
    padding-top: ${(p) => lerp(80, 20, p.$progress)}px;
    padding-bottom: ${(p) => lerp(64, 16, p.$progress)}px;
    padding-inline: var(--space-800);
  }

  ${media.xl} {
    padding-inline: calc(var(--space-1000) + var(--space-800));
  }
`;

const HeroInner = styled.div<{ $progress: number }>`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  grid-template-areas:
    'wordmark tools'
    'subtitle subtitle';
  column-gap: var(--space-200);
  row-gap: ${(p) => lerp(16, 0, p.$progress)}px;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  ${media.sm} {
    column-gap: var(--space-300);
    row-gap: ${(p) => lerp(20, 0, p.$progress)}px;
  }

  ${media.md} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${(p) => lerp(24, 0, p.$progress)}px;

    ${(p) =>
      p.$progress > 0.65 &&
      `
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-300);
    `}
  }
`;

const HeroRow = styled.div<{ $progress: number }>`
  display: contents;

  ${media.md} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${(p) => lerp(24, 12, p.$progress)}px;
    width: 100%;
    min-height: ${(p) => (p.$progress > 0.85 ? 0 : 'auto')};
    overflow: hidden;

    ${(p) =>
      p.$progress > 0.65 &&
      `
      width: auto;
      flex: 0 0 auto;
    `}
  }
`;

const HeroWordmark = styled(CakeWordmark)<{ $progress: number }>`
  grid-area: wordmark;
  align-self: center;
  height: ${(p) => lerp(44, 28, p.$progress)}px;
  max-width: 100%;

  ${media.sm} {
    height: ${(p) => lerp(52, 32, p.$progress)}px;
  }

  ${media.md} {
    align-self: auto;
    height: ${(p) => lerp(88, 40, p.$progress)}px;
  }
`;

const HeroSubtitle = styled.p<{ $progress: number }>`
  grid-area: subtitle;
  margin: 0;
  max-width: 40rem;
  overflow: hidden;
  font-size: var(--type-size-subject);
  font-weight: var(--font-weight-regular);
  line-height: 1.35;
  letter-spacing: 0.2px;
  color: var(--color-text-icon-secondary);
  opacity: ${(p) => lerp(1, 0, p.$progress)};
  max-height: ${(p) => lerp(120, 0, p.$progress)}px;
  transform: translateY(${(p) => lerp(0, -8, p.$progress)}px);
  pointer-events: ${(p) => (p.$progress > 0.75 ? 'none' : 'auto')};

  ${media.sm} {
    font-size: var(--type-size-subtitle);
  }

  ${media.md} {
    flex: 1 1 auto;
    min-width: 0;
    font-size: var(--type-size-page);
    max-height: ${(p) => lerp(80, 0, p.$progress)}px;
  }
`;

const HeroTools = styled.div`
  grid-area: tools;
  align-self: start;
  justify-self: end;
  flex-shrink: 0;
  width: auto;
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

const STARTER_CARD_KEYS = ['designers', 'developers', 'resources'] as const;

const STARTER_CARD_META = {
  designers: {
    href: '/get-started/figma-libraries',
    media: '/home/card-designers.png',
    external: false,
  },
  developers: {
    href: STORYBOOK_HOME,
    media: '/home/card-developers.png',
    external: true,
  },
  resources: {
    href: '/resources',
    media: '/home/card-resources.png',
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
  const { themeMode, onToggleTheme, locale, onToggleLocale } = useSiteChrome();
  const t = useSiteTranslation();
  const isDark = themeMode === 'dark.a';
  const heroProgress = useHeroCollapse();
  const compactTools = heroProgress > 0.45;

  return (
    <Page>
      <Hero $progress={heroProgress}>
        <HeroInner $progress={heroProgress}>
          <HeroWordmark $progress={heroProgress} />
          <HeroRow $progress={heroProgress}>
            <HeroSubtitle $progress={heroProgress}>{t.home.heroSubtitle}</HeroSubtitle>
            <HeroTools>
              <ToolCluster>
                <IconButton
                  label={isDark ? t.chrome.switchToLightTheme : t.chrome.switchToDarkTheme}
                  icon={isDark ? <Sun /> : <Moon />}
                  intent="secondary"
                  variant="ghost"
                  size={compactTools ? 'md' : 'lg'}
                  onClick={onToggleTheme}
                />
                <IconButton
                  label={locale === 'en' ? t.chrome.switchToChinese : t.chrome.switchToEnglish}
                  icon={<Languages />}
                  intent="secondary"
                  variant="ghost"
                  size={compactTools ? 'md' : 'lg'}
                  onClick={onToggleLocale}
                />
              </ToolCluster>
            </HeroTools>
          </HeroRow>
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
                      media={meta.media}
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
                      media={meta.media}
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
