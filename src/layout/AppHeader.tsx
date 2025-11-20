import { ThemeToggleButton } from "@/components/common/ThemeToggleButton.tsx";
import { HeaderItem, HeaderItems } from "@/libs/const.tsx";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import LanguageSelector from "../components/common/LanguageSelector.tsx";

const AppHeader: React.FC = () => {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 w-full z-99 shadow-md bg-primary-300 dark:bg-primary-800 border-b border-primary-300">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3">
              {/*<AppLogo className="h-8 w-auto"/>*/}
              <span className="text-2xl font-bold text-gray-700 dark:text-gray-200">{t("base.title")}</span>
            </Link>
          </div>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-6">
            {HeaderItems.map((link: HeaderItem) => (
              <Link
                key={link.title}
                to={link.href}
                target={link.target || "_self"}
                className="text-gray-700 dark:text-gray-200 hover:text-tertiary-500 dark:hover:text-tertiary-300"
              >
                <div className="flex items-center space-x-2">
                  {t(link.translationKey)}
                  {link.icon && <span className="pl-1">{link.icon}</span>}
                </div>
              </Link>
            ))}
            <LanguageSelector />
            <ThemeToggleButton />
          </div>
          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 dark:text-gray-200 hover:bg-primary-200 dark:hover:bg-primary-700 focus:outline-none"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden mt-3 rounded-lg border border-primary-300 bg-primary-100 dark:border-primary-700 dark:bg-primary-800 p-4 space-y-3">
            <div className="flex flex-col space-y-2">
              {HeaderItems.map((link: HeaderItem) => (
                <Link
                  key={link.title}
                  to={link.href}
                  target={link.target || "_self"}
                  onClick={() => setMobileOpen(false)}
                  className="px-2 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-primary-200 dark:hover:bg-primary-700"
                >
                  <div className="flex items-center justify-between">
                    <span>{t(link.translationKey)}</span>
                    {link.icon && <span className="pl-3">{link.icon}</span>}
                  </div>
                </Link>
              ))}
            </div>
            <div className="pt-2 border-t border-primary-300 dark:border-primary-700 flex items-center justify-between">
              <LanguageSelector />
              <ThemeToggleButton />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default AppHeader;
