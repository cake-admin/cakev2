import {
  formatDuration,
  getSoundById,
  getSoundUrl,
  soundCatalog,
  soundFamilies,
} from './sound-catalog';

describe('sound catalog', () => {
  test('groups the upstream files into profiled sound families', () => {
    expect(soundCatalog).toHaveLength(34);
    expect(soundFamilies).toEqual(
      expect.arrayContaining([
        'Alert',
        'Device',
        'Expression',
        'Feedback',
        'Navigation',
        'Notification',
        'System',
      ]),
    );
    expect(soundCatalog.every((sound) => sound.name && sound.primary)).toBe(true);
  });

  test('preserves only the variants that exist upstream', () => {
    const confirmUp = getSoundById('confirm-up');
    expect(confirmUp.files.map((file) => file.variant)).toEqual([0, 1]);
    expect(confirmUp.variantCount).toBe(1);
    expect(getSoundById('confirm-down').files.map((file) => file.variant)).toEqual([
      0,
      1,
      2,
      3,
    ]);
  });

  test('ships measured duration and waveform data for every playable file', () => {
    const files = soundCatalog.flatMap((sound) => sound.files);
    expect(files).toHaveLength(107);
    expect(files.every((file) => file.durationMs > 0)).toBe(true);
    expect(files.every((file) => file.peaks.length === 96)).toBe(true);
    expect(new Set(files.map((file) => file.file)).size).toBe(files.length);
  });

  test('builds deployment-safe asset URLs and duration labels', () => {
    const primary = getSoundById('confirm-up').primary;
    expect(getSoundUrl(primary)).toMatch(/\/sounds\/confirm-up\.ogg$/);
    expect(formatDuration(350)).toBe('350 ms');
    expect(formatDuration(1007)).toBe('1.0 s');
    expect(formatDuration(30000)).toBe('30 s');
  });
});
