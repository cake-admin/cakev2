import { useEffect, useRef, useState } from 'react';

/**
 * Numeric field with a local edit buffer. Uses type="text" + inputMode="decimal"
 * (not type="number") so the user can freely clear, type "-", "1.", etc. without
 * the value snapping to 0 mid-edit. Commits finite numbers live; normalizes on blur.
 * Resyncs from the external value only when not focused (e.g. preset reset).
 */
interface NumberInputProps {
  value: number;
  onChange: (value: number) => void;
  ariaLabel?: string;
  className?: string;
}

export function NumberInput({ value, onChange, ariaLabel, className = 'num-input' }: NumberInputProps) {
  const [text, setText] = useState<string>(String(value));
  const focused = useRef(false);

  useEffect(() => {
    if (!focused.current) setText(String(value));
  }, [value]);

  return (
    <input
      type="text"
      inputMode="decimal"
      className={className}
      value={text}
      aria-label={ariaLabel}
      onFocus={() => {
        focused.current = true;
      }}
      onChange={(e) => {
        const next = e.target.value;
        setText(next);
        const n = parseFloat(next);
        if (Number.isFinite(n)) onChange(n);
      }}
      onBlur={() => {
        focused.current = false;
        const n = parseFloat(text);
        const final = Number.isFinite(n) ? n : 0;
        onChange(final);
        setText(String(final));
      }}
    />
  );
}
