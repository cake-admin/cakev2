import styled, { css } from 'styled-components';

/**
 * Horizontal page gutter shared by TopNav and wallpaper page sections.
 * Mobile/tablet: --space-600; desktop (≥960px): --space-800.
 */
export const pageGutterX = css`
  padding-left: var(--space-600);
  padding-right: var(--space-600);

  @media (min-width: 960px) {
    padding-left: var(--space-800);
    padding-right: var(--space-800);
  }
`;

/** Shared page shell primitives — token-driven, for marketing/docs pages. */

export const PageContainer = styled.div`
  padding: var(--space-600) var(--space-400) var(--space-1000);
  max-width: 1200px;
  margin: 0 auto;
  min-height: 60vh;
  font-family: var(--font-family);
  box-sizing: border-box;
`;

export const PageHeader = styled.div`
  margin-bottom: var(--space-800);
`;

export const PageTitle = styled.h1`
  margin: 0 0 var(--space-200);
  font-family: 'Rookery New', Rookery, var(--font-family);
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--color-text-icon-primary);
`;

export const PageDescription = styled.p`
  margin: 0;
  font-size: var(--type-size-subject);
  line-height: 1.5;
  color: var(--color-text-icon-secondary);
  max-width: 40rem;
`;

export const Section = styled.section`
  margin-bottom: var(--space-800);

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h2`
  margin: 0 0 var(--space-200);
  font-family: var(--font-family);
  font-weight: var(--font-weight-medium);
  font-size: var(--type-size-subtitle);
  color: var(--color-text-icon-primary);
`;

export const SectionDescription = styled.p`
  margin: 0 0 var(--space-400);
  font-size: var(--type-size-body);
  line-height: 1.5;
  color: var(--color-text-icon-secondary);
  max-width: 42rem;
`;
