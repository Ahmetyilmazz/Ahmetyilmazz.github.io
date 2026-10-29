import type { Locale } from "@/i18n/config";

const dateLocales: Record<Locale, string> = { tr: "tr-TR", en: "en-GB" };

export const formatDate = (locale: Locale, isoDate: string) =>
  new Intl.DateTimeFormat(dateLocales[locale], { month: "long", year: "numeric" }).format(new Date(isoDate));
