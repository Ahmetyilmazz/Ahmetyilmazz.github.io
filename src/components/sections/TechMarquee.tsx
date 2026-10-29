import { stack } from "@/content/site";

const tools = [...new Set(Object.values(stack).flat())];

/** Hero altında yavaşça kayan teknoloji bandı; içerik iki kez dizilerek kesintisiz döngü sağlanır. */
export default function TechMarquee() {
  return (
    <div className="marquee overflow-hidden border-y border-line bg-surface/50 py-5 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div className="marquee-track flex w-max">
        {[false, true].map((duplicate) => (
          <ul key={String(duplicate)} aria-hidden={duplicate || undefined} className="flex shrink-0 items-center">
            {tools.map((tool) => (
              <li
                key={tool}
                className="flex items-center gap-8 pr-8 font-display text-sm font-medium text-muted after:size-1.5 after:rounded-full after:bg-accent/60 after:content-['']"
              >
                {tool}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
