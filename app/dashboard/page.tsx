"use client";

import { useState } from "react";
import Link from "next/link";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const HOURS = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM"];

const scheduleEvents = [
  { day: 0, hour: 0, duration: 1, title: "English", color: "bg-accent-teal/20 text-accent-teal border-accent-teal/30" },
  { day: 0, hour: 3, duration: 1, title: "Maths", color: "bg-accent-warm/20 text-accent-warm border-accent-warm/30" },
  { day: 1, hour: 1, duration: 1, title: "Reading w/ Ms. Rivera", color: "bg-navy/15 text-navy border-navy/20" },
  { day: 1, hour: 4, duration: 1, title: "Science", color: "bg-accent-teal/20 text-accent-teal border-accent-teal/30" },
  { day: 2, hour: 0, duration: 1, title: "Visual Math", color: "bg-accent-warm/20 text-accent-warm border-accent-warm/30" },
  { day: 2, hour: 2, duration: 1, title: "1:1 Session", color: "bg-navy/15 text-navy border-navy/20" },
  { day: 3, hour: 1, duration: 1, title: "English", color: "bg-accent-teal/20 text-accent-teal border-accent-teal/30" },
  { day: 3, hour: 5, duration: 1, title: "History", color: "bg-accent-warm/20 text-accent-warm border-accent-warm/30" },
  { day: 4, hour: 0, duration: 1, title: "Maths", color: "bg-accent-warm/20 text-accent-warm border-accent-warm/30" },
  { day: 4, hour: 3, duration: 1, title: "1:1 Review", color: "bg-navy/15 text-navy border-navy/20" },
];

function ProgressRing({ progress, size = 120, strokeWidth = 10 }: { progress: number; size?: number; strokeWidth?: number }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width={size} height={size} className="block">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        className="text-navy/10"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        className="text-accent-teal progress-ring-circle"
      />
    </svg>
  );
}

