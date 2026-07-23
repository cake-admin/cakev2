/**
 * Emits cake& component knowledge as schema-conforming JSON for the AI Lab
 * knowledge base (github.com/cake-admin/ai-lab).
 *
 *   node scripts/build-knowledge.mjs --out ../ai-lab/knowledge/components
 *
 * Each file conforms to ai-lab's `knowledge/schemas/component.schema.json`, so
 * agents there can read the real component inventory instead of guessing.
 *
 * The source of truth is the docs prose already written in every
 * `*.stories.tsx` (`parameters.docs.description.component`) — the same text that
 * renders on the Storybook docs page. Because that prose follows a fixed section
 * order (intro · ## Usage · ## Design tokens used · ## Accessibility ·
 * ## Do / Don't), it can be parsed rather than re-authored, which keeps the
 * knowledge base in sync with the docs by construction: change the story, rerun
 * this, and the JSON follows.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const componentsDir = path.join(root, 'src', 'cakeand', 'components');

const outFlag = process.argv.indexOf('--out');
const outDir = outFlag !== -1 ? path.resolve(process.argv[outFlag + 1]) : path.join(root, 'dist-knowledge');

/** The only `states` values ai-lab's schema accepts. */
const STATE_ENUM = new Set([
  'default', 'hover', 'focus-visible', 'active', 'disabled',
  'selected', 'loading', 'error', 'empty',
]);

