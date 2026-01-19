"use client";

import { motion } from "framer-motion";
import { fadeInUpItem, staggerContainer } from "@/lib/animation-templates";
import { Search, Palette, Code2, CheckCircle2 } from "lucide-react";

const approachSteps = [
  {
    number: "01",
    title: "Research & Discovery",
    description: "Requirement analysis and research",
    detail:
      "Understanding goals, users, and challenges to define project scope",
    icon: Search,
  },
  {
    number: "02",
    title: "Design & Planning",
    description: "UI/UX planning and design",
    detail: "Creating wireframes, prototypes, and visual design systems",
    icon: Palette,
  },
  {
    number: "03",
    title: "Development",
    description: "Clean and efficient development",
    detail:
      "Building with best practices, scalable architecture, and modern technologies",
    icon: Code2,
  },
  {
    number: "04",
    title: "Testing & Launch",
    description: "Testing, optimization, and refinement",
    detail:
      "Quality assurance, performance optimization, and successful deployment",
    icon: CheckCircle2,
  },
];

export default function ProcessSection() {
  return (
    <motion.section
      className="mt-16 px-4 sm:px-6 lg:px-8"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          variants={fadeInUpItem}
          className="mb-12 space-y-4 text-center lg:mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
            My Process
          </p>
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
            How I Work
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
            Every project starts with understanding the goals, users, and
            challenges. I combine thoughtful design with solid engineering
            practices to deliver solutions that work.
          </p>
        </motion.div>

        {/* Process Steps - Timeline Style */}
        <div className="relative">
          {/* Vertical Line - Desktop Only */}
          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-gradient-to-b from-orange-500/40 via-orange-500/20 to-transparent lg:block" />

          <div className="space-y-6 lg:space-y-8">
            {approachSteps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={fadeInUpItem}
                custom={index}
                className="group relative"
              >
                <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:gap-12">
                  {/* Number Badge */}
                  <div className="flex items-start gap-4 lg:gap-6">
                    {/* Desktop: Circle with Icon */}
                    <div className="hidden lg:flex">
                      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-orange-500/30 bg-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:border-orange-500 group-hover:shadow-xl">
                        <step.icon className="h-7 w-7 text-orange-500" />
                      </div>
                    </div>

                    {/* Mobile: Simple Badge */}
                    <div className="flex lg:hidden">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-base font-bold text-white shadow-lg">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="relative flex-1">
                    <div className="rounded-3xl border border-black/5 bg-white/70 p-6 shadow-[var(--shadow-elevated)] backdrop-blur transition-all duration-300 group-hover:border-orange-500/20 group-hover:shadow-xl sm:p-8">
                      {/* Step Number - Desktop */}
                      <div className="mb-3 hidden text-sm font-semibold uppercase tracking-[0.3em] text-orange-500/60 lg:block">
                        Step {step.number}
                      </div>

                      {/* Title */}
                      <h3 className="mb-2 font-display text-xl font-semibold text-ink sm:text-2xl">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="mb-3 text-sm font-medium text-ink-muted sm:text-base">
                        {step.description}
                      </p>

                      {/* Detail */}
                      <p className="text-sm leading-relaxed text-ink-muted/80">
                        {step.detail}
                      </p>

                      {/* Decorative Element */}
                      <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-orange-500 to-orange-400" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeInUpItem}
          className="mt-12 text-center lg:mt-16"
        >
          <p className="text-sm text-ink-muted">
            Ready to start your project?{" "}
            <a
              href="#contact"
              className="font-semibold text-orange-500 transition-colors hover:text-orange-600"
            >
              Let's talk →
            </a>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
