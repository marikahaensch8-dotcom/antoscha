import type { Locale } from "@/lib/i18n";
import { ui } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

type HeroProps = { locale: Locale };

export function Hero({ locale }: HeroProps) {
  const t = ui[locale];

  return (
    <section className="relative z-10 flex w-full max-w-[300px] flex-col px-6 lg:px-0">
      <div className="flex items-baseline justify-between gap-4">
        <h1 className="font-helvetica text-[16px] font-normal leading-[1.25] text-ink">
          Antoscha Haensch
        </h1>
        <LanguageSwitcher locale={locale} />
      </div>

      <div
        lang={locale}
        className="font-helvetica mt-3 space-y-3 text-[16px] leading-[1.25] text-ink text-justify hyphens-auto"
      >
        {t.tagline.split("\n\n").map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="font-mono mt-6 flex flex-row items-center gap-5 text-[13px] font-bold uppercase tracking-wider">
        <a
          href="/cv-placeholder.pdf"
          download
          className="text-ink transition-[letter-spacing] duration-200 ease-out hover:tracking-widest"
        >
          ({t.cv})
        </a>
        <a
          href="/thesis-placeholder.pdf"
          download
          className="text-ink transition-[letter-spacing] duration-200 ease-out hover:tracking-widest"
        >
          ({t.thesis})
        </a>
      </div>
    </section>
  );
}
