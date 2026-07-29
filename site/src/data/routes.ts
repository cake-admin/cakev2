import { legacyStorybookUrl, storybookDocsUrl, STORYBOOK_HOME } from '../utils/storybook';

export type RouteCategory = 'guides' | 'foundations' | 'components';

export type PageId =
  | 'home'
  | 'resources'
  | 'whats-new'
  | 'about-cake'
  | 'figma-libraries'
  | 'version-control'
  | 'iconography'
  | 'language-grammar'
  | 'ai-overview'
  | 'ai-gradient'
  | 'ai-logo-icon';

export interface SiteRoute {
  path: string;
  title: string;
  description: string;
  category: RouteCategory;
  storybookUrl?: string;
  page?: PageId;
  parentPath?: string;
  navHidden?: boolean;
}

function componentRoute(
  path: string,
  title: string,
  description: string,
  storyTitle: string,
): SiteRoute {
  return {
    path,
    title,
    description,
    category: 'components',
    storybookUrl: storybookDocsUrl(storyTitle),
  };
}

export const siteRoutes: SiteRoute[] = [
  {
    path: '/',
    title: 'Home',
    description: 'Welcome to cake& design system',
    category: 'guides',
    page: 'home',
  },
  {
    path: '/resources',
    title: 'Resources',
    description: 'Figma libraries and design resources',
    category: 'guides',
    page: 'resources',
  },
  {
    path: '/whats-new',
    title: "What's New",
    description: 'Latest updates and changes',
    category: 'guides',
    page: 'whats-new',
  },
  {
    path: '/get-started/about-cake',
    title: 'About cake&',
    description: 'Introduction to the design system',
    category: 'guides',
    page: 'about-cake',
    navHidden: true,
  },
  {
    path: '/get-started/figma-libraries',
    title: 'Figma Libraries',
    description: 'Design resources and Figma components',
    category: 'guides',
    page: 'figma-libraries',
    navHidden: true,
  },
  {
    path: '/version-control',
    title: 'Version Control',
    description: 'Version history and changelog',
    category: 'guides',
    page: 'version-control',
    navHidden: true,
  },
  {
    path: '/foundations/colors',
    title: 'Colors',
    description: 'Color system and design tokens',
    category: 'foundations',
    storybookUrl: storybookDocsUrl('Foundations/Colors'),
  },
  {
    path: '/foundations/iconography',
    title: 'Iconography',
    description: 'Icon library usage and guidelines',
    category: 'foundations',
    page: 'iconography',
  },
  {
    path: '/foundations/language-grammar',
    title: 'Language & Grammar',
    description: 'Content and tone guidelines',
    category: 'foundations',
    page: 'language-grammar',
  },
  {
    path: '/foundations/ai/overview',
    title: 'AI Overview',
    description: "Overview of Lenovo's hybrid, tiered AI visual system",
    category: 'foundations',
    parentPath: '/foundations/ai',
    page: 'ai-overview',
  },
  {
    path: '/foundations/ai/gradient',
    title: 'AI Gradient',
    description: 'AI gradient visual treatments and usage',
    category: 'foundations',
    parentPath: '/foundations/ai',
    page: 'ai-gradient',
  },
  {
    path: '/foundations/ai/logo-icon',
    title: 'AI Logo & Icon',
    description: 'AI logo and icon system guidance',
    category: 'foundations',
    parentPath: '/foundations/ai',
    page: 'ai-logo-icon',
  },
  // Legacy component routes → Storybook
  componentRoute(
    '/components/alert',
    'Alert',
    'Feedback about important information, success, warnings, or errors',
    'Components/Notification',
  ),
  componentRoute(
    '/components/accordion',
    'Accordion',
    'Expandable and collapsible content sections',
    'Components/Accordion',
  ),
  componentRoute(
    '/components/avatar',
    'Avatar',
    'User profile images, initials, or icons',
    'Components/Avatar',
  ),
  componentRoute(
    '/components/badge',
    'Badge',
    'Compact status and count indicators',
    'Components/Badge',
  ),
  componentRoute(
    '/components/breadcrumb',
    'Breadcrumb',
    'Hierarchical navigation context',
    'Components/Breadcrumb',
  ),
  componentRoute(
    '/components/button',
    'Button',
    'Interactive button with styles and states',
    'Components/Button/Button',
  ),
  {
    path: '/components/canvas',
    title: 'Canvas',
    description: 'Drawing and illustration component',
    category: 'components',
    storybookUrl: STORYBOOK_HOME,
  },
  componentRoute(
    '/components/checkbox',
    'Checkbox',
    'On/off and indeterminate selection control',
    'Components/Checkbox',
  ),
  componentRoute('/components/chip', 'Chip', 'Compact discrete information', 'Components/Chip'),
  componentRoute(
    '/components/menu',
    'Menu',
    'Selectable options with search and scroll',
    'Components/Menu/Menu Item',
  ),
  componentRoute(
    '/components/dropdown',
    'Dropdown',
    'Single-select field with optional search',
    'Components/Dropdown',
  ),
  componentRoute(
    '/components/modal',
    'Modal',
    'Dialogs for content, input, and confirmation',
    'Components/Modal/Modal',
  ),
  componentRoute(
    '/components/radio',
    'Radio',
    'Single-choice selection from options',
    'Components/Radio',
  ),
  componentRoute(
    '/components/segmented-control',
    'Segmented Control',
    'Mutually exclusive view switching',
    'Components/Content Switcher',
  ),
  componentRoute(
    '/components/text-inputs',
    'Text Inputs',
    'Text fields with labels, helpers, and validation',
    'Components/Text Input',
  ),
  componentRoute(
    '/components/toggle',
    'Toggle',
    'Binary on/off switch control',
    'Components/Switch',
  ),
  componentRoute(
    '/components/slider',
    'Slider',
    'Value selection along a bounded track',
    'Components/Slider',
  ),
  componentRoute(
    '/components/spinner',
    'Loading',
    'Progress and loading indicators',
    'Components/Progress Indicators/Spinner',
  ),
  {
    path: '/components/link',
    title: 'Link',
    description: 'Navigation with optional icon support',
    category: 'components',
    storybookUrl: storybookDocsUrl('Components/Button/Button'),
  },
  componentRoute(
    '/components/tab',
    'Tab',
    'Content organized into multiple panels',
    'Components/Horizontal Tabs/Horizontal Tabs',
  ),
  componentRoute(
    '/components/tooltip',
    'Tooltip',
    'Contextual information on hover or focus',
    'Components/Tooltip/Simple Tooltip',
  ),
];

export { STORYBOOK_HOME };

export function getNavSections() {
  return {
    guides: siteRoutes.filter((r) => r.category === 'guides' && !r.navHidden && r.path !== '/'),
    foundations: siteRoutes.filter((r) => r.category === 'foundations' && !r.parentPath),
    aiChildren: siteRoutes.filter((r) => r.parentPath === '/foundations/ai'),
    components: siteRoutes.filter((r) => r.category === 'components'),
  };
}

export function getSearchResults(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return siteRoutes.filter(
    (route) =>
      route.title.toLowerCase().includes(q) ||
      route.description.toLowerCase().includes(q) ||
      route.path.toLowerCase().includes(q),
  );
}

export function getRouteByPath(path: string): SiteRoute | undefined {
  return siteRoutes.find((r) => r.path === path);
}

/** Resolve storybook URL for any legacy path (includes unlisted aliases). */
export function resolveStorybookUrl(path: string): string | undefined {
  const route = getRouteByPath(path);
  if (route?.storybookUrl) return route.storybookUrl;
  return legacyStorybookUrl(path);
}
