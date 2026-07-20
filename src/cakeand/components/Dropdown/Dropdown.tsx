import React from 'react';
import { Select as RadixSelect } from 'radix-ui';
import styled from 'styled-components';
import { ChevronDown } from 'lucide-react';

import { InputLabel } from '../Elements/InputLabel';
import { HelperString, type HelperTone } from '../Elements/HelperString';
import { nativeScrollbarStyles } from '../Elements/Scrollbar';

/**
 * cake& Dropdown — a single-select field (Figma "Dropdowns", node 62:3493),
 * composed from the reusable form elements: `InputLabel` above, the select
 * trigger, and `HelperString` below. Built on the Radix `Select` primitive so
 * Radix owns behavior + accessibility (roles, typeahead, arrow-key roving
 * focus, Escape to close, `data-state`); cake& owns the visuals.
 *
 * Every color/spacing/radius/stroke value resolves from the cake& token custom
 * properties, whose names mirror the Figma variables 1:1 and re-theme via
 * `[data-theme]`.
 *
 * State model (matching the Figma variants):
 *  - default (no value): `--color-surfaces-on-container-high` fill,
 *    `--color-stroke-border` hairline; hover raises it to `--color-stroke-border-high`.
 *  - open (`data-state=open`): white `--color-surfaces-container` fill with a
 *    `--stroke-150` `--color-primary-primary` border; the arrow flips up.
 *  - finish selecting (has value): keeps the greyish fill with the
 *    `--color-stroke-border-high` border and shows the value.
 *  - disabled: flat `--color-disabled-disabled` fill, no border.
 *
 * Deviations from Figma (design corrections, verified against tokens.json):
 *  - Figma's `elevation/3` popover shadow has no 1:1 token; the menu uses
 *    `--elevation-high`, the design system's designated popover elevation.
 *  - Figma's "finish selecting" rendered the chosen value in placeholder grey;
 *    the value here uses `--color-text-icon-primary` (correct semantic, and it
 *    matches the open-state trigger text).
 */

/** Trigger height + arrow slot size (Figma 40pt trigger, 24px arrow). */
const TRIGGER_HEIGHT = 40;
const ARROW_SIZE = 24;
/** Menu item row height (Figma "&menu.items", 36pt). */
const ITEM_HEIGHT = 36;

export interface DropdownOption {
  /** Visible text for the option. */
  label: string;
  /** Value committed to the field when the option is chosen. */
  value: string;
  /** Dims and blocks selection of this single option. @default false */
  disabled?: boolean;
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-050);
  width: 100%;
  font-family: var(--font-family);
`;

/** Label + trigger group (tighter than the helper gap, per the Figma stack). */
const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-100);
  width: 100%;
`;

const Trigger = styled(RadixSelect.Trigger)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--space-100);
  width: 100%;
  height: ${TRIGGER_HEIGHT}px;
  padding: 0 var(--space-200);
  border-radius: var(--radius-200);
  background: var(--color-surfaces-on-container-high);
  border: var(--stroke-100) solid var(--color-stroke-border);
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  color: var(--color-text-icon-primary);
  cursor: pointer;
  outline: none;
  transition: background 120ms ease, border-color 120ms ease;

  &:hover:not([data-state='open']):not(:disabled) {
    border-color: var(--color-stroke-border-high);
  }

  /* Finished selecting: a chosen field keeps the greyish surface with the
     darker resting border (Figma "finish selecting"). */
  &[data-has-value='true']:not([data-state='open']) {
    border-color: var(--color-stroke-border-high);
  }

  /* Open: white surface + 1.5px primary border (Figma "clicked"). */
  &[data-state='open'] {
    background: var(--color-surfaces-container);
    border: var(--stroke-150) solid var(--color-primary-primary);
  }

  &:focus-visible {
    border: var(--stroke-150) solid var(--color-primary-primary);
  }

  &:disabled {
    background: var(--color-disabled-disabled);
    border-color: transparent;
    color: var(--color-disabled-disabled-inverse);
    cursor: not-allowed;
  }
`;

/** Value slot — placeholder stays placeholder-colored; a chosen value is primary. */
const Value = styled(RadixSelect.Value)`
  flex: 1;
  min-width: 0;
  padding: 0 var(--space-100);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  line-height: 1.35;
  color: var(--color-text-icon-primary);

  /* Placeholder (no selection) stays placeholder-colored. */
  &[data-placeholder],
  ${Trigger}:not([data-has-value='true']) & {
    color: var(--color-text-icon-placeholder);
  }

  ${Trigger}:disabled & {
    color: var(--color-disabled-disabled-inverse);
  }
`;

/** 24px arrow — pinned to the trailing edge; flips to "up" while open. */
const Arrow = styled(RadixSelect.Icon)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-left: auto;
  width: ${ARROW_SIZE}px;
  height: ${ARROW_SIZE}px;
  color: currentColor;
  transition: transform 150ms ease;

  ${Trigger}[data-state='open'] & {
    transform: rotate(180deg);
  }

  & > svg {
    width: 100%;
    height: 100%;
  }
`;

