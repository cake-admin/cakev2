export const STORYBOOK_HOME = 'https://cake.lenovo.com/storybook/';

/** Build a Storybook docs URL from a CSF/Meta title (e.g. `Components/Button/Button`). */
export function storybookDocsUrl(title: string): string {
  const slug = title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/\//g, '-');
  return `${STORYBOOK_HOME}?path=/docs/${slug}--docs`;
}

/** Legacy site paths mapped to Storybook doc titles. */
export const LEGACY_COMPONENT_DOCS: Record<string, string> = {
  '/components/accordion': 'Components/Accordion',
  '/components/alert': 'Components/Notification',
  '/components/avatar': 'Components/Avatar',
  '/components/badge': 'Components/Badge',
  '/components/breadcrumb': 'Components/Breadcrumb',
  '/components/button': 'Components/Button/Button',
  '/components/checkbox': 'Components/Checkbox',
  '/components/chip': 'Components/Chip',
  '/components/dropdown': 'Components/Dropdown',
  '/components/menu': 'Components/Menu/Menu Item',
  '/components/modal': 'Components/Modal/Modal',
  '/components/radio': 'Components/Radio',
  '/components/segmented-control': 'Components/Content Switcher',
  '/components/slider': 'Components/Slider',
  '/components/spinner': 'Components/Progress Indicators/Spinner',
  '/components/tab': 'Components/Horizontal Tabs/Horizontal Tabs',
  '/components/text-inputs': 'Components/Text Input',
  '/components/toggle': 'Components/Switch',
  '/components/tooltip': 'Components/Tooltip/Simple Tooltip',
};

export function legacyStorybookUrl(path: string): string | undefined {
  const title = LEGACY_COMPONENT_DOCS[path];
  return title ? storybookDocsUrl(title) : undefined;
}
