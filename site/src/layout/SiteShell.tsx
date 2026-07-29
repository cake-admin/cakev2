import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Moon, Sun } from 'lucide-react';

import { CakeProvider } from '@/cakeand/theme/CakeProvider';
import type { ThemeMode } from '@/cakeand/tokens/theme';

import { SiteNav } from './SiteNav';
import { NAV_RAIL_WIDTH, media } from '../styles/breakpoints';

const SkipLink = styled.a`
  position: absolute;
  left: var(--space-300);
  top: var(--space-300);
  z-index: 2000;
  padding: var(--space-150) var(--space-300);
  background: var(--color-surfaces-container);
  color: var(--color-text-icon-primary);
  border-radius: var(--radius-200);
  font-size: var(--type-size-body);
  text-decoration: none;
  transform: translateY(-200%);
  transition: transform 120ms ease;

  &:focus {
    transform: translateY(0);
    outline: var(--stroke-200) solid var(--color-primary-primary);
    outline-offset: var(--space-025);
  }
`;

const Shell = styled.div`
  min-height: 100vh;
  background: var(--color-surfaces-canvas);
`;

const Body = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1 1 auto;
  min-width: 0;
  padding: var(--space-300);

  ${media.lg} {
    margin-left: ${NAV_RAIL_WIDTH}px;
    padding: var(--space-500);
  }
`;

const Footer = styled.footer`
  margin-left: 0;
  padding: var(--space-500) var(--space-300) var(--space-800);
  text-align: center;
  font-size: var(--type-size-caption);
  color: var(--color-text-icon-secondary);

  ${media.lg} {
    margin-left: ${NAV_RAIL_WIDTH}px;
    padding-inline: var(--space-500);
  }
`;

const Overlay = styled.button<{ $open: boolean }>`
  display: ${(p) => (p.$open ? 'block' : 'none')};
  position: fixed;
  inset: 0;
  z-index: 999;
  border: none;
  padding: 0;
  background: var(--color-overlay-scrim);
  cursor: pointer;

  ${media.lg} {
    display: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: ${(p) => (p.$open ? 'fadeIn 200ms ease' : 'none')};
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export interface SiteShellProps {
  children: React.ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  const [navOpen, setNavOpen] = useState(false);
  const [mode, setMode] = useState<ThemeMode>('light.a');

  const closeNav = useCallback(() => setNavOpen(false), []);
  const toggleNav = useCallback(() => setNavOpen((v) => !v), []);
  const toggleTheme = useCallback(
    () => setMode((current) => (current === 'light.a' ? 'dark.a' : 'light.a')),
    [],
  );

  useEffect(() => {
    if (!navOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [navOpen]);

  return (
    <CakeProvider mode={mode}>
      <Shell>
        <SkipLink href="#main-content">Skip to content</SkipLink>
        <Overlay
          type="button"
          $open={navOpen}
          aria-label="Close navigation"
          onClick={closeNav}
        />
        <Body>
          <SiteNav
            open={navOpen}
            onClose={closeNav}
            onToggle={toggleNav}
            themeMode={mode}
            onToggleTheme={toggleTheme}
          />
          <Main id="main-content">{children}</Main>
        </Body>
        <Footer>© Lenovo {new Date().getFullYear()}</Footer>
      </Shell>
    </CakeProvider>
  );
}
