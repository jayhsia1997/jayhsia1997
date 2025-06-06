import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import LanguageSelector from "../components/common/LanguageSelector.tsx";
import { ThemeToggleDropdown } from "../components/common/ThemeToggleDropdown.tsx";
// import AppLogo from "./AppLogo.tsx";

const AppHeader: React.FC = () => {
  const { t } = useTranslation();
  return (
    <header className="sticky top-0 w-full z-50 shadow-md bg-white dark:bg-gray-900">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900">
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-3">
            {/*<AppLogo className="h-8 w-auto"/>*/}
            <span className="text-2xl font-bold">{t("base.title")}</span>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              {t("nav.header.home")}
            </Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              {t("nav.header.about")}
            </Link>
            <LanguageSelector/>
            <ThemeToggleDropdown/>
          </div>
        </nav>
      </nav>
    </header>
  );
};

export default AppHeader;
