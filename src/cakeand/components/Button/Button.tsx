import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import styled, { css, type DefaultTheme } from 'styled-components';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export type ButtonIntent = 'primary' | 'secondary';
export type ButtonVariant = 'fill' | 'outline' | 'tonal' | 'ghost';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Height + type scale: `xs` 24px, `sm` 32px, `md` 40px, `lg` 48px tall.
   * All sizes use the bold body type role except `lg`, which steps up to
   * `bold.subject`.
   * @default 'md'
   */
  size?: ButtonSize;
  /**
   * Which cake& token family drives the color: `primary` (indigo family) or
   * `secondary` (neutral/ink family).
   * @default 'primary'
   */
  intent?: ButtonIntent;
  /**
   * Emphasis treatment, highest → lowest: `fill` (the one main action in a
   * view), `outline` and `tonal` (secondary emphasis), `ghost` (lowest —
   * dense UIs, toolbars, inline actions).
   * @default 'fill'
   */
  variant?: ButtonVariant;
  /**
   * Leading icon, rendered in a fixed 16px slot before the label. Icons are
   * decorative — the text label carries the accessible name. Do not use this
   * to build icon-only buttons; that's the (separate) IconButton component.
   */
  startIcon?: React.ReactNode;
  /**
   * Trailing icon, rendered in a fixed 16px slot after the label. Same rules
   * as `startIcon`.
   */
  endIcon?: React.ReactNode;
  /**
   * Render into the single child element instead of a `<button>`, merging the
   * Button's props and styles onto it (Radix `Slot`). Use for link-buttons:
   * `asChild` + `<a href>` renders a real anchor — keyboard and assistive tech
   * see a link. `type` is not forced when `asChild` is set.
   * @default false
   */
  asChild?: boolean;
  /**
   * Stretch to the container's width (not the viewport). For stacked layouts
   * like dialog footers and mobile forms.
   * @default false
   */
  fullWidth?: boolean;
}

/** Height + font size per size step (font sizes come from the type scale). */
const sizeStyles = (size: ButtonSize) => {
  const map = {
    xs: css`
      height: 24px;
      font-size: ${(p) => p.theme.typography.bold.body.fontSize};
    `,
    sm: css`
      height: 32px;
      font-size: ${(p) => p.theme.typography.bold.body.fontSize};
    `,
    md: css`
      height: 40px;
      font-size: ${(p) => p.theme.typography.bold.body.fontSize};
    `,
    lg: css`
      height: 48px;
      font-size: ${(p) => p.theme.typography.bold.subject.fontSize};
    `,
  } as const;
  return map[size];
};

/** stateLayer padding per size (tonal+md uses a tighter inset, matching Figma). */
const padFor = (size: ButtonSize, variant: ButtonVariant) => {
  if (variant === 'tonal' && size === 'md') return '8px 12px';
  return { xs: '4px 12px', sm: '8px 14px', md: '10px 16px', lg: '12px 20px' }[size];
};

/** intent × variant → background / text / border + hover/press, all from tokens. */
const colorStyles = (theme: DefaultTheme, intent: ButtonIntent, variant: ButtonVariant) => {
  const c = theme.color;
  const p = intent === 'primary';

  if (variant === 'fill') {
    return p
      ? css`
          background: ${c.primary.primary};
          color: ${c.textIcon.onPrimary};
          &:hover:not(:disabled) { background: ${c.primary.primaryHover}; }
          &:active:not(:disabled) { background: ${c.primary.primaryPress}; }
        `
      : css`
          background: ${c.secondary.secondary};
          color: ${c.textIcon.inverse};
          &:hover:not(:disabled) { background: ${c.secondary.secondaryHover}; }
          &:active:not(:disabled) { background: ${c.secondary.secondaryPress}; }
        `;
  }

  if (variant === 'outline') {
    return p
      ? css`
          background: ${c.surfaces.container};
          color: ${c.primary.primary};
          border: 2px solid ${c.primary.primary};
          &:hover:not(:disabled) { background: ${c.primary.primaryOverlay}; }
          &:active:not(:disabled) { background: ${c.primary.primaryOverlayHover}; }
        `
      : css`
          background: ${c.surfaces.container};
          color: ${c.secondary.secondary};
          border: 2px solid ${c.secondary.secondary};
          &:hover:not(:disabled) { background: ${c.secondary.secondaryOverlay}; }
          &:active:not(:disabled) { background: ${c.secondary.secondaryOverlayHover}; }
        `;
  }

  if (variant === 'tonal') {
    return p
      ? css`
          background: ${c.tonal.tonal};
          color: ${c.textIcon.onTonalInverse};
          &:hover:not(:disabled) { background: ${c.tonal.tonalHover}; }
          &:active:not(:disabled) { background: ${c.tonal.tonalPress}; }
        `
      : css`
          background: ${c.tonal.tonalSecondaryOverlay};
          color: ${c.textIcon.onTonalSecondary};
          &:hover:not(:disabled) { background: ${c.tonal.tonalSecondaryOverlayHover}; }
          &:active:not(:disabled) { background: ${c.tonal.tonalSecondaryOverlayPress}; }
        `;
  }

  // ghost
  return p
    ? css`
        background: transparent;
        color: ${c.primary.primary};
        &:hover:not(:disabled) { background: ${c.primary.primaryOverlay}; }
        &:active:not(:disabled) { background: ${c.primary.primaryOverlayHover}; }
      `
    : css`
        background: transparent;
        color: ${c.secondary.secondary};
        &:hover:not(:disabled) { background: ${c.secondary.secondaryOverlay}; }
        &:active:not(:disabled) { background: ${c.secondary.secondaryOverlayHover}; }
      `;
};

