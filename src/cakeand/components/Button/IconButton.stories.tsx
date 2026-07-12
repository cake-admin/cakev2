import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';
import { Pencil, Plus, Settings, Trash2 } from 'lucide-react';

import { IconButton } from './IconButton';

const meta = {
  title: 'Components/Button/Icon Button',
  component: IconButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A circular, icon-only action for toolbars, table rows, and other dense UIs
where a text label doesn't fit. It shares Button's emphasis system — the same
**intent** (\`primary\` indigo / \`secondary\` ink) and **variant** families
(\`fill\`, \`outline\`, \`tonal\`, \`ghost\`) — sized 24–48px. If the action
deserves a visible label, use **Button** (with \`startIcon\`) instead.

Every color, radius, and size value resolves from cake& theme tokens via
\`props.theme\` — the **Theme** toolbar toggle re-themes every example on this
page live.

Always renders a real \`<button type="button">\`. Accessibility is built on
Radix \`AccessibleIcon\`: the **required** \`label\` prop renders as
visually-hidden text, so the button always has an accessible name even though
it shows only a glyph. Icons inherit the button's state color via
\`currentColor\`.

## Usage

\`\`\`tsx
<IconButton label="Add item" icon={<Plus />} />
<IconButton label="Settings" icon={<Settings />} intent="secondary" />
<IconButton label="Edit" icon={<Pencil />} variant="outline" />
<IconButton label="Duplicate" icon={<Plus />} variant="tonal" />
<IconButton label="Dismiss" icon={<X />} variant="ghost" />
<IconButton label="Add item" icon={<Plus />} size="lg" />
<IconButton label="Delete" icon={<Trash2 />} disabled />
\`\`\`

## Design tokens used

| Variant · intent | Container | Icon | Hover / Press |
| --- | --- | --- | --- |
| fill · primary | \`color.primary.primary\` | \`textIcon.inverse\` | \`primaryHover\` / \`primaryPress\` |
| fill · secondary | \`color.secondary.secondary\` | \`textIcon.onSecondary\` | \`secondaryHover\` / \`secondaryPress\` |
| outline · primary | transparent + 1px \`primary.primary\` border | \`primary.primary\` | \`primaryOverlay\` / \`primaryOverlayHover\` |
| outline · secondary | transparent + 1px \`secondary.secondary\` border | \`secondary.secondary\` | \`secondaryOverlay\` / \`secondaryOverlayHover\` |
| tonal · primary | \`tonal.tonalOverlay\` | \`textIcon.onTonalInverse\` | \`tonalOverlayHover\` / \`tonalOverlayPress\` |
| tonal · secondary | \`tonal.tonalSecondaryOverlay\` | \`textIcon.onTonalSecondary\` | \`tonalSecondaryOverlayHover\` / \`tonalSecondaryOverlayPress\` |
| ghost · primary | transparent | \`primary.primary\` | \`primaryOverlay\` / \`primaryOverlayHover\` |
| ghost · secondary | transparent | \`secondary.secondary\` | \`secondaryOverlay\` / \`secondaryOverlayHover\` |
| disabled | \`disabled.disabled\` fill (ghost stays transparent), border drops | \`disabled.disabledInverse\` | — |

Shape is a \`radius.pill\` circle — 24/32/40/48px across with a 16px icon at
\`xs\` and 24px otherwise; the focus ring is a 3px \`primary.primary\` outline
drawn at −2px inset (same as Button).

## Accessibility

- \`label\` is **required** and becomes the accessible name via Radix
  \`AccessibleIcon\` (visually-hidden text — more robust than \`aria-label\`
  across translation tools).
- The icon itself is \`aria-hidden\`; assistive tech only hears the label.
- The focus-visible ring is drawn as an \`::after\` overlay — focus is
  restyled, never removed.
- Disabled uses the native \`disabled\` attribute with \`pointer-events: none\`.

## Do / Don't

| Do | Don't |
| --- | --- |
| Use for well-known glyphs (settings, close, edit) in dense UIs. | Use an icon-only button when the action is unfamiliar — use Button with a label. |
| Write \`label\` as the action ("Delete row"), not the glyph ("Trash"). | Leave the label generic ("Icon", "Button"). |
| Match the variant to nearby Buttons of the same emphasis. | Mix a fill IconButton into a row of ghost actions. |
| Keep one icon per concept across the product. | Swap glyphs for the same action between screens. |
`,
      },
    },
  },
  tags: ['autodocs'],
  args: {
    label: 'Add item',
    icon: <Plus />,
    size: 'md',
    intent: 'primary',
    variant: 'fill',
    disabled: false,
    onClick: fn(),
  },
  argTypes: {
    label: { control: 'text', table: { category: 'Content' } },
    icon: { control: false, table: { category: 'Content' } },
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
    disabled: { control: 'boolean', table: { category: 'State' } },
    ref: { table: { disable: true } },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const Row = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>{children}</div>
);
const Stack = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>{children}</div>
);

