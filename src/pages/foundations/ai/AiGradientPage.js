import React from 'react';
import styled from 'styled-components';
import { fontStack } from '../../../styles/globalStyles';
import MyAiLogo from '../../../assets/ai/my_ai.svg';
import DbConsumer from '../../../assets/ai/db_consumer.svg';
import imgThinkingLoadingPng from '../../../assets/ai/ai_thinking_loading.png';
import imgButtonsPng from '../../../assets/ai/ai_buttons.png';
import imgAiInputPng from '../../../assets/ai/ai_input.png';

import swatchConsumerPrimary   from '../../../assets/ai/swatchConsumerPrimary.svg';
import swatchCommercialPrimary from '../../../assets/ai/swatchCommercialPrimary.svg';
import swatchInternalPrimary   from '../../../assets/ai/swatchInternalPrimary.svg';
import swatchConsumerSurface   from '../../../assets/ai/swatchConsumerSurface.svg';
import swatchCommercialSurface from '../../../assets/ai/swatchCommercialSurface.svg';
import swatchInternalSurface   from '../../../assets/ai/swatchInternalSurface.svg';
import swatchConsumerCanvas    from '../../../assets/ai/swatchConsumerCanvas.svg';
import swatchCommercialCanvas  from '../../../assets/ai/swatchCommercialCanvas.svg';
import swatchInternalCanvas    from '../../../assets/ai/swatchInternalCanvas.svg';


// ─── Layout ──────────────────────────────────────────────────────────────────

const PageContainer = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  background: #f8fafc;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 24px 16px;
  }
