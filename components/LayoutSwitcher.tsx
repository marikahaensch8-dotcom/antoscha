"use client";

export type LayoutMode = "row" | "grid" | "cloud";

type Props = {
  active: LayoutMode;
  onChange: (mode: LayoutMode) => void;
};

const items: { mode: LayoutMode; label: string; icon: React.ReactNode }[] = [
  {
    mode: "row",
    label: "Row",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9">
        <circle cx="4" cy="12" r="2.2" />
        <circle cx="12" cy="12" r="2.2" />
        <circle cx="20" cy="12" r="2.2" />
      </svg>
    ),
  },
  {
    mode: "grid",
    label: "Grid",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9">
        <circle cx="7" cy="7" r="2.6" />
        <circle cx="17" cy="7" r="2.6" />
        <circle cx="7" cy="17" r="2.6" />
        <circle cx="17" cy="17" r="2.6" />
      </svg>
    ),
  },
  {
    mode: "cloud",
    label: "Cloud",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9">
        <circle cx="5" cy="6" r="1.8" />
        <circle cx="13" cy="4" r="1.8" />
        <circle cx="20" cy="9" r="1.8" />
        <circle cx="9" cy="13" r="1.8" />
        <circle cx="17" cy="17" r="1.8" />
        <circle cx="5" cy="19" r="1.8" />
      </svg>
    ),
  },
];

export function LayoutSwitcher({ active, onChange }: Props) {
  return (
    <div className="flex items-center gap-4 fill-current text-ink">
      {items.map((item) => {
        const isActive = active === item.mode;
        return (
          <button
            key={item.mode}
            type="button"
            aria-label={item.label}
            aria-pressed={isActive}
            onClick={() => onChange(item.mode)}
            className={[
              "flex h-10 w-10 items-center justify-center transition",
              isActive ? "opacity-100" : "opacity-30 hover:opacity-100",
            ].join(" ")}
          >
            {item.icon}
          </button>
        );
      })}
    </div>
  );
}
