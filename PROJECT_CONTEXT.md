# Project Context

_Last analyzed: 2026-04-30_

## Overview
+VANTAGE is a Next.js App Router demo web app for a neurodivergent learning platform. It contains a polished marketing landing page plus a full fake-data product template: student dashboard, adaptive tools, learning paths, visual schedule, specialist sessions, progress analytics, school portal, and parent view. The app is frontend-only: there are no user accounts, API routes, persistence, authentication, database schema, or real third-party integrations implemented yet. The top-level `VANTAGEINFO.txt` business plan provides product/market context: +VANTAGE targets neurodivergent students aged 10–18, parents/families as the primary B2C market, and schools/institutions as a secondary B2B market.

## Tech Stack
- Runtime/language: Node.js, TypeScript, React/TSX
- Frameworks: Next.js 16 App Router, React 19
- Package manager: npm (`package-lock.json` is present)
- Key libraries: Tailwind CSS v4 via `@tailwindcss/postcss`, `next/font/google` with Geist, Geist Mono, and Anton
- Database/storage: none currently
- External services: Google font delivery through Next font optimization; no application service integrations currently

## How to Run
```bash
# install
npm install

# development
npm run dev

# build
npm run build

# production start after build
npm run start

# lint
npm run lint

# typecheck (no package script yet)
npx tsc --noEmit
```

