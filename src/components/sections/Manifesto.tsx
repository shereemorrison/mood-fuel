"use client";

import { useScrollReveal } from "@/hooks/useGsap";

const MANIFESTO_LINES = [
  "We believe",
  "your attention",
  "is not",
  "for sale.",
];

export function Manifesto() {
  const sectionRef = useScrollReveal<HTMLElement>({
    y: 40,
    stagger: 0.2,
    duration: 1,
  });

  return (
    <section
      id="manifesto"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-blue px-4 py-32 md:px-8"
    >
      <div
        className="absolute top-12 left-8 h-24 w-24 rounded-2xl bg-yellow brutal-border rotate-6 hidden md:block"
        aria-hidden
      />
      <div
        className="absolute bottom-16 right-12 h-16 w-32 rounded-full bg-orange brutal-border -rotate-6 hidden md:block"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <span
          data-reveal
          className="inline-block mb-12 brutal-border rounded-full bg-cream px-6 py-2 font-display text-sm uppercase -rotate-1"
        >
          The Manifesto
        </span>

        <div className="space-y-2 md:space-y-4">
          {MANIFESTO_LINES.map((line, i) => (
            <p
              key={line}
              data-reveal
              className={`font-display uppercase leading-[0.9] text-cream ${
                i === 1
                  ? "text-[clamp(2.5rem,10vw,7rem)] text-yellow"
                  : i === 3
                    ? "text-[clamp(3rem,12vw,9rem)]"
                    : "text-[clamp(2rem,7vw,5rem)]"
              } ${i % 2 === 0 ? "-rotate-1" : "rotate-1"}`}
            >
              {line}
            </p>
          ))}
        </div>

        <p
          data-reveal
          className="mx-auto mt-16 max-w-lg text-lg md:text-xl text-cream/80 leading-relaxed"
        >
          MOOD-FUEL is a creative campaign for humans drowning in notifications.
          Rest louder. Scroll softer. Live intentional.
        </p>
      </div>
    </section>
  );
}
