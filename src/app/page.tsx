import { Navigation } from "@/components/layout/Navigation";
import { BrainOnline } from "@/components/sections/BrainOnline";
import { Hero } from "@/components/sections/Hero";
import { Shell } from "@/components/sections/Shell";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Shell />
        <BrainOnline />
      </main>
    </>
  );
}
