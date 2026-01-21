import AboutHeroSection from "@/components/about/AboutHeroSection";
import { ExperiencesSection } from "@/components/about/ExperiencesSection";
import ServicesSection from "@/components/about/ServicesSection";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto w-full px-4 pb-16 pt-8 sm:px-8 lg:px-20">
        <AboutHeroSection />
        <ServicesSection />
        <ExperiencesSection />
      </main>
      <Footer />
    </div>
  );
}
