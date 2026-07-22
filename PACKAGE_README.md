# @cake-admin/cakeand

The cake& design system — React components, design tokens, and theming.

Published from [`cake-admin/cakev2`](https://github.com/cake-admin/cakev2).
Component documentation lives in the Storybook at
<https://cake.lenovo.com/storybook/>, which is the canonical source of truth for
every component's API, variants, states, and accessibility contract.

## Install

The package is hosted on GitHub Packages, so the consuming repo needs a scoped
registry entry. The scope must be `@cake-admin` (GitHub Packages requires the
scope to match the repository owner).

Note that GitHub's npm registry requires authentication for **every** install,
including public packages — so a token is needed even though this package is
public. Any GitHub token with `read:packages` works:

```ini
# .npmrc
@cake-admin:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

```bash
npm install @cake-admin/cakeand
```

### Peer dependencies

Install these alongside it — they are intentionally *not* bundled, so your app
owns a single copy of each:

```bash
npm install react react-dom styled-components radix-ui lucide-react
```

> `styled-components` **must** resolve to a single instance. Two copies in one
> app means two separate stylesheets and theme contexts, and components silently
> lose their theme.

Requires React 18 or 19 (verified against both).

## Usage

Wrap your app **once** in `CakeProvider`. That is the whole setup — there is no
separate CSS import and no font wiring:

```tsx
import { CakeProvider, Card, HeroCard, Button } from '@cake-admin/cakeand';

export default function App() {
  return (
    <CakeProvider mode="light.a">
      <Card>
        <HeroCard
          title="Hello"
          body="Composed from cake& components."
          actions={<Button size="lg">Get started</Button>}
        />
      </Card>
    </CakeProvider>
  );
}
```

`CakeProvider` does three things:

1. sets `data-theme` on `<html>`, which activates the CSS custom properties
   (`--color-*`, `--space-*`, `--radius-*`, …);
2. provides the styled-components theme for the parts that read `props.theme`;
3. loads the Rookery New fonts and the global baseline.

### Theming

```tsx
<CakeProvider mode="dark.a">…</CakeProvider>
```

Modes: `light.a` (default), `dark.a`, `win hct`.

The attribute goes on `<html>` deliberately. Several components — `Modal`,
`Dropdown`, both tooltips, `Breadcrumb`, `NumberDropdown`, `Pagination` — render
through a Radix **portal** into `document.body`, outside your React tree. If the
theme attribute lived on a wrapper `<div>`, those portalled surfaces would escape
it and fall back to the light theme. Pass `scope="subtree"` to opt out and theme
only the provider's children (portals will then be unthemed).

Because the attribute is applied in a layout effect, the first paint uses the
default (light) values. If your app boots dark, also set `data-theme` on `<html>`
in your HTML shell to avoid the flash.

## What's included

63 components, including:

- **Actions** — Button, IconButton, Chip
- **Surfaces** — Card (+ Hero / Content / Simple card templates), Modal, Toast,
  Notification, Tooltip
- **Data** — Table (+ Action Bar, Header Row, Data Row), Pagination, Badge,
  Counter, Avatar
- **Navigation** — Sidebar, vertical & horizontal Tabs, Breadcrumb, Content
  Switcher, Accordion
- **Forms** — TextInput, PasswordInput, NumberInput, PinInput, DateInput,
  TimeInput, Checkbox, Radio, Switch, Slider, Dropdown, FileUpload

Interactive components wrap Radix primitives, so behaviour and accessibility
(roles, keyboard, focus management) come from Radix; cake& owns the visuals.
Every value resolves from design tokens — nothing is hardcoded.

## TypeScript

Types ship with the package, including per-prop documentation and defaults.
Importing the types directly is supported:

```ts
import type { ButtonProps, CardElevation, ThemeMode } from '@cake-admin/cakeand';
```
