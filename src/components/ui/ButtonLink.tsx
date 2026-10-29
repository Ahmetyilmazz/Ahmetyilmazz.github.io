import Link from "next/link";

type Variant = "primary" | "ghost";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-fg hover:brightness-110",
  ghost: "border border-line text-fg hover:border-accent hover:text-accent",
};

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
}

export default function ButtonLink({ href, children, variant = "primary", external = false }: ButtonLinkProps) {
  const className = `inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${variants[variant]}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
