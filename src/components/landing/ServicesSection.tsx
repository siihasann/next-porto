"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Carousel from "../Carousel";
import { fadeInUpItem, staggerContainer } from "@/lib/animation-templates";

const services = [
  { label: "UI/UX Design" },
  { label: "Brand Identity" },
  { label: "Web Development" },
  { label: "Art Direction" },
];

export default function ServicesSection() {
  const [highlightedService, setHighlightedService] = useState(1);
  const [carouselSize, setCarouselSize] = useState({
    width: 1230,
    height: 600,
  });

  useEffect(() => {
    const updateSize = () => {
      const viewportWidth =
        typeof window !== "undefined" ? window.innerWidth : 1200;

      if (viewportWidth < 640) {
        setCarouselSize({
          width: Math.min(360, viewportWidth - 32),
          height: 360,
        });
        return;
      }

      if (viewportWidth < 1024) {
        setCarouselSize({
          width: Math.min(760, viewportWidth - 64),
          height: 480,
        });
        return;
      }

      setCarouselSize({ width: 1230, height: 600 });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <motion.section
      className="surface-contrast mt-16 rounded-[28px] px-4 py-12 text-white shadow-[0_30px_60px_-40px_rgba(0,0,0,0.65)] sm:rounded-[34px] sm:px-10 lg:px-16"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="mx-auto flex max-w-7xl flex-col items-center gap-5 text-center"
        variants={fadeInUpItem}
      >
        <motion.p
          className="text-xs font-text font-light tracking-[0.12em] text-white/78 sm:text-sm lg:text-lg"
          variants={fadeInUpItem}
        >
          Expertise
        </motion.p>

        <motion.h2
          className="max-w-5xl font-text text-4xl font-medium tracking-[-0.06em] text-white sm:text-6xl lg:text-[5.7rem] lg:leading-[0.95]"
          variants={fadeInUpItem}
        >
          My Core Capability
        </motion.h2>

        <motion.p
          className="max-w-2xl font-text text-sm leading-7 text-white/65 sm:text-base"
          variants={fadeInUpItem}
        >
          Here&apos;s what I&apos;ve mastered over the years and continue to
          refine through every project I build.
        </motion.p>

        <motion.div
          className="mt-4 flex w-full flex-col items-center"
          variants={staggerContainer}
        >
          {services.map((service, index) => {
            const isHighlighted = highlightedService === index;

            return (
              <motion.button
                type="button"
                key={service.label}
                variants={fadeInUpItem}
                onMouseEnter={() => setHighlightedService(index)}
                onFocus={() => setHighlightedService(index)}
                onClick={() => setHighlightedService(index)}
                className="block w-full cursor-pointer border-0 bg-transparent px-0 py-1 text-center outline-none sm:py-2"
              >
                <span
                  className="inline-block font-text text-[2.15rem] font-medium uppercase tracking-[-0.07em] text-transparent transition-all duration-300 sm:text-[3.35rem] lg:text-[5.15rem] lg:leading-[0.95]"
                  style={{
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    backgroundImage: isHighlighted
                      ? "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.94) 100%)"
                      : "linear-gradient(180deg, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0.08) 100%)",
                    textShadow: isHighlighted
                      ? "0 0 22px rgba(255,255,255,0.08)"
                      : "none",
                  }}
                >
                  {service.label}
                </span>
              </motion.button>
            );
          })}
        </motion.div>
      </motion.div>

      <motion.p
        className="text-xs font-text font-light tracking-[0.12em] text-white/78 sm:text-sm lg:text-lg"
        variants={fadeInUpItem}
      >
        Selected Projects
      </motion.p>

      <motion.article
        className="mt-6 overflow-hidden rounded-[24px] bg-[#262828] shadow-[0_30px_60px_-45px_rgba(0,0,0,0.95)] sm:rounded-[28px]"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div
          variants={fadeInUpItem}
          className="relative h-[360px] sm:h-[480px] lg:h-[600px]"
        >
          <Carousel
            baseWidth={carouselSize.width}
            baseHeight={carouselSize.height}
            autoplay
            loop
          />
        </motion.div>
      </motion.article>
    </motion.section>
  );
}
