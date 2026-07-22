/**
 * Ambient declarations for the non-code imports the design system pulls in
 * (the token layer and the @font-face sheet are imported for their side effects
 * by theme/ThemeProvider).
 *
 * These live here rather than in `src/` so they can't collide with the
 * declarations react-scripts injects into the app's own type-check.
 */
declare module '*.css';
declare module '*.woff2';
