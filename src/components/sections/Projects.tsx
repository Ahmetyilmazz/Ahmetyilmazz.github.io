import type { Locale } from "@/i18n/config";
import { format, type Dictionary } from "@/i18n";
import { projects } from "@/content/projects";
import { sectionIds } from "@/lib/routes";
import Section from "@/components/ui/Section";
import ProjectCard from "@/components/projects/ProjectCard";

export default function Projects({ locale, dict }: { locale: Locale; dict: Dictionary["projects"] }) {
  const featured = projects.filter((project) => project.featured);
  const others = projects.filter((project) => !project.featured);
  const labels = { details: dict.details, demo: dict.demo };

  return (
    <Section
      id={sectionIds.projects}
      eyebrow={dict.eyebrow}
      title={dict.title}
      intro={dict.intro}
      aside={<span className="text-sm text-muted">{format(dict.count, { count: projects.length })}</span>}
      className="bg-surface-2/40"
    >
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <li key={project.slug} className="reveal">
            <ProjectCard project={project} locale={locale} labels={labels} />
          </li>
        ))}
      </ul>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {others.map((project) => (
          <li key={project.slug} className="reveal">
            <ProjectCard project={project} locale={locale} labels={labels} compact />
          </li>
        ))}
      </ul>
    </Section>
  );
}
