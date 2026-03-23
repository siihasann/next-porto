"use client";

import { motion } from "framer-motion";
import { fadeInUpItem, staggerContainer } from "@/lib/animation-templates";

const aboutHeroV2Content = {
  title: "About",
  intro:
    "Discover the journey, mindset, and creative drive that shape every project I take on.",
  displayName: "Hanif",
  role: "Designer & Front-End Developer Based in Indonesia",
  eyebrow: "About Me",
  heroImage: "/assets/images/photo/my-photo.png",
  heroAlt: "Portrait profile",
  highlightLead:
    "I'm a multidisciplinary designer and developer with years of experience turning ideas into",
  highlightMuted: "visual experiences that connect, inspire, and convert.",
  body: "Every product I craft is rooted in purpose. Whether it is a mobile experience, a visual rebrand, or a complete web presence, I bring empathy, strategy, and clean aesthetics to the table.",
};

export default function AboutHeroSectionV2() {
  return (
    <motion.section
      className="mx-auto w-full max-w-7xl py-4 text-ink sm:py-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div
        variants={fadeInUpItem}
        className="max-w-4xl space-y-4 sm:space-y-5"
      >
        <h1 className="font-text text-[3.5rem] font-medium tracking-[-0.08em] text-ink sm:text-[5.2rem] lg:text-[6.2rem] lg:leading-none">
          {aboutHeroV2Content.title}
        </h1>
        <p className="max-w-2xl font-text text-sm leading-7 text-ink-muted sm:text-base">
          {aboutHeroV2Content.intro}
        </p>
      </motion.div>

      <motion.div
        variants={fadeInUpItem}
        className="relative mt-8 overflow-hidden bg-[#0b0b0d] text-white sm:mt-12"
      >
        <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.72fr)] lg:gap-0">
          <div className="flex h-full flex-col justify-end px-6 py-8 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
            <span className="font-text text-xs uppercase tracking-[0.3em] text-white/45">
              {aboutHeroV2Content.eyebrow}
            </span>
            <h2 className="mt-4 font-text text-[3.4rem] font-medium tracking-[-0.1em] text-white sm:text-[4.9rem] lg:text-[7.2rem] lg:leading-[0.9]">
              {aboutHeroV2Content.displayName}
            </h2>
            <p className="mt-4 max-w-md font-text text-base leading-relaxed text-white/72 sm:text-lg lg:text-[1.7rem] lg:leading-[1.15]">
              {aboutHeroV2Content.role}
            </p>
          </div>

          <div className="relative flex items-end justify-center overflow-hidden bg-[#121214] px-4 pt-6 sm:px-8 lg:px-0 lg:pt-0">
            <div className="absolute inset-y-0 left-0 hidden w-px bg-white/10 lg:block" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/30 to-transparent" />
            <img
              src={aboutHeroV2Content.heroImage}
              alt={aboutHeroV2Content.heroAlt}
              loading="eager"
              decoding="async"
              className="relative mb-[-60px] z-10 h-[320px] w-auto object-contain grayscale sm:h-[460px] lg:h-[620px]"
            />
          </div>
        </div>
      </motion.div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[400px_minmax(0,1fr)] lg:grid-rows-[auto_1fr] lg:gap-x-12 lg:gap-y-14">
        <motion.div
          variants={fadeInUpItem}
          className="flex items-center gap-3 text-sm font-text text-ink"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-ink" />
          <span>{aboutHeroV2Content.eyebrow}</span>
        </motion.div>

        <motion.div
          variants={fadeInUpItem}
          className="max-w-4xl font-text text-[2rem] font-medium leading-[1.18] tracking-[-0.04em] text-ink sm:text-[2.6rem] lg:text-[3.85rem]"
        >
          {aboutHeroV2Content.highlightLead}{" "}
          <span className="text-black/22">
            {aboutHeroV2Content.highlightMuted}
          </span>
        </motion.div>

        <motion.div
          variants={fadeInUpItem}
          className="w-full max-w-[780px] overflow-hidden bg-white shadow-[0_18px_40px_-28px_rgba(15,23,42,0.4)]"
        >
          <img
            src={aboutHeroV2Content.heroImage}
            alt={aboutHeroV2Content.heroAlt}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] h-full w-full object-cover object-top"
          />
        </motion.div>

        <motion.div
          variants={fadeInUpItem}
          className="max-w-xl font-text text-base leading-8 text-ink-muted sm:ml-auto sm:text-lg lg:max-w-md lg:pt-8"
        >
          {aboutHeroV2Content.body}
        </motion.div>
      </div>
    </motion.section>
  );
}
