"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import SecondButton from "../ui/ExpandableButton";
import HighlightButton from "../ui/HighlightButton";
import { fadeInUpItem, staggerContainer } from "@/lib/animation-templates";

const AboutHeroSection: React.FC = () => {
  return (
    <motion.section
      className="relative min-h-[80vh] overflow-hidden bg-gradient-to-br sm:min-h-screen"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_500px_at_50%_200px,#C9DAEA,transparent)]"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
        <div className="grid min-h-[70vh] items-center gap-12 lg:min-h-[80vh] lg:grid-cols-2 lg:gap-16">
          {/* Left Image */}
          {/* Left Image */}
          <motion.div
            className="relative flex justify-center lg:justify-start"
            variants={fadeInUpItem}
          >
            {/* Main Circle Image */}
            <div className="relative z-10">
              <div className="h-56 w-56 overflow-hidden rounded-full shadow-2xl ring-4 ring-white sm:h-72 sm:w-72 sm:ring-6 lg:h-96 lg:w-96 lg:ring-8">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Social Media Icons - Positioned around the circle */}
              {/* Instagram - Top Right */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-2 top-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 group hover:scale-110 sm:top-4 sm:h-12 sm:w-12 lg:top-6 lg:h-14 lg:w-14"
              >
                <svg
                  className="h-4 w-4 text-gray-700 transition-colors group-hover:text-pink-600 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn - Right */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-0 top-1/2 z-20 -mr-2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 group hover:scale-110 sm:-mr-4 sm:h-12 sm:w-12 lg:-mr-6 lg:h-14 lg:w-14"
              >
                <svg
                  className="h-4 w-4 text-gray-700 transition-colors group-hover:text-blue-600 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* GitHub - Bottom Right */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -right-2 bottom-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 group hover:scale-110 sm:-right-3 sm:h-12 sm:w-12 lg:-right-4 lg:h-14 lg:w-14"
              >
                <svg
                  className="h-4 w-4 text-gray-700 transition-colors group-hover:text-gray-900 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              {/* Dribbble - Bottom Left */}
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -left-2 bottom-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 group hover:scale-110 sm:-left-3 sm:h-12 sm:w-12 lg:-left-4 lg:h-14 lg:w-14"
              >
                <svg
                  className="h-4 w-4 text-gray-700 transition-colors group-hover:text-pink-500 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
                </svg>
              </a>

              {/* Twitter/X - Left */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-0 top-1/2 z-20 -ml-2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 group hover:scale-110 sm:-ml-4 sm:h-12 sm:w-12 lg:-ml-6 lg:h-14 lg:w-14"
              >
                <svg
                  className="h-4 w-4 text-gray-700 transition-colors group-hover:text-black sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>

            {/* Decorative Circles */}
            <div className="absolute left-0 top-0 h-56 w-56 rounded-full border-2 border-orange-500/30 animate-pulse sm:h-72 sm:w-72 lg:h-96 lg:w-96"></div>
            <div className="absolute -left-2 -top-2 h-56 w-56 rounded-full border border-pink-500/20 sm:-left-4 sm:-top-4 sm:h-72 sm:w-72 lg:h-96 lg:w-96"></div>

            {/* Blur Effects */}
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-orange-500 opacity-20 blur-3xl sm:-left-8 sm:-top-8 sm:h-32 sm:w-32 lg:-left-10 lg:-top-10 lg:h-40 lg:w-40"></div>
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-orange-300 opacity-20 blur-3xl sm:-bottom-8 sm:-right-8 sm:h-32 sm:w-32 lg:-bottom-10 lg:-right-10 lg:h-40 lg:w-40"></div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 right-1/2 z-20 w-[220px] translate-x-1/2 rounded-2xl bg-white p-3 shadow-xl sm:-bottom-6 sm:right-0 sm:w-auto sm:translate-x-0 sm:p-4 lg:left-0 lg:right-auto">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-300 sm:h-10 sm:w-10">
                  <svg
                    className="h-4 w-4 text-white sm:h-5 sm:w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">
                    Available
                  </div>
                  <div className="text-xs text-gray-500">For Freelance</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div className="space-y-6 sm:space-y-8" variants={fadeInUpItem}>
            <motion.div className="space-y-4" variants={fadeInUpItem}>
              <p className="text-xs font-light uppercase tracking-[0.3em] text-gray-500 sm:text-sm">
                About Me
              </p>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-6xl xl:text-7xl">
                I'm a <span className="text-gradient-primary">Creative</span>
                <br />
                Designer
              </h1>
            </motion.div>

            <motion.p
              variants={fadeInUpItem}
              className="text-base leading-relaxed text-gray-600 sm:text-lg lg:text-xl"
            >
              Crafting digital experiences that inspire and engage. With over 8
              years of experience in design and development, I transform ideas
              into beautiful, functional products.
            </motion.p>

            <motion.div
              variants={fadeInUpItem}
              className="grid grid-cols-3 gap-3 pt-2 text-center sm:gap-6 sm:pt-4"
            >
              <div className="space-y-1 sm:space-y-2">
                <div className="text-xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
                  8+
                </div>
                <div className="text-[9px] uppercase tracking-wide text-gray-500 sm:text-xs">
                  Years
                  <span className="hidden sm:inline"> Experience</span>
                </div>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <div className="text-xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
                  200+
                </div>
                <div className="text-[9px] uppercase tracking-wide text-gray-500 sm:text-xs">
                  Projects
                  <span className="hidden sm:inline"> Done</span>
                </div>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <div className="text-xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
                  50+
                </div>
                <div className="text-[9px] uppercase tracking-wide text-gray-500 sm:text-xs">
                  Happy
                  <span className="hidden sm:inline"> Clients</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUpItem}
              className="flex flex-row flex-wrap items-center justify-center gap-3 pt-2 sm:justify-start sm:gap-4 sm:pt-4"
            >
              <HighlightButton text="Download CV" variant="orange" />
              <button className="rounded-full border-2 border-gray-900 px-6 py-3 font-semibold text-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white sm:px-8 sm:py-4">
                Contact Me
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutHeroSection;
