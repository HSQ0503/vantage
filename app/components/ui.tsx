import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-teal">{eyebrow}</p>
        <h1 className="font-heading text-4xl tracking-tight text-navy sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-navy/55 sm:text-base">{description}</p>
      </div>
      {action}
    </div>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`rounded-2xl border border-navy/5 bg-white/70 p-6 shadow-sm shadow-navy/5 backdrop-blur-sm ${className}`}>
      {children}
    </section>
  );
}

export function DarkCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={`relative overflow-hidden rounded-2xl bg-navy p-6 text-white shadow-xl shadow-navy/10 ${className}`}>
      <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/2 rounded-full bg-white/[0.04]" />
      <div className="relative">{children}</div>
    </section>
  );
}

export function StatCard({
  label,
  value,
  helper,
  tone = "teal",
}: {
  label: string;
  value: string;
  helper: string;
  tone?: "teal" | "warm" | "navy";
}) {
  const toneClass = tone === "warm" ? "text-accent-warm bg-accent-warm/10" : tone === "navy" ? "text-navy bg-navy/10" : "text-accent-teal bg-accent-teal/10";
  return (
    <Card>
      <p className="text-xs font-semibold uppercase tracking-wider text-navy/35">{label}</p>
      <p className="mt-3 text-3xl font-bold text-navy">{value}</p>
      <span className={`mt-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${toneClass}`}>{helper}</span>
    </Card>
  );
}

export function ProgressBar({ value, color = "bg-accent-teal" }: { value: number; color?: string }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-navy/10">
      <div className={`h-full rounded-full ${color} transition-all duration-700`} style={{ width: `${value}%` }} />
    </div>
  );
}

export function Pill({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${className}`}>{children}</span>;
}
