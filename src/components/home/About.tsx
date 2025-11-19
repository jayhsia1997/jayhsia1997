import React from "react";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation("translation", { keyPrefix: "home.about" });
  return (
    <div className="w-full py-24 bg-primary-100 dark:bg-primary-700 text-primary-800 dark:text-primary-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-wide">{t("title")}</h2>
        <p className="mt-6 text-lg leading-8 text-primary-700 dark:text-primary-100">{t("description")}</p>
      </div>
    </div>
  );
};

export default About;
