import React from 'react';
import styled from 'styled-components';
import { ArrowDown, ArrowUp, Check, ExternalLink, X } from 'lucide-react';
import { Button } from '../../cakeand/components/Button';
import { Card } from '../../cakeand/components/Card';
import { pageGutterX } from '../../styles/pageChrome';
import { StickyWallpaper } from '../HomePage';
import heroBg from '../../assets/home/hero-bg.png';
import { getSoundById } from '../../data/sound-catalog';
import SoundLibrary from './SoundLibrary';
import SoundPreview, { SoundPlayerProvider } from './SoundPreview';

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

const Hero = styled.header`
  display: flex;
  align-items: flex-end;
  min-height: 240px;
  padding-top: var(--space-500);
  padding-bottom: var(--space-500);
  ${pageGutterX}
  box-sizing: border-box;
`;

const HeroInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-100);
`;

const Eyebrow = styled.p`
  margin: 0;
  color: var(--page-on-media);
  font-size: var(--type-size-caption);
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.16em;
  text-transform: uppercase;
`;

const HeroTitle = styled.h1`
  margin: 0;
  color: var(--page-on-media);
  font-family: ${ROOKERY};
  font-size: var(--type-size-hero);
  font-weight: var(--font-weight-regular);
  line-height: 1.15;
`;

const HeroSubtitle = styled.p`
  margin: 0;
  color: var(--page-on-media);
  font-family: ${ROOKERY};
  font-size: var(--type-size-page);
  line-height: 1.35;
`;

const Content = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-800);
  padding-top: var(--space-600);
  padding-bottom: var(--space-800);
  ${pageGutterX}
  box-sizing: border-box;
  backdrop-filter: blur(45px);
  background: var(--color-surfaces-container-blur-high);
  box-shadow: var(--elevation-5);
`;

const IntroLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(12rem, 16rem) minmax(0, 1fr);
  align-items: start;
  gap: var(--space-600);

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const Toc = styled.nav`
  position: sticky;
  top: 96px;
  display: flex;
  flex-direction: column;
  gap: var(--space-050);
  padding: var(--space-300);
  border: var(--stroke-100) solid var(--color-stroke-border);
  border-radius: var(--radius-300);
  background: var(--color-surfaces-container);

  @media (max-width: 800px) {
    position: static;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const TocLabel = styled.span`
  margin-bottom: var(--space-100);
  color: var(--color-text-icon-primary);
  font-size: var(--type-size-caption);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: 0.08em;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const TocLink = styled.a`
  padding: var(--space-100) var(--space-150);
  border-radius: var(--radius-200);
  color: var(--color-text-icon-secondary);
  font-size: var(--type-size-body);
  text-decoration: none;

  &:hover {
    background: var(--color-tonal-tonal-secondary-overlay-hover);
    color: var(--color-text-icon-primary);
    text-decoration: none;
  }

  &:focus-visible {
    outline: var(--stroke-300) solid var(--color-primary-primary);
    outline-offset: var(--space-025);
  }
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-400);
  max-width: 52rem;
`;

const Lead = styled.p`
  margin: 0;
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

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-400);
  scroll-margin-top: 96px;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$columns || 3}, minmax(0, 1fr));
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

const TileInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-200);
  height: 100%;
  padding: var(--space-400);
  box-sizing: border-box;
`;

const TileTitle = styled.h3`
  margin: 0;
  color: var(--color-text-icon-primary);
  font-family: ${ROOKERY};
  font-size: var(--type-size-subtitle);
  font-weight: var(--font-weight-bold);
  line-height: 1.35;
`;

const TileCopy = styled.p`
  margin: 0;
  color: var(--color-text-icon-secondary);
  font-size: var(--type-size-body);
  line-height: 1.5;
`;

const Spectrum = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-300);
  max-width: 48rem;
`;

const SpectrumRow = styled.div`
  display: grid;
  grid-template-columns: 6rem minmax(8rem, 1fr) 6rem;
  align-items: center;
  gap: var(--space-200);
  font-size: var(--type-size-body);
  color: var(--color-text-icon-secondary);

  span:last-child {
    text-align: right;
  }
