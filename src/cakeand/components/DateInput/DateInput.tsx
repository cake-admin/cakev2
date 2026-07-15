import React from 'react';
import { AccessibleIcon } from 'radix-ui';
import styled from 'styled-components';
import { CalendarDays } from 'lucide-react';

import { HelperString, InputLabel, type HelperTone } from '../Elements';

/**
 * cake& DateInput — an MM/DD/YY field with a native calendar picker action
 * (Figma "Date Input", node 76:6598). It composes InputLabel and
 * HelperString, and can render one date or a start/end range.
 *
 * There is no Figma calendar panel in the supplied node, so the calendar
 * action opens the browser's native date picker rather than inventing an
 * unreviewed popover calendar. Typed dates are normalized to MM/DD/YY on blur.
 *
 * State model:
 * - default: `--color-surfaces-on-container-high` / border hairline.
 * - hover: `--color-stroke-border-high`.
 * - typing: white surface + `--stroke-150` primary border.
 * - validation/disabled: the established cake& form-field semantic treatment.
 */

/** Figma node 76:6598 intrinsic field and calendar-slot geometry. */
const FIELD_HEIGHT = 40;
const CALENDAR_SIZE = 24;

export interface DateRangeValue {
  start: string;
  end: string;
}

type DateStatus = 'default' | 'success' | 'error';

const Root = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: var(--space-050);
  max-width: 100%;
  font-family: var(--font-family);
`;

const DateFieldRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-050);
  width: 136px;
`;

const RangeFields = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-800);
  align-items: flex-start;
`;

const Box = styled.div<{ $status: DateStatus }>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  height: ${FIELD_HEIGHT}px;
  padding: 0 var(--space-200);
  border: var(--stroke-100) solid var(--color-stroke-border);
  border-radius: var(--radius-200);
  background: var(--color-surfaces-on-container-high);
  transition: background 120ms ease, border-color 120ms ease;

  &:hover:not(:focus-within) {
    border-color: var(--color-stroke-border-high);
  }

  &:focus-within {
    background: var(--color-surfaces-container);
    border: var(--stroke-150) solid var(--color-primary-primary);
  }

  ${(p) =>
    p.$status === 'success' &&
    `
      &, &:hover:not(:focus-within), &:focus-within {
        background: var(--color-success-success-overlay);
        border: var(--stroke-150) solid var(--color-success-success);
      }
    `}

  ${(p) =>
    p.$status === 'error' &&
    `
      &, &:hover:not(:focus-within), &:focus-within {
        background: var(--color-error-error-overlay);
        border: var(--stroke-150) solid var(--color-error-error);
      }
    `}

  &:has(input:disabled) {
    background: var(--color-disabled-disabled);
    border-color: transparent;
    color: var(--color-disabled-disabled-inverse);
    cursor: not-allowed;
  }
`;

const TextInput = styled.input`
  flex: 1;
  min-width: 0;
  height: 100%;
  padding: 0 var(--space-100);
  border: none;
  outline: none;
  background: transparent;
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  line-height: 1.35;
  color: var(--color-text-icon-primary);

  &::placeholder {
    color: var(--color-text-icon-placeholder);
  }

  &:disabled {
    color: var(--color-disabled-disabled-inverse);
    cursor: not-allowed;

    &::placeholder {
      color: var(--color-disabled-disabled-inverse);
    }
  }
`;

const CalendarButton = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${CALENDAR_SIZE}px;
  height: ${CALENDAR_SIZE}px;
  padding: 0;
  border: none;
  border-radius: var(--radius-1000);
  background: transparent;
  color: var(--color-text-icon-secondary);
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:focus-visible::after {
    position: absolute;
    inset: calc(var(--space-025) * -1);
    border: var(--stroke-200) solid var(--color-primary-primary);
    border-radius: var(--radius-1000);
    content: '';
    pointer-events: none;
  }

  & > svg {
    width: 100%;
    height: 100%;
  }

  &:disabled {
    color: var(--color-disabled-disabled-inverse);
    cursor: not-allowed;
  }
