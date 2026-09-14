import React, { useState } from 'react';
import styled from 'styled-components';
import { Check, ExternalLink, X } from 'lucide-react';
import { Button } from '../../cakeand/components/Button';
import { Badge } from '../../cakeand/components/Badge/Badge';
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

/** Caps the reading measure on ultra-wide displays without affecting mobile. */
const Measure = styled.div`
  width: 100%;
  max-width: 90rem;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
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
  /* Stay in the content column of Layout's 2-col grid (rail is col 1). */
  grid-column: 2;
  display: flex;
  flex-direction: column;
  gap: var(--space-600);
  width: 100%;
  max-width: none;
  min-width: 0;

  /*
   * styled-components' display: flex overrides the UA [hidden] rule, so
   * inactive Radix panels would still participate in the grid and auto-place
   * into the rail column. Force them out of flow.
   */
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

const ChoiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-300);

  @media (max-width: 680px) {
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

const Close = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) repeat(2, minmax(0, 1fr));
  gap: var(--space-500);
  padding: var(--space-600);
  border-radius: var(--radius-400);
  background: var(--color-primary-primary);
  color: var(--color-text-icon-on-primary);

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const CloseTitle = styled.h2`
  margin: 0;
  color: inherit;
  font-family: ${ROOKERY};
  font-size: var(--type-size-page);
  font-weight: var(--font-weight-regular);
`;

const CloseGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-150);

  h3,
  p {
    margin: 0;
    color: inherit;
  }
`;

const SourceNote = styled(Copy)`
  a {
    color: var(--color-primary-primary);
  }
`;

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'materials', label: 'Sonic materials' },
  { id: 'duration', label: 'Duration guidelines' },
  { id: 'library', label: 'Sound library' },
  { id: 'guidance', label: 'Designer guidance' },
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

const checklist = [
  ['Purpose', 'What information does the sound communicate?'],
  ['Necessity', 'Does sound add meaningful value?'],
  ['Identity', 'Does it sound like Cake&?'],
  ['Relationship', 'Does it belong to an existing family?'],
  ['Duration', 'Could it be shorter?'],
  ['Hierarchy', 'Is the attention level appropriate?'],
  ['Accessibility', 'Does the experience still work without sound?'],
  ['Frequency', 'Will repeated exposure become annoying?'],
  ['Choreography', 'What happens when multiple sounds occur together?'],
];

const EditorialCard = ({ title, body, menu }) => (
  <Tile elevation="low">
    <EditorialTemplate title={title} body={body} menu={menu} />
  </Tile>
);

const SoundPage = () => {
  const [tab, setTab] = useState('overview');

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
            <Measure>
              <Layout value={tab} onValueChange={setTab}>
                <Rail aria-label="Sound sections">
                  {TABS.map((item) => (
                    <VerticalTabItem key={item.id} value={item.id}>
                      {item.label}
                    </VerticalTabItem>
                  ))}
                </Rail>

                <Panel value="overview">
                  <Section>
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
                        onClick={() => setTab('library')}
                      >
                        Explore the sound library
                      </Button>
                    </div>
                  </Section>

                  <Section>
                    <SectionHeader>
                      <SectionTitle>When to use sound</SectionTitle>
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
                  </Section>
                </Panel>

                <Panel value="materials">
                  <Section>
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
                  </Section>
                </Panel>

                <Panel value="duration">
                  <Section>
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
                  </Section>
                </Panel>

                <Panel value="library">
                  <Section>
                    <SectionHeader>
                      <SectionTitle>Cake&amp; sound library</SectionTitle>
                      <Copy>
                        Search the official library, filter by type, compare variants,
                        and play each asset. Waveforms are static visualizations
                        generated from the real audio data.
                      </Copy>
                    </SectionHeader>
                    <SoundLibrary />
                  </Section>
                </Panel>

                <Panel value="guidance">
                  <Section>
                    <SectionHeader>
                      <SectionTitle>Do / Don’t</SectionTitle>
                    </SectionHeader>
                    <ChoiceGrid>
                      <EditorialCard
                        title="Recommended sound"
                        menu={
                          <Badge color="primary" tone="subtle" dot={false}>
                            <Check size={14} aria-hidden /> Do
                          </Badge>
                        }
                        body="Short · Warm · Controlled · Purposeful · Tactile · Connected · Recognizable"
                      />
                      <EditorialCard
                        title="Sound to avoid"
                        menu={
                          <Badge color="destructive" tone="subtle" dot={false}>
                            <X size={14} aria-hidden /> Don’t
                          </Badge>
                        }
                        body="Harsh · Long · Generic · Overly dramatic · Robotic · Sci-fi cliché · Repetitive"
                      />
                    </ChoiceGrid>
                  </Section>

                  <Section>
                    <SectionHeader>
                      <SectionTitle>Designer checklist</SectionTitle>
                      <Copy>
                        Ask these questions before introducing or approving a sound.
                      </Copy>
                    </SectionHeader>
                    <Grid>
                      {checklist.map(([title, question]) => (
                        <EditorialCard key={title} title={title} body={question} />
                      ))}
                    </Grid>
                  </Section>

                  <Close>
                    <CloseTitle>One design language. Multiple senses.</CloseTitle>
                    <CloseGroup>
                      <Subhead>Visual</Subhead>
                      <p>Color · Typography · Material · Motion</p>
                    </CloseGroup>
                    <CloseGroup>
                      <Subhead>Sonic</Subhead>
                      <p>Pitch · Timbre · Rhythm · Dynamics</p>
                    </CloseGroup>
                  </Close>

                  <SourceNote>
                    Sound is another expression of the Ampersand design system.{' '}
                    <a
                      href="https://github.com/cake-admin/cake-sound-library"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View source assets <ExternalLink size={14} aria-hidden />
                    </a>
                  </SourceNote>
                </Panel>
              </Layout>
            </Measure>
          </Content>
        </Layer>
      </Page>
    </SoundPlayerProvider>
  );
};

export default SoundPage;
