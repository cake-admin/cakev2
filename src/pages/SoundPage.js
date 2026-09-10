import React from 'react';
import styled from 'styled-components';
import { pageGutterX } from '../styles/pageChrome';
import { StickyWallpaper } from './HomePage';

import heroBg from '../assets/home/hero-bg.png';

const ROOKERY = "'Rookery New', Rookery, var(--font-family)";

/**
 * Hero title on the wallpaper. Same ink mapping as Home/Resources:
 * white in light/dark, black in HCT.
 */
const Page = styled.div`
  --page-on-media: #ffffff;

  position: relative;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  font-family: var(--font-family);

  html[data-theme='win hct'] & {
    --page-on-media: #000000;
  }
`;

const Layer = styled.div`
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Hero = styled.section`
  display: flex;
  align-items: flex-end;
  min-height: 200px;
  padding-top: var(--space-200);
  padding-bottom: var(--space-200);
  ${pageGutterX}
  box-sizing: border-box;
`;

const HeroTitle = styled.h1`
  margin: 0;
  font-family: ${ROOKERY};
  font-size: var(--type-size-hero);
  font-weight: var(--font-weight-regular);
  line-height: 1.35;
  letter-spacing: 0.2px;
  color: var(--page-on-media);
`;

const Content = styled.section`
  flex: 1;
  backdrop-filter: blur(45px);
  background: var(--color-surfaces-container-blur-high);
  box-shadow: var(--elevation-5);
  padding-top: var(--space-600);
  padding-bottom: var(--space-600);
  ${pageGutterX}
  display: flex;
  flex-direction: column;
  gap: var(--space-600);
`;

const Intro = styled.div`
  margin: var(--space-200) 0 0;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  gap: var(--space-300);
`;

const IntroText = styled.p`
  margin: 0;
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-regular);
  line-height: 1.35;
  letter-spacing: 0.2px;
  color: var(--color-text-icon-secondary);
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-400);
  max-width: 48rem;
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-family: ${ROOKERY};
  font-size: var(--type-size-page);
  font-weight: var(--font-weight-regular);
  line-height: 1.35;
  letter-spacing: 0.2px;
  color: var(--color-text-icon-primary);
`;

const SectionCopy = styled.p`
  margin: 0;
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-regular);
  line-height: 1.35;
  letter-spacing: 0.2px;
  color: var(--color-text-icon-secondary);
  max-width: 40rem;
`;

const SOUND_INTRO =
  'Guidelines, assets, and documentation for creating consistent sound and audio experiences across Lenovo software.';

const SECTIONS = [
  {
    title: 'Sound Guidelines',
    copy:
      'Placeholder for principles that keep Cake& sound recognizable, accessible, and consistent across products. Volume, timing, and when not to use sound will live here.',
  },
  {
    title: 'Audio Assets',
    copy:
      'Placeholder for the shared library of system sounds, cues, and source files teams can use without inventing new audio for each product.',
  },
  {
    title: 'Usage Patterns',
    copy:
      'Placeholder for common moments — success, error, notification, and focus — and how Cake& sound should support them in software.',
  },
];

const SoundPage = () => (
  <Page>
    <StickyWallpaper aria-hidden>
      <img src={heroBg} alt="" />
    </StickyWallpaper>

    <Layer>
      <Hero>
        <HeroTitle>Cake &amp; Sound</HeroTitle>
      </Hero>

      <Content>
        <Intro>
          <IntroText>{SOUND_INTRO}</IntroText>
        </Intro>

        {SECTIONS.map((section) => (
          <Section key={section.title}>
            <SectionTitle>{section.title}</SectionTitle>
            <SectionCopy>{section.copy}</SectionCopy>
          </Section>
        ))}
      </Content>
    </Layer>
  </Page>
);

export default SoundPage;
