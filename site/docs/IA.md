# cake& website — information architecture

**Figma source:** [Cake--Website](https://www.figma.com/design/7ukvj6PrxjZ3E9nTp5Sfo1/Cake--Website) (`7ukvj6PrxjZ3E9nTp5Sfo1`)

## Figma audit status

| Item | Status |
|------|--------|
| MCP `get_design_context` / `get_screenshot` | **Available** — node `66:7534` audited and implemented |
| First implementation frame | Node **`66:7534`** → `site/src/pages/HomePage.tsx` |
| Assets | Exported to `site/public/home/` from Figma MCP |

## Site shell (all pages)

| Breakpoint | Nav behavior |
|------------|--------------|
| ≥1024px | Fixed 250px left rail |
| <1024px | Overlay drawer + mobile top bar |
| Theme | Light A / Dark A toggle in nav footer |

## Page inventory

| Route | Type | Implementation |
|-------|------|----------------|
| `/` | Home | `HomePage.tsx` — Figma node `66:7534` |
| `/resources` | Guide | `guides/GuidePages.tsx` |
| `/whats-new` | Guide | `guides/WhatsNewPage.tsx` |
| `/get-started/about-cake` | Guide | `guides/WhatsNewPage.tsx` |
| `/get-started/figma-libraries` | Guide | `guides/GuidePages.tsx` |
| `/version-control` | Guide | `guides/WhatsNewPage.tsx` |
| `/foundations/colors` | Foundation | Redirect → Storybook `Foundations/Colors` |
| `/foundations/iconography` | Foundation | `foundations/FoundationPages.tsx` |
| `/foundations/language-grammar` | Foundation | `foundations/FoundationPages.tsx` |
| `/foundations/ai/overview` | Foundation | `foundations/FoundationPages.tsx` |
| `/foundations/ai/gradient` | Foundation | `foundations/FoundationPages.tsx` |
| `/foundations/ai/logo-icon` | Foundation | `foundations/FoundationPages.tsx` |
| `/components/*` | Component index | Redirect → Storybook docs (see below) |

## Component reuse map (site chrome)

| UI | cake& component | Notes |
|----|-----------------|-------|
| Primary navigation | Semantic `<nav>` + `NavLink` | Not `Sidebar` tabs — URL routing |
| Search | `TextInput` + route filter | |
| Mobile menu | `IconButton` + drawer rail | |
| Theme toggle | `IconButton` + `CakeProvider` mode | |
| Doc pages | `DocPage` + `Card` / `SimpleCard` | |
| Home hero | Token typography + `Card` / `SimpleCard` | |
| Badges (changelog) | `Badge` | |
| Component API docs | Storybook redirect | Source of truth |

## Legacy → Storybook doc mapping

Component routes under `/components/` redirect to `cake.lenovo.com/storybook` docs URLs generated from CSF titles in `site/src/data/routes.ts` and `site/src/utils/storybook.ts`.

Legacy paths without a cake& equivalent (e.g. `/components/canvas`) redirect to Storybook home.

## Deploy

- **Site:** `site/` Vite build → `build/` via `scripts/assemble-pages.mjs`
- **Storybook:** nested at `/storybook/`
- **Dataviz:** unchanged at `/dataviz/`
