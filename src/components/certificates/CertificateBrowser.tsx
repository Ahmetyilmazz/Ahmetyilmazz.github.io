"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n";
import { certificateCategories, certificates, type CertificateCategory } from "@/content/certificates";
import CertificateCard from "./CertificateCard";

type Filter = CertificateCategory | "all";

interface CertificateBrowserProps {
  locale: Locale;
  dict: Dictionary["certificates"];
}

export default function CertificateBrowser({ locale, dict }: CertificateBrowserProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  const filters = useMemo(
    () => [
      { id: "all" as Filter, label: dict.all, count: certificates.length },
      ...certificateCategories.map((category) => ({
        id: category as Filter,
        label: dict.categories[category],
        count: certificates.filter((certificate) => certificate.category === category).length,
      })),
    ],
    [dict],
  );

  const visible = useMemo(() => {
    const term = query.trim().toLocaleLowerCase(locale);
    return certificates.filter((certificate) => {
      if (filter !== "all" && certificate.category !== filter) return false;
      if (!term) return true;
      return [certificate.title[locale], certificate.organization[locale], ...certificate.skills[locale]].some((text) =>
        text.toLocaleLowerCase(locale).includes(term),
      );
    });
  }, [filter, query, locale]);

  return (
    <div className="grid gap-8">
      <div className="grid gap-4">
        <label className="relative block max-w-xl">
          <span className="sr-only">{dict.searchLabel}</span>
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" aria-hidden="true" />
          <input
            id="certificate-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={dict.search}
            className="w-full rounded-full border border-line bg-surface py-3 pl-11 pr-4 text-fg placeholder:text-muted focus:border-accent focus:outline-none"
          />
        </label>
        <div className="flex flex-wrap gap-2" role="group" aria-label={dict.pageTitle}>
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={filter === item.id}
              onClick={() => setFilter(item.id)}
              className="rounded-full border border-line px-4 py-2 text-sm font-medium text-muted transition hover:border-accent hover:text-fg aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-accent-fg"
            >
              {item.label} <span className="opacity-70">{item.count}</span>
            </button>
          ))}
        </div>
      </div>

      {visible.length > 0 ? (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((certificate) => (
            <li key={certificate.id}>
              <CertificateCard
                certificate={certificate}
                locale={locale}
                labels={{ verify: dict.verify, hours: dict.hours, category: dict.categories[certificate.category] }}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="rounded-3xl border border-dashed border-line p-10 text-center text-muted">{dict.empty}</p>
      )}
    </div>
  );
}
