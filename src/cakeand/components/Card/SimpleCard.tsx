import React from 'react';
import styled from 'styled-components';

/**
 * cake& Simple Card — the vertical media card template (Figma
 * `_elements / simple card`, nodes 183:11859 / 117:1874). Content that slots
 * into a **Card**: a full-bleed media area on top, then a title with an
 * optional overflow menu, a body paragraph grouped with an actions row.
 *
 * The media is full-bleed so it reaches the card's rounded corners (the
 * enclosing **Card**'s `overflow: hidden` clips it); the rest sits in padded
 * content. It carries the layout and type scale; the media, menu, and buttons
 * are yours (compose a cake& **IconButton** into `menu` and **Button**s into
 * `actions`). Being presentational it wraps no Radix primitive. Every value
 * resolves from cake& tokens, so the **Theme** toolbar re-themes it live. Place
 * it inside a `<Card>` for the surface and elevation.
 */

const Root = styled.div<{ $stretch: boolean }>`
  display: flex;
  flex-direction: column;
  flex: ${(p) => (p.$stretch ? '1 0 0' : '0 0 auto')};
  min-height: ${(p) => (p.$stretch ? '0' : 'auto')};
  font-family: var(--font-family);
`;

/** Full-bleed media strip — no padding, so it reaches the Card's corners. */
const Media = styled.div`
  width: 100%;
  overflow: hidden;
  background: var(--color-surfaces-on-container);
  & > img,
  & > video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div<{ $stretch: boolean }>`
  display: flex;
  flex: ${(p) => (p.$stretch ? '1 0 0' : '0 0 auto')};
  flex-direction: column;
  gap: var(--space-300);
  min-height: ${(p) => (p.$stretch ? '0' : 'auto')};
  /* p-24 from Figma 117:1874 / 183:11861 */
  padding: var(--space-500);
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-200);
  flex-shrink: 0;
`;

const Title = styled.h3`
  flex: 1 0 0;
  margin: 0;
  min-width: 0;
  font-size: var(--type-size-title);
  font-weight: var(--font-weight-bold);
  line-height: 1.35;
  color: var(--color-text-icon-primary);
`;

const Menu = styled.div`
  flex-shrink: 0;
  display: inline-flex;
`;

const BodyGroup = styled.div<{ $stretch: boolean }>`
  display: flex;
  flex: ${(p) => (p.$stretch ? '1 0 0' : '0 0 auto')};
  flex-direction: column;
  gap: var(--space-500);
  min-height: ${(p) => (p.$stretch ? '0' : 'auto')};
  justify-content: ${(p) => (p.$stretch ? 'space-between' : 'flex-start')};
`;

const Text = styled.p`
  margin: 0;
  font-size: var(--type-size-subject);
  font-weight: var(--font-weight-regular);
  letter-spacing: 0.2px;
  line-height: 1.35;
  color: var(--color-text-icon-secondary);
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-300);
  flex-shrink: 0;
`;

/* `title` is redeclared as a ReactNode, so the DOM's `title?: string` (the
   tooltip attribute) is omitted rather than conflicting with it. */
export interface SimpleCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Full-bleed media on top — an image or any node; clipped to the Card's corners. */
  media?: React.ReactNode;
  /** The card title (Figma 20px `bold.20.title`). */
  title: React.ReactNode;
  /** Trailing overflow control beside the title — a cake& **IconButton** (e.g. a "⋮" menu). */
  menu?: React.ReactNode;
  /** Body paragraph (Figma 16px `regular.16`, secondary color). */
  body?: React.ReactNode;
  /** Actions row — a cake& **Button** or button group. */
  actions?: React.ReactNode;
  /**
   * When true, the card fills its container height and pins `actions` to the
   * bottom of the body block (Figma Designers card, node 117:2195).
   * @default false
   */
  stretchActions?: boolean;
}

/**
 * The vertical media card template: full-bleed media, a title with an optional
 * menu, a body, and actions. Slot it into a `<Card>` for the surface and
 * elevation.
 */
export const SimpleCard = React.forwardRef<HTMLDivElement, SimpleCardProps>(
  ({ media, title, menu, body, actions, stretchActions = false, ...props }, ref) => (
    <Root ref={ref} $stretch={stretchActions} {...props}>
      {media != null ? <Media>{media}</Media> : null}
      <Content $stretch={stretchActions}>
        <TitleRow>
          <Title>{title}</Title>
          {menu != null ? <Menu>{menu}</Menu> : null}
        </TitleRow>
        {body != null || actions != null ? (
          <BodyGroup $stretch={stretchActions}>
            {body != null ? <Text>{body}</Text> : null}
            {actions != null ? <Actions>{actions}</Actions> : null}
          </BodyGroup>
        ) : null}
      </Content>
    </Root>
  ),
);

SimpleCard.displayName = 'SimpleCard';

export default SimpleCard;
