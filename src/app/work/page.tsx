import FeaturedProjectsSection from "@/components/work/FeaturedProjectsSection";
import ProcessSection from "@/components/work/ProcessSection";
import TechStackSection from "@/components/work/TechStackSection";
import WorkHeroSection from "@/components/work/WorkHeroSection";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function WorkPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto w-full px-20 pb-16 pt-10">
        <WorkHeroSection />
        <FeaturedProjectsSection />
        <ProcessSection />
        <TechStackSection />
        {/* <WorkCTASection /> */}
      </main>
      <Footer />
    </div>
  );
}
