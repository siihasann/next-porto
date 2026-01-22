import AboutHeroSection from "@/components/about/AboutHeroSection";
import ContactSection from "@/components/contact/ContactSection";
import TestimonialSection from "@/components/contact/TestimonialSection";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto w-full px-4 pb-16 pt-8 sm:px-8 lg:px-20">
        <ContactSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
}
