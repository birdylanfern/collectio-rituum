export type RitualTheme = 'parchment' | 'dark';
export type TextLanguage = 'latin' | 'english';
export type RubricsLanguage = 'latin' | 'english';

export interface RitualVariant {
  id: string;
  label: string;
}

export type LiturgyCategory =
  | 'all'
  | 'sacraments'
  | 'sick_dying'
  | 'matrimony'
  | 'blessings'
  | 'burial'
  | 'brevissimae'
  | 'anniversaries';

export interface LineItem {
  speakerLatin?: string;
  speakerEnglish?: string;
  textLatin: string;
  textEnglish: string;
  isRubric?: boolean;
  isHeading?: boolean;
  isSacramental?: boolean;
  /** Said in Latin only (1954 Decree): sacramental forms, exorcisms, anointings, etc. */
  latinOnly?: boolean;
  /** Printed in English only in the book (e.g. optional closing prayer) */
  englishOnly?: boolean;
  /** Footnote printed at the foot of the page (bilingual) */
  isNote?: boolean;
  /**
   * Number shown as a superscript beside "Note". It matches a [^N] marker placed
   * in the text where the note applies, e.g. "…hábitet[^6] in eo." shows hábitet⁶.
   */
  noteNumber?: number;
  number?: number | string;
  variant?: string; // e.g. 'one' or 'many'
}

export interface RitualItem {
  id: string;
  titleEnglish: string;
  titleLatin: string;
  category: LiturgyCategory;
  categoryLabel?: string;
  page?: number;
  variants?: RitualVariant[];
  defaultVariant?: string;
  lines: LineItem[];
  tags?: string[];
}