`;

const NativePicker = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  pointer-events: none;
`;

const sanitizeDate = (value: string) => value.replace(/\D/g, '').slice(0, 6);

const formatDate = (value: string) => {
  const digits = sanitizeDate(value);
  if (digits.length <= 2) return digits;
  if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
};

const isValidDate = (value: string) => {
  const match = /^(\d{2})\/(\d{2})\/(\d{2})$/.exec(value);
  if (!match) return false;
  const month = Number(match[1]);
  const day = Number(match[2]);
  const year = 2000 + Number(match[3]);
  const date = new Date(year, month - 1, day);
  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
};

const isoToDisplay = (iso: string) => {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  return match ? `${match[2]}/${match[3]}/${match[1].slice(-2)}` : '';
};

const displayToIso = (value: string) => {
  if (!isValidDate(value)) return '';
  const [month, day, year] = value.split('/');
  return `20${year}-${month}-${day}`;
};

export interface DateInputProps {
  /** Renders one date field or the Figma start/end range pair. @default 'single' */
  mode?: 'single' | 'range';
  /** Label for the single date field. @default 'Select date' */
  label?: string;
  /** Label for the range start field. @default 'Start date' */
  startLabel?: string;
  /** Label for the range end field. @default 'End date' */
  endLabel?: string;
  /** Shows the InputLabel info icon(s). @default false */
  showLabelInfo?: boolean;
  /** Marks every native date input required. @default false */
  required?: boolean;
  /** Helper content below the field(s), replacing the Figma default guidance. */
  helperText?: React.ReactNode;
  /** Hides the shared HelperString. @default true */
  showHelper?: boolean;
  /** Validation state for all rendered fields. @default 'default' */
  status?: DateStatus;
  /** Disables date typing and the native calendar action. @default false */
  disabled?: boolean;
  /** Controlled MM/DD/YY value for `mode="single"`. */
  value?: string;
  /** Uncontrolled MM/DD/YY value for `mode="single"`. */
  defaultValue?: string;
  /** Fires with the formatted MM/DD/YY single-date value. */
  onValueChange?: (value: string) => void;
  /** Controlled MM/DD/YY start/end values for `mode="range"`. */
  rangeValue?: DateRangeValue;
  /** Uncontrolled MM/DD/YY start/end values for `mode="range"`. */
  defaultRangeValue?: DateRangeValue;
  /** Fires with start/end values whenever either range input changes. */
  onRangeValueChange?: (value: DateRangeValue) => void;
  /** Accessible name for a labelless single date field. */
  'aria-label'?: string;
}

interface DateFieldProps {
  label: string;
  showLabelInfo: boolean;
  required: boolean;
  status: DateStatus;
  disabled: boolean;
  value: string;
  helperId?: string;
  ariaLabel?: string;
  onChange: (value: string) => void;
}

const DateField = ({
  label,
  showLabelInfo,
  required,
  status,
  disabled,
  value,
  helperId,
  ariaLabel,
  onChange,
}: DateFieldProps) => {
  const generatedId = React.useId();
  const inputId = `${generatedId}-input`;
  const nativePickerRef = React.useRef<HTMLInputElement>(null);

  const openNativePicker = () => {
    const picker = nativePickerRef.current;
    if (!picker) return;
    if ('showPicker' in picker) {
      picker.showPicker();
    } else {
      picker.focus();
      picker.click();
    }
  };

  return (
    <DateFieldRoot>
      {label ? (
        <InputLabel
          htmlFor={inputId}
          size="sm"
          required={required}
          showInfo={showLabelInfo}
          disabled={disabled}
        >
          {label}
        </InputLabel>
      ) : null}
      <Box $status={status}>
        <TextInput
          id={inputId}
          value={value}
          disabled={disabled}
          required={required}
          inputMode="numeric"
          autoComplete="off"
          placeholder="MM/DD/YY"
          aria-label={ariaLabel ?? label}
          aria-describedby={helperId}
          aria-invalid={status === 'error' || undefined}
          onChange={(event) => onChange(formatDate(event.target.value))}
          onBlur={(event) => onChange(formatDate(event.target.value))}
        />
        <CalendarButton type="button" disabled={disabled} onClick={openNativePicker}>
          <AccessibleIcon.Root label={`Choose ${(ariaLabel ?? label) || 'date'} from calendar`}>
            <CalendarDays aria-hidden />
          </AccessibleIcon.Root>
        </CalendarButton>
        <NativePicker
          ref={nativePickerRef}
          type="date"
          tabIndex={-1}
          aria-hidden
          value={displayToIso(value)}
          onChange={(event) => onChange(isoToDisplay(event.target.value))}
        />
      </Box>
    </DateFieldRoot>
  );
};

