# 🎯 Design System Cursor Rule  
**Purpose:** Define rules for AI agents and developers (including Cursor, Copilot, and automated CI/CD processes) when creating, maintaining, and deploying the design system documentation site.  
**Baseline:** Follow all standards from `Design System Documentation Rules.md`.  

---

## 1. General Behavior
**Always treat the current repository as the baseline.**
- Do **not** modify, move, or delete existing components, assets, or structure unless explicitly instructed.  
- Implement **only** the requested changes.  
- Never introduce unapproved colors, fonts, or layout shifts.  
- Maintain consistent naming, structure, and documentation patterns.  

✅ **Cursor must:**  
- Reference existing page structure and layout before making changes.  
- Use dropdowns for state, theme, and variation controls in examples.  
- Use `rem` units for all typography.  
- Preserve icons, images, and illustrations exactly as they are.  

### Branch Safety Check
**Before making any file changes or commits, Cursor must check the current git branch.**

- **Branch Check Requirement**: Cursor must check the current git branch before making any file changes or commits.  
- **Warning Behavior**: If on `main` branch, Cursor must:
  - Display a clear warning message informing the user they're on the main branch.  
  - Explain the risk of committing directly to main (main is the only deployable branch per Section 10).  
  - Ask if they want to create a new branch before proceeding.  
- **Branch Creation**: If user confirms, Cursor should:
  - Suggest an appropriate branch name based on the task (following the `type/description` format from Section 12, e.g., `feat/component-name`, `fix/issue-description`, `docs/update-name`).  
  - Create the new branch using `git checkout -b branch-name`.  
  - Confirm the branch switch before proceeding with any changes.  
- **Exception Handling**: Only proceed with changes on main if explicitly confirmed by the user after the warning.

✅ **Cursor Check:**  
- Verify current branch with `git branch --show-current` before making any modifications.  
- If on main, display warning and wait for user confirmation before proceeding.  

---

## 2. Performance Standards
**All generated output must meet or improve baseline performance metrics.**
- Static site generation preferred over client-side rendering.  
- Route-level code splitting mandatory.  
- Lazy-load non-critical docs and components.  
- Bundle limits:
  - Core UI: `< 50KB`
  - Docs chunks: `< 100KB`  
- Use native CSS variables.  
- Implement virtual scrolling for lists >50 items.  

✅ **Cursor Check:**  
Run `npm run build` and confirm no warnings about bundle size or performance regressions.  

---

## 3. Developer Experience Rules
- **Hot Module Replacement (HMR)** must work for all doc and example updates.  
- **Preview panes** update without full reload.  
- TypeScript strict mode enforced globally.  
- Local dev startup < 5 seconds.  
- Zero-config contributor setup maintained.  

✅ **Cursor Check:**  
Run `npm run dev` and verify live preview refreshes without reload.  

---

## 4. File & Component Architecture
Maintain the following folder structure:  
```
/components       # Design system components
/docs             # Documentation markdown/MDX
/examples         # Live examples
/tokens           # Design tokens (JSON)
/utils            # Shared utilities
```

**Rules:**  
- One component per file.  
- Co-locate styles.  
- Separate examples from implementation.  
- Type-safe props, auto-documented.  
- No circular dependencies.  

✅ **Cursor Check:**  
Run `tsc --noEmit` to validate structure and typing.  

---

## 5. Documentation Rules
Each component page must include:  
1. Description (1–2 sentences)  
2. Live interactive example  
3. Auto-generated Props API  
4. 3–5 usage examples  
5. Accessibility notes  
6. Related components  

**Code Example Standards:**  
- Realistic data (no `foo/bar`).  
- Include loading and error states.  
- Syntax highlighting + copy button.  
- All runnable.  

✅ **Cursor Check:**  
Run automated example test suite — confirm examples render without console errors.  

---

## 6. Design Tokens
- JSON-based tokens: `category.property.variant.state`  
  (e.g., `color.text.primary`, `spacing.large`)  
- No hardcoded values in components.  
- Token edits trigger visual regression tests.  

✅ **Cursor Check:**  
Run visual diff tests on any token change.  

---

## 7. MCP Server & Figma Integration
**When building React components for the design system website using Cursor, follow these rules for consistency and precision.**

### 1. Use the MCP Server
- Always use the MCP server when creating or refining React components.  
- The MCP server should be used to ensure pixel-perfect accuracy in visual and interaction design, achieving a 1:1 match with the source Figma design.

### 2. Follow Figma Specifications Exactly
- All components must match Figma designs exactly.  
- Do not deviate from Figma specifications, including visual, layout, and interaction details.

### 3. Design Fidelity Requirements
When implementing components, ensure the following properties are followed exactly as defined in Figma:
- **Padding**  
- **Sizing and spacing**  
- **Color and opacity**  
- **Typography** (font family, size, weight, line height, letter spacing)  
- **Border radius, width, and color**  
- **Shadows and elevation levels**  
- **Interaction states** (hover, active, focus, disabled, etc.)

