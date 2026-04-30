import Link from "next/link";
import ProductShell from "@/app/components/ProductShell";
import { Card, DarkCard, PageHeader, Pill, ProgressBar } from "@/app/components/ui";
import { courses, learnerNeeds } from "@/app/lib/demo-data";

const modules = [
  "Audio preview",
  "Guided practice",
  "Independent attempt",
  "Specialist feedback",
  "Parent/school summary",
];

export default function CoursesPage() {
  return (
    <ProductShell>
      <PageHeader
        eyebrow="Personalized Learning"
        title="Adaptive course pathways"
        description="A demo of personalized learning paths that adjust to pace, cognitive profile, and specialist feedback. The content is static but models the intended product flow."
        action={<Link href="/tools" className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-light">Use support tools</Link>}
      />

      <div className="grid gap-5 lg:grid-cols-[1fr_340px]">
        <div className="grid gap-5 md:grid-cols-2">
          {courses.map((course) => (
            <Card key={course.title}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent-teal">{course.lessons} lessons</p>
                  <h2 className="mt-2 text-xl font-bold text-navy">{course.title}</h2>
                </div>
                <Pill className="bg-navy/8 text-navy/55">{course.progress}%</Pill>
              </div>
              <p className="mt-3 text-sm font-semibold text-navy/60">{course.focus}</p>
              <p className="mt-3 text-sm leading-relaxed text-navy/50">Next: {course.next}</p>
              <div className="mt-5"><ProgressBar value={course.progress} color={course.color} /></div>
              <div className="mt-5 rounded-xl bg-pale-blue/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-navy/35">Adaptive support</p>
                <p className="mt-1 text-sm text-navy/65">{course.support}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="space-y-5">
          <DarkCard>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-warm">Recommended path</p>
            <h2 className="mt-2 text-2xl font-bold text-white">Reading → Visual Math → Reflection</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/55">The demo sequencing alternates high-focus tasks with visual and reflective work to reduce fatigue.</p>
          </DarkCard>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-teal">Lesson model</p>
            <div className="mt-4 space-y-3">
              {modules.map((module, index) => (
                <div key={module} className="flex items-center gap-3 rounded-xl bg-pale-blue/70 p-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">{index + 1}</span>
                  <span className="text-sm font-semibold text-navy/65">{module}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-warm">Learner settings</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {learnerNeeds.map((need) => <Pill key={need} className="bg-navy/8 text-navy/55">{need}</Pill>)}
            </div>
          </Card>
        </div>
      </div>
    </ProductShell>
  );
}
