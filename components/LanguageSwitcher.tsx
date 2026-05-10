import Link from "next/link";
import type { Locale } from "@/lib/i18n";

type Props = { locale: Locale };

export function LanguageSwitcher({ locale }: Props) {
  const target = locale === "de" ? "/en" : "/";
  const other = (locale === "de" ? "en" : "de").toUpperCase();

  return (
    <Link
      href={target}
      aria-label={`Switch to ${other}`}
      className="font-helvetica text-[16px] font-normal text-ink transition-opacity hover:opacity-60"
    >
      {other}
    </Link>
  );
}
