import { Navigation } from "@/components/layout/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Shell } from "@/components/sections/Shell";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Shell />
      </main>
    </>
  );
}
