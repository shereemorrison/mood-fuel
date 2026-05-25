"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { POSTERS } from "@/lib/constants";
import { CampaignPosterCard } from "@/components/ui/CampaignPosterCard";
import { useScrollReveal } from "@/hooks/useGsap";

gsap.registerPlugin(ScrollTrigger);

export function PosterGallery() {
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 0.08 });
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll("[data-poster]");
    if (!cards) return;

    cards.forEach((card) => {
      const el = card as HTMLElement;

      const onEnter = () => {
        gsap.to(el, {
          scale: 1.04,
          duration: 0.35,
          ease: "power2.out",
        });
      };
      const onLeave = () => {
        gsap.to(el, {
          scale: 1,
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
      id="posters"
      ref={sectionRef}
      className="bg-cream px-4 py-24 md:px-8 md:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="mb-12 md:mb-16">
          <span className="inline-block brutal-border rounded-full bg-orange px-4 py-1 font-display text-xs uppercase text-cream mb-6 rotate-1">
            Campaign Posters
          </span>
          <h2 className="font-display text-[clamp(2.5rem,8vw,6rem)] uppercase leading-[0.9]">
            Poster
            <span className="block text-blue -rotate-1">Gallery</span>
          </h2>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5 lg:gap-5"
        >
          {POSTERS.map((poster) => (
            <CampaignPosterCard key={poster.title} {...poster} data-reveal />
          ))}
        </div>
      </div>
    </section>
  );
}
