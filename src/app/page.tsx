import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";
import { BrainOnline } from "@/components/sections/BrainOnline";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { PosterGallery } from "@/components/sections/PosterGallery";
import { Wellbeing } from "@/components/sections/Wellbeing";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Manifesto />
        <PosterGallery />
        <BrainOnline />
        <Wellbeing />
      </main>
      <Footer />
    </>
  );
}
