import Link from "next/link";
import { FaGithub, FaGooglePlay, FaLinkedin } from "react-icons/fa6";
import { Mail } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import { site } from "@/content/site";
import { routes, sectionIds } from "@/lib/routes";
import Container from "@/components/ui/Container";
import Brand from "./Brand";

const socialLinks = [
  { href: site.socials.github, label: "GitHub", icon: FaGithub },
  { href: site.socials.linkedin, label: "LinkedIn", icon: FaLinkedin },
  { href: site.socials.googlePlay, label: "Google Play", icon: FaGooglePlay },
  { href: `mailto:${site.email}`, label: "E-mail", icon: Mail },
];

interface FooterProps {
  locale: Locale;
  footer: Dictionary["footer"];
  nav: Dictionary["nav"];
}

export default function Footer({ locale, footer, nav }: FooterProps) {
  const links = [
    { href: routes.section(locale, sectionIds.apps), label: nav.apps },
    { href: routes.section(locale, sectionIds.services), label: nav.services },
    { href: routes.section(locale, sectionIds.projects), label: nav.projects },
    { href: routes.certificates(locale), label: nav.certificates },
    { href: routes.section(locale, sectionIds.contact), label: nav.contact },
  ];

  return (
    <footer className="border-t border-line bg-surface/40">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_auto] md:items-start">
        <div className="grid max-w-sm gap-4">
          <Brand href={routes.home(locale)} />
          <p className="text-sm text-muted">{footer.tagline}</p>
        </div>

        <nav aria-label={footer.siteLinks}>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-muted">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-fg">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex gap-2">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="grid size-10 place-items-center rounded-full border border-line text-muted transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <Icon size={17} />
              </a>
            </li>
          ))}
        </ul>
      </Container>
      <Container className="border-t border-line py-6 text-xs text-muted">
        © {new Date().getFullYear()} {site.name}. {footer.rights}
      </Container>
    </footer>
  );
}
