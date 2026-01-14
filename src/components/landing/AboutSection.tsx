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
      className="mx-auto mt-16 grid w-full max-w-7xl grid-cols-12 items-start py-12 text-ink"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="col-span-12 flex min-w-0 flex-col gap-10 lg:col-span-5">
        <motion.p
          variants={fadeInUpItem}
          className="text-lg uppercase tracking-[0.45em] text-ink-muted"
        >
          {aboutContent.label}
        </motion.p>
        <motion.div
          variants={fadeInUpItem}
          className="relative aspect-square w-full max-w-[240px] rounded-full"
        >
          <img
            src={aboutContent.image}
            alt={aboutContent.name}
            className="absolute inset-2 h-[calc(100%-16px)] w-[calc(100%-16px)] rounded-full object-cover"
          />
        </motion.div>
      </div>
      <motion.div
        variants={fadeInUpItem}
        className="col-span-12 min-w-0 font-display text-3xl font-medium leading-[1.35] text-ink sm:text-4xl lg:col-span-7 lg:text-3xl"
      >
        {aboutContent.headline}
      </motion.div>
    </motion.section>
  );
}
