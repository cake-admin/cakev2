import { createContext, useContext } from 'react';

import type { ThemeMode } from '@/cakeand/tokens/theme';

import type { SiteLocale } from '../i18n/types';

export interface SiteChromeValue {
  themeMode: ThemeMode;
  onToggleTheme: () => void;
  locale: SiteLocale;
  onToggleLocale: () => void;
}

export const SiteChromeContext = createContext<SiteChromeValue | null>(null);

export function useSiteChrome() {
  const value = useContext(SiteChromeContext);
  if (!value) {
    throw new Error('useSiteChrome must be used within SiteShell');
  }
  return value;
}
