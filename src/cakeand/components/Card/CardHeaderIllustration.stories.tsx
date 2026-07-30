import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { CardHeaderIllustration } from './CardHeaderIllustration';

const meta = {
  title: 'Components/Card/Card Header Illustration',
  component: CardHeaderIllustration,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Full-bleed header artwork for audience cards (Figma \`PartsCardHeaderIllustration\`,
node 118:480). Three \`type\` variants — \`designers\`, \`developers\`, \`resources\`
— each with light and dark artwork that follows the nearest \`[data-theme]\`.

The strip is a fixed **180px** tall, full-width media slot meant to sit inside a
**Card** via **SimpleCard**'s \`media\` prop. Illustrations are decorative;
\`alt=""\` is set on the images.

## Usage

\`\`\`tsx
import { Card, SimpleCard, CardHeaderIllustration } from '@/cakeand/components/Card';

<Card>
  <SimpleCard
    media={<CardHeaderIllustration type="designers" />}
    title="Designers"
    body="Access our Figma libraries…"
    actions={<Button size="md" variant="outline" intent="secondary">Get Figma kit</Button>}
  />
</Card>
\`\`\`

## Design tokens used

| Part | Tokens |
| --- | --- |
| strip height | 180px (Figma frame — intrinsic geometry) |
| placeholder | \`--color-surfaces-on-container\` |
| crop | 170% image height; resources variant offset per theme |

## Accessibility

- Decorative — images use \`alt=""\` and the frame is \`aria-hidden\`.
- Pair with a visible **SimpleCard** title; do not rely on the illustration alone.

## Do / Don't

| Do | Don't |
| --- | --- |
| Slot into **SimpleCard** \`media\` inside a **Card** | Render standalone without the card surface |
| Toggle theme with the Storybook **Theme** toolbar | Hardcode light/dark artwork at the call site |
| Use the \`type\` that matches the card audience | Mix a developers illustration with a resources title |
`,
      },
    },
  },
  tags: ['autodocs'],
  args: {
    type: 'designers',
  },
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['designers', 'developers', 'resources'],
      table: { category: 'Appearance' },
    },
  },
} satisfies Meta<typeof CardHeaderIllustration>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Interactive playground — switch the audience illustration from Controls. */
export const Playground: Story = {
  render: (args) => (
    <div style={{ width: 459 }}>
      <CardHeaderIllustration {...args} />
    </div>
  ),
};

/** Default designers header — audit light/dark with the **Theme** toolbar. */
export const Designers: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ width: 459 }}>
      <CardHeaderIllustration type="designers" />
    </div>
  ),
};

/** Developers header artwork for the Storybook audience card. */
export const Developers: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ width: 459 }}>
      <CardHeaderIllustration type="developers" />
    </div>
  ),
};

/** Resources header artwork for the brand-assets audience card. */
export const Resources: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ width: 459 }}>
      <CardHeaderIllustration type="resources" />
    </div>
  ),
};

/** Theme/QA pass — all three types side by side. */
export const AllVariants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <CardHeaderIllustration type="designers" />
      <CardHeaderIllustration type="developers" />
      <CardHeaderIllustration type="resources" />
    </div>
  ),
};
