import React from 'react';
import { ToggleGroup as RadixToggleGroup } from 'radix-ui';
import styled from 'styled-components';

import { HelperString, InputLabel, type HelperTone } from '../Elements';

/**
 * cake& TimeInput — a 12-hour time control (Figma "Time Input", node
 * 75:6385). It composes InputLabel above one or two segmented time fields and
 * HelperString beneath them.
 *
 * Hours and minutes use native text inputs with numeric input modes, retaining
 * the expected mobile keyboard and form semantics. Radix ToggleGroup owns the
 * mutually-exclusive AM/PM selector and its keyboard/radio-like behavior.
 *
 * Figma states:
 * - default: `--color-surfaces-on-container-high` and a hairline border.
 * - editing: white container surface and `--stroke-150` primary border.
 * - range: two controls, 48px apart, with one shared helper line.
 * - validation/disabled are composed from the established cake& form-field
 *   semantics because Figma exports only default and editing.
 */

/** Figma node 75:6385 intrinsic time-control height. */
const CONTROL_HEIGHT = 40;

export type TimePeriod = 'AM' | 'PM';

/** The independent segments of a 12-hour clock value. Empty strings represent an incomplete entry. */
export interface TimeValue {
  hours: string;
  minutes: string;
  period: TimePeriod;
}

/** Start and end values used by `mode="range"`. */
export interface TimeRangeValue {
  start: TimeValue;
  end: TimeValue;
}

type TimeStatus = 'default' | 'success' | 'error';

const EMPTY_TIME: TimeValue = { hours: '', minutes: '', period: 'AM' };

const Root = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: var(--space-050);
  max-width: 100%;
  font-family: var(--font-family);
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-050);
  min-width: 0;
`;

const RangeFields = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-800);
  align-items: flex-start;
`;

const TimeBox = styled.div<{ $status: TimeStatus }>`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  height: ${CONTROL_HEIGHT}px;
  overflow: hidden;
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

const Segment = styled.input<{ $edge: 'start' | 'end' }>`
  box-sizing: content-box;
  width: 2ch;
  height: 100%;
  padding: 0 ${(p) => (p.$edge === 'start' ? 'var(--space-100)' : 'var(--space-200)')}
    0 ${(p) => (p.$edge === 'start' ? 'var(--space-200)' : 'var(--space-100)')};
  border: none;
  outline: none;
  background: transparent;
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  line-height: 1.35;
  color: var(--color-text-icon-primary);

  &::placeholder {
    color: var(--color-text-icon-placeholder);
    opacity: 1;
  }

  &:disabled {
    color: var(--color-disabled-disabled-inverse);
    cursor: not-allowed;
  }
`;

const Separator = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-icon-placeholder);
  font-family: var(--font-family);
  font-size: var(--type-size-subject);
  font-weight: var(--font-weight-medium);
  line-height: 1.35;
`;

const PeriodGroup = styled(RadixToggleGroup.Root)`
  display: inline-flex;
  align-self: stretch;
`;

const PeriodButton = styled(RadixToggleGroup.Item)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 47px;
  padding: 0 var(--space-200);
  border: none;
  background: var(--color-tonal-tonal-secondary-overlay);
  color: var(--color-text-icon-on-tonal-secondary);
  font-family: var(--font-family);
  font-size: var(--type-size-body);
  font-weight: var(--font-weight-bold);
  line-height: 1.35;
  cursor: pointer;
  transition: background 120ms ease, color 120ms ease;

  &[data-state='on'] {
    background: var(--color-primary-primary);
    color: var(--color-text-icon-on-primary);
  }

  &:hover:not(:disabled):not([data-state='on']) {
    background: var(--color-tonal-tonal-secondary-overlay-hover);
  }

  &:focus {
    position: relative;
    outline: none;
    z-index: 1;
  }

  &:focus-visible::after {
    position: absolute;
    inset: calc(var(--space-025) * -1);
    border: var(--stroke-200) solid var(--color-primary-primary);
    border-radius: var(--radius-100);
    content: '';
    pointer-events: none;
  }

  &:disabled {
    background: var(--color-disabled-disabled);
    color: var(--color-disabled-disabled-inverse);
    cursor: not-allowed;
  }
