import Link from "next/link";
import { site } from "@/content/site";

interface BrandProps {
  href: string;
  /** Dar ekranlarda rolü gizler; ad her zaman görünür. */
  compact?: boolean;
}

export default function Brand({ href, compact = false }: BrandProps) {
  return (
    <Link href={href} className="group flex items-center gap-3">
      <span className="relative grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-accent to-accent-2 p-[2px] transition group-hover:rotate-6">
        <img
          src={site.avatar}
          alt=""
          width={96}
          height={96}
          className="size-full rounded-full border-2 border-bg object-cover"
        />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-display text-sm font-bold whitespace-nowrap">{site.name}</span>
        <span className={`text-xs text-muted ${compact ? "hidden sm:inline" : ""}`}>{site.role}</span>
      </span>
    </Link>
  );
}
