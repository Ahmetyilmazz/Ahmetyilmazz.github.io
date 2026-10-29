import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Mail } from "lucide-react";
import type { Dictionary } from "@/i18n";
import { site } from "@/content/site";
import Container from "@/components/ui/Container";

const socialLinks = [
  { href: site.socials.github, label: "GitHub", icon: FaGithub },
  { href: site.socials.linkedin, label: "LinkedIn", icon: FaLinkedin },
  { href: `mailto:${site.email}`, label: "E-mail", icon: Mail },
];

export default function Footer({ footer }: { footer: Dictionary["footer"] }) {
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col items-center justify-between gap-6 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}. {footer.rights} {footer.builtWith}
        </p>
        <ul className="flex gap-2">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="grid size-10 place-items-center rounded-full border border-line transition hover:border-accent hover:text-accent"
              >
                <Icon size={18} />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
