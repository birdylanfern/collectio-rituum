import React, { useDeferredValue, useMemo } from 'react';
import { RitualItem, RitualTheme, LiturgyCategory } from '../types/liturgy';
import { Search, Settings, FileText } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { buildSearchIndex, searchRituals } from '../search';

interface Props {
  rituals: RitualItem[];
  onSelectRitual: (r: RitualItem) => void;
  theme: RitualTheme;
  onToggleTheme: () => void;
  onOpenSettings: () => void;
  /** The reading size chosen in Settings; the ritual cards follow it */
  fontSize: number;
  searchQuery: string;
  onSearchQueryChange: (q: string) => void;
  selectedCategory: LiturgyCategory;
  onSelectCategory: (c: LiturgyCategory) => void;
}

export const RitualListPage: React.FC<Props> = ({
  rituals,
  onSelectRitual,
  theme,
  onToggleTheme,
  onOpenSettings,
  fontSize,
  searchQuery,
  onSearchQueryChange,
  selectedCategory,
  onSelectCategory,
}) => {
  // Built once: accent-folded titles and full text of every rite
  const searchIndex = useMemo(() => buildSearchIndex(rituals), [rituals]);

  // Typing stays instant; the (heavier) text search catches up a moment later
  const deferredQuery = useDeferredValue(searchQuery);
  const results = useMemo(
    () =>
      searchRituals(searchIndex, deferredQuery).filter(
        (r) => selectedCategory === 'all' || r.ritual.category === selectedCategory
      ),
    [searchIndex, deferredQuery, selectedCategory]
  );

  const categories: { id: LiturgyCategory; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'sacraments', label: 'Sacraments' },
    { id: 'sick_dying', label: 'Sick & Dying' },
    { id: 'matrimony', label: 'Matrimony' },
    { id: 'blessings', label: 'Blessings (1-26)' },
    { id: 'burial', label: 'Burials' },
    { id: 'brevissimae', label: 'Emergency' },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col font-serif select-text transition-colors duration-200 ${
        theme === 'dark'
          ? 'bg-[#141210] text-[#f3ede2]'
          : 'bg-[#f4ede1] text-[#241e17]'
      }`}
    >
      {/* Top Header — stays on screen with the search bar beneath it */}
      <header
        className={`sticky top-0 z-30 border-b ${
          theme === 'dark'
            ? 'bg-[#181513]/95 border-[#2b2520]'
            : 'bg-[#f1e7d6]/95 border-[#dfd3bc] shadow-xs'
        } backdrop-blur-md`}
      >
        <div className="px-4 pt-3.5 pb-2 flex items-center justify-between">
          <div className="w-[72px]" />

          <h1
            className={`font-serif font-bold text-sm sm:text-base tracking-widest uppercase ${
              theme === 'dark' ? 'text-[#e26945]' : 'text-[#7a1818]'
            }`}
            style={{ fontFamily: 'var(--reading-font)' }}
          >
            THE ROMAN RITUAL
          </h1>

          <div className="w-[72px] flex items-center justify-end gap-1 -mr-1">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button
              onClick={onOpenSettings}
              className={`p-1.5 rounded-full transition-colors ${
                theme === 'dark'
                  ? 'text-stone-300 hover:bg-stone-800'
                  : 'text-[#7a1818] hover:bg-black/5'
              }`}
              title="Settings"
              aria-label="Open settings"
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="px-4 pb-3 max-w-xl mx-auto w-full">
        <div>
          <div
            className={`relative flex items-center rounded-xl border px-3 py-2 transition-colors ${
              theme === 'dark'
                ? 'bg-[#1e1a17] border-[#312a24] focus-within:border-[#e26945]'
                : 'bg-[#ece1cc] border-[#d8cca8] focus-within:border-red-900'
            }`}
          >
            <Search className="w-4 h-4 text-stone-500 mr-2 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchQueryChange(e.target.value)}
              placeholder="Search titles or text…"
              enterKeyHint="search"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              // 16px keeps iPhones from zooming the page when the field is tapped
              style={{ fontSize: '16px' }}
              className="w-full bg-transparent font-serif outline-none placeholder:text-stone-600 placeholder:italic"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchQueryChange('')}
                aria-label="Clear search"
                className="text-xs text-stone-400 hover:text-stone-600 px-1 font-sans"
              >
                ✕
              </button>
            )}
          </div>
        </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 px-4 pt-4 pb-6 max-w-xl mx-auto w-full">
        
        {/* Rituals List Cards */}
        <div className="space-y-2.5">
          {results.length === 0 ? (
            <div className="py-12 text-center text-stone-500 italic" style={{ fontSize: `${fontSize * 0.86}px` }}>
              No rituals or blessings found matching "{searchQuery}"
            </div>
          ) : (
            results.map(({ ritual: r, inTitle, snippet }) => (
              <button
                key={r.id}
                onClick={() => onSelectRitual(r)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all duration-150 group cursor-pointer block ${
                  theme === 'dark'
                    ? 'bg-[#1c1815] border-[#2c2621] hover:bg-[#25201b] hover:border-[#423932]'
                    : 'bg-[#f7f0e3] border-[#e2d5bd] hover:bg-[#efe4cf] hover:border-[#d0c0a0] shadow-xs'
                }`}
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h2 className="font-bold font-serif leading-snug" style={{ fontSize: `${fontSize}px` }}>
                    {r.titleEnglish}
                  </h2>
                  {r.page && (
                    <span
                      className="font-mono text-stone-600 dark:text-stone-400 shrink-0"
                      style={{ fontSize: `${Math.max(11, fontSize * 0.62)}px` }}
                    >
                      p. {r.page}
                    </span>
                  )}
                </div>
                <p
                  className={`italic font-serif mt-0.5 ${
                    theme === 'dark' ? 'text-[#e26945]' : 'text-[#963725]'
                  }`}
                  style={{ fontSize: `${fontSize * 0.86}px` }}
                >
                  {r.titleLatin}
                </p>
                {!inTitle && snippet && (
                  <p
                    className="mt-1.5 leading-snug line-clamp-2 text-stone-700 dark:text-stone-400"
                    style={{ fontSize: `${fontSize * 0.78}px` }}
                  >
                    {snippet}
                  </p>
                )}
              </button>
            ))
          )}
        </div>

        {/* Original 1954 Book Reference Footer */}
        <div
          className="mt-8 pt-4 border-t border-stone-300/40 dark:border-stone-800 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-stone-700 dark:text-stone-400"
          style={{ fontSize: `${Math.max(12, fontSize * 0.7)}px` }}
        >
          <span>Collectio Rituum (1954) · {rituals.length} Rites & Blessings</span>
          <a
            href={`${import.meta.env.BASE_URL}Collectio_Rituum_1954.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline text-stone-600 dark:text-stone-400"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Original PDF</span>
          </a>
        </div>

      </div>
      {/* Category filters — pinned to the bottom of the screen */}
      <nav
        className={`mt-auto sticky bottom-0 z-20 px-4 pt-2 border-t backdrop-blur-md pb-[max(0.5rem,env(safe-area-inset-bottom))] ${
          theme === 'dark'
            ? 'bg-[#141210]/95 border-[#29231f]'
            : 'bg-[#f4ede1]/95 border-[#e0d3bc]'
        }`}
        aria-label="Categories"
      >
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs max-w-xl mx-auto">
          {categories.map((c) => {
            const isSelected = selectedCategory === c.id;
            return (
              <button
                key={c.id}
                onClick={() => onSelectCategory(c.id)}
                className={`px-2.5 py-1 rounded-lg whitespace-nowrap transition-colors font-serif ${
                  isSelected
                    ? theme === 'dark'
                      ? 'bg-[#ea580c] text-white font-bold'
                      : 'bg-[#7a1818] text-white font-bold'
                    : theme === 'dark'
                    ? 'bg-[#1e1a17] text-stone-400 hover:text-stone-200 border border-[#312a24]'
                    : 'bg-[#ebe0ca] text-stone-700 hover:text-stone-900 border border-[#dacfb5]'
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};
