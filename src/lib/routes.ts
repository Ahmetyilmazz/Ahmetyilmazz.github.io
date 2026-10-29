import type { Locale } from "@/i18n/config";

/** Tüm iç bağlantılar sonda "/" ile üretilir (next.config: trailingSlash: true). */
export const routes = {
  home: (locale: Locale) => `/${locale}/`,
  section: (locale: Locale, id: string) => `/${locale}/#${id}`,
  project: (locale: Locale, slug: string) => `/${locale}/projects/${slug}/`,
  certificates: (locale: Locale) => `/${locale}/certificates/`,
};

/** Mevcut yoldaki dil segmentini diğer dille değiştirir: /tr/projects/x/ -> /en/projects/x/ */
export const switchLocalePath = (pathname: string, target: Locale) => {
  const [, , ...rest] = pathname.split("/");
  return `/${target}/${rest.join("/")}`;
};

export const sectionIds = {
  apps: "apps",
  services: "services",
  projects: "projects",
  about: "about",
  certificates: "certificates",
  contact: "contact",
} as const;
