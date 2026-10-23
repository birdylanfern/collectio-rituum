import React, { useEffect } from 'react';
import { RitualTheme, RubricsLanguage } from '../types/liturgy';
import { X, Check } from 'lucide-react';
import { FONT_OPTIONS, FontId, fontStack } from '../fonts';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  rubricsLanguage: RubricsLanguage;
  onSetRubricsLanguage: (lang: RubricsLanguage) => void;
  fontSize: number;
  fontId: FontId;
  onSetFont: (id: FontId) => void;
  onIncreaseFont: () => void;
  onDecreaseFont: () => void;
  theme: RitualTheme;
}

export const SettingsModal: React.FC<Props> = ({
  isOpen,
  onClose,
  rubricsLanguage,
  onSetRubricsLanguage,
  fontSize,
  fontId,
  onSetFont,
  onIncreaseFont,
  onDecreaseFont,
  theme,
}) => {
  // Load every typeface once Settings opens so each name can be shown in its own font
  useEffect(() => {
    if (isOpen) FONT_OPTIONS.forEach((o) => o.load().catch(() => {}));
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div
        className={`w-full max-w-sm rounded-2xl shadow-2xl p-5 border overflow-hidden flex flex-col max-h-[92vh] ${
          theme === 'dark'
            ? 'bg-[#1f1a17] text-[#f2ece2] border-stone-800'
            : 'bg-[#f6efe2] text-[#29221b] border-[#e2d5be]'
        }`}
      >
        {/* Header */}
        <div className="relative pb-3 text-center border-b border-stone-300/40 dark:border-stone-800">
          <h2
            className="text-sm font-bold tracking-widest uppercase font-serif text-stone-800 dark:text-stone-100"
            style={{ fontFamily: 'var(--reading-font)' }}
          >
            SETTINGS
          </h2>
          <button
            onClick={onClose}
            className="absolute right-0 top-0 p-1 text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200"
            aria-label="Close settings"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-5 py-4 text-xs font-serif">
          
          {/* Rubrics Language */}
          <div>
            <h3 className="font-bold text-sm text-stone-900 dark:text-stone-100 mb-0.5">
              Rubrics Language
            </h3>
            <p className="text-[11px] text-stone-700 dark:text-stone-400 mb-2 leading-tight">
              Determines the language for all rubric directions across rituals.
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => onSetRubricsLanguage('latin')}
                className={`py-2 px-3 rounded-lg font-serif font-medium text-center transition-colors border ${
                  rubricsLanguage === 'latin'
                    ? 'bg-[#7a1818] border-[#7a1818] text-white shadow-xs'
                    : 'bg-transparent border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-500/10'
                }`}
              >
                Latin Rubrics
              </button>
              <button
                onClick={() => onSetRubricsLanguage('english')}
                className={`py-2 px-3 rounded-lg font-serif font-medium text-center transition-colors border ${
                  rubricsLanguage === 'english'
                    ? 'bg-[#7a1818] border-[#7a1818] text-white shadow-xs'
                    : 'bg-transparent border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-500/10'
                }`}
              >
                English Rubrics
              </button>
            </div>
          </div>

          {/* Font Size */}
          <div>
            <h3 className="font-bold text-sm text-stone-900 dark:text-stone-100 mb-0.5">
              Font Size
            </h3>
            <p className="text-[11px] text-stone-700 dark:text-stone-400 mb-2 leading-tight">
              Adjust the size of the text on the home page and in the rituals.
            </p>

            <div className="flex items-center justify-between border border-stone-300 dark:border-stone-700 rounded-lg overflow-hidden bg-stone-50/50 dark:bg-stone-900/50">
              <button
                onClick={onDecreaseFont}
                className="flex-1 py-2 text-center text-sm font-bold text-stone-700 dark:text-stone-300 hover:bg-stone-200/50 dark:hover:bg-stone-800 transition-colors"
                title="Decrease font"
              >
                A-
              </button>
              <span className="w-12 text-center font-bold text-sm text-stone-900 dark:text-stone-100 font-mono">
                {fontSize}
              </span>
              <button
                onClick={onIncreaseFont}
                className="flex-1 py-2 text-center text-sm font-bold text-stone-700 dark:text-stone-300 hover:bg-stone-200/50 dark:hover:bg-stone-800 transition-colors"
                title="Increase font"
              >
                A+
              </button>
            </div>

            {/* Live Preview Box */}
            <div className="mt-2.5 p-3 rounded-lg border border-stone-300/80 dark:border-stone-700 bg-stone-100/50 dark:bg-stone-900/50">
              <span className="text-[10px] text-stone-700 dark:text-stone-400 uppercase tracking-widest block mb-1">
                Preview
              </span>
              <p style={{ fontSize: `${fontSize}px` }} className="leading-snug">
                N., quid petis ab Ecclésia Dei?
              </p>
              <p
                style={{ fontSize: `${fontSize}px` }}
                className="rubric-text text-red-800 dark:text-red-400 italic mt-0.5"
              >
                Fidem.
              </p>
              <p style={{ fontSize: `${fontSize}px` }} className="leading-snug mt-0.5">
                <span className="font-bold text-red-800 dark:text-red-400">℣.</span> Dóminus vobíscum.{' '}
                <span className="font-bold text-red-800 dark:text-red-400">℟.</span> Et cum spíritu tuo.
              </p>
            </div>
          </div>

          {/* Typeface */}
          <div>
            <h3 className="font-bold text-sm text-stone-900 dark:text-stone-100 mb-0.5">
              Typeface
            </h3>
            <p className="text-[11px] text-stone-700 dark:text-stone-400 mb-2 leading-tight">
              Choose the font for the ritual text. The ℣ and ℟ signs always fall back to EB Garamond if a font lacks them.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {FONT_OPTIONS.map((opt) => {
                const active = opt.id === fontId;
                return (
                  <button
                    key={opt.id}
                    onClick={() => onSetFont(opt.id)}
                    aria-pressed={active}
                    className={`relative py-2 px-3 rounded-lg text-left transition-colors border ${
                      active
                        ? 'bg-[#7a1818] border-[#7a1818] text-white shadow-xs'
                        : 'bg-transparent border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-200 hover:bg-stone-500/10'
                    }`}
                  >
                    <span
                      className="block text-[15px] leading-tight pr-4"
                      style={{ fontFamily: fontStack(opt.family) }}
                    >
                      {opt.label}
                    </span>
                    <span className={`block text-[10px] leading-tight mt-0.5 ${active ? 'text-white/80' : 'text-stone-700 dark:text-stone-400'}`}>
                      {opt.description}
                    </span>
                    {active && <Check className="w-3.5 h-3.5 absolute right-2 top-2" />}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Done Button */}
        <div className="pt-2 border-t border-stone-300/40 dark:border-stone-800">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-[#7a1818] hover:bg-[#681414] text-white font-bold text-sm tracking-wide transition-colors"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
