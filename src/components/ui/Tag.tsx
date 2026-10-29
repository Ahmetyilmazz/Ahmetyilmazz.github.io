export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-surface-2 px-3 py-1 text-xs font-medium text-muted">
      {children}
    </span>
  );
}