export default function Dashboard() {
  const [completedGoals, setCompletedGoals] = useState<Set<number>>(new Set([0]));
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleGoal = (index: number) => {
    setCompletedGoals((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const goals = [
    "Complete reading exercise (20 mins)",
    "Practice visual math — fractions",
    "Review vocabulary flashcards",
    "Journal: What I learned today",
  ];

  const xp = 2340;
  const level = 12;
  const levelProgress = 68;
  const streak = 3;

  return (
    <div className="min-h-screen bg-pale-blue text-navy flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-navy transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 md:flex md:flex-col`}>
        <div className="flex items-center gap-3 px-6 py-6 border-b border-white/10">
          <Link href="/" className="font-heading text-xl text-white tracking-tight">
            +VANTAGE
          </Link>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1">
          {[
            { label: "Dashboard", icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25", active: true },
            { label: "My Schedule", icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5", active: false },
            { label: "Courses", icon: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25", active: false },
            { label: "Tools", icon: "M11.42 15.17l-5.658 3.163a1.106 1.106 0 0 1-1.603-1.166l1.082-6.305-4.583-4.468a1.106 1.106 0 0 1 .614-1.889L7.56 3.68l2.82-5.71a1.107 1.107 0 0 1 1.987 0L15.186 3.68l6.286.825a1.106 1.106 0 0 1 .614 1.889l-4.583 4.468 1.082 6.305a1.106 1.106 0 0 1-1.603 1.166L11.42 15.17Z", active: false },
            { label: "Achievements", icon: "M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .982-3.172M8.25 8.25a2.25 2.25 0 0 0 2.25 2.25h3a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25h-3a2.25 2.25 0 0 0-2.25 2.25v1.5Z", active: false },
            { label: "Sessions", icon: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z", active: false },
          ].map((item) => (
            <button
              key={item.label}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                item.active
                  ? "bg-white/10 text-white"
                  : "text-white/45 hover:bg-white/5 hover:text-white/70"
              }`}
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
              </svg>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="px-4 py-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-9 h-9 rounded-full bg-accent-teal/30 flex items-center justify-center text-sm font-bold text-white">
              A
            </div>
            <div>
              <p className="text-sm font-medium text-white">Alex T.</p>
              <p className="text-xs text-white/40">Student</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Sidebar overlay on mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 min-h-screen">
        {/* Top bar */}
        <header className="sticky top-0 z-20 bg-pale-blue/80 backdrop-blur-md border-b border-navy/5 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden text-navy"
              aria-label="Open sidebar"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div>
              <p className="text-sm text-navy/40">Good morning</p>
              <h1 className="text-xl font-bold text-navy">Welcome back, Alex</h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 rounded-full bg-accent-warm/15 px-4 py-2">
              <span className="text-base">🔥</span>
              <span className="text-sm font-bold text-accent-warm">{streak} day streak</span>
            </div>
            <button className="relative w-10 h-10 rounded-full bg-white/60 border border-navy/10 flex items-center justify-center text-navy/50 hover:bg-white transition-colors">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
              </svg>
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-accent-warm" />
            </button>
          </div>
        </header>

        <div className="p-6 max-w-7xl mx-auto space-y-6">
          {/* Top row: Progress + Next Session + Quick Tools */}
          <div className="grid gap-5 md:grid-cols-3">
            {/* Progress Card */}
            <div className="rounded-2xl bg-white/70 backdrop-blur-sm border border-navy/5 p-6">
              <p className="text-xs font-semibold tracking-wider text-navy/40 uppercase mb-4">Your Progress</p>
              <div className="flex items-center gap-6">
                <div className="relative">
                  <ProgressRing progress={levelProgress} size={100} strokeWidth={8} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-navy">{level}</span>
                    <span className="text-[10px] text-navy/40 font-medium">LEVEL</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-navy">{xp.toLocaleString()} XP</p>
                  <p className="text-xs text-navy/40 mt-1">{100 - levelProgress}% to Level {level + 1}</p>
                  <div className="mt-3 w-32 h-2 rounded-full bg-navy/10 overflow-hidden">
                    <div className="h-full rounded-full bg-accent-teal transition-all duration-700" style={{ width: `${levelProgress}%` }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Next Session Card */}
            <div className="rounded-2xl bg-navy p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/[0.04] -translate-y-1/2 translate-x-1/3" />
              <p className="text-xs font-semibold tracking-wider text-white/35 uppercase mb-3">Next Session</p>
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-accent-teal/20 flex items-center justify-center text-sm font-bold text-accent-teal">
                    MR
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Ms. Rivera</p>
                    <p className="text-xs text-white/45">Reading Specialist</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/50">
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  Today, 2:00 PM — 2:45 PM
                </div>
                <button className="mt-4 w-full rounded-xl bg-white/10 hover:bg-white/15 py-2.5 text-sm font-semibold text-white transition-colors">
                  Join Session
                </button>
              </div>
            </div>

            {/* Quick Tools */}
            <div className="rounded-2xl bg-white/70 backdrop-blur-sm border border-navy/5 p-6">
              <p className="text-xs font-semibold tracking-wider text-navy/40 uppercase mb-4">Quick Tools</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "Text to Speech", icon: "M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z", bg: "bg-accent-teal/10 hover:bg-accent-teal/15 text-accent-teal" },
                  { name: "Speech to Text", icon: "M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z", bg: "bg-navy/8 hover:bg-navy/12 text-navy" },
                  { name: "Visual Math", icon: "M4.745 3A23.933 23.933 0 0 0 3 12c0 3.183.62 6.22 1.745 9M19.5 3c.967 2.78 1.5 5.817 1.5 9s-.533 6.22-1.5 9M8.25 8.885l1.444-.89a.75.75 0 0 1 1.105.402l2.402 7.206a.75.75 0 0 0 1.105.402l1.444-.89", bg: "bg-accent-warm/10 hover:bg-accent-warm/15 text-accent-warm" },
                  { name: "Flashcards", icon: "M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3", bg: "bg-navy/8 hover:bg-navy/12 text-navy" },
                ].map((tool) => (
                  <button
                    key={tool.name}
                    className={`flex flex-col items-center gap-2 rounded-xl ${tool.bg} px-3 py-4 transition-colors`}
                  >
                    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={tool.icon} />
                    </svg>
                    <span className="text-[11px] font-semibold leading-tight text-center">{tool.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Middle row: Daily Goals + Achievements */}
          <div className="grid gap-5 md:grid-cols-2">
            {/* Daily Goals */}
            <div className="rounded-2xl bg-white/70 backdrop-blur-sm border border-navy/5 p-6">
              <div className="flex items-center justify-between mb-5">
                <p className="text-xs font-semibold tracking-wider text-navy/40 uppercase">Today&apos;s Goals</p>
                <span className="text-xs font-bold text-accent-teal bg-accent-teal/10 rounded-full px-3 py-1">
                  {completedGoals.size}/{goals.length}
                </span>
              </div>
              <div className="space-y-3">
                {goals.map((goal, i) => (
                  <button
                    key={i}
                    onClick={() => toggleGoal(i)}
                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-all ${
                      completedGoals.has(i)
                        ? "bg-accent-teal/8 border border-accent-teal/15"
                        : "bg-navy/[0.03] border border-transparent hover:bg-navy/[0.06]"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors shrink-0 ${
                      completedGoals.has(i)
                        ? "border-accent-teal bg-accent-teal"
                        : "border-navy/20"
                    }`}>
                      {completedGoals.has(i) && (
                        <svg width="12" height="12" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      )}
                    </div>
                    <span className={`text-sm ${completedGoals.has(i) ? "text-navy/40 line-through" : "text-navy/70"}`}>
                      {goal}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="rounded-2xl bg-white/70 backdrop-blur-sm border border-navy/5 p-6">
              <p className="text-xs font-semibold tracking-wider text-navy/40 uppercase mb-5">Recent Achievements</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { emoji: "📚", name: "Bookworm", desc: "Read 10 chapters", unlocked: true },
                  { emoji: "🔥", name: "On Fire", desc: "3 day streak", unlocked: true },
                  { emoji: "🧮", name: "Math Whiz", desc: "100% on fractions", unlocked: true },
                  { emoji: "🎯", name: "Goal Setter", desc: "Complete all daily goals", unlocked: false },
                  { emoji: "⭐", name: "Rising Star", desc: "Reach Level 15", unlocked: false },
                  { emoji: "🏆", name: "Champion", desc: "Finish a course", unlocked: false },
                ].map((badge) => (
                  <div
                    key={badge.name}
                    className={`flex flex-col items-center rounded-xl p-4 text-center transition-colors ${
                      badge.unlocked
                        ? "bg-accent-warm/8 border border-accent-warm/15"
                        : "bg-navy/[0.03] border border-navy/5 opacity-40"
                    }`}
                  >
                    <span className="text-2xl mb-2">{badge.emoji}</span>
                    <p className="text-xs font-bold text-navy leading-tight">{badge.name}</p>
                    <p className="text-[10px] text-navy/40 mt-0.5">{badge.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Courses */}
          <div className="rounded-2xl bg-white/70 backdrop-blur-sm border border-navy/5 p-6">
            <div className="flex items-center justify-between mb-5">
              <p className="text-xs font-semibold tracking-wider text-navy/40 uppercase">My Courses</p>
              <button className="text-xs font-semibold text-accent-teal hover:text-accent-teal/80 transition-colors">View All</button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "English Reading", progress: 72, lessons: "18/25", color: "bg-accent-teal" },
                { name: "Visual Mathematics", progress: 45, lessons: "9/20", color: "bg-accent-warm" },
                { name: "Creative Writing", progress: 88, lessons: "22/25", color: "bg-navy" },
                { name: "Science Explorer", progress: 30, lessons: "6/20", color: "bg-accent-teal" },
              ].map((course) => (
                <div key={course.name} className="rounded-xl bg-pale-blue/50 border border-navy/5 p-5 hover:bg-pale-blue transition-colors cursor-pointer">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-bold text-navy">{course.name}</p>
                  </div>
                  <div className="w-full h-2 rounded-full bg-navy/10 overflow-hidden mb-2">
                    <div
                      className={`h-full rounded-full ${course.color} transition-all duration-700`}
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-navy/40">{course.lessons} lessons</span>
                    <span className="text-xs font-bold text-navy/60">{course.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Schedule */}
          <div className="rounded-2xl bg-white/70 backdrop-blur-sm border border-navy/5 p-6">
            <div className="flex items-center justify-between mb-5">
              <p className="text-xs font-semibold tracking-wider text-navy/40 uppercase">Weekly Schedule</p>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-[10px] text-navy/40">
                  <span className="w-2.5 h-2.5 rounded bg-accent-teal/20 border border-accent-teal/30" /> Subjects
                </span>
                <span className="flex items-center gap-1.5 text-[10px] text-navy/40">
                  <span className="w-2.5 h-2.5 rounded bg-navy/15 border border-navy/20" /> 1:1 Sessions
                </span>
              </div>
            </div>
            <div className="overflow-x-auto -mx-2">
              <div className="min-w-[600px] px-2">
                {/* Header */}
                <div className="grid grid-cols-[60px_repeat(5,1fr)] gap-1 mb-1">
                  <div />
                  {DAYS.map((day) => (
                    <div key={day} className="text-center text-xs font-bold text-navy/50 py-2">
                      {day}
                    </div>
                  ))}
                </div>
                {/* Time rows */}
                {HOURS.map((hour, hi) => (
                  <div key={hour} className="grid grid-cols-[60px_repeat(5,1fr)] gap-1">
                    <div className="text-[10px] text-navy/30 font-medium py-2 text-right pr-3">{hour}</div>
                    {DAYS.map((_, di) => {
                      const event = scheduleEvents.find((e) => e.day === di && e.hour === hi);
                      return (
                        <div key={di} className="min-h-[44px] rounded-lg relative">
                          {event ? (
                            <div className={`absolute inset-0 rounded-lg border ${event.color} flex items-center justify-center px-2`}>
                              <span className="text-[11px] font-semibold truncate">{event.title}</span>
                            </div>
                          ) : (
                            <div className="absolute inset-0 rounded-lg bg-navy/[0.02]" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
