"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { student } from "@/app/lib/demo-data";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" },
  { href: "/courses", label: "Learning Path", icon: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292" },
  { href: "/tools", label: "Adaptive Tools", icon: "M11.42 15.17l-5.658 3.163a1.106 1.106 0 0 1-1.603-1.166l1.082-6.305-4.583-4.468a1.106 1.106 0 0 1 .614-1.889L7.56 3.68l2.82-5.71a1.107 1.107 0 0 1 1.987 0l2.819 5.71 6.286.825a1.106 1.106 0 0 1 .614 1.889l-4.583 4.468 1.082 6.305a1.106 1.106 0 0 1-1.603 1.166L11.42 15.17Z" },
  { href: "/schedule", label: "Visual Schedule", icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25" },
  { href: "/sessions", label: "Specialists", icon: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0" },
  { href: "/progress", label: "Progress", icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125C16.5 3.504 17.004 3 17.625 3h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" },
  { href: "/school", label: "School Portal", icon: "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347M12 3.493a59.903 59.903 0 0 1 10.399 5.84A50.702 50.702 0 0 1 12 13.489 50.717 50.717 0 0 1 1.601 9.334 59.906 59.906 0 0 1 12 3.493Z" },
  { href: "/parents", label: "Parent View", icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75V19.5A1.5 1.5 0 0 0 6 21h12a1.5 1.5 0 0 0 1.5-1.5V9.75" },
];

function Icon({ path }: { path: string }) {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}

export default function ProductShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-pale-blue text-navy md:flex">
      <aside className={`fixed inset-y-0 left-0 z-40 flex w-72 transform flex-col bg-navy transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:sticky md:top-0 md:h-screen md:translate-x-0`}>
        <div className="border-b border-white/10 px-6 py-6">
          <Link href="/" className="font-heading text-2xl tracking-tight text-white">+VANTAGE</Link>
          <p className="mt-1 text-xs text-white/40">Access. Adapt. Advance.</p>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-4 py-6">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  active ? "bg-white/10 text-white" : "text-white/45 hover:bg-white/5 hover:text-white/80"
                }`}
              >
                <Icon path={item.icon} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-white/10 p-4">
          <div className="rounded-2xl bg-white/5 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-teal/30 text-sm font-bold text-white">A</div>
              <div>
                <p className="text-sm font-semibold text-white">{student.name}</p>
                <p className="text-xs text-white/40">{student.profile}</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {sidebarOpen && <button className="fixed inset-0 z-30 bg-black/30 md:hidden" aria-label="Close sidebar" onClick={() => setSidebarOpen(false)} />}

      <main className="min-w-0 flex-1">
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-navy/5 bg-pale-blue/85 px-5 py-4 backdrop-blur-md md:px-8">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="md:hidden" aria-label="Open sidebar">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-navy/35">Demo workspace</p>
              <p className="text-sm font-bold text-navy sm:text-base">Welcome back, {student.name.split(" ")[0]}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden rounded-full bg-accent-warm/15 px-4 py-2 text-xs font-bold text-accent-warm sm:inline-flex">🔥 {student.streak} day streak</span>
            <Link href="/" className="rounded-full border border-navy/10 bg-white/60 px-4 py-2 text-xs font-semibold text-navy/60 transition-colors hover:bg-white hover:text-navy">Home</Link>
          </div>
        </header>
        <div className="mx-auto max-w-7xl px-5 py-8 md:px-8">{children}</div>
      </main>
    </div>
  );
}
