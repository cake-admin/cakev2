import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { CakeProvider } from '../../cakeand/theme/CakeProvider';
import AudienceCard from './AudienceCard';

const Row = styled.div`
  padding-top: var(--space-100, 0.5rem);
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-500, 24px);
  width: 100%;
  align-items: stretch;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const AUDIENCE_CARDS = [
  {
    type: 'designers',
    title: 'Designers',
    body: 'Access our Figma libraries, iconography, and patterns guidelines to create consistent Lenovo experiences.',
    actionLabel: 'Get Figma kit',
    to: '/get-started/figma-libraries',
    stretchActions: true,
    tall: false,
  },
  {
    type: 'developers',
    title: 'Developers',
    body: 'Explore our full component library in Storybook to see interactive examples, usage guidelines, and available props for every component.',
    actionLabel: 'View Storybook',
    href: 'https://cake.lenovo.com/storybook/',
    tall: true,
  },
  {
    type: 'resources',
    title: 'Resources',
    body: 'Visit our Resources page for downloadable brand assets, approved fonts, logos, color palettes, and links to our full brand guidelines.',
    actionLabel: 'View resources',
    to: '/resources',
    tall: true,
  },
];

const AudienceCards = () => {
  const navigate = useNavigate();

  return (
    <CakeProvider mode="light.a" globalStyles={false} scope="subtree">
      <Row>
        {AUDIENCE_CARDS.map(({ type, title, body, actionLabel, to, href, stretchActions, tall }) => (
          <AudienceCard
            key={type}
            type={type}
            title={title}
            body={body}
            actionLabel={actionLabel}
            href={href}
            stretchActions={stretchActions}
            tall={tall}
            onAction={() => {
              if (href) {
                window.open(href, '_blank', 'noopener,noreferrer');
                return;
              }
              navigate(to);
            }}
          />
        ))}
      </Row>
    </CakeProvider>
  );
};

export default AudienceCards;
