"use client";

import { useState } from "react";
import Link from "next/link";
import ProductShell from "@/app/components/ProductShell";
import { Card, DarkCard, PageHeader, Pill, ProgressBar, StatCard } from "@/app/components/ui";
import { achievements, courses, goals, learnerNeeds, specialists, student, toolUsage } from "@/app/lib/demo-data";

function ProgressRing({ progress, size = 116, strokeWidth = 10 }: { progress: number; size?: number; strokeWidth?: number }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width={size} height={size} className="block">
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="currentColor" strokeWidth={strokeWidth} className="text-navy/10" />
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset} className="text-accent-teal progress-ring-circle" />
    </svg>
  );
}

export default function Dashboard() {
  const [completedGoals, setCompletedGoals] = useState<Set<number>>(new Set([0, 2]));

  const toggleGoal = (index: number) => {
    setCompletedGoals((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <ProductShell>
      <PageHeader
        eyebrow="Student Dashboard"
        title="Personalized learning command center"
        description="A fake-data demo of the +VANTAGE student experience: adaptive tools, specialist support, learning goals, course progress, and visual planning in one low-distraction workspace."
        action={<Link href="/tools" className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-navy-light">Open Tools</Link>}
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Weekly goal" value={`${student.weeklyGoalProgress}%`} helper="On track" />
        <StatCard label="Current level" value={`${student.level}`} helper={`${student.xp.toLocaleString()} XP`} tone="navy" />
        <StatCard label="Focus state" value={student.mood} helper="2 blocks complete" tone="warm" />
        <StatCard label="Next session" value="2:00 PM" helper="Ms. Rivera today" />
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="relative shrink-0">
              <ProgressRing progress={student.levelProgress} />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-navy">{student.level}</span>
                <span className="text-[10px] font-semibold text-navy/35">LEVEL</span>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-navy/35">Adaptive plan</p>
              <h2 className="mt-2 text-2xl font-bold text-navy">{student.profile}</h2>
              <p className="mt-3 text-sm leading-relaxed text-navy/55">The demo plan combines audio-first reading, visual math scaffolds, executive-function supports, and weekly specialist review.</p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {learnerNeeds.map((need) => <Pill key={need} className="bg-navy/8 text-navy/65">{need}</Pill>)}
              </div>
            </div>
          </div>
        </Card>

        <DarkCard>
          <p className="text-xs font-semibold uppercase tracking-wider text-white/35">Next specialist session</p>
          <div className="mt-5 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-teal/20 text-lg font-bold text-accent-teal">{specialists[0].initials}</div>
            <div>
              <h2 className="text-xl font-bold text-white">{specialists[0].name}</h2>
              <p className="text-sm text-white/45">{specialists[0].role}</p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/55">{specialists[0].notes}</p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <Link href="/sessions" className="rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold text-navy transition-colors hover:bg-pale-blue">Join demo</Link>
            <Link href="/schedule" className="rounded-xl bg-white/10 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/15">View schedule</Link>
          </div>
        </DarkCard>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <Card>
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-bold text-navy">Today&apos;s goals</h2>
            <Pill className="bg-accent-teal/10 text-accent-teal">{completedGoals.size}/{goals.length} complete</Pill>
          </div>
          <div className="space-y-3">
            {goals.map((goal, index) => (
              <button key={goal} onClick={() => toggleGoal(index)} className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all ${completedGoals.has(index) ? "border-accent-teal/20 bg-accent-teal/8" : "border-transparent bg-navy/[0.03] hover:bg-navy/[0.06]"}`}>
                <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${completedGoals.has(index) ? "border-accent-teal bg-accent-teal" : "border-navy/20"}`}>{completedGoals.has(index) ? <span className="text-xs text-white">✓</span> : null}</span>
                <span className={`text-sm ${completedGoals.has(index) ? "text-navy/40 line-through" : "text-navy/70"}`}>{goal}</span>
              </button>
            ))}
          </div>
        </Card>

        <Card>
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-bold text-navy">Recent achievements</h2>
            <Link href="/progress" className="text-xs font-semibold text-accent-teal hover:text-accent-teal/80">See all</Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {achievements.map((badge) => (
              <div key={badge.name} className={`rounded-xl border p-4 text-center ${badge.unlocked ? "border-accent-warm/15 bg-accent-warm/8" : "border-navy/5 bg-navy/[0.03] opacity-45"}`}>
                <span className="text-2xl">{badge.emoji}</span>
                <p className="mt-2 text-xs font-bold text-navy">{badge.name}</p>
                <p className="mt-1 text-[10px] text-navy/40">{badge.desc}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-bold text-navy">Learning path</h2>
            <Link href="/courses" className="text-xs font-semibold text-accent-teal hover:text-accent-teal/80">Open courses</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {courses.map((course) => (
              <div key={course.title} className="rounded-xl border border-navy/5 bg-pale-blue/50 p-5">
                <p className="text-sm font-bold text-navy">{course.title}</p>
                <p className="mt-1 text-xs text-navy/45">{course.focus}</p>
                <div className="mt-4"><ProgressBar value={course.progress} color={course.color} /></div>
                <div className="mt-2 flex items-center justify-between text-xs text-navy/40"><span>{course.lessons} lessons</span><span>{course.progress}%</span></div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="mb-5 text-lg font-bold text-navy">Tool usage this week</h2>
          <div className="space-y-4">
            {toolUsage.map((tool) => (
              <div key={tool.name}>
                <div className="mb-2 flex justify-between text-xs"><span className="font-semibold text-navy/60">{tool.name}</span><span className="text-navy/35">{tool.value}%</span></div>
                <ProgressBar value={tool.value} color={tool.color} />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </ProductShell>
  );
}
