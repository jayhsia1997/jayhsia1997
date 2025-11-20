import type { i18n } from "i18next";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

interface Language {
  code: string;
  name: string;
}

const languages: Language[] = [
  { code: "en", name: "English" },
  { code: "zh-tw", name: "繁體中文" },
];

const fetchLanguage: (i18n: i18n) => Language = (i18n) => {
  return languages.find((lang: Language): boolean => lang.code === i18n.language) || languages[0];
};

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language>(fetchLanguage(i18n));
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setCurrentLanguage(fetchLanguage(i18n));
  }, [i18n, i18n.language]);

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode, () => {
      setCurrentLanguage(fetchLanguage(i18n));
    });
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-1.5 rounded-md bg-white text-gray-700 hover:bg-primary-100 hover:text-primary-900 dark:border-secondary-600 dark:bg-secondary-600 dark:text-gray-200 dark:hover:bg-tertiary-600 transition-colors"
      >
        <span>{currentLanguage.name}</span>
        <svg className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 md:left-auto md:right-0 mt-2 w-56 max-w-[calc(100vw-2rem)] rounded-md shadow-lg z-99 bg-primary-100 dark:bg-primary-800 border border-primary-300 dark:border-primary-600">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-tertiary-500 hover:text-white dark:hover:bg-tertiary-600 ${
                  i18n.language === language.code ? "bg-primary-200 dark:bg-primary-700" : ""
                }`}
                role="menuitem"
              >
                <span>{language.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
