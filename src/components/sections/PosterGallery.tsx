"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { POSTERS } from "@/lib/constants";
import { section, sectionDivider, sectionHeader, sectionTitle } from "@/lib/sectionStyles";
import { CampaignPosterCard } from "@/components/ui/CampaignPosterCard";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { useScrollReveal } from "@/hooks/useGsap";

gsap.registerPlugin(ScrollTrigger);

export function PosterGallery() {
  const sectionRef = useScrollReveal<HTMLElement>({ stagger: 0.06 });
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll("[data-poster]");
    if (!cards) return;

    cards.forEach((card) => {
      const el = card as HTMLElement;
      const onEnter = () => {
        gsap.to(el, { scale: 1.04, duration: 0.35, ease: "power2.out" });
      };
      const onLeave = () => {
        gsap.to(el, { scale: 1, duration: 0.35, ease: "power2.out" });
      };
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
  }, []);

  return (
    <section
      id="posters"
      ref={sectionRef}
      className={`${section} ${sectionDivider} overflow-hidden bg-cream`}
    >
      <div className="mx-auto max-w-7xl">
        <div data-reveal className={sectionHeader}>
          <SectionBadge variant="orange" className="rotate-1">
            Campaign Posters
          </SectionBadge>
          <h2 className={sectionTitle}>
            Poster
            <span className="block text-blue -rotate-1">Gallery</span>
          </h2>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-5 lg:gap-4"
        >
          {POSTERS.map((poster) => (
            <CampaignPosterCard key={poster.title} {...poster} data-reveal />
          ))}
        </div>
      </div>
    </section>
  );
}
