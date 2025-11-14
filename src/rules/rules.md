# 🎯 Design System Cursor Rule  
**Purpose:** Define rules for AI agents and developers (including Cursor, Copilot, and automated CI/CD processes) when creating, maintaining, and deploying the design system documentation site.  
**Baseline:** Follow all standards from `rules.md`.  

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
  - Explain the risk of committing directly to main (main is the only deployable branch per Section 11).  
  - Ask if they want to create a new branch before proceeding.  
- **Branch Creation**: If user confirms, Cursor should:
  - Suggest an appropriate branch name based on the task (following the `type/description` format from Section 13, e.g., `feat/component-name`, `fix/issue-description`, `docs/update-name`).  
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
- **Import file extensions required**: All relative imports must include explicit file extensions (`.js`, `.jsx`, `.ts`, `.tsx`) to ensure consistent module resolution across platforms. Linux-based CI/CD (GitHub Actions) requires explicit extensions, while macOS/Windows may work without them, causing build failures that only appear in CI.

✅ **Cursor Check:**  
- Run `tsc --noEmit` to validate structure and typing.  
- Verify all relative imports include file extensions before committing.  

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

## 8. Color Token Management

When working with colors, always use the Figma MCP to synchronize color tokens:

**CRITICAL RULE: Never invent or create new token names. All token names in `src/tokens/cake-color-tokens.json` must exactly match Figma variable names. If a variable doesn't exist in Figma, use the Figma MCP to fetch it first before adding it to the JSON file. Do not create token names that don't exist in Figma.**

1. Fetch color variables from our Figma design file using the Figma MCP

2. Create a 1:1 mapping from Figma color variable names to our JSON color token definition

3. Follow our token naming convention when creating the mappings

4. Reference `src/tokens/cake-color-tokens.json` to map color variables to React components

5. **Always verify token names exist in Figma before using them** - use Figma MCP `get_variable_defs` to confirm variable names match exactly

### Token Naming Convention

When writing Figma Variables, remove the Category from the variable name to reduce complexity.

If a component does not meet one of the criteria in the naming convention, then that criteria is left off the token name. This helps to reduce complexity and redundancy.

**Token structure:** `category-component-type-onSurface-state`

**Criteria options:**

- **Category:** reference, surface, text, icon, border

- **Component:** button, textButton, inlineAlert, item, input, toggle, modal, card, canvas, range

- **Type:** primary, primary-strong, primary-stronger, primary-weak, primary-weaker, secondary, secondary-strong, secondary-stronger, secondary-weak, secondary-weaker, tertiary, tertiary-strong, tertiary-stronger, tertiary-weak, tertiary-weaker

- **onSurface:** onInfo, onSuccess, onWarning, onError, onCard, onCanvas, onModal

- **State:** rest, hover, press, focus, disabled

**Examples:**

- `button-primary-hover`

- `iconButton-primary-onError-press`

### Mapping to React Components

When applying color tokens to React components:

1. Always reference `src/tokens/cake-color-tokens.json` as the source of truth

2. Use the token names from this JSON file when applying colors in component styles

3. Ensure consistency between Figma variable names and the token names used in React components

4. **Validate token names**: Before using any token, verify it exists in the JSON file and matches the exact Figma variable name. Never assume a token name - always check the JSON first.

When mapping from Figma, preserve this naming structure in the JSON tokens.

### Token Name Validation Process

Before adding or using any color token:

1. **Fetch from Figma first**: Use Figma MCP `get_variable_defs` to get the exact variable name from Figma
2. **Check JSON file**: Verify the token name exists in `src/tokens/cake-color-tokens.json` with the exact same name
3. **No invention**: If a token doesn't exist in Figma, don't create it. Use existing Figma variables or request the variable be added to Figma first
4. **Exact match required**: Token names must be a 1:1 match with Figma variable names (following the naming convention format, but using exact names from Figma)

### Token File Deployment Rule
**CRITICAL: The `src/tokens/cake-color-tokens.json` file must be deployed with every branch that modifies it.**

- When `cake-color-tokens.json` is modified in any branch, the deployment must include the updated tokens file.
- The tokens file is automatically bundled into the JavaScript during the build process via webpack.
- Any branch containing token changes must ensure the tokens file is included in its build output before merging to `main`.
- The GitHub Actions deployment workflow automatically deploys all changes when merged to `main`.

✅ **Cursor Check:**
- Before committing changes to `cake-color-tokens.json`, verify the file is included in the commit.
- Confirm that token changes are included in the deployment branch (typically `main`).
- If modifying tokens, ensure the change is committed and pushed to trigger deployment.

