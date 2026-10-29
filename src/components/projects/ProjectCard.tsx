import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { FaGooglePlay } from "react-icons/fa6";
import type { Locale } from "@/i18n/config";
import { projectImageSize, type Project } from "@/content/projects";
import { routes } from "@/lib/routes";
import Tag from "@/components/ui/Tag";

const badgeClass =
  "inline-flex items-center gap-1.5 rounded-full bg-bg/80 px-3 py-1 text-xs font-medium backdrop-blur";

interface ProjectCardProps {
  project: Project;
  locale: Locale;
  labels: { details: string; demo: string };
  compact?: boolean;
}

export default function ProjectCard({ project, locale, labels, compact = false }: ProjectCardProps) {
  return (
    <Link
      href={routes.project(locale, project.slug)}
      className="group grid h-full content-start overflow-hidden rounded-3xl border border-line bg-surface transition hover:-translate-y-1 hover:border-accent"
    >
      <div className="relative overflow-hidden bg-surface-2">
        <img
          src={project.image}
          alt=""
          {...projectImageSize}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {project.developedFor && <span className={badgeClass}>{project.developedFor}</span>}
          {project.playStore && (
            <span className={badgeClass}>
              <FaGooglePlay size={11} /> Google Play
            </span>
          )}
          {project.video && (
            <span className={badgeClass}>
              <Play size={12} className="fill-current" /> {labels.demo}
            </span>
          )}
        </div>
      </div>
      <div className={`grid gap-3 ${compact ? "p-5" : "p-6"}`}>
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-highlight">
          {project.platform[locale]}
        </span>
        <h3 className={`flex items-start justify-between gap-3 font-display font-bold ${compact ? "text-base" : "text-xl"}`}>
          {project.title[locale]}
          <ArrowUpRight
            size={20}
            aria-hidden="true"
            className="shrink-0 text-muted transition group-hover:text-accent"
          />
        </h3>
        <p className={`text-muted ${compact ? "line-clamp-2 text-sm" : ""}`}>{project.summary[locale]}</p>
        {!compact && (
          <div className="flex flex-wrap gap-2 pt-1">
            {project.technologies.slice(0, 3).map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        )}
        <span className="sr-only">{labels.details}</span>
      </div>
    </Link>
  );
}
