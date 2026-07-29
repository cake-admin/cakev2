import { createContext, useContext } from 'react';

import type { ThemeMode } from '@/cakeand/tokens/theme';

export interface SiteChromeValue {
  themeMode: ThemeMode;
  onToggleTheme: () => void;
}

export const SiteChromeContext = createContext<SiteChromeValue | null>(null);

export function useSiteChrome() {
  const value = useContext(SiteChromeContext);
  if (!value) {
    throw new Error('useSiteChrome must be used within SiteShell');
  }
  return value;
}
