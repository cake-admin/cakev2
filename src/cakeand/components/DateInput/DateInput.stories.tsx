import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';

import { DateInput } from './DateInput';

const meta = {
  title: 'Components/Date Input',
  component: DateInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Date Input collects a typed \`MM/DD/YY\` date and exposes a calendar action
that opens the browser’s native date picker. It composes [Input
Label](?path=/docs/elements-input-label--docs) with [Helper
String](?path=/docs/elements-helper-string--docs); use \`mode="range"\` to
collect a start and end date with one shared helper. Use Time Input when the
value also needs a time of day.

Every color, spacing, radius, stroke, and type value resolves from cake& CSS
custom properties mirroring the Figma variables. The **Theme** toolbar
re-themes every example live; nothing is hardcoded.

The supplied Figma node defines the input and calendar trigger, but no custom
calendar panel. The trigger therefore opens the browser-native date picker
instead of inventing unreviewed calendar visuals. The visible native text input
remains the form control; typed values are formatted progressively and
normalized to \`MM/DD/YY\` on blur. Range values are independently controlled
through \`rangeValue\` / \`onRangeValueChange\`.

## Usage

\`\`\`tsx
<DateInput />
<DateInput label="Appointment date" required showLabelInfo />
<DateInput defaultValue="09/30/26" />
<DateInput mode="range" startLabel="Start date" endLabel="End date" />
<DateInput status="error" helperText="Choose a valid date" />
<DateInput mode="range" disabled />
\`\`\`

## Design tokens used

| Part · state | Tokens |
| --- | --- |
| resting field | \`--color-surfaces-on-container-high\`, \`--stroke-100\`, \`--color-stroke-border\` |
| hover | \`--color-stroke-border-high\` |
| typing / focus | \`--color-surfaces-container\`, \`--stroke-150\`, \`--color-primary-primary\` |
| validation | \`--color-success-success-overlay\` / \`--color-success-success\`; \`--color-error-error-overlay\` / \`--color-error-error\` |
| calendar action | \`--color-text-icon-secondary\`, \`--stroke-200\`, \`--color-primary-primary\`, \`--radius-1000\` |
| disabled | \`--color-disabled-disabled\`, \`--color-disabled-disabled-inverse\` |
| labels / helper | reused InputLabel and HelperString token recipes |
| layout / shape | \`--space-050\`, \`--space-100\`, \`--space-200\`, \`--space-800\`, \`--radius-200\` |

Figma intrinsic geometry is a 136px-wide, 40px-high date field with a 24px
calendar slot. Range fields use the Figma \`--space-800\` (48px) gap and wrap
when their container is narrower.

## Accessibility

- Each visible label is a real \`<label htmlFor>\` that focuses its text input.
  Supply an \`aria-label\` for a labelless single field.
- The calendar is a labelled icon-only button that invokes the browser’s native
  picker; it has a tokenized keyboard focus ring.
- Error state applies \`aria-invalid\` and Helper String is wired through
  \`aria-describedby\`; disabled state blocks typing and calendar actions.
- Parent forms should validate calendar ordering for ranges and any product
  rules such as minimum/maximum dates.

## Do / Don't

| Do | Don't |
| --- | --- |
| Use the \`MM/DD/YY\` display contract consistently within a product flow. | Mix regional date formats in adjacent controls. |
| Use range mode when one helper and validation rule cover both dates. | Build a date range from unrelated single controls. |
| Validate date availability and ordering in the parent form. | Treat formatting as proof the date is allowed. |
| Let users type or choose from their platform picker. | Add a custom calendar panel without an approved calendar design. |
`,
      },
    },
  },
  tags: ['autodocs'],
  args: {
    label: 'Select date',
    required: false,
    showLabelInfo: true,
    showHelper: true,
    status: 'default',
    disabled: false,
    onValueChange: fn(),
    onRangeValueChange: fn(),
  },
  argTypes: {
    mode: { control: 'inline-radio', options: ['single', 'range'], table: { category: 'Appearance' } },
    label: { control: 'text', table: { category: 'Content' } },
    startLabel: { control: 'text', table: { category: 'Content' } },
    endLabel: { control: 'text', table: { category: 'Content' } },
    helperText: { control: 'text', table: { category: 'Content' } },
    showLabelInfo: { control: 'boolean', table: { category: 'Content' } },
    required: { control: 'boolean', table: { category: 'State' } },
    status: {
      control: 'inline-radio',
      options: ['default', 'success', 'error'],
      table: { category: 'State' },
    },
    disabled: { control: 'boolean', table: { category: 'State' } },
    showHelper: { control: 'boolean', table: { category: 'Behavior' } },
    value: { control: 'text', table: { category: 'Behavior' } },
    defaultValue: { control: 'text', table: { category: 'Behavior' } },
    rangeValue: { control: false, table: { category: 'Behavior' } },
    defaultRangeValue: { control: false, table: { category: 'Behavior' } },
    onValueChange: { action: 'valueChange', table: { category: 'Events' } },
    onRangeValueChange: { action: 'rangeValueChange', table: { category: 'Events' } },
    'aria-label': { control: 'text', table: { category: 'Behavior' } },
  },
} satisfies Meta<typeof DateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Interactive playground — drive every prop from the Controls panel below. */
export const Playground: Story = {};

export const Modes: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'The Figma single and double variants. Range uses the 48px `--space-800` gap ' +
          'and exposes one helper string for the full interval.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
      <DateInput label="Select date" showLabelInfo />
      <DateInput mode="range" showLabelInfo />
    </div>
  ),
};

export const FilledValues: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Prepopulated values preserve the Figma display format. The native calendar actions ' +
          'can update either field independently while each value remains controlled or uncontrolled.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
      <DateInput label="Appointment date" defaultValue="09/30/26" helperText="Local date" />
      <DateInput
        mode="range"
        defaultRangeValue={{ start: '09/30/26', end: '10/03/26' }}
      />
    </div>
  ),
};

export const States: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Focus a default field to view the primary Figma typing border. Success and error use ' +
          'the shared cake& semantic overlays; disabled blocks text entry and picker activation.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <DateInput label="Default / focus to edit" />
      <DateInput label="Success" defaultValue="09/30/26" status="success" helperText="Date available" />
      <DateInput label="Error" status="error" helperText="Choose a valid date" />
      <DateInput label="Disabled" disabled />
    </div>
  ),
};

export const AllVariants: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'The QA matrix covers the Figma single/range variants alongside filled, validation, ' +
          'and disabled states. Audit under both themes with the Theme toolbar.',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <DateInput label="Resting" showLabelInfo />
      <DateInput label="Filled" defaultValue="09/30/26" />
      <DateInput label="Error" status="error" helperText="Choose a valid date" />
      <DateInput label="Disabled" disabled />
      <DateInput mode="range" />
      <DateInput mode="range" status="success" helperText="Date range available" />
    </div>
  ),
};

/** Pure interaction test (hidden from docs): typing formats a date and announces it through onValueChange. */
export const FormatsDate: Story = {
  tags: ['!autodocs'],
  args: { label: 'Meeting date', helperText: undefined, onValueChange: fn() },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('Meeting date');

    await userEvent.type(input, '010126');
    await expect(args.onValueChange).toHaveBeenLastCalledWith('01/01/26');
    await expect(input).toHaveValue('01/01/26');
  },
};
