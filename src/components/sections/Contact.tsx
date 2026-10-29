import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { ArrowUpRight, Mail } from "lucide-react";
import type { Dictionary } from "@/i18n";
import { site } from "@/content/site";
import { sectionIds } from "@/lib/routes";
import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import CopyEmail from "./CopyEmail";

export default function Contact({ contact }: { contact: Dictionary["contact"] }) {
  return (
    <section id={sectionIds.contact} aria-labelledby="contact-title" className="py-16 sm:py-24">
      <Container>
        <div className="reveal relative grid gap-8 overflow-hidden rounded-[2rem] border border-line bg-surface p-8 sm:p-14 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div
            aria-hidden="true"
            className="drift pointer-events-none absolute -bottom-32 -right-32 size-96 rounded-full bg-accent/15 blur-3xl"
          />
          <div className="relative grid gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-highlight">{contact.eyebrow}</span>
            <h2 id="contact-title" className="font-display text-3xl font-bold sm:text-5xl">
              {contact.title}
            </h2>
            <p className="max-w-lg text-lg text-muted">{contact.text}</p>
          </div>

          <div className="relative grid gap-5">
            <div className="grid gap-2 rounded-2xl border border-line bg-bg/60 p-5">
              <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                <Mail size={14} /> {contact.email}
              </span>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <a href={`mailto:${site.email}`} className="select-all break-all font-display font-bold hover:text-accent">
                  {site.email}
                </a>
                <CopyEmail email={site.email} labels={{ copy: contact.copy, copied: contact.copied }} />
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={site.contactForm} external>
                {contact.form} <ArrowUpRight size={16} />
              </ButtonLink>
              <ButtonLink href={site.socials.linkedin} variant="ghost" external>
                <FaLinkedin size={16} /> LinkedIn
              </ButtonLink>
              <ButtonLink href={site.socials.github} variant="ghost" external>
                <FaGithub size={16} /> GitHub
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
