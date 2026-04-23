import type { Metadata } from "next";
import ContactSection from "@/components/contact/ContactSection";
import TestimonialSection from "@/components/contact/TestimonialSection";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch with Hasan for collaborations, freelance work, product builds, or web development opportunities.",
  path: "/contact",
  keywords: ["contact Hasan", "hire full-stack developer", "web developer contact"],
});

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