const Content = styled(RadixSelect.Content)`
  z-index: 1;
  width: var(--radix-select-trigger-width);
  max-height: var(--radix-select-content-available-height);
  background: var(--color-surfaces-container);
  border-radius: var(--radius-300);
  box-shadow: var(--elevation-high);
  overflow: hidden;
`;

const Viewport = styled(RadixSelect.Viewport)`
  padding: var(--space-100);
  display: flex;
  flex-direction: column;
  gap: var(--space-050);

  /* Native-overflow scrollbar shared with the Scrollbar element, so Radix
     Select's own viewport matches every other cake& scrollbar. */
  ${nativeScrollbarStyles}
`;

const Item = styled(RadixSelect.Item)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--space-100);
  width: 100%;
  min-height: ${ITEM_HEIGHT}px;
  padding: var(--space-100);
  border-radius: var(--radius-200);
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  line-height: 1.35;
  color: var(--color-secondary-secondary);
  cursor: pointer;
  outline: none;
  user-select: none;

  /* Highlighted (pointer/keyboard) — Figma menu-item hover. */
  &[data-highlighted] {
    background: var(--color-tonal-tonal-secondary-overlay-hover);
    color: var(--color-text-icon-on-tonal-secondary);
  }

  /* Press — Figma menu-item press. */
  &:active {
    background: var(--color-tonal-tonal-secondary-overlay-press);
  }

  /* Current selection — no Figma checkmark; the value carries emphasis. */
  &[data-state='checked'] {
    color: var(--color-text-icon-on-tonal-secondary);
    font-weight: var(--font-weight-medium);
  }

  &[data-disabled] {
    color: var(--color-disabled-disabled-inverse);
    cursor: not-allowed;
    pointer-events: none;
  }
`;

export interface DropdownProps {
  /** Label text above the field (renders an `InputLabel`, wired via `htmlFor`). */
  label?: string;
  /** Shows the label's 16px info icon. @default false */
  showLabelInfo?: boolean;
  /**
   * Marks the field required: appends the label's "(required)" suffix and sets
   * the Radix `required` flag.
   * @default false
   */
  required?: boolean;
  /** Helper text below the field (renders a `HelperString`, wired via `aria-describedby`). */
  helperText?: React.ReactNode;
  /** Placeholder shown in the trigger before a value is chosen. @default 'Select...' */
  placeholder?: string;
  /** The options rendered in the menu. */
  options?: DropdownOption[];
  /** Controlled selected value. */
  value?: string;
  /** Uncontrolled initial value. */
  defaultValue?: string;
  /** Fires with the new value when the selection changes. */
  onValueChange?: (value: string) => void;
  /** Dims the whole field and blocks interaction. @default false */
  disabled?: boolean;
  /** Field name for form submission. */
  name?: string;
  /** Explicit id for the trigger (defaults to a generated id wired to the label). */
  id?: string;
}

export const Dropdown = React.forwardRef<HTMLButtonElement, DropdownProps>(
  (
    {
      label,
      showLabelInfo = false,
      required = false,
      helperText,
      placeholder = 'Select...',
      options = [],
      value,
      defaultValue,
      onValueChange,
      disabled = false,
      name,
      id,
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const triggerId = id ?? generatedId;
    const helperId = `${triggerId}-helper`;

    // Track the selection (controlled or uncontrolled) so the trigger can flip
    // to its "has value" chrome per the Figma "finish selecting" state.
    const [innerValue, setInnerValue] = React.useState(defaultValue);
    const currentValue = value ?? innerValue;
    const hasValue = currentValue != null && currentValue !== '';

    const tone: HelperTone = disabled ? 'disabled' : 'greyscale';

    return (
      <Root>
        <FieldGroup>
          {label ? (
            <InputLabel
              htmlFor={triggerId}
              size="sm"
              required={required}
              showInfo={showLabelInfo}
              disabled={disabled}
            >
              {label}
            </InputLabel>
          ) : null}
          <RadixSelect.Root
            value={value}
            defaultValue={defaultValue}
            onValueChange={(next) => {
              setInnerValue(next);
              onValueChange?.(next);
            }}
            disabled={disabled}
            required={required}
            name={name}
          >
            <Trigger
              ref={ref}
              id={triggerId}
              data-has-value={hasValue}
              aria-describedby={helperText != null ? helperId : undefined}
            >
              <Value placeholder={placeholder} />
              <Arrow>
                <ChevronDown />
              </Arrow>
            </Trigger>
            <RadixSelect.Portal>
              <Content position="popper" sideOffset={4}>
                <Viewport>
                  {options.map((opt) => (
                    <Item key={opt.value} value={opt.value} disabled={opt.disabled}>
                      <RadixSelect.ItemText>{opt.label}</RadixSelect.ItemText>
                    </Item>
                  ))}
                </Viewport>
              </Content>
            </RadixSelect.Portal>
          </RadixSelect.Root>
        </FieldGroup>
        {helperText != null ? (
          <HelperString id={helperId} tone={tone}>
            {helperText}
          </HelperString>
        ) : null}
      </Root>
    );
  },
);

Dropdown.displayName = 'Dropdown';
