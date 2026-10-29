import type { Metadata } from "next";
import { locales, ogLocale, type Locale } from "@/i18n/config";
import { site } from "@/content/site";

export const ogImageSize = { width: 1200, height: 630 } as const;

const ogImagePath = (locale: Locale) => `/${locale}/og.png`;

interface PageMetadataInput {
  locale: Locale;
  /** Dil önekinden sonraki yol, ör. "" veya "projects/muhabbet/" */
  path?: string;
  title: string;
  description: string;
}

/** Paylaşım görseli [locale]/og.png/route.tsx tarafından build sırasında üretilir. */
export const buildMetadata = ({ locale, path = "", title, description }: PageMetadataInput): Metadata => {
  const url = `/${locale}/${path}`;
  const languages = Object.fromEntries(locales.map((code) => [code, `/${code}/${path}`]));
  const image = { url: ogImagePath(locale), ...ogImageSize, alt: `${site.name} | ${site.role}` };

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: { ...languages, "x-default": `/tr/${path}` },
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: site.name,
      locale: ogLocale[locale],
      alternateLocale: locales.filter((code) => code !== locale).map((code) => ogLocale[code]),
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
};
