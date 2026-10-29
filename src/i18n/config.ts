export const locales = ["tr", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "tr";

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

/** Her dil için ayrı değer tutan içerik alanı. */
export type Localized<T = string> = Record<Locale, T>;

export const htmlLang: Record<Locale, string> = { tr: "tr", en: "en" };
export const ogLocale: Record<Locale, string> = { tr: "tr_TR", en: "en_US" };
