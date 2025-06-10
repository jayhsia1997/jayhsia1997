import { ThemeToggleButton } from "@/components/common/ThemeToggleButton.tsx";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import LanguageSelector from "../components/common/LanguageSelector.tsx";

const AppHeader: React.FC = () => {
  const { t } = useTranslation();
  return (
    <header className="sticky top-0 w-full z-999999 shadow-md bg-stone-300 dark:bg-stone-800 border-b border-stone-300">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-3">
            {/*<AppLogo className="h-8 w-auto"/>*/}
            <span className="text-2xl font-bold text-gray-700 dark:text-gray-200">{t("base.title")}</span>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-amber-500 dark:hover:text-amber-300">
              {t("nav.header.home")}
            </Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-200 hover:text-amber-500 dark:hover:text-amber-300">
              {t("nav.header.about")}
            </Link>
            <LanguageSelector/>
            <ThemeToggleButton/>
          </div>
        </nav>
      </nav>
    </header>
  );
};

export default AppHeader;
