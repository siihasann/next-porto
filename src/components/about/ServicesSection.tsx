"use client";

import { useEffect, useState } from "react";
import { Code2, LayoutGrid, Megaphone, Paintbrush } from "lucide-react";
import { motion } from "framer-motion";
import Carousel from "../Carousel";
import { fadeInUpItem, staggerContainer } from "@/lib/animation-templates";

const services = [
  { label: "Branding Design", Icon: Paintbrush },
  { label: "UI/UX Design", Icon: LayoutGrid },
  { label: "Development", Icon: Code2 },
  { label: "Digital Marketing", Icon: Megaphone },
];

const projects = [
  {
    id: "01",
    title: "Designing a Social Media App for the Black Experience",
    type: ["Branding Project", "Web Design"],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "02",
    title: "Minimal Commerce UI for Lifestyle Products",
    type: ["UI/UX Design", "Mobile App"],
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "03",
    title: "Rebrand System for a Creative Studio",
    type: ["Branding Project", "Art Direction"],
    image:
      "https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];
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

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

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

      <motion.div
        variants={fadeInUpItem}
        className="mt-10 flex flex-col gap-4 text-xs uppercase tracking-[0.25em] text-zinc-400 sm:flex-row sm:items-center sm:justify-between sm:text-sm sm:tracking-[0.3em] lg:text-lg"
      >
        <span>Selected Project</span>
        {/* <div className="flex items-center gap-3">
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            onClick={handlePrev}
            aria-label="Previous project"
          >
            ←
          </button>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            onClick={handleNext}
            aria-label="Next project"
          >
            →
          </button>
        </div> */}
      </motion.div>

      <motion.article
        variants={fadeInUpItem}
        className="mt-6 overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#0a0a0a,rgba(15,15,15,0.9))] shadow-[0_30px_60px_-45px_rgba(0,0,0,0.95)] sm:rounded-[28px]"
      >
        <div className="relative h-[360px] sm:h-[480px] lg:h-[600px]">
          <Carousel
            baseWidth={carouselSize.width}
            baseHeight={carouselSize.height}
            autoplay
            loop
          />
        </div>
        {/* <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="grid w-full shrink-0 gap-6 p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-10"
              >
                <div className="relative min-h-[260px] overflow-hidden rounded-[22px]">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at top right, rgba(255,255,255,0.12) 0%, transparent 55%), url('" +
                        project.image +
                        "')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="relative z-10 flex h-full flex-col justify-between p-6">
                    <span className="text-xs uppercase tracking-[0.4em] text-zinc-300">
                      {project.id}/{projects.length.toString().padStart(2, "0")}
                    </span>
                    <div className="flex items-center gap-3 text-sm text-zinc-200">
                      <span className="h-10 w-10 rounded-full bg-white/10" />
                      <span className="max-w-[12rem] text-left">
                        {project.title}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-8">
                  <div className="grid gap-6 text-sm text-zinc-200 sm:grid-cols-2">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-zinc-400">
                        Project
                      </p>
                      <p className="mt-3 font-semibold text-white">
                        {project.title}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-zinc-400">
                        Type
                      </p>
                      <p className="mt-3 font-semibold text-white">
                        {project.type[0]}
                      </p>
                      <p className="mt-2 text-zinc-400">{project.type[1]}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-zinc-400">
                    <span className="h-px w-10 bg-white/20" />
                    <span>Case Study</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </motion.article>
    </motion.section>
  );
}
