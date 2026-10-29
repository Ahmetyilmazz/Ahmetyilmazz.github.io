import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FaGithub, FaGooglePlay } from "react-icons/fa6";
import { playStoreUrl } from "@/content/apps";
import { format, getDictionary } from "@/i18n";
import { resolveLocale, type LocaleParams } from "@/i18n/params";
import { getProject, projectImageSize, projects } from "@/content/projects";
import { buildMetadata } from "@/lib/metadata";
import { routes, sectionIds } from "@/lib/routes";
import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import Tag from "@/components/ui/Tag";

type ProjectParams = LocaleParams<{ slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

const loadProject = async (params: ProjectParams["params"]) => {
  const { locale: param, slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return { locale: resolveLocale(param), project };
};

export async function generateMetadata({ params }: ProjectParams): Promise<Metadata> {
  const { locale, project } = await loadProject(params);
  return buildMetadata({
    locale,
    path: `projects/${project.slug}/`,
    title: project.title[locale],
    description: project.summary[locale],
    image: project.image,
  });
}

export default async function ProjectPage({ params }: ProjectParams) {
  const { locale, project } = await loadProject(params);
  const { projects: dict, apps } = getDictionary(locale);

  const index = projects.indexOf(project);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const story = [
    { label: dict.problem, text: project.problem[locale] },
    { label: dict.solution, text: project.solution[locale] },
  ];

  return (
    <article className="py-12 sm:py-16">
      <Container className="grid gap-14">
        <Link
          href={routes.section(locale, sectionIds.projects)}
          className="inline-flex w-fit items-center gap-2 text-sm text-muted transition hover:text-accent"
        >
          <ArrowLeft size={16} /> {dict.back}
        </Link>

        <header className="grid items-center gap-10 lg:grid-cols-2">
          <div className="grid gap-5">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-highlight">
              {project.platform[locale]}
            </span>
            <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">{project.title[locale]}</h1>
            {project.developedFor && (
              <span className="w-fit rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
                {format(apps.developedFor, { company: project.developedFor })}
              </span>
            )}
            <p className="text-lg text-muted">{project.summary[locale]}</p>
            <div className="flex flex-wrap gap-3">
              {project.playStore && (
                <ButtonLink href={playStoreUrl(project.playStore)} external>
                  <FaGooglePlay size={15} /> {apps.open}
                </ButtonLink>
              )}
              {project.github && (
                <ButtonLink href={project.github} variant={project.playStore ? "ghost" : "primary"} external>
                  <FaGithub size={16} /> {dict.source}
                </ButtonLink>
              )}
              {project.video && (
                <ButtonLink href="#demo" variant="ghost">
                  {dict.watchDemo}
                </ButtonLink>
              )}
            </div>
          </div>
          <img
            src={project.image}
            alt={project.title[locale]}
            {...projectImageSize}
            fetchPriority="high"
            className="w-full rounded-3xl border border-line shadow-showcase"
          />
        </header>

        <div className={`grid items-start gap-10 ${project.video ? "lg:grid-cols-[1fr_auto]" : ""}`}>
          <div className="grid gap-8">
            {story.map((block) => (
              <section key={block.label} className="grid gap-3 rounded-3xl border border-line bg-surface p-7">
                <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{block.label}</h2>
                <p className="text-lg leading-relaxed">{block.text}</p>
              </section>
            ))}
            <section className="grid gap-4">
              <h2 className="font-display text-lg font-bold">{dict.technologies}</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </section>
          </div>

          {project.video && (
            <figure id="demo" className="mx-auto w-64 scroll-mt-24 sm:w-72">
              <div className="rounded-[2.5rem] border-[10px] border-[#05070b] bg-[#05070b] shadow-showcase ring-1 ring-line">
                <video
                  src={project.video}
                  controls
                  playsInline
                  preload="metadata"
                  className="aspect-[9/19.5] w-full rounded-[1.75rem] bg-black object-contain"
                />
              </div>
              <figcaption className="mt-3 text-center text-sm text-muted">{dict.demo}</figcaption>
            </figure>
          )}
        </div>

        <nav aria-label={dict.title} className="grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
          <Link href={routes.project(locale, previous.slug)} className="group grid gap-1 rounded-2xl p-4 transition hover:bg-surface">
            <span className="flex items-center gap-2 text-xs text-muted">
              <ArrowLeft size={14} /> {dict.previous}
            </span>
            <span className="font-display font-bold group-hover:text-accent">{previous.title[locale]}</span>
          </Link>
          <Link
            href={routes.project(locale, next.slug)}
            className="group grid gap-1 rounded-2xl p-4 text-right transition hover:bg-surface"
          >
            <span className="flex items-center justify-end gap-2 text-xs text-muted">
              {dict.next} <ArrowRight size={14} />
            </span>
            <span className="font-display font-bold group-hover:text-accent">{next.title[locale]}</span>
          </Link>
        </nav>
      </Container>
    </article>
  );
}
