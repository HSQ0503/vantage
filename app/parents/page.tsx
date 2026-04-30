import Link from "next/link";
import ProductShell from "@/app/components/ProductShell";
import { Card, DarkCard, PageHeader, Pill, ProgressBar } from "@/app/components/ui";
import { parentUpdates, specialists, student } from "@/app/lib/demo-data";

export default function ParentsPage() {
  return (
    <ProductShell>
      <PageHeader
        eyebrow="Parent View"
        title="Family confidence dashboard"
        description="A demo parent/guardian experience focused on trust, convenience, affordability, specialist visibility, and clear progress summaries."
        action={<Link href="/sessions" className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-light">Contact specialist</Link>}
      />

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <DarkCard>
          <p className="text-xs font-semibold uppercase tracking-wider text-accent-teal">Family plan</p>
          <h2 className="mt-2 text-3xl font-bold text-white">$60/month</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/55">Demo subscription based on the business plan forecast. Includes adaptive tools, learning dashboard, specialist sessions, and family updates.</p>
          <div className="mt-6 space-y-3 text-sm text-white/70">
            {[
              "Adaptive learning tools",
              "1:1 specialist session credits",
              "Parent progress summaries",
              "Visual schedules and home routines",
              "School collaboration reports",
            ].map((feature) => <div key={feature} className="rounded-xl bg-white/10 p-3">✓ {feature}</div>)}
          </div>
        </DarkCard>

        <Card>
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-warm">Student snapshot</p>
              <h2 className="mt-1 text-2xl font-bold text-navy">{student.name}</h2>
            </div>
            <Pill className="bg-accent-teal/10 text-accent-teal">{student.profile}</Pill>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-pale-blue/70 p-4"><p className="text-2xl font-bold text-navy">{student.weeklyGoalProgress}%</p><p className="text-xs text-navy/40">Weekly goals</p></div>
            <div className="rounded-2xl bg-pale-blue/70 p-4"><p className="text-2xl font-bold text-navy">{student.streak}</p><p className="text-xs text-navy/40">Day streak</p></div>
            <div className="rounded-2xl bg-pale-blue/70 p-4"><p className="text-2xl font-bold text-navy">{student.level}</p><p className="text-xs text-navy/40">Current level</p></div>
          </div>
          <div className="mt-6"><ProgressBar value={student.weeklyGoalProgress} color="bg-accent-teal" /></div>
          <p className="mt-4 text-sm leading-relaxed text-navy/55">Alex is most successful with audio preview, visual instructions, and a short reflection after each focus block.</p>
        </Card>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <Card>
          <h2 className="text-lg font-bold text-navy">Latest family updates</h2>
          <div className="mt-5 space-y-3">
            {parentUpdates.map((update) => <div key={update} className="rounded-xl bg-pale-blue/70 p-4 text-sm leading-relaxed text-navy/60">{update}</div>)}
          </div>
        </Card>

        <Card>
          <h2 className="text-lg font-bold text-navy">Specialist visibility</h2>
          <div className="mt-5 space-y-4">
            {specialists.map((specialist) => (
              <div key={specialist.name} className="flex items-start gap-4 rounded-xl bg-pale-blue/70 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy text-xs font-bold text-white">{specialist.initials}</div>
                <div>
                  <p className="text-sm font-bold text-navy">{specialist.name}</p>
                  <p className="text-xs text-navy/40">{specialist.role} · {specialist.nextSlot}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </ProductShell>
  );
}
