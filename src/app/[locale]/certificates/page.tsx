import type { Metadata } from "next";
import { getDictionary } from "@/i18n";
import { resolveLocale, type LocaleParams } from "@/i18n/params";
import { certificates } from "@/content/certificates";
import { buildMetadata } from "@/lib/metadata";
import Section from "@/components/ui/Section";
import StatList from "@/components/ui/StatList";
import CertificateBrowser from "@/components/certificates/CertificateBrowser";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const { certificates: dict } = getDictionary(locale);
  return buildMetadata({ locale, path: "certificates/", title: dict.pageTitle, description: dict.pageIntro });
}

export default async function CertificatesPage({ params }: LocaleParams) {
  const locale = resolveLocale((await params).locale);
  const { certificates: dict } = getDictionary(locale);

  const stats = [
    { label: dict.stats.total, value: certificates.length },
    { label: dict.stats.hours, value: certificates.reduce((sum, certificate) => sum + certificate.hours, 0) },
    { label: dict.stats.categories, value: new Set(certificates.map((certificate) => certificate.category)).size },
  ];

  return (
    <Section
      eyebrow={dict.eyebrow}
      title={dict.pageTitle}
      intro={dict.pageIntro}
      aside={<StatList stats={stats} className="gap-8" />}
    >
      <CertificateBrowser locale={locale} dict={dict} />
    </Section>
  );
}
