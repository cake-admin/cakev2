import { useMemo } from 'react';

import { useSiteChrome } from '../layout/SiteChromeContext';
import { messages } from './messages';

export function useSiteTranslation() {
  const { locale } = useSiteChrome();

  return useMemo(() => messages[locale], [locale]);
}
