import React from 'react';
import styled from 'styled-components';
import { fontStack } from '../../../styles/globalStyles';

const PageContainer = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  background: #f8fafc;
  box-sizing: border-box;
`;

const PageTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  color: #0f172a;
  margin: 0 0 16px 0;
  font-family: ${fontStack};
`;

const PageDescription = styled.div`
  font-size: 16px;
  line-height: 22px;
  color: #1e1e1e;
  max-width: 680px;
  margin: 0 0 32px 0;
  font-family: ${fontStack};

  p {
    margin: 0 0 22px 0;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  color: #0f172a;
  margin: 0 0 16px 0;
  font-family: ${fontStack};
`;

const PrincipleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PrincipleGrid3 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PrincipleCard = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 24px 32px 32px;
  display: flex;
  flex-direction: column;
`;

const PrincipleTitle = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  color: #1e1e1e;
  margin-bottom: 4px;
  font-family: ${fontStack};
`;

const PrincipleText = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: #1e1e1e;
  font-family: ${fontStack};
`;

const principles = [
  {
    title: 'System over symbol',
    description:
      'AI should be expressed through a connected visual system, not a single icon or standalone symbol.',
  },
  {
    title: 'Hierarchy first',
    description:
      'Different AI experiences require different levels of visual emphasis based on context, importance, and user need.',
  },
  {
    title: 'Abstraction over metaphor',
    description:
      'Avoid literal representations of AI, including human, animal, or robot imagery. Use abstract visual language that feels flexible, scalable, and brand appropriate.',
  },
  {
    title: 'Restraint by default',
    description:
      'Not every AI-powered feature needs an icon or special treatment. Use AI indicators only when they add clarity, set expectations, or improve the experience.',
  },
  {
    title: 'Consistency through treatment',
    description:
      'Alignment comes from shared visual rules, motion, gradients, and interaction patterns, not from forcing every product to use the same exact asset.',
  },
];

const AiOverviewPage = () => {
  const [firstRow, secondRow] = [principles.slice(0, 2), principles.slice(2)];

  return (
    <PageContainer>
      <PageTitle>AI Overview</PageTitle>

      <PageDescription>
        <p>
          Lenovo's AI strategy follows a hybrid, tiered system. Rather than relying on a single
          universal AI icon across all products, our goal is to create harmony across AI experiences
          through a shared visual system.
        </p>
        <p>
          This system brings together gradient treatments, syncopated motion, shared brand cues, and
          consistent visual indicators that can scale across consumer, commercial, and internal
          Lenovo products.
        </p>
      </PageDescription>

      <SectionTitle>Our AI Design Principles</SectionTitle>

      <PrincipleGrid>
        {firstRow.map((principle) => (
          <PrincipleCard key={principle.title}>
            <PrincipleTitle>{principle.title}</PrincipleTitle>
            <PrincipleText>{principle.description}</PrincipleText>
          </PrincipleCard>
        ))}
      </PrincipleGrid>

      <PrincipleGrid3 style={{ marginTop: 16 }}>
        {secondRow.map((principle) => (
          <PrincipleCard key={principle.title}>
            <PrincipleTitle>{principle.title}</PrincipleTitle>
            <PrincipleText>{principle.description}</PrincipleText>
          </PrincipleCard>
        ))}
      </PrincipleGrid3>
    </PageContainer>
  );
};

export default AiOverviewPage;
