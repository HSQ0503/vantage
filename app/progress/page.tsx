import ProductShell from "@/app/components/ProductShell";
import { Card, PageHeader, Pill, ProgressBar, StatCard } from "@/app/components/ui";
import { achievements, courses, parentUpdates, student, toolUsage } from "@/app/lib/demo-data";

export default function ProgressPage() {
  return (
    <ProductShell>
      <PageHeader
        eyebrow="Progress Tracking"
        title="Measurable growth without stigma"
        description="A fake analytics dashboard showing how families, schools, and specialists could track student progress, tool usage, goals, confidence, and renewals."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Weekly completion" value="76%" helper="12 goals complete" />
        <StatCard label="Confidence score" value="8.4/10" helper="+1.2 this month" tone="warm" />
        <StatCard label="Reading accuracy" value="81%" helper="+14% in 30 days" />
        <StatCard label="Focus blocks" value="18" helper="5 more than last week" tone="navy" />
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_360px]">
        <Card>
          <h2 className="text-lg font-bold text-navy">Course progress</h2>
          <div className="mt-5 space-y-5">
            {courses.map((course) => (
              <div key={course.title}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-semibold text-navy/70">{course.title}</span>
                  <span className="text-navy/40">{course.progress}%</span>
                </div>
                <ProgressBar value={course.progress} color={course.color} />
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-lg font-bold text-navy">Achievements</h2>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {achievements.map((achievement) => (
              <div key={achievement.name} className={`rounded-xl border p-4 text-center ${achievement.unlocked ? "border-accent-warm/15 bg-accent-warm/8" : "border-navy/5 bg-navy/[0.03] opacity-45"}`}>
                <span className="text-2xl">{achievement.emoji}</span>
                <p className="mt-2 text-xs font-bold text-navy">{achievement.name}</p>
                <p className="mt-1 text-[10px] text-navy/40">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <Card>
          <h2 className="text-lg font-bold text-navy">Adaptive tool usage</h2>
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
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-bold text-navy">Generated family update</h2>
            <Pill className="bg-accent-teal/10 text-accent-teal">{student.name}</Pill>
          </div>
          <div className="space-y-3">
            {parentUpdates.map((update) => (
              <div key={update} className="rounded-xl bg-pale-blue/70 p-4 text-sm leading-relaxed text-navy/60">{update}</div>
            ))}
          </div>
        </Card>
      </div>
    </ProductShell>
  );
}
