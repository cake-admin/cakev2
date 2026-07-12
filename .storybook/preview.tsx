import React from 'react';
import type { Preview, Decorator } from '@storybook/react-vite';

import {
  CakeThemeProvider,
  CakeGlobalStyle,
} from '../src/cakeand/theme/ThemeProvider';
import { themes, type ThemeMode } from '../src/cakeand/tokens/theme';

/**
 * The global "Theme" toolbar toggle is the single source of truth for the mode.
 * Every story is wrapped in CakeThemeProvider, so components get their tokens
 * from `props.theme` — stories never set the theme themselves.
 */
const withTheme: Decorator = (Story, context) => {
  const mode = (context.globals.theme as ThemeMode) || 'light.a';
  const canvas = themes[mode].color.surfaces.canvas;
  // In Docs, each story renders in its own preview block — a full-viewport min
  // height would make every example a 100vh-tall box. Only fill the viewport in
  // the single-story (canvas) view, where the themed background should bleed.
  const isDocs = context.viewMode === 'docs';

  return (
    <CakeThemeProvider mode={mode}>
      <CakeGlobalStyle />
      <div
        data-theme={mode}
        style={{
          background: canvas,
          minHeight: isDocs ? 'auto' : '100vh',
          padding: isDocs ? '1.5rem' : '2rem',
          boxSizing: 'border-box',
        }}
      >
        <Story />
      </div>
    </CakeThemeProvider>
  );
};

const preview: Preview = {
  decorators: [withTheme],

  globalTypes: {
    theme: {
      description: 'cake& theme mode',
      toolbar: {
        title: 'Theme',
        icon: 'contrast',
        items: [
          { value: 'light.a', title: 'Light A', icon: 'sun' },
          { value: 'dark.a', title: 'Dark A', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },

  initialGlobals: {
    theme: 'light.a',
  },

  parameters: {
    layout: 'centered',
    docs: {
      // Right-rail table of contents on docs pages: picks up the ## sections
      // from `docs.description.component` plus each story's title.
      toc: { headingSelector: 'h2, h3' },
    },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // The decorator paints the canvas from the theme, so disable the addon bg.
    backgrounds: { disable: true },
    a11y: { test: 'todo' },
    options: {
      storySort: {
        order: [
          'Introduction',
          'Foundations',
          ['Colors', 'Typography', 'Spacing'],
          'Guides',
          'Components',
        ],
      },
    },
  },

  tags: ['autodocs'],
};

export default preview;