export const DateInput = React.forwardRef<HTMLDivElement, DateInputProps>(
  (
    {
      mode = 'single',
      label = 'Select date',
      startLabel = 'Start date',
      endLabel = 'End date',
      showLabelInfo = false,
      required = false,
      helperText,
      showHelper = true,
      status = 'default',
      disabled = false,
      value,
      defaultValue,
      onValueChange,
      rangeValue,
      defaultRangeValue,
      onRangeValueChange,
      'aria-label': ariaLabel,
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const helperId = `${generatedId}-helper`;
    const [innerValue, setInnerValue] = React.useState(() => formatDate(defaultValue ?? ''));
    const [innerRangeValue, setInnerRangeValue] = React.useState<DateRangeValue>(() => ({
      start: formatDate(defaultRangeValue?.start ?? ''),
      end: formatDate(defaultRangeValue?.end ?? ''),
    }));

    const currentValue = formatDate(value ?? innerValue);
    const currentRangeValue = {
      start: formatDate(rangeValue?.start ?? innerRangeValue.start),
      end: formatDate(rangeValue?.end ?? innerRangeValue.end),
    };
    const tone: HelperTone = disabled
      ? 'disabled'
      : status === 'success'
        ? 'success'
        : status === 'error'
          ? 'error'
          : 'greyscale';
    const resolvedHelperText =
      helperText ?? (mode === 'range' ? 'Enter a start and end date for the range' : 'Enter a date or pick from calendar');

    const updateSingle = (next: string) => {
      setInnerValue(next);
      onValueChange?.(next);
    };

    const updateRange = (key: keyof DateRangeValue, next: string) => {
      const updated = { ...currentRangeValue, [key]: next };
      setInnerRangeValue(updated);
      onRangeValueChange?.(updated);
    };

    return (
      <Root ref={ref}>
        {mode === 'range' ? (
          <RangeFields>
            <DateField
              label={startLabel}
              showLabelInfo={showLabelInfo}
              required={required}
              status={status}
              disabled={disabled}
              value={currentRangeValue.start}
              helperId={showHelper ? helperId : undefined}
              onChange={(next) => updateRange('start', next)}
            />
            <DateField
              label={endLabel}
              showLabelInfo={showLabelInfo}
              required={required}
              status={status}
              disabled={disabled}
              value={currentRangeValue.end}
              helperId={showHelper ? helperId : undefined}
              onChange={(next) => updateRange('end', next)}
            />
          </RangeFields>
        ) : (
          <DateField
            label={label}
            showLabelInfo={showLabelInfo}
            required={required}
            status={status}
            disabled={disabled}
            value={currentValue}
            helperId={showHelper ? helperId : undefined}
            ariaLabel={ariaLabel}
            onChange={updateSingle}
          />
        )}
        {showHelper ? (
          <HelperString id={helperId} tone={tone}>
            {resolvedHelperText}
          </HelperString>
        ) : null}
      </Root>
    );
  },
);

DateInput.displayName = 'DateInput';
