"use client";

import type { Category } from "@/data/projects";
import type { Locale } from "@/lib/i18n";
import { ui } from "@/lib/i18n";

type FilterValue = Category | "all";

type Props = {
  locale: Locale;
  active: FilterValue;
  onChange: (value: FilterValue) => void;
};

export function CategoryFilter({ locale, active, onChange }: Props) {
  const t = ui[locale];

  const items: { value: FilterValue; label: string }[] = [
    { value: "all", label: t.filterAll },
    { value: "community", label: t.filterCommunity },
    { value: "audiovisual", label: t.filterAudiovisual },
    { value: "articles", label: t.filterArticles },
  ];

  return (
    <div
      role="tablist"
      aria-label={t.filterLabel}
      className="flex flex-nowrap items-center justify-center gap-y-2 px-4 text-[13px] font-bold sm:text-[16px] lg:text-[1.125rem]"
    >
      {items.map((item, idx) => {
        const isActive = active === item.value;
        return (
          <span key={item.value} className="flex items-center">
            {idx > 0 && (
              <span aria-hidden className="mx-2 opacity-40 sm:mx-3">
                //
              </span>
            )}
            <button
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(item.value)}
              className={[
                "transition",
                isActive
                  ? "text-ink"
                  : "text-ink opacity-50 hover:opacity-100",
              ].join(" ")}
            >
              {item.label}
            </button>
          </span>
        );
      })}
    </div>
  );
}
