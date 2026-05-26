"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MARQUEE_ITEMS } from "@/lib/constants";

export function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const width = track.scrollWidth / 2;

    const tween = gsap.to(track, {
      x: -width,
      duration: 20,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section
      aria-label="Campaign slogans"
      className="overflow-hidden border-y-4 border-black bg-black py-6 md:py-8"
    >
      <div className="flex overflow-hidden">
        <div
          ref={trackRef}
          className="flex shrink-0 gap-8 whitespace-nowrap md:gap-12"
        >
          {items.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="inline-flex items-center gap-8 font-display text-[clamp(1.5rem,5vw,3rem)] uppercase text-cream md:gap-12"
            >
              {item}
              <span className="text-2xl text-orange md:text-4xl" aria-hidden>
                ★
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
