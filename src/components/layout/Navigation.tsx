"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/constants";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-sm brutal-border border-t-0 border-x-0"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8 md:py-5">
        <a
          href="#"
          className="font-display text-xl md:text-2xl uppercase tracking-tight transition-transform hover:-rotate-2"
        >
          MOOD<span className="text-orange">FUEL</span>
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-display text-sm uppercase tracking-wider transition-colors hover:text-orange hover:-rotate-1 inline-block"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#mood"
          className="brutal-border brutal-shadow-sm rounded-xl bg-orange px-4 py-2 font-display text-xs uppercase text-cream transition-all hover:bg-yellow hover:text-black hover:-rotate-1 md:px-6 md:py-3 md:text-sm"
        >
          Check In
        </a>
      </nav>
    </header>
  );
}
