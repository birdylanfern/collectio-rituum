/**
 * Typefaces offered in Settings.
 *
 * All fonts are self-hosted (via @fontsource) and only the Latin + Latin-Extended
 * files are bundled — enough for the Latin and English texts, including á é í ó ú ý
 * and ǽ. EB Garamond is always loaded; the others load the first time they are
 * needed (when Settings opens, or when one is chosen).
 *
 * To add a font: `npm i @fontsource/<name>`, then add an entry below with its
 * imports. Check that it has ǽ (U+01FD) — several popular fonts don't.
 */
import '@fontsource/eb-garamond/latin-400.css';
import '@fontsource/eb-garamond/latin-500.css';
import '@fontsource/eb-garamond/latin-600.css';
import '@fontsource/eb-garamond/latin-700.css';
import '@fontsource/eb-garamond/latin-400-italic.css';
import '@fontsource/eb-garamond/latin-500-italic.css';
import '@fontsource/eb-garamond/latin-600-italic.css';
import '@fontsource/eb-garamond/latin-700-italic.css';
import '@fontsource/eb-garamond/latin-ext-400.css';
import '@fontsource/eb-garamond/latin-ext-500.css';
import '@fontsource/eb-garamond/latin-ext-600.css';
import '@fontsource/eb-garamond/latin-ext-700.css';
import '@fontsource/eb-garamond/latin-ext-400-italic.css';
import '@fontsource/eb-garamond/latin-ext-500-italic.css';
import '@fontsource/eb-garamond/latin-ext-600-italic.css';
import '@fontsource/eb-garamond/latin-ext-700-italic.css';
import './fonts/symbols.css';

export type FontId =
  | 'eb-garamond'
  | 'cormorant-garamond'
  | 'crimson-pro'
  | 'cardo'
  | 'libre-baskerville'
  | 'literata';

export interface FontOption {
  id: FontId;
  label: string;
  /** CSS font-family name */
  family: string;
  /** Short hint shown under the name in Settings */
  description: string;
  /** Loads the font files (no-op if already loaded) */
  load: () => Promise<unknown>;
}

export const DEFAULT_FONT_ID: FontId = 'eb-garamond';

export const FONT_OPTIONS: FontOption[] = [
  {
    id: 'eb-garamond',
    label: 'EB Garamond',
    family: 'EB Garamond',
    description: 'Default · classic book face',
    load: () => Promise.resolve(), // bundled up front (see imports above)
  },
  {
    id: 'cormorant-garamond',
    label: 'Cormorant Garamond',
    family: 'Cormorant Garamond',
    description: 'Elegant · light, runs small',
    load: () =>
      Promise.all([
        import('@fontsource/cormorant-garamond/latin-400.css'),
        import('@fontsource/cormorant-garamond/latin-600.css'),
        import('@fontsource/cormorant-garamond/latin-700.css'),
        import('@fontsource/cormorant-garamond/latin-400-italic.css'),
        import('@fontsource/cormorant-garamond/latin-600-italic.css'),
        import('@fontsource/cormorant-garamond/latin-ext-400.css'),
        import('@fontsource/cormorant-garamond/latin-ext-600.css'),
        import('@fontsource/cormorant-garamond/latin-ext-700.css'),
        import('@fontsource/cormorant-garamond/latin-ext-400-italic.css'),
        import('@fontsource/cormorant-garamond/latin-ext-600-italic.css'),
      ]),
  },
  {
    id: 'crimson-pro',
    label: 'Crimson Pro',
    family: 'Crimson Pro',
    description: 'Warm · easy on the eyes',
    load: () =>
      Promise.all([
        import('@fontsource/crimson-pro/latin-400.css'),
        import('@fontsource/crimson-pro/latin-600.css'),
        import('@fontsource/crimson-pro/latin-700.css'),
        import('@fontsource/crimson-pro/latin-400-italic.css'),
        import('@fontsource/crimson-pro/latin-600-italic.css'),
        import('@fontsource/crimson-pro/latin-ext-400.css'),
        import('@fontsource/crimson-pro/latin-ext-600.css'),
        import('@fontsource/crimson-pro/latin-ext-700.css'),
        import('@fontsource/crimson-pro/latin-ext-400-italic.css'),
        import('@fontsource/crimson-pro/latin-ext-600-italic.css'),
      ]),
  },
  {
    id: 'cardo',
    label: 'Cardo',
    family: 'Cardo',
    description: 'Scholarly · made for classics',
    load: () =>
      Promise.all([
        import('@fontsource/cardo/latin-400.css'),
        import('@fontsource/cardo/latin-700.css'),
        import('@fontsource/cardo/latin-400-italic.css'),
        import('@fontsource/cardo/latin-ext-400.css'),
        import('@fontsource/cardo/latin-ext-700.css'),
        import('@fontsource/cardo/latin-ext-400-italic.css'),
      ]),
  },
  {
    id: 'libre-baskerville',
    label: 'Libre Baskerville',
    family: 'Libre Baskerville',
    description: 'Sturdy · wide, high contrast',
    load: () =>
      Promise.all([
        import('@fontsource/libre-baskerville/latin-400.css'),
        import('@fontsource/libre-baskerville/latin-600.css'),
        import('@fontsource/libre-baskerville/latin-700.css'),
        import('@fontsource/libre-baskerville/latin-400-italic.css'),
        import('@fontsource/libre-baskerville/latin-600-italic.css'),
        import('@fontsource/libre-baskerville/latin-ext-400.css'),
        import('@fontsource/libre-baskerville/latin-ext-600.css'),
        import('@fontsource/libre-baskerville/latin-ext-700.css'),
        import('@fontsource/libre-baskerville/latin-ext-400-italic.css'),
        import('@fontsource/libre-baskerville/latin-ext-600-italic.css'),
      ]),
  },
  {
    id: 'literata',
    label: 'Literata',
    family: 'Literata',
    description: 'Clear · designed for screens',
    load: () =>
      Promise.all([
        import('@fontsource/literata/latin-400.css'),
        import('@fontsource/literata/latin-600.css'),
        import('@fontsource/literata/latin-700.css'),
        import('@fontsource/literata/latin-400-italic.css'),
        import('@fontsource/literata/latin-600-italic.css'),
        import('@fontsource/literata/latin-ext-400.css'),
        import('@fontsource/literata/latin-ext-600.css'),
        import('@fontsource/literata/latin-ext-700.css'),
        import('@fontsource/literata/latin-ext-400-italic.css'),
        import('@fontsource/literata/latin-ext-600-italic.css'),
      ]),
  },
];

export const isFontId = (v: unknown): v is FontId => FONT_OPTIONS.some((o) => o.id === v);

export const getFontOption = (id: FontId): FontOption =>
  FONT_OPTIONS.find((o) => o.id === id) ?? FONT_OPTIONS[0];

/**
 * The browser picks a font glyph by glyph, walking this list in order:
 *   1. the chosen font,
 *   2. EB Garamond,
 *   3. EB Garamond Symbols (carries ℣ and ℟, which no web build of the fonts above includes),
 *   4. system serif.
 * So whenever the chosen font lacks ℣ or ℟, they are drawn in EB Garamond.
 */
export const fontStack = (family: string): string =>
  `'${family}', 'EB Garamond', 'EB Garamond Symbols', Georgia, 'Times New Roman', serif`;

export const loadFont = (id: FontId): Promise<unknown> => getFontOption(id).load();
