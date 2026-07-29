import { useMemo, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ChevronDown, Menu, Search, X } from 'lucide-react';

import { IconButton } from '@/cakeand/components/Button';
import { TextInput } from '@/cakeand/components/TextInput';

import { getNavSections, getSearchResults, STORYBOOK_HOME } from '../data/routes';
import { NAV_RAIL_WIDTH, media } from '../styles/breakpoints';

const Rail = styled.nav<{ $open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  width: min(100vw, ${NAV_RAIL_WIDTH}px);
  height: 100%;
  background: var(--color-surfaces-container);
  border-right: var(--stroke-100) solid var(--color-stroke-border);
  transform: translateX(${(p) => (p.$open ? '0' : `-${NAV_RAIL_WIDTH}px`)});
  transition: transform 240ms ease;
  overflow: hidden;

  ${media.lg} {
    transform: none;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const MobileBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-200);
  padding: var(--space-200) var(--space-300);
  border-bottom: var(--stroke-100) solid var(--color-stroke-border);
  background: var(--color-surfaces-container);

  ${media.lg} {
    display: none;
  }
`;

const BrandRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-200);
  padding: var(--space-500) var(--space-500) var(--space-300);
`;

const BrandLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: var(--space-200);
  text-decoration: none;
  color: inherit;
  min-width: 0;

  &:focus-visible {
    outline: var(--stroke-200) solid var(--color-primary-primary);
    outline-offset: var(--space-025);
    border-radius: var(--radius-100);
  }
`;

const LogoMark = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: var(--radius-200);
  background: var(--color-primary-primary);
  color: var(--color-text-icon-on-primary);
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-bold);
  flex-shrink: 0;
`;

const BrandText = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

const BrandTitle = styled.span`
  font-size: var(--type-size-subject);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-icon-primary);
  line-height: 1.2;
`;

const BrandVersion = styled.span`
  font-size: var(--type-size-caption);
  color: var(--color-text-icon-secondary);
`;

const ScrollArea = styled.div`
  flex: 1 1 auto;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: var(--space-500);
`;

const SearchWrap = styled.div`
  padding: 0 var(--space-300) var(--space-300);
`;

const SectionLabel = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-200) var(--space-500);
  margin-top: var(--space-100);
  border: none;
  background: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--type-size-caption);
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-icon-secondary);
  text-align: left;

  &:hover {
    background: var(--color-surfaces-on-container);
  }

  &:focus-visible {
    outline: var(--stroke-200) solid var(--color-primary-primary);
    outline-offset: calc(-1 * var(--space-025));
  }
`;

const Chevron = styled(ChevronDown)<{ $expanded: boolean }>`
  width: 16px;
  height: 16px;
  transition: transform 200ms ease;
  transform: rotate(${(p) => (p.$expanded ? '180deg' : '0deg')});

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const NavList = styled.ul<{ $expanded: boolean; $indent?: boolean }>`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: ${(p) => (p.$expanded ? '1200px' : '0')};
  overflow: hidden;
  transition: max-height 240ms ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const NavItem = styled.li``;

const StyledNavLink = styled(NavLink)<{ $nested?: boolean }>`
  display: flex;
  align-items: center;
  min-height: 40px;
  padding: 0 var(--space-500);
  padding-left: ${(p) => (p.$nested ? 'var(--space-800)' : 'var(--space-500)')};
  text-decoration: none;
  font-size: var(--type-size-body);
  color: var(--color-text-icon-primary);
  position: relative;

  &:hover {
    background: var(--color-surfaces-on-container);
  }

  &:focus-visible {
    outline: var(--stroke-200) solid var(--color-primary-primary);
    outline-offset: calc(-1 * var(--space-025));
  }

  &.active {
    background: var(--color-primary-primary-overlay);
    color: var(--color-primary-primary);
    font-weight: var(--font-weight-bold);
  }

  &.active::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: var(--space-050);
    background: var(--color-primary-primary);
  }
`;

const ExternalLink = styled.a`
  display: flex;
  align-items: center;
  min-height: 40px;
  padding: 0 var(--space-500);
  text-decoration: none;
  font-size: var(--type-size-body);
  color: var(--color-text-icon-primary);

  &:hover {
    background: var(--color-surfaces-on-container);
  }

  &:focus-visible {
    outline: var(--stroke-200) solid var(--color-primary-primary);
    outline-offset: calc(-1 * var(--space-025));
  }
`;

const SearchResults = styled.ul`
  list-style: none;
  margin: var(--space-100) 0 0;
  padding: 0;
  border: var(--stroke-100) solid var(--color-stroke-border);
  border-radius: var(--radius-200);
  background: var(--color-surfaces-container);
  overflow: hidden;
