"use client";

import Image from "next/image";
import type { Project } from "@/data/projects";
import type { Locale } from "@/lib/i18n";
import type { LayoutMode } from "./LayoutSwitcher";

type Props = {
  project: Project;
  locale: Locale;
  visible: boolean;
  index: number;
  layout: LayoutMode;
  onClick: () => void;
};

export function ProjectCard({
  project,
  locale,
  visible,
  index,
  layout,
  onClick,
}: Props) {
  const { position } = project;

  // Mobile/tablet: full grid cell width, no positioning
  // Desktop (lg+): layout-specific
  const layoutClass =
    layout === "cloud"
      ? "w-full lg:absolute lg:top-[var(--top)] lg:left-[var(--left)] lg:w-[var(--width)]"
      : layout === "row"
      ? "w-full lg:relative lg:w-[180px]"
      : "w-full lg:relative lg:w-[200px]";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={project.title[locale]}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      style={
        {
          "--top": position.top,
          "--left": position.left,
          "--width": position.width,
          transitionDelay: visible ? `${index * 25}ms` : "0ms",
        } as React.CSSProperties
      }
      className={[
        "group cursor-pointer text-left",
        layoutClass,
        "transition-all duration-300 ease-out",
        visible ? "block" : "hidden lg:block",
        visible ? "opacity-100" : "pointer-events-none opacity-0",
      ].join(" ")}
    >
      <div className="origin-top-left transition-transform duration-300 ease-out group-hover:scale-105 lg:group-hover:scale-110">
        <div
          className="relative w-full overflow-hidden bg-paper-soft"
          style={{ viewTransitionName: `card-${project.id}` }}
        >
          <div
            className="relative w-full"
            style={{ aspectRatio: project.aspect ?? "4 / 5" }}
          >
            <Image
              src={project.thumbnail}
              alt={project.title[locale]}
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 220px"
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-1.5 text-ink">
          <div className="text-[0.72rem] font-bold leading-[1.2]">
            {project.shortTitle[locale]}
            <span className="opacity-40"> // </span>
            {project.year}
          </div>
        </div>
      </div>
    </button>
  );
}
