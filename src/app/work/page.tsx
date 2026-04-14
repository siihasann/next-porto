import FeaturedProjectsSectionV2 from "@/components/work/FeaturedProjectsSectionV2";
import ProcessSection from "@/components/work/ProcessSection";
import TechStackSection from "@/components/work/TechStackSection";
import WorkHeroSectionV2 from "@/components/work/WorkHeroSectionV2";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function WorkPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto w-full px-4 pb-16 pt-8 sm:px-8 lg:px-20">
        <WorkHeroSectionV2 />
        <FeaturedProjectsSectionV2 />
        {/* <ProcessSection /> */}
        <TechStackSection />
        {/* <WorkCTASection /> */}
      </main>
      <Footer />
    </div>
  );
}
