"use client";

import type { Project } from "@/data/projects";
import type { Locale } from "@/lib/i18n";
import { ProjectCard } from "./ProjectCard";
import type { LayoutMode } from "./LayoutSwitcher";

type FilterValue = "all" | Project["category"];

type Props = {
  projects: Project[];
  locale: Locale;
  filter: FilterValue;
  layout: LayoutMode;
  onSelect: (id: string) => void;
};

export function ProjectsCloud({
  projects,
  locale,
  filter,
  layout,
  onSelect,
}: Props) {
  // Mobile/tablet (< lg): always 2-column grid below sm, single column on small phones
  // Desktop (lg+): cloud / row / grid based on layout prop
  const mobileClass =
    "grid w-full grid-cols-1 gap-6 px-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3";

  const desktopClass =
    layout === "cloud"
      ? "lg:absolute lg:inset-0 lg:flex-none lg:grid-cols-none lg:block lg:gap-0 lg:px-0"
      : layout === "row"
      ? "lg:absolute lg:inset-0 lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-4 lg:pl-[160px] lg:pr-[380px] lg:grid-cols-none"
      : "lg:absolute lg:inset-0 lg:grid lg:grid-cols-4 lg:grid-rows-2 lg:place-items-center lg:gap-x-6 lg:gap-y-4 lg:pl-[160px] lg:pr-[380px] lg:pt-20 lg:pb-20";

  return (
    <div className={`${mobileClass} ${desktopClass}`}>
      {projects.map((project, index) => {
        const visible = filter === "all" || filter === project.category;
        return (
          <ProjectCard
            key={project.id}
            project={project}
            locale={locale}
            visible={visible}
            index={index}
            layout={layout}
            onClick={() => onSelect(project.id)}
          />
        );
      })}
    </div>
  );
}
