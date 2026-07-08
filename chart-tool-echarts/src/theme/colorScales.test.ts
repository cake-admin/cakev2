import { describe, it, expect } from 'vitest';
import { buildColorSystem } from './colorScales';

const HEX = /^#[0-9a-f]{6}$/i;

describe('color system', () => {
  const light = buildColorSystem('#1d4ed8', '#c2410c', 'light');

  it('categorical returns N valid hex colors', () => {
    const cats = light.categorical(6);
    expect(cats).toHaveLength(6);
    cats.forEach((c) => expect(c).toMatch(HEX));
  });

  it('categorical entries are distinct (separated)', () => {
    const cats = light.categorical(6);
    expect(new Set(cats).size).toBe(cats.length);
  });

  it('tonal returns an ordered ramp of N valid colors', () => {
    const ramp = light.tonal('primary', 5);
    expect(ramp).toHaveLength(5);
    ramp.forEach((c) => expect(c).toMatch(HEX));
    expect(new Set(ramp).size).toBeGreaterThan(1);
  });

  it('dark mode derives different swatches than light', () => {
    const dark = buildColorSystem('#93c5fd', '#fdba74', 'dark');
    expect(dark.categorical(3)).not.toEqual(light.categorical(3));
  });

  it('resolve(categorical) returns N mixed colors', () => {
    expect(light.resolve({ variation: 'categorical' }, 4)).toHaveLength(4);
  });

  it('resolve(primary|secondary) returns N copies of a single color', () => {
    const prim = light.resolve({ variation: 'primary' }, 3);
    expect(prim).toEqual(['#1d4ed8', '#1d4ed8', '#1d4ed8']);
    const sec = light.resolve({ variation: 'secondary' }, 2);
    expect(sec).toEqual(['#c2410c', '#c2410c']);
  });

  it('states() uses the real token Hover/Press variants when available', () => {
    const cs = buildColorSystem('#1d4ed8', '#c2410c', 'light', {
      'tonal.tonal': '#aaaaaa',
      'tonal.tonalHover': '#999999',
      'tonal.tonalPress': '#888888',
    });
    const st = cs.states({ variation: 'primary', token: 'tonal.tonal' }, '#aaaaaa');
    expect(st.hover).toBe('#999999');
    expect(st.press).toBe('#888888');
  });

  it('states() derives a hover/press shade when no token variant exists', () => {
    const st = light.states({ variation: 'categorical' }, '#1d4ed8');
    expect(st.hover).toMatch(HEX);
    expect(st.press).toMatch(HEX);
    expect(st.hover).not.toBe('#1d4ed8');
    expect(st.press).not.toBe(st.hover);
  });

  it('uses a fixed categorical palette verbatim, identical in light & dark, cycling for count', () => {
    const palette = ['#7586ff', '#2cc27e', '#f65396'];
    const lp = buildColorSystem('#000000', '#111111', 'light', {}, palette);
    const dp = buildColorSystem('#ffffff', '#eeeeee', 'dark', {}, palette);
    expect(lp.resolve({ variation: 'categorical' }, 3)).toEqual(palette);
    // cycles when more colors are needed than the palette has
    expect(lp.resolve({ variation: 'categorical' }, 5)).toEqual([...palette, palette[0], palette[1]]);
    // mode-independent: a base never changes it, and dark === light
    expect(lp.resolve({ variation: 'categorical', base: 'secondary' }, 3)).toEqual(palette);
    expect(dp.resolve({ variation: 'categorical' }, 3)).toEqual(lp.resolve({ variation: 'categorical' }, 3));
  });

  it('sequential samples the fixed ramp (exact token stops for small counts), identical light & dark', () => {
    const ramp = ['#bcc3ff', '#98a4ff', '#7586ff', '#5066ff', '#394edb', '#2034b7'];
    const lp = buildColorSystem('#000000', '#111111', 'light', {}, [], undefined, ramp);
    const dp = buildColorSystem('#ffffff', '#eeeeee', 'dark', {}, [], undefined, ramp);
    expect(lp.sequentialRamp).toEqual(ramp);
    expect(lp.resolve({ variation: 'sequential' }, 6)).toEqual(ramp); // count == ramp → exact stops
    expect(lp.resolve({ variation: 'sequential' }, 2)).toEqual([ramp[0], ramp[5]]); // endpoints
    expect(dp.resolve({ variation: 'sequential' }, 6)).toEqual(ramp); // mode-independent
    lp.resolve({ variation: 'sequential' }, 10).forEach((c) => expect(c).toMatch(HEX)); // interpolated
  });

  it('semantic samples the red→green ramp (exact stops for small counts), identical light & dark', () => {
    const ramp = ['#df2e3c', '#ffb779', '#f9e374', '#b9d237', '#4aa42c'];
    const lp = buildColorSystem('#000000', '#111111', 'light', {}, [], undefined, [], ramp);
    const dp = buildColorSystem('#ffffff', '#eeeeee', 'dark', {}, [], undefined, [], ramp);
    expect(lp.semanticRamp).toEqual(ramp);
    expect(lp.resolve({ variation: 'semantic' }, 5)).toEqual(ramp);
    expect(lp.resolve({ variation: 'semantic' }, 2)).toEqual([ramp[0], ramp[4]]);
    expect(dp.resolve({ variation: 'semantic' }, 5)).toEqual(ramp);
    lp.resolve({ variation: 'semantic' }, 9).forEach((c) => expect(c).toMatch(HEX));
  });

  it('diverging samples the jade↔violet ramp (exact stops for small counts), identical light & dark', () => {
    const ramp = ['#2cc27e', '#44df95', '#f3f0e7', '#b89bff', '#6d35e0'];
    const lp = buildColorSystem('#000000', '#111111', 'light', {}, [], undefined, [], [], ramp);
    const dp = buildColorSystem('#ffffff', '#eeeeee', 'dark', {}, [], undefined, [], [], ramp);
    expect(lp.divergingRamp).toEqual(ramp);
    expect(lp.resolve({ variation: 'diverging' }, 5)).toEqual(ramp);
    expect(lp.resolve({ variation: 'diverging' }, 2)).toEqual([ramp[0], ramp[4]]);
    expect(dp.resolve({ variation: 'diverging' }, 5)).toEqual(ramp);
    lp.resolve({ variation: 'diverging' }, 9).forEach((c) => expect(c).toMatch(HEX));
  });

  it('resolve uses the selected token color when provided', () => {
    const withToken = buildColorSystem('#1d4ed8', '#c2410c', 'light', {
      'primary.primaryOverlay': 'rgba(80, 102, 255, 0.22)',
    });
    expect(withToken.resolve({ variation: 'primary', token: 'primary.primaryOverlay' }, 2)).toEqual([
      'rgba(80, 102, 255, 0.22)',
      'rgba(80, 102, 255, 0.22)',
    ]);
  });
});
