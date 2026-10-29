import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { site } from "@/content/site";
import { projects } from "@/content/projects";

export const dynamic = "force-static";

/** Dil önekinden sonraki tüm sayfa yolları. */
const paths = ["", "certificates/", ...projects.map((project) => `projects/${project.slug}/`)];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${site.url}/${locale}/${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(locales.map((code) => [code, `${site.url}/${code}/${path}`])),
      },
    })),
  );
}
