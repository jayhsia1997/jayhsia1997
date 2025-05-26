import React from "react";
import { useTranslation } from "react-i18next";

const AppFooter: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-6 bg-gray-100 dark:bg-gray-800">
      <p className="mb-2 italic">{t("footer.tagline")}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {t("footer.copyright", { year: currentYear })}
      </p>
    </footer>
  );
};

export default AppFooter;
