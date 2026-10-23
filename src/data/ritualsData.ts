import { RitualItem } from '../types/liturgy';

/**
 * Every rite, blessing and appendix item lives in its own file under ./rites/.
 * This module just collects them, so adding or editing a rite never means
 * touching this file — see src/data/rites/README.md.
 *
 * Order in the list = alphabetical order of the file NAME (folders are ignored),
 * which is why files start with a number: 010-…, 020-…, and so on.
 */
const modules = import.meta.glob<RitualItem>('./rites/**/*.ts', {
  eager: true,
  import: 'default',
});

const baseName = (path: string) => path.slice(path.lastIndexOf('/') + 1);

export const RITUALS_LIST: RitualItem[] = Object.entries(modules)
  .sort(([a], [b]) => baseName(a).localeCompare(baseName(b)))
  .map(([, ritual]) => ritual);

// Guard against copy-paste mistakes: ids are used in the page URL (#/id).
if (import.meta.env.DEV) {
  const seen = new Set<string>();
  for (const r of RITUALS_LIST) {
    if (seen.has(r.id)) console.warn(`[rites] Duplicate rite id: "${r.id}"`);
    seen.add(r.id);
  }
}
