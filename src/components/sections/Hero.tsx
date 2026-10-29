import { ArrowRight } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import { projects } from "@/content/projects";
import { certificates } from "@/content/certificates";
import { playApps } from "@/content/apps";
import { routes, sectionIds } from "@/lib/routes";
import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import StatList from "@/components/ui/StatList";

interface HeroProps {
  locale: Locale;
  hero: Dictionary["hero"];
}

export default function Hero({ locale, hero }: HeroProps) {
  const [front, back] = projects.filter((project) => project.featured);
  const stats = [
    { label: hero.stats.projects, value: projects.length },
    { label: hero.stats.published, value: playApps.length },
    { label: hero.stats.certificates, value: certificates.length },
  ];

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 size-[36rem] rounded-full bg-accent/15 blur-3xl"
      />
      <Container className="relative grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1.05fr_1fr]">
        <div className="grid gap-7">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-muted">
            <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgb(52_211_153/0.2)]" />
            {hero.status}
          </span>
          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {hero.titleLead} <span className="text-accent">{hero.titleAccent}</span>
          </h1>
          <p className="max-w-xl text-lg text-muted">{hero.lead}</p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={routes.section(locale, sectionIds.projects)}>
              {hero.primaryCta} <ArrowRight size={16} />
            </ButtonLink>
            <ButtonLink href={routes.section(locale, sectionIds.contact)} variant="ghost">
              {hero.secondaryCta}
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl pb-10 lg:pb-0">
          <img
            src={back.image}
            alt=""
            width={1920}
            height={1440}
            className="absolute -right-2 top-8 w-4/5 rotate-6 rounded-3xl border border-line opacity-60 shadow-showcase"
          />
          <img
            src={front.image}
            alt={front.title[locale]}
            width={1920}
            height={1440}
            fetchPriority="high"
            className="relative w-11/12 -rotate-2 rounded-3xl border border-line shadow-showcase"
          />
          <StatList
            stats={stats}
            className="absolute bottom-0 left-4 rounded-2xl border border-line bg-surface/90 px-5 py-3 backdrop-blur lg:-bottom-6"
          />
        </div>
      </Container>
    </section>
  );
}
