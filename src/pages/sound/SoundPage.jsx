import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../cakeand/components/Button';
import { Card } from '../../cakeand/components/Card';
import { SimpleCard } from '../../cakeand/components/Card/SimpleCard';
import { Table } from '../../cakeand/components/Table/Table';
import {
  VerticalTabs,
  VerticalTabsList,
  VerticalTabsContent,
} from '../../cakeand/components/VerticalTabs/VerticalTabs';
import { VerticalTabItem } from '../../cakeand/components/VerticalTabs/VerticalTabItem';
import { pageGutterX } from '../../styles/pageChrome';
import { StickyWallpaper } from '../HomePage';
import heroBg from '../../assets/home/hero-bg.png';
import SoundLibrary from './SoundLibrary';
import { SoundPlayerProvider } from './SoundPreview';

const ROOKERY = "'Rookery New', Rookery, var(--font-family)";

const Page = styled.div`
  --page-on-media: #ffffff;
  position: relative;
  width: 100%;
  min-height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
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
  width: 100%;
  box-sizing: border-box;
  backdrop-filter: blur(45px);
  background: var(--color-surfaces-container-blur-high);
  box-shadow: var(--elevation-5);
  padding-top: var(--space-600);
  padding-bottom: var(--space-600);
  ${pageGutterX}
  display: flex;
  flex-direction: column;
`;

const Layout = styled(VerticalTabs)`
  display: grid !important;
  grid-template-columns: 220px minmax(0, 1fr);
  align-items: start;
  gap: var(--space-500);
  width: 100%;
  max-width: none;
  flex: 1;
  min-height: 0;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const Rail = styled(VerticalTabsList)`
  grid-column: 1;
  width: 100%;
  max-width: 220px;
  flex-shrink: 0;
  align-self: start;
  position: sticky;
  top: var(--space-400);

  @media (max-width: 720px) {
    max-width: none;
    position: static;
  }
`;

const Panel = styled(VerticalTabsContent)`
  grid-column: 2;
  display: flex;
  flex-direction: column;
  gap: var(--space-600);
  width: 100%;
  max-width: none;
  min-width: 0;

  &[data-state='inactive'],
  &[hidden] {
    display: none;
  }

  @media (max-width: 720px) {
    grid-column: 1;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-600);
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-400);
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-150);
  max-width: 48rem;
`;

const SectionTitle = styled.h2`
  margin: 0;
  color: var(--color-text-icon-primary);
  font-family: ${ROOKERY};
  font-size: var(--type-size-page);
  font-weight: var(--font-weight-regular);
  line-height: 1.25;
`;

const Subhead = styled.h3`
  margin: 0;
  color: var(--color-text-icon-primary);
  font-family: ${ROOKERY};
  font-size: var(--type-size-subtitle);
  line-height: 1.35;
`;

const Lead = styled.p`
  margin: 0;
  max-width: 52rem;
  color: var(--color-text-icon-primary);
  font-family: ${ROOKERY};
  font-size: var(--type-size-title);
  line-height: 1.45;
`;

const Copy = styled.p`
  margin: 0;
  max-width: 48rem;
  color: var(--color-text-icon-secondary);
  font-size: var(--type-size-body);
  line-height: 1.55;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-300);

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

const Tile = styled(Card)`
  height: 100%;
  min-width: 0;
`;

const EditorialTemplate = styled(SimpleCard)`
  height: 100%;
`;

const DurationTable = styled(Table)`
  max-width: 48rem;
`;

/**
 * Two-column guideline rows. The cake& DataRow/HeaderRow parts reserve fixed
 * 48px selection and action rails, which this reference table has no use for —
 * so the rows are local, and Table supplies the surface and grid semantics.
 */
const rowGrid = `
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
  width: 100%;
  box-sizing: border-box;
`;

const TableHeadRow = styled.div`
  ${rowGrid}
  background: var(--color-surfaces-on-container-high);
`;

const TableRow = styled.div`
  ${rowGrid}

  &:not(:last-child) {
    border-bottom: var(--stroke-100) solid var(--color-stroke-border);
  }
`;

const HeadCell = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  min-height: 48px;
  padding: var(--space-100) var(--space-300);
  border-bottom: var(--stroke-100) solid var(--color-stroke-border);
  color: var(--color-text-icon-primary);
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.1px;
  line-height: 1.35;
`;

const Cell = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  min-height: 48px;
  padding: var(--space-100) var(--space-300);
  color: var(--color-text-icon-primary);
  font-size: var(--type-size-body);
  line-height: 1.35;
`;

const SECTIONS = [
  { id: 'overview', label: 'Overview', path: '/sound' },
  { id: 'materials', label: 'Sonic materials', path: '/sound/materials' },
  { id: 'duration', label: 'Duration guidelines', path: '/sound/duration' },
  { id: 'library', label: 'Sound library', path: '/sound/library' },
];

const useCases = [
  ['Confirm', ['Success', 'Completion', 'Connected', 'Enabled']],
  ['Guide', ['Volume up', 'Volume down', 'Brightness up', 'Brightness down']],
  ['Alert', ['Warning', 'Error', 'Critical', 'Low battery']],
  ['State', ['Camera open', 'Camera closed', 'Microphone mute', 'Microphone unmute']],
  ['System', ['Startup', 'Shutdown', 'Charger connected', 'Charger disconnected']],
];

