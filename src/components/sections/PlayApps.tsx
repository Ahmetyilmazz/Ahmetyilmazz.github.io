import { ArrowUpRight } from "lucide-react";
import { FaGooglePlay } from "react-icons/fa6";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import { playApps, playStoreUrl } from "@/content/apps";
import { site } from "@/content/site";
import { sectionIds } from "@/lib/routes";
import Section from "@/components/ui/Section";
import ButtonLink from "@/components/ui/ButtonLink";

export default function PlayApps({ locale, apps }: { locale: Locale; apps: Dictionary["apps"] }) {
  return (
    <Section
      id={sectionIds.apps}
      eyebrow={apps.eyebrow}
      title={apps.title}
      intro={apps.intro}
      aside={
        <ButtonLink href={site.socials.googlePlay} variant="ghost" external>
          <FaGooglePlay size={15} /> {apps.all}
        </ButtonLink>
      }
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {playApps.map((app) => (
          <li key={app.packageId}>
            <a
              href={playStoreUrl(app.packageId)}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid h-full grid-rows-[auto_1fr_auto] gap-4 rounded-3xl border border-line bg-surface p-6 transition hover:-translate-y-1 hover:border-accent"
            >
              <div className="flex items-start justify-between gap-3">
                <img
                  src={app.icon}
                  alt=""
                  width={256}
                  height={256}
                  loading="lazy"
                  className="size-16 rounded-2xl border border-line"
                />
                <span className="rounded-full bg-highlight/15 px-3 py-1 text-xs font-semibold text-highlight">
                  {apps.categories[app.category]}
                </span>
              </div>
              <div className="grid content-start gap-2">
                <h3 className="font-display text-base font-bold leading-snug">{app.name[locale]}</h3>
                <p className="text-sm text-muted">{app.tagline[locale]}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                <FaGooglePlay size={13} aria-hidden="true" /> {apps.open}
                <ArrowUpRight size={15} aria-hidden="true" className="transition group-hover:translate-x-0.5" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
