import React from 'react';
import styled from 'styled-components';
import { ToggleGroup as RadixToggleGroup } from 'radix-ui';

import { Button } from '../Button/Button';
import { IconButton } from '../Button/IconButton';

/**
 * cake& ContentSwitcher — a segmented control for switching between a small set
 * of mutually exclusive views (Figma "&content switcher", node 149:9094).
 *
 * Wraps the Radix `ToggleGroup` primitive in single-selection mode, which
 * supplies roving arrow-key focus, `data-state`, and disabled handling. Radix
 * `ToggleGroup` (rather than `Tabs`) because a switcher is a *control*: it
 * doesn't require panels, so nothing here emits an `aria-controls` pointing at
 * a panel that may not exist. Drive whatever you're switching off the value.
 *
 * The segments are the existing cake& **Button** and **IconButton** rather than
 * bespoke markup — Figma builds them from `&button` / `&icon button`, and the
 * selected/unselected treatments map exactly onto the `fill` and `ghost`
 * variants.
 */

/** Figma "elevation/0": the selected segment lifts off the track. */
const SELECTED_SHADOW = `
  0 1px 2px 0 var(--color-elevation-drop-shadow-light),
  0 0 4px 0 var(--color-elevation-drop-shadow-heavy)
`;

export type ContentSwitcherSize = 'sm' | 'md';
export type ContentSwitcherIntent = 'primary' | 'secondary';

const Track = styled(RadixToggleGroup.Root)<{
  $intent: ContentSwitcherIntent;
  $size: ContentSwitcherSize;
}>`
  display: inline-flex;
  align-items: center;
  gap: var(--space-025);
  border-radius: var(--radius-1000);
  background: ${(p) =>
    p.$intent === 'primary'
      ? 'var(--color-primary-primary-overlay)'
      : 'var(--color-secondary-secondary-overlay)'};
  /* Figma insets the medium track by 2px; the small track sits flush. */
  padding: ${(p) => (p.$size === 'md' ? 'var(--space-025)' : '0')};
`;

/** Radix puts `data-state="on"` on the selected item; that's the only hook the
 *  segments need on top of the Button/IconButton variants. */
const SegmentButton = styled(Button)`
  &[data-state='on'] {
    box-shadow: ${SELECTED_SHADOW};
  }
`;

const SegmentIconButton = styled(IconButton)`
  &[data-state='on'] {
    box-shadow: ${SELECTED_SHADOW};
  }
`;

export interface ContentSwitcherOption {
  /** Identifies the segment; this is what `onValueChange` reports. */
  value: string;
  /** Visible label — or, when `iconOnly`, the segment's accessible name. */
  label: string;
  /** Glyph for the segment. Required when `iconOnly`. */
  icon?: React.ReactNode;
  /** Dims the segment and skips it in arrow-key navigation. @default false */
  disabled?: boolean;
}

export interface ContentSwitcherProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof RadixToggleGroup.Root>,
    'type' | 'value' | 'defaultValue' | 'onValueChange' | 'children'
  > {
  /** The segments, in order. */
  options: ContentSwitcherOption[];
  /** Selected segment's value (controlled). */
  value?: string;
  /** Initially selected segment's value (uncontrolled). */
  defaultValue?: string;
  /** Fires with the newly selected value. Never fires with an empty value. */
  onValueChange?: (value: string) => void;
  /** Segment height: `sm` 32px, `md` 40px. @default 'md' */
  size?: ContentSwitcherSize;
  /**
   * Which token family drives the colors (Figma `style`): `primary` (indigo) or
   * `secondary` (neutral/ink).
   * @default 'primary'
   */
  intent?: ContentSwitcherIntent;
  /** Render icon-only segments; each option's `label` becomes its accessible name. */
  iconOnly?: boolean;
  /** Accessible name for the group — always provide one. */
  'aria-label'?: string;
}

export const ContentSwitcher = React.forwardRef<HTMLDivElement, ContentSwitcherProps>(
  (
    {
      options,
      value,
      defaultValue,
      onValueChange,
      size = 'md',
      intent = 'primary',
      iconOnly = false,
      ...props
    },
    ref,
  ) => {
    const [uncontrolled, setUncontrolled] = React.useState(defaultValue ?? options[0]?.value);
    const selected = value ?? uncontrolled;

    /* Radix's single ToggleGroup clears the value when you re-press the active
       item. A switcher must always have exactly one view selected, so an empty
       result is dropped rather than allowed through. */
    const handleChange = (next: string) => {
      if (!next) return;
      if (value === undefined) setUncontrolled(next);
      onValueChange?.(next);
    };

    return (
      <Track
        ref={ref}
        type="single"
        value={selected}
        onValueChange={handleChange}
        $intent={intent}
        $size={size}
        {...props}
      >
        {options.map((option) => {
          const isSelected = option.value === selected;
          const variant = isSelected ? 'fill' : 'ghost';

          return (
            <RadixToggleGroup.Item key={option.value} value={option.value} asChild>
              {iconOnly ? (
                <SegmentIconButton
                  label={option.label}
                  icon={option.icon}
                  size={size}
                  intent={intent}
                  variant={variant}
                  disabled={option.disabled}
                />
              ) : (
                <SegmentButton
                  size={size}
                  intent={intent}
                  variant={variant}
                  /* The track already reads as a control, so the ghost/secondary
                     link underline would be noise here. */
                  underline={false}
                  startIcon={option.icon}
                  disabled={option.disabled}
                >
                  {option.label}
                </SegmentButton>
              )}
            </RadixToggleGroup.Item>
          );
        })}
      </Track>
    );
  },
);

ContentSwitcher.displayName = 'ContentSwitcher';

export default ContentSwitcher;