`;

const SpectrumTrack = styled.div`
  position: relative;
  height: var(--space-100);
  border-radius: var(--radius-1000);
  background: var(--color-tonal-tonal-secondary-overlay);

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: ${(props) => props.$position}%;
    width: var(--space-200);
    height: var(--space-200);
    border-radius: var(--radius-1000);
    background: var(--color-primary-primary);
    transform: translate(-50%, -50%);
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--space-100);
  margin: 0;
  padding-left: var(--space-400);
  color: var(--color-text-icon-secondary);
  font-size: var(--type-size-body);
  line-height: 1.45;
`;

const Example = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-200);
  padding-top: var(--space-200);
  border-top: var(--stroke-100) solid var(--color-stroke-border);
`;

const ExampleLabel = styled.p`
  margin: 0;
  color: var(--color-text-icon-primary);
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-medium);
`;

const Pair = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-300);

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const GrammarCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-300);
  padding: var(--space-400);
  border: var(--stroke-100) solid var(--color-stroke-border);
  border-radius: var(--radius-300);
  background: var(--color-surfaces-container);
`;

const Direction = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-200);
  color: var(--color-primary-primary);
`;

const TableWrap = styled.div`
  max-width: 48rem;
  overflow-x: auto;
  border: var(--stroke-100) solid var(--color-stroke-border);
  border-radius: var(--radius-300);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: var(--color-text-icon-primary);
  font-size: var(--type-size-body);

  th,
  td {
    padding: var(--space-200) var(--space-300);
    border-bottom: var(--stroke-100) solid var(--color-stroke-border);
    text-align: left;
  }

  th {
    background: var(--color-tonal-tonal-secondary-overlay);
    font-weight: var(--font-weight-bold);
  }

  tr:last-child td {
    border-bottom: none;
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

const ChoiceTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: var(--space-150);
  margin: 0;
  color: var(--color-text-icon-primary);
  font-family: ${ROOKERY};
  font-size: var(--type-size-title);
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

const principles = [
  ['Warm', 'Rounded attacks, subtle harmonics, and controlled resonance.'],
  ['Precise', 'Clear communication with minimal unnecessary complexity.'],
  ['Intelligent', 'Expressive tonal relationships without generic AI or sci-fi clichés.'],
  ['Tactile', 'Digital interactions with a sense of physicality.'],
  ['Restrained', 'Sound supports the interface without demanding attention.'],
  ['Connected', 'Every sound belongs to a larger sonic language.'],
];

const character = [
  ['Warm', 'Sterile', 64],
  ['Organic', 'Synthetic', 42],
  ['Soft', 'Aggressive', 35],
  ['Simple', 'Complex', 28],
  ['Subtle', 'Dramatic', 40],
  ['Human', 'Machine', 58],
];

const useCases = [
  ['Confirm', ['Success', 'Completion', 'Connected', 'Enabled']],
  ['Guide', ['Volume up', 'Volume down', 'Brightness up', 'Brightness down']],
  ['Alert', ['Warning', 'Error', 'Critical', 'Low battery']],
  ['State', ['Camera open', 'Camera closed', 'Microphone mute', 'Microphone unmute']],
  ['System', ['Startup', 'Shutdown', 'Charger connected', 'Charger disconnected']],
];

const attributes = [
  ['Duration', 'The total time a cue occupies. Shorter sounds generally support repeated interaction.'],
  ['Attack', 'How quickly the sound begins and whether the opening feels soft, rounded, or immediate.'],
  ['Pitch', 'Tonal height and movement. Direction can communicate increase, decrease, opening, or closing.'],
  ['Timbre', 'The material quality that makes a cue feel natural, digital, or hybrid.'],
  ['Decay', 'How the sound resolves after its peak. Cake& decays should feel controlled.'],
  ['Resonance', 'The sense of body and space around a tone, used carefully to create warmth.'],
  ['Dynamics', 'The relationship between quiet and loud moments within the cue.'],
];

const materials = [
  ['Natural', 'Wood, mallets, felt, rounded percussion, and acoustic resonance.'],
  ['Digital', 'Soft synthesis, rounded electronic tones, tonal pulses, and harmonic layers.'],
  ['Hybrid', 'Natural gesture with digital treatment — the key territory of the Cake& sonic identity.'],
];

const familyExamples = [
  ['Feedback', 'confirm-up'],
  ['Attention', 'simple-alert'],
  ['Navigation', 'nav-forward'],
  ['System', 'boot-join'],
  ['Device', 'camera-shutter'],
  ['Notification', 'simple-notify-a'],
  ['Expression', 'celebration-soft'],
];

const hierarchy = [
  ['Ambient', 'Minimal presence.', 'ambient-presence'],
  ['Informational', 'Clearly audible but unobtrusive.', 'simple-notify-a'],
  ['Attention', 'Designed to interrupt competing information.', 'urgent-notify'],
  ['Critical', 'Reserved for genuinely important events.', 'gentle-alarm'],
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

const tocItems = [
  ['introduction', 'Introduction'],
  ['principles', 'Principles'],
  ['character', 'Character'],
  ['use', 'When to use'],
  ['attributes', 'Attributes'],
  ['materials', 'Materials'],
  ['families', 'Families'],
  ['grammar', 'Grammar'],
  ['hierarchy', 'Hierarchy'],
  ['choreography', 'Choreography'],
  ['duration', 'Duration'],
  ['library', 'Sound library'],
  ['checklist', 'Designer checklist'],
];

const IntroSection = () => (
  <IntroLayout>
    <Toc aria-label="Sound DNA sections">
      <TocLabel>On this page</TocLabel>
      {tocItems.map(([id, label]) => (
        <TocLink key={id} href={`#${id}`}>
          {label}
        </TocLink>
      ))}
    </Toc>
    <Intro id="introduction">
      <Lead>
        Sound is another layer of the interface. Cake&amp; Sound DNA defines the
        principles, characteristics, relationships, and behaviors that make software
        sound unmistakably part of the Cake&amp; experience.
      </Lead>
      <Copy>
        This vocabulary helps teams select, evaluate, and choreograph sound with the
        same care used for color, typography, material, and motion. Sound reinforces
        information; it never replaces the visual or textual experience.
      </Copy>
      <div>
        <Button
          intent="primary"
          variant="fill"
          size="md"
          endIcon={<ArrowDown aria-hidden />}
          onClick={() => {
            const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            document.getElementById('library')?.scrollIntoView({
              behavior: reduceMotion ? 'auto' : 'smooth',
            });
          }}
        >
          Explore the Sound Library
        </Button>
      </div>
    </Intro>
  </IntroLayout>
);