`;

const SearchResultLink = styled(NavLink)`
  display: block;
  padding: var(--space-200) var(--space-300);
  text-decoration: none;
  color: var(--color-text-icon-primary);
  font-size: var(--type-size-body);

  &:hover {
    background: var(--color-surfaces-on-container);
  }
`;

export interface SiteNavProps {
  open: boolean;
  onClose: () => void;
  onToggle: () => void;
}

export function SiteNav({ open, onClose, onToggle }: SiteNavProps) {
  const location = useLocation();
  const sections = getNavSections();
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState({
    foundations: true,
    components: true,
    ai: location.pathname.startsWith('/foundations/ai'),
  });

  const results = useMemo(() => getSearchResults(query), [query]);

  const toggleSection = (key: keyof typeof expanded) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <MobileBar>
        <IconButton
          label={open ? 'Close menu' : 'Open menu'}
          icon={open ? <X /> : <Menu />}
          intent="secondary"
          variant="ghost"
          size="md"
          onClick={onToggle}
        />
        <BrandTitle>cake&</BrandTitle>
        <IconButton
          label="Search"
          icon={<Search />}
          intent="secondary"
          variant="ghost"
          size="md"
          onClick={onToggle}
        />
      </MobileBar>

      <Rail aria-label="Primary" $open={open}>
        <BrandRow>
          <BrandLink to="/" onClick={onClose}>
            <LogoMark aria-hidden>&</LogoMark>
            <BrandText>
              <BrandTitle>cake&</BrandTitle>
              <BrandVersion>Design system</BrandVersion>
            </BrandText>
          </BrandLink>
        </BrandRow>

        <SearchWrap>
          <TextInput
            label="Search"
            placeholder="Search docs…"
            value={query}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
            startIcon={<Search size={18} />}
            autoComplete="off"
          />
          {query.trim() && results.length > 0 && (
            <SearchResults>
              {results.map((route) => (
                <li key={route.path}>
                  <SearchResultLink to={route.path} onClick={onClose}>
                    {route.title}
                  </SearchResultLink>
                </li>
              ))}
            </SearchResults>
          )}
        </SearchWrap>

        <ScrollArea>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <NavItem>
              <StyledNavLink to="/" end onClick={onClose}>
                Home
              </StyledNavLink>
            </NavItem>
            {sections.guides.map((route) => (
              <NavItem key={route.path}>
                <StyledNavLink to={route.path} onClick={onClose}>
                  {route.title}
                </StyledNavLink>
              </NavItem>
            ))}
          </ul>

          <SectionLabel
            type="button"
            aria-expanded={expanded.foundations}
            onClick={() => toggleSection('foundations')}
          >
            Foundations
            <Chevron $expanded={expanded.foundations} aria-hidden />
          </SectionLabel>
          <NavList $expanded={expanded.foundations}>
            {sections.foundations.map((route) => (
              <NavItem key={route.path}>
                <StyledNavLink to={route.path} onClick={onClose}>
                  {route.title}
                </StyledNavLink>
              </NavItem>
            ))}
            <NavItem>
              <SectionLabel
                type="button"
                aria-expanded={expanded.ai}
                onClick={() => toggleSection('ai')}
                style={{ paddingLeft: 'var(--space-800)' }}
              >
                AI
                <Chevron $expanded={expanded.ai} aria-hidden />
              </SectionLabel>
              <NavList $expanded={expanded.ai} $indent>
                {sections.aiChildren.map((route) => (
                  <NavItem key={route.path}>
                    <StyledNavLink to={route.path} $nested onClick={onClose}>
                      {route.title}
                    </StyledNavLink>
                  </NavItem>
                ))}
              </NavList>
            </NavItem>
          </NavList>

          <SectionLabel
            type="button"
            aria-expanded={expanded.components}
            onClick={() => toggleSection('components')}
          >
            Components
            <Chevron $expanded={expanded.components} aria-hidden />
          </SectionLabel>
          <NavList $expanded={expanded.components}>
            {sections.components.map((route) => (
              <NavItem key={route.path}>
                <StyledNavLink to={route.path} onClick={onClose}>
                  {route.title}
                </StyledNavLink>
              </NavItem>
            ))}
            <NavItem>
              <ExternalLink href={STORYBOOK_HOME} target="_blank" rel="noopener noreferrer">
                All components →
              </ExternalLink>
            </NavItem>
          </NavList>
        </ScrollArea>
      </Rail>
    </>
  );
}