`;

const ContentStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

const PageTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  color: #0f172a;
  margin: 0 0 16px 0;
  font-family: ${fontStack};

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

const PageDescription = styled.div`
  font-size: 16px;
  line-height: 22px;
  color: #1e1e1e;
  max-width: 680px;
  font-family: ${fontStack};

  p {
    margin: 0 0 22px 0;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

// ─── Dotted annotation line ───────────────────────────────────────────────────
// Replicates the Figma imgLine1 separator between visuals and annotation text.

const AnnotationLine = styled.div`
  flex: 1;
  min-width: 16px;
  height: 0;
  border-top: 1.5px dashed #cbd5e1;
  align-self: center;

  @media (max-width: 1060px) {
    display: none;
  }
`;

// ─── Gradient Categories ──────────────────────────────────────────────────────

const GradientSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 32px;
`;

/*
 * Two-column grid: left = swatches (min-content, can grow), right = description (up to 480px).
 * minmax(min-content, 1fr) ensures the swatch column never shrinks below what its content needs.
 * Stacks to a single column at ≤1060px (viewport), which accounts for the 250px sidebar +
 * padding, where swatches and a wide description would otherwise collide.
 */
const GradientRow = styled.div`
  display: grid;
  grid-template-columns: minmax(min-content, 1fr) minmax(min-content, 480px);
  gap: 24px;
  align-items: center;
  width: 100%;

  @media (max-width: 1060px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const SwatchSide = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  min-width: 0;
  padding: 8px;
  overflow: visible;

  @media (max-width: 1060px) {
    padding: 0;
  }
`;

const SwatchGroup = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  flex-shrink: 0;

  @media (max-width: 480px) {
    gap: 16px;
  }
`;

const SwatchItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const SwatchImage = styled.img`
  width: 64px;
  height: 64px;
  display: block;

  @media (max-width: 480px) {
    width: 48px;
    height: 48px;
  }
`;

const SwatchLabel = styled.p`
  font-size: 10px;
  line-height: 12px;
  color: #475569;
  margin: 0;
  text-align: center;
  font-family: ${fontStack};
`;

const GradientDescription = styled.div`
  font-size: 14px;
  color: #334155;
  font-family: ${fontStack};
  min-width: 0;

  @media (max-width: 1060px) {
    border-top: 1.5px dashed #cbd5e1;
    padding-top: 16px;
  }
`;

const GradientDescTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: #334155;
  margin: 0 0 4px 0;
  font-family: ${fontStack};
`;

const GradientDescText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #334155;
  margin: 0;
  font-family: ${fontStack};
`;

const GradientDescMeta = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #334155;
  margin: 12px 0 0 0;
  font-family: ${fontStack};
`;

// ─── Usage Examples ───────────────────────────────────────────────────────────

const UsageSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const UsageSectionHeader = styled.div`
  max-width: 680px;
  margin-bottom: 24px;
`;

const UsageSectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 36px;
  color: #0f172a;
  margin: 0 0 4px 0;
  font-family: ${fontStack};

  @media (max-width: 768px) {
    font-size: 22px;
    line-height: 28px;
  }
`;

const UsageSectionSubtitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #0f172a;
  margin: 0 0 16px 0;
  font-family: ${fontStack};
`;

const UsageSectionDesc = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #0f172a;
  margin: 0;
  font-family: ${fontStack};

  & + & {
    margin-top: 16px;
  }
`;

const UsageExamples = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const UsageRow = styled.div`
  display: grid;
  grid-template-columns: minmax(min-content, 1fr) minmax(min-content, 480px);
  gap: 24px;
  align-items: center;
  width: 100%;

  @media (max-width: 1060px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const UsageVisualSide = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  min-width: 0;
  padding: 8px;
  overflow: visible;

  @media (max-width: 1060px) {
    padding: 0;
  }
`;

const UsageVisualImg = styled.img`
  display: block;
  height: auto;
  flex-shrink: 0;
`;

const UsageAnnotationLine = styled.div`
  flex: 1;
  min-width: 16px;
  height: 0;
  border-top: 1.5px dashed #cbd5e1;
  align-self: center;

  @media (max-width: 1060px) {
    display: none;
  }
`;

const UsageDescription = styled.div`
  font-size: 14px;
  font-family: ${fontStack};
  min-width: 0;

  @media (max-width: 1060px) {
    border-top: 1.5px dashed #cbd5e1;
    padding-top: 16px;
  }
`;

const UsageDescTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: #334155;
  display: block;
  font-family: ${fontStack};
`;

const UsageDescText = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #334155;
  display: block;
  font-family: ${fontStack};
`;

// ─── Data ─────────────────────────────────────────────────────────────────────

const gradientCategories = [
  {
    title: 'Primary AI Gradients',
    description: 'Used for high-emphasis AI moments where the experience needs clear recognition or brand presence.',
    applies: 'Consumer, Commercial, and Internal products',
    usage: 'Product AI logo backgrounds, AI input borders, AI button icons, and AI button text',
    swatches: [
      { src: swatchConsumerPrimary, label: 'Consumer' },
      { src: swatchCommercialPrimary, label: 'Commercial' },
      { src: swatchInternalPrimary, label: 'Internal' },
    ],
  },
  {
    title: 'Surface AI Gradients',
    description: 'Used for supporting AI surfaces that need a softer visual treatment while still feeling connected to the broader AI system.',
    applies: 'Consumer, Commercial, and Internal products',
    usage: 'Secondary button surfaces and loading surfaces',
    swatches: [
      { src: swatchConsumerSurface, label: 'Consumer' },
      { src: swatchCommercialSurface, label: 'Commercial' },
      { src: swatchInternalSurface, label: 'Internal' },
    ],
  },
  {
    title: 'Canvas AI Gradients',
    description: 'Used for low-emphasis AI environments where the gradient supports the overall experience without competing with content.',
    applies: 'Consumer, Commercial, and Internal products',
    usage: 'Canvas and page backgrounds',
    swatches: [
      { src: swatchConsumerCanvas, label: 'Consumer' },
      { src: swatchCommercialCanvas, label: 'Commercial' },
      { src: swatchInternalCanvas, label: 'Internal' },
    ],
  },
];

const usageExamples = [
  {
    title: 'Hero AI logo or product AI logo',
    description: 'Use for high-emphasis moments where AI needs strong visual recognition, such as product entry points, hero surfaces, or branded AI experiences.',
    visualSrcs: [DbConsumer, MyAiLogo],
    visualWidth: 64,
    visualHeight: 64,
  },
  {
    title: 'Double Bubble AI icon',
    description: 'Use when an AI capability needs a compact visual indicator without requiring a full logo treatment.',
    visualSrcs: [DbConsumer],
    visualWidth: 24,
    visualHeight: 24,
  },
  {
    title: 'Thinking and loading states',
    description: 'Use gradient motion or progressive gradient treatments to show that an AI system is processing, retrieving, generating, or analyzing information.',
    visualSrcs: [imgThinkingLoadingPng],
    naturalSize: true,
    maxHeight: 64,
  },
  {
    title: 'Buttons, icons, and text',
    description: 'Use gradient treatments on primary actions, secondary actions, icons, or button text when the action is directly tied to an AI capability.',
    visualSrcs: [imgButtonsPng],
    naturalSize: true,
    maxHeight: 40,
  },
  {
    title: 'AI input areas',
    description: 'Use gradient borders, icon treatments, or icon-only actions to identify AI-enabled inputs, prompts, or generative interactions.',
    visualSrcs: [imgAiInputPng],
    naturalSize: true,
    maxHeight: 100,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

const AiGradientPage = () => {
  return (
    <PageContainer>
      <ContentStack>
        {/* Header + Gradient Categories */}
        <div>
          <PageTitle>AI Gradient</PageTitle>
          <PageDescription>
            <p>
              AI gradients are used to signal that a product, feature, or surface is AI-powered
              without introducing a new icon.
            </p>
            <p>
              This approach uses visual treatment, such as color, surface, container styling, and
              hierarchy, to create a recognizable AI experience across Lenovo products. Gradients
              help maintain consistency while reducing icon overload and allowing each product
              context to use the appropriate level of emphasis.
            </p>
          </PageDescription>

          <GradientSection>
            {gradientCategories.map((cat) => (
              <GradientRow key={cat.title}>
                {/* Left: swatches + dotted annotation line */}
                <SwatchSide>
                  <SwatchGroup>
                    {cat.swatches.map((swatch) => (
                      <SwatchItem key={swatch.label}>
                        <SwatchImage src={swatch.src} alt={`${cat.title} — ${swatch.label}`} />
                        <SwatchLabel>{swatch.label}</SwatchLabel>
                      </SwatchItem>
                    ))}
                  </SwatchGroup>
                  <AnnotationLine aria-hidden="true" />
                </SwatchSide>

                {/* Right: description */}
                <GradientDescription>
                  <GradientDescTitle>{cat.title}</GradientDescTitle>
                  <GradientDescText>{cat.description}</GradientDescText>
                  <GradientDescMeta>
                    <strong>Applies to:</strong> {cat.applies}
                    <br />
                    <strong>Usage:</strong> {cat.usage}
                  </GradientDescMeta>
                </GradientDescription>
              </GradientRow>
            ))}
          </GradientSection>
        </div>

        {/* Usage Examples */}
        <UsageSection>
          <UsageSectionHeader>
            <UsageSectionTitle>AI Gradient Usage Examples</UsageSectionTitle>
            <UsageSectionSubtitle>Consumer examples shown</UsageSectionSubtitle>
            <UsageSectionDesc>
              AI gradients can be applied across a range of UI elements to indicate AI-powered
              experiences. Usage should be based on the level of emphasis needed in the interface,
              from high-visibility brand moments to subtle interaction cues.
            </UsageSectionDesc>
            <UsageSectionDesc>
              Use AI gradients intentionally. Not every AI-powered feature needs a gradient
              treatment. Apply gradients when they help users recognize an AI capability, understand
              system status, or distinguish an AI interaction from a standard product interaction.
            </UsageSectionDesc>
          </UsageSectionHeader>

          <UsageExamples>
            {usageExamples.map((example) => (
              <UsageRow key={example.title}>
                {/* Left: visual element(s) + neutral spacer (annotation line only in gradient rows) */}
                <UsageVisualSide>
                  {example.visualSrcs.map((src, i) => (
                    <UsageVisualImg
                      key={i}
                      src={src}
                      alt={i === 0 ? example.title : ''}
                      style={
                        example.naturalSize
                          ? { maxHeight: example.maxHeight, width: 'auto', maxWidth: '100%' }
                          : { width: example.visualWidth, height: example.visualHeight }
                      }
                    />
                  ))}
                  <UsageAnnotationLine aria-hidden="true" />
                </UsageVisualSide>

                {/* Right: description */}
                <UsageDescription>
                  <UsageDescTitle>{example.title}</UsageDescTitle>
                  <UsageDescText>{example.description}</UsageDescText>
                </UsageDescription>
              </UsageRow>
            ))}
          </UsageExamples>
        </UsageSection>
      </ContentStack>
    </PageContainer>
  );
};

export default AiGradientPage;
