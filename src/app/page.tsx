"use client";

import { motion } from "framer-motion";
import AboutSection from "@/components/landing/AboutSection";
import ClientReviewSection from "@/components/landing/ClientReview";
import HeroSection from "@/components/landing/HeroSection";
import PastClientsSection from "@/components/landing/PastClient";
import ServicesSection from "@/components/landing/ServicesSection";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { staggerContainer } from "@/lib/animation-templates";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <motion.main
        className="mx-auto w-full px-20 pb-16 pt-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PastClientsSection />
        <ClientReviewSection />
      </motion.main>
      <Footer />
    </div>
  );
}
