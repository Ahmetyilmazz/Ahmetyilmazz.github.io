import Container from "./Container";

interface SectionProps {
  id?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  aside?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  /** Bölüm sayfanın ana başlığıysa (ör. sertifikalar sayfası) h1 kullanılır. */
  headingLevel?: "h1" | "h2";
}

export default function Section({
  id,
  eyebrow,
  title,
  intro,
  aside,
  children,
  className = "",
  headingLevel: Heading = "h2",
}: SectionProps) {
  const headingId = id ? `${id}-title` : undefined;

  return (
    <section id={id} aria-labelledby={headingId} className={`py-16 sm:py-24 ${className}`}>
      <Container className="grid gap-10 sm:gap-14">
        <header className="reveal flex flex-wrap items-end justify-between gap-6">
          <div className="grid max-w-2xl gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-highlight">{eyebrow}</span>
            <Heading id={headingId} className="font-display text-3xl font-bold leading-tight sm:text-4xl">
              {title}
            </Heading>
            {intro && <p className="text-lg text-muted">{intro}</p>}
          </div>
          {aside}
        </header>
        {children}
      </Container>
    </section>
  );
}
