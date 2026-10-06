import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const world = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/charts/geo/world.json'), 'utf8'));
const names = world.features.map((f) => f.properties.name).sort((a, b) => a.localeCompare(b));

const rules = [
  [
    'Africa',
    [
      'Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi', 'Cameroon', 'Cape Verde',
      'Central African Rep.', 'Chad', 'Comoros', 'Congo', "Côte d'Ivoire", 'Dem. Rep. Congo', 'Djibouti',
      'Egypt', 'Eq. Guinea', 'Eritrea', 'Ethiopia', 'Gabon', 'Gambia', 'Ghana', 'Guinea', 'Guinea-Bissau',
      'Kenya', 'Lesotho', 'Liberia', 'Libya', 'Madagascar', 'Malawi', 'Mali', 'Mauritania', 'Mauritius',
      'Morocco', 'Mozambique', 'Namibia', 'Niger', 'Nigeria', 'Rwanda', 'S. Sudan', 'Saint Helena',
      'São Tomé and Principe', 'Senegal', 'Seychelles', 'Sierra Leone', 'Somalia', 'South Africa', 'Sudan',
      'Swaziland', 'Tanzania', 'Togo', 'Tunisia', 'Uganda', 'W. Sahara', 'Zambia', 'Zimbabwe',
    ],
  ],
  [
    'Asia',
    [
      'Afghanistan', 'Armenia', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei', 'Cambodia',
      'China', 'Cyprus', 'N. Cyprus', 'Dem. Rep. Korea', 'Georgia', 'India', 'Indonesia', 'Iran', 'Iraq',
      'Israel', 'Japan', 'Jordan', 'Kazakhstan', 'Korea', 'Kuwait', 'Kyrgyzstan', 'Lao PDR', 'Lebanon',
      'Malaysia', 'Mongolia', 'Myanmar', 'Nepal', 'Oman', 'Pakistan', 'Palestine', 'Philippines', 'Qatar',
      'Russia', 'Saudi Arabia', 'Singapore', 'Sri Lanka', 'Syria', 'Tajikistan', 'Thailand', 'Timor-Leste',
      'Turkey', 'Turkmenistan', 'United Arab Emirates', 'Uzbekistan', 'Vietnam', 'Yemen', 'Siachen Glacier',
      'Br. Indian Ocean Ter.',
    ],
  ],
  [
    'Europe',
    [
      'Aland', 'Albania', 'Andorra', 'Austria', 'Belarus', 'Belgium', 'Bosnia and Herz.', 'Bulgaria',
      'Croatia', 'Czech Rep.', 'Denmark', 'Estonia', 'Faeroe Is.', 'Finland', 'France', 'Germany', 'Greece',
      'Hungary', 'Iceland', 'Ireland', 'Isle of Man', 'Italy', 'Jersey', 'Latvia', 'Liechtenstein',
      'Lithuania', 'Luxembourg', 'Macedonia', 'Malta', 'Moldova', 'Montenegro', 'Netherlands', 'Norway',
      'Poland', 'Portugal', 'Romania', 'Serbia', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland',
      'Ukraine', 'United Kingdom',
    ],
  ],
  [
    'North America',
    [
      'Antigua and Barb.', 'Bahamas', 'Barbados', 'Belize', 'Bermuda', 'Canada', 'Cayman Is.', 'Costa Rica',
      'Cuba', 'Curaçao', 'Dominica', 'Dominican Rep.', 'El Salvador', 'Greenland', 'Grenada', 'Guatemala',
      'Haiti', 'Honduras', 'Jamaica', 'Mexico', 'Montserrat', 'Nicaragua', 'Panama', 'Puerto Rico',
      'Saint Lucia', 'St. Pierre and Miquelon', 'St. Vin. and Gren.', 'Trinidad and Tobago',
      'Turks and Caicos Is.', 'U.S. Virgin Is.', 'United States',
    ],
  ],
  [
    'South America',
    [
      'Argentina', 'Bolivia', 'Brazil', 'Chile', 'Colombia', 'Ecuador', 'Falkland Is.', 'Guyana', 'Paraguay',
      'Peru', 'Suriname', 'Uruguay', 'Venezuela', 'S. Geo. and S. Sandw. Is.',
    ],
  ],
  [
    'Oceania',
    [
      'American Samoa', 'Australia', 'Fiji', 'Fr. Polynesia', 'Guam', 'Kiribati', 'Micronesia',
      'N. Mariana Is.', 'New Caledonia', 'New Zealand', 'Niue', 'Palau', 'Papua New Guinea', 'Samoa',
      'Solomon Is.', 'Tonga', 'Vanuatu', 'Heard I. and McDonald Is.', 'Fr. S. Antarctic Lands',
    ],
  ],
];

const CONTINENT_NAMES = rules.map((r) => r[0]);
const byCountry = {};
for (const [cont, list] of rules) for (const c of list) byCountry[c] = cont;
for (const n of names) if (!byCountry[n]) byCountry[n] = 'Asia';

const out = `/** Auto-generated — run \`node scripts/gen-region-names.mjs\`. */
export const CONTINENT_NAMES = ${JSON.stringify(CONTINENT_NAMES, null, 2)} as const;
export type ContinentName = (typeof CONTINENT_NAMES)[number];

export const COUNTRY_NAMES: string[] = ${JSON.stringify(names, null, 2)};

/** Country GeoJSON name → continent (for dissolving country polygons). */
export const CONTINENT_BY_COUNTRY: Record<string, string> = ${JSON.stringify(byCountry, null, 2)};

export function regionNamesFor(grain: 'country' | 'continent'): readonly string[] {
  return grain === 'continent' ? CONTINENT_NAMES : COUNTRY_NAMES;
}
`;

fs.writeFileSync(path.join(__dirname, '../src/charts/geo/regionNames.ts'), out);
console.log('Wrote regionNames.ts', names.length, 'countries,', CONTINENT_NAMES.length, 'continents');
