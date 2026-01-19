"use client";

import { motion } from "framer-motion";
import { fadeInUpItem, staggerContainer } from "@/lib/animation-templates";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
  SiPrisma,
  SiGreensock,
  SiThreedotjs,
  SiNodedotjs,
  SiPostgresql,
} from "react-icons/si";

const techStackGroups = [
  {
    category: "Frontend",
    color: "text-blue-500",
    technologies: [
      {
        title: "JavaScript",
        icon: <SiJavascript className="h-full w-full text-yellow-500" />,
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        title: "TypeScript",
        icon: <SiTypescript className="h-full w-full text-blue-600" />,
        href: "https://www.typescriptlang.org/",
      },
      {
        title: "React",
        icon: <SiReact className="h-full w-full text-cyan-500" />,
        href: "https://react.dev/",
      },
      {
        title: "Next.js",
        icon: (
          <SiNextdotjs className="h-full w-full text-neutral-800 dark:text-white" />
        ),
        href: "https://nextjs.org/",
      },
      {
        title: "Tailwind CSS",
        icon: <SiTailwindcss className="h-full w-full text-cyan-400" />,
        href: "https://tailwindcss.com/",
      },
    ],
  },
  {
    category: "Backend",
    color: "text-green-500",
    technologies: [
      {
        title: "Node.js",
        icon: <SiNodedotjs className="h-full w-full text-green-600" />,
        href: "https://nodejs.org/",
      },
      {
        title: "Supabase",
        icon: <SiSupabase className="h-full w-full text-green-500" />,
        href: "https://supabase.com/",
      },
      {
        title: "Prisma",
        icon: (
          <SiPrisma className="h-full w-full text-neutral-800 dark:text-white" />
        ),
        href: "https://www.prisma.io/",
      },
    ],
  },
  {
    category: "Database & Tools",
    color: "text-purple-500",
    technologies: [
      {
        title: "PostgreSQL",
        icon: <SiPostgresql className="h-full w-full text-blue-700" />,
        href: "https://www.postgresql.org/",
      },
      {
        title: "GSAP",
        icon: <SiGreensock className="h-full w-full text-green-600" />,
        href: "https://greensock.com/gsap/",
      },
      {
        title: "Three.js",
        icon: (
          <SiThreedotjs className="h-full w-full text-neutral-800 dark:text-white" />
        ),
        href: "https://threejs.org/",
      },
    ],
  },
];

export default function TechStackSection() {
  return (
    <motion.section
      className="mt-40 mb-40"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          {/* Column 1: Section Title & Description */}
          <motion.div
            variants={fadeInUpItem}
            className="space-y-6 lg:sticky lg:top-8 lg:self-start"
          >
            <div className="space-y-3">
              <p className="text-base font-semibold uppercase tracking-[0.3em] text-ink-muted">
                Tech Stack
              </p>
              <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                Technologies I Work With
              </h2>
            </div>
            <p className="text-sm leading-7 text-ink-muted">
              A collection of modern tools and frameworks I use to build
              scalable, performant, and beautiful web applications. From
              frontend to backend, I leverage the best technologies to deliver
              exceptional results.
            </p>
          </motion.div>

          {/* Column 2: Categories + Tech Stack Icons */}
          <div className="space-y-6">
            {techStackGroups.map((group, index) => (
              <motion.div
                key={group.category}
                variants={fadeInUpItem}
                custom={index}
                className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white/70 px-6 py-5 shadow-[var(--shadow-elevated)] backdrop-blur"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold uppercase tracking-[0.3em] text-ink-muted">
                      {group.category}
                    </h3>
                    {/* <span className={`text-xs font-semibold uppercase tracking-[0.25em] ${group.color}`}>
                      Focus
                    </span> */}
                  </div>
                  <div className="flex items-center justify-start">
                    <FloatingDock
                      items={group.technologies}
                      desktopClassName="bg-transparent border-0 shadow-none"
                    />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-500 ease-out group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* 3 Column Layout */}
    </motion.section>
  );
}
