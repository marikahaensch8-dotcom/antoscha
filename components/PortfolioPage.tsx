"use client";

import { useEffect, useMemo, useState } from "react";
import { flushSync } from "react-dom";
import type { Locale } from "@/lib/i18n";
import { projects, type Category } from "@/data/projects";
import { Hero } from "./Hero";
import { CategoryFilter } from "./CategoryFilter";
import { ProjectsCloud } from "./ProjectsCloud";
import { ProjectInfo } from "./ProjectInfo";
import { ProjectMedia } from "./ProjectMedia";
import { LayoutSwitcher, type LayoutMode } from "./LayoutSwitcher";

type FilterValue = "all" | Category;

export function PortfolioPage({ locale }: { locale: Locale }) {
  const [filter, setFilter] = useState<FilterValue>("all");
  const [layout, setLayout] = useState<LayoutMode>("cloud");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  useEffect(() => {
    if (!selectedId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeProject();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId]);

  const selectedProject = useMemo(
    () => projects.find((p) => p.id === selectedId) ?? null,
    [selectedId],
  );

  function transition(update: () => void) {
    const doc = typeof document !== "undefined" ? document : null;
    const startViewTransition =
      doc &&
      (doc as Document & {
        startViewTransition?: (cb: () => void) => unknown;
      }).startViewTransition;
    if (startViewTransition) {
      startViewTransition.call(doc, () => flushSync(update));
    } else {
      update();
    }
  }

  function openProject(id: string) {
    transition(() => setSelectedId(id));
  }
  function closeProject() {
    transition(() => setSelectedId(null));
  }
  function changeLayout(mode: LayoutMode) {
    transition(() => setLayout(mode));
  }

  return (
    <main className="relative lg:h-screen lg:overflow-hidden">
      {selectedProject ? (
        <>
          <div className="px-6 pt-12 pb-6 lg:absolute lg:inset-0 lg:flex lg:items-center lg:p-0 lg:pr-[400px]">
            <ProjectMedia project={selectedProject} locale={locale} />
          </div>
          <div className="lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:z-30">
            <ProjectInfo
              project={selectedProject}
              locale={locale}
              onClose={closeProject}
            />
          </div>
        </>
      ) : (
        <>
          {/* Layout switcher — top left, desktop only */}
          <div className="hidden lg:absolute lg:left-10 lg:top-12 lg:z-20 lg:block">
            <LayoutSwitcher active={layout} onChange={changeLayout} />
          </div>

          <div
            className={[
              "px-6 pt-12 pb-8",
              "lg:absolute lg:right-10 lg:top-12 lg:p-0 lg:z-20",
            ].join(" ")}
          >
            <Hero locale={locale} />
          </div>

          <div
            className={[
              "mt-2 mb-6",
              "lg:mt-0 lg:mb-0 lg:absolute lg:bottom-6 lg:left-0 lg:right-0 lg:z-20",
            ].join(" ")}
          >
            <CategoryFilter
              locale={locale}
              active={filter}
              onChange={setFilter}
            />
          </div>

          <ProjectsCloud
            projects={projects}
            locale={locale}
            filter={filter}
            layout={layout}
            onSelect={openProject}
          />

          <div className="pb-12 lg:hidden" />
        </>
      )}
    </main>
  );
}
