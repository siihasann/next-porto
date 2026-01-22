"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUpItem, staggerContainer } from "@/lib/animation-templates";
import { PinContainer } from "@/components/ui/3d-pin";
import {
  RiNextjsFill,
  RiReactjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { FiFigma } from "react-icons/fi";
import { SiPostgresql, SiPrisma } from "react-icons/si";
import { useState } from "react";
import { IconType } from "react-icons";

interface TechItem {
  name: string;
  icon: IconType;
}

interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tech: TechItem[];
  image: string;
  cta: string;
  href: string;
}

const featuredProjects: Project[] = [
  {
    id: "project-01",
    number: "01",
    title: "Interactive Portfolio Website",
    category: "Frontend Development · UI/UX",
    description:
      "A modern and interactive personal portfolio designed to showcase projects, skills, and experience.",
    tech: [
      { name: "Next.js", icon: RiNextjsFill },
      { name: "React", icon: RiReactjsFill },
      { name: "Tailwind CSS", icon: RiTailwindCssFill },
      { name: "GSAP", icon: RiSupabaseFill },
    ],
    image: "/images/project-01.jpg",
    cta: "View Project →",
    href: "#",
  },
  {
    id: "project-02",
    number: "02",
    title: "Company Profile & Branding Website",
    category: "Web Design · Branding",
    description:
      "A corporate website focused on building a strong visual identity and delivering a clear brand message. The design emphasizes typography, spacing",
    tech: [
      { name: "React", icon: RiReactjsFill },
      { name: "Tailwind CSS", icon: RiTailwindCssFill },
      { name: "Figma", icon: FiFigma },
    ],
    image: "/images/project-02.jpg",
    cta: "View Case Study →",
    href: "#",
  },
  {
    id: "project-03",
    number: "03",
    title: "Web Application Dashboard",
    category: "Full-Stack Development",
    description:
      "A web-based dashboard application for managing and monitoring data in real time. Designed with scalability in mind.",
    tech: [
      { name: "Next.js", icon: RiNextjsFill },
      { name: "Supabase", icon: RiSupabaseFill },
      { name: "Prisma", icon: SiPrisma },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
    image: "/images/project-03.jpg",
    cta: "View Project →",
    href: "#",
  },
];

// Mobile Card Component
function MobileProjectCard({ project }: { project: Project }) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <motion.a
      href={project.href}
      className="block w-full max-w-md mx-auto"
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className={`relative backdrop-blur-sm border border-white/10 rounded-2xl p-5 transition-all duration-300 ${
          isPressed
            ? "shadow-2xl shadow-orange-500/20 border-orange-500/30 -translate-y-1"
            : "shadow-lg"
        }`}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4 gap-2">
          <span className="text-xs uppercase tracking-[0.25em] text-orange-500 flex-shrink-0">
            Project {project.number}
          </span>
          <span className="rounded-full border border-orange-200/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-orange-500 text-right leading-tight">
            {project.category}
          </span>
        </div>

        {/* Image */}
        <div className="relative w-full h-36 sm:h-40 rounded-lg overflow-hidden border border-white/10 mb-4">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Title */}
        <h3 className="font-bold text-base sm:text-lg text-slate-100 mb-2 leading-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400 mb-3">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((item) => {
              const Icon = item.icon;
              return (
                <span
                  key={item.name}
                  className="inline-flex items-center gap-1.5 rounded-full border border-orange-400/20 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-orange-300"
                >
                  <Icon className="h-3.5 w-3.5 text-orange-400 flex-shrink-0" />
                  <span className="whitespace-nowrap">{item.name}</span>
                </span>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-5 flex items-center text-sm text-orange-400 font-medium">
          <span>{project.cta}</span>
        </div>
      </div>
    </motion.a>
  );
}

export default function FeaturedProjectsSection() {
  return (
    <motion.section
      className="mt-20 md:mt-40 px-4 md:px-6 lg:px-8 max-w-[1400px] mx-auto"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={fadeInUpItem} className="space-y-2 mb-8 md:mb-12">
        <h2 className="text-sm md:text-base tracking-[0.35em] md:tracking-[0.45em] text-gray-400 font-medium">
          PAST CLIENT
        </h2>
      </motion.div>

      {/* Mobile Layout */}
      <div className="flex flex-col gap-6 md:hidden">
        {featuredProjects.map((project) => (
          <MobileProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Desktop Layout with PinContainer */}
      <div className="hidden md:grid gap-10 lg:gap-12 md:grid-cols-2 xl:grid-cols-3">
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            className="h-[32rem] lg:h-[35rem] w-full flex items-center justify-center"
          >
            <PinContainer
              title={project.cta}
              href={project.href}
              containerClassName="w-full"
            >
              <div className="flex basis-full flex-col p-5 lg:p-6 tracking-tight text-slate-100/50 w-[20rem] lg:w-[24rem] h-[26rem] lg:h-[28rem]">
                {/* Header */}
                <div className="flex items-start justify-between mb-4 gap-2">
                  <span className="text-xs uppercase tracking-[0.3em] text-orange-500">
                    Project {project.number}
                  </span>
                  <span className="rounded-full border border-orange-200/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-500">
                    {project.category}
                  </span>
                </div>

                {/* Image */}
                <div className="mt-2 flex-1">
                  <div className="relative w-full h-40 rounded-lg overflow-hidden border border-white/10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="max-w-full !pb-2 !m-0 pt-2 font-bold text-lg text-slate-100">
                  {project.title}
                </h3>

                {/* Description */}
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </span>
                </div>

                {/* Tech Stack */}
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 mb-3">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((item) => {
                      const Icon = item.icon;
                      return (
                        <span
                          key={item.name}
                          className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-white/10 px-3 py-1 text-xs font-medium text-orange-300"
                        >
                          <Icon className="h-3.5 w-3.5 text-orange-400" />
                          {item.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
