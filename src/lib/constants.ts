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

export const MOODS = [
  { id: "wired", label: "WIRED", emoji: "⚡", stat: "847% overstimulated" },
  { id: "foggy", label: "FOGGY", emoji: "🌫️", stat: "12 tabs open, 0 remembered" },
  { id: "buzzing", label: "BUZZING", emoji: "🐝", stat: "Notifications: ∞" },
  { id: "empty", label: "EMPTY", emoji: "🫥", stat: "Screen time: don't ask" },
  { id: "spark", label: "SPARK", emoji: "✨", stat: "Creative peak: 2:47am" },
] as const;

export type PosterCampaign = {
  title: string;
  subtitle: string;
  gradient: string;
  image?: string;
};

export const POSTERS: readonly PosterCampaign[] = [
  {
    title: "UNPLUG THE ALGORITHM",
    subtitle: "Campaign 01",
    gradient: "from-orange to-yellow",
    image: "/poster1.png",
  },
  {
    title: "REST IS RESISTANCE",
    subtitle: "Campaign 02",
    gradient: "from-blue to-cream",
    image: "/poster2.png",
  },
  {
    title: "YOUR ATTENTION IS SACRED",
    subtitle: "Campaign 03",
    gradient: "from-yellow to-orange",
    image: "/poster3.jpg",
  },
  {
    title: "LOG OFF. REFUEL.",
    subtitle: "Campaign 04",
    gradient: "from-blue to-yellow",
    image: "/poster4.jpg",
  },
  {
    title: "BRAIN CARE IS SELF CARE",
    subtitle: "Campaign 05",
    gradient: "from-orange to-blue",
    image: "/poster5.jpg",
  },
] as const;

export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/accounts/login/",
  },
  { label: "Twitter", href: "https://x.com/i/flow/login" },
  { label: "TikTok", href: "https://www.tiktok.com/login" },
  { label: "Newsletter", href: "#newsletter" },
] as const;