## Project Structure
```text
app/ - Next.js App Router pages and global styles
app/layout.tsx - root HTML layout, metadata, font setup, global CSS import
app/page.tsx - landing/marketing page for +VANTAGE
app/dashboard/page.tsx - interactive fake-data student dashboard prototype
app/tools/page.tsx - adaptive tools demos: TTS, simulated STT, visual math, flashcards
app/courses/page.tsx - personalized learning path/course prototype
app/schedule/page.tsx - visual weekly schedule prototype
app/sessions/page.tsx - specialist network and session hub prototype
app/progress/page.tsx - progress tracking and family update prototype
app/school/page.tsx - institutional/school analytics portal prototype
app/parents/page.tsx - parent/guardian dashboard prototype
app/components/ - reusable shell and UI primitives
app/lib/demo-data.ts - shared fake data for the demo experience
app/globals.css - Tailwind v4 import, design tokens, custom animations/utilities
public/ - default static SVG assets from create-next-app
.pi/ - local Pi/taskplane agent configuration; currently untracked by git
README.md - default create-next-app README with standard Next.js instructions
VANTAGEINFO.txt - business plan/product context, market positioning, milestones, team, and financial assumptions
package.json - npm scripts and dependencies
next.config.ts - currently empty Next.js config shell
eslint.config.mjs - ESLint 9 flat config using Next core-web-vitals and TypeScript presets
postcss.config.mjs - Tailwind CSS v4 PostCSS plugin setup
tsconfig.json - strict TypeScript config with `@/*` path alias to project root
```

## Architecture Notes
- Routing uses the Next.js App Router:
  - `/` renders the marketing landing page.
  - `/dashboard`, `/tools`, `/courses`, `/schedule`, `/sessions`, `/progress`, `/school`, and `/parents` render the dummy product experience.
- Client components are used where browser state/effects are needed (`IntersectionObserver`, `useState`, text-to-speech browser API, simulated dictation).
- Shared product UI lives in `app/components/ProductShell.tsx` and `app/components/ui.tsx`.
- Demo data is centralized in `app/lib/demo-data.ts`. There is no network data flow or server state.
- Styling is primarily Tailwind utility classes, backed by semantic CSS variables and Tailwind theme tokens in `app/globals.css`.
- The dashboard state is purely local React state for toggling completed goals and the mobile sidebar.
- Navigation uses `next/link` for internal route transitions and anchor links for landing-page sections.

## Key Files and Modules
- `app/layout.tsx` - sets site metadata (`+VANTAGE | Access. Adapt. Advance.`), imports fonts, and applies font CSS variables to the body.
- `app/page.tsx` - main product narrative: hero, challenge, tools, values, pricing/audience, testimonials, CTA, and footer.
- `app/dashboard/page.tsx` - demo dashboard UI with student plan, progress ring, goals, achievements, course progress, tool usage, and specialist CTA.
- `app/components/ProductShell.tsx` - shared authenticated-app-style sidebar/topbar shell for all product demo routes.
- `app/components/ui.tsx` - reusable page headers, cards, stat cards, pills, and progress bars.
- `app/lib/demo-data.ts` - shared fake student, courses, specialists, schedules, achievements, school metrics, and parent updates.
- `app/globals.css` - central color palette (`navy`, `light-blue`, `pale-blue`, `accent-teal`, `accent-warm`), Tailwind v4 `@theme inline` mappings, custom keyframes, animation classes, reduced-motion handling, and dashboard progress-ring transition.
- `VANTAGEINFO.txt` - source of product strategy details: adaptive tools, specialist support, school ecosystem integrations, target users, milestones, team roles, and revenue/adoption assumptions.
- `package.json` - confirms scripts: `dev`, `build`, `start`, `lint`; no test/typecheck scripts are defined.
- `.pi/agents/supervisor.md` and `.pi/taskplane.json` - Pi/taskplane local automation metadata; no additional project-specific implementation instructions were added in the supervisor file.

## Configuration and Environment
- No `.env` files or documented environment variables were found.
- `.env*` files are ignored by `.gitignore`; do not commit secrets.
- `next.config.ts` contains no custom Next configuration yet.
- `tsconfig.json` has `strict: true`, `allowJs: true`, `noEmit: true`, and an `@/*` alias that resolves from the project root.
- Deployment target is not explicitly configured, but the README documents standard Vercel deployment for Next.js.
- `node_modules/` is present locally but should be treated as generated/vendor content.

## Testing and Quality
- No test framework or test files are present.
- Available quality command: `npm run lint`.
- TypeScript can be checked with `npx tsc --noEmit`; consider adding a `typecheck` script if future work depends on it.
- Verified during this analysis:
  - `npm run lint` completed successfully.
  - `npx tsc --noEmit` completed successfully.

## Coding Conventions
- TypeScript + React function components; no classes observed.
- Client-side pages use inline helper components/hooks near their usage.
- Tailwind utility-first styling with semantic custom theme colors rather than raw hex values in JSX.
- Design language: soft educational SaaS aesthetic, rounded cards, translucent backgrounds, navy/light-blue palette, accent teal/warm highlights, subtle motion and scroll reveal.
- SVG icons are inline and use `stroke="currentColor"` to inherit Tailwind color classes.
- Hardcoded demo content is grouped as arrays and mapped in JSX.
- Accessibility considerations observed: semantic headings/sections, `aria-label` on menu buttons, and `prefers-reduced-motion` CSS support.

## Known Issues / Open Questions
- The mobile menu button on the landing page has no open/close behavior yet.
- Dashboard navigation buttons other than the active dashboard item are non-routing placeholders.
- Dashboard data, testimonials, waitlist count, pricing copy, and user identity are mock/static content.
- `VANTAGEINFO.txt` describes intended future capabilities such as secure databases, student progress tracking, specialist feedback, school dashboards, and TTS/STT engines; these are product goals, not implemented code.
- No authentication, user accounts, real scheduling, course APIs, specialist session integration, or persistence exists yet.
- No automated tests are configured.
- Product demo data is intentionally fake/static; future real implementation needs backend models, privacy/compliance review, and integration boundaries.
- `.pi/` is currently untracked according to `git status`; decide whether this local automation config should remain untracked or be committed.

## Agent Handoff Notes
- Start by running `npm run lint` and `npx tsc --noEmit` before claiming changes are safe; use `npm run build` for release-level verification.
- Keep generated/heavy directories (`node_modules/`, `.next/`, `build/`, `out/`, `coverage/`, `.git/`) out of code review and discovery unless specifically needed.
- Prefer extracting repeated UI patterns into shared components before the pages grow much larger.
- If adding backend behavior, document the new API routes, env vars, auth model, and data storage here.
- Preserve the existing visual identity by using the CSS variables/Tailwind theme tokens in `app/globals.css`.
