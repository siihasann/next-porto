"use client";

import { motion } from "framer-motion";
import { fadeInUpItem, staggerContainer } from "@/lib/animation-templates";

const aboutContent = {
  label: "About Me",
  name: "Donnie Alfian",
  role: "Visual Designer",
  location: "Jakarta, Indonesia",
  image:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80",
  headline:
    "Hi I’m Donnie and I am passionate about everything that has to do with Digital Design and Art Direction. I enjoy working with agencies and enthusiastic people who want to solve problems through beautiful designs and experiences.",
};

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="mx-auto mt-14 grid w-full max-w-7xl grid-cols-12 items-start gap-8py-10 text-ink sm:mt-16 sm:gap-10 sm:px-6 sm:py-12 lg:px-16"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="col-span-12 flex min-w-0 flex-col items-center gap-8 lg:col-span-5 lg:items-start">
        <motion.p
          variants={fadeInUpItem}
          className="text-xs uppercase tracking-[0.35em] text-ink-muted sm:text-sm lg:text-lg"
        >
          {aboutContent.label}
        </motion.p>
        <motion.div
          variants={fadeInUpItem}
          className="relative aspect-square w-full max-w-[220px] rounded-full sm:max-w-[240px]"
        >
          <img
            src={aboutContent.image}
            alt={aboutContent.name}
            loading="lazy"
            decoding="async"
            className="absolute inset-2 h-[calc(100%-16px)] w-[calc(100%-16px)] rounded-full object-cover"
          />
        </motion.div>
      </div>
      <motion.div
        variants={fadeInUpItem}
        className="col-span-12 mx-auto w-full min-w-0 break-words px-2 text-center font-display text-base font-medium leading-7 text-ink sm:max-w-lg sm:px-0 sm:text-lg sm:leading-8 md:max-w-xl md:text-xl md:leading-9 lg:col-span-7 lg:max-w-2xl lg:text-left lg:text-3xl lg:leading-[1.4]"
      >
        {aboutContent.headline}
      </motion.div>
    </motion.section>
  );
}
