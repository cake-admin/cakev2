import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within, fn } from 'storybook/test';
import { ArrowRight, Plus } from 'lucide-react';

import { Button } from './Button';

/**
 * The cake& Button — pill-shaped and token-driven, built on the Radix `Slot`
 * primitive (for `asChild` polymorphism). Every color comes from the cake&
 * theme tokens, so it re-themes automatically with the Storybook Theme toggle.
 *
 * Three independent axes:
 * - **intent** — `primary` | `secondary` (which token family drives the color)
 * - **variant** — `fill` | `outline` | `tonal` | `ghost` (emphasis)
 * - **size** — `xs` | `sm` | `md` | `lg`
 */
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    children: 'Button',
    size: 'md',
    intent: 'primary',
    variant: 'fill',
    fullWidth: false,
    disabled: false,
    onClick: fn(),
  },
  argTypes: {
    children: { control: 'text', table: { category: 'Content' } },
    size: {
      control: 'inline-radio',
      options: ['xs', 'sm', 'md', 'lg'],
      table: { category: 'Appearance' },
    },
    intent: {
      control: 'inline-radio',
      options: ['primary', 'secondary'],
      table: { category: 'Appearance' },
    },
    variant: {
      control: 'inline-radio',
      options: ['fill', 'outline', 'tonal', 'ghost'],
      table: { category: 'Appearance' },
    },
    fullWidth: { control: 'boolean', table: { category: 'Appearance' } },
    disabled: { control: 'boolean', table: { category: 'State' } },
    startIcon: { table: { disable: true } },
    endIcon: { table: { disable: true } },
    asChild: { table: { disable: true } },
    ref: { table: { disable: true } },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const Row = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>{children}</div>
);
const Stack = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>{children}</div>
);

/** Interactive playground — drive every prop from the controls panel. */
export const Playground: Story = {};

/** All four variants, across both intents. */
export const Variants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Stack>
      {(['fill', 'outline', 'tonal', 'ghost'] as const).map((variant) => (
        <Row key={variant}>
          <Button intent="primary" variant={variant}>
            Primary {variant}
          </Button>
          <Button intent="secondary" variant={variant}>
            Secondary {variant}
          </Button>
        </Row>
      ))}
    </Stack>
  ),
};

/** The four sizes (xs → lg). */
export const Sizes: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Row>
      {(['xs', 'sm', 'md', 'lg'] as const).map((size) => (
        <Button key={size} size={size}>
          Size {size}
        </Button>
      ))}
    </Row>
  ),
};

/** Leading and trailing icons sit in a 16px slot beside the label. */
export const WithIcons: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Row>
      <Button startIcon={<Plus size={16} />}>Add item</Button>
      <Button variant="tonal" endIcon={<ArrowRight size={16} />}>
        Continue
      </Button>
      <Button variant="outline" intent="secondary" startIcon={<Plus size={16} />}>
        New project
      </Button>
    </Row>
  ),
};

/** Disabled treatment per variant. */
export const Disabled: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Row>
      <Button disabled>Fill</Button>
      <Button variant="outline" disabled>
        Outline
      </Button>
      <Button variant="tonal" disabled>
        Tonal
      </Button>
      <Button variant="ghost" disabled>
        Ghost
      </Button>
    </Row>
  ),
};

/** Stretches to fill its container. */
export const FullWidth: Story = {
  args: { fullWidth: true },
  decorators: [
    (Story) => <div style={{ width: 320 }}>{Story()}</div>,
  ],
};

/** Interaction test: the button is clickable and fires its handler. */
export const ClicksFire: Story = {
  args: { onClick: fn() },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /button/i });
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};
