import styled from 'styled-components';

const Page = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding-bottom: var(--space-1000);
`;

const Header = styled.header`
  margin-bottom: var(--space-600);
`;

const Title = styled.h1`
  margin: 0 0 var(--space-200);
  font-size: var(--type-size-title);
  font-weight: var(--font-weight-bold);
  line-height: 1.2;
  color: var(--color-text-icon-primary);
`;

const Description = styled.p`
  margin: 0;
  max-width: 40rem;
  font-size: var(--type-size-body);
  line-height: 1.5;
  color: var(--color-text-icon-secondary);
`;

const Section = styled.section`
  margin-bottom: var(--space-600);
`;

const SectionTitle = styled.h2`
  margin: 0 0 var(--space-300);
  font-size: var(--type-size-subtitle);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-icon-primary);
`;

const SectionBody = styled.div`
  font-size: var(--type-size-body);
  line-height: 1.5;
  color: var(--color-text-icon-secondary);

  p {
    margin: 0 0 var(--space-300);
  }

  ul {
    margin: 0 0 var(--space-300);
    padding-left: var(--space-500);
  }

  li {
    margin-bottom: var(--space-150);
  }

  a {
    color: var(--color-primary-primary);
    text-decoration: underline;
    text-underline-offset: 2px;

    &:hover {
      color: var(--color-primary-primary-hover);
    }
  }
`;

const Grid = styled.div`
  display: grid;
  gap: var(--space-400);
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
`;

export interface DocPageProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function DocPage({ title, description, children }: DocPageProps) {
  return (
    <Page>
      <Header>
        <Title>{title}</Title>
        {description ? <Description>{description}</Description> : null}
      </Header>
      {children}
    </Page>
  );
}

DocPage.Section = Section;
DocPage.SectionTitle = SectionTitle;
DocPage.SectionBody = SectionBody;
DocPage.Grid = Grid;
