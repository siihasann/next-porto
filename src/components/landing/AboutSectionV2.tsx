"use client";

import { motion } from "framer-motion";
import { fadeInUpItem, staggerContainer } from "@/lib/animation-templates";

const aboutV2Content = {
  label: "About Me",
  image:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=80",
  imageAlt: "Portrait working profile",
  headlineLead:
    "I'm a multidisciplinary designer and developer focused on turning ideas into",
  headlineMuted: "visual experiences that feel clear, useful, and memorable.",
  description:
    "Every product I build starts with intent. Whether it is a brand system, a polished interface, or a front-end build, I bring clarity, empathy, and clean execution to the work.",
};

export default function AboutSectionV2() {
  return (
    <motion.section
      id="about"
      className="mx-auto mt-16 w-full max-w-7xl py-8 text-ink sm:mt-20 sm:py-12"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="grid gap-10 lg:grid-cols-[390px_minmax(0,1fr)] lg:grid-rows-[auto_1fr] lg:gap-x-12 lg:gap-y-14">
        <motion.div
          variants={fadeInUpItem}
          className="flex items-center gap-3 text-sm font-text text-ink lg:pt-2"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-ink" />
          <span>{aboutV2Content.label}</span>
        </motion.div>

        <motion.div
          variants={fadeInUpItem}
          className="max-w-4xl font-text text-[2rem] font-medium leading-[1.18] tracking-[-0.04em] text-ink sm:text-[2.6rem] lg:text-[3.8rem]"
        >
          {aboutV2Content.headlineLead}{" "}
          <span className="text-black/22">{aboutV2Content.headlineMuted}</span>
        </motion.div>

        <motion.div
          variants={fadeInUpItem}
          className="w-full max-w-[280px] overflow-hidden rounded-[2px] bg-white shadow-[0_18px_40px_-28px_rgba(15,23,42,0.4)]"
        >
          <img
            src={aboutV2Content.image}
            alt={aboutV2Content.imageAlt}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          variants={fadeInUpItem}
          className="max-w-xl font-text text-base leading-8 text-ink-muted sm:ml-auto sm:text-lg lg:max-w-md lg:pt-8"
        >
          {aboutV2Content.description}
        </motion.div>
      </div>
    </motion.section>
  );
}
