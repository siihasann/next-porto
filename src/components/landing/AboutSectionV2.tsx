"use client";

import { motion } from "framer-motion";
import {
  createTypewriterAnimation,
  fadeInUpItem,
  slideIn,
  staggerContainer,
} from "@/lib/animation-templates";

const aboutV2Content = {
  label: "About Me",
  image:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=80",
  imageAlt: "Full-Stack Developer",
  headlineLead:
    "I am a Diploma (D3) graduate in Information Systems from Bina Sarana Informatika University",
  headlineMuted: "with over one year of experience as a Full Stack Developer",
  description:
    "I am highly motivated, adaptable, and eager to continuously learn and take on new challenges in the field of technology development.",
};

const aboutHeadlineWords = [
  ...aboutV2Content.headlineLead.split(" ").map((word) => ({
    word,
    muted: false,
  })),
  ...aboutV2Content.headlineMuted.split(" ").map((word) => ({
    word,
    muted: true,
  })),
];

const aboutHeadlineTypewriter = createTypewriterAnimation({
  blur: 12,
  y: 20,
  duration: 0.8,
  staggerChildren: 0.03,
  delayChildren: 0.1,
});

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

        <motion.h2
          variants={aboutHeadlineTypewriter.container}
          aria-label={`${aboutV2Content.headlineLead} ${aboutV2Content.headlineMuted}`}
          className="max-w-4xl font-text text-[2rem] font-medium leading-[1.18] tracking-[-0.04em] text-ink sm:text-[2.6rem] lg:text-[3.8rem]"
        >
          <span
            aria-hidden="true"
            className="inline-flex flex-wrap gap-x-[0.16em] gap-y-[0.04em]"
          >
            {aboutHeadlineWords.map(({ word, muted }, index) => (
              <motion.span
                key={`${word}-${index}`}
                variants={aboutHeadlineTypewriter.item}
                className={`inline-block will-change-transform ${
                  muted ? "text-black/22" : ""
                }`}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </motion.h2>

        <motion.div
          variants={slideIn}
          custom={{ direction: "bottom", distance: 80, delay: 0.2 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.9 }}
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
          variants={slideIn}
          custom={{ direction: "bottom", distance: 80, delay: 0.2 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.9 }}
          className="max-w-xl font-text text-base leading-8 text-ink-muted sm:ml-auto sm:text-lg lg:max-w-md lg:pt-8"
        >
          {aboutV2Content.description}
        </motion.div>
      </div>
    </motion.section>
  );
}
