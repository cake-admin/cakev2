import React from 'react';
import { Dialog as RadixDialog } from 'radix-ui';
import styled, { keyframes } from 'styled-components';
import { X } from 'lucide-react';

/**
 * cake& Dialog — a modal built on the Radix `Dialog` primitive and styled with
 * cake& tokens. Radix provides focus trapping, scroll locking, Escape-to-close,
 * and the accessible dialog semantics; cake& provides the surface + motion.
 */
const overlayShow = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const contentShow = keyframes`
  from { opacity: 0; transform: translate(-50%, -48%) scale(0.96); }
  to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
`;

const Overlay = styled(RadixDialog.Overlay)`
  position: fixed;
  inset: 0;
  background: ${(p) => p.theme.color.overlay.scrim};
  animation: ${overlayShow} 150ms ease-out;
`;

const Content = styled(RadixDialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 460px;
  max-height: 85vh;
  overflow: auto;
  background: ${(p) => p.theme.color.surfaces.container};
  color: ${(p) => p.theme.color.textIcon.primary};
  border: 1px solid ${(p) => p.theme.color.stroke.border};
  border-radius: ${(p) => p.theme.radius.lg};
  box-shadow: ${(p) => p.theme.elevation.high};
  padding: ${(p) => p.theme.space['2xl']};
  animation: ${contentShow} 150ms ease-out;

  &:focus {
    outline: none;
  }
`;

const Title = styled(RadixDialog.Title)`
  margin: 0;
  padding-right: ${(p) => p.theme.space['2xl']};
  font-family: ${(p) => p.theme.typography.medium.title.fontFamily};
  font-size: ${(p) => p.theme.typography.medium.title.fontSize};
  font-weight: ${(p) => p.theme.typography.medium.title.fontWeight};
  line-height: ${(p) => p.theme.typography.medium.title.lineHeight};
`;

const Description = styled(RadixDialog.Description)`
  margin: ${(p) => p.theme.space.sm} 0 ${(p) => p.theme.space.xl};
  font-family: ${(p) => p.theme.typography.regular.helper.fontFamily};
  font-size: ${(p) => p.theme.typography.regular.helper.fontSize};
  line-height: ${(p) => p.theme.typography.regular.helper.lineHeight};
  color: ${(p) => p.theme.color.textIcon.secondary};
`;

const CloseButton = styled(RadixDialog.Close)`
  all: unset;
  position: absolute;
  top: ${(p) => p.theme.space.lg};
  right: ${(p) => p.theme.space.lg};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: ${(p) => p.theme.radius.sm};
  color: ${(p) => p.theme.color.textIcon.secondary};
  cursor: pointer;

  &:hover {
    background: ${(p) => p.theme.color.secondary.secondaryOverlay};
    color: ${(p) => p.theme.color.textIcon.primary};
  }
  &:focus-visible {
    box-shadow: 0 0 0 2px ${(p) => p.theme.color.primary.primary};
  }
`;

export interface DialogProps {
  /** Element that opens the dialog (rendered via Radix `asChild`). */
  trigger?: React.ReactNode;
  /** Accessible dialog title (required for screen readers). */
  title: React.ReactNode;
  /** Optional supporting description. */
  description?: React.ReactNode;
  /** Dialog body (actions, form, etc.). */
  children?: React.ReactNode;
  /** Show the top-right close (X) button. */
  showClose?: boolean;
  /** Controlled open state. */
  open?: boolean;
  /** Uncontrolled initial open state. */
  defaultOpen?: boolean;
  /** Fired when the open state changes. */
  onOpenChange?: (open: boolean) => void;
}

export const Dialog = ({
  trigger,
  title,
  description,
  children,
  showClose = true,
  ...rootProps
}: DialogProps) => (
  <RadixDialog.Root {...rootProps}>
    {trigger ? (
      <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>
    ) : null}
    <RadixDialog.Portal>
      <Overlay />
      <Content>
        <Title>{title}</Title>
        {description ? <Description>{description}</Description> : null}
        {children}
        {showClose ? (
          <CloseButton aria-label="Close">
            <X size={18} aria-hidden />
          </CloseButton>
        ) : null}
      </Content>
    </RadixDialog.Portal>
  </RadixDialog.Root>
);

// Re-export the raw primitives for advanced composition when needed.
export const DialogRoot = RadixDialog.Root;
export const DialogTrigger = RadixDialog.Trigger;
export const DialogClose = RadixDialog.Close;

export default Dialog;
