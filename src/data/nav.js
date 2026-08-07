/**
 * Top-level site information architecture.
 * Parent click navigates to the default subpage (or the page itself).
 */

/** Nested under CRA Pages in production; local Storybook runs on :6006. */
export const STORYBOOK_PATH =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:6006/'
    : `${process.env.PUBLIC_URL || ''}/storybook/`;

export const NAV_SECTIONS = [
  {
    id: 'resources',
    label: 'Resources',
    path: '/resources',
    children: [
      { label: "What's new", path: '/resources/whats-new' },
      { label: 'Resources', path: '/resources', default: true },
    ],
  },
  {
    id: 'foundations',
    label: 'Foundations',
    path: '/foundations',
    children: [
      { label: 'Foundations', path: '/foundations', default: true },
    ],
  },
  {
    id: 'components',
    label: 'Components',
    path: '/components',
  },
];

/** Blog (What's new) lives under /resources but is its own top-nav item. */
export const isBlogPath = (pathname) =>
  pathname === '/resources/whats-new' ||
  pathname.startsWith('/resources/whats-new/');

/** Match the active top-level section from a pathname. */
export const getActiveSection = (pathname) => {
  if (pathname === '/' || pathname === '') return null;
  // Prefer Blog over Resources for what's-new (and nested blog routes).
  if (isBlogPath(pathname)) return null;
  if (pathname === '/components' || pathname.startsWith('/components/')) {
    return NAV_SECTIONS.find((s) => s.id === 'components');
  }
  if (pathname.startsWith('/foundations')) {
    return NAV_SECTIONS.find((s) => s.id === 'foundations');
  }
  if (
    pathname.startsWith('/resources') ||
    pathname.startsWith('/whats-new') ||
    pathname.startsWith('/get-started')
  ) {
    return NAV_SECTIONS.find((s) => s.id === 'resources');
  }
  return null;
};

/** Active subpage within a section (longest path match). */
export const getActiveSubpage = (section, pathname) => {
  if (!section?.children?.length) return null;
  const sorted = [...section.children].sort((a, b) => b.path.length - a.path.length);
  return sorted.find((child) => {
    if (child.path === pathname) return true;
    if (child.path !== section.path && pathname.startsWith(`${child.path}/`)) return true;
    return false;
  }) ?? section.children.find((c) => c.default) ?? null;
};
