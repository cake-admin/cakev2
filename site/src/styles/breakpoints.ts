/** Site-level responsive breakpoints (not part of cake& token set). */
export const breakpoints = {
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

export const media = {
  sm: `@media (min-width: ${breakpoints.sm}px)`,
  md: `@media (min-width: ${breakpoints.md}px)`,
  lg: `@media (min-width: ${breakpoints.lg}px)`,
  xl: `@media (min-width: ${breakpoints.xl}px)`,
  maxMd: `@media (max-width: ${breakpoints.lg - 1}px)`,
  maxSm: `@media (max-width: ${breakpoints.md - 1}px)`,
} as const;

/** Fixed nav rail width on desktop — matches legacy site + Figma shell. */
export const NAV_RAIL_WIDTH = 250;
