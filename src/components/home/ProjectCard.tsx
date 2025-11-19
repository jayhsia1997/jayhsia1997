import { ProjectCardItem } from "@/libs/const.tsx";
import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

interface ProjectCardProps {
  project: ProjectCardItem;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t } = useTranslation("translation", { keyPrefix: "home.projects" });
  const images = useMemo(() => project.images || [], [project.images]);
  const [current, setCurrent] = useState(0);

  const goPrev = () => setCurrent((p) => (p - 1 + images.length) % images.length);
  const goNext = () => setCurrent((p) => (p + 1) % images.length);
  const toSlug = (text: string) =>
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  return (
    <div className="rounded-xl border border-primary-300 bg-primary-50 dark:border-primary-700 dark:bg-primary-800 h-full flex flex-col">
      <div className="relative w-full overflow-hidden rounded-t-lg bg-primary-100 dark:bg-primary-700 h-full">
        {images.length > 0 ? (
          <>
            <div className="  ">
              <img
                src={images[current]}
                alt={project.title}
                className="w-full h-52 object-contain hover:transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={goPrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary-200 dark:bg-primary-600 text-primary-800 dark:text-primary-100 hover:bg-primary-300 dark:hover:bg-primary-500 h-8 w-8 rounded-full flex items-center justify-center"
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={goNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-200 dark:bg-primary-600 text-primary-800 dark:text-primary-100 hover:bg-primary-300 dark:hover:bg-primary-500 h-8 w-8 rounded-full flex items-center justify-center"
                >
                  ›
                </button>
                <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
                  {images.map((_, i) => (
                    <span
                      key={i}
                      className={`${i === current ? "bg-primary-600 dark:bg-primary-300" : "bg-primary-300 dark:bg-primary-500"} h-1.5 w-1.5 rounded-full`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="w-full h-52 flex items-center justify-center">
            <img src="/images/placeholder.png" alt={project.title} className="w-full h-52 object-contain" />
          </div>
        )}
      </div>
      <div className="p-5 h-full flex flex-col">
        <h4 className="mb-2 font-medium text-gray-800 text-theme-xl dark:text-white/90">{project.title}</h4>
        {project.tags && project.tags.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {project.tags.slice(0, 5).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs rounded-full bg-primary-100 text-primary-800 dark:bg-primary-700 dark:text-primary-100 border border-primary-300 dark:border-primary-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <p className="text-sm text-gray-500 dark:text-gray-400">{t(project.summary)}</p>
      </div>
      <div className="flex justify-end p-5 pt-0">
        <Link
          to={`/projects#${toSlug(project.title)}`}
          className="inline-flex items-center px-3 py-2 rounded-md bg-primary-500 text-white hover:bg-tertiary-500 dark:bg-primary-500 dark:hover:bg-tertiary-300 transition-colors"
        >
          {t("detail", { defaultValue: "Detail" })}
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
