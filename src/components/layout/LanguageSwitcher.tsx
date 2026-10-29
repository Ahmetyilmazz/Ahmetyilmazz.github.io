"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { savePreference } from "@/lib/preferences";
import { switchLocalePath } from "@/lib/routes";

interface LanguageSwitcherProps {
  locale: Locale;
  label: string;
}

export default function LanguageSwitcher({ locale, label }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const target: Locale = locale === "tr" ? "en" : "tr";

  return (
    <Link
      href={switchLocalePath(pathname, target)}
      replace
      hrefLang={target}
      aria-label={label}
      title={label}
      onClick={() => savePreference("locale", target)}
      className="grid h-10 min-w-10 place-items-center rounded-full border border-line px-3 text-xs font-bold uppercase tracking-wider text-muted transition hover:border-accent hover:text-accent"
    >
      {target}
    </Link>
  );
}
