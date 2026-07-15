import React from 'react';
import { ScrollArea } from 'radix-ui';
import styled from 'styled-components';

/**
 * cake& MenuContainer — the elevated surface/slot that holds menu content
 * (Figma "&menu.container", node 86:4569). It is a composite: it supplies the
 * container surface, padding, and scroll behavior, and renders whatever
 * children it is given — Menu Header, Menu Item, Divider, or arbitrary content
 * such as a text input.
 *
 * Scrolling is delegated to the Radix `ScrollArea` primitive; when `maxHeight`
 * is set and the content overflows, the tokenized scrollbar appears. The
 * container stays semantically neutral (no hardcoded `role="menu"`) so it can
 * host non-menu content; pass `role="menu"` when composing actual menu items.
 */

/** Figma 86:4569 intrinsic scrollbar geometry (4px bar). */
const SCROLLBAR_THUMB = 4;

const Surface = styled(ScrollArea.Root)`
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  background: var(--color-surfaces-container);
  border-radius: var(--radius-300);
  box-shadow: var(--elevation-high);
`;

const Viewport = styled(ScrollArea.Viewport)`
  width: 100%;
  height: 100%;

  /* Radix injects a layout wrapper; keep it block so the slot drives layout. */
  & > div {
    display: block !important;
  }
`;

const Slot = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-050);
  padding: var(--space-100);
`;

const Scrollbar = styled(ScrollArea.Scrollbar)`
  display: flex;
  user-select: none;
  touch-action: none;
  padding: var(--space-050);
  background: transparent;

  &[data-orientation='vertical'] {
    width: calc(${SCROLLBAR_THUMB}px + var(--space-050) + var(--space-050));
  }
`;

const Thumb = styled(ScrollArea.Thumb)`
  flex: 1;
  border-radius: var(--radius-50);
  background: var(--color-stroke-border-high);
`;

export interface MenuContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Menu content: Menu Header, Menu Item, Divider, or any custom nodes. */
  children: React.ReactNode;
  /**
   * Caps the content height and enables the Radix scroll area. When content
   * fits within this height no scrollbar is shown.
   */
  maxHeight?: number | string;
  /**
   * Container width. The Figma specimen is 320px; pass a number (px) or any CSS
   * width (e.g. `'100%'`).
   * @default 320
   */
  width?: number | string;
}

export const MenuContainer = React.forwardRef<HTMLDivElement, MenuContainerProps>(
  ({ children, maxHeight, width = 320, style, ...props }, ref) => (
    <Surface
      ref={ref}
      type="auto"
      style={{ width, maxHeight, ...style }}
      {...props}
    >
      <Viewport>
        <Slot>{children}</Slot>
      </Viewport>
      <Scrollbar orientation="vertical">
        <Thumb />
      </Scrollbar>
    </Surface>
  ),
);

MenuContainer.displayName = 'MenuContainer';

export default MenuContainer;
