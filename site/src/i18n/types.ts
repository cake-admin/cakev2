export type SiteLocale = 'en' | 'zh';

export const LOCALE_STORAGE_KEY = 'cake-site-locale';

export const DEFAULT_LOCALE: SiteLocale = 'en';

export function isSiteLocale(value: string | null | undefined): value is SiteLocale {
  return value === 'en' || value === 'zh';
}

export function readStoredLocale(): SiteLocale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE;
  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  return isSiteLocale(stored) ? stored : DEFAULT_LOCALE;
}
