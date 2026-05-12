import React from 'react';
import styled from 'styled-components';
import { fontStack } from '../../../styles/globalStyles';
import DbConsumer from '../../../assets/ai/db_consumer.svg';
import MyAiLogo from '../../../assets/ai/my_ai.svg';
import heroExamplePng from '../../../assets/ai/hero_example..png';
import messageExamplePng from '../../../assets/ai/ai_message_example.png';

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

const PageDescription = styled.p`
  font-size: 16px;
  line-height: 22px;
  color: #1e1e1e;
  max-width: 680px;
  margin: 0;
  font-family: ${fontStack};
`;

// ─── Type definition rows ─────────────────────────────────────────────────────

const TypeSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 32px;
`;

const TypeRow = styled.div`
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

const VisualSide = styled.div`
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

const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex-shrink: 0;
`;

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

const TypeDescription = styled.div`
  font-size: 14px;
  color: #334155;
  font-family: ${fontStack};
  min-width: 0;

  @media (max-width: 1060px) {
    border-top: 1.5px dashed #cbd5e1;
    padding-top: 16px;
  }
`;

const TypeDescTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: #334155;
  margin: 0 0 4px 0;
  font-family: ${fontStack};
`;

const TypeDescText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #334155;
  margin: 0;
  font-family: ${fontStack};
`;

// ─── Usage Examples ───────────────────────────────────────────────────────────

const UsageHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const UsageSectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  line-height: 36px;
  color: #0f172a;
  margin: 0;
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
  margin: 0;
  font-family: ${fontStack};
`;

const ExampleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ExampleSubtitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  color: #0f172a;
  margin: 0 0 8px 0;
  font-family: ${fontStack};
`;

const ExampleDesc = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #0f172a;
  max-width: 680px;
  margin: 0;
  font-family: ${fontStack};

  & + & {
    margin-top: 16px;
  }
`;

/*
 * Subtle AI gradient canvas background matching the Figma:
 * linear-gradient(174.59deg, rgba(238,242,255,0.15), rgba(240,171,252,0.15))
 */
const GradientCanvas = styled.div`
  background: linear-gradient(
    174.59deg,
    rgba(238, 242, 255, 0.5) 16.6%,
    rgba(240, 171, 252, 0.2) 183.86%
  );
  border: 1px solid rgba(162, 28, 175, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;

const ExampleImage = styled.img`
  display: block;
  max-width: 480px;
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

// ─── Component ────────────────────────────────────────────────────────────────

const typeDefinitions = [
  {
    icons: [
      { src: DbConsumer, size: 64 },
      { src: MyAiLogo, size: 64 },
    ],
    title: 'Hero Logo',
    description:
      'The Hero Logo is used for high-emphasis AI experiences where AI is the primary function of the product, feature, or entry point. It should appear only once per screen and function as a logo mark, not a repeated icon. The default Hero Logo uses the Double Bubble icon unless the product has an approved branded AI icon. Motion may be used when it supports personality, system state, or feedback.',
  },
  {
    icons: [{ src: DbConsumer, size: 24 }],
    title: 'Icon',
    description:
      'The AI Icon is used as a compact indicator for AI-powered actions, system states, and conversational moments. It may be animated to show states such as thinking, loading, processing, or completion. Once the task is complete, the icon should be hidden until a new AI task is requested to avoid repetitive icon usage.',
  },
];

const AiLogoIconPage = () => {
  return (
    <PageContainer>
      <ContentStack>
        {/* Header + Type Definitions */}
        <div>
          <PageTitle>AI Logo + Icon</PageTitle>
          <PageDescription>
            AI logos and icons are used to signal AI-powered experiences with a recognizable visual
            mark. They should be used intentionally and only when the AI capability needs clear
            recognition, persistent presence, or state-based feedback.
          </PageDescription>

          <TypeSection>
            {typeDefinitions.map((type) => (
              <TypeRow key={type.title}>
                <VisualSide>
                  <IconGroup>
                    {type.icons.map((icon, i) => (
                      <img
                        key={i}
                        src={icon.src}
                        alt={i === 0 ? type.title : ''}
                        width={icon.size}
                        height={icon.size}
                        style={{ display: 'block', flexShrink: 0 }}
                      />
                    ))}
                  </IconGroup>
                  <AnnotationLine aria-hidden="true" />
                </VisualSide>

                <TypeDescription>
                  <TypeDescTitle>{type.title}</TypeDescTitle>
                  <TypeDescText>{type.description}</TypeDescText>
                </TypeDescription>
              </TypeRow>
            ))}
          </TypeSection>
        </div>

        {/* Usage Examples */}
        <div>
          <UsageHeader>
            <UsageSectionTitle>AI Icon + Logo Usage Examples</UsageSectionTitle>
            <UsageSectionSubtitle>Consumer examples shown</UsageSectionSubtitle>
          </UsageHeader>
        </div>

        {/* Hero */}
        <ExampleBlock>
          <div>
            <ExampleSubtitle>Hero</ExampleSubtitle>
            <ExampleDesc>
              The Hero example shows the largest allowed size for the AI icon. This treatment is
              reserved for hero use cases where AI is the primary focus of the experience.
            </ExampleDesc>
            <ExampleDesc>
              At this size, the AI icon should appear only once per screen and function as a logo
              mark rather than a repeated icon.
            </ExampleDesc>
          </div>
          <GradientCanvas>
            <ExampleImage src={heroExamplePng} alt="Hero AI logo usage example" />
          </GradientCanvas>
        </ExampleBlock>

        {/* Messages */}
        <ExampleBlock>
          <div>
            <ExampleSubtitle>Messages</ExampleSubtitle>
            <ExampleDesc>
              The Messages example shows the AI icon used as a chat placeholder and status
              indicator. The icon may animate to communicate personality or application states such
              as thinking, loading, or completion.
            </ExampleDesc>
            <ExampleDesc>
              Once the AI task is complete, the icon should be hidden from view until a new task is
              requested. This keeps the experience focused and avoids repetitive icon usage.
            </ExampleDesc>
          </div>
          <GradientCanvas>
            <ExampleImage src={messageExamplePng} alt="AI icon messages usage example" />
          </GradientCanvas>
        </ExampleBlock>
      </ContentStack>
    </PageContainer>
  );
};

export default AiLogoIconPage;
