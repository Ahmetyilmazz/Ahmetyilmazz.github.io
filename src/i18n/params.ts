import { notFound } from "next/navigation";
import { isLocale, type Locale } from "./config";

export type LocaleParams<T = object> = { params: Promise<{ locale: string } & T> };

/** Rota parametresindeki dili doğrular; geçersizse 404 döner. */
export const resolveLocale = (locale: string): Locale => {
  if (!isLocale(locale)) notFound();
  return locale;
};
