"use client";

import { motion } from "framer-motion";
import HighlightButton from "@/components/ui/HighlightButton";
import { fadeInUpItem, staggerContainer } from "@/lib/animation-templates";

export default function WorkCTASection() {
  return (
    <motion.section
      className="mt-16 rounded-[34px] surface-contrast px-8 py-12 text-white shadow-[0_30px_60px_-40px_rgba(0,0,0,0.65)] sm:px-12"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="mx-auto flex max-w-5xl flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between"
        variants={fadeInUpItem}
      >
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-300">
            Have a Project in Mind?
          </p>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Have a Project in Mind?
          </h2>
          <p className="max-w-xl text-sm leading-7 text-zinc-300 sm:text-base">
            I'm always open to new opportunities, collaborations, and exciting
            challenges. Let's work together to turn ideas into meaningful digital
            products.
          </p>
        </div>
        <HighlightButton text="Contact Me" variant="orange" />
      </motion.div>
    </motion.section>
  );
}
