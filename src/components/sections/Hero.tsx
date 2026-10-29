import { ArrowRight } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import { projectImageSize, projects } from "@/content/projects";
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

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as React.CSSProperties;

export default function Hero({ locale, hero }: HeroProps) {
  const [front, back] = projects.filter((project) => project.featured);
  const stats = [
    { label: hero.stats.projects, value: projects.length },
    { label: hero.stats.published, value: playApps.length },
    { label: hero.stats.certificates, value: certificates.length },
  ];

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(var(--line)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_70%_30%,black,transparent_70%)]" />
        <div className="drift absolute -right-40 -top-40 size-[36rem] rounded-full bg-accent/15 blur-3xl" />
        <div className="drift absolute -bottom-48 left-1/4 size-[28rem] rounded-full bg-accent-2/10 blur-3xl [animation-delay:-9s]" />
      </div>

      <Container className="relative grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1.05fr_1fr]">
        <div className="grid gap-7">
          <span
            className="enter inline-flex w-fit items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-muted"
            style={delay(0)}
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            {hero.status}
          </span>
          <h1
            className="enter font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            style={delay(100)}
          >
            {hero.titleLead}{" "}
            <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              {hero.titleAccent}
            </span>
          </h1>
          <p className="enter max-w-xl text-lg text-muted" style={delay(200)}>
            {hero.lead}
          </p>
          <div className="enter flex flex-wrap gap-3" style={delay(300)}>
            <ButtonLink href={routes.section(locale, sectionIds.projects)}>
              {hero.primaryCta} <ArrowRight size={16} />
            </ButtonLink>
            <ButtonLink href={routes.section(locale, sectionIds.contact)} variant="ghost">
              {hero.secondaryCta}
            </ButtonLink>
          </div>
        </div>

        <div className="enter relative mx-auto w-full max-w-xl pb-10 lg:pb-0" style={delay(250)}>
          <div className="float-slow absolute -right-2 top-8 w-4/5">
            <img
              src={back.image[locale]}
              alt=""
              {...projectImageSize}
              className="w-full rotate-6 rounded-3xl border border-line opacity-60 shadow-showcase"
            />
          </div>
          <div className="float relative w-11/12">
            <img
              src={front.image[locale]}
              alt={front.title[locale]}
              {...projectImageSize}
              fetchPriority="high"
              className="w-full -rotate-2 rounded-3xl border border-line shadow-showcase"
            />
          </div>
          <StatList
            stats={stats}
            className="absolute bottom-0 left-4 rounded-2xl border border-line bg-surface/90 px-5 py-3 shadow-showcase backdrop-blur lg:-bottom-6"
          />
        </div>
      </Container>
    </section>
  );
}
