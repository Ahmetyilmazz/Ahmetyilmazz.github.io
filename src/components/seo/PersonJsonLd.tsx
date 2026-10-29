import type { Locale } from "@/i18n/config";
import { site, stack } from "@/content/site";

/** Arama motorlarına kişi bilgisini yapılandırılmış veri (schema.org Person) olarak verir. */
export default function PersonJsonLd({ locale, description }: { locale: Locale; description: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    description,
    url: `${site.url}/${locale}/`,
    image: `${site.url}${site.photo}`,
    email: `mailto:${site.email}`,
    sameAs: Object.values(site.socials),
    knowsAbout: [...new Set(Object.values(stack).flat())],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
