# Agent instructions — cake& design system

## Implementing a component from Figma

To implement, port, or audit a component from a Figma link — or to plan a
devkit migration — read and follow
**[.claude/skills/figma-component-implementation/SKILL.md](.claude/skills/figma-component-implementation/SKILL.md)**.
It defines the full workflow: per-component Figma audit (MCP), token
extraction + verification, CSS custom-property styling rules, Radix mappings,
naming translation, tests policy, verification, and optional Code Connect.

## Component + Storybook documentation work

Before creating, modifying, or reviewing anything under
`src/cakeand/components/` (components or stories), read and follow
**[.claude/skills/storybook-component-docs/SKILL.md](.claude/skills/storybook-component-docs/SKILL.md)**.
It defines the mandatory docs-page template (section order, story taxonomy,
props-table rules, hard constraints, verification steps). Canonical exemplar:
`src/cakeand/components/Button/`.

## Repo quirks

- The repo path contains `&`, which breaks npm `.bin` shims and `npx` on
  Windows. Invoke tool binaries via `node node_modules/<pkg>/<bin>.js` or the
  package scripts (which already do this). Storybook: `npm run storybook`
  (dev, port 6006) / `npm run build-storybook`.
- The `chart-tool-echarts/` folder is a separate Vite app (the data-viz tool
  deployed at cake.lenovo.com/dataviz) with its own docs and scripts — its
  token pipeline and tests live inside that folder.
