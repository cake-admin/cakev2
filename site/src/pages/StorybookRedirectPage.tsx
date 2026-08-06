import { useEffect } from 'react';
import styled from 'styled-components';

import { Spinner } from '@/cakeand/components/Progress Indicators/Spinner';

import type { SiteRoute } from '../data/routes';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-300);
  min-height: 40vh;
  color: var(--color-text-icon-secondary);
  font-size: var(--type-size-body);
`;

export interface StorybookRedirectPageProps {
  route: SiteRoute;
}

/** Sends component doc routes to the live Storybook docs page. */
export function StorybookRedirectPage({ route }: StorybookRedirectPageProps) {
  useEffect(() => {
    if (route.storybookUrl) {
      window.location.replace(route.storybookUrl);
    }
  }, [route.storybookUrl]);

  return (
    <Page aria-live="polite">
      <Spinner size="lg" />
      <p>Opening {route.title} in Storybook…</p>
    </Page>
  );
}
