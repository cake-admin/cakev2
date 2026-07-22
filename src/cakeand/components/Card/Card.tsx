import React from 'react';
import styled from 'styled-components';

export type CardElevation = 'low' | 'high';

/** elevation → cake& shadow token (see cake-vars.css `--elevation-*`). */
const ELEVATION: Record<CardElevation, string> = {
  low: 'var(--elevation-low)',
  high: 'var(--elevation-high)',
};

/**
 * cake& Card — an elevated surface that frames a slot of content (Figma
 * `&Card`, node 182:11794). It is a container and nothing more: a rounded
 * `--radius-400` (24px) `--color-surfaces-container` surface that lifts off the
 * page with a token drop shadow and clips its content to the rounded corners.
 * What goes inside is yours — plain content, or the card templates that slot in.
 *
 * Being presentational, Card wraps no Radix primitive (there is none for a
 * surface, and nothing interactive to delegate) — it renders a semantic
 * `<div>`, the same call the static **Badge** makes. Every value resolves from
 * cake& token custom properties, so the **Theme** toolbar re-themes it live.
 *
 * The slot is flush — Card adds no inner padding — so edge-to-edge media reaches
 * the corners (that's what `overflow: hidden` is for). Content that needs insets
 * brings its own padding (the templates do).
 */

const Root = styled.div<{ $elevation: CardElevation }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  /* Clip children to the rounded corners so media/backgrounds bleed to the edge. */
  overflow: hidden;
  border-radius: var(--radius-400);
  background: var(--color-surfaces-container);
  box-shadow: ${(p) => ELEVATION[p.$elevation]};
`;

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The card's content — plain nodes, or a card template that slots in. */
  children?: React.ReactNode;
  /**
   * Drop-shadow depth (Figma `elevation`). `low` is the resting card (Figma
   * `elevation/0`); `high` lifts it further for raised/floating contexts. Both
   * resolve from the cake& `--elevation-*` tokens.
   * @default 'low'
   */
  elevation?: CardElevation;
}

/**
 * An elevated container. Give it content (or a card template) as `children`;
 * it supplies the surface, corner radius, and shadow.
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, elevation = 'low', ...props }, ref) => (
    <Root ref={ref} $elevation={elevation} {...props}>
      {children}
    </Root>
  ),
);

Card.displayName = 'Card';

export default Card;
