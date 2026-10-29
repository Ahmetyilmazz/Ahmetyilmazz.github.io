import type { Metadata } from "next";
import { locales, ogLocale, type Locale } from "@/i18n/config";
import { site } from "@/content/site";

interface PageMetadataInput {
  locale: Locale;
  /** Dil önekinden sonraki yol, ör. "" veya "projects/muhabbet/" */
  path?: string;
  title: string;
  description: string;
  image?: string;
}

export const buildMetadata = ({ locale, path = "", title, description, image = site.ogImage }: PageMetadataInput): Metadata => {
  const url = `/${locale}/${path}`;
  const languages = Object.fromEntries(locales.map((code) => [code, `/${code}/${path}`]));

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
      images: [{ url: image, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
};
