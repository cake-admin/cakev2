import { useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const MENU_MIN_WIDTH = 240;
const MENU_MAX_HEIGHT = 260;

/** Searchable single-select for map region labels (country / continent names). */
export function RegionCombobox({
  value,
  options,
  taken,
  onChange,
  ariaLabel = 'Region',
}: {
  value: string;
  options: readonly string[];
  /** Labels already used by other rows — still allow the current value. */
  taken: Set<string>;
  onChange: (next: string) => void;
  ariaLabel?: string;
}) {
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [menuPos, setMenuPos] = useState<{ top: number; left: number; width: number } | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return options.filter((name) => {
      if (taken.has(name) && name !== value) return false;
      if (!q) return true;
      return name.toLowerCase().includes(q);
    });
  }, [options, query, taken, value]);

  const placeMenu = () => {
    const el = triggerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const width = Math.max(r.width, MENU_MIN_WIDTH);
    let left = r.left;
    // Keep the menu inside the viewport.
    left = Math.min(left, window.innerWidth - width - 8);
    left = Math.max(8, left);
    let top = r.bottom + 4;
    const spaceBelow = window.innerHeight - top - 8;
    if (spaceBelow < 120 && r.top > spaceBelow) {
      top = Math.max(8, r.top - MENU_MAX_HEIGHT - 4);
    }
    setMenuPos({ top, left, width });
  };

  useLayoutEffect(() => {
    if (!open) {
      setMenuPos(null);
      return;
    }
    placeMenu();
    const onScroll = () => placeMenu();
    window.addEventListener('resize', placeMenu);
    // Capture scrolls from the panel (overflow:auto ancestors).
    window.addEventListener('scroll', onScroll, true);
    return () => {
      window.removeEventListener('resize', placeMenu);
      window.removeEventListener('scroll', onScroll, true);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    searchRef.current?.focus();
    const onDoc = (e: MouseEvent) => {
      const t = e.target as Node;
      if (rootRef.current?.contains(t) || menuRef.current?.contains(t)) return;
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const menu =
    open && menuPos
      ? createPortal(
          <div
            ref={menuRef}
            className="region-combo__menu"
            id={listId}
            role="listbox"
            style={{
              top: menuPos.top,
              left: menuPos.left,
              width: menuPos.width,
              maxHeight: MENU_MAX_HEIGHT,
            }}
          >
            <input
              ref={searchRef}
              className="text-input region-combo__search"
              type="search"
              placeholder="Search…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search regions"
            />
            <div className="region-combo__list">
              {filtered.length === 0 ? (
                <div className="region-combo__empty">No matches</div>
              ) : (
                filtered.map((name) => (
                  <button
                    key={name}
                    type="button"
                    role="option"
                    aria-selected={name === value}
                    className={`region-combo__option ${name === value ? 'region-combo__option--active' : ''}`}
                    onClick={() => {
                      onChange(name);
                      setOpen(false);
                      setQuery('');
                    }}
                  >
                    {name}
                  </button>
                ))
              )}
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <div className="region-combo data-row__cat" ref={rootRef}>
      <button
        ref={triggerRef}
        type="button"
        className="text-input region-combo__trigger"
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => {
          setOpen((v) => !v);
          setQuery('');
        }}
      >
        <span className="region-combo__value">{value || 'Select…'}</span>
        <span className="region-combo__chev" aria-hidden>
          ▾
        </span>
      </button>
      {menu}
    </div>
  );
}
