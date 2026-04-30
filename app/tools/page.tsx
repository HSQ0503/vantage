"use client";

import { useMemo, useState } from "react";
import ProductShell from "@/app/components/ProductShell";
import { Card, DarkCard, PageHeader, Pill, ProgressBar } from "@/app/components/ui";

const sampleText = "Neurodivergent learners often thrive when instructions are clear, visual, and available in more than one format.";
const flashcards = [
  { front: "Dyslexia support", back: "Use audio preview, larger spacing, chunked reading, and comprehension checks." },
  { front: "ADHD support", back: "Use timers, short goals, visual schedules, movement breaks, and reward loops." },
  { front: "Dyscalculia support", back: "Use manipulatives, number lines, colour-coded steps, and visual models." },
];

export default function ToolsPage() {
  const [ttsText, setTtsText] = useState(sampleText);
  const [transcript, setTranscript] = useState("I learned that equivalent fractions can look different but show the same amount.");
  const [listening, setListening] = useState(false);
  const [numerator, setNumerator] = useState(3);
  const [denominator, setDenominator] = useState(8);
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const blocks = useMemo(() => Array.from({ length: denominator }, (_, i) => i < numerator), [denominator, numerator]);

  const speak = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(ttsText);
    utterance.rate = 0.88;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  };

  const simulateSpeech = () => {
    setListening(true);
    window.setTimeout(() => {
      setTranscript("I used speech to text to explain my answer before writing it down. The visual blocks helped me understand the fraction.");
      setListening(false);
    }, 1200);
  };

  return (
    <ProductShell>
      <PageHeader
        eyebrow="Adaptive Tools"
        title="Demo assistive toolkit"
        description="Interactive fake-data demos for the core tools described in the business plan: text-to-speech, speech-to-text, visual maths, flashcards, focus supports, and keyboard-first learning affordances."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        <Card>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-teal">Audio support</p>
              <h2 className="mt-1 text-xl font-bold text-navy">Text-to-Speech Reader</h2>
            </div>
            <Pill className="bg-accent-teal/10 text-accent-teal">Browser demo</Pill>
          </div>
          <textarea value={ttsText} onChange={(event) => setTtsText(event.target.value)} className="min-h-36 w-full rounded-2xl border border-navy/10 bg-pale-blue/60 p-4 text-sm leading-relaxed text-navy outline-none transition-colors focus:border-accent-teal" />
          <div className="mt-4 flex flex-wrap gap-3">
            <button onClick={speak} className="rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-light">Read aloud</button>
            <button onClick={() => window.speechSynthesis?.cancel()} className="rounded-full border border-navy/10 bg-white/60 px-5 py-3 text-sm font-semibold text-navy/60 hover:bg-white">Stop</button>
          </div>
        </Card>

        <DarkCard>
          <p className="text-xs font-semibold uppercase tracking-wider text-accent-warm">Writing support</p>
          <h2 className="mt-1 text-xl font-bold text-white">Speech-to-Text Drafting</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/55">This template simulates dictation so stakeholders can see the workflow without requiring microphones or accounts.</p>
          <div className="mt-5 rounded-2xl bg-white/10 p-4 text-sm leading-relaxed text-white/75">{listening ? "Listening… converting speech into a draft" : transcript}</div>
          <div className="mt-5 flex flex-wrap gap-3">
            <button onClick={simulateSpeech} className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy transition-colors hover:bg-pale-blue">Simulate dictation</button>
            <button onClick={() => setTranscript("")} className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/75 hover:bg-white/5">Clear</button>
          </div>
        </DarkCard>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <Card>
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-warm">Dyscalculia support</p>
              <h2 className="mt-1 text-xl font-bold text-navy">Visual Math Blocks</h2>
            </div>
            <Pill className="bg-accent-warm/10 text-accent-warm">{numerator}/{denominator}</Pill>
          </div>
          <div className="grid grid-cols-4 gap-3 sm:grid-cols-8">
            {blocks.map((filled, index) => (
              <div key={index} className={`aspect-square rounded-2xl border transition-all ${filled ? "border-accent-warm bg-accent-warm/80 shadow-lg shadow-accent-warm/15" : "border-navy/10 bg-pale-blue"}`} />
            ))}
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-semibold text-navy/60">Numerator
              <input type="range" min="1" max={denominator} value={numerator} onChange={(event) => setNumerator(Number(event.target.value))} className="mt-3 w-full accent-[#F4A261]" />
            </label>
            <label className="text-sm font-semibold text-navy/60">Denominator
              <input type="range" min="2" max="12" value={denominator} onChange={(event) => { const next = Number(event.target.value); setDenominator(next); setNumerator((current) => Math.min(current, next)); }} className="mt-3 w-full accent-[#3AAFA9]" />
            </label>
          </div>
        </Card>

        <Card>
          <p className="text-xs font-semibold uppercase tracking-wider text-accent-teal">Spaced repetition</p>
          <h2 className="mt-1 text-xl font-bold text-navy">Adaptive Flashcards</h2>
          <button onClick={() => setFlipped((value) => !value)} className="mt-5 flex min-h-48 w-full items-center justify-center rounded-2xl border border-navy/10 bg-pale-blue/60 p-6 text-center transition-colors hover:bg-pale-blue">
            <span className="text-lg font-bold text-navy">{flipped ? flashcards[cardIndex].back : flashcards[cardIndex].front}</span>
          </button>
          <div className="mt-4 flex gap-3">
            <button onClick={() => { setCardIndex((cardIndex + 1) % flashcards.length); setFlipped(false); }} className="flex-1 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white hover:bg-navy-light">Next card</button>
            <button onClick={() => setFlipped((value) => !value)} className="flex-1 rounded-full border border-navy/10 bg-white/60 px-5 py-3 text-sm font-semibold text-navy/60 hover:bg-white">Flip</button>
          </div>
        </Card>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {[{ label: "Keyboard-first flows", value: 92 }, { label: "Low distraction mode", value: 86 }, { label: "Visual prompts", value: 94 }].map((item) => (
          <Card key={item.label}>
            <p className="text-sm font-bold text-navy">{item.label}</p>
            <p className="mt-2 text-xs text-navy/45">Demo accessibility readiness score</p>
            <div className="mt-5"><ProgressBar value={item.value} color="bg-accent-teal" /></div>
          </Card>
        ))}
      </div>
    </ProductShell>
  );
}
