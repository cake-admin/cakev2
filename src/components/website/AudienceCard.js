import React from 'react';
import styled from 'styled-components';
import { ArrowRight } from 'lucide-react';

import { Card, SimpleCard } from '../../cakeand/components/Card';
import { Button } from '../../cakeand/components/Button/Button';
import CardHeaderIllustration from './CardHeaderIllustration';

/** Figma card heights — Designers 373px, Developers/Resources 401px (node 117:2200). */
const Shell = styled.div`
  display: flex;
  flex-direction: column;
  height: ${(props) => (props.$tall ? '401px' : '373px')};
  min-height: ${(props) => (props.$tall ? '401px' : '373px')};
`;

const StyledCard = styled(Card)`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  min-height: 0;
`;

const AudienceCard = ({
  type,
  title,
  body,
  actionLabel,
  href,
  onAction,
  stretchActions = false,
  tall = false,
}) => (
  <Shell $tall={tall}>
    <StyledCard>
      <SimpleCard
        fillHeight
        stretchActions={stretchActions}
        media={<CardHeaderIllustration type={type} />}
        title={title}
        body={body}
        actions={
          <Button
            size="md"
            variant="outline"
            intent="secondary"
            endIcon={<ArrowRight size={16} />}
            onClick={onAction}
            {...(href
              ? { type: 'button', 'aria-label': `${actionLabel} (opens in new tab)` }
              : {})}
          >
            {actionLabel}
          </Button>
        }
      />
    </StyledCard>
  </Shell>
);

export default AudienceCard;
