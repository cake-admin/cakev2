import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Search } from 'lucide-react';

import { getRouteTitle } from '../i18n/messages';
import { useSiteTranslation } from '../i18n/useSiteTranslation';
import { useSiteChrome } from '../layout/SiteChromeContext';
import { getSearchResults } from '../data/routes';

/** Figma Cake--Website hero search — node 87:1353 (48px pill, 320px wide). */
const Root = styled.div`
  position: relative;
  width: min(320px, 42vw);
  flex-shrink: 0;
`;

const Field = styled.label`
  display: flex;
  align-items: center;
  gap: var(--space-050);
  height: 48px;
  padding-inline: var(--space-200);
  border-radius: var(--radius-1000);
  background: var(--color-surfaces-container);
  border: var(--stroke-100) solid var(--color-stroke-border);
  cursor: text;

  &:focus-within {
    border-color: var(--color-stroke-border-high);
  }
`;

const Input = styled.input`
  flex: 1 1 auto;
  min-width: 0;
  border: none;
  background: transparent;
  padding: 0 var(--space-100);
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-regular);
  line-height: 1.35;
  letter-spacing: 0.2px;
  color: var(--color-text-icon-primary);

  &::placeholder {
    color: var(--color-text-icon-placeholder);
  }

  &:focus {
    outline: none;
  }
`;

const Results = styled.ul`
  position: absolute;
  top: calc(100% + var(--space-100));
  left: 0;
  right: 0;
  z-index: 20;
  margin: 0;
  padding: var(--space-100);
  list-style: none;
  border-radius: var(--radius-300);
  background: var(--color-surfaces-container);
  border: var(--stroke-100) solid var(--color-stroke-border);
  box-shadow: var(--elevation-2);
  max-height: 240px;
  overflow-y: auto;
`;

const ResultButton = styled.button`
  display: block;
  width: 100%;
  padding: var(--space-150) var(--space-200);
  border: none;
  border-radius: var(--radius-200);
  background: none;
  text-align: left;
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  color: var(--color-text-icon-primary);
  cursor: pointer;

  &:hover {
    background: var(--color-surfaces-on-container);
  }

  &:focus-visible {
    outline: var(--stroke-200) solid var(--color-primary-primary);
    outline-offset: var(--space-025);
  }
`;

export interface HeroSearchProps {
  /** Scroll collapse progress (0–1) — fades the field as the hero compacts. */
  progress?: number;
}

export function HeroSearch({ progress = 0 }: HeroSearchProps) {
  const navigate = useNavigate();
  const { locale } = useSiteChrome();
  const t = useSiteTranslation();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);

  const results = useMemo(() => getSearchResults(query), [query]);
  const visible = progress < 0.85;

  const goTo = (path: string) => {
    setQuery('');
    setOpen(false);
    navigate(path);
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && results[0]) {
      event.preventDefault();
      goTo(results[0].path);
    }
    if (event.key === 'Escape') {
      setOpen(false);
    }
  };

  if (!visible) return null;

  return (
    <Root style={{ opacity: 1 - progress, pointerEvents: progress > 0.5 ? 'none' : 'auto' }}>
      <Field>
        <Search size={24} aria-hidden stroke="var(--color-text-icon-secondary)" />
        <Input
          type="search"
          value={query}
          placeholder={t.chrome.searchPlaceholder}
          aria-label={t.chrome.search}
          autoComplete="off"
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => window.setTimeout(() => setOpen(false), 120)}
          onKeyDown={onKeyDown}
        />
      </Field>
      {open && query.trim() && results.length > 0 ? (
        <Results>
          {results.slice(0, 6).map((route) => (
            <li key={route.path}>
              <ResultButton type="button" onMouseDown={() => goTo(route.path)}>
                {getRouteTitle(locale, route.path, route.title)}
              </ResultButton>
            </li>
          ))}
        </Results>
      ) : null}
    </Root>
  );
}
