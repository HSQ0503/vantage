"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    const el = ref.current;
    if (el) {
      el.querySelectorAll(".reveal").forEach((child) => observer.observe(child));
    }
    return () => observer.disconnect();
  }, []);
  return ref;
}

function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-8 transition-all duration-700 ease-out [&.revealed]:opacity-100 [&.revealed]:translate-y-0 ${className}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const toolsRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-light-blue text-navy overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-light-blue/80 backdrop-blur-md border-b border-navy/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-heading text-2xl tracking-tight text-navy">
            +VANTAGE
          </Link>
          <div className="hidden items-center gap-7 md:flex">
            <a href="#problem" className="text-sm font-medium text-navy/60 transition-colors hover:text-navy">
              Why Us
            </a>
            <a href="#features" className="text-sm font-medium text-navy/60 transition-colors hover:text-navy">
              Features
            </a>
            <Link href="/tools" className="text-sm font-medium text-navy/60 transition-colors hover:text-navy">
              Tools
            </Link>
            <Link href="/school" className="text-sm font-medium text-navy/60 transition-colors hover:text-navy">
              Schools
            </Link>
            <Link href="/parents" className="text-sm font-medium text-navy/60 transition-colors hover:text-navy">
              Parents
            </Link>
            <Link
              href="/dashboard"
              className="rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-navy-light hover:shadow-lg hover:shadow-navy/20"
            >
              Open Demo
            </Link>
          </div>
          <Link href="/dashboard" className="rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white md:hidden">
            Demo
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-navy/[0.03] animate-float-slow" />
          <div className="absolute top-40 right-[8%] w-96 h-96 rounded-full bg-navy/[0.04] animate-float delay-300" />
          <div className="absolute bottom-32 left-[20%] w-48 h-48 rounded-full bg-navy/[0.03] animate-float delay-500" />
          <div className="absolute top-1/3 right-[25%] w-24 h-24 rounded-full bg-accent-teal/10 animate-float-slow delay-200" />
          <div className="absolute bottom-1/4 right-[12%] w-32 h-32 rounded-full bg-accent-warm/10 animate-float delay-700" />
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Pill badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/60 backdrop-blur-sm px-5 py-2 text-sm font-medium text-navy/70 mb-8">
            <span className="inline-block w-2 h-2 rounded-full bg-accent-teal animate-pulse-ring" />
            Empowering neurodivergent learners
          </div>

          <h1 className="animate-fade-in-up delay-100 font-heading text-[clamp(4rem,10vw,9rem)] leading-[0.9] tracking-tight text-navy">
            +VANTAGE
          </h1>
          <p className="animate-fade-in-up delay-200 mt-5 text-lg font-semibold tracking-[0.3em] text-navy/50 sm:text-xl">
            ACCESS. ADAPT. ADVANCE.
          </p>
          <p className="animate-fade-in-up delay-300 mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-navy/70 sm:text-xl">
            A digital learning platform combining{" "}
            <span className="font-semibold text-navy">adaptive tools</span> with{" "}
            <span className="font-semibold text-navy">specialist professionals</span> — enabling
            neurodivergent students to learn their way and thrive.
          </p>
          <div className="animate-fade-in-up delay-400 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/dashboard"
              className="group relative rounded-full bg-navy px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-navy-light hover:shadow-xl hover:shadow-navy/25 hover:-translate-y-0.5"
            >
              Start Free Trial
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>
            <a
              href="#features"
              className="rounded-full border-2 border-navy/20 bg-white/40 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-navy transition-all hover:border-navy/40 hover:bg-white/60"
            >
              Explore Features
            </a>
          </div>

          {/* Social proof */}
          <div className="animate-fade-in-up delay-500 mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
            <div className="flex -space-x-3">
              {[
                "bg-navy/70",
                "bg-accent-teal/70",
                "bg-navy-light/70",
                "bg-accent-warm/70",
              ].map((bg, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full ${bg} border-2 border-light-blue flex items-center justify-center text-white text-xs font-bold`}
                >
                  {["A", "M", "S", "J"][i]}
                </div>
              ))}
            </div>
            <p className="text-sm text-navy/50">
              <span className="font-semibold text-navy/70">500+</span> families already on the waitlist
            </p>
          </div>
        </div>

        {/* Dashboard preview card */}
        <RevealSection className="relative mt-16 mx-auto max-w-4xl w-full">
          <div className="rounded-2xl bg-white/50 backdrop-blur-sm border border-navy/10 p-3 shadow-2xl shadow-navy/10">
            <div className="rounded-xl bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
                <span className="ml-2 text-xs text-navy/30 font-mono">dashboard.vantage.edu</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 rounded-xl bg-pale-blue p-5">
                  <p className="text-xs font-semibold text-navy/40 uppercase tracking-wider">Welcome back, Alex</p>
                  <p className="mt-1 text-lg font-bold text-navy">Your learning journey continues</p>
                  <div className="mt-4 flex gap-3">
                    <div className="rounded-lg bg-navy/10 px-3 py-2 text-xs font-semibold text-navy">Level 12</div>
                    <div className="rounded-lg bg-accent-teal/15 px-3 py-2 text-xs font-semibold text-accent-teal">3 day streak</div>
                  </div>
                </div>
                <div className="rounded-xl bg-navy p-5 text-white">
                  <p className="text-xs font-medium text-white/50">Next Session</p>
                  <p className="mt-1 text-sm font-bold">Ms. Rivera</p>
                  <p className="mt-0.5 text-xs text-white/60">Reading &mdash; 2:00 PM</p>
                  <div className="mt-3 rounded-lg bg-white/10 px-3 py-1.5 text-center text-xs font-semibold">Join</div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-4 gap-3">
                {["Text to Speech", "Visual Math", "Schedule", "Progress"].map((t) => (
                  <div key={t} className="rounded-lg bg-pale-blue/60 px-3 py-3 text-center text-xs font-semibold text-navy/60">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealSection>

        {/* Scroll indicator */}
        <div className="mt-12 animate-bounce">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-navy/30">
            <path d="M10 3v14M3 10l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* Trusted by strip */}
      <RevealSection>
        <section className="px-6 py-16 border-y border-navy/5">
          <div className="mx-auto max-w-6xl">
            <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-navy/30 mb-8">
              Aligned with global education standards
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-navy/20">
              {["UN SDG 4", "Quality Education", "Inclusive Learning", "Digital Equity", "EdTech Innovation"].map((item) => (
                <span key={item} className="text-sm font-bold tracking-wide whitespace-nowrap">{item}</span>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Problem Section */}
      <section id="problem" className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <RevealSection>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-teal mb-4">The Challenge</p>
            <h2 className="font-heading text-5xl tracking-tight text-navy sm:text-6xl md:text-7xl">
              THE PROBLEM
            </h2>
          </RevealSection>

          <div className="mt-14 grid gap-14 md:grid-cols-2 items-center">
            <RevealSection>
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-accent-teal/40 to-navy/10" />
                <div className="pl-6">
                  <div className="mb-8">
                    <span className="font-heading text-7xl text-navy sm:text-8xl">20%</span>
                    <p className="mt-2 text-lg text-navy/70 leading-relaxed">
                      of the world&apos;s population identifies as neurodivergent — yet schools
                      still operate on a single, homogenised system.
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed text-navy/60">
                    Traditional classrooms are centred on{" "}
                    <span className="font-semibold text-navy">speed</span>,{" "}
                    <span className="font-semibold text-navy">standardised knowledge</span>, and{" "}
                    <span className="font-semibold text-navy">constant attention</span>.
                    Those who learn differently are left at a disadvantage.
                  </p>
                </div>
              </div>
            </RevealSection>

            <RevealSection>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Lack of Inclusive Education", icon: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" },
                  { label: "Late Identification", icon: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" },
                  { label: "Social Exclusion", icon: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" },
                  { label: "Limited Access to Support", icon: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" },
                ].map((problem, i) => (
                  <div
                    key={problem.label}
                    className="group relative rounded-2xl bg-navy p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/20"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-white/50 mb-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d={problem.icon} />
                    </svg>
                    <p className="text-sm font-bold text-white leading-snug">{problem.label}</p>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>

          <RevealSection>
            <div className="mt-16">
              <p className="text-sm font-semibold text-navy/50 mb-4">Conditions We Support</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Dyslexia", desc: "Reading & writing" },
                  { name: "Dyspraxia", desc: "Motor skills" },
                  { name: "ADHD", desc: "Focus & attention" },
                  { name: "Autism", desc: "Social & sensory" },
                  { name: "Dyscalculia", desc: "Numbers & math" },
                ].map((c) => (
                  <div
                    key={c.name}
                    className="group rounded-2xl border border-navy/10 bg-white/50 backdrop-blur-sm px-5 py-3 transition-all hover:bg-white/80 hover:border-navy/20 hover:shadow-md hover:shadow-navy/5"
                  >
                    <p className="text-sm font-bold text-navy">{c.name}</p>
                    <p className="text-xs text-navy/40">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Features / Tools Section */}
      <section id="features" className="px-6 py-28" ref={toolsRef}>
        <div className="mx-auto max-w-6xl">
          <RevealSection>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-teal mb-4">Platform Features</p>
            <h2 className="font-heading text-5xl tracking-tight text-navy sm:text-6xl md:text-7xl">
              OUR TOOLS
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/60">
              +VANTAGE is not just tools — it&apos;s{" "}
              <span className="font-bold text-navy">tools plus expert support</span>,
              designed specifically for neurodivergent learners.
            </p>
          </RevealSection>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "1:1 Expert Classes",
                description: "Online or in-person sessions with specialised learning professionals who understand neurodivergent needs.",
                icon: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z",
                color: "from-accent-teal/20 to-accent-teal/5",
                iconBg: "bg-accent-teal/15 text-accent-teal",
              },
              {
                title: "Text to Speech",
                description: "Content read aloud to support students with dyslexia and reading difficulties.",
                icon: "M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z",
                color: "from-navy/10 to-navy/5",
                iconBg: "bg-navy/10 text-navy",
              },
              {
                title: "Speech to Text",
                description: "Voice-based input so students can express ideas without the barrier of writing.",
                icon: "M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z",
                color: "from-accent-warm/15 to-accent-warm/5",
                iconBg: "bg-accent-warm/15 text-accent-warm",
              },
              {
                title: "Visual Schedules",
                description: "Structured visual timetables that reduce anxiety and help students plan their learning.",
                icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5",
                color: "from-navy/10 to-navy/5",
                iconBg: "bg-navy/10 text-navy",
              },
              {
                title: "Gamified Progress",
                description: "Track achievements and milestones with engaging, motivating progress systems.",
                icon: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z",
                color: "from-accent-teal/15 to-accent-teal/5",
                iconBg: "bg-accent-teal/15 text-accent-teal",
              },
              {
                title: "Visual Math",
                description: "Interactive visual representations that make abstract mathematical concepts tangible.",
                icon: "M4.745 3A23.933 23.933 0 0 0 3 12c0 3.183.62 6.22 1.745 9M19.5 3c.967 2.78 1.5 5.817 1.5 9s-.533 6.22-1.5 9M8.25 8.885l1.444-.89a.75.75 0 0 1 1.105.402l2.402 7.206a.75.75 0 0 0 1.105.402l1.444-.89",
                color: "from-accent-warm/15 to-accent-warm/5",
                iconBg: "bg-accent-warm/15 text-accent-warm",
              },
            ].map((tool, i) => (
              <RevealSection key={tool.title} className={`delay-${(i + 1) * 100}`}>
                <div className="group h-full rounded-2xl bg-white/60 backdrop-blur-sm border border-navy/5 p-7 transition-all duration-300 hover:bg-white/90 hover:shadow-xl hover:shadow-navy/8 hover:-translate-y-1">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${tool.iconBg}`}>
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={tool.icon} />
                    </svg>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy">{tool.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/55">{tool.description}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why +VANTAGE */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <RevealSection>
            <div className="relative rounded-3xl bg-navy p-10 sm:p-14 md:p-20 overflow-hidden">
              {/* Background decorative */}
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/[0.03] -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/[0.02] translate-y-1/2 -translate-x-1/4" />

              <div className="relative">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-teal mb-4">Our Difference</p>
                <h2 className="font-heading text-4xl tracking-tight text-white sm:text-5xl md:text-6xl">
                  WHY +VANTAGE?
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
                  Other platforms provide tools. <span className="font-bold text-white">+VANTAGE provides tools and expert support</span> — designed specifically for neurodivergent learners and integrated into school learning ecosystems.
                </p>

                <div className="mt-12 grid gap-8 sm:grid-cols-3">
                  {[
                    { stat: "20%", label: "of the global population is neurodivergent" },
                    { stat: "1:1", label: "personalised sessions with specialists" },
                    { stat: "5+", label: "conditions supported with adaptive tools" },
                  ].map((item) => (
                    <div key={item.stat} className="text-center sm:text-left">
                      <p className="font-heading text-5xl text-white md:text-6xl">{item.stat}</p>
                      <p className="mt-2 text-sm text-white/45 leading-relaxed">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <RevealSection>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-teal mb-4">What We Stand For</p>
              <h2 className="font-heading text-5xl tracking-tight text-navy sm:text-6xl md:text-7xl">
                OUR VALUES
              </h2>
            </div>
          </RevealSection>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "ACCEPTANCE",
                description: "We recognise neurodivergence as a natural and valuable part of human beings — differences acknowledged without stigma.",
                icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z",
              },
              {
                title: "EQUITY",
                description: "We believe equity in education means adapting to individual needs — developing new tools and technology for everyone's benefit.",
                icon: "M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z",
              },
              {
                title: "ADAPTABILITY",
                description: "We commit to creating flexible ways of learning that adjust to our students' needs — regardless of any differences.",
                icon: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z",
              },
            ].map((value, i) => (
              <RevealSection key={value.title} className={`delay-${(i + 1) * 100}`}>
                <div className="h-full rounded-2xl bg-navy p-8 md:p-10 transition-all duration-300 hover:shadow-xl hover:shadow-navy/20">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-5">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-light-blue">
                      <path strokeLinecap="round" strokeLinejoin="round" d={value.icon} />
                    </svg>
                  </div>
                  <h3 className="font-heading text-2xl text-light-blue sm:text-3xl">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/60">
                    {value.description}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          <RevealSection>
            <div className="h-full rounded-2xl bg-navy p-10 md:p-14 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/[0.03] -translate-y-1/2 translate-x-1/2" />
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-teal mb-3">Our Purpose</p>
              <h3 className="font-heading text-4xl text-light-blue sm:text-5xl">MISSION</h3>
              <p className="mt-6 text-base leading-relaxed text-white/65">
                Empower neurodivergent students by fostering their education through the
                provision of digital tools and qualified teachers that support them,
                enabling equal access to education.
              </p>
            </div>
          </RevealSection>
          <RevealSection className="delay-200">
            <div className="h-full rounded-2xl bg-navy p-10 md:p-14 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-white/[0.03] translate-y-1/2 -translate-x-1/2" />
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-warm mb-3">Our Future</p>
              <h3 className="font-heading text-4xl text-light-blue sm:text-5xl">VISION</h3>
              <p className="mt-6 text-base leading-relaxed text-white/65">
                Generate a global impact on education by promoting the recognition of
                neurodivergence as a strength, where no student is left behind, but is
                supported to thrive equally.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <RevealSection>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-teal mb-4">Plans</p>
              <h2 className="font-heading text-5xl tracking-tight text-navy sm:text-6xl md:text-7xl">
                WHO IS IT FOR?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-navy/55">
                Whether you&apos;re a parent looking for support or a school seeking inclusive
                solutions, +VANTAGE adapts to you.
              </p>
            </div>
          </RevealSection>

          <div className="grid gap-6 md:grid-cols-2">
            <RevealSection>
              <div className="h-full rounded-2xl bg-white/60 backdrop-blur-sm border border-navy/10 p-9 transition-all hover:shadow-xl hover:shadow-navy/8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-navy/10 mb-5">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-navy">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </div>
                <p className="text-xs font-semibold tracking-widest text-navy/40 uppercase">For Families</p>
                <h3 className="mt-2 text-2xl font-bold text-navy">Parents & Guardians</h3>
                <p className="mt-3 text-sm text-navy/55 leading-relaxed">
                  Affordable monthly or annual subscription for parents seeking
                  effective academic support beyond traditional accommodations.
                </p>
                <ul className="mt-7 space-y-3">
                  {[
                    "Adaptive learning tools tailored to your child",
                    "1:1 sessions with specialised professionals",
                    "Gamified progress tracking",
                    "Visual schedules and study planning",
                    "Freemium access to get started",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-navy/70">
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="mt-0.5 shrink-0">
                        <circle cx="12" cy="12" r="10" className="stroke-accent-teal/30" strokeWidth="1.5" />
                        <path d="M8 12.5l2.5 2.5 5-5" className="stroke-accent-teal" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/dashboard"
                  className="mt-8 block rounded-full bg-navy py-3.5 text-center font-semibold text-white transition-all hover:bg-navy-light hover:shadow-lg hover:shadow-navy/20"
                >
                  Start Free Trial
                </Link>
              </div>
            </RevealSection>

            <RevealSection className="delay-200">
              <div className="h-full rounded-2xl bg-navy p-9 relative overflow-hidden transition-all hover:shadow-xl hover:shadow-navy/30">
                <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-xl bg-accent-teal text-xs font-bold text-white">
                  Popular
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/[0.03] -translate-y-1/2 translate-x-1/3" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-5">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <p className="text-xs font-semibold tracking-widest text-white/35 uppercase">For Schools</p>
                  <h3 className="mt-2 text-2xl font-bold text-white">Schools & Institutions</h3>
                  <p className="mt-3 text-sm text-white/50 leading-relaxed">
                    Affordable annual licenses with tools that present results
                    on academic experience and specialist support for enhancing inclusion.
                  </p>
                  <ul className="mt-7 space-y-3">
                    {[
                      "School-wide platform access",
                      "Specialist support and oversight",
                      "Evidence-based progress reporting",
                      "Integration with school ecosystems",
                      "Discounted institutional pricing",
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-white/65">
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="mt-0.5 shrink-0">
                          <circle cx="12" cy="12" r="10" className="stroke-white/20" strokeWidth="1.5" />
                          <path d="M8 12.5l2.5 2.5 5-5" className="stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#cta"
                    className="mt-8 block rounded-full bg-white py-3.5 text-center font-semibold text-navy transition-all hover:bg-pale-blue hover:shadow-lg"
                  >
                    Request a Demo
                  </a>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <RevealSection>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent-teal mb-4">Testimonials</p>
              <h2 className="font-heading text-5xl tracking-tight text-navy sm:text-6xl">
                WHAT FAMILIES SAY
              </h2>
            </div>
          </RevealSection>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                quote: "My son finally feels understood. The specialist sessions have transformed his confidence in reading.",
                name: "Sarah M.",
                role: "Parent of a 12-year-old with dyslexia",
              },
              {
                quote: "The visual schedule feature alone has reduced our morning anxiety by half. This platform genuinely gets neurodivergent kids.",
                name: "David K.",
                role: "Parent of a 14-year-old with ADHD",
              },
              {
                quote: "As a SENCO, I've seen real improvement in engagement. The data reporting helps us track what actually works.",
                name: "Dr. Amara L.",
                role: "Special Educational Needs Coordinator",
              },
            ].map((t, i) => (
              <RevealSection key={t.name} className={`delay-${(i + 1) * 100}`}>
                <div className="h-full rounded-2xl bg-white/60 backdrop-blur-sm border border-navy/5 p-7">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-accent-warm">
                        <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-navy/70 italic">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-navy/10 flex items-center justify-center text-xs font-bold text-navy">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">{t.name}</p>
                      <p className="text-xs text-navy/40">{t.role}</p>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <RevealSection>
            <div className="relative rounded-3xl bg-navy p-10 sm:p-14 md:p-20 text-center overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-accent-teal/[0.05]" />
                <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-accent-warm/[0.05]" />
              </div>
              <div className="relative">
                <h2 className="font-heading text-4xl tracking-tight text-white sm:text-5xl md:text-6xl">
                  EVERY STUDENT DESERVES<br />TO THRIVE
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-base text-white/55 leading-relaxed sm:text-lg">
                  Join +VANTAGE today and give neurodivergent learners the tools and expert
                  support they need to reach their full potential.
                </p>
                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <Link
                    href="/dashboard"
                    className="group rounded-full bg-white px-10 py-4 text-lg font-semibold text-navy transition-all hover:bg-pale-blue hover:shadow-xl"
                  >
                    Get Started Free
                    <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
                  </Link>
                  <a
                    href="#"
                    className="rounded-full border-2 border-white/20 px-10 py-4 text-lg font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-navy/10 px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div>
              <p className="font-heading text-2xl tracking-tight text-navy">+VANTAGE</p>
              <p className="mt-1 text-sm text-navy/40">Access. Adapt. Advance.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <a href="#problem" className="text-sm text-navy/50 transition-colors hover:text-navy">About</a>
              <a href="#features" className="text-sm text-navy/50 transition-colors hover:text-navy">Features</a>
              <a href="#pricing" className="text-sm text-navy/50 transition-colors hover:text-navy">For Schools</a>
              <a href="#cta" className="text-sm text-navy/50 transition-colors hover:text-navy">Contact</a>
              <Link href="/dashboard" className="text-sm text-navy/50 transition-colors hover:text-navy">Dashboard</Link>
            </div>
          </div>
          <div className="mt-10 border-t border-navy/10 pt-8 text-center">
            <p className="text-xs text-navy/30">
              &copy; 2026 +VANTAGE. All rights reserved. Empowering neurodivergent learners worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
