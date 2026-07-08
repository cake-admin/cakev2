/**
 * Synchronous copy via a hidden textarea + `execCommand('copy')`, intercepting
 * the `copy` event to set the exact MIME payloads. This runs INSIDE the click
 * gesture (no `await` first), so it works on non-secure origins and when the
 * async Clipboard API is blocked/flaky — the failure mode we hit otherwise.
 *
 * `html` (optional) is written to `text/html`, the slot Figma's paste importer
 * reads to turn pasted SVG markup into editable vectors. We deliberately never
 * write `image/svg+xml` (not on the clipboard-write safelist → rejects).
 */
function copyWithFormats(text: string, html?: string): boolean {
  if (typeof document === 'undefined') return false;
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.setAttribute('readonly', '');
  ta.style.position = 'fixed';
  ta.style.top = '-1000px';
  ta.style.left = '0';
  ta.style.opacity = '0';
  document.body.appendChild(ta);

  const onCopy = (e: ClipboardEvent) => {
    if (!e.clipboardData) return;
    e.clipboardData.setData('text/plain', text);
    if (html) e.clipboardData.setData('text/html', html);
    e.preventDefault();
  };
  document.addEventListener('copy', onCopy, true);

  let ok = false;
  try {
    ta.focus();
    ta.select();
    ok = document.execCommand('copy');
  } catch (err) {
    console.error('[export] execCommand copy failed', err);
  } finally {
    document.removeEventListener('copy', onCopy, true);
    ta.remove();
  }
  return ok;
}

/** Modern async Clipboard API fallback (used only if execCommand is unavailable). */
async function asyncCopyText(text: string): Promise<boolean> {
  try {
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (err) {
    console.error('[export] navigator.clipboard.writeText failed', err);
  }
  return false;
}

/** Copy an SVG string so Figma pastes it as editable vectors (text/plain + text/html). */
export async function copySvg(svg: string): Promise<boolean> {
  return copyWithFormats(svg, svg) || asyncCopyText(svg);
}

/** Copy plain text (e.g. a code snippet) to the clipboard. */
export async function copyText(text: string): Promise<boolean> {
  return copyWithFormats(text) || asyncCopyText(text);
}

export function downloadSvg(svg: string, filename: string): void {
  downloadBlob(svg, 'image/svg+xml', filename.endsWith('.svg') ? filename : `${filename}.svg`);
}

/** Download arbitrary text (e.g. a code snippet) as a file. */
export function downloadText(text: string, filename: string): void {
  downloadBlob(text, 'text/plain;charset=utf-8', filename);
}

function downloadBlob(content: string, type: string, filename: string): void {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
