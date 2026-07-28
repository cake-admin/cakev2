# cake&

Lenovo's design system: 63 React components, ~470 design tokens, and three
themes. Every interactive component wraps a [Radix](https://www.radix-ui.com/primitives)
primitive, so behaviour and accessibility come from Radix and cake& owns the
visuals. Every value resolves from a design token — nothing is hardcoded.

**Documentation:** <https://cake.lenovo.com/storybook/> — the source of truth for
every component's API, variants, states, and accessibility contract.

---

## Use it

### Starting something new

```bash
npx degit cake-admin/cakev2/starter my-prototype
cd my-prototype
npm install
npm run dev
```

You get a Vite + React + TypeScript app with the provider, theming, fonts, and
coding-agent context already wired up. **No GitHub token and no `.npmrc`** — see
[Getting Started](https://cake.lenovo.com/storybook/?path=/docs/guides-getting-started--docs)
for the full walkthrough.

<details>
<summary>What is <code>npx degit</code>?</summary>

`npx` runs a package without installing it globally. `degit` copies a git
repository — or one folder inside it — as plain files, with no `.git` directory
and no history.

So that command means *"download just the `starter/` folder from this repo into
`my-prototype`, as a clean project."* Unlike `git clone`, you do not get the
whole design system or its history, and you are not connected to this repo — it
is your project from the first commit.

`degit` is unmaintained but still works. Equivalents:
`npx giget@latest gh:cake-admin/cakev2/starter my-prototype`, or
`git clone --depth 1 https://github.com/cake-admin/cakev2 && cp -r cakev2/starter my-prototype`.

</details>

### Adding cake& to an existing app

Take the `.tgz` URL from the [newest release](https://github.com/cake-admin/cakev2/releases/latest):

```bash
npm install https://github.com/cake-admin/cakev2/releases/download/vX.Y.Z/cake-admin-cakeand-X.Y.Z.tgz
npm install react react-dom styled-components radix-ui lucide-react
```

No token is needed: the repository is public and npm sends no credentials to a
non-registry host. The package is also on GitHub Packages as
`@cake-admin/cakeand`, but that registry requires a token for every install.

Then wrap your app **once**:

```tsx
import { CakeProvider, Card, HeroCard, Button } from '@cake-admin/cakeand';

<CakeProvider mode="light.a">
  <Card>
    <HeroCard title="Hello" actions={<Button size="lg">Get started</Button>} />
  </Card>
</CakeProvider>;
```

Three details matter and are easy to miss — `resolve.dedupe` for
`styled-components`, the stylesheet import, and `data-theme` on `<html>`. All
three are covered in [Getting Started](https://cake.lenovo.com/storybook/?path=/docs/guides-getting-started--docs),
and all three are already done in the starter.

### Prototyping with AI agents

[`cake-admin/ai-lab`](https://github.com/cake-admin/ai-lab) is the workspace for
building prototypes with Cursor or Claude Code — skills, agents, and a
machine-readable component index. Clone it and ask for a prototype; it installs
cake& for you.

---

## Updating

A new cake& version does **not** reach your project on its own. Each project
pins one exact version, and you move it deliberately:

| Your project | Command |
|---|---|
| Scaffolded from the starter | `npm run cake:update` |
| A prototype inside ai-lab | `node scripts/install-cake.mjs prototypes/<name>` |
| Your own app | Re-run `npm install` with the newer release's `.tgz` URL |

The first two resolve the newest release for you; nothing to look up.

**`npm outdated` will not tell you a new version exists.** It compares against a
registry, and this package is installed from a URL, so npm has nothing to compare
against. Watch [releases](https://github.com/cake-admin/cakev2/releases) — or
just run the update command periodically, since it always resolves the latest.

Pinning an exact version is deliberate rather than a limitation. npm records a
checksum of the exact tarball bytes in your lockfile, so a URL that always served
"latest" would first fail to update silently, then break `npm ci` with an
integrity error that is very hard to trace back.

---

## What's in this repo

| Path | What |
|------|------|
| `src/cakeand/` | The design system — the only thing that ships in the package |
| `src/cakeand/foundations/` | Storybook docs pages (Colors, Typography, Spacing, Elevation, guides) |
| `starter/` | The template designers scaffold from |
| `scripts/` | Token generation, package build, agent-context generation |
| `chart-tool-echarts/` | Separate Vite app deployed at /dataviz |

Building components and publishing versions is the design-system team's
workflow, documented in Storybook under **Guides** — *Building a Component* and
*Shipping a Component*. Agent conventions live in [AGENTS.md](AGENTS.md).

---

## License

Internal Lenovo design system. The published package declares `UNLICENSED`, and
the bundled Rookery New typeface is proprietary — it is not licensed for
redistribution outside Lenovo.
