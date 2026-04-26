import type { Project } from "@/data/projects";
import type { Locale } from "@/lib/i18n";
import { ui } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

type Props = {
  project: Project;
  locale: Locale;
  onClose: () => void;
};

export function ProjectInfo({ project, locale, onClose }: Props) {
  const t = ui[locale];
  const paragraphs = project.description[locale].split("\n\n");

  return (
    <section className="font-helvetica relative z-10 flex w-full flex-col bg-paper px-6 pt-12 pb-8 text-[16px] leading-[1.25] text-ink lg:h-full lg:w-[380px] lg:overflow-y-auto lg:px-10 lg:pt-12 lg:pb-12">
      <div
        className="anim-fade-up flex items-baseline justify-between gap-4"
        style={{ animationDelay: "0ms" }}
      >
        <h1 className="font-normal">{project.title[locale]}</h1>
        <LanguageSwitcher locale={locale} />
      </div>

      <div className="mt-3 space-y-3 text-justify hyphens-auto" lang={locale}>
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className="anim-fade-up"
            style={{ animationDelay: `${150 + i * 80}ms` }}
          >
            {p}
          </p>
        ))}
      </div>

      <button
        onClick={onClose}
        className="anim-fade-up font-mono mt-6 self-start text-[13px] font-bold uppercase tracking-wider transition-[letter-spacing] duration-200 ease-out hover:tracking-widest"
        style={{ animationDelay: `${250 + paragraphs.length * 80}ms` }}
      >
        ({t.close})
      </button>
    </section>
  );
}
