"use client";

import { useState } from "react";
import { Code2, LayoutGrid, Megaphone, Paintbrush } from "lucide-react";
import Carousel from "../Carousel";

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

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="surface-contrast mt-16 rounded-[34px] py-14 text-white shadow-[0_30px_60px_-40px_rgba(0,0,0,0.65)] sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center">
        <p className="text-lg font-semibold uppercase tracking-[0.35em] text-zinc-400">
          What I&apos;m Doing
        </p>
        <div className="font-display text-3xl font-medium uppercase tracking-[0.08em] sm:text-4xl lg:text-7xl">
          {services.map((service) => (
            <div
              key={service.label}
              className="group mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <span className="pointer-events-none flex h-8 w-8 lg:h-16 lg:w-16 items-center justify-center rounded-full border border-white/20 text-orange-200 opacity-0 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                <service.Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="transition duration-300 group-hover:text-orange-200">
                {service.label}
              </span>
              <span className="h-px w-0 bg-white/40 transition-all duration-300 group-hover:w-10" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex items-center justify-between text-lg uppercase tracking-[0.35em] text-zinc-400">
        <span>Selected Project</span>
        <div className="flex items-center gap-3">
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
        </div>
      </div>

      <article className="mt-6 overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#0a0a0a,rgba(15,15,15,0.9))] shadow-[0_30px_60px_-45px_rgba(0,0,0,0.95)]">
        <div style={{ height: "600px", position: "relative" }}>
          <Carousel baseWidth={1230} baseHeight={600} autoplay loop />
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
      </article>
    </section>
  );
}