/** Strip markdown emphasis/links/code so prose reads cleanly as JSON strings. */
const clean = (s) =>
  s
    .replace(/\\`/g, '`')
    .replace(/`([^`]*)`/g, '$1')
    .replace(/\*\*([^*]*)\*\*/g, '$1')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();

/**
 * Split the docs blob into its `## Section` bodies.
 *
 * Done by scanning rather than one regex: the obvious
 * `(?=^##\s|\Z)` lookahead silently breaks, because JavaScript has no `\Z`
 * anchor — it matches a literal "Z", so the LAST section (Do / Don't) never
 * captures.
 */
const sections = (body) => {
  const out = {};
  let current = null;
  let buffer = [];
  for (const line of body.split('\n')) {
    const heading = line.match(/^##\s+(.+?)\s*$/);
    if (heading) {
      if (current) out[current.toLowerCase()] = buffer.join('\n');
      current = heading[1];
      buffer = [];
    } else if (current !== null) {
      buffer.push(line);
    }
  }
  if (current) out[current.toLowerCase()] = buffer.join('\n');
  return out;
};

/** `- item` bullets, re-joining the wrapped continuation lines beneath each. */
const bullets = (text) => {
  const out = [];
  let current = null;
  for (const raw of text.split('\n')) {
    const item = raw.match(/^\s*[-*]\s+(.*)$/);
    if (item) {
      if (current) out.push(current);
      current = item[1];
    } else if (current && raw.trim() && !raw.trim().startsWith('|') && !raw.trim().startsWith('#')) {
      current += ` ${raw.trim()}`;
    } else if (current && !raw.trim()) {
      out.push(current);
      current = null;
    }
  }
  if (current) out.push(current);
  return out.map(clean).filter((l) => l.length > 3);
};

/** Two-column markdown table → [[left, right], …], skipping header/separator. */
const tableRows = (text) =>
  text
    .split('\n')
    .filter((l) => l.trim().startsWith('|') && !/^\s*\|[\s:|-]+\|\s*$/.test(l))
    .map((l) => l.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => clean(c)))
    .filter((cells) => cells.length >= 2 && cells[0] && !/^Do$/i.test(cells[0]) && !/^(Part|Variant)/i.test(cells[0]));

const files = [];
for (const folder of fs.readdirSync(componentsDir)) {
  const dir = path.join(componentsDir, folder);
  if (!fs.statSync(dir).isDirectory()) continue;
  for (const f of fs.readdirSync(dir)) {
    if (f.endsWith('.stories.tsx')) files.push({ folder, file: path.join(dir, f) });
  }
}

const emitted = [];
const skipped = [];

for (const { folder, file } of files) {
  const src = fs.readFileSync(file, 'utf8');

  const titleMatch = src.match(/title:\s*'([^']+)'/);
  const componentMatch = src.match(/component:\s*([A-Za-z0-9_]+)\s*,/);
  if (!titleMatch || !componentMatch) {
    skipped.push({ file, why: 'no title/component in meta' });
    continue;
  }
  const component = componentMatch[1];

  // The docs blob: description.component's template literal.
  const docsMatch = src.match(/description:\s*\{\s*component:\s*`([\s\S]*?)`\s*,?\s*\}/);
  if (!docsMatch) {
    skipped.push({ file, why: 'no docs.description.component' });
    continue;
  }
  // Normalise CRLF up front. These files are checked out with Windows line
  // endings, and `.` never matches `\r` in a JS regex — so any line-anchored
  // pattern ending in `$` silently fails to match every single line.
  const body = docsMatch[1].replace(/\r\n?/g, '\n');

  // Purpose: the first real paragraph of the intro.
  const intro = body.split(/^##\s/m)[0];
  const purpose =
    clean(
      intro
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter((p) => p && !p.startsWith('#'))[0] || '',
    ) || `cake& ${component}.`;

  const secs = sections(body);

  // `--[a-z]…` (not `--…`) so markdown table separators like `| --- |` are not
  // mistaken for token names.
  const tokens_used = [
    ...new Set(((secs['design tokens used'] || '').match(/--[a-z][a-z0-9-]*/g) || [])),
  ].slice(0, 20);

  const accessibility_requirements = bullets(secs['accessibility'] || '').slice(0, 8);

  const doDont = tableRows(secs["do / don't"] || '');
  const usage_guidelines = doDont.map((r) => r[0]).filter(Boolean).slice(0, 8);
  const anti_patterns = doDont.map((r) => r[1]).filter(Boolean).slice(0, 8);

  // Variants: the enum options declared in argTypes.
  const variants = [
    ...new Set(
      [...src.matchAll(/options:\s*\[([^\]]+)\]/g)]
        .flatMap((m) => m[1].split(',').map((v) => v.trim().replace(/^['"]|['"]$/g, '')))
        .filter((v) => v && v !== 'true' && v !== 'false' && !v.startsWith('$')),
    ),
  ].slice(0, 20);

  // States: grounded in props that actually exist, not keywords spotted in the
  // prose. Loose matching gave a presentational Card "hover/active/focus-visible"
  // purely because the words appeared in its docs — wrong data is worse than none.
  const componentSrc = (() => {
    const candidate = path.join(path.dirname(file), `${path.basename(file, '.stories.tsx')}.tsx`);
    return fs.existsSync(candidate) ? fs.readFileSync(candidate, 'utf8') : '';
  })();
  const hasProp = (name) => new RegExp(`^\\s*${name}\\?:`, 'm').test(componentSrc);
  const states = ['default', 'disabled', 'selected', 'loading', 'error']
    .filter((s) => s === 'default' || hasProp(s) || (s === 'error' && /'error'/.test(componentSrc)))
    .filter((s) => STATE_ENUM.has(s));

  const figmaMatch = body.match(/node\s+(\d+:\d+)/);

  const implementation_notes = [
    'Import from @cake-admin/cakeand; wrap the app once in <CakeProvider>.',
    /wraps no Radix primitive|no Radix primitive/i.test(body)
      ? 'Presentational — wraps no Radix primitive; renders a semantic element.'
      : 'Interactive behaviour delegated to a Radix primitive; cake& owns only the visuals.',
    // `code_path` is NOT a field in ai-lab's schema on main (additionalProperties
    // is false), so the source location rides along here instead.
    `Source: src/cakeand/components/${folder}/`,
    `Storybook: ${titleMatch[1]} — https://cake.lenovo.com/storybook/`,
  ];

  const json = {
    component,
    system: 'cake',
    purpose,
    ...(figmaMatch ? { figma_node_id: figmaMatch[1] } : {}),
    variants,
    states,
    tokens_used,
    usage_guidelines: usage_guidelines.length ? usage_guidelines : [`Use ${component} as documented in Storybook.`],
    accessibility_requirements: accessibility_requirements.length
      ? accessibility_requirements
      : ['Follows the cake& focus-ring and labelling conventions; see the Storybook docs page.'],
    anti_patterns: anti_patterns.length ? anti_patterns : ['Do not hardcode colors, spacing, or type — use cake& tokens.'],
    implementation_notes,
    status: 'active',
    version: '0.1.0',
    owners: ['design-systems'],
  };

  const slug = component.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
  emitted.push({ slug, json, body, component });
}

// Second pass: cross-link components that reference each other in their docs.
const allNames = emitted.map((e) => e.component);
for (const entry of emitted) {
  const related = allNames.filter(
    (n) => n !== entry.component && new RegExp(`\\b${n}\\b`).test(entry.body),
  );
  if (related.length) entry.json.related_components = related.slice(0, 8);
}

fs.mkdirSync(outDir, { recursive: true });
const written = [];
const preserved = [];
for (const { slug, json } of emitted) {
  const target = path.join(outDir, `${slug}.cake.json`);
  // Never clobber curated knowledge. Hand-authored entries encode things a
  // generator cannot know — documented deviations from Storybook, token names
  // mapped into a consuming prototype's system, links to prototype source. This
  // script only fills gaps.
  if (fs.existsSync(target)) {
    preserved.push(`${slug}.cake.json`);
    continue;
  }
  fs.writeFileSync(target, `${JSON.stringify(json, null, 2)}\n`);
  written.push(`${slug}.cake.json`);
}

process.stdout.write(`\n✓ wrote ${written.length} new component files → ${outDir}\n`);
if (preserved.length) {
  process.stdout.write(
    `\n  preserved ${preserved.length} existing (curated) file(s), not overwritten:\n    ${preserved.join('\n    ')}\n`,
  );
}
if (skipped.length) {
  process.stdout.write(`\n  skipped ${skipped.length} story file(s):\n`);
  for (const s of skipped) process.stdout.write(`   - ${path.basename(s.file)} (${s.why})\n`);
}
