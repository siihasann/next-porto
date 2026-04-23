import type { Metadata } from "next";
import AboutHeroSectionV2 from "@/components/about/AboutHeroSectionV2";
import { ExperiencesSection } from "@/components/about/ExperiencesSection";
import ServicesSection from "@/components/about/ServicesSection";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Learn more about Hasan, a full-stack developer based in Indonesia with a focus on thoughtful product building, clean execution, and real-world impact.",
  path: "/about",
  keywords: ["about Hasan", "developer profile", "full-stack developer Indonesia"],
});

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto w-full px-4 pb-16 pt-8 sm:px-8 lg:px-20">
        <AboutHeroSectionV2 />
        <ServicesSection />
        <ExperiencesSection />
      </main>
      <Footer />
    </div>
  );
}