`;

const normalizeSegment = (value: string, min: number, max: number) => {
  if (value === '') return '';
  const numeric = Number(value);
  if (Number.isNaN(numeric)) return '';
  return String(Math.min(Math.max(numeric, min), max)).padStart(2, '0');
};

const sanitizeSegment = (value: string) => value.replace(/\D/g, '').slice(0, 2);

export interface TimeInputProps {
  /** Renders one time control or the Figma start/end range pair. @default 'single' */
  mode?: 'single' | 'range';
  /** Label for the single control. @default 'Select time' */
  label?: string;
  /** Label for the range start control. @default 'Start time' */
  startLabel?: string;
  /** Label for the range end control. @default 'End time' */
  endLabel?: string;
  /** Shows the InputLabel info icon(s). @default false */
  showLabelInfo?: boolean;
  /** Shows "(required)" and marks every native time segment required. @default false */
  required?: boolean;
  /** Helper content below the field(s). Defaults to the matching Figma guidance. */
  helperText?: React.ReactNode;
  /** Hides the shared HelperString. @default true */
  showHelper?: boolean;
  /** Validation state for all time controls. @default 'default' */
  status?: TimeStatus;
  /** Disables every segment and period choice. @default false */
  disabled?: boolean;
  /** Controlled value for `mode="single"`. */
  value?: TimeValue;
  /** Uncontrolled initial value for `mode="single"`. */
  defaultValue?: TimeValue;
  /** Fires with a complete segment object whenever a single value changes. */
  onValueChange?: (value: TimeValue) => void;
  /** Controlled start/end values for `mode="range"`. */
  rangeValue?: TimeRangeValue;
  /** Uncontrolled initial start/end values for `mode="range"`. */
  defaultRangeValue?: TimeRangeValue;
  /** Fires with both segment objects whenever either range value changes. */
  onRangeValueChange?: (value: TimeRangeValue) => void;
  /** Accessible name for a labelless single time control. */
  'aria-label'?: string;
}

interface TimeFieldProps {
  label: string;
  showLabelInfo: boolean;
  required: boolean;
  status: TimeStatus;
  disabled: boolean;
  value: TimeValue;
  onChange: (value: TimeValue) => void;
  helperId?: string;
  ariaLabel?: string;
}

const TimeField = ({
  label,
  showLabelInfo,
  required,
  status,
  disabled,
  value,
  onChange,
  helperId,
  ariaLabel,
}: TimeFieldProps) => {
  const generatedId = React.useId();
  const labelId = `${generatedId}-label`;
  const hourId = `${generatedId}-hours`;
  const minuteId = `${generatedId}-minutes`;
  const description = ariaLabel ?? label;

  const updateSegment = (segment: 'hours' | 'minutes', raw: string) => {
    onChange({ ...value, [segment]: sanitizeSegment(raw) });
  };

  const commitSegment = (segment: 'hours' | 'minutes') => {
    onChange({
      ...value,
      [segment]: normalizeSegment(value[segment], segment === 'hours' ? 1 : 0, segment === 'hours' ? 12 : 59),
    });
  };

  return (
    <Field>
      {label ? (
        <InputLabel
          id={labelId}
          htmlFor={hourId}
          size="sm"
          required={required}
          showInfo={showLabelInfo}
          disabled={disabled}
        >
          {label}
        </InputLabel>
      ) : null}
      <TimeBox $status={status} role="group" aria-labelledby={label ? labelId : undefined} aria-label={ariaLabel}>
        <Segment
          id={hourId}
          $edge="start"
          value={value.hours}
          disabled={disabled}
          required={required}
          inputMode="numeric"
          autoComplete="off"
          placeholder="00"
          aria-label={`${description} hours`}
          aria-describedby={helperId}
          aria-invalid={status === 'error' || undefined}
          onChange={(event) => updateSegment('hours', event.target.value)}
          onBlur={() => commitSegment('hours')}
        />
        <Separator aria-hidden>:</Separator>
        <Segment
          id={minuteId}
          $edge="end"
          value={value.minutes}
          disabled={disabled}
          required={required}
          inputMode="numeric"
          autoComplete="off"
          placeholder="00"
          aria-label={`${description} minutes`}
          aria-describedby={helperId}
          aria-invalid={status === 'error' || undefined}
          onChange={(event) => updateSegment('minutes', event.target.value)}
          onBlur={() => commitSegment('minutes')}
        />
        <PeriodGroup
          type="single"
          value={value.period}
          onValueChange={(period) => {
            if (period === 'AM' || period === 'PM') onChange({ ...value, period });
          }}
          aria-label={`${description} period`}
        >
          <PeriodButton value="AM" disabled={disabled}>
            AM
          </PeriodButton>
          <PeriodButton value="PM" disabled={disabled}>
            PM
          </PeriodButton>
        </PeriodGroup>
      </TimeBox>
    </Field>
  );
};

export const TimeInput = React.forwardRef<HTMLDivElement, TimeInputProps>(
  (
    {
      mode = 'single',
      label = 'Select time',
      startLabel = 'Start time',
      endLabel = 'End time',
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
    const [innerValue, setInnerValue] = React.useState<TimeValue>({ ...EMPTY_TIME, ...defaultValue });
    const [innerRangeValue, setInnerRangeValue] = React.useState<TimeRangeValue>(() => ({
      start: { ...EMPTY_TIME, ...defaultRangeValue?.start },
      end: { ...EMPTY_TIME, ...defaultRangeValue?.end },
    }));

    const currentValue = { ...EMPTY_TIME, ...innerValue, ...value };
    const currentRangeValue = {
      start: { ...EMPTY_TIME, ...innerRangeValue.start, ...rangeValue?.start },
      end: { ...EMPTY_TIME, ...innerRangeValue.end, ...rangeValue?.end },
    };
    const tone: HelperTone = disabled
      ? 'disabled'
      : status === 'success'
        ? 'success'
        : status === 'error'
          ? 'error'
          : 'greyscale';
    const resolvedHelperText =
      helperText ?? (mode === 'range' ? 'Enter a start and end time for the range' : 'Enter a time');

    const updateSingle = (next: TimeValue) => {
      setInnerValue(next);
      onValueChange?.(next);
    };

    const updateRange = (key: keyof TimeRangeValue, next: TimeValue) => {
      const updated = { ...currentRangeValue, [key]: next };
      setInnerRangeValue(updated);
      onRangeValueChange?.(updated);
    };

    return (
      <Root ref={ref}>
        {mode === 'range' ? (
          <RangeFields>
            <TimeField
              label={startLabel}
              showLabelInfo={showLabelInfo}
              required={required}
              status={status}
              disabled={disabled}
              value={currentRangeValue.start}
              onChange={(next) => updateRange('start', next)}
              helperId={showHelper ? helperId : undefined}
            />
            <TimeField
              label={endLabel}
              showLabelInfo={showLabelInfo}
              required={required}
              status={status}
              disabled={disabled}
              value={currentRangeValue.end}
              onChange={(next) => updateRange('end', next)}
              helperId={showHelper ? helperId : undefined}
            />
          </RangeFields>
        ) : (
          <TimeField
            label={label}
            showLabelInfo={showLabelInfo}
            required={required}
            status={status}
            disabled={disabled}
            value={currentValue}
            onChange={updateSingle}
            helperId={showHelper ? helperId : undefined}
            ariaLabel={ariaLabel}
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

TimeInput.displayName = 'TimeInput';
