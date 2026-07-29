export type RouteCategory = 'guides' | 'foundations' | 'components';

export interface SiteRoute {
  path: string;
  title: string;
  description: string;
  category: RouteCategory;
  /** External Storybook docs URL — used for component pages. */
  storybookUrl?: string;
  parentPath?: string;
  navHidden?: boolean;
}

export const siteRoutes: SiteRoute[] = [
  {
    path: '/',
    title: 'Home',
    description: 'Welcome to cake& design system',
    category: 'guides',
  },
  {
    path: '/resources',
    title: 'Resources',
    description: 'Figma libraries and design resources',
    category: 'guides',
  },
  {
    path: '/whats-new',
    title: "What's New",
    description: 'Latest updates and changes',
    category: 'guides',
  },
  {
    path: '/get-started/about-cake',
    title: 'About cake&',
    description: 'Introduction to the design system',
    category: 'guides',
    navHidden: true,
  },
  {
    path: '/get-started/figma-libraries',
    title: 'Figma Libraries',
    description: 'Design resources and Figma components',
    category: 'guides',
    navHidden: true,
  },
  {
    path: '/foundations/colors',
    title: 'Colors',
    description: 'Color system and design tokens',
    category: 'foundations',
  },
  {
    path: '/foundations/iconography',
    title: 'Iconography',
    description: 'Icon library usage and guidelines',
    category: 'foundations',
  },
  {
    path: '/foundations/language-grammar',
    title: 'Language & Grammar',
    description: 'Content and tone guidelines',
    category: 'foundations',
  },
  {
    path: '/foundations/ai/overview',
    title: 'AI Overview',
    description: 'Lenovo AI visual system overview',
    category: 'foundations',
    parentPath: '/foundations/ai',
  },
  {
    path: '/foundations/ai/gradient',
    title: 'AI Gradient',
    description: 'AI gradient treatments and usage',
    category: 'foundations',
    parentPath: '/foundations/ai',
  },
  {
    path: '/foundations/ai/logo-icon',
    title: 'AI Logo & Icon',
    description: 'AI logo and icon guidance',
    category: 'foundations',
    parentPath: '/foundations/ai',
  },
  {
    path: '/components/button',
    title: 'Button',
    description: 'Interactive button component',
    category: 'components',
    storybookUrl:
      'https://cake.lenovo.com/storybook/?path=/docs/components-button-button--docs',
  },
  {
    path: '/components/modal',
    title: 'Modal',
    description: 'Dialog and confirmation patterns',
    category: 'components',
    storybookUrl:
      'https://cake.lenovo.com/storybook/?path=/docs/components-modal-modal--docs',
  },
  {
    path: '/components/text-inputs',
    title: 'Text Inputs',
    description: 'Text field components',
    category: 'components',
    storybookUrl:
      'https://cake.lenovo.com/storybook/?path=/docs/components-text-input-text-input--docs',
  },
];

export const STORYBOOK_HOME = 'https://cake.lenovo.com/storybook/';

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
