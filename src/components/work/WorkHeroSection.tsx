"use client";

import { motion } from "framer-motion";
import { fadeInUpItem, staggerContainer } from "@/lib/animation-templates";

const heroHighlights = [
  {
    title: "Performance-led builds",
    description: "Fast, accessible interfaces with clean code structure.",
  },
  {
    title: "Design-minded execution",
    description: "Visual polish that translates into product trust.",
  },
  {
    title: "Collaborative delivery",
    description: "Clear handoff, documentation, and scalable systems.",
  },
];

export default function WorkHeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[28px] surface-contrast px-4 py-12 text-white shadow-[0_30px_60px_-40px_rgba(0,0,0,0.65)] sm:rounded-[34px] sm:px-8 sm:py-16 lg:px-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.18),_transparent_55%)]" />
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 -translate-y-1/2 translate-x-1/3 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl" />

      <motion.div
        className="relative mx-auto grid max-w-7xl gap-8 sm:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="space-y-5 sm:space-y-7">
          <motion.div
            variants={fadeInUpItem}
            className="flex items-center gap-4"
          >
            <span className="h-px w-12 bg-orange-400/70" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-300">
              Work
            </p>
          </motion.div>
          <motion.h1
            variants={fadeInUpItem}
            className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-6xl"
          >
            Selected Works
          </motion.h1>
          <motion.p
            variants={fadeInUpItem}
            className="max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base"
          >
            A curated selection of projects I've worked on, ranging from
            interactive websites and web applications to design-driven digital
            experiences. Each project is crafted with a strong focus on
            performance, usability, and clean code.
          </motion.p>
          <motion.div
            variants={fadeInUpItem}
            className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.25em] text-zinc-300 sm:gap-3"
          >
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">
              Interactive
            </span>
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">
              Design-driven
            </span>
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">
              Clean Code
            </span>
          </motion.div>
        </div>

        <motion.div variants={fadeInUpItem} className="space-y-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:p-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-orange-200 sm:text-xs">
              Focus
            </p>
            <h2 className="mt-3 font-display text-xl font-semibold sm:text-2xl">
              What You'll Find
            </h2>
          </div>
          <div className="grid gap-4">
            {heroHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-orange-400" />
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-zinc-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
