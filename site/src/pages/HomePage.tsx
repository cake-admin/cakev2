import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { ArrowRight, Languages, Moon, Sun } from 'lucide-react';

import { Button } from '@/cakeand/components/Button';
import { IconButton } from '@/cakeand/components/Button/IconButton';
import { Card } from '@/cakeand/components/Card';
import { SimpleCard } from '@/cakeand/components/Card/SimpleCard';

import { useSiteChrome } from '../layout/SiteChromeContext';
import { useSiteTranslation } from '../i18n/useSiteTranslation';
import { useHeroCollapse } from '../hooks/useHeroCollapse';
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

const HERO_SCROLL_RANGE = '180px';

const heroPadCompact = keyframes`
  from {
    padding-top: 64px;
    padding-bottom: 48px;
  }
  to {
    padding-top: 12px;
    padding-bottom: 12px;
  }
`;

const heroPadCompactSm = keyframes`
  from {
    padding-top: 72px;
    padding-bottom: 56px;
  }
  to {
    padding-top: 12px;
    padding-bottom: 12px;
  }
`;

const heroPadCompactMd = keyframes`
  from {
    padding-top: 80px;
    padding-bottom: 64px;
  }
  to {
    padding-top: 16px;
    padding-bottom: 12px;
  }
`;

const heroWordmarkCompact = keyframes`
  from {
    height: 44px;
  }
  to {
    height: 30px;
  }
`;

const heroWordmarkCompactSm = keyframes`
  from {
    height: 52px;
  }
  to {
    height: 34px;
  }
`;

const heroWordmarkCompactMd = keyframes`
  from {
    height: 5.5rem;
  }
  to {
    height: 2.75rem;
  }
`;

const heroSubtitleCompact = keyframes`
  from {
    opacity: 1;
    max-height: 6rem;
  }
  to {
    opacity: 0;
    max-height: 0;
  }
`;

const heroGradientFade = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.1;
  }
`;

const heroFrostIn = keyframes`
  from {
    opacity: 0;
    -webkit-backdrop-filter: blur(0);
    backdrop-filter: blur(0);
  }
  to {
    opacity: 1;
    -webkit-backdrop-filter: blur(12px) saturate(1.25);
    backdrop-filter: blur(12px) saturate(1.25);
  }
`;

const heroBorderIn = keyframes`
  from {
    border-bottom-color: transparent;
  }
  to {
    border-bottom-color: color-mix(in srgb, var(--color-stroke-border) 70%, transparent);
  }
`;

const scrollTimeline = `
  animation-timeline: scroll(root block);
  animation-range: 0 ${HERO_SCROLL_RANGE};
  animation-timing-function: linear;
  animation-fill-mode: both;
`;

const Hero = styled.header`
  --hero-progress: 0;
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  padding: var(--space-800) var(--space-300) var(--space-600);
  border-bottom: var(--stroke-100) solid transparent;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    background: linear-gradient(
      178deg,
      color-mix(in srgb, var(--color-badge-indigo-light) 15%, transparent) 17%,
      color-mix(in srgb, var(--color-badge-magenta-light) 15%, transparent) 83%
    );

    @supports not (animation-timeline: scroll(root block)) {
      opacity: calc(1 - var(--hero-progress) * 0.85);
    }

    @supports (animation-timeline: scroll(root block)) {
      animation: ${heroGradientFade} linear both;
      ${scrollTimeline}
    }
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    background-color: color-mix(in srgb, var(--color-surfaces-canvas) 78%, transparent);

    @supports not (animation-timeline: scroll(root block)) {
      opacity: calc(var(--hero-progress) * 0.95);
      -webkit-backdrop-filter: blur(calc(12px * var(--hero-progress))) saturate(1.25);
      backdrop-filter: blur(calc(12px * var(--hero-progress))) saturate(1.25);
    }

    @supports (animation-timeline: scroll(root block)) {
      animation: ${heroFrostIn} linear both;
      ${scrollTimeline}
    }
  }

  @supports not (animation-timeline: scroll(root block)) {
    padding-top: calc(64px - var(--hero-progress) * 52px);
    padding-bottom: calc(48px - var(--hero-progress) * 36px);
    border-bottom-color: color-mix(
      in srgb,
      var(--color-stroke-border) calc(var(--hero-progress) * 70%),
      transparent
    );
  }

  @supports (animation-timeline: scroll(root block)) {
    animation-name: ${heroPadCompact}, ${heroBorderIn};
    ${scrollTimeline};
  }

  ${media.sm} {
    padding: var(--space-900) var(--space-400) var(--space-700);

    @supports not (animation-timeline: scroll(root block)) {
      padding-top: calc(72px - var(--hero-progress) * 56px);
      padding-bottom: calc(56px - var(--hero-progress) * 44px);
    }

    @supports (animation-timeline: scroll(root block)) {
      animation-name: ${heroPadCompactSm}, ${heroBorderIn};
    }
  }

  ${media.md} {
    padding: var(--space-1000) var(--space-800) var(--space-900);

    @supports not (animation-timeline: scroll(root block)) {
      padding-top: calc(80px - var(--hero-progress) * 64px);
      padding-bottom: calc(64px - var(--hero-progress) * 52px);
    }

    @supports (animation-timeline: scroll(root block)) {
      animation-name: ${heroPadCompactMd}, ${heroBorderIn};
    }
  }

  ${media.xl} {
    padding-inline: calc(var(--space-1000) + var(--space-800));
  }
