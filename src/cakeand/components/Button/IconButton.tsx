import React from 'react';
import { AccessibleIcon } from 'radix-ui';
import styled, { css, type DefaultTheme } from 'styled-components';

export type IconButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export type IconButtonIntent = 'primary' | 'secondary';
export type IconButtonVariant = 'fill' | 'outline' | 'tonal' | 'ghost';

export interface IconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /**
   * Accessible name for the action (required — the button has no visible
   * text). Rendered as visually-hidden text via Radix `AccessibleIcon`, so
   * screen readers announce it while sighted users see only the icon.
   */
  label: string;
  /**
   * The icon glyph. Rendered at 16px inside the `xs` button and 24px inside
   * `sm`/`md`/`lg`; any SVG icon scales to fill the slot and inherits the
   * button's state color via `currentColor`.
   */
  icon: React.ReactNode;
  /**
   * Container diameter: `xs` 24px (16px icon), `sm` 32px, `md` 40px, `lg`
   * 48px (24px icon).
   * @default 'md'
   */
  size?: IconButtonSize;
  /**
   * Which cake& token family drives the color: `primary` (indigo family) or
   * `secondary` (neutral/ink family).
   * @default 'primary'
   */
  intent?: IconButtonIntent;
  /**
   * Emphasis treatment (Figma "container"): `fill` (solid), `outline` (1px
   * border), `tonal` (translucent overlay wash), `ghost` (bare icon, Figma
   * "none").
   * @default 'fill'
   */
  variant?: IconButtonVariant;
}

/** Container diameter → icon slot px (from the Figma set: 24→16, else 24). */
const DIAMETER: Record<IconButtonSize, number> = { xs: 24, sm: 32, md: 40, lg: 48 };
const ICON: Record<IconButtonSize, number> = { xs: 16, sm: 24, md: 24, lg: 24 };

/** variant × intent → container/icon colors + hover/press, all from tokens. */
const colorStyles = (theme: DefaultTheme, intent: IconButtonIntent, variant: IconButtonVariant) => {
  const c = theme.color;
  const p = intent === 'primary';

  if (variant === 'fill') {
    return p
      ? css`
          background: ${c.primary.primary};
          color: ${c.textIcon.inverse};
          &:hover:not(:disabled) { background: ${c.primary.primaryHover}; }
          &:active:not(:disabled) { background: ${c.primary.primaryPress}; }
        `
      : css`
          background: ${c.secondary.secondary};
          color: ${c.textIcon.onSecondary};
          &:hover:not(:disabled) { background: ${c.secondary.secondaryHover}; }
          &:active:not(:disabled) { background: ${c.secondary.secondaryPress}; }
        `;
  }

  if (variant === 'outline') {
    return p
      ? css`
          background: transparent;
          color: ${c.primary.primary};
          border: 1px solid ${c.primary.primary};
          &:hover:not(:disabled) { background: ${c.primary.primaryOverlay}; }
          &:active:not(:disabled) { background: ${c.primary.primaryOverlayHover}; }
        `
      : css`
          background: transparent;
          color: ${c.secondary.secondary};
          border: 1px solid ${c.secondary.secondary};
          &:hover:not(:disabled) { background: ${c.secondary.secondaryOverlay}; }
          &:active:not(:disabled) { background: ${c.secondary.secondaryOverlayHover}; }
        `;
  }

  if (variant === 'tonal') {
    return p
      ? css`
          background: ${c.tonal.tonalOverlay};
          color: ${c.textIcon.onTonalInverse};
          &:hover:not(:disabled) { background: ${c.tonal.tonalOverlayHover}; }
          &:active:not(:disabled) { background: ${c.tonal.tonalOverlayPress}; }
        `
      : css`
          background: ${c.tonal.tonalSecondaryOverlay};
          color: ${c.textIcon.onTonalSecondary};
          &:hover:not(:disabled) { background: ${c.tonal.tonalSecondaryOverlayHover}; }
          &:active:not(:disabled) { background: ${c.tonal.tonalSecondaryOverlayPress}; }
        `;
  }

  // ghost (Figma container=none)
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

/** Disabled: fill/outline/tonal flatten to the disabled fill (border drops);
 *  ghost keeps a transparent container — only the icon dims. */
const disabledStyles = (theme: DefaultTheme, variant: IconButtonVariant) => {
  const c = theme.color;
  return css`
    &:disabled {
      cursor: not-allowed;
      pointer-events: none;
      background: ${variant === 'ghost' ? 'transparent' : c.disabled.disabled};
      border-color: transparent;
      color: ${c.disabled.disabledInverse};
    }
  `;
};

const StyledIconButton = styled.button<{
  $size: IconButtonSize;
  $intent: IconButtonIntent;
  $variant: IconButtonVariant;
}>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
  width: ${(p) => DIAMETER[p.$size]}px;
  height: ${(p) => DIAMETER[p.$size]}px;
  border-radius: ${(p) => p.theme.radius.pill};
  transition: background-color 120ms ease, color 120ms ease, border-color 120ms ease;

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

const IconSlot = styled.span<{ $size: IconButtonSize }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${(p) => ICON[p.$size]}px;
  height: ${(p) => ICON[p.$size]}px;

  & > svg {
    width: 100%;
    height: 100%;
  }
`;

/**
 * cake& IconButton — a circular, icon-only action (Figma "&icon button",
 * node 43:1888). Same intent × variant families as Button, sized 24–48px.
 *
 * Accessibility is built on Radix `AccessibleIcon`: the required `label`
 * renders as visually-hidden text, so the button always has an accessible
 * name even though it shows only a glyph. Renders a real
 * `<button type="button">`.
 */
export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { label, icon, size = 'md', intent = 'primary', variant = 'fill', type = 'button', ...props },
    ref,
  ) => {
    return (
      <StyledIconButton ref={ref} type={type} $size={size} $intent={intent} $variant={variant} {...props}>
        <AccessibleIcon.Root label={label}>
          <IconSlot $size={size} aria-hidden>
            {icon}
          </IconSlot>
        </AccessibleIcon.Root>
      </StyledIconButton>
    );
  },
);

IconButton.displayName = 'IconButton';
