/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { RITUALS_LIST } from './data/ritualsData';
import { RitualItem, RitualTheme, TextLanguage, RubricsLanguage, LiturgyCategory } from './types/liturgy';
import { RitualListPage } from './components/RitualListPage';
import { RitualDetailPage } from './components/RitualDetailPage';
import { SettingsModal } from './components/SettingsModal';
import { FontId, DEFAULT_FONT_ID, isFontId, getFontOption, fontStack, loadFont } from './fonts';

export default function App() {
  // Navigation: default page is null (the searchable list of rituals and blessings)
  // Hash routing (#/ritual-id) so back button, refresh and shared links work on GitHub Pages
  const readHash = () => decodeURIComponent(window.location.hash.replace(/^#\/?/, '')) || null;
  const [selectedRitualId, setSelectedRitualIdState] = useState<string | null>(readHash());
  useEffect(() => {
    const onHash = () => setSelectedRitualIdState(readHash());
    window.addEventListener('hashchange', onHash);
    // We restore scroll positions ourselves (see below), so stop the browser doing it differently
    const previousRestoration = history.scrollRestoration;
    history.scrollRestoration = 'manual';
    return () => {
      window.removeEventListener('hashchange', onHash);
      history.scrollRestoration = previousRestoration;
    };
  }, []);

  // Home page state lives here (not inside the list page) so the search, the category and the
  // scroll position are still there when you come back from a ritual.
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<LiturgyCategory>('all');
  const listScrollY = useRef(0);

  // Opening a ritual starts at its top; going back returns to where you were on the home page
  useLayoutEffect(() => {
    window.scrollTo(0, selectedRitualId ? 0 : listScrollY.current);
  }, [selectedRitualId]);
  const setSelectedRitualId = (id: string | null) => {
    if (id) listScrollY.current = window.scrollY; // remember the home page position before leaving it
    window.location.hash = id ? `/${id}` : '';
    if (!id) history.replaceState(null, '', window.location.pathname + window.location.search);
    setSelectedRitualIdState(id);
  };

  // Settings
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [theme, setTheme] = useState<RitualTheme>('parchment');
  const [textLanguage, setTextLanguage] = useState<TextLanguage>('latin');
  const [rubricsLanguage, setRubricsLanguage] = useState<RubricsLanguage>('english');
  const [fontSize, setFontSize] = useState<number>(18);
  const [fontId, setFontId] = useState<FontId>(DEFAULT_FONT_ID);

  // Load stored preferences
  useEffect(() => {
    try {
      // (an old saved 'light' theme no longer exists and simply falls back to parchment)
      const savedTheme = localStorage.getItem('ritual_theme');
      if (savedTheme === 'dark' || savedTheme === 'parchment') setTheme(savedTheme);

      const savedTextLang = localStorage.getItem('ritual_text_lang') as TextLanguage;
      if (savedTextLang) setTextLanguage(savedTextLang);

      const savedRubricLang = localStorage.getItem('ritual_rubric_lang') as RubricsLanguage;
      if (savedRubricLang) setRubricsLanguage(savedRubricLang);

      const savedFont = localStorage.getItem('ritual_font');
      if (isFontId(savedFont)) setFontId(savedFont);

      const savedFontSize = localStorage.getItem('ritual_font_size');
      if (savedFontSize) setFontSize(Number(savedFontSize));
    } catch {
      // ignore
    }
  }, []);

  // Sync theme changes to localStorage
  const handleSetTheme = (newTheme: RitualTheme) => {
    setTheme(newTheme);
    try {
      localStorage.setItem('ritual_theme', newTheme);
    } catch {
      // ignore
    }
  };

  const handleToggleTheme = () => handleSetTheme(theme === 'dark' ? 'parchment' : 'dark');

  // Lets Tailwind's `dark:` styles follow the app's night theme (not the phone's system setting)
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  // Typeface: load its files, then point --reading-font at it. The stack falls back to
  // EB Garamond glyph by glyph, which is how ℣ and ℟ stay available in every font.
  useEffect(() => {
    document.documentElement.style.setProperty('--reading-font', fontStack(getFontOption(fontId).family));
    loadFont(fontId).catch((err) => console.warn('Font failed to load:', err));
  }, [fontId]);

  const handleSetFont = (id: FontId) => {
    setFontId(id);
    try {
      localStorage.setItem('ritual_font', id);
    } catch {
      // ignore
    }
  };

  const handleSetTextLanguage = (lang: TextLanguage) => {
    setTextLanguage(lang);
    try {
      localStorage.setItem('ritual_text_lang', lang);
    } catch {
      // ignore
    }
  };

  const handleSetRubricsLanguage = (lang: RubricsLanguage) => {
    setRubricsLanguage(lang);
    try {
      localStorage.setItem('ritual_rubric_lang', lang);
    } catch {
      // ignore
    }
  };

  const handleIncreaseFont = () => {
    const next = Math.min(fontSize + 1, 26);
    setFontSize(next);
    try {
      localStorage.setItem('ritual_font_size', String(next));
    } catch {
      // ignore
    }
  };

  const handleDecreaseFont = () => {
    const next = Math.max(fontSize - 1, 14);
    setFontSize(next);
    try {
      localStorage.setItem('ritual_font_size', String(next));
    } catch {
      // ignore
    }
  };

  const selectedRitual = selectedRitualId
    ? RITUALS_LIST.find((r) => r.id === selectedRitualId) || null
    : null;

  return (
    <div
      className={`min-h-screen w-full flex justify-center transition-colors duration-200 ${
        theme === 'dark'
          ? 'bg-[#0d0b0a]'
          : 'bg-[#181412]'
      }`}
    >
      {/* Mobile-sized Screen Frame container */}
      <div
        className={`w-full max-w-2xl min-h-screen flex flex-col transition-colors duration-200 border-x sm:shadow-2xl ${
          theme === 'dark'
            ? 'bg-[#141210] border-[#25201c]'
            : 'bg-[#f4ede1] border-[#dfd3bc]'
        }`}
      >
        {selectedRitual ? (
          <RitualDetailPage
            ritual={selectedRitual}
            onBack={() => setSelectedRitualId(null)}
            onOpenSettings={() => setIsSettingsOpen(true)}
            theme={theme}
            textLanguage={textLanguage}
            onSetTextLanguage={handleSetTextLanguage}
            rubricsLanguage={rubricsLanguage}
            onToggleTheme={handleToggleTheme}
            fontSize={fontSize}
          />
        ) : (
          <RitualListPage
            rituals={RITUALS_LIST}
            onSelectRitual={(r: RitualItem) => setSelectedRitualId(r.id)}
            theme={theme}
            onToggleTheme={handleToggleTheme}
            onOpenSettings={() => setIsSettingsOpen(true)}
            fontSize={fontSize}
            searchQuery={searchQuery}
            onSearchQueryChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        )}
      </div>

      {/* Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        rubricsLanguage={rubricsLanguage}
        onSetRubricsLanguage={handleSetRubricsLanguage}
        fontSize={fontSize}
        fontId={fontId}
        onSetFont={handleSetFont}
        onIncreaseFont={handleIncreaseFont}
        onDecreaseFont={handleDecreaseFont}
        theme={theme}
      />
    </div>
  );
}
