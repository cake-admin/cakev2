import React from 'react';
import styled from 'styled-components';
import { Tabs as RadixTabs } from 'radix-ui';

/**
 * cake& VerticalTabItem — a top-level row in a vertical tab rail (Figma
 * ".elements/vert_tab_item", node 145:8456).
 *
 * It's a Radix `Tabs.Trigger`, so selection, roving Up/Down focus, and the
 * `role="tab"` / `aria-selected` / panel wiring all come from the primitive —
 * this only supplies the cake& skin. Figma's `state` axis
 * (default/hover/press/disabled) maps to CSS pseudo-classes and the `disabled`
 * prop; its `status` axis (selected / not selected) maps to Radix's
 * `data-state`, so nothing here tracks selection by hand.
 *
 * Must be rendered inside `VerticalTabsList` within `VerticalTabs` — Radix
 * `Tabs.Trigger` needs that context.
 */

/* Figma 145:8457 intrinsic geometry: the 32px row and the 4x16px selected
   indicator that sits on the leading edge. */
const ROW_HEIGHT = 32;
const INDICATOR_WIDTH = 4;
const INDICATOR_HEIGHT = 16;

const Trigger = styled(RadixTabs.Trigger)`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--space-300);
  width: 100%;
  height: ${ROW_HEIGHT}px;
  padding: var(--space-050) var(--space-100) var(--space-050) var(--space-300);
  border: none;
  appearance: none;
  border-radius: var(--radius-150);
  background: transparent;
  color: var(--color-text-icon-primary);
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.1px;
  line-height: 1.35;
  text-align: left;
  cursor: pointer;
  overflow: hidden;
  transition: background 120ms ease;

  /* Not selected (Figma status="not selected 2"). */
  &:hover:not(:disabled) {
    background: var(--color-tonal-tonal-secondary-overlay-hover);
  }
  &:active:not(:disabled) {
    background: var(--color-tonal-tonal-secondary-overlay-press);
  }

  /* Selected — Radix drives data-state, so selection is never tracked here. */
  &[data-state='active'] {
    background: var(--color-tonal-tonal-overlay);
    color: var(--color-primary-primary);
    font-weight: var(--font-weight-bold);
  }
  &[data-state='active']:hover:not(:disabled) {
    background: var(--color-tonal-tonal-overlay-hover);
  }
  &[data-state='active']:active:not(:disabled) {
    background: var(--color-tonal-tonal-overlay-press);
  }

  /* The leading indicator. Figma drops it on the disabled+selected variant, so
     it's tied to :not(:disabled) rather than to selection alone. */
  &[data-state='active']:not(:disabled)::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: ${INDICATOR_WIDTH}px;
    height: ${INDICATOR_HEIGHT}px;
    border-radius: var(--radius-1000);
    background: var(--color-primary-primary);
  }

  /* Disabled wins over the selected treatment (matching Figma: no fill, no
     indicator, and back to medium weight). */
  &:disabled {
    cursor: not-allowed;
    background: transparent;
    color: var(--color-disabled-disabled-inverse);
    font-weight: var(--font-weight-medium);
  }

  &:focus {
    outline: none;
  }
  &:focus-visible {
    outline: var(--stroke-200) solid var(--color-primary-primary);
    outline-offset: calc(-1 * var(--stroke-200));
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/** Truncates a long label rather than letting it wrap the fixed-height row. */
const Label = styled.span`
  flex: 1 1 0%;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export interface VerticalTabItemProps
  extends React.ComponentPropsWithoutRef<typeof RadixTabs.Trigger> {
  /** Value linking this row to its `VerticalTabsContent` panel. */
  value: string;
  /** The row label. */
  children: React.ReactNode;
  /** Dims the row and drops it from the tab order. @default false */
  disabled?: boolean;
}

export const VerticalTabItem = React.forwardRef<HTMLButtonElement, VerticalTabItemProps>(
  ({ children, ...props }, ref) => (
    <Trigger ref={ref} {...props}>
      <Label>{children}</Label>
    </Trigger>
  ),
);

VerticalTabItem.displayName = 'VerticalTabItem';

export default VerticalTabItem;