const materials = [
  ['Natural', 'Wood, mallets, felt, rounded percussion, and acoustic resonance.'],
  ['Digital', 'Soft synthesis, rounded electronic tones, tonal pulses, and harmonic layers.'],
  ['Hybrid', 'Natural gesture with digital treatment — the key territory of the Cake& sonic identity.'],
];

const durations = [
  ['Success', '300–400 ms'],
  ['Warning', '~300 ms'],
  ['Error', '~250 ms'],
  ['Control', '100–300 ms'],
  ['Hardware interaction', '150–400 ms'],
  ['Critical', '250–500 ms'],
];

const EditorialCard = ({ title, body }) => (
  <Tile elevation="low">
    <EditorialTemplate title={title} body={body} />
  </Tile>
);

const tabFromPath = (pathname) => {
  const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return SECTIONS.find((section) => section.path === normalized)?.id ?? 'overview';
};

const pathForTab = (value) =>
  SECTIONS.find((section) => section.id === value)?.path ?? '/sound';

const SoundPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const activeTab = tabFromPath(pathname);

  return (
    <SoundPlayerProvider>
      <Page>
        <StickyWallpaper aria-hidden>
          <img src={heroBg} alt="" />
        </StickyWallpaper>
        <Layer>
          <Hero>
            <HeroTitle>Sound</HeroTitle>
          </Hero>

          <Content>
            <Layout
              value={activeTab}
              onValueChange={(value) => navigate(pathForTab(value))}
            >
              <Rail aria-label="Sound sections">
                {SECTIONS.map((section) => (
                  <VerticalTabItem key={section.id} value={section.id}>
                    {section.label}
                  </VerticalTabItem>
                ))}
              </Rail>

              <Panel value="overview">
                <Section>
                    <Block>
                      <SectionHeader>
                        <SectionTitle>Overview</SectionTitle>
                        <Lead>
                          Sound is another layer of the interface. It carries the
                          principles, characteristics, and behaviors that make software
                          sound unmistakably part of the Cake&amp; experience.
                        </Lead>
                        <Copy>
                          This vocabulary helps teams select and evaluate sound with the
                          same care used for color, typography, material, and motion.
                          Sound reinforces information; it never replaces the visual or
                          textual experience.
                        </Copy>
                      </SectionHeader>
                      <div>
                        <Button
                          intent="primary"
                          variant="fill"
                          size="md"
                          onClick={() => navigate('/sound/library')}
                        >
                          Explore the sound library
                        </Button>
                      </div>
                    </Block>

                    <Block>
                      <SectionHeader>
                        <Subhead>When to use sound</Subhead>
                        <Copy>
                          Organize sound by what the user needs to understand or do.
                        </Copy>
                      </SectionHeader>
                      <Grid>
                        {useCases.map(([title, items]) => (
                          <EditorialCard
                            key={title}
                            title={title}
                            body={items.join(' · ')}
                          />
                        ))}
                      </Grid>
                      <EditorialCard
                        title="When not to use sound"
                        body="Introduce sound only when it adds meaningful information. Do not add a cue simply to decorate a transition, repeat obvious visual feedback, or fill silence. Frequent actions should remain quiet unless sound materially improves awareness or confidence."
                      />
                    </Block>
                </Section>
              </Panel>

              <Panel value="materials">
                <Section>
                    <Block>
                      <SectionHeader>
                        <SectionTitle>Sonic materials</SectionTitle>
                        <Copy>
                          Cake&amp; lives in the hybrid territory between tactile natural
                          gestures and precise digital treatment.
                        </Copy>
                      </SectionHeader>
                      <Grid>
                        {materials.map(([title, description]) => (
                          <EditorialCard key={title} title={title} body={description} />
                        ))}
                      </Grid>
                    </Block>
                </Section>
              </Panel>

              <Panel value="duration">
                <Section>
                    <Block>
                      <SectionHeader>
                        <SectionTitle>Duration guidelines</SectionTitle>
                        <Copy>
                          Guideline duration is a target, not a claim about the library.
                          Every profile in the sound library displays the measured
                          duration of its actual audio file.
                        </Copy>
                      </SectionHeader>
                      <DurationTable
                        aria-label="Target duration by sound type"
                        header={
                          <TableHeadRow role="row">
                            <HeadCell role="columnheader">Sound type</HeadCell>
                            <HeadCell role="columnheader">Target</HeadCell>
                          </TableHeadRow>
                        }
                      >
                        {durations.map(([type, target]) => (
                          <TableRow key={type} role="row">
                            <Cell role="cell">{type}</Cell>
                            <Cell role="cell">{target}</Cell>
                          </TableRow>
                        ))}
                      </DurationTable>
                    </Block>
                </Section>
              </Panel>

              <Panel value="library">
                <Section>
                    <Block>
                      <SectionHeader>
                        <SectionTitle>Cake&amp; sound library</SectionTitle>
                        <Copy>
                          Search the official library, filter by type, compare variants,
                          and play each asset. Waveforms are static visualizations
                          generated from the real audio data.
                        </Copy>
                      </SectionHeader>
                      <SoundLibrary />
                    </Block>
                </Section>
              </Panel>
            </Layout>
          </Content>
        </Layer>
      </Page>
    </SoundPlayerProvider>
  );
};

export default SoundPage;
