import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { FaqSection } from "@/components/home/FaqSection";
import { VehicleExperience } from "@/components/home/VehicleExperience";

export default function Home() {
  return (
    <main className="site-shell">
      <Navbar />
      <HeroSection />
      <VehicleExperience />
      <FaqSection />
    </main>
  );
}
