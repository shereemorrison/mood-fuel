"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function ScrollArrow({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const tween = gsap.to(el, {
      y: 12,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <a
      ref={ref}
      href="#palette"
      className={`flex flex-col items-center gap-2 text-black transition-colors hover:text-orange ${className}`}
      aria-label="Scroll to content"
    >
      <span className="font-display text-xs uppercase tracking-[0.3em]">
        Scroll
      </span>
      <svg
        width="32"
        height="48"
        viewBox="0 0 32 48"
        fill="none"
        className="brutal-border rounded-full bg-yellow p-2"
        aria-hidden
      >
        <path
          d="M16 8v24M16 32l-6-6M16 32l6-6"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
