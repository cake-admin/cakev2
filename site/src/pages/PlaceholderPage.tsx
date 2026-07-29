import styled from 'styled-components';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/cakeand/components/Button';
import { Card } from '@/cakeand/components/Card';
import { HeroCard } from '@/cakeand/components/Card/HeroCard';

import type { SiteRoute } from '../data/routes';
import { STORYBOOK_HOME } from '../data/routes';

const Page = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;

export interface PlaceholderPageProps {
  route?: SiteRoute;
}

export function PlaceholderPage({ route }: PlaceholderPageProps) {
  const title = route?.title ?? 'Page not found';
  const description =
    route?.description ??
    'This page is part of the cake& website redesign and will be available soon.';

  return (
    <Page>
      <Card>
        <HeroCard
          title={title}
          body={description}
          secondaryBody="Component API documentation lives in Storybook — the source of truth for props, variants, and accessibility."
          actions={
            <Button
              size="lg"
              endIcon={<ArrowRight size={16} />}
              onClick={() => {
                window.location.href = STORYBOOK_HOME;
              }}
            >
              Open Storybook
            </Button>
          }
        />
      </Card>
    </Page>
  );
}
