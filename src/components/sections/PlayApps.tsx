import { ArrowUpRight } from "lucide-react";
import { FaGooglePlay } from "react-icons/fa6";
import type { Locale } from "@/i18n/config";
import { format, type Dictionary } from "@/i18n";
import { appGroups, playStoreUrl, type PlayApp } from "@/content/apps";
import { sectionIds } from "@/lib/routes";
import Section from "@/components/ui/Section";

interface PlayAppsProps {
  locale: Locale;
  apps: Dictionary["apps"];
}

export default function PlayApps({ locale, apps }: PlayAppsProps) {
  return (
    <Section id={sectionIds.apps} eyebrow={apps.eyebrow} title={apps.title} intro={apps.intro}>
      {appGroups.map((group) => {
        const title = group.developer
          ? format(apps.groups.company, { company: group.developer })
          : apps.groups.personal;
        const headingId = `apps-${group.id}`;

        return (
          <section key={group.id} aria-labelledby={headingId} className="grid gap-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
              <h3 id={headingId} className="font-display text-lg font-bold">
                {title} <span className="text-muted">({group.apps.length})</span>
              </h3>
              <a
                href={group.storePage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted transition hover:text-accent"
              >
                <FaGooglePlay size={13} aria-hidden="true" /> {apps.all}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {group.apps.map((app) => (
                <li key={app.packageId} className="reveal">
                  <AppCard app={app} locale={locale} apps={apps} />
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </Section>
  );
}

function AppCard({ app, locale, apps }: { app: PlayApp; locale: Locale; apps: Dictionary["apps"] }) {
  return (
    <a
      href={playStoreUrl(app.packageId)}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid h-full grid-rows-[auto_1fr_auto] gap-4 rounded-3xl border border-line bg-surface p-6 transition hover:-translate-y-1 hover:border-accent"
    >
      <div className="flex items-start justify-between gap-3">
        <img
          src={app.icon[locale]}
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
        <h4 className="font-display text-base font-bold leading-snug">{app.name[locale]}</h4>
        {app.developedFor && (
          <span className="text-xs font-semibold text-accent">
            {format(apps.developedFor, { company: app.developedFor })}
          </span>
        )}
        <p className="text-sm text-muted">{app.tagline[locale]}</p>
      </div>
      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
        <FaGooglePlay size={13} aria-hidden="true" /> {apps.open}
        <ArrowUpRight size={15} aria-hidden="true" className="transition group-hover:translate-x-0.5" />
      </span>
    </a>
  );
}
