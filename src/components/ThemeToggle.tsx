import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { RitualTheme } from '../types/liturgy';

interface Props {
  theme: RitualTheme;
  onToggle: () => void;
}

/** Night / Parchment switch. Shown in the top bar of every page. */
export const ThemeToggle: React.FC<Props> = ({ theme, onToggle }) => (
  <button
    onClick={onToggle}
    className={`p-1.5 rounded-full transition-colors ${
      theme === 'dark' ? 'text-amber-400 hover:bg-stone-800' : 'text-[#7a1818] hover:bg-black/5'
    }`}
    title={theme === 'dark' ? 'Switch to parchment' : 'Switch to night'}
    aria-label={theme === 'dark' ? 'Switch to parchment theme' : 'Switch to night theme'}
  >
    {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
  </button>
);
