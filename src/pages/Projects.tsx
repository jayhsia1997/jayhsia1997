import BackToTopButton from "@/components/common/BackToTopButton.tsx";
import { ProjectItem, ProjectItems } from "@/libs/const.tsx";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaExternalLinkAlt } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import { useLocation, useNavigate } from "react-router";
import remarkGfm from "remark-gfm";

const Projects: React.FC = () => {
  const { t } = useTranslation("translation", { keyPrefix: "projects" });
  const projects = useMemo(() => ProjectItems, []);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = projects[selectedIndex] as ProjectItem | undefined;
  const images = useMemo(() => selected?.images || [], [selected]);
  const [current, setCurrent] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);
  const didScrollToTopRef = useRef(false);

  const toSlug = (text: string) =>
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  useEffect(() => {
    setCurrent(0);
  }, [selectedIndex]);

  const goPrev = () => setCurrent((p) => (p - 1 + images.length) % images.length);
  const goNext = () => setCurrent((p) => (p + 1) % images.length);

  // Sync selection from URL hash
  useEffect(() => {
    const hash = (location.hash || "").replace(/^#/, "");
    if (!hash) return;
    const idx = projects.findIndex((p) => toSlug(p.title) === hash);
    if (idx >= 0 && idx !== selectedIndex) {
      setSelectedIndex(idx);
    }
  }, [location.hash, projects, selectedIndex]);

  const handleSelect = (idx: number) => {
    setSelectedIndex(idx);
    const slug = toSlug(projects[idx].title);
    navigate({ hash: `#${slug}` }, { replace: false });
    setIsMobileDropdownOpen(false);
  };

  // Close mobile dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target as Node)) {
        setIsMobileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // If navigated from Home preview, force scroll to top on mount
  useEffect(() => {
    const state = location.state as { fromHomePreview?: boolean } | null;
    if (state?.fromHomePreview && !didScrollToTopRef.current) {
      didScrollToTopRef.current = true;
      // Defer to ensure layout is ready
      setTimeout(() => {
        contentRef.current?.scrollTo({ top: 0, behavior: "auto" });
        window.scrollTo({ top: 0, behavior: "auto" });
      }, 0);
    }
  }, [location.state]);

  return (
    <div className="w-full py-10 bg-primary-100 dark:bg-primary-700 text-primary-800 dark:text-primary-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-wide">{t("title")}</h2>
        <div className="mt-8 flex flex-col md:flex-row gap-6 md:h-[calc(100vh-200px)]">
          <aside className="hidden md:block h-[calc(100vh-200px)] rounded-xl border border-primary-300 bg-primary-50 dark:border-primary-700 dark:bg-primary-800 p-4 md:sticky md:top-6 md:w-[260px] shrink-0">
            <ul className="space-y-1">
              {projects.map((p, idx) => {
                const isActive = idx === selectedIndex;
                return (
                  <li key={p.title}>
                    <button
                      type="button"
                      onClick={() => handleSelect(idx)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors text-sm truncate ${
                        isActive
                          ? "bg-primary-200 dark:bg-primary-600 text-primary-900 dark:text-primary-100"
                          : "hover:bg-primary-200/70 dark:hover:bg-primary-600/60 text-primary-800 dark:text-primary-100"
                      }`}
                    >
                      {p.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          {/* Mobile project selector - dropdown items */}
          <div className="md:hidden -mx-2 px-2" ref={mobileDropdownRef}>
            <div className="relative">
              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={isMobileDropdownOpen}
                onClick={() => setIsMobileDropdownOpen((v) => !v)}
                className="w-full flex items-center justify-between rounded-md border border-primary-300 dark:border-primary-600 bg-primary-50 dark:bg-primary-800 text-primary-800 dark:text-primary-100 px-3 py-2"
              >
                <span className="truncate">{selected?.title || "Select project"}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isMobileDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isMobileDropdownOpen && (
                <div className="absolute left-0 right-0 mt-2 z-99 rounded-md shadow-lg bg-primary-100 dark:bg-primary-800 border border-primary-300 dark:border-primary-600">
                  <ul className="max-h-72 overflow-auto py-1" role="listbox" aria-label="Projects">
                    {projects.map((p, idx) => {
                      const isActive = idx === selectedIndex;
                      return (
                        <li key={p.title}>
                          <button
                            type="button"
                            role="option"
                            aria-selected={isActive}
                            onClick={() => handleSelect(idx)}
                            className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between ${
                              isActive
                                ? "bg-primary-200 dark:bg-primary-700 text-primary-900 dark:text-primary-100"
                                : "text-primary-800 dark:text-primary-100 hover:bg-primary-200/70 dark:hover:bg-primary-700/70"
                            }`}
                          >
                            <span className="truncate">{p.title}</span>
                            {isActive && <span className="ml-3 text-xs">✓</span>}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <main ref={contentRef} className="flex-1 bg-primary-50 dark:bg-primary-800 p-6 rounded-xl md:overflow-y-auto md:max-h-[calc(100vh-200px)]">
            {!selected ? (
              <p className="text-primary-700 dark:text-primary-100">{t("description")}</p>
            ) : (
              <>
                <div className="flex items-center gap-4 mb-6">
                  <h2 id={toSlug(selected.title)} className="text-3xl font-bold tracking-wide">
                    {selected.title}
                  </h2>
                  {selected.link && (
                    <div className="cursor-pointer" onClick={() => selected.link && window.open(selected.link, "_blank")}>
                      <FaExternalLinkAlt className="size-5 text-primary-600 dark:text-primary-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors" />
                    </div>
                  )}
                </div>
                <div className="relative group w-full h-64 sm:h-96 rounded-xl bg-primary-100 dark:bg-primary-700">
                  {images.length > 0 && (
                    <div className="flex items-center justify-center w-full h-full rounded-xl overflow-hidden">
                      <img
                        src={images[current]}
                        alt={selected.title}
                        className="w-full h-full rounded-xl object-contain min-h-96 sm:min-h-auto max-h-96 sm:max-h-auto"
                      />
                      {images.length > 1 && (
                        <>
                          <button
                            type="button"
                            aria-label="Previous image"
                            onClick={goPrev}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary-200 dark:bg-primary-600 text-primary-800 dark:text-primary-100 hover:bg-primary-300 dark:hover:bg-primary-500 h-8 w-8 rounded-full flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 pointer-events-auto sm:pointer-events-none sm:group-hover:pointer-events-auto"
                          >
                            ‹
                          </button>
                          <button
                            type="button"
                            aria-label="Next image"
                            onClick={goNext}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-200 dark:bg-primary-600 text-primary-800 dark:text-primary-100 hover:bg-primary-300 dark:hover:bg-primary-500 h-8 w-8 rounded-full flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 pointer-events-auto sm:pointer-events-none sm:group-hover:pointer-events-auto"
                          >
                            ›
                          </button>
                          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
                            {images.map((_, i) => (
                              <span
                                key={i}
                                className={`${
                                  i === current ? "bg-primary-600 dark:bg-primary-300" : "bg-primary-300 dark:bg-primary-500"
                                } h-1.5 w-1.5 rounded-full`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>

                {selected.tags && selected.tags.length > 0 && (
                  <>
                    <h3 className="mt-4 text-lg font-semibold">Skills</h3>
                    <hr className="my-4 border-primary-300 dark:border-primary-700" />
                    <div className="mt-2 flex flex-wrap gap-2">
                      {selected.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 text-xs rounded-full bg-primary-200 text-primary-900 dark:bg-primary-600 dark:text-primary-100">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </>
                )}

                <div className="mt-6 max-w-none">
                  <h3 className="text-lg font-semibold mb-2">Content</h3>
                  <hr className="my-4 border-primary-300 dark:border-primary-700" />
                  <div className="text-base leading-7 text-primary-700 dark:text-primary-100">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        h1: ({ children }) => <h1 className="text-2xl font-bold mt-4 mb-2">{children}</h1>,
                        h2: ({ children }) => <h2 className="text-xl font-bold mt-4 mb-2">{children}</h2>,
                        h3: ({ children }) => <h3 className="text-lg font-bold mt-4 mb-2">{children}</h3>,
                        h4: ({ children }) => <h4 className="text-base font-bold mt-4 mb-2">{children}</h4>,
                        h5: ({ children }) => <h5 className="text-sm font-bold mt-4 mb-2">{children}</h5>,
                        h6: ({ children }) => <h6 className="text-xs font-bold mt-4 mb-2">{children}</h6>,
                        ul: ({ children }) => <ul className="list-disc list-inside mt-4 mb-2">{children}</ul>,
                        ol: ({ children }) => <ol className="list-decimal list-inside mt-4 mb-2">{children}</ol>,
                        li: ({ children }) => <li className="mt-2 mb-2">{children}</li>,
                        hr: () => <hr className="my-4 border-primary-300 dark:border-primary-700" />,
                      }}
                    >
                      {t(selected.content)}
                    </ReactMarkdown>
                  </div>
                </div>
              </>
            )}
          </main>
        </div>
        <BackToTopButton targetRef={contentRef} />
      </div>
    </div>
  );
};

export default Projects;
