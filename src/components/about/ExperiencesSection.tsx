"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  CheckCircleIcon,
  CheckLineIcon,
  Sparkles,
} from "lucide-react";
import { Timeline } from "@/components/ui/timeline";
import { fadeInUpItem, staggerContainer } from "@/lib/animation-templates";

// Main Experience Section Component
export function ExperiencesSection() {
  const data = [
    {
      title: "2024",
      paragraphs: [
        "Built and launched Aceternity UI and Aceternity UI Pro from scratch.",
      ],
      images: [
        "https://assets.aceternity.com/templates/startup-1.webp",
        "https://assets.aceternity.com/templates/startup-2.webp",
        "https://assets.aceternity.com/templates/startup-3.webp",
        "https://assets.aceternity.com/templates/startup-4.webp",
      ],
      bullets: [],
    },
    {
      title: "Early 2023",
      paragraphs: [
        "I usually run out of copy, but when I see content this big, I try to integrate lorem ipsum.",
        "Lorem ipsum is for people who are too lazy to write copy. But we are not. Here are some more example of beautiful designs I built.",
      ],
      images: [
        "https://assets.aceternity.com/pro/hero-sections.png",
        "https://assets.aceternity.com/features-section.png",
        "https://assets.aceternity.com/pro/bento-grids.png",
        "https://assets.aceternity.com/cards.png",
      ],
      bullets: [],
    },
    {
      title: "Changelog",
      paragraphs: ["Deployed 5 new components on Aceternity today."],
      images: [
        "https://assets.aceternity.com/pro/hero-sections.png",
        "https://assets.aceternity.com/features-section.png",
        "https://assets.aceternity.com/pro/bento-grids.png",
        "https://assets.aceternity.com/cards.png",
      ],
      bullets: [
        "Card grid component",
        "Startup template Aceternity",
        "Random file upload lol",
        "Himesh Reshammiya Music CD",
        "Salman Bhai Fan Club registrations open",
      ],
    },
  ];

  // Enhanced Image Grid with hover effects
  const ImageGrid = ({
    images,
    title,
  }: {
    images: string[];
    title: string;
  }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={`${title}-img-${index}`}
            className="relative overflow-hidden rounded-lg group cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ y: -5 }}
          >
            <img
              src={image}
              alt="template"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 transition-transform duration-300 group-hover:scale-110"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-orange-500/80 via-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4"
              initial={false}
              animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
            >
              <Sparkles className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    );
  };

  const timelineData = data.map((entry) => ({
    title: entry.title,
    content: (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {entry.paragraphs.map((paragraph, index) => (
          <motion.p
            key={`${entry.title}-p-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="mb-4 text-xs font-normal text-neutral-700 md:text-sm dark:text-neutral-300 leading-relaxed"
          >
            {paragraph}
          </motion.p>
        ))}

        {entry.bullets.length > 0 && (
          <motion.div
            className="mb-8 space-y-2 bg-gradient-to-br from-orange-50 to-transparent dark:from-orange-950/20 dark:to-transparent p-4 rounded-lg border border-orange-100 dark:border-orange-900/30"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {entry.bullets.map((item, idx) => (
              <motion.div
                key={`${entry.title}-${item}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 cursor-default"
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: idx * 0.2,
                  }}
                >
                  <CheckCircleIcon className="w-4 h-4" />
                </motion.span>
                {item}
              </motion.div>
            ))}
          </motion.div>
        )}

        {entry.images.length > 0 && (
          <ImageGrid images={entry.images} title={entry.title} />
        )}
      </motion.div>
    ),
  }));

  return (
    <motion.section
      className="relative w-full overflow-clip"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div variants={fadeInUpItem}>
        <Timeline data={timelineData} />
      </motion.div>
    </motion.section>
  );
}
