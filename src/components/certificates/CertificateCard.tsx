import { ExternalLink } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { format } from "@/i18n";
import type { Certificate } from "@/content/certificates";
import { formatDate } from "@/lib/format";
import Tag from "@/components/ui/Tag";

export interface CertificateCardLabels {
  verify: string;
  hours: string;
  category: string;
}

interface CertificateCardProps {
  certificate: Certificate;
  locale: Locale;
  labels: CertificateCardLabels;
}

export default function CertificateCard({ certificate, locale, labels }: CertificateCardProps) {
  const title = certificate.title[locale];

  return (
    <article className="grid h-full grid-rows-[auto_1fr] overflow-hidden rounded-3xl border border-line bg-surface">
      <img
        src={certificate.image}
        alt={title}
        loading="lazy"
        className="aspect-[1.414] w-full border-b border-line bg-surface-2 object-cover"
      />
      <div className="grid content-start gap-3 p-6">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-highlight">{labels.category}</span>
        <h3 className="font-display text-base font-bold leading-snug">{title}</h3>
        <p className="text-sm text-muted">
          {certificate.organization[locale]} · {formatDate(locale, certificate.date)} ·{" "}
          {format(labels.hours, { count: certificate.hours })}
        </p>
        <div className="flex flex-wrap gap-2">
          {certificate.skills[locale].slice(0, 3).map((skill) => (
            <Tag key={skill}>{skill}</Tag>
          ))}
        </div>
        <a
          href={certificate.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
        >
          {labels.verify} <ExternalLink size={14} aria-hidden="true" />
          <span className="sr-only">: {title}</span>
        </a>
      </div>
    </article>
  );
}
