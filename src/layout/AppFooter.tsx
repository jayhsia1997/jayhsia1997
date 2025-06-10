import React from "react";
import { useTranslation } from "react-i18next";

const AppFooter: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-6 bg-stone-300 dark:bg-stone-800 border-t border-stone-300">
      <p className="mb-2 italic text-gray-700 dark:text-gray-200">{t("footer.tagline")}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">{t("footer.copyright", { year: currentYear })}</p>
    </footer>
  );
};

export default AppFooter;