const SoundPage = () => {
  const confirmUp = getSoundById('confirm-up');
  const confirmDown = getSoundById('confirm-down');

  return (
    <SoundPlayerProvider>
      <Page>
        <StickyWallpaper aria-hidden>
          <img src={heroBg} alt="" />
        </StickyWallpaper>
        <Layer>
          <Hero>
            <HeroInner>
              <Eyebrow>Cake&amp; sonic design system</Eyebrow>
              <HeroTitle>SOUND DNA</HeroTitle>
              <HeroSubtitle>A sonic language for Lenovo software.</HeroSubtitle>
            </HeroInner>
          </Hero>

          <Content>
            <IntroSection />

            <Section id="principles">
              <SectionHeader>
                <SectionTitle>Sonic Principles</SectionTitle>
                <Copy>Six principles establish the Cake&amp; sonic personality.</Copy>
              </SectionHeader>
              <Grid>
                {principles.map(([title, description]) => (
                  <Tile key={title}>
                    <TileInner>
                      <TileTitle>{title}</TileTitle>
                      <TileCopy>{description}</TileCopy>
                    </TileInner>
                  </Tile>
                ))}
              </Grid>
            </Section>

            <Section id="character">
              <SectionHeader>
                <SectionTitle>Sonic Character</SectionTitle>
                <Copy>
                  These spectrums are a shared design vocabulary, not scientific
                  measurements. Use them to discuss whether a sound belongs.
                </Copy>
              </SectionHeader>
              <Spectrum>
                {character.map(([start, end, position]) => (
                  <SpectrumRow key={start}>
                    <span>{start}</span>
                    <SpectrumTrack $position={position} aria-hidden />
                    <span>{end}</span>
                  </SpectrumRow>
                ))}
              </Spectrum>
            </Section>

            <Section id="use">
              <SectionHeader>
                <SectionTitle>When to Use Sound</SectionTitle>
                <Copy>Organize sound by what the user needs to understand or do.</Copy>
              </SectionHeader>
              <Grid>
                {useCases.map(([title, items]) => (
                  <Tile key={title}>
                    <TileInner>
                      <TileTitle>{title}</TileTitle>
                      <List>
                        {items.map((item) => <li key={item}>{item}</li>)}
                      </List>
                    </TileInner>
                  </Tile>
                ))}
              </Grid>
              <Tile>
                <TileInner>
                  <TileTitle>When Not to Use Sound</TileTitle>
                  <TileCopy>
                    Introduce sound only when it adds meaningful information. Do not
                    add a cue simply to decorate a transition, repeat obvious visual
                    feedback, or fill silence. Frequent actions should remain quiet
                    unless sound materially improves awareness or confidence.
                  </TileCopy>
                </TileInner>
              </Tile>
            </Section>

            <Section id="attributes">
              <SectionHeader>
                <SectionTitle>Sound Attributes</SectionTitle>
                <Copy>Evaluate each cue as a composition of related attributes.</Copy>
              </SectionHeader>
              <Grid>
                {attributes.map(([title, description]) => (
                  <Tile key={title}>
                    <TileInner>
                      <TileTitle>{title}</TileTitle>
                      <TileCopy>{description}</TileCopy>
                    </TileInner>
                  </Tile>
                ))}
              </Grid>
            </Section>

            <Section id="materials">
              <SectionHeader>
                <SectionTitle>Sonic Materials</SectionTitle>
                <Copy>
                  Cake&amp; lives in the hybrid territory between tactile natural
                  gestures and precise digital treatment.
                </Copy>
              </SectionHeader>
              <Grid>
                {materials.map(([title, description]) => (
                  <Tile key={title}>
                    <TileInner>
                      <TileTitle>{title}</TileTitle>
                      <TileCopy>{description}</TileCopy>
                    </TileInner>
                  </Tile>
                ))}
              </Grid>
            </Section>

            <Section id="families">
              <SectionHeader>
                <SectionTitle>Sound Families</SectionTitle>
                <Copy>
                  Families create recognizable relationships across actual Cake&amp;
                  assets. Listen for shared material, energy, and purpose.
                </Copy>
              </SectionHeader>
              <Grid>
                {familyExamples.map(([label, id]) => {
                  const sound = getSoundById(id);
                  return (
                    <Tile key={label}>
                      <TileInner>
                        <TileTitle>{label}</TileTitle>
                        <TileCopy>{sound.description}</TileCopy>
                        <Example>
                          <ExampleLabel>{sound.name}</ExampleLabel>
                          <SoundPreview sound={sound} />
                        </Example>
                      </TileInner>
                    </Tile>
                  );
                })}
              </Grid>
            </Section>

            <Section id="grammar">
              <SectionHeader>
                <SectionTitle>Sonic Grammar</SectionTitle>
                <Lead>Sounds should be designed as a language, not as isolated effects.</Lead>
                <Copy>
                  Related sounds share timbre, duration, energy, pitch language, and
                  attack characteristics. Direction provides a consistent semantic cue.
                </Copy>
              </SectionHeader>
              <Pair>
                <GrammarCard>
                  <Direction><ArrowUp aria-hidden /><Subhead>Up</Subhead></Direction>
                  <TileCopy>Ascending movement: increase, open, activate, progress.</TileCopy>
                  <SoundPreview sound={confirmUp} />
                </GrammarCard>
                <GrammarCard>
                  <Direction><ArrowDown aria-hidden /><Subhead>Down</Subhead></Direction>
                  <TileCopy>Descending movement: decrease, close, reduce, deactivate.</TileCopy>
                  <SoundPreview sound={confirmDown} />
                </GrammarCard>
              </Pair>
            </Section>

            <Section id="hierarchy">
              <SectionHeader>
                <SectionTitle>Sonic Hierarchy</SectionTitle>
                <Copy>
                  Match energy to importance. Critical sound is a scarce resource, not
                  a louder default.
                </Copy>
              </SectionHeader>
              <Grid $columns={4}>
                {hierarchy.map(([title, description, id]) => {
                  const sound = getSoundById(id);
                  return (
                    <Tile key={title}>
                      <TileInner>
                        <TileTitle>{title}</TileTitle>
                        <TileCopy>{description}</TileCopy>
                        <Example>
                          <ExampleLabel>{sound.name}</ExampleLabel>
                          <SoundPreview sound={sound} />
                        </Example>
                      </TileInner>
                    </Tile>
                  );
                })}
              </Grid>
            </Section>

            <Section id="choreography">
              <SectionHeader>
                <SectionTitle>Choreography</SectionTitle>
                <Copy>
                  Sound behavior over time is part of the experience. Define ordering,
                  timing, repetition, priority, interruption, cancellation, and
                  simultaneous events before shipping.
                </Copy>
              </SectionHeader>
              <Grid>
                <Tile>
                  <TileInner>
                    <TileTitle>Repetition</TileTitle>
                    <TileCopy>
                      Repeated navigation sounds should use minimal variants or be
                      suppressed when rapid movement would become overwhelming.
                    </TileCopy>
                  </TileInner>
                </Tile>
                <Tile>
                  <TileInner>
                    <TileTitle>Priority</TileTitle>
                    <TileCopy>
                      Higher-priority alerts may interrupt ambient and informational
                      cues. Routine notifications should never mask critical feedback.
                    </TileCopy>
                  </TileInner>
                </Tile>
                <Tile>
                  <TileInner>
                    <TileTitle>Cancellation</TileTitle>
                    <TileCopy>
                      Stop looping or sustained audio as soon as its state ends. Do not
                      let stale sound continue after the interface has moved on.
                    </TileCopy>
                  </TileInner>
                </Tile>
              </Grid>
            </Section>

            <Section id="duration">
              <SectionHeader>
                <SectionTitle>Duration Guidelines</SectionTitle>
                <Copy>
                  Guideline duration is a target, not a claim about the library. Every
                  profile below displays the measured duration of its actual OGG file.
                </Copy>
              </SectionHeader>
              <TableWrap>
                <Table>
                  <thead><tr><th>Sound type</th><th>Target</th></tr></thead>
                  <tbody>
                    <tr><td>Success</td><td>300–400 ms</td></tr>
                    <tr><td>Warning</td><td>~300 ms</td></tr>
                    <tr><td>Error</td><td>~250 ms</td></tr>
                    <tr><td>Control</td><td>100–300 ms</td></tr>
                    <tr><td>Hardware interaction</td><td>150–400 ms</td></tr>
                    <tr><td>Critical</td><td>250–500 ms</td></tr>
                  </tbody>
                </Table>
              </TableWrap>
            </Section>

            <Section id="library">
              <SectionHeader>
                <SectionTitle>Cake&amp; Sound Library</SectionTitle>
                <Copy>
                  Search the official library, filter by type, compare variants, and
                  play each asset. Waveforms are static visualizations generated from
                  the real audio data.
                </Copy>
              </SectionHeader>
              <SoundLibrary />
            </Section>

            <Section id="do-dont">
              <SectionHeader><SectionTitle>Do / Don’t</SectionTitle></SectionHeader>
              <ChoiceGrid>
                <Tile>
                  <TileInner>
                    <ChoiceTitle><Check aria-hidden />Do</ChoiceTitle>
                    <List>
                      {['Short', 'Warm', 'Controlled', 'Purposeful', 'Tactile', 'Connected', 'Recognizable']
                        .map((item) => <li key={item}>{item}</li>)}
                    </List>
                  </TileInner>
                </Tile>
                <Tile>
                  <TileInner>
                    <ChoiceTitle><X aria-hidden />Don’t</ChoiceTitle>
                    <List>
                      {['Harsh', 'Long', 'Generic', 'Overly dramatic', 'Robotic', 'Sci-fi cliché', 'Repetitive']
                        .map((item) => <li key={item}>{item}</li>)}
                    </List>
                  </TileInner>
                </Tile>
              </ChoiceGrid>
            </Section>

            <Section id="checklist">
              <SectionHeader>
                <SectionTitle>Designer Checklist</SectionTitle>
                <Copy>Ask these questions before introducing or approving a sound.</Copy>
              </SectionHeader>
              <Grid>
                {checklist.map(([title, question]) => (
                  <Tile key={title}>
                    <TileInner>
                      <TileTitle>{title}</TileTitle>
                      <TileCopy>{question}</TileCopy>
                    </TileInner>
                  </Tile>
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

            <Copy>
              Sound is another expression of the Ampersand design system.{' '}
              <a href="#introduction">Return to the Sound DNA introduction</a>
              {' · '}
              <a
                href="https://github.com/cake-admin/cake-sound-library"
                target="_blank"
                rel="noopener noreferrer"
              >
                View source assets <ExternalLink size={14} aria-hidden />
              </a>
            </Copy>
          </Content>
        </Layer>
      </Page>
    </SoundPlayerProvider>
  );
};

export default SoundPage;
