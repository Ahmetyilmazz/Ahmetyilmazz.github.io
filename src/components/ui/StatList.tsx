export interface Stat {
  label: string;
  value: number;
}

export default function StatList({ stats, className = "" }: { stats: Stat[]; className?: string }) {
  return (
    <dl className={`flex gap-6 ${className}`}>
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col-reverse">
          <dt className="text-xs text-muted">{stat.label}</dt>
          <dd className="font-display text-2xl font-bold tabular-nums">{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}
