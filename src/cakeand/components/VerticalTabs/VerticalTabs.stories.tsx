import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { VerticalTabs, VerticalTabsList, VerticalTabsContent } from './VerticalTabs';
import { VerticalTabItem } from './VerticalTabItem';
import { VerticalTabSubItem } from './VerticalTabSubItem';

const Panel = ({ title }: { title: string }) => (
  <div
    style={{
      padding: 'var(--space-300)',
      borderRadius: 'var(--radius-300)',
      background: 'var(--color-surfaces-on-container-high)',
      minWidth: 260,
    }}
  >
    <p style={{ margin: 0, fontWeight: 'var(--font-weight-medium)' as never }}>{title}</p>
    <p style={{ margin: '8px 0 0', color: 'var(--color-text-icon-secondary)' }}>
      Panel content for {title.toLowerCase()}.
    </p>
  </div>
);

const meta = {
  title: 'Components/Vertical Tabs/Vertical Tabs',
  component: VerticalTabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The container for a vertical tab rail and its panels — the settings-style
navigation where the rail sits beside the content it switches.

A thin wrapper over Radix \`Tabs\` with \`orientation="vertical"\`, which is what
makes the rail behave: roving focus on **Up/Down** (Home/End to jump), the
\`tablist\` / \`tab\` / \`tabpanel\` roles, \`aria-selected\`, and the trigger↔panel
wiring. The rows that go inside are **Vertical Tab Item** and **Vertical Tab
Sub-item**.

Three pieces:

| Export | Radix part | Role |
| --- | --- | --- |
| \`VerticalTabs\` | \`Tabs.Root\` | Owns selection; forces vertical orientation |
| \`VerticalTabsList\` | \`Tabs.List\` | The rail (\`role="tablist"\`) |
| \`VerticalTabsContent\` | \`Tabs.Content\` | A panel (\`role="tabpanel"\`) |

**Scope note:** Figma specs the *rows* (nodes 145:8456 / 145:8584), not the
surrounding layout. The rail↔panel gap (\`--space-500\`) and the spacing between
rows (\`--space-050\`, matching the Menu rail) are therefore chosen from cake&
spacing tokens rather than lifted from the design — override them if your layout
calls for something else.

## Usage

\`\`\`tsx
import {
  VerticalTabs, VerticalTabsList, VerticalTabsContent,
  VerticalTabItem, VerticalTabSubItem,
} from '@/cakeand/components/VerticalTabs';

<VerticalTabs defaultValue="general">
  <VerticalTabsList aria-label="Settings sections">
    <VerticalTabItem value="general">General</VerticalTabItem>
    <VerticalTabItem value="privacy">Privacy</VerticalTabItem>
    <VerticalTabSubItem value="cookies">Cookies</VerticalTabSubItem>
  </VerticalTabsList>

  <VerticalTabsContent value="general">…</VerticalTabsContent>
  <VerticalTabsContent value="privacy">…</VerticalTabsContent>
  <VerticalTabsContent value="cookies">…</VerticalTabsContent>
</VerticalTabs>

// controlled, and deferring selection until Enter/Space
<VerticalTabs value={tab} onValueChange={setTab} activationMode="manual">…</VerticalTabs>
\`\`\`

## Design tokens used

| Part | Tokens |
| --- | --- |
| root layout | \`display: flex\`, \`--space-500\` (24px) rail↔panel gap |
| rail | column, \`--space-050\` (4px) between rows |
| panel | \`--type-size-body\`, \`--color-text-icon-primary\` |
| panel focus ring | \`--stroke-200\` \`--color-primary-primary\` at \`--space-025\` offset |

Row-level tokens live on **Vertical Tab Item** and **Vertical Tab Sub-item**.

## Accessibility

- Radix supplies the full tabs pattern: \`tablist\`/\`tab\`/\`tabpanel\`,
  \`aria-selected\`, and \`aria-controls\`↔\`aria-labelledby\` between each row and
  its panel.
- Vertical orientation means **Up/Down** move between rows and **Home/End**
  jump to the ends. Only the selected row is in the tab order, so Tab moves
  from the rail into the panel — the standard tabs model.
- Panels are focusable so keyboard users can reach content that has no
  focusable elements of its own; the focus ring is restyled, never removed.
- Always pass \`aria-label\` to \`VerticalTabsList\` — an unnamed tablist gives
  screen-reader users no idea what the rail navigates.
- Prefer \`activationMode="manual"\` when selecting a tab triggers an expensive
  fetch, so arrow-key browsing doesn't fire one per row.

## Do / Don't

| Do | Don't |
| --- | --- |
| Name the rail with \`aria-label\`. | Ship an unnamed tablist. |
| Give every row a matching \`VerticalTabsContent\`. | Leave a row pointing at no panel. |
| Use tabs for switching views of one subject. | Use tabs for navigating to separate pages — use links. |
| Keep the rail short enough to scan. | Stack twenty rows and rely on scrolling. |
`,
      },
    },
  },
  tags: ['autodocs'],
  args: {
    defaultValue: 'general',
  },
  argTypes: {
    value: { control: false, table: { category: 'State' } },
    defaultValue: { control: 'text', table: { category: 'State' } },
    activationMode: {
      control: 'inline-radio',
      options: ['automatic', 'manual'],
      table: { category: 'Behavior', defaultValue: { summary: 'automatic' } },
    },
    onValueChange: { action: 'tab change', table: { category: 'Events' } },
    children: { control: false, table: { category: 'Content' } },
  },
  render: (args) => (
    <VerticalTabs {...args}>
      <VerticalTabsList aria-label="Settings sections" style={{ width: 220 }}>
        <VerticalTabItem value="general">General</VerticalTabItem>
        <VerticalTabItem value="privacy">Privacy</VerticalTabItem>
        <VerticalTabSubItem value="cookies">Cookies</VerticalTabSubItem>
        <VerticalTabSubItem value="tracking">Tracking</VerticalTabSubItem>
        <VerticalTabItem value="about">About</VerticalTabItem>
      </VerticalTabsList>
      <VerticalTabsContent value="general">
        <Panel title="General" />
      </VerticalTabsContent>
      <VerticalTabsContent value="privacy">
        <Panel title="Privacy" />
      </VerticalTabsContent>
      <VerticalTabsContent value="cookies">
        <Panel title="Cookies" />
      </VerticalTabsContent>
      <VerticalTabsContent value="tracking">
        <Panel title="Tracking" />
      </VerticalTabsContent>
      <VerticalTabsContent value="about">
        <Panel title="About" />
      </VerticalTabsContent>
    </VerticalTabs>
  ),
} satisfies Meta<typeof VerticalTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Interactive playground — a full rail with nested rows and live panels. */
export const Playground: Story = {};

