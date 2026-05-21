"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BRAIN_TOPICS } from "@/lib/constants";
import { useScrollReveal } from "@/hooks/useGsap";

gsap.registerPlugin(ScrollTrigger);

export function BrainOnline() {
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 0.1 });
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll("[data-brain-card]");
    if (!cards) return;

    cards.forEach((card) => {
      const el = card as HTMLElement;
      const onEnter = () => {
        gsap.to(el, {
          scale: 1.03,
          rotation: gsap.utils.random(-4, 4),
          duration: 0.35,
          ease: "power2.out",
        });
      };
      const onLeave = () => {
        gsap.to(el, {
          scale: 1,
          rotation: parseFloat(el.dataset.rotate || "0"),
          duration: 0.35,
          ease: "power2.out",
        });
      };
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
  }, []);

  return (
    <section
      id="brain"
      ref={sectionRef}
      className="bg-cream px-4 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="mb-16 md:mb-24">
          <span className="inline-block brutal-border rounded-full bg-blue px-4 py-1 font-display text-xs uppercase text-cream mb-6 -rotate-2">
            Section 01
          </span>
          <h2 className="font-display text-[clamp(2.5rem,8vw,6rem)] uppercase leading-[0.9] text-black">
            Your Brain
            <span className="block text-orange">Online</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-black/80">
            Five tabs open in your head. Pick a topic. Feel seen. Maybe log
            off.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {BRAIN_TOPICS.map((topic, i) => (
            <article
              key={topic.title}
              data-reveal
              data-brain-card
              data-rotate={
                topic.rotate.includes("-2")
                  ? "-2"
                  : topic.rotate.includes("2") && !topic.rotate.includes("-")
                    ? "2"
                    : topic.rotate.includes("1") && topic.rotate.includes("-")
                      ? "-1"
                      : topic.rotate.includes("1")
                        ? "1"
                        : "0"
              }
              className={`brutal-border brutal-shadow rounded-3xl ${topic.color} p-8 md:p-10 cursor-pointer transition-shadow ${topic.rotate} ${
                i === 2 ? "lg:col-span-1 lg:row-span-1" : ""
              } ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <span className="text-5xl md:text-6xl" role="img" aria-hidden>
                {topic.emoji}
              </span>
              <h3 className="mt-6 font-display text-3xl md:text-4xl uppercase">
                {topic.title}
              </h3>
              <p className="mt-4 text-base md:text-lg font-medium text-black/80">
                {topic.description}
              </p>
              <span className="mt-8 inline-block font-display text-xs uppercase tracking-widest border-b-4 border-black pb-1">
                Explore →
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