/** Disabled treatment differs for bordered/transparent variants. */
const disabledStyles = (theme: DefaultTheme, variant: ButtonVariant) => {
  const c = theme.color;
  const base = css`
    cursor: not-allowed;
    pointer-events: none;
  `;
  if (variant === 'outline') {
    return css`
      &:disabled, &[aria-disabled='true'] {
        ${base}
        background: ${c.surfaces.container};
        border-color: ${c.disabled.disabled};
        color: ${c.disabled.disabledInverse};
      }
    `;
  }
  if (variant === 'ghost') {
    return css`
      &:disabled, &[aria-disabled='true'] {
        ${base}
        background: transparent;
        color: ${c.disabled.disabledInverse};
      }
    `;
  }
  return css`
    &:disabled, &[aria-disabled='true'] {
      ${base}
      background: ${c.disabled.disabled};
      color: ${c.disabled.disabledInverse};
      border-color: transparent;
    }
  `;
};

const StyledButton = styled.button<{
  $size: ButtonSize;
  $intent: ButtonIntent;
  $variant: ButtonVariant;
  $fullWidth: boolean;
}>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${(p) => (p.$fullWidth ? '100%' : 'auto')};
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-family: ${(p) => p.theme.font.family};
  font-weight: ${(p) => p.theme.typography.bold.body.fontWeight};
  border-radius: ${(p) => p.theme.radius.pill};
  transition: background-color 120ms ease, color 120ms ease, border-color 120ms ease,
    box-shadow 120ms ease;

  ${(p) => sizeStyles(p.$size)}
  ${(p) => colorStyles(p.theme, p.$intent, p.$variant)}
  ${(p) => disabledStyles(p.theme, p.$variant)}

  &:focus {
    outline: none;
  }
  &:focus-visible::after {
    content: '';
    position: absolute;
    inset: -2px;
    border: 3px solid ${(p) => p.theme.color.primary.primary};
    border-radius: ${(p) => p.theme.radius.pill};
    pointer-events: none;
  }
`;

const StateLayer = styled.span<{ $size: ButtonSize; $variant: ButtonVariant }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${(p) => (p.$variant === 'tonal' && p.$size === 'md' ? p.theme.space.xs : p.theme.space.sm)};
  width: 100%;
  height: 100%;
  padding: ${(p) => padFor(p.$size, p.$variant)};
`;

const IconSlot = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  align-items: center;
  justify-content: center;
`;

const Label = styled.span`
  white-space: nowrap;
  line-height: 1.35;
`;

/**
 * cake& Button — pill-shaped, token-driven, built on Radix `Slot` for `asChild`
 * polymorphism. Cross of intent (primary/secondary) × variant
 * (fill/outline/tonal/ghost) × size (xs/sm/md/lg).
 *
 * Renders `<button type="button">` unless `asChild` is set. Disabled buttons
 * use the native `disabled` attribute plus `pointer-events: none`, and the
 * `[aria-disabled='true']` styling hook is supported for asChild targets that
 * can't take `disabled`.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = 'md',
      intent = 'primary',
      variant = 'fill',
      startIcon,
      endIcon,
      asChild = false,
      fullWidth = false,
      children,
      type = 'button',
      ...props
    },
    ref,
  ) => {
    return (
      <StyledButton
        as={asChild ? Slot : undefined}
        ref={ref}
        type={asChild ? undefined : type}
        $size={size}
        $intent={intent}
        $variant={variant}
        $fullWidth={fullWidth}
        {...props}
      >
        <StateLayer $size={size} $variant={variant}>
          {startIcon ? <IconSlot>{startIcon}</IconSlot> : null}
          <Label>{children}</Label>
          {endIcon ? <IconSlot>{endIcon}</IconSlot> : null}
        </StateLayer>
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';
