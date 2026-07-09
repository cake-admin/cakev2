import React from 'react';
import { Switch as RadixSwitch } from 'radix-ui';
import styled from 'styled-components';

/**
 * cake& Switch — a Radix `Switch` primitive styled with cake& tokens.
 *
 * Radix owns the accessibility + state machine (role, keyboard, `data-state`);
 * cake& owns the visuals via styled-components reading from `props.theme`.
 */
const Track = styled(RadixSwitch.Root)`
  all: unset;
  box-sizing: border-box;
  width: 40px;
  height: 24px;
  flex-shrink: 0;
  border-radius: ${(p) => p.theme.radius.pill};
  background: ${(p) => p.theme.color.textIcon.placeholder};
  position: relative;
  cursor: pointer;
  transition: background 150ms ease;

  &:hover {
    background: ${(p) => p.theme.color.textIcon.secondary};
  }
  &[data-state='checked'] {
    background: ${(p) => p.theme.color.primary.primary};
  }
  &[data-state='checked']:hover {
    background: ${(p) => p.theme.color.primary.primaryHover};
  }
  &:focus-visible {
    box-shadow:
      0 0 0 2px ${(p) => p.theme.color.surfaces.canvas},
      0 0 0 4px ${(p) => p.theme.color.primary.primary};
  }
  &[data-disabled] {
    background: ${(p) => p.theme.color.disabled.disabled};
    cursor: not-allowed;
  }
`;

const Thumb = styled(RadixSwitch.Thumb)`
  display: block;
  width: 20px;
  height: 20px;
  background: #ffffff;
  border-radius: ${(p) => p.theme.radius.round};
  box-shadow: ${(p) => p.theme.elevation.low};
  transform: translateX(2px);
  transition: transform 150ms ease;
  will-change: transform;

  &[data-state='checked'] {
    transform: translateX(18px);
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
  /** Controlled checked state. */
  checked?: boolean;
  /** Uncontrolled initial checked state. */
  defaultChecked?: boolean;
  /** Fired when the checked state changes. */
  onCheckedChange?: (checked: boolean) => void;
  /** Disables the switch. */
  disabled?: boolean;
  /** Optional text label rendered next to the switch. */
  label?: string;
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
