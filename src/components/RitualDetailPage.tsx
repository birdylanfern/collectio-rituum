import React, { useState } from 'react';
import { RitualItem, RitualTheme, TextLanguage, RubricsLanguage } from '../types/liturgy';
import { ChevronLeft, Settings } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface Props {
  ritual: RitualItem;
  onBack: () => void;
  onOpenSettings: () => void;
  theme: RitualTheme;
  textLanguage: TextLanguage;
  onSetTextLanguage: (lang: TextLanguage) => void;
  rubricsLanguage: RubricsLanguage;
  onToggleTheme: () => void;
  fontSize: number;
}

export const RitualDetailPage: React.FC<Props> = ({
  ritual,
  onBack,
  onOpenSettings,
  theme,
  textLanguage,
  onSetTextLanguage,
  rubricsLanguage,
  onToggleTheme,
  fontSize,
}) => {
  const [selectedVariant, setSelectedVariant] = useState<string>(
    ritual.defaultVariant || (ritual.variants && ritual.variants[0]?.id) || ''
  );

  // Red liturgical marks: crosses, N. (name placeholder), versicle/response signs
  const red = theme === 'dark' ? 'text-[#ea580c]' : 'text-[#b91c1c]';
  const renderFormattedText = (text: string) => {
    const parts = text.split(/(\[\^\d+\]|✠|\+|℟\.?|℣\.?|(?<![\p{L}])N\.(?:\s?N\.)?(?![\p{L}])|(?<![\p{L}\d])[RV]\.(?=\s))/gu);
    return parts.map((part, index) => {
      if (!part) return null;
      // [^3] = reference to Note 3 (where its words are added, omitted or changed)
      const ref = /^\[\^(\d+)\]$/.exec(part);
      if (ref) {
        return (
          <sup key={index} title={`See Note ${ref[1]}`} className={`not-italic font-bold mx-px ${red}`}>
            {ref[1]}
          </sup>
        );
      }
      if (part === '✠' || part === '+') return <span key={index} className={`font-bold mx-0.5 not-italic ${red}`}>✠</span>;
      if (/^[℟℣RV]/.test(part) && part.length <= 2 || /^N\./.test(part)) {
        return <span key={index} className={`not-italic ${/^N/.test(part) ? 'font-semibold' : 'font-bold'} ${red}`}>{part}</span>;
      }
      return part;
    });
  };

  // Filter lines by selected variant if applicable
  const displayLines = ritual.lines.filter((line) => {
    if (!line.variant) return true;
    return line.variant === selectedVariant;
  });

  const fontStyle = { fontSize: `${fontSize}px` };

  return (
    <div
      className={`min-h-full flex flex-col font-serif select-text transition-colors duration-200 ${
        theme === 'dark'
          ? 'bg-[#141210] text-[#f3ede2]'
          : 'bg-[#f4ede1] text-[#241e17]'
      }`}
    >
      {/* Top Header */}
      <header
        className={`sticky top-0 z-30 px-3 py-3 flex items-center justify-between border-b ${
          theme === 'dark'
            ? 'bg-[#181513]/95 border-[#2b2520]'
            : 'bg-[#f1e7d6]/95 border-[#dfd3bc] shadow-xs'
        } backdrop-blur-md`}
      >
        <div className="w-[72px] flex items-center">
          <button
            onClick={onBack}
            className={`p-1.5 -ml-1 rounded-full transition-colors flex items-center gap-1 ${
              theme === 'dark' ? 'text-[#ea580c] hover:bg-stone-800' : 'text-[#8b1515] hover:bg-black/5'
            }`}
            aria-label="Back to ritual list"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>

        <h1
          className={`font-serif font-bold text-sm tracking-widest uppercase ${
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
              theme === 'dark' ? 'text-stone-300 hover:bg-stone-800' : 'text-[#7a1818] hover:bg-black/5'
            }`}
            title="Settings"
            aria-label="Open settings"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Ritual Content */}
      <div className="flex-1 px-4 py-5 max-w-xl mx-auto w-full pb-20">
        
        {/* Title & Subtitle */}
        <div className="text-center mb-5">
          <h2
            className={`text-lg sm:text-xl font-bold uppercase tracking-wider ${
              theme === 'dark' ? 'text-[#e26945]' : 'text-[#7a1818]'
            }`}
            style={{ fontFamily: 'var(--reading-font)', textWrap: 'balance' }}
          >
            {ritual.titleEnglish}
          </h2>
          <p
            className={`text-xs sm:text-sm italic font-serif mt-0.5 ${
              theme === 'dark' ? 'text-[#d97706]' : 'text-[#963725]'
            }`}
          >
            {ritual.titleLatin}
          </p>
        </div>

        {/* Variant Tabs (e.g. One Infant / Many Infants) */}
        {ritual.variants && ritual.variants.length > 1 && (
          <div className="flex items-center justify-center gap-2 mb-5">
            <div
              className={`p-1 rounded-lg flex items-center gap-1.5 border ${
                theme === 'dark'
                  ? 'bg-[#1d1916] border-[#302a24]'
                  : 'bg-[#e9decb] border-[#d8cca8]'
              }`}
            >
              {ritual.variants.map((v) => {
                const isActive = v.id === selectedVariant;
                return (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v.id)}
                    className={`px-4 py-1.5 rounded-md text-xs font-serif font-medium transition-colors ${
                      isActive
                        ? theme === 'dark'
                          ? 'bg-[#ea580c] text-white shadow-xs font-bold'
                          : 'bg-[#7a1818] text-white shadow-xs font-bold'
                        : theme === 'dark'
                        ? 'text-stone-400 hover:text-stone-200'
                        : 'text-stone-700 hover:text-stone-900'
                    }`}
                  >
                    {v.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Liturgical Lines */}
        <div className="space-y-4">
          {displayLines.map((line, idx) => {
            if (line.isHeading) {
              const headingText = textLanguage === 'english' ? line.textEnglish : line.textLatin;
              return (
                <div key={idx} className="pt-5 pb-1 border-b border-stone-400/30">
                  <h3
                    className={`text-center uppercase tracking-widest text-xs sm:text-sm font-semibold ${theme === 'dark' ? 'text-[#e26945]' : 'text-[#8b1515]'}`}
                    style={{ fontFamily: 'var(--reading-font)' }}
                  >
                    {headingText}
                  </h3>
                </div>
              );
            }

            if (line.isRubric) {
              const rubricText = rubricsLanguage === 'english' ? line.textEnglish : line.textLatin;
              return (
                <p
                  key={idx}
                  style={{ fontSize: `${fontSize * 0.86}px` }}
                  className={`italic leading-snug ${
                    theme === 'dark' ? 'text-[#e26945]' : 'text-[#991b1b]'
                  }`}
                >
                  {renderFormattedText(rubricText)}
                </p>
              );
            }

            if (line.isNote) {
              const noteText = textLanguage === 'english' ? line.textEnglish : line.textLatin;
              return (
                <div key={idx} style={{ fontSize: `${fontSize * 0.86}px` }} className={`leading-snug pl-3 border-l-2 ${theme === 'dark' ? 'border-[#ea580c]/50' : 'border-[#b91c1c]/40'}`}>
                  <span className={`text-[0.8em] uppercase tracking-widest font-semibold mr-1.5 ${red}`}>
                    Note
                    {line.noteNumber != null && (
                      <sup className="ml-0.5 text-[1.25em] tracking-normal font-bold">{line.noteNumber}</sup>
                    )}
                  </span>
                  {renderFormattedText(noteText)}
                </div>
              );
            }

            const speaker = textLanguage === 'english' ? line.speakerEnglish : line.speakerLatin;
            const showLatinOnly = !!line.latinOnly && textLanguage === 'english';
            const showEnglishOnly = !!line.englishOnly && textLanguage === 'latin';
            const content = (textLanguage === 'english' && !line.latinOnly) || line.englishOnly ? line.textEnglish : line.textLatin;

            return (
              <div key={idx} style={fontStyle} className="leading-[1.65]">
                {speaker && (
                  <div className={`italic text-[0.78em] font-semibold mb-0.5 ${red}`}>{speaker}</div>
                )}
                {showEnglishOnly && (
                  <div className={`not-italic text-[0.62em] uppercase tracking-widest font-bold mb-0.5 ${red}`}>English only (as printed in the book)</div>
                )}
                {showLatinOnly && (
                  <div className={`not-italic text-[0.62em] uppercase tracking-widest font-bold mb-0.5 ${red}`} style={{ fontFamily: 'var(--reading-font)' }}>
                    Latin only
                  </div>
                )}
                <div className={line.isSacramental ? 'font-semibold tracking-wide' : ''}>
                  {renderFormattedText(content)}
                </div>
                {showLatinOnly && line.textEnglish && (
                  <details className="mt-1 text-[0.85em]">
                    <summary className="cursor-pointer italic opacity-60 hover:opacity-100 select-none">English translation (for reading aloud before or after)</summary>
                    <p className="italic opacity-80 mt-1">{renderFormattedText(line.textEnglish)}</p>
                  </details>
                )}
              </div>
            );
          })}
        </div>

      </div>

      {/* Pinned Bottom Language Bar (as seen in Video 1) */}
      <div
        className={`sticky bottom-0 z-20 px-4 py-2 border-t flex items-center justify-center gap-3 backdrop-blur-md ${
          theme === 'dark'
            ? 'bg-[#141210]/95 border-[#29231f]'
            : 'bg-[#f4ede1]/95 border-[#e0d3bc]'
        }`}
      >
        <button
          onClick={() => onSetTextLanguage('latin')}
          className={`px-5 py-1.5 rounded-lg text-xs font-serif font-bold tracking-wider uppercase transition-colors ${
            textLanguage === 'latin'
              ? theme === 'dark'
                ? 'bg-[#ea580c] text-white'
                : 'bg-[#7a1818] text-white'
              : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-200'
          }`}
        >
          Latin Text
        </button>
        <button
          onClick={() => onSetTextLanguage('english')}
          className={`px-5 py-1.5 rounded-lg text-xs font-serif font-bold tracking-wider uppercase transition-colors ${
            textLanguage === 'english'
              ? theme === 'dark'
                ? 'bg-[#ea580c] text-white'
                : 'bg-[#7a1818] text-white'
              : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-200'
          }`}
        >
          English Text
        </button>
      </div>

    </div>
  );
};
