import { ArrowRight, Bot, Globe, Monitor, Smartphone } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import { routes, sectionIds } from "@/lib/routes";
import Section from "@/components/ui/Section";
import ButtonLink from "@/components/ui/ButtonLink";

const icons = { mobile: Smartphone, web: Globe, desktop: Monitor, ai: Bot };

export default function Services({ locale, services }: { locale: Locale; services: Dictionary["services"] }) {
  const items = (Object.keys(icons) as (keyof typeof icons)[]).map((key) => ({
    key,
    Icon: icons[key],
    ...services.items[key],
  }));

  return (
    <Section id={sectionIds.services} eyebrow={services.eyebrow} title={services.title} intro={services.intro}>
      <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {items.map(({ key, Icon, title, text, points }) => (
          <li
            key={key}
            className="reveal group grid content-start gap-4 rounded-3xl border border-line bg-surface p-7 transition hover:border-accent"
          >
            <span className="grid size-12 place-items-center rounded-2xl bg-accent/15 text-accent transition group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-fg">
              <Icon size={22} />
            </span>
            <h3 className="font-display text-lg font-bold">{title}</h3>
            <p className="text-muted">{text}</p>
            <ul className="grid gap-2 border-t border-line pt-4 text-sm">
              {points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span aria-hidden="true" className="text-accent">→</span>
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div>
        <ButtonLink href={routes.section(locale, sectionIds.contact)}>
          {services.cta} <ArrowRight size={16} />
        </ButtonLink>
      </div>
    </Section>
  );
}
