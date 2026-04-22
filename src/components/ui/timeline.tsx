"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!contentRef.current) return;

    const node = contentRef.current;
    let frame = 0;

    const updateHeight = () => {
      cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const nextHeight = node.getBoundingClientRect().height;
        setHeight((current) => (current === nextHeight ? current : nextHeight));
      });
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(node);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 16%", "end 82%"],
  });

  const lineHeightTarget = useTransform(scrollYProgress, [0, 1], [0, height]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.08], [0.15, 1]);
  const smoothLineHeight = useSpring(lineHeightTarget, {
    stiffness: 160,
    damping: 28,
    mass: 0.35,
  });

  return (
    <div
      className="mt-10 w-full md:px-10 dark:bg-neutral-950"
      ref={containerRef}
    >
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 lg:px-10">
        <h2 className="mb-4 max-w-4xl text-lg font-bold text-black md:text-5xl dark:text-white">
          Career Journey
        </h2>
        <p className="max-w-sm text-sm text-neutral-700 md:text-base dark:text-neutral-300">
          A timeline of my growth as a Full Stack Developer, contributing to
          real-world projects and leading development initiatives.
        </p>
      </div>

      <div ref={contentRef} className="relative mx-auto max-w-7xl pb-20">
        {data.map((item) => (
          <div
            key={item.title}
            className="flex justify-start pt-10 md:gap-10 md:pt-20"
          >
            <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:max-w-sm md:flex-row">
              <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-black">
                <div className="h-4 w-4 rounded-full border border-neutral-300 bg-neutral-200 p-2 dark:border-neutral-700 dark:bg-neutral-800" />
              </div>
              <h3 className="hidden text-xl font-bold text-neutral-500 md:block md:pl-20 md:text-3xl dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <h3 className="mb-4 block text-left text-2xl font-bold text-neutral-500 md:hidden dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        <div
          style={{
            height: `${height}px`,
          }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8 dark:via-neutral-700"
        >
          <motion.div
            style={{
              height: prefersReducedMotion ? height : smoothLineHeight,
              opacity: prefersReducedMotion ? 1 : lineOpacity,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-[#577e53] via-[#84b179] to-transparent from-[0%] via-[10%]"
          />
        </div>
      </div>
    </div>
  );
};
