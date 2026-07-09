import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming/create';

/**
 * Cake-branded Storybook UI (the manager chrome around the preview).
 * Uses the new design-system primary (indigo #394EDB).
 */
const cakeTheme = create({
  base: 'light',
  brandTitle: 'cake&',
  brandUrl: 'https://cake.lenovo.com',
  brandTarget: '_self',

  colorPrimary: '#394EDB',
  colorSecondary: '#394EDB',

  appBorderRadius: 8,
  inputBorderRadius: 6,

  fontBase: '"Rookery New", "Rookery", system-ui, sans-serif',
});

addons.setConfig({
  theme: cakeTheme,
});