export const ManualActivation: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'With `activationMode="manual"`, arrow keys move focus without selecting ' +
          '— the user confirms with Enter or Space. Use it when switching tabs ' +
          'kicks off an expensive fetch.',
      },
    },
  },
  render: () => (
    <VerticalTabs defaultValue="general" activationMode="manual">
      <VerticalTabsList aria-label="Settings sections" style={{ width: 220 }}>
        <VerticalTabItem value="general">General</VerticalTabItem>
        <VerticalTabItem value="privacy">Privacy</VerticalTabItem>
        <VerticalTabItem value="about">About</VerticalTabItem>
      </VerticalTabsList>
      <VerticalTabsContent value="general">
        <Panel title="General" />
      </VerticalTabsContent>
      <VerticalTabsContent value="privacy">
        <Panel title="Privacy" />
      </VerticalTabsContent>
      <VerticalTabsContent value="about">
        <Panel title="About" />
      </VerticalTabsContent>
    </VerticalTabs>
  ),
};

/** Pure interaction test (hidden from docs): the rail swaps panels. */
export const SwitchingTabsSwapsPanels: Story = {
  tags: ['!autodocs'],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // the default panel is showing
    await expect(canvas.getByRole('tabpanel')).toHaveTextContent('General');

    // selecting a nested row swaps to its panel
    await userEvent.click(canvas.getByRole('tab', { name: 'Cookies' }));
    await expect(canvas.getByRole('tabpanel')).toHaveTextContent('Cookies');

    // the rail is a named tablist
    await expect(canvas.getByRole('tablist')).toHaveAccessibleName('Settings sections');
  },
};