/** Interactive playground — drive every prop from the Controls panel below. */
export const Playground: Story = {};

export const Variants: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'The four emphasis treatments across both intents (Figma "container": ' +
          'filled / outline / tonal / none). Pick the same emphasis you would ' +
          'for a text Button in that spot.',
      },
    },
  },
  render: () => (
    <Stack>
      {(['fill', 'outline', 'tonal', 'ghost'] as const).map((variant) => (
        <Row key={variant}>
          <IconButton label={`Add (primary ${variant})`} icon={<Plus />} variant={variant} />
          <IconButton
            label={`Add (secondary ${variant})`}
            icon={<Plus />}
            intent="secondary"
            variant={variant}
          />
        </Row>
      ))}
    </Stack>
  ),
};

export const Sizes: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Four diameters: `xs` 24px (16px icon), `sm` 32px, `md` 40px ' +
          '(default), `lg` 48px — all with a 24px icon except `xs`.',
      },
    },
  },
  render: () => (
    <Row>
      {(['xs', 'sm', 'md', 'lg'] as const).map((size) => (
        <IconButton key={size} label={`Add (${size})`} icon={<Plus />} size={size} />
      ))}
    </Row>
  ),
};

export const CommonActions: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Typical toolbar actions. Each has a specific `label` ("Edit profile", ' +
          'not "Pencil") — that text is what screen readers announce.',
      },
    },
  },
  render: () => (
    <Row>
      <IconButton label="Add item" icon={<Plus />} />
      <IconButton label="Edit profile" icon={<Pencil />} variant="tonal" />
      <IconButton label="Open settings" icon={<Settings />} variant="ghost" intent="secondary" />
      <IconButton label="Delete row" icon={<Trash2 />} variant="outline" />
    </Row>
  ),
};

export const Disabled: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Disabled treatment: fill/outline/tonal flatten to `disabled.disabled` ' +
          '(the outline border drops); ghost keeps its transparent container. The ' +
          'icon dims to `disabled.disabledInverse` and `pointer-events` is off.',
      },
    },
  },
  render: () => (
    <Row>
      <IconButton label="Add (fill)" icon={<Plus />} disabled />
      <IconButton label="Add (outline)" icon={<Plus />} variant="outline" disabled />
      <IconButton label="Add (tonal)" icon={<Plus />} variant="tonal" disabled />
      <IconButton label="Add (ghost)" icon={<Plus />} variant="ghost" disabled />
    </Row>
  ),
};

export const AllVariants: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'The QA matrix: every variant × intent in default and disabled states, ' +
          'plus the size ramp. Use it with the Theme toolbar to audit both ' +
          '`light.a` and `dark.a` at a glance.',
      },
    },
  },
  render: () => (
    <Stack>
      {(['fill', 'outline', 'tonal', 'ghost'] as const).map((variant) => (
        <Row key={variant}>
          {(['primary', 'secondary'] as const).map((intent) => (
            <Row key={intent}>
              <IconButton label={`${intent} ${variant}`} icon={<Plus />} intent={intent} variant={variant} />
              <IconButton
                label={`${intent} ${variant} disabled`}
                icon={<Plus />}
                intent={intent}
                variant={variant}
                disabled
              />
            </Row>
          ))}
        </Row>
      ))}
      <Row>
        {(['xs', 'sm', 'md', 'lg'] as const).map((size) => (
          <IconButton key={size} label={`Add (${size})`} icon={<Plus />} size={size} />
        ))}
      </Row>
    </Stack>
  ),
};

/** Pure interaction test (hidden from the docs page): accessible name + click firing. */
export const ClicksFire: Story = {
  tags: ['!autodocs'],
  args: { onClick: fn(), label: 'Add item' },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    // The Radix AccessibleIcon label is the accessible name.
    const button = canvas.getByRole('button', { name: /add item/i });
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};
