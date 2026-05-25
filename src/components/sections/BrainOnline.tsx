"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BRAIN_TOPICS } from "@/lib/constants";
import { section, sectionBody, sectionHeader, sectionTitle } from "@/lib/sectionStyles";
import { BrainTopicCard } from "@/components/ui/BrainTopicCard";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { useScrollReveal } from "@/hooks/useGsap";

gsap.registerPlugin(ScrollTrigger);

export function BrainOnline() {
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 0.08 });
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll("[data-brain-card]");
    if (!cards) return;

    cards.forEach((card) => {
      const el = card as HTMLElement;
      const onEnter = () => {
        gsap.to(el, {
          scale: 1.03,
          rotation: gsap.utils.random(-3, 3),
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
      className={`${section} border-t-8 border-black bg-blue/10`}
    >
      <div className="mx-auto max-w-7xl">
        <div
          data-reveal
          className={`${sectionHeader} flex flex-col gap-3 md:flex-row md:items-end md:justify-between`}
        >
          <div>
            <SectionBadge variant="blue" className="-rotate-2">
              Your Brain Online
            </SectionBadge>
            <h2 className={`${sectionTitle} text-black`}>
              Your Brain
              <span className="block text-orange">Online</span>
            </h2>
          </div>
          <p className={`${sectionBody} max-w-sm md:text-right`}>
            Five tabs open in your head. Pick a topic. Feel seen. Maybe log off.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-5 lg:gap-4"
        >
          {BRAIN_TOPICS.map((topic) => (
            <BrainTopicCard key={topic.title} topic={topic} data-reveal />
          ))}
        </div>
      </div>
    </section>
  );
}
