"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollArrow } from "@/components/ui/ScrollArrow";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.2,
      });
      gsap.from(badgeRef.current, {
        scale: 0,
        rotation: -12,
        duration: 0.8,
        ease: "back.out(2)",
        delay: 0.6,
      });
      gsap.from("[data-hero-line]", {
        x: -40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        delay: 0.4,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100dvh] overflow-hidden bg-orange"
    >
      <div
        ref={badgeRef}
        className="absolute top-24 right-4 z-10 md:top-28 md:right-12 brutal-border rounded-full bg-yellow px-5 py-2 font-display text-xs md:text-sm uppercase rotate-12"
      >
        Est. 2026
      </div>

      <div
        className="absolute -left-20 top-1/3 h-32 w-32 rounded-full bg-blue brutal-border opacity-80 md:h-48 md:w-48"
        aria-hidden
      />
      <div
        className="absolute -right-10 bottom-1/4 h-24 w-24 rounded-3xl bg-yellow brutal-border rotate-12 md:h-40 md:w-40"
        aria-hidden
      />

      <div className="relative z-10 flex h-full flex-col px-4 pt-20 pb-24 md:px-8 md:pt-24 md:pb-28">
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <p
            data-hero-line
            className="mb-4 font-display text-xs uppercase tracking-[0.35em] text-cream md:mb-5 md:text-sm md:tracking-[0.4em]"
          >
            Digital Wellbeing Campaign
          </p>

          <h1
            ref={titleRef}
            className="font-display uppercase leading-[0.88] text-cream"
          >
            <span className="block text-[clamp(2.75rem,11vw,7.5rem)]">
              YOUR
            </span>
            <span className="block text-[clamp(2.75rem,11vw,7.5rem)] text-yellow drop-shadow-[4px_4px_0_#111]">
              BRAIN
            </span>
            <span className="block text-[clamp(2.75rem,11vw,7.5rem)] -rotate-1">
              NEEDS FUEL
            </span>
          </h1>

          <p
            data-hero-line
            className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-cream/90 md:mt-8 md:max-w-xl md:text-lg"
          >
            A playful rebellion against digital burnout. Turn down the noise.
            Turn up the care.
          </p>
        </div>

        <div className="flex justify-center">
          <ScrollArrow />
        </div>
      </div>
    </section>
  );
}
