import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';

import { Switch } from './Switch';

/**
 * A binary on/off control built on the Radix `Switch` primitive and styled with
 * cake& tokens. Use it for instant-effect settings (not for form submission
 * gating, where a checkbox is more appropriate).
 */
const meta = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  args: {
    label: 'Enable notifications',
    disabled: false,
    onCheckedChange: fn(),
  },
  argTypes: {
    checked: { control: 'boolean', table: { category: 'State' } },
    defaultChecked: { control: 'boolean', table: { category: 'State' } },
    disabled: { control: 'boolean', table: { category: 'State' } },
    label: { control: 'text', table: { category: 'Content' } },
    onCheckedChange: { action: 'checkedChange', table: { category: 'Events' } },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const On: Story = {
  args: { defaultChecked: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const DisabledOn: Story = {
  args: { disabled: true, defaultChecked: true },
};

export const WithoutLabel: Story = {
  args: { label: undefined },
};

/** Interaction test: toggling fires `onCheckedChange(true)`. */
export const Playground: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('switch');
    await userEvent.click(toggle);
    await expect(args.onCheckedChange).toHaveBeenCalledWith(true);
  },
};
