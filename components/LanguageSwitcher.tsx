import Link from "next/link";
import type { Locale } from "@/lib/i18n";

type Props = { locale: Locale };

export function LanguageSwitcher({ locale }: Props) {
  const target = locale === "de" ? "/en" : "/";
  const self = locale.toUpperCase();
  const other = (locale === "de" ? "en" : "de").toUpperCase();

  return (
    <Link
      href={target}
      className="font-helvetica group text-[16px] font-normal text-ink"
    >
      <span className="group-hover:hidden">{self}</span>
      <span className="hidden group-hover:inline">{other}</span>
    </Link>
  );
}
