"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import { routes, sectionIds } from "@/lib/routes";
import Container from "@/components/ui/Container";
import Brand from "./Brand";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  locale: Locale;
  nav: Dictionary["nav"];
}

export default function Header({ locale, nav }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  const links = [
    { id: sectionIds.apps, label: nav.apps },
    { id: sectionIds.services, label: nav.services },
    { id: sectionIds.projects, label: nav.projects },
    { id: sectionIds.about, label: nav.about },
    { id: sectionIds.certificates, label: nav.certificates },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
      >
        {nav.skipToContent}
      </a>
      <Container className="flex h-16 items-center justify-between gap-4">
        <Brand href={routes.home(locale)} compact />

        <nav aria-label={nav.menu} className="hidden items-center gap-7 text-sm text-muted lg:flex">
          {links.map((link) => (
            <Link key={link.id} href={routes.section(locale, link.id)} className="transition hover:text-fg">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={routes.section(locale, sectionIds.contact)}
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-fg transition hover:brightness-110 sm:inline-flex"
          >
            {nav.contact}
          </Link>
          <LanguageSwitcher locale={locale} label={nav.switchLanguage} />
          <ThemeToggle labels={{ light: nav.themeLight, dark: nav.themeDark }} />
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={nav.menu}
            className="grid size-10 place-items-center rounded-full border border-line text-muted lg:hidden"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      {isOpen && (
        <nav id="mobile-menu" aria-label={nav.menu} className="border-t border-line bg-bg lg:hidden">
          <Container className="grid gap-1 py-4">
            {[...links, { id: sectionIds.contact, label: nav.contact }].map((link) => (
              <Link
                key={link.id}
                href={routes.section(locale, link.id)}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-3 py-3 text-base text-fg transition hover:bg-surface"
              >
                {link.label}
              </Link>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
