import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { VehicleExperience } from "@/components/home/VehicleExperience";
import { PremiumProcess } from "@/components/home/PremiumProcess";
import { HomeHighlights } from "@/components/home/HomeHighlights";

export default function Home() {
  return (
    <main className="site-shell">
      <Navbar />
      <HeroSection />
      <PremiumProcess />
      <VehicleExperience />
      <HomeHighlights />
    </main>
  );
}
