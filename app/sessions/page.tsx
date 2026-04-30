import ProductShell from "@/app/components/ProductShell";
import { Card, DarkCard, PageHeader, Pill } from "@/app/components/ui";
import { specialists } from "@/app/lib/demo-data";

export default function SessionsPage() {
  return (
    <ProductShell>
      <PageHeader
        eyebrow="Specialist Network"
        title="1:1 expert support"
        description="A demo marketplace and session hub for qualified neurodivergence specialists. The business plan calls for expert oversight alongside adaptive tools; this page shows that experience with fake professionals and notes."
      />

      <div className="grid gap-5 lg:grid-cols-[1fr_360px]">
        <div className="grid gap-5 md:grid-cols-2">
          {specialists.map((specialist) => (
            <Card key={specialist.name}>
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy text-lg font-bold text-white">{specialist.initials}</div>
                <div>
                  <h2 className="text-lg font-bold text-navy">{specialist.name}</h2>
                  <p className="text-sm text-navy/45">{specialist.role}</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <Pill className="bg-accent-teal/10 text-accent-teal">★ {specialist.rating}</Pill>
                <Pill className="bg-navy/8 text-navy/55">{specialist.nextSlot}</Pill>
              </div>
              <p className="mt-4 text-sm font-semibold text-navy/70">{specialist.specialty}</p>
              <p className="mt-3 text-sm leading-relaxed text-navy/55">{specialist.notes}</p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <button className="rounded-xl bg-navy px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-light">Book demo</button>
                <button className="rounded-xl border border-navy/10 bg-white/60 px-4 py-3 text-sm font-semibold text-navy/60 hover:bg-white">Message</button>
              </div>
            </Card>
          ))}
        </div>

        <div className="space-y-5">
          <DarkCard>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-teal">Live session mock</p>
            <h2 className="mt-2 text-2xl font-bold text-white">Reading confidence check-in</h2>
            <div className="mt-5 aspect-video rounded-2xl bg-white/10 p-4">
              <div className="flex h-full items-center justify-center rounded-xl border border-white/10 bg-navy-dark/35 text-center">
                <div>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-teal/20 text-xl font-bold text-accent-teal">MR</div>
                  <p className="mt-3 text-sm text-white/60">Video placeholder</p>
                </div>
              </div>
            </div>
            <button className="mt-5 w-full rounded-xl bg-white py-3 text-sm font-semibold text-navy hover:bg-pale-blue">Join session</button>
          </DarkCard>

          <Card>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-warm">Session agenda</p>
            <ol className="mt-4 space-y-3 text-sm text-navy/60">
              <li className="rounded-xl bg-pale-blue/70 p-3">1. Mood and sensory check</li>
              <li className="rounded-xl bg-pale-blue/70 p-3">2. Audio-supported reading passage</li>
              <li className="rounded-xl bg-pale-blue/70 p-3">3. Confidence rating and strategy review</li>
              <li className="rounded-xl bg-pale-blue/70 p-3">4. Parent/school note generated</li>
            </ol>
          </Card>
        </div>
      </div>
    </ProductShell>
  );
}
