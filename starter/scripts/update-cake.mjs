#!/usr/bin/env node
/**
 * Move this prototype to the newest published cake& release.
 *
 *   npm run cake:update
 *
 * Resolves the latest release to an IMMUTABLE, version-specific tarball URL and
 * installs that.
 *
 * Why not just point package.json at a "latest.tgz" that always serves the
 * newest build? Because npm records a sha512 of the exact tarball bytes in
 * package-lock.json, and a URL whose contents change breaks that in three ways:
 *
 *   1. Nothing updates. npm compares the URL string to decide whether a locked
 *      dependency still satisfies the range; the string never changed, so it
 *      never refetches. You believe you are current and you are not.
 *   2. Then it hard-fails. The first `npm ci`, clean install, or teammate
 *      cloning the repo fetches the new bytes, they do not match the locked
 *      hash, and npm aborts with EINTEGRITY — an error with no obvious cause.
 *   3. It is not reproducible. npm honours HTTP cache freshness, so two people
 *      installing the same afternoon can get different builds.
 *
 * A versioned URL has none of those problems, which is why upgrading is an
 * explicit command rather than something that happens behind your back.
 *
 * The GitHub API call is unauthenticated — cake-admin/cakev2 is public, and the
 * anonymous rate limit (60/hour) is far beyond what this needs.
 */
import { execFileSync } from 'node:child_process';

const REPO = 'cake-admin/cakev2';
const API = `https://api.github.com/repos/${REPO}/releases/latest`;

/**
 * Fail with a readable message.
 *
 * Throws rather than calling process.exit(): exiting hard while fetch still has
 * sockets open trips a libuv assertion on Windows, so the user gets a C-level
 * crash dump stapled onto the end of an otherwise clean error message.
 */
class Fail extends Error {}
const die = (msg) => {
  throw new Fail(msg);
};

const main = async () => {
  const res = await fetch(API, { headers: { accept: 'application/vnd.github+json' } });

  if (res.status === 404) {
    die(
      `No published release on ${REPO} yet.\n` +
        `  See https://github.com/${REPO}/releases`,
    );
  }
  if (!res.ok) {
    die(
      `GitHub API returned ${res.status}.\n` +
        '  Install manually with the URL from the releases page:\n' +
        `  https://github.com/${REPO}/releases`,
    );
  }

  const release = await res.json();
  const asset = (release.assets ?? []).find((a) => /^cake-admin-cakeand-.*\.tgz$/.test(a.name));

  if (!asset) {
    die(
      `Release ${release.tag_name} has no package tarball attached.\n` +
        `  See https://github.com/${REPO}/releases`,
    );
  }

  process.stdout.write(`\n→ ${release.tag_name}\n  ${asset.browser_download_url}\n\n`);

  // shell:true on Windows — npm is a .cmd there, which execFile cannot run directly.
  execFileSync('npm', ['install', asset.browser_download_url], {
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });

  process.stdout.write(`\n✓ Now on cake& ${release.tag_name}\n`);
};

try {
  await main();
} catch (err) {
  process.stderr.write(`\n✗ ${err instanceof Fail ? err.message : (err.message ?? err)}\n`);
  process.exitCode = 1;
}
