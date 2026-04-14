"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUpItem, staggerContainer } from "@/lib/animation-templates";

type FeaturedProject = {
  id: string;
  title: string;
  image: string;
  number: string;
  year: string;
  href: string;
  variant?: "framed" | "plain";
};

const featuredProjects: FeaturedProject[] = [
  {
    id: "case-study-01",
    title: "Quiet Interior Styling",
    image: "/assets/images/home/image1.jpg",
    number: "(01)",
    year: "2024",
    href: "#",
    variant: "framed",
  },
  {
    id: "case-study-02",
    title: "Warm Dining Corner",
    image: "/assets/images/home/image2.jpg",
    number: "(02)",
    year: "2024",
    href: "#",
  },
  {
    id: "case-study-03",
    title: "Object Study Collection",
    image: "/assets/images/home/image3.jpg",
    number: "(03)",
    year: "2023",
    href: "#",
  },
  {
    id: "case-study-04",
    title: "Crafted Wood Seating",
    image: "/assets/images/home/image4.jpg",
    number: "(04)",
    year: "2023",
    href: "#",
  },
];

function FeaturedProjectCard({ project }: { project: FeaturedProject }) {
  const framed = project.variant === "framed";

  return (
    <motion.a
      href={project.href}
      aria-label={`${project.title} case study`}
      variants={fadeInUpItem}
      whileHover={{ y: -6, transition: { duration: 0.24 } }}
      className="group block outline-none"
    >
      {framed ? (
        <article className="bg-black p-4 pb-3 sm:p-5 sm:pb-4">
          <div className="relative aspect-[1.1] overflow-hidden bg-[#0b0b0b]">
            <div className="absolute inset-0 flex items-center justify-center p-[13%]">
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-[auto_1fr_auto] items-center gap-3 font-text text-[9px] uppercase tracking-[0.18em] text-white/80 sm:text-[10px]">
            <span>{project.number}</span>
            <span className="text-center">Case Study</span>
            <span className="text-right">{project.year}</span>
          </div>
        </article>
      ) : (
        <article>
          <div className="relative aspect-[1.1] overflow-hidden bg-[#ece9e1]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          </div>

          <div className="mt-3 grid grid-cols-[auto_1fr_auto] items-center gap-3 font-text text-[9px] uppercase tracking-[0.18em] text-black/68 sm:text-[10px]">
            <span>{project.number}</span>
            <span className="text-center">Case Study</span>
            <span className="text-right">{project.year}</span>
          </div>
        </article>
      )}
    </motion.a>
  );
}

export default function FeaturedProjectsSectionV2() {
  return (
    <motion.section
      className="mt-10 sm:mt-12 lg:mt-14"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="grid gap-x-5 gap-y-9 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:gap-x-8 lg:gap-y-14">
        {featuredProjects.map((project) => (
          <FeaturedProjectCard key={project.id} project={project} />
        ))}
      </div>
    </motion.section>
  );
}
