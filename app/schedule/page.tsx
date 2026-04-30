import ProductShell from "@/app/components/ProductShell";
import { Card, PageHeader, Pill } from "@/app/components/ui";
import { DAYS, HOURS, scheduleEvents } from "@/app/lib/demo-data";

const styles = {
  subject: "border-accent-teal/30 bg-accent-teal/15 text-accent-teal",
  support: "border-navy/20 bg-navy/15 text-navy",
  tool: "border-accent-warm/30 bg-accent-warm/15 text-accent-warm",
  break: "border-white bg-white/80 text-navy/50",
};

export default function SchedulePage() {
  return (
    <ProductShell>
      <PageHeader
        eyebrow="Visual Schedule"
        title="Predictable weekly routine"
        description="A low-anxiety visual timetable that shows subjects, adaptive tool blocks, specialist sessions, and planned breaks. All data is demo content for stakeholder walkthroughs."
      />

      <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
        <Card>
          <div className="mb-5 flex flex-wrap gap-3">
            <Pill className="bg-accent-teal/10 text-accent-teal">Subjects</Pill>
            <Pill className="bg-navy/10 text-navy">1:1 support</Pill>
            <Pill className="bg-accent-warm/10 text-accent-warm">Adaptive tools</Pill>
            <Pill className="bg-white text-navy/50">Breaks</Pill>
          </div>
          <div className="overflow-x-auto">
            <div className="min-w-[740px]">
              <div className="mb-1 grid grid-cols-[72px_repeat(5,1fr)] gap-1">
                <div />
                {DAYS.map((day) => <div key={day} className="py-2 text-center text-xs font-bold text-navy/45">{day}</div>)}
              </div>
              {HOURS.map((hour, hourIndex) => (
                <div key={hour} className="grid grid-cols-[72px_repeat(5,1fr)] gap-1">
                  <div className="py-4 pr-3 text-right text-[10px] font-semibold text-navy/30">{hour}</div>
                  {DAYS.map((_, dayIndex) => {
                    const event = scheduleEvents.find((item) => item.day === dayIndex && item.hour === hourIndex);
                    return (
                      <div key={`${dayIndex}-${hourIndex}`} className="relative min-h-16 rounded-xl bg-navy/[0.025]">
                        {event ? (
                          <div className={`absolute inset-0 flex flex-col justify-center rounded-xl border px-3 ${styles[event.type]}`}>
                            <span className="truncate text-xs font-bold">{event.title}</span>
                            <span className="mt-1 truncate text-[10px] opacity-65">{event.location}</span>
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </Card>

        <div className="space-y-5">
          <Card>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-teal">Today&apos;s structure</p>
            <h2 className="mt-2 text-xl font-bold text-navy">Tuesday support plan</h2>
            <ul className="mt-5 space-y-3 text-sm text-navy/60">
              <li className="rounded-xl bg-pale-blue/70 p-3"><strong className="text-navy">9:45</strong> audio preview before reading</li>
              <li className="rounded-xl bg-pale-blue/70 p-3"><strong className="text-navy">10:00</strong> 1:1 reading specialist</li>
              <li className="rounded-xl bg-pale-blue/70 p-3"><strong className="text-navy">11:15</strong> sensory reset + hydration</li>
              <li className="rounded-xl bg-pale-blue/70 p-3"><strong className="text-navy">1:00</strong> science flashcards</li>
            </ul>
          </Card>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-warm">Routine note</p>
            <p className="mt-3 text-sm leading-relaxed text-navy/60">Visual schedules help reduce uncertainty. In a real product, students, parents, and specialists would be able to update this plan together.</p>
          </Card>
        </div>
      </div>
    </ProductShell>
  );
}
