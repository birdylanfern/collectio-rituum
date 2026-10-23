import { RitualItem } from './types/liturgy';

/**
 * Search helpers for the home page.
 *
 * Everything is "folded" before comparing: lower-cased, accents removed, and æ/œ spelled out,
 * so typing "ecclesia" finds "Ecclésia" and "ae" finds "ǽ". Search covers the titles, tags and
 * the full text of each rite (Latin and English, rubrics and notes included).
 */

const foldChar = (ch: string): string => {
  if (ch.charCodeAt(0) < 128) return ch.toLowerCase(); // fast path for plain ASCII
  return ch
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/æ/g, 'ae')
    .replace(/œ/g, 'oe');
};

/** Folded copy of `s`, plus a map from each folded character back to its index in `s`. */
const foldWithMap = (s: string): { out: string; map: number[] } => {
  let out = '';
  const map: number[] = [];
  let i = 0;
  for (const ch of s) {
    const folded = foldChar(ch);
    for (let k = 0; k < folded.length; k++) map.push(i);
    out += folded;
    i += ch.length;
  }
  return { out, map };
};

export const fold = (s: string): string => foldWithMap(s).out;

/** Removes the [^3] note markers so they never get in the way of a match. */
const clean = (s: string): string => s.replace(/\[\^\d+\]/g, '');

export const tokenize = (query: string): string[] => fold(query).split(/\s+/).filter(Boolean);

export interface SearchEntry {
  ritual: RitualItem;
  /** Folded title (English + Latin) and tags */
  title: string;
  /** Folded text of every line */
  body: string;
}

export const buildSearchIndex = (rituals: RitualItem[]): SearchEntry[] =>
  rituals.map((ritual) => ({
    ritual,
    title: fold([ritual.titleEnglish, ritual.titleLatin, ...(ritual.tags ?? [])].join(' ')),
    body: fold(
      clean(ritual.lines.map((l) => `${l.textLatin ?? ''} ${l.textEnglish ?? ''}`).join(' '))
    ),
  }));

export interface SearchResult {
  ritual: RitualItem;
  /** True when the words were found in the title/tags; false when only in the text of the rite */
  inTitle: boolean;
  /** A short piece of the rite's text around the match (only for text-only matches) */
  snippet?: string;
}

/** A short excerpt of the best-matching line of the rite, or undefined if nothing matches. */
const findSnippet = (ritual: RitualItem, tokens: string[], maxLen = 120): string | undefined => {
  let best: { text: string; start: number; score: number } | null = null;
  for (const line of ritual.lines) {
    for (const raw of [line.textLatin, line.textEnglish]) {
      if (!raw) continue;
      const text = clean(raw);
      const { out, map } = foldWithMap(text);
      let score = 0;
      let first = -1;
      for (const t of tokens) {
        const p = out.indexOf(t);
        if (p >= 0) {
          score++;
          if (first < 0 || p < first) first = p;
        }
      }
      if (score && (!best || score > best.score)) best = { text, start: map[first], score };
      if (best && best.score === tokens.length) break;
    }
    if (best && best.score === tokens.length) break;
  }
  if (!best) return undefined;
  const from = Math.max(0, best.start - 30);
  const piece = best.text.slice(from, from + maxLen).trim();
  return `${from > 0 ? '…' : ''}${piece}${from + maxLen < best.text.length ? '…' : ''}`;
};

/**
 * Every word typed must appear somewhere in the rite. Rites matching in their title come first,
 * then rites that only match in their text (each shown with a snippet). Without a query, all
 * rites are returned in book order.
 */
export const searchRituals = (index: SearchEntry[], query: string): SearchResult[] => {
  const tokens = tokenize(query);
  if (!tokens.length) return index.map((e) => ({ ritual: e.ritual, inTitle: true }));

  const inTitle: SearchResult[] = [];
  const inText: SearchResult[] = [];
  for (const e of index) {
    if (tokens.every((t) => e.title.includes(t))) {
      inTitle.push({ ritual: e.ritual, inTitle: true });
    } else if (tokens.every((t) => e.title.includes(t) || e.body.includes(t))) {
      inText.push({ ritual: e.ritual, inTitle: false, snippet: findSnippet(e.ritual, tokens) });
    }
  }
  return [...inTitle, ...inText];
};
