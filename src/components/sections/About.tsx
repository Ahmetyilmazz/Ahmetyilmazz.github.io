import type { Dictionary } from "@/i18n";
import { site, stack, type StackGroup } from "@/content/site";
import { sectionIds } from "@/lib/routes";
import Section from "@/components/ui/Section";
import Tag from "@/components/ui/Tag";

interface AboutProps {
  about: Dictionary["about"];
  stackDict: Dictionary["stack"];
}

export default function About({ about, stackDict }: AboutProps) {
  return (
    <Section id={sectionIds.about} eyebrow={about.eyebrow} title={about.title}>
      <div className="reveal grid items-start gap-10 lg:grid-cols-[auto_1fr_1fr]">
        <img
          src={site.photo}
          alt={site.name}
          width={799}
          height={800}
          loading="lazy"
          className="size-40 rounded-3xl border border-line object-cover sm:size-48"
        />
        <div className="grid max-w-prose gap-4 text-lg text-muted">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <dl className="grid gap-4 rounded-3xl border border-line bg-surface p-6">
          {about.facts.map((fact) => (
            <div key={fact.label} className="grid gap-1 border-b border-line pb-4 last:border-0 last:pb-0">
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-highlight">{fact.label}</dt>
              <dd className="font-medium">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="grid gap-6">
        <h3 className="font-display text-xl font-bold">{stackDict.title}</h3>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {(Object.keys(stack) as StackGroup[]).map((group) => (
            <li key={group} className="reveal grid content-start gap-3 rounded-3xl border border-line bg-surface p-6">
              <span className="text-sm font-semibold">{stackDict.groups[group]}</span>
              <div className="flex flex-wrap gap-2">
                {stack[group].map((tool) => (
                  <Tag key={tool}>{tool}</Tag>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
