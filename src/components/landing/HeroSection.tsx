"use client";

import { motion } from "framer-motion";
import {
  cardHover,
  fadeInUpItem,
  staggerContainer,
} from "@/lib/animation-templates";
import ExpandableButton from "../ui/ExpandableButton";
import HighlightButton from "../ui/HighlightButton";

const heroContent = {
  badge: "Portfolio 2024",
  title: "Hans Nadj",
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
    image:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=900&q=80",
    overlay:
      "radial-gradient(circle at top, rgba(42,42,42,0.9) 0%, transparent 55%)",
  },
  {
    id: "product-ui",
    eyebrow: "Product & UI",
    title: "Branding Project",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    overlay:
      "radial-gradient(circle at top right, rgba(48,48,48,0.9) 0%, transparent 60%)",
  },
];

export default function HeroSection() {
  return (
    <section className="surface-contrast rounded-[34px] py-14 text-center text-white shadow-[0_30px_60px_-40px_rgba(0,0,0,0.65)] sm:px-10 lg:px-16">
      <motion.div
        className="mx-auto flex max-w-7xl flex-col items-center gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.p
          variants={fadeInUpItem}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-300"
        >
          {heroContent.badge}
        </motion.p>
        <motion.h1
          variants={fadeInUpItem}
          className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
        >
          {heroContent.title}
          <br />
          {heroContent.subtitle}
        </motion.h1>
        <motion.p
          variants={fadeInUpItem}
          className="max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base"
        >
          {heroContent.description}
        </motion.p>
        <motion.div variants={fadeInUpItem}>
          <HighlightButton text="Contact Me" variant="orange" />
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-12 grid gap-6 text-left sm:grid-cols-2"
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
            className={`group relative h-96 overflow-hidden p-6 shadow-[0_20px_45px_-25px_rgba(0,0,0,0.9)] ${
              index === 0
                ? "rounded-3xl bg-[linear-gradient(135deg,rgba(20,20,20,0.9),rgba(0,0,0,0.7))]"
                : "rounded-[24px] bg-[linear-gradient(135deg,rgba(18,18,18,0.95),rgba(8,8,8,0.95))]"
            }`}
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
            <div className="relative z-10 flex h-full flex-col justify-between gap-16">
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-300">
                {highlight.eyebrow}
              </p>
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold">
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
