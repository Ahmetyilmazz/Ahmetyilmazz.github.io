import type { Locale } from "./config";
import { en } from "./dictionaries/en";
import { tr, type Dictionary } from "./dictionaries/tr";

const dictionaries: Record<Locale, Dictionary> = { tr, en };

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];

/** "{count} proje" gibi şablonlardaki yer tutucuları doldurur. */
export const format = (template: string, values: Record<string, string | number>) =>
  template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? `{${key}}`));

export type { Dictionary };
