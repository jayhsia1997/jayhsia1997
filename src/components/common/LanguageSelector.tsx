import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import type { i18n } from "i18next";

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "zh-tw", name: "繁體中文", flag: "🇹🇼" },
];

const fetchLanguage: (i18n: i18n) => Language = (i18n) => {
  return languages.find((lang: Language): boolean => lang.code === i18n.language) || languages[0];
}

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [ isOpen, setIsOpen ] = useState(false);
  const [ currentLanguage, setCurrentLanguage ] = useState<Language>(fetchLanguage(i18n));
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
  }, [ i18n, i18n.language ]);

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
        className="flex items-center space-x-2 px-3 py-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        <span>{currentLanguage.flag}</span>
        <span>{currentLanguage.name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`flex items-center space-x-2 w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  i18n.language === language.code ? "bg-gray-50 dark:bg-gray-700" : ""
                }`}
                role="menuitem"
              >
                <span>{language.flag}</span>
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
