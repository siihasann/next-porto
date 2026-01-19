"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUpItem, staggerContainer } from "@/lib/animation-templates";
import { PinContainer } from "@/components/ui/3d-pin";
import {
  Activity,
  Atom,
  Database,
  Layers,
  Palette,
  Shapes,
  Wind,
} from "lucide-react";
import {
  RiNextjsFill,
  RiReactjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { FiFigma } from "react-icons/fi";
import { SiPostgresql, SiPrisma } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";

const featuredProjects = [
  {
    id: "project-01",
    number: "01",
    title: "Interactive Portfolio Website",
    category: "Frontend Development · UI/UX",
    description:
      "A modern and interactive personal portfolio designed to showcase projects, skills, and experience. ",
    tech: [
      { name: "Next.js", icon: RiNextjsFill },
      { name: "React", icon: RiReactjsFill },
      { name: "Tailwind CSS", icon: RiTailwindCssFill },
      { name: "GSAP", icon: RiSupabaseFill },
    ],
    image: "/images/project-01.jpg", // Ganti dengan path image Anda
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
    image: "/images/project-02.jpg", // Ganti dengan path image Anda
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
    image: "/images/project-03.jpg", // Ganti dengan path image Anda
    cta: "View Project →",
    href: "#",
  },
];

export default function FeaturedProjectsSection() {
  return (
    <motion.section
      className="mt-40"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={fadeInUpItem} className="space-y-2">
        <h2 className="text-base tracking-[0.45em] text-gray-400 font-medium mb-4">
          PAST CLIENT
        </h2>
      </motion.div>

      <div className="mt-2 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <div
            key={project.id}
            className="h-[35rem] w-full flex items-center justify-center"
          >
            <PinContainer title={project.cta} href={project.href}>
              <div className="flex basis-full flex-col p-6 tracking-tight text-slate-100/50 sm:basis-1/2 w-[26rem] h-[28rem]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-[0.3em] text-orange-500">
                    Project {project.number}
                  </span>
                  <span className="rounded-full border border-orange-200/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-500">
                    {project.category}
                  </span>
                </div>

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

                <h3 className="max-w-full !pb-2 !m-0 pt-2 font-bold text-lg text-slate-900">
                  {project.title}
                </h3>

                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </span>
                </div>

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
