"use client";

import { motion } from "framer-motion";
import { fadeInUpItem, staggerContainer } from "@/lib/animation-templates";
import ExpandableButton from "../ui/ExpandableButton";
import HighlightButton from "../ui/HighlightButton";
import LightRays from "../LightRays";
import { TextHoverEffect } from "../ui/text-hover-effect";

const heroContent = {
  badge: "Portfolio 2024",
  title: "Jhon Doe",
  subtitle: "Full-Stack Developer",
  description:
    "I craft clean, bold visuals for brands and digital products. From art direction to UI systems, I make ideas feel tangible and confident.",
  cta: {
    label: "Contact Me",
    icon: "→",
  },
};

const heroHighlights = [
  {
    id: "identity-brand",
    eyebrow: "Identity & Brand",
    title: "Branding Project",
    image: "/assets/images/home/content-home1.png",
    overlay:
      "radial-gradient(circle at top, rgba(42,42,42,0.9) 0%, transparent 55%)",
  },
  {
    id: "product-ui",
    eyebrow: "Product & UI",
    title: "Branding Project",
    image: "/assets/images/home/barongsolo.png",
    overlay:
      "radial-gradient(circle at top right, rgba(48,48,48,0.9) 0%, transparent 60%)",
  },
];

export default function HeroSection() {
  return (
    <section className="surface-contrast relative overflow-hidden rounded-[28px] px-4 py-12 text-center text-white shadow-[0_30px_60px_-40px_rgba(0,0,0,0.65)] sm:rounded-[34px] sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] sm:h-[520px] lg:h-[600px]">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays opacity-80"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>
      <div className="mx-auto flex w-full max-w-[1900px] items-center justify-center overflow-visible px-1 sm:px-4 lg:px-5">
        <TextHoverEffect text="SANS LABS" />
      </div>

      {/* <motion.div
        className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-6 "
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.p
          variants={fadeInUpItem}
          className="text-sm font-semibold font-heading uppercase tracking-[0.3em] text-[#84b179]"
        >
          {heroContent.badge}
        </motion.p>
        <motion.h1
          variants={fadeInUpItem}
          className="text-4xl font-extralight font-heading leading-tight  sm:text-5xl lg:text-6xl"
        >
          {heroContent.title}
          <br />
          {heroContent.subtitle}
        </motion.h1>
        <motion.p
          variants={fadeInUpItem}
          className="max-w-2xl text-lg font-tagline leading-7 text-zinc-300"
        >
          {heroContent.description}
        </motion.p>
        <motion.div variants={fadeInUpItem}>
          <HighlightButton text="Contact Me" variant="green" />
        </motion.div>
      </motion.div> */}

      <motion.div
        className="relative z-10 mt-12 grid gap-5 text-left sm:grid-cols-2 sm:gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {heroHighlights.map((highlight, index) => (
          <motion.article
            key={highlight.id}
            custom={index}
            variants={fadeInUpItem}
            // whileHover="hover"
            className={`group relative h-72 overflow-hidden p-5 shadow-[0_20px_45px_-25px_rgba(0,0,0,0.9)] sm:h-80 sm:p-6 lg:h-96 `}
          >
            <motion.div
              className="absolute inset-0 opacity-70"
              variants={fadeInUpItem}
              style={{
                backgroundImage: `${highlight.overlay}, url('${highlight.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="relative z-10 flex h-full flex-col justify-between gap-10 sm:gap-16">
              <p className="text-xs font-heading uppercase tracking-[0.25em] text-zinc-300">
                {highlight.eyebrow}
              </p>
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-lg font-semibold">
                  {highlight.title}
                </h3>
                <ExpandableButton />
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
