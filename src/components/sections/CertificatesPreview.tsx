import { ArrowRight } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import { certificates } from "@/content/certificates";
import { routes, sectionIds } from "@/lib/routes";
import Section from "@/components/ui/Section";
import ButtonLink from "@/components/ui/ButtonLink";
import CertificateCard from "@/components/certificates/CertificateCard";

export default function CertificatesPreview({ locale, dict }: { locale: Locale; dict: Dictionary["certificates"] }) {
  const featured = certificates.filter((certificate) => certificate.featured);

  return (
    <Section
      id={sectionIds.certificates}
      eyebrow={dict.eyebrow}
      title={dict.title}
      intro={dict.intro}
      aside={
        <ButtonLink href={routes.certificates(locale)} variant="ghost">
          {dict.seeAll} ({certificates.length}) <ArrowRight size={16} />
        </ButtonLink>
      }
      className="bg-surface-2/40"
    >
      <ul className="grid gap-6 md:grid-cols-3">
        {featured.map((certificate) => (
          <li key={certificate.id} className="reveal">
            <CertificateCard
              certificate={certificate}
              locale={locale}
              labels={{ verify: dict.verify, hours: dict.hours, category: dict.categories[certificate.category] }}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
