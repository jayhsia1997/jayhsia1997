import ProjectCard from "@/components/home/ProjectCard.tsx";
import { ProjectCardItem, ProjectCardItems } from "@/libs/const.tsx";
import React from "react";
import { useTranslation } from "react-i18next";

const ProjectPreview: React.FC = () => {
  const { t } = useTranslation("translation", { keyPrefix: "home.projects" });
  return (
    <div className="w-full py-24 bg-primary-200 dark:bg-primary-800 text-primary-800 dark:text-primary-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-wide">{t("title")}</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
          {ProjectCardItems.map((project: ProjectCardItem) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
