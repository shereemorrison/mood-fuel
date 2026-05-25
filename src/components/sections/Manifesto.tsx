"use client";

import { useScrollReveal } from "@/hooks/useGsap";
import { section } from "@/lib/sectionStyles";
import { SectionBadge } from "@/components/ui/SectionBadge";

const MANIFESTO_LINES = [
  "We believe",
  "your attention",
  "is not",
  "for sale.",
];

export function Manifesto() {
  const sectionRef = useScrollReveal<HTMLElement>({
    y: 30,
    stagger: 0.15,
    duration: 0.8,
  });

  return (
    <section
      id="manifesto"
      ref={sectionRef}
      className={`${section} relative overflow-hidden bg-blue`}
    >
      <div
        className="absolute top-6 left-6 h-14 w-14 rounded-xl bg-yellow brutal-border rotate-6 hidden md:block"
        aria-hidden
      />
      <div
        className="absolute bottom-8 right-8 h-10 w-20 rounded-full bg-orange brutal-border -rotate-6 hidden md:block"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div data-reveal>
          <SectionBadge variant="cream" className="mb-6">
            The Manifesto
          </SectionBadge>
        </div>

        <div className="space-y-1 md:space-y-2">
          {MANIFESTO_LINES.map((line, i) => (
            <p
              key={line}
              data-reveal
              className={`font-display uppercase leading-[0.9] text-cream ${
                i === 1
                  ? "text-[clamp(1.75rem,8vw,4.5rem)] text-yellow"
                  : i === 3
                    ? "text-[clamp(2rem,9vw,5rem)]"
                    : "text-[clamp(1.5rem,6vw,3rem)]"
              } ${i % 2 === 0 ? "-rotate-1" : "rotate-1"}`}
            >
              {line}
            </p>
          ))}
        </div>

        <p
          data-reveal
          className="mx-auto mt-6 max-w-md text-sm md:text-base text-cream/80 leading-relaxed"
        >
          MOOD-FUEL is a creative campaign for humans drowning in notifications.
          Rest louder. Scroll softer. Live intentional.
        </p>
      </div>
    </section>
  );
}