### 4. Color Token Mapping
- Map all Figma color variables used in components to design system color tokens in the React implementation.  
- Ensure naming consistency between Figma tokens and the React theme file.  
- Do not hardcode hex values; always use the tokenized color references.

### 5. Review Process
- Before merging, use the MCP server to visually compare the React component against the corresponding Figma component.  
- Ensure that both visual and interactive behaviors are identical across states.

✅ **Cursor Check:**  
- Use MCP server to fetch Figma design context before implementing any component.  
- Verify pixel-perfect match between React component and Figma design using MCP server comparison tools.  
- Confirm all color values use design tokens (no hardcoded hex values).  

---

## 8. Navigation & Search
- Search index includes names, props, examples.  
- Shortcut: `Cmd/Ctrl + K` required.  
- Navigation depth ≤ 3 levels.  
- “Getting started” always first.  
- Alphabetical component listing.  

✅ **Cursor Check:**  
Verify search index updates at build time (not runtime).  

---

## 9. Code Quality Requirements
- Typed props, ref forwarding, JSDoc on all exports.  
- No `any` types.  
- Unit + integration + a11y + visual tests.  
- 80%+ test coverage minimum.  

✅ **Cursor Check:**  
Run `npm test` and confirm coverage threshold met.  

---

## 10. Build & Deployment Rules
**Static builds and deployment use Git + GitHub Pages via GitHub Actions.**

### Deployment Workflow
- **Branch**: `main` is the only deployable branch.  
- **Trigger**: Deploy on push or merge to `main`.  
- **Build Command**: `npm run build` (must generate `/dist` or `/build` output).  
- **Deploy Target**: `gh-pages` branch (auto-managed).  
- **Hosting**: GitHub Pages (source set to `gh-pages` branch).  
- **Workflow File**: `.github/workflows/deploy.yml`.  

### Deployment Rules
1. All commits must pass lint, type, and test checks before deploy.  
2. The Action must build the site, commit the compiled output to `gh-pages`, and push automatically.  
3. The Action must **fail** if:
   - Build errors occur  
   - Lint/test coverage thresholds not met  
   - Performance budgets exceeded  
4. The Action must **cache dependencies** to improve run times.  
5. Use GitHub’s built-in Pages deployment token (no personal tokens).  
6. All deployment logs must be visible in the Actions tab.  
7. Manual deploys (`npm run deploy`) allowed only for recovery or preview branches.

✅ **Cursor Check:**  
- Confirm `.github/workflows/deploy.yml` exists and passes lint.  
- Confirm site builds locally with `npm run build`.  
- Confirm deployment URL is accessible via GitHub Pages.  
- Example workflow snippet:
  ```yaml
  name: Deploy Docs
  on:
    push:
      branches: [ main ]
  jobs:
    build-and-deploy:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
        - uses: actions/setup-node@v4
          with:
            node-version: 20
        - run: npm ci
        - run: npm run build
        - name: Deploy to GitHub Pages
          uses: peaceiris/actions-gh-pages@v4
          with:
            github_token: ${{ secrets.GITHUB_TOKEN }}
            publish_dir: ./dist
  ```

---

## 11. Accessibility Rules
- WCAG 2.1 AA minimum.  
- Keyboard navigable, visible focus, semantic HTML.  
- No color-only distinctions.  
- Screen reader verified examples.  

✅ **Cursor Check:**  
Run `axe-core` scan on docs build.  

---

## 12. Version Control Rules
- Semantic commits (`feat/`, `fix/`, `docs/`).  
- Branch format: `type/description` (e.g., `feat/button-sizes`).  
- Squash merge only.  
- Semantic versioning with CHANGELOG updates.  
- Migration guides for breaking changes.  

✅ **Cursor Check:**  
Verify commit conforms to conventional commit syntax.  

---

## 13. Maintenance Routine
- Unused code audit: monthly  
- Dependency updates: weekly  
- Example updates + a11y audits: quarterly  
- Performance audits: monthly  
- Feedback review: weekly  

✅ **Cursor Check:**  
Flag stale or deprecated examples with inline warnings.  

---

## 14. Optimization Checklist (Pre-Merge)
- [ ] Images optimized + lazy-loaded  
- [ ] Examples runnable  
- [ ] No console errors  
- [ ] Lighthouse ≥ 90  
- [ ] TypeScript passes  
- [ ] All links functional  
- [ ] Mobile responsive  
- [ ] Dark mode verified  
- [ ] Search index rebuilt  
- [ ] CHANGELOG updated  

✅ **Cursor Final Report Format:**
```
✅ Compile Check: PASS
✅ Runtime Check: PASS
✅ Linting: PASS
✅ Lighthouse: 92/100
✅ Bundle size: Within limits
✅ Accessibility: AA compliant
✅ Deployment: Success (GitHub Pages)
```
