import React from 'react';
import { Switch as RadixSwitch } from 'radix-ui';
import styled from 'styled-components';

/**
 * cake& Switch — a Radix `Switch` primitive styled to the cake& "Toggle"
 * component spec (Figma node 42:1850).
 *
 * Radix owns the accessibility + state machine (role, keyboard, `data-state`);
 * cake& owns the visuals via styled-components reading from `props.theme`.
 *
 * Spec geometry: 38×24 track, 18px thumb inset 3px; while pressed the thumb
 * stretches to 27px (anchored to the side it's on) and springs back on
 * release.
 */
const Thumb = styled(RadixSwitch.Thumb)`
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  background: ${(p) => p.theme.color.surfaces.container};
  border-radius: ${(p) => p.theme.radius.pill};
  transition: left 150ms ease, width 150ms ease, background 150ms ease;
  will-change: left, width;

  &[data-state='checked'] {
    left: 17px;
  }
  &[data-disabled] {
    background: ${(p) => p.theme.color.disabled.disabled};
  }
`;

const Track = styled(RadixSwitch.Root)`
  all: unset;
  box-sizing: border-box;
  position: relative;
  width: 38px;
  height: 24px;
  flex-shrink: 0;
  border-radius: ${(p) => p.theme.radius.pill};
  background: ${(p) => p.theme.color.secondary.secondary};
  cursor: pointer;
  transition: background 150ms ease;

  &:hover {
    background: ${(p) => p.theme.color.secondary.secondaryHover};
  }
  /* Pressed (off): track holds its default color — feedback is the thumb stretch. */
  &:active:not([data-disabled]) {
    background: ${(p) => p.theme.color.secondary.secondary};
  }
  &[data-state='checked'] {
    background: ${(p) => p.theme.color.primary.primary};
  }
  &[data-state='checked']:hover {
    background: ${(p) => p.theme.color.primary.primaryHover};
  }
  &[data-state='checked']:active:not([data-disabled]) {
    background: ${(p) => p.theme.color.primary.primaryPress};
  }

  /* Pressed thumb stretch: 18 → 27px, anchored to the side it sits on
     (off: left edge stays at 3px; on: right edge stays at 3px → left 8px). */
  &:active:not([data-disabled]) ${Thumb} {
    width: 27px;
  }
  &:active:not([data-disabled]) ${Thumb}[data-state='checked'] {
    left: 8px;
  }

  /* Focus ring: 2px primary stroke sitting 2px outside the track. */
  &:focus-visible::after {
    content: '';
    position: absolute;
    inset: -4px;
    border: 2px solid ${(p) => p.theme.color.primary.primary};
    border-radius: ${(p) => p.theme.radius.pill};
    pointer-events: none;
  }

  &[data-disabled] {
    background: ${(p) => p.theme.color.disabled.disabledInverse};
    cursor: not-allowed;
  }
`;

const Label = styled.label`
  display: inline-flex;
  align-items: center;
  gap: ${(p) => p.theme.space.sm};
  font-family: ${(p) => p.theme.typography.regular.body.fontFamily};
  font-size: ${(p) => p.theme.typography.regular.body.fontSize};
  color: ${(p) => p.theme.color.textIcon.primary};
  cursor: pointer;

  &:has([data-disabled]) {
    color: ${(p) => p.theme.color.disabled.disabledInverse};
    cursor: not-allowed;
  }
`;

export interface SwitchProps {
  /**
   * Controlled checked state. Pair with `onCheckedChange` and own the state
   * yourself; leave undefined to let the switch manage its own state
   * (uncontrolled, seeded by `defaultChecked`).
   */
  checked?: boolean;
  /**
   * Initial checked state for uncontrolled usage. Ignored when `checked` is
   * provided.
   * @default false
   */
  defaultChecked?: boolean;
  /** Fired with the next checked state whenever the user toggles. */
  onCheckedChange?: (checked: boolean) => void;
  /**
   * Disables the switch (Radix sets `data-disabled`; the label dims and the
   * cursor changes).
   * @default false
   */
  disabled?: boolean;
  /**
   * Visible text label rendered next to the switch and wired via
   * `<label htmlFor>` — clicking it toggles. When omitted, pass `aria-label`
   * instead so the control keeps an accessible name.
   */
  label?: string;
  /**
   * Accessible name for labelless usage. Required whenever `label` is omitted.
   */
  'aria-label'?: string;
  /** Form field name. */
  name?: string;
  /** Explicit id (auto-generated when omitted). */
  id?: string;
}

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ label, id, ...props }, ref) => {
    const generatedId = React.useId();
    const switchId = id ?? generatedId;

    const control = (
      <Track id={switchId} ref={ref} {...props}>
        <Thumb />
      </Track>
    );

    if (!label) return control;

    return (
      <Label htmlFor={switchId}>
        {control}
        <span>{label}</span>
      </Label>
    );
  }
);

Switch.displayName = 'Switch';

export default Switch;
