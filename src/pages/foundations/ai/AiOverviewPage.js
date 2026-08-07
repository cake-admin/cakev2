import React from 'react';
import styled from 'styled-components';

const PrincipleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-300);
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PrincipleGrid3 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--space-300);
  width: 100%;
  margin-top: var(--space-300);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PrincipleCard = styled.div`
  background: var(--color-surfaces-container);
  border: var(--stroke-100) solid var(--color-stroke-border);
  border-radius: var(--radius-200);
  padding: var(--space-500) var(--space-600) var(--space-600);
  display: flex;
  flex-direction: column;
  box-shadow: var(--elevation-0);
`;

const PrincipleTitle = styled.span`
  display: block;
  font-size: var(--type-size-subject);
  font-weight: var(--font-weight-medium);
  line-height: 1.4;
  color: var(--color-text-icon-primary);
  margin-bottom: var(--space-050);
  font-family: var(--font-family);
`;

const PrincipleText = styled.span`
  display: block;
  font-size: var(--type-size-subject);
  font-weight: var(--font-weight-regular);
  line-height: 1.4;
  color: var(--color-text-icon-secondary);
  font-family: var(--font-family);
`;

const Subhead = styled.h3`
  margin: 0 0 var(--space-300);
  font-family: var(--font-family);
  font-size: var(--type-size-subtitle);
  font-weight: var(--font-weight-medium);
  line-height: 1.4;
  color: var(--color-text-icon-primary);
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

/** Body for the Foundations AI overview panel (no page chrome). */
export const AiOverviewContent = () => {
  const [firstRow, secondRow] = [principles.slice(0, 2), principles.slice(2)];

  return (
    <>
      <Subhead>Our AI Design Principles</Subhead>
      <PrincipleGrid>
        {firstRow.map((principle) => (
          <PrincipleCard key={principle.title}>
            <PrincipleTitle>{principle.title}</PrincipleTitle>
            <PrincipleText>{principle.description}</PrincipleText>
          </PrincipleCard>
        ))}
      </PrincipleGrid>
      <PrincipleGrid3>
        {secondRow.map((principle) => (
          <PrincipleCard key={principle.title}>
            <PrincipleTitle>{principle.title}</PrincipleTitle>
            <PrincipleText>{principle.description}</PrincipleText>
          </PrincipleCard>
        ))}
      </PrincipleGrid3>
    </>
  );
};

export default AiOverviewContent;
