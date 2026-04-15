"use client";

import { motion } from "framer-motion";
import { fadeInUpItem, staggerContainer } from "@/lib/animation-templates";

const workHeroV2Content = {
  title: "WORK",
  headline: "Featured Work",
  description:
    "A selection of projects I’ve built, focusing on performance, scalability, and real-world impact.",
  marker: "(07)",
};

export default function WorkHeroSectionV2() {
  return (
    <motion.section
      className="relative overflow-hidden "
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <div className="relative flex min-h-[420px] flex-col justify-between px-4 pb-5 pt-6 sm:min-h-[520px] sm:px-8 sm:pb-8 sm:pt-8 lg:min-h-[550px] lg:pb-10 lg:pt-10">
        <motion.h1
          variants={fadeInUpItem}
          className="text-[4.6rem] font-extrabold uppercase leading-[0.82] text-[#242424] sm:text-[6.8rem] md:text-[8.8rem] lg:text-[250px]"
        >
          {workHeroV2Content.title}
        </motion.h1>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,32rem)_1fr_auto] lg:items-end lg:gap-8">
          <motion.div variants={fadeInUpItem} className="max-w-[32rem]">
            <h2 className="text-[1.5rem] font-medium leading-[1.08] tracking-[-0.05em] text-[#1f1f1f] sm:text-[2rem] lg:text-3xl">
              {workHeroV2Content.headline}
            </h2>
            <p className="mt-3 max-w-xl font-text text-sm leading-7 text-black/68 sm:text-[15px] lg:text-base lg:leading-8">
              {workHeroV2Content.description}
            </p>
          </motion.div>

          <div className="hidden lg:block" />

          <motion.div
            variants={fadeInUpItem}
            className="flex items-end lg:justify-end"
          >
            <span className="font-text text-xl font-medium tracking-[-0.05em] text-black/82 sm:text-2xl">
              {workHeroV2Content.marker}
            </span>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
