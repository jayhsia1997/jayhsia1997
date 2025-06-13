import { ThemeToggleButton } from "@/components/common/ThemeToggleButton.tsx";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import LanguageSelector from "../components/common/LanguageSelector.tsx";
import { HeaderItem, HeaderItems } from "@/libs/const.tsx";

const AppHeader: React.FC = () => {
  const { t } = useTranslation();
  return (
    <header className="sticky top-0 w-full z-99 shadow-md bg-primary-300 dark:bg-primary-800 border-b border-primary-300">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-3">
            {/*<AppLogo className="h-8 w-auto"/>*/}
            <span className="text-2xl font-bold text-gray-700 dark:text-gray-200">{t("base.title")}</span>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <div className="flex items-center space-x-6">
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
            <LanguageSelector/>
            <ThemeToggleButton/>
          </div>
        </nav>
      </nav>
    </header>
  );
};

export default AppHeader;
