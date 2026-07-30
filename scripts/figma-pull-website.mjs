#!/usr/bin/env node
/**
 * Pull Figma node JSON + PNG for the Cake--Website home frame.
 *
 * Usage:
 *   FIGMA_TOKEN=figd_xxx node scripts/figma-pull-website.mjs
 *   FIGMA_TOKEN=figd_xxx node scripts/figma-pull-website.mjs --url "https://www.figma.com/design/7ukvj6PrxjZ3E9nTp5Sfo1/Cake--Website?node-id=66-7534"
 *
 * Outputs to site/docs/figma/ (gitignored JSON/screenshots — copy specs into IA.md manually).
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DEFAULT_URL =
  'https://www.figma.com/design/7ukvj6PrxjZ3E9nTp5Sfo1/Cake--Website?node-id=66-7534';

const token = process.env.FIGMA_TOKEN ?? process.env.FIGMA_ACCESS_TOKEN;
if (!token) {
  console.error('Set FIGMA_TOKEN or FIGMA_ACCESS_TOKEN (Figma personal access token).');
  process.exit(1);
}

const urlArg = process.argv.find((a) => a.startsWith('--url='))?.slice(6)
  ?? (process.argv.includes('--url') ? process.argv[process.argv.indexOf('--url') + 1] : null)
  ?? DEFAULT_URL;

const fileMatch = urlArg.match(/\/(?:design|file)\/([a-zA-Z0-9]+)/);
const nodeMatch = urlArg.match(/[?&]node-id=([^&]+)/);
if (!fileMatch || !nodeMatch) {
  console.error('Could not parse file key / node-id from URL:', urlArg);
  process.exit(1);
}

const fileKey = fileMatch[1];
const apiNodeId = decodeURIComponent(nodeMatch[1]).replace(/-/g, ':');
const outDir = join(process.cwd(), 'site/docs/figma');
mkdirSync(outDir, { recursive: true });

async function api(path) {
  const res = await fetch(`https://api.figma.com/v1${path}`, {
    headers: { 'X-Figma-Token': token },
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`Figma API ${res.status} on ${path}: ${text.slice(0, 400)}`);
  }
  return JSON.parse(text);
}

const nodesRes = await api(
  `/files/${fileKey}/nodes?ids=${encodeURIComponent(apiNodeId)}&geometry=paths`,
);
const root = nodesRes.nodes?.[apiNodeId]?.document;
if (!root) {
  console.error(`Node ${apiNodeId} not found in file ${fileKey}.`);
  process.exit(1);
}

writeFileSync(join(outDir, 'node-66-7534.json'), JSON.stringify(root, null, 2));
writeFileSync(join(outDir, 'metadata.json'), JSON.stringify({
  fileKey,
  nodeId: apiNodeId,
  name: root.name,
  type: root.type,
  pulledAt: new Date().toISOString(),
}, null, 2));

const imgRes = await api(
  `/images/${fileKey}?ids=${encodeURIComponent(apiNodeId)}&format=png&scale=2`,
);
const imageUrl = imgRes.images?.[apiNodeId];
if (imageUrl) {
  const png = await fetch(imageUrl);
  if (png.ok) {
    const buf = Buffer.from(await png.arrayBuffer());
    writeFileSync(join(outDir, 'node-66-7534.png'), buf);
  }
}

console.log(`Wrote ${outDir}/node-66-7534.json (${root.name})`);
if (imageUrl) console.log(`Wrote ${outDir}/node-66-7534.png`);
