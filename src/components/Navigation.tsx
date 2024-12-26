import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';
import LanguageSwitcher from './LanguageSwitcher';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];
  
  const menuItems = [
    { key: 'top', label: t.nav.top },
    { key: 'works', label: t.nav.works },
    { key: 'profile', label: t.nav.profile },
    { key: 'contact', label: t.nav.contact }
  ];
  const [activeSection, setActiveSection] = useState('top');

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-zinc-900/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-xl">Portfolio</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <div className="flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  className={`${
                    activeSection === item.key
                      ? 'text-teal-400'
                      : 'text-zinc-300 hover:text-teal-400'
                  } transition-colors duration-200 px-3 py-2`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.key)}
                className={`${
                  activeSection === item.key
                    ? 'text-teal-400'
                    : 'text-zinc-300 hover:text-teal-400'
                } block px-3 py-2 w-full text-left`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;