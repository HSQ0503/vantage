export type Course = {
  title: string;
  focus: string;
  progress: number;
  lessons: string;
  next: string;
  support: string;
  color: string;
};

export type Specialist = {
  name: string;
  role: string;
  initials: string;
  specialty: string;
  nextSlot: string;
  rating: string;
  notes: string;
};

export type ScheduleEvent = {
  day: number;
  hour: number;
  title: string;
  type: "subject" | "support" | "tool" | "break";
  location: string;
};

export const student = {
  name: "Alex T.",
  age: 13,
  profile: "Dyslexia + ADHD support plan",
  level: 12,
  xp: 2340,
  levelProgress: 68,
  streak: 3,
  mood: "Focused",
  weeklyGoalProgress: 76,
};

export const learnerNeeds = [
  "Short visual instructions",
  "Audio-first reading support",
  "Movement breaks every 35 minutes",
  "Chunked maths practice",
  "Low-distraction writing prompts",
];

export const courses: Course[] = [
  {
    title: "English Reading",
    focus: "Dyslexia-friendly comprehension",
    progress: 72,
    lessons: "18/25",
    next: "Inference practice with audio support",
    support: "Text-to-Speech + specialist review",
    color: "bg-accent-teal",
  },
  {
    title: "Visual Mathematics",
    focus: "Fractions and number sense",
    progress: 45,
    lessons: "9/20",
    next: "Build equivalent fractions with blocks",
    support: "Visual Math + step-by-step hints",
    color: "bg-accent-warm",
  },
  {
    title: "Creative Writing",
    focus: "Voice-to-outline storytelling",
    progress: 88,
    lessons: "22/25",
    next: "Turn speech notes into a paragraph",
    support: "Speech-to-Text + writing scaffold",
    color: "bg-navy",
  },
  {
    title: "Science Explorer",
    focus: "Multi-sensory revision",
    progress: 30,
    lessons: "6/20",
    next: "Digestive system visual cards",
    support: "Flashcards + spaced repetition",
    color: "bg-accent-teal",
  },
];

export const specialists: Specialist[] = [
  {
    name: "Ms. Rivera",
    role: "Reading Specialist",
    initials: "MR",
    specialty: "Dyslexia, phonics, comprehension",
    nextSlot: "Today, 2:00 PM",
    rating: "4.9",
    notes: "Use audio preview before independent reading. Alex responds well to choice-based prompts.",
  },
  {
    name: "Dr. Malik Chen",
    role: "Educational Psychologist",
    initials: "MC",
    specialty: "ADHD coaching and executive function",
    nextSlot: "Thu, 10:00 AM",
    rating: "4.8",
    notes: "Continue visual timers and weekly reflection. Add reward after two completed focus blocks.",
  },
  {
    name: "Sofia Almeida",
    role: "Math Intervention Tutor",
    initials: "SA",
    specialty: "Dyscalculia and visual modelling",
    nextSlot: "Fri, 1:00 PM",
    rating: "5.0",
    notes: "Fractions improve when Alex manipulates blocks before symbols. Avoid timed drills.",
  },
];

export const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];
export const HOURS = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM"];

export const scheduleEvents: ScheduleEvent[] = [
  { day: 0, hour: 0, title: "English Reading", type: "subject", location: "Learning Pod" },
  { day: 0, hour: 2, title: "Movement Break", type: "break", location: "Sensory Room" },
  { day: 0, hour: 3, title: "Visual Maths", type: "tool", location: "+VANTAGE Tools" },
  { day: 1, hour: 1, title: "Reading w/ Ms. Rivera", type: "support", location: "Video Session" },
  { day: 1, hour: 4, title: "Science Cards", type: "subject", location: "Course Studio" },
  { day: 2, hour: 0, title: "Visual Math", type: "tool", location: "+VANTAGE Tools" },
  { day: 2, hour: 2, title: "ADHD Coaching", type: "support", location: "Video Session" },
  { day: 3, hour: 1, title: "Writing Lab", type: "subject", location: "Course Studio" },
  { day: 3, hour: 5, title: "History Audio Notes", type: "tool", location: "Audio Reader" },
  { day: 4, hour: 0, title: "Maths Review", type: "subject", location: "Learning Pod" },
  { day: 4, hour: 3, title: "1:1 Weekly Review", type: "support", location: "Video Session" },
];

export const goals = [
  "Complete reading exercise with audio preview",
  "Practice visual math — equivalent fractions",
  "Review science vocabulary flashcards",
  "Journal: what helped me focus today",
];

export const achievements = [
  { emoji: "📚", name: "Bookworm", desc: "Read 10 chapters", unlocked: true },
  { emoji: "🔥", name: "On Fire", desc: "3 day streak", unlocked: true },
  { emoji: "🧮", name: "Math Whiz", desc: "100% on fractions", unlocked: true },
  { emoji: "🎧", name: "Audio Ally", desc: "Used TTS 5 times", unlocked: true },
  { emoji: "🎯", name: "Goal Setter", desc: "Complete all daily goals", unlocked: false },
  { emoji: "⭐", name: "Rising Star", desc: "Reach Level 15", unlocked: false },
];

export const schoolMetrics = [
  { label: "Active students", value: "148", change: "+18%", detail: "Across 6 year groups" },
  { label: "Renewal intent", value: "91%", change: "+7%", detail: "Parent + educator survey" },
  { label: "Specialist utilization", value: "1:37", change: "Healthy", detail: "Goal is 1:40 or lower" },
  { label: "Weekly tool sessions", value: "642", change: "+24%", detail: "TTS, STT, math, schedules" },
];

export const toolUsage = [
  { name: "Text-to-Speech", value: 84, color: "bg-accent-teal" },
  { name: "Speech-to-Text", value: 62, color: "bg-navy" },
  { name: "Visual Math", value: 71, color: "bg-accent-warm" },
  { name: "Visual Schedules", value: 93, color: "bg-accent-teal" },
  { name: "Flashcards", value: 58, color: "bg-navy" },
];

export const parentUpdates = [
  "Alex completed 3 of 4 goals today and asked for audio support independently.",
  "Ms. Rivera notes stronger confidence when Alex previews passages with TTS.",
  "Visual math accuracy improved from 58% to 76% over two weeks.",
  "Recommended home routine: 20-minute reading block, 5-minute movement reset, journal reflection.",
];
