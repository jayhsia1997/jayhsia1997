import Card from "@/components/ui/card/Card.tsx";
import { SkillCardItem, SkillCardItems } from "@/libs/const.tsx";
import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const Skills: React.FC = () => {
  const { t } = useTranslation("translation", { keyPrefix: "home.skills" });
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const pages: SkillCardItem[][] = useMemo(() => {
    const chunks: SkillCardItem[][] = [];
    for (let i = 0; i < SkillCardItems.length; i += itemsPerPage) {
      chunks.push(SkillCardItems.slice(i, i + itemsPerPage));
    }
    return chunks;
  }, [itemsPerPage]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goPrev = () => setCurrentPage((p) => (p - 1 + pages.length) % pages.length);
  const goNext = () => setCurrentPage((p) => (p + 1) % pages.length);

  // Switch to one-card-per-page on mobile (Tailwind < sm, 640px)
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 639px)");
    const smMql = window.matchMedia("(min-width: 640px) and (max-width: 1023px)");
    const updateItemsPerPage = () => setItemsPerPage(mql.matches ? 3 : smMql.matches ? 6 : 8);
    updateItemsPerPage();
    mql.addEventListener("change", updateItemsPerPage);
    return () => mql.removeEventListener("change", updateItemsPerPage);
  }, []);

  // Reset current page if paging size changes
  useEffect(() => {
    setCurrentPage(0);
  }, [itemsPerPage]);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setCurrentPage((p) => (p + 1) % pages.length);
    }, 4000);
    return () => clearInterval(id);
  }, [pages.length, isPaused]);

  return (
    <div className="w-full py-16 sm:py-20 md:py-24 bg-primary-100 dark:bg-primary-700 text-primary-800 dark:text-primary-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative group h-[640px] sm:h-[600px] md:h-[520px]" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentPage * 100}%)` }}>
              {pages.map((pageItems: SkillCardItem[], pageIndex: number) => (
                <div
                  key={pageIndex}
                  className="min-w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-5 content-start h-[640px] sm:h-[600px] md:h-[520px]"
                >
                  {pageItems.map((skill: SkillCardItem) => (
                    <Card key={skill.title} icon={skill.icon} title={skill.title} className="h-[200px] sm:h-[220px] md:h-[240px]">
                      {t(skill.description)}
                    </Card>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Previous"
            onClick={goPrev}
            className="absolute left-0 top-24 sm:top-28 md:top-1/2 -translate-y-1/2 bg-primary-200 dark:bg-primary-600 text-primary-800 dark:text-primary-100 hover:bg-primary-300 dark:hover:bg-primary-500 h-10 w-10 rounded-full flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100 focus-visible:opacity-100 pointer-events-none group-hover:pointer-events-auto"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={goNext}
            className="absolute right-0 top-24 sm:top-28 md:top-1/2 -translate-y-1/2 bg-primary-200 dark:bg-primary-600 text-primary-800 dark:text-primary-100 hover:bg-primary-300 dark:hover:bg-primary-500 h-10 w-10 rounded-full flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100 focus-visible:opacity-100 pointer-events-none group-hover:pointer-events-auto"
          >
            ›
          </button>
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {pages.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to page ${i + 1}`}
            onClick={() => setCurrentPage(i)}
            className={`${i === currentPage ? "bg-primary-600 dark:bg-primary-300" : "bg-primary-300 dark:bg-primary-500"} h-2.5 w-2.5 rounded-full`}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
