"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { savePreference } from "@/lib/preferences";
import { switchLocalePath } from "@/lib/routes";

interface LanguageSwitcherProps {
  locale: Locale;
  label: string;
}

export default function LanguageSwitcher({ locale, label }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const target: Locale = locale === "tr" ? "en" : "tr";
  const href = switchLocalePath(pathname, target);

  /**
   * Dil değişince kullanıcı aynı yerde kalmalı: adresteki bölüm işareti (#about gibi) korunur
   * ve sayfa en üste kaydırılmaz. Geçmişe yeni kayıt eklenmez.
   */
  const switchLanguage = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
    event.preventDefault();
    savePreference("locale", target);
    router.replace(href + window.location.hash, { scroll: false });
  };

  return (
    <Link
      href={href}
      hrefLang={target}
      aria-label={label}
      title={label}
      onClick={switchLanguage}
      className="grid h-10 min-w-10 place-items-center rounded-full border border-line px-3 text-xs font-bold uppercase tracking-wider text-muted transition hover:border-accent hover:text-accent"
    >
      {target}
    </Link>
  );
}
