export const COLORS = {
  orange: "#FF5A1F",
  yellow: "#FFD400",
  blue: "#0057FF",
  cream: "#FFF8E7",
  black: "#111111",
} as const;

export const NAV_LINKS = [
  { label: "Brain", href: "#brain" },
  { label: "Manifesto", href: "#manifesto" },
  { label: "Mood", href: "#mood" },
  { label: "Posters", href: "#posters" },
] as const;

export const BRAIN_TOPICS = [
  {
    title: "Sleep",
    emoji: "😴",
    description: "Your brain at 3am scrolling. Again.",
    color: "bg-blue",
    rotate: "-rotate-2",
  },
  {
    title: "Focus",
    emoji: "🎯",
    description: "47 tabs. Zero tasks completed.",
    color: "bg-yellow",
    rotate: "rotate-1",
  },
  {
    title: "Burnout",
    emoji: "🔥",
    description: "Hustle culture called. You didn't answer.",
    color: "bg-orange",
    rotate: "-rotate-1",
  },
  {
    title: "Dopamine",
    emoji: "⚡",
    description: "One more notification won't hurt. (It will.)",
    color: "bg-cream",
    rotate: "rotate-2",
  },
  {
    title: "Creativity",
    emoji: "✨",
    description: "Your best ideas live in the shower.",
    color: "bg-blue",
    rotate: "rotate-0",
  },
] as const;
