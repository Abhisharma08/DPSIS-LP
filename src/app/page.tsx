import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EligibilitySection from "@/components/EligibilitySection";
import FeatureCards from "@/components/FeatureCards";
import WhySchool from "@/components/WhySchool";
import JoinSection from "@/components/JoinSection";
import MissionVision from "@/components/MissionVision";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      {/* <EligibilitySection /> */}
      <FeatureCards />
      <JoinSection />
      <WhySchool />
      <MissionVision />
      <Footer />
    </main>
  );
}