`;

const HeroInner = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  grid-template-rows: auto auto;
  grid-template-areas:
    'wordmark tools'
    'subtitle tools';
  column-gap: var(--space-300);
  row-gap: var(--space-300);
  align-items: end;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

const HeroRow = styled.div`
  display: contents;
`;

const HeroWordmark = styled(CakeWordmark)`
  grid-area: wordmark;
  align-self: center;
  height: clamp(2.75rem, 11vw, 5.5rem);
  max-width: 100%;

  @supports not (animation-timeline: scroll(root block)) {
    height: calc(44px - var(--hero-progress) * 14px);
  }

  @supports (animation-timeline: scroll(root block)) {
    animation: ${heroWordmarkCompact} linear both;
    ${scrollTimeline}
  }

  ${media.sm} {
    height: clamp(3.25rem, 10vw, 5.5rem);

    @supports not (animation-timeline: scroll(root block)) {
      height: calc(52px - var(--hero-progress) * 18px);
    }

    @supports (animation-timeline: scroll(root block)) {
      animation-name: ${heroWordmarkCompactSm};
    }
  }

  ${media.md} {
    align-self: end;
    height: 5.5rem;

    @supports not (animation-timeline: scroll(root block)) {
      height: calc(5.5rem - var(--hero-progress) * 2.75rem);
    }

    @supports (animation-timeline: scroll(root block)) {
      animation-name: ${heroWordmarkCompactMd};
    }
  }
`;

const HeroSubtitle = styled.p`
  grid-area: subtitle;
  margin: 0;
  max-width: 40rem;
  overflow: hidden;
  font-size: var(--type-size-subject);
  font-weight: var(--font-weight-regular);
  line-height: 1.35;
  letter-spacing: 0.2px;
  color: var(--color-text-icon-secondary);
  opacity: calc(1 - var(--hero-progress));

  @supports not (animation-timeline: scroll(root block)) {
    max-height: calc((1 - var(--hero-progress)) * 6rem);
  }

  @supports (animation-timeline: scroll(root block)) {
    animation: ${heroSubtitleCompact} linear both;
    ${scrollTimeline}
    opacity: 1;
  }

  ${media.sm} {
    font-size: var(--type-size-subtitle);
  }

  ${media.md} {
    font-size: var(--type-size-page);
  }
`;

const HeroTools = styled.div`
  grid-area: tools;
  grid-row: 1 / span 2;
  align-self: end;
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
  position: relative;
  width: 100%;
  height: 152px;
  flex-shrink: 0;
  overflow: hidden;
  background: var(--color-surfaces-on-container);
`;

const MediaFrame = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`;

const MediaImage = styled.img<{
  $width: string;
  $height: string;
  $left: string;
  $top: string;
}>`
  position: absolute;
  max-width: none;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  left: ${({ $left }) => $left};
  top: ${({ $top }) => $top};
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
    mediaFrame: { width: '105.64%', height: '205.21%', left: '-2.75%', top: '-11.02%' },
    external: false,
  },
  developers: {
    href: STORYBOOK_HOME,
    media: '/home/card-developers.png',
    mediaFrame: { width: '103.54%', height: '208.3%', left: '-1.87%', top: '-16.71%' },
    external: true,
  },
  resources: {
    href: '/resources',
    media: '/home/card-resources.png',
    mediaFrame: { width: '100%', height: '201.17%', left: '-0.01%', top: '-40.37%' },
    external: false,
  },
} as const;

const FOUNDATION_CARD_KEYS = ['accessibility', 'brand', 'modularity'] as const;

const FOUNDATION_CARD_ICONS = {
  accessibility: '/home/icon-accessibility.svg',
  brand: '/home/icon-brand.svg',
  modularity: '/home/icon-modularity.svg',
} as const;

type MediaFrameSpec = (typeof STARTER_CARD_META)[keyof typeof STARTER_CARD_META]['mediaFrame'];

function PromoCardContent({
  title,
  body,
  cta,
  media,
  mediaFrame,
}: {
  title: string;
  body: string;
  cta: string;
  media: string;
  mediaFrame: MediaFrameSpec;
}) {
  return (
    <SimpleCard
      media={
        <MediaStrip>
          <MediaFrame>
            <MediaImage
              src={media}
              alt=""
              $width={mediaFrame.width}
              $height={mediaFrame.height}
              $left={mediaFrame.left}
              $top={mediaFrame.top}
            />
          </MediaFrame>
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
  const heroRef = useHeroCollapse();

  return (
    <Page>
      <Hero ref={heroRef}>
        <HeroInner>
          <HeroWordmark />
          <HeroRow>
            <HeroSubtitle>{t.home.heroSubtitle}</HeroSubtitle>
            <HeroTools>
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
                      mediaFrame={meta.mediaFrame}
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
                      mediaFrame={meta.mediaFrame}
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
