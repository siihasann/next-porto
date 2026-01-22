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
      <main className="mx-auto w-full px-4 pb-16 pt-8 sm:px-8 lg:px-20">
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
