import React from 'react';
import styled from 'styled-components';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from '../cakeand/components/Card';
import { Button } from '../cakeand/components/Button';
import { Badge } from '../cakeand/components/Badge';
import { STORYBOOK_PATH } from '../data/nav';
import { pageGutterX } from '../styles/pageChrome';
import { StickyWallpaper } from './HomePage';

import heroBg from '../assets/home/hero-bg.png';
import figmaTile from '../assets/resources/figma-tile.png';
import storybookTile from '../assets/resources/storybook-tile.png';
import datavizIcon from '../assets/resources/dataviz-icon.svg';

/**
 * Hero title on the wallpaper. `--color-text-icon-inverse` flips wrong in
 * dark.a, so Resources owns the same mapping as Home: white in light/dark,
 * black in HCT.
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
  font-family: 'Rookery New', Rookery, var(--font-family);
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
  gap: var(--space-500);
`;

const IntroBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-300);
`;

const IntroHeading = styled.h2`
  margin: 0;
  font-family: 'Rookery New', Rookery, var(--font-family);
  font-size: var(--type-size-subtitle);
  font-weight: var(--font-weight-bold);
  line-height: 1.35;
  color: var(--color-text-icon-primary);
`;

const IntroText = styled.p`
  margin: 0;
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-regular);
  line-height: 1.35;
  letter-spacing: 0.2px;
  color: var(--color-text-icon-secondary);
`;

const FeatureList = styled.ul`
  margin: 0;
  padding-left: var(--space-400);
  color: var(--color-text-icon-secondary);
  font-size: var(--type-size-body);
  line-height: 1.5;
  letter-spacing: 0.2px;

  li {
    margin-bottom: var(--space-150);

    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    color: var(--color-text-icon-primary);
    font-weight: var(--font-weight-medium);
  }
`;

/**
 * Flex card row: 4 cols when wide, 3 at medium, then 2 / 1 as the
 * viewport narrows. Gap uses spacing tokens; cards share space evenly
 * without orphans stretching full-bleed.
 */
const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-500);
  align-items: stretch;

  & > * {
    box-sizing: border-box;
    flex: 1 1 100%;
    min-width: 0;
    max-width: 100%;
  }

  @media (min-width: 640px) {
    & > * {
      flex: 1 1 calc((100% - var(--space-500)) / 2);
      max-width: calc((100% - var(--space-500)) / 2);
    }
  }

  @media (min-width: 960px) {
    & > * {
      flex: 1 1 calc((100% - 2 * var(--space-500)) / 3);
      max-width: calc((100% - 2 * var(--space-500)) / 3);
    }
  }

  @media (min-width: 1280px) {
    & > * {
      flex: 1 1 calc((100% - 3 * var(--space-500)) / 4);
      max-width: calc((100% - 3 * var(--space-500)) / 4);
    }
  }
`;

/**
 * Figma `gradient/ui/*` fills — fixed palette stops (indigo/30→violet/60, etc.).
 * Not theme semantic tokens: these ramps stay constant across light/dark/HCT.
 */
const MEDIA_GRADIENTS = {
  figma:
    'linear-gradient(12.3deg, #2034b7 0%, #a078ff 100%)',
  storybook:
    'linear-gradient(12.3deg, #840075 0%, #fb565c 100%)',
  dataviz:
    'linear-gradient(12.3deg, #541cb8 0%, #e758cc 100%)',
  'ai-labs':
    'linear-gradient(12.3deg, #91061c 0%, #fb911c 100%)',
};

const MediaBand = styled.div`
  display: flex;
  align-items: center;
  height: 96px;
  padding: var(--space-500);
  box-sizing: border-box;
  background: ${(p) => p.$gradient};
`;

const IconTile = styled.div`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: var(--radius-200);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const ChartIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 42px;
    height: 42px;
    display: block;
  }
`;

const GithubTile = styled.div`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: var(--radius-200);
  background: #ffffff;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 28px;
    height: 28px;
    display: block;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-500);
  padding: var(--space-500);
  flex: 1;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-300);
  flex: 1;
`;

const TitleStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-100);
  align-items: flex-start;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-family: 'Rookery New', Rookery, var(--font-family);
  font-size: var(--type-size-subtitle);
  font-weight: var(--font-weight-bold);
  line-height: 1.35;
  color: var(--color-text-icon-primary);
`;

const CardSubtitle = styled.p`
  margin: 0;
  font-size: var(--type-size-subject);
  font-weight: var(--font-weight-medium);
  line-height: 1.35;
  letter-spacing: 0.2px;
  color: var(--color-text-icon-primary);
`;

const CardBody = styled.p`
  margin: 0;
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-regular);
  letter-spacing: 0.2px;
  line-height: 1.35;
  color: var(--color-text-icon-secondary);
`;

const AccessNote = styled.p`
  margin: 0;
  font-size: var(--type-size-caption);
  font-weight: var(--font-weight-regular);
  letter-spacing: 0.2px;
  line-height: 1.35;
  color: var(--color-text-icon-secondary);
