# cake& website IA

Source: [Cake--Website](https://www.figma.com/design/7ukvj6PrxjZ3E9nTp5Sfo1/Cake--Website) (file `7ukvj6PrxjZ3E9nTp5Sfo1`).

| Node | Role | Implementation |
|------|------|----------------|
| `66:7534` | Home (first target) | `site/src/pages/HomePage.tsx` |

## Shell

- **Desktop (≥1024px):** fixed 250px nav rail + scrollable content
- **Mobile (<1024px):** overlay nav drawer + top bar with menu control
- **Tokens:** all layout/colors via cake& CSS custom properties

## Component mapping

| UI | cake& component |
|----|-----------------|
| Nav links | Semantic `<nav>` + styled `NavLink` (not Sidebar tabs — URL navigation) |
| Search | `TextInput` + route metadata filter |
| Mobile menu | `IconButton` + drawer rail |
| Home hero | Token-styled typography |
| Promo cards | `Card` + `SimpleCard` |
| Feature cards | `Card` + `SimpleCard` + lucide icons |
| Component docs | Redirect to Storybook (`/storybook/`) |

## Routes

See `site/src/data/routes.ts`. Component pages deep-link to Storybook docs rather than duplicating API reference.
