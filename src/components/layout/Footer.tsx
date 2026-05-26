"use client";

import { useScrollReveal } from "@/hooks/useGsap";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { section } from "@/lib/sectionStyles";

export function Footer() {
  const footerRef = useScrollReveal<HTMLElement>({ y: 30, stagger: 0.1 });

  return (
    <footer
      ref={footerRef}
      className={`${section} bg-orange text-cream md:py-20`}
    >
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="mb-10 md:mb-14">
          <h2 className="font-display text-[clamp(2.5rem,10vw,6rem)] uppercase leading-[0.85]">
            MOOD
            <span className="block text-yellow">FUEL</span>
          </h2>
          <p className="mt-4 max-w-md text-sm opacity-90 md:text-base">
            An experimental digital wellbeing campaign. Made with noise,
            care, and too much coffee.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          <nav data-reveal aria-label="Footer navigation">
            <h3 className="mb-4 font-display text-xs uppercase tracking-[0.3em] opacity-70">
              Navigate
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-block font-display text-xl uppercase transition-all hover:translate-x-1 hover:text-yellow md:text-2xl"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav data-reveal aria-label="Social links">
            <h3 className="mb-4 font-display text-xs uppercase tracking-[0.3em] opacity-70">
              Connect
            </h3>
            <ul className="space-y-2">
              {SOCIAL_LINKS.map((link) => {
                const isExternal = link.href.startsWith("http");
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(isExternal && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                      className="inline-block font-display text-xl uppercase transition-all hover:-rotate-1 hover:text-black md:text-2xl"
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div data-reveal className="flex flex-col justify-end">
            <div
              id="newsletter"
              className="brutal-border rotate-1 rounded-2xl bg-yellow p-5 text-black"
            >
              <p className="font-display text-lg uppercase">Newsletter</p>
              <p className="mt-1.5 text-sm font-medium">
                Weekly brain care. Zero spam. Maximum vibes.
              </p>
              <div className="mt-3 flex gap-2">
                <input
                  type="email"
                  placeholder="your@brain.com"
                  className="flex-1 rounded-xl border-4 border-black bg-cream px-3 py-2.5 text-sm font-medium placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-blue"
                  aria-label="Email for newsletter"
                />
                <button
                  type="button"
                  className="rounded-xl border-4 border-black bg-black px-4 py-2.5 font-display text-xs uppercase text-cream transition-colors hover:bg-blue"
                >
                  Go
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          data-reveal
          className="mt-10 flex flex-col gap-3 border-t-4 border-cream/30 pt-6 text-sm opacity-80 md:flex-row md:items-center md:justify-between"
        >
          <p>© 2026 MOOD-FUEL. All rights reserved.</p>
          <p className="font-display uppercase tracking-wider">
            Scroll softer. Live louder.
          </p>
        </div>
      </div>
    </footer>
  );
}
