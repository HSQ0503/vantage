import ProductShell from "@/app/components/ProductShell";
import { Card, DarkCard, PageHeader, Pill, ProgressBar } from "@/app/components/ui";
import { schoolMetrics, toolUsage } from "@/app/lib/demo-data";

const cohorts = [
  { name: "Year 6 transition", students: 28, inclusion: 88 },
  { name: "Year 7 literacy", students: 42, inclusion: 81 },
  { name: "Year 8 executive function", students: 36, inclusion: 74 },
  { name: "Year 9 numeracy", students: 31, inclusion: 79 },
];

export default function SchoolPage() {
  return (
    <ProductShell>
      <PageHeader
        eyebrow="School Portal"
        title="Institutional inclusion dashboard"
        description="A demo B2B dashboard for schools and educational institutions: annual license analytics, adoption, specialist capacity, cohort outcomes, and tool impact."
      />

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {schoolMetrics.map((metric) => (
          <Card key={metric.label}>
            <p className="text-xs font-semibold uppercase tracking-wider text-navy/35">{metric.label}</p>
            <p className="mt-3 text-3xl font-bold text-navy">{metric.value}</p>
            <div className="mt-4 flex items-center justify-between gap-3">
              <Pill className="bg-accent-teal/10 text-accent-teal">{metric.change}</Pill>
              <span className="text-right text-[11px] text-navy/35">{metric.detail}</span>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <h2 className="text-lg font-bold text-navy">Cohort inclusion outcomes</h2>
          <div className="mt-5 space-y-5">
            {cohorts.map((cohort) => (
              <div key={cohort.name}>
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-navy">{cohort.name}</p>
                    <p className="text-xs text-navy/40">{cohort.students} students enrolled</p>
                  </div>
                  <span className="text-sm font-bold text-navy/60">{cohort.inclusion}%</span>
                </div>
                <ProgressBar value={cohort.inclusion} color="bg-accent-teal" />
              </div>
            ))}
          </div>
        </Card>

        <DarkCard>
          <p className="text-xs font-semibold uppercase tracking-wider text-accent-warm">License snapshot</p>
          <h2 className="mt-2 text-2xl font-bold text-white">Greenfield Academy</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/55">Annual institutional license with specialist oversight, family updates, progress reporting, and school-wide adaptive tool access.</p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-white/10 p-4"><p className="text-2xl font-bold text-white">6</p><p className="text-xs text-white/40">Active specialists</p></div>
            <div className="rounded-2xl bg-white/10 p-4"><p className="text-2xl font-bold text-white">93%</p><p className="text-xs text-white/40">Staff onboarding</p></div>
          </div>
        </DarkCard>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <Card>
          <h2 className="text-lg font-bold text-navy">Tool adoption by category</h2>
          <div className="mt-5 space-y-4">
            {toolUsage.map((tool) => (
              <div key={tool.name}>
                <div className="mb-2 flex justify-between text-xs"><span className="font-semibold text-navy/60">{tool.name}</span><span className="text-navy/35">{tool.value}%</span></div>
                <ProgressBar value={tool.value} color={tool.color} />
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-lg font-bold text-navy">Recommended interventions</h2>
          <div className="mt-5 space-y-3">
            {["Add two literacy specialist blocks for Year 7 before exams.", "Increase parent reporting cadence for high-support learners.", "Deploy visual schedule onboarding to all Year 6 transition students.", "Run teacher workshop on low-distraction assignment design."].map((item) => (
              <div key={item} className="rounded-xl bg-pale-blue/70 p-4 text-sm text-navy/60">{item}</div>
            ))}
          </div>
        </Card>
      </div>
    </ProductShell>
  );
}
