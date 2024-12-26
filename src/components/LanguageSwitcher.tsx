import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Languages } from 'lucide-react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ja' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
      aria-label="Toggle language"
    >
      <Languages size={20} className="text-teal-400" />
      <span className="text-zinc-100">{language.toUpperCase()}</span>
    </button>
  );
}