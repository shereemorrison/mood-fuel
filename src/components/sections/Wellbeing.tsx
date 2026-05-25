"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MOODS } from "@/lib/constants";
import { section, sectionBody, sectionHeader, sectionTitle } from "@/lib/sectionStyles";
import { BrutalButton } from "@/components/ui/BrutalButton";
import { SectionBadge } from "@/components/ui/SectionBadge";
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
      { scale: 0.97, opacity: 0.8 },
      { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out" },
    );
  }, [activeMood]);

  useEffect(() => {
    const stats = statsRef.current?.children;
    if (!stats) return;

    gsap.from(stats, {
      y: 12,
      opacity: 0,
      stagger: 0.08,
      duration: 0.5,
      scrollTrigger: {
        trigger: statsRef.current,
        start: "top 90%",
      },
    });
  }, []);

  return (
    <section id="mood" ref={sectionRef} className={`${section} bg-yellow`}>
      <div className="mx-auto max-w-7xl">
        <div
          data-reveal
          className={`${sectionHeader} flex flex-col gap-3 md:flex-row md:items-end md:justify-between`}
        >
          <div>
            <SectionBadge variant="black" className="rotate-2">
              Interactive
            </SectionBadge>
            <h2 className={sectionTitle}>
              How&apos;s Your
              <span className="block text-orange">Brain Today?</span>
            </h2>
          </div>
          <p className={`${sectionBody} max-w-sm md:text-right`}>
            Pick a mood. Get fake stats. Feel slightly called out.
          </p>
        </div>

        <div data-reveal className="mb-6 flex flex-wrap gap-2">
          {MOODS.map((mood) => (
            <BrutalButton
              key={mood.id}
              variant={activeMood === mood.id ? "black" : "cream"}
              size="md"
              onClick={() => setActiveMood(mood.id)}
              className={`text-xs ${activeMood === mood.id ? "-rotate-1" : ""}`}
            >
              <span className="mr-1.5">{mood.emoji}</span>
              {mood.label}
            </BrutalButton>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          <div
            ref={cardRef}
            data-reveal
            className="brutal-border brutal-shadow rounded-2xl bg-cream p-6 flex flex-col justify-between min-h-[200px]"
          >
            <div>
              <span className="text-4xl md:text-5xl" role="img" aria-hidden>
                {currentMood.emoji}
              </span>
              <h3 className="mt-3 font-display text-2xl uppercase md:text-3xl">
                {currentMood.label}
              </h3>
            </div>
            <p className="mt-4 font-display text-base uppercase text-orange md:text-lg">
              {currentMood.stat}
            </p>
          </div>

          <div ref={statsRef} className="grid grid-cols-2 gap-2 md:gap-3">
            {FAKE_STATS.map((stat) => (
              <div
                key={stat.label}
                className={`brutal-border brutal-shadow-sm rounded-xl ${stat.color} p-3 md:p-4`}
              >
                <p className="font-display text-[10px] uppercase tracking-wider opacity-70">
                  {stat.label}
                </p>
                <p className="mt-1 font-display text-lg uppercase md:text-xl">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          data-reveal
          className="mt-6 brutal-border rounded-2xl bg-orange p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-cream"
        >
          <p className="font-display text-sm uppercase md:text-base">
            Prescription: 10 min offline. No excuses.
          </p>
          <BrutalButton variant="yellow" size="md">
            I&apos;ll Try →
          </BrutalButton>
        </div>
      </div>
    </section>
  );
}
