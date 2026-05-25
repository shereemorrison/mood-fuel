"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MOODS } from "@/lib/constants";
import { BrutalButton } from "@/components/ui/BrutalButton";
import { useScrollReveal } from "@/hooks/useGsap";

gsap.registerPlugin(ScrollTrigger);

const FAKE_STATS = [
  { label: "Brain Battery", value: "23%", color: "bg-orange" },
  { label: "Focus Score", value: "6/10", color: "bg-yellow" },
  { label: "Scroll Urge", value: "CRITICAL", color: "bg-blue" },
  { label: "Rest Debt", value: "4.2hrs", color: "bg-cream" },
];

export function Wellbeing() {
  const [activeMood, setActiveMood] = useState<(typeof MOODS)[number]["id"]>(
    MOODS[0].id,
  );
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 0.08 });
  const statsRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const currentMood = MOODS.find((m) => m.id === activeMood) ?? MOODS[0];

  useEffect(() => {
    if (!cardRef.current) return;
    gsap.fromTo(
      cardRef.current,
      { scale: 0.95, opacity: 0.7, rotation: -3 },
      { scale: 1, opacity: 1, rotation: 0, duration: 0.5, ease: "back.out(1.5)" },
    );
  }, [activeMood]);

  useEffect(() => {
    const stats = statsRef.current?.children;
    if (!stats) return;

    gsap.from(stats, {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      scrollTrigger: {
        trigger: statsRef.current,
        start: "top 90%",
      },
    });
  }, []);

  return (
    <section
      id="mood"
      ref={sectionRef}
      className="bg-yellow px-4 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div
          data-reveal
          className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="inline-block brutal-border rounded-full bg-black px-4 py-1 font-display text-xs uppercase text-cream mb-6 rotate-2">
              Interactive
            </span>
            <h2 className="font-display text-[clamp(2.5rem,8vw,5.5rem)] uppercase leading-[0.9]">
              How&apos;s Your
              <span className="block text-orange">Brain Today?</span>
            </h2>
          </div>
          <p className="max-w-md text-lg font-medium">
            Pick a mood. Get fake stats. Feel slightly called out. It&apos;s
            therapeutic-ish.
          </p>
        </div>

        <div data-reveal className="mb-10 flex flex-wrap gap-3 md:gap-4">
          {MOODS.map((mood) => (
            <BrutalButton
              key={mood.id}
              variant={activeMood === mood.id ? "black" : "cream"}
              size="lg"
              onClick={() => setActiveMood(mood.id)}
              className={activeMood === mood.id ? "scale-105 -rotate-2" : ""}
            >
              <span className="mr-2">{mood.emoji}</span>
              {mood.label}
            </BrutalButton>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div
            ref={cardRef}
            data-reveal
            className="brutal-border brutal-shadow rounded-3xl bg-cream p-8 md:p-12 min-h-[280px] flex flex-col justify-between"
          >
            <div>
              <span className="text-6xl md:text-8xl" role="img" aria-hidden>
                {currentMood.emoji}
              </span>
              <h3 className="mt-6 font-display text-4xl md:text-5xl uppercase">
                {currentMood.label}
              </h3>
            </div>
            <p className="mt-8 font-display text-xl md:text-2xl uppercase text-orange">
              {currentMood.stat}
            </p>
          </div>

          <div ref={statsRef} className="grid grid-cols-2 gap-4 md:gap-6">
            {FAKE_STATS.map((stat) => (
              <div
                key={stat.label}
                className={`brutal-border brutal-shadow-sm rounded-2xl ${stat.color} p-5 md:p-6 transition-all hover:brutal-shadow-hover hover:-rotate-1 cursor-default`}
              >
                <p className="font-display text-xs uppercase tracking-wider opacity-70">
                  {stat.label}
                </p>
                <p className="mt-2 font-display text-2xl md:text-3xl uppercase">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          data-reveal
          className="mt-12 brutal-border rounded-3xl bg-orange p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-cream"
        >
          <p className="font-display text-lg md:text-xl uppercase">
            Prescription: 10 min offline. No excuses.
          </p>
          <BrutalButton variant="yellow" size="lg">
            I&apos;ll Try →
          </BrutalButton>
        </div>
      </div>
    </section>
  );
}
