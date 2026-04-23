import type { Metadata } from "next";
import FeaturedProjectsSectionV2 from "@/components/work/FeaturedProjectsSectionV2";
import TechStackSection from "@/components/work/TechStackSection";
import WorkHeroSectionV2 from "@/components/work/WorkHeroSectionV2";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Work",
  description:
    "Browse selected projects by Hasan, covering product websites, dashboards, and performance-focused web experiences built for real-world use.",
  path: "/work",
  keywords: ["featured projects", "web development portfolio", "Next.js projects"],
});

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