`;

const RESOURCES = [
  {
    id: 'figma',
    title: 'Cake& Figma file',
    subtitle: 'The single source of truth for designers.',
    body:
      'Browse every Cake& component, pattern, and style in our public community library, always up to date with the latest releases.',
    action: 'Open in Figma',
    href: 'https://www.figma.com/community/file/1397963315281891204/cake-one-lenovo-design-system',
    icon: figmaTile,
    iconKind: 'tile',
  },
  {
    id: 'storybook',
    title: 'Cake& Storybook',
    subtitle: 'The single source of truth for developers.',
    body:
      'Explore interactive React components built on Radix, complete with documentation, states, and implementation guidance.',
    action: 'Open Storybook',
    href: STORYBOOK_PATH,
    icon: storybookTile,
    iconKind: 'tile',
  },
  {
    id: 'dataviz',
    title: 'Cake& data visualization tool',
    subtitle: 'Design once. Build consistently.',
    body:
      'Copy editable SVG charts into Figma or generate themed ECharts code for production-ready data visualizations.',
    action: 'Try the tool',
    href: 'https://cake.lenovo.com/datavis',
    icon: datavizIcon,
    iconKind: 'chart',
  },
  {
    id: 'ai-labs',
    title: 'Cake& AI Labs',
    subtitle: 'Prototype with Cake& AI workflows.',
    body:
      'Access our AI-powered starter project with Cake-specific design skills, Storybook context, and custom rules for faster prototyping and higher-quality output.',
    accessNote:
      'Available to Lenovo employees. Contact the Cake& team to request access.',
    action: 'View on GitHub',
    href: 'https://github.com/cake-admin/ai-lab',
    iconKind: 'github',
    restricted: true,
  },
];

const openExternal = (href) => {
  window.open(href, '_blank', 'noopener,noreferrer');
};

const StretchCard = styled(Card)`
  height: 100%;
`;

const ResourceCard = ({ resource }) => (
  <StretchCard elevation="low">
    <MediaBand $gradient={MEDIA_GRADIENTS[resource.id]}>
      {resource.iconKind === 'github' ? (
        <GithubTile aria-hidden>
          <Github />
        </GithubTile>
      ) : resource.iconKind === 'chart' ? (
        <ChartIcon>
          <img src={resource.icon} alt="" />
        </ChartIcon>
      ) : (
        <IconTile>
          <img src={resource.icon} alt="" />
        </IconTile>
      )}
    </MediaBand>
    <Body>
      <TextBlock>
        <TitleStack>
          {resource.restricted ? (
            <Badge color="red" tone="solid" dot={false}>
              Restricted access
            </Badge>
          ) : null}
          <CardTitle>{resource.title}</CardTitle>
        </TitleStack>
        <CardSubtitle>{resource.subtitle}</CardSubtitle>
        <CardBody>{resource.body}</CardBody>
        {resource.accessNote ? (
          <AccessNote>{resource.accessNote}</AccessNote>
        ) : null}
      </TextBlock>
      <div>
        <Button
          intent="secondary"
          variant="outline"
          size="md"
          endIcon={<ExternalLink size={16} aria-hidden />}
          onClick={() => openExternal(resource.href)}
        >
          {resource.action}
        </Button>
      </div>
    </Body>
  </StretchCard>
);

const Resources = () => (
  <Page>
    <StickyWallpaper aria-hidden>
      <img src={heroBg} alt="" />
    </StickyWallpaper>

    <Layer>
      <Hero>
        <HeroTitle>Resources</HeroTitle>
      </Hero>

      <Content>
        <Intro>
          <IntroBlock>
            <IntroText>
              Cake&amp; is One Lenovo&apos;s unified design system that helps teams
              build consistent, high-quality experiences across all Lenovo digital
              products. It provides a comprehensive set of tools, components, and
              guidelines to create cohesive, user-centered experiences efficiently
              while maintaining Lenovo&apos;s brand identity and quality standards.
            </IntroText>
          </IntroBlock>

          <IntroBlock>
            <IntroHeading>Key features</IntroHeading>
            <FeatureList>
              <li>
                <strong>Unified components:</strong> A comprehensive library of
                reusable UI components that maintain consistency across all Lenovo
                products.
              </li>
              <li>
                <strong>Design tokens:</strong> Standardized design variables for
                colors, typography, spacing, and other foundational elements.
              </li>
              <li>
                <strong>Accessibility:</strong> Built-in accessibility features
                ensuring all components meet WCAG guidelines.
              </li>
              <li>
                <strong>Documentation:</strong> Detailed guidelines and best
                practices for implementing the design system effectively.
              </li>
            </FeatureList>
          </IntroBlock>

          <IntroBlock>
            <IntroHeading>Who it&apos;s for</IntroHeading>
            <FeatureList>
              <li>
                <strong>Designers:</strong> Create consistent designs using our
                Figma libraries and guidelines.
              </li>
              <li>
                <strong>Developers:</strong> Build robust applications using our
                React component library and documentation.
              </li>
              <li>
                <strong>Product managers:</strong> Ensure product consistency and
                quality across the Lenovo ecosystem.
              </li>
              <li>
                <strong>Content strategists:</strong> Maintain consistent voice and
                tone using our content guidelines.
              </li>
            </FeatureList>
          </IntroBlock>
        </Intro>

        <Grid>
          {RESOURCES.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </Grid>
      </Content>
    </Layer>
  </Page>
);

export default Resources;
