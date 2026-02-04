import ProjectCard from "@/components/home/ProjectCard.tsx";
import { ProjectCardItem, ProjectCardItems } from "@/libs/const.tsx";
import React from "react";
import { useTranslation } from "react-i18next";

const ProjectPreview: React.FC = () => {
  const { t } = useTranslation("translation", { keyPrefix: "home.projects" });
  return (
    <div className="w-full py-16 sm:py-20 md:py-24 bg-primary-100 dark:bg-primary-700 text-primary-800 dark:text-primary-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-wide">{t("title")}</h2>
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 auto-rows-fr">
          {ProjectCardItems.map((project: ProjectCardItem) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