### Using Tokens in New Components

**Standard Pattern for Importing and Using Tokens:**

When creating a new component that needs to use color tokens, follow this pattern:

```javascript
import cakeColorTokensData from '../../tokens/cake-color-tokens.json';

// Parse cake-color-tokens.json
let cakeColorTokens;
try {
  cakeColorTokens = typeof cakeColorTokensData === 'string' 
    ? JSON.parse(cakeColorTokensData)
    : cakeColorTokensData;
} catch (error) {
  console.error('Failed to parse cake-color-tokens.json:', error);
  cakeColorTokens = {};
}

/**
 * Get color token value
 */
const getColorToken = (tokenName, isDarkMode) => {
  const themeKey = isDarkMode ? 'darkA' : 'lightA';
  
  if (cakeColorTokens[tokenName] && cakeColorTokens[tokenName][themeKey]) {
    return cakeColorTokens[tokenName][themeKey];
  }
  
  // Fallback colors (add specific fallbacks for your component if needed)
  console.warn(`Color token "${tokenName}" not found in cake-color-tokens.json`);
  return isDarkMode ? '#A1A1AA' : '#334155'; // Default fallback
};
```

**Usage in styled-components:**
```javascript
const StyledComponent = styled.div`
  color: ${props => getColorToken('textPrimary', props.isDarkMode)};
  background-color: ${props => getColorToken('surfaceCard', props.isDarkMode)};
  border: 1px solid ${props => getColorToken('borderPrimary', props.isDarkMode)};
`;
```

**Alternative Direct Access Pattern (for simple cases):**
If you don't need the parsing/fallback logic, you can access tokens directly:
```javascript
import cakeColorTokens from '../../tokens/cake-color-tokens.json';

const StyledComponent = styled.div`
  color: ${props => 
    props.isDarkMode 
      ? cakeColorTokens.textPrimary.darkA 
      : cakeColorTokens.textPrimary.lightA};
`;
```

**Important Notes:**
- Tokens are automatically bundled into the production build - no additional configuration needed
- Always verify the token name exists in `cake-color-tokens.json` before using it
- Use the `getColorToken` helper function for consistent error handling and fallbacks
- Token names must match Figma variable names exactly (see Token Naming Rules above)
- The tokens file is included in every deployment automatically via webpack bundling

---

## 9. Navigation & Search
- Search index includes names, props, examples.  
- Shortcut: `Cmd/Ctrl + K` required.  
- Navigation depth ≤ 3 levels.  
- “Getting started” always first.  
- Alphabetical component listing.  

✅ **Cursor Check:**  
Verify search index updates at build time (not runtime).  

---

## 10. Code Quality Requirements
- Typed props, ref forwarding, JSDoc on all exports.  
- No `any` types.  
- Unit + integration + a11y + visual tests.  
- 80%+ test coverage minimum.  

✅ **Cursor Check:**  
Run `npm test` and confirm coverage threshold met.  

---

## 11. Build & Deployment Rules
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
5. Use GitHub's built-in Pages deployment token (no personal tokens).  
6. All deployment logs must be visible in the Actions tab.  
7. Manual deploys (`npm run deploy`) allowed only for recovery or preview branches.
8. **Token File Deployment**: When `src/tokens/cake-color-tokens.json` is modified, it must be included in the deployment. The tokens file is automatically bundled into the JavaScript during build, ensuring it's always deployed with the application. See Section 8 for detailed token deployment rules.

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

## 12. Accessibility Rules
- WCAG 2.1 AA minimum.  
- Keyboard navigable, visible focus, semantic HTML.  
- No color-only distinctions.  
- Screen reader verified examples.  

✅ **Cursor Check:**  
Run `axe-core` scan on docs build.  

---

## 13. Version Control Rules
- Semantic commits (`feat/`, `fix/`, `docs/`).  
- Branch format: `type/description` (e.g., `feat/button-sizes`).  
- Squash merge only.  
- Semantic versioning with CHANGELOG updates.  
- Migration guides for breaking changes.  

✅ **Cursor Check:**  
Verify commit conforms to conventional commit syntax.  

---

## 14. Maintenance Routine
- Unused code audit: monthly  
- Dependency updates: weekly  
- Example updates + a11y audits: quarterly  
- Performance audits: monthly  
- Feedback review: weekly  

✅ **Cursor Check:**  
Flag stale or deprecated examples with inline warnings.  

---

## 15. Optimization Checklist (Pre-Merge)
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
