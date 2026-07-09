import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';
import styled from 'styled-components';

import { Dialog } from './Dialog';
import { Switch } from '../Switch/Switch';

/**
 * A modal dialog built on the Radix `Dialog` primitive and styled with cake&
 * tokens. Pass a `trigger` element (rendered via Radix `asChild`) plus a
 * required `title`; everything else is optional.
 */
const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    title: 'Delete workspace',
    description:
      'This permanently removes the workspace and all of its projects. This action cannot be undone.',
    showClose: true,
  },
  argTypes: {
    title: { control: 'text', table: { category: 'Content' } },
    description: { control: 'text', table: { category: 'Content' } },
    showClose: { control: 'boolean', table: { category: 'Appearance' } },
    open: { table: { disable: true } },
    trigger: { table: { disable: true } },
    children: { table: { disable: true } },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

const TriggerButton = styled.button`
  all: unset;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  padding: ${(p) => p.theme.space.md} ${(p) => p.theme.space.xl};
  border-radius: ${(p) => p.theme.radius.pill};
  background: ${(p) => p.theme.color.primary.primary};
  color: ${(p) => p.theme.color.textIcon.onPrimary};
  font-family: ${(p) => p.theme.typography.medium.body.fontFamily};
  font-size: ${(p) => p.theme.typography.medium.body.fontSize};
  font-weight: ${(p) => p.theme.typography.medium.body.fontWeight};

  &:hover {
    background: ${(p) => p.theme.color.primary.primaryHover};
  }
  &:focus-visible {
    box-shadow:
      0 0 0 2px ${(p) => p.theme.color.surfaces.canvas},
      0 0 0 4px ${(p) => p.theme.color.primary.primary};
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${(p) => p.theme.space.sm};
`;

const GhostButton = styled(TriggerButton)`
  background: transparent;
  color: ${(p) => p.theme.color.textIcon.primary};
  &:hover {
    background: ${(p) => p.theme.color.secondary.secondaryOverlay};
  }
`;

export const Default: Story = {
  render: (args) => (
    <Dialog {...args} trigger={<TriggerButton>Open dialog</TriggerButton>}>
      <Actions>
        <GhostButton>Cancel</GhostButton>
      </Actions>
    </Dialog>
  ),
};

export const WithForm: Story = {
  args: {
    title: 'Notification settings',
    description: 'Choose how you want to be notified.',
  },
  render: (args) => (
    <Dialog {...args} trigger={<TriggerButton>Open settings</TriggerButton>}>
      <div style={{ display: 'grid', gap: 12 }}>
        <Switch label="Email" defaultChecked />
        <Switch label="Push" />
        <Switch label="SMS" disabled />
      </div>
    </Dialog>
  ),
};

/** Interaction test: clicking the trigger opens the dialog. */
export const Playground: Story = {
  render: (args) => (
    <Dialog {...args} trigger={<TriggerButton>Open dialog</TriggerButton>}>
      <Actions>
        <GhostButton>Cancel</GhostButton>
      </Actions>
    </Dialog>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', { name: /open dialog/i }));
    // Radix renders the dialog in a portal on document.body.
    const dialog = await within(document.body).findByRole('dialog');
    await expect(dialog).toBeInTheDocument();
  },
};
