import React from 'react';
import styled, { css } from 'styled-components';

import designersLight from './assets/card-header-designers-light.png';
import designersDark from './assets/card-header-designers-dark.png';
import developersLight from './assets/card-header-developers-light.png';
import developersDark from './assets/card-header-developers-dark.png';
import resourcesLight from './assets/card-header-resources-light.png';
import resourcesDark from './assets/card-header-resources-dark.png';

export type CardHeaderIllustrationType = 'designers' | 'developers' | 'resources';

const ILLUSTRATIONS: Record<
  CardHeaderIllustrationType,
  { light: string; dark: string }
> = {
  designers: { light: designersLight, dark: designersDark },
  developers: { light: developersLight, dark: developersDark },
  resources: { light: resourcesLight, dark: resourcesDark },
};

/**
 * Vertical offset for the cropped illustration — Figma `PartsCardHeaderIllustration`
 * (node 118:480) positions resources variants higher in the frame.
 */
const imageOffset = (type: CardHeaderIllustrationType) => {
  if (type === 'resources') {
    return css`
      [data-theme='light.a'] &,
      [data-theme='win hct'] & {
        top: -20.23%;
      }
      [data-theme='dark.a'] & {
        top: -11.1%;
      }
    `;
  }
  return css`
    top: 0;
  `;
};

/** Fixed 180px media strip — full-bleed inside a Card's clipped slot. */
const Root = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 100%;
  height: 180px;
  overflow: hidden;
  background: var(--color-surfaces-on-container);
`;

const Frame = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`;

const ThemeImage = styled.img<{ $type: CardHeaderIllustrationType; $mode: 'light' | 'dark' }>`
  position: absolute;
  left: 0;
  width: 100%;
  height: 170%;
  max-width: none;
  object-fit: cover;
  ${(p) => imageOffset(p.$type)}

  ${(p) =>
    p.$mode === 'light'
      ? css`
          [data-theme='light.a'] &,
          [data-theme='win hct'] & {
            display: block;
          }
          [data-theme='dark.a'] & {
            display: none;
          }
        `
      : css`
          [data-theme='light.a'] &,
          [data-theme='win hct'] & {
            display: none;
          }
          [data-theme='dark.a'] & {
            display: block;
          }
        `}
`;

export interface CardHeaderIllustrationProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Which homepage audience illustration to show (Figma `type` axis on node
   * 118:480): designers, developers, or resources.
   * @default 'designers'
   */
  type?: CardHeaderIllustrationType;
}

/**
 * Full-bleed header illustration for audience cards (Figma
 * `PartsCardHeaderIllustration`, node 118:480). Renders the correct light/dark
 * artwork from the `type` prop; theme follows the nearest `[data-theme]`.
 * Slot it as the `media` of a **SimpleCard** inside a **Card**.
 */
export const CardHeaderIllustration = React.forwardRef<HTMLDivElement, CardHeaderIllustrationProps>(
  ({ type = 'designers', ...props }, ref) => {
    const assets = ILLUSTRATIONS[type];
    return (
      <Root ref={ref} {...props}>
        <Frame aria-hidden>
          <ThemeImage $type={type} $mode="light" src={assets.light} alt="" />
          <ThemeImage $type={type} $mode="dark" src={assets.dark} alt="" />
        </Frame>
      </Root>
    );
  },
);

CardHeaderIllustration.displayName = 'CardHeaderIllustration';

export default CardHeaderIllustration;
