import AboutHeroSection from "@/components/about/AboutHeroSection";
import AboutSection from "@/components/landing/AboutSection";
import ClientReviewSection from "@/components/landing/ClientReview";
import HeroSection from "@/components/landing/HeroSection";
import PastClientsSection from "@/components/landing/PastClient";
import ServicesSection from "@/components/landing/ServicesSection";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto w-full px-20 pb-16 pt-10">
        <AboutHeroSection />
      </main>
      <Footer />
    </div>
  );
}
