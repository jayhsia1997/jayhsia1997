import React from "react";
import { useTranslation } from "react-i18next";

const Resume: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full py-8 bg-primary-200 dark:bg-primary-800 text-primary-800 dark:text-primary-200">
      <div className="max-w-6xl mx-auto px-6 flex flex-row items-center gap-8">
        <div className="w-full h-[90vh]">
          <iframe src={t("resume.path")} title="Resume" className="w-full h-full border-none" />
        </div>
      </div>
    </div>
  );
};

export default Resume;
