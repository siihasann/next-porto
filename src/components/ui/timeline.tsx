import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Briefcase, Sparkles } from "lucide-react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

// Enhanced Timeline Item with animations
const TimelineItem = ({
  item,
  index,
  reduceMotion,
}: {
  item: TimelineEntry;
  index: number;
  reduceMotion?: boolean;
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { once: true, margin: "-100px" });
  const inView = reduceMotion ? true : isInView;
  const [isHovered, setIsHovered] = useState(false);
  const motionProps = reduceMotion
    ? { initial: false, animate: { opacity: 1, x: 0 }, transition: { duration: 0 } }
    : {
        initial: { opacity: 0, x: -50 },
        animate: inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 },
        transition: { duration: 0.6, delay: index * 0.2 },
      };

  return (
    <motion.div
      ref={itemRef}
      {...motionProps}
      className="flex justify-start pb-10 md:pb-40 md:gap-10"
      onMouseEnter={reduceMotion ? undefined : () => setIsHovered(true)}
      onMouseLeave={reduceMotion ? undefined : () => setIsHovered(false)}
    >
      <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        <motion.div
          className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center border-2 border-orange-200 dark:border-orange-900"
          animate={{
            scale: isHovered ? 1.2 : 1,
            borderColor: isHovered ? "#f97316" : undefined,
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="h-4 w-4 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 p-2"
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.div>
        <h3 className="hidden md:block text-xl md:pl-20 md:text-2xl font-bold text-neutral-700 dark:text-neutral-300">
          {item.title}
        </h3>
      </div>

      <div className="relative pl-20 pr-4 md:pl-4 w-full">
        <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-700 dark:text-neutral-300">
          {item.title}
        </h3>
        {item.content}
      </div>
    </motion.div>
  );
};

// Main Timeline Component
export const Timeline = ({
  data,
  reduceMotion,
}: {
  data: TimelineEntry[];
  reduceMotion?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  return (
    <div
      className="w-full bg-gradient-to-b  dark:from-neutral-950 dark:to-neutral-900 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <p className="text-base font-semibold uppercase tracking-[0.3em] text-ink-muted">
              Experiences
            </p>
          </div>
          <motion.div
            className="h-1 bg-gradient-to-r from-orange-500 via-orange-300 to-transparent rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
            index={index}
            reduceMotion={reduceMotion}
          />
        ))}
        {reduceMotion ? null : (
          <TimelineScrollIndicator height={height} containerRef={containerRef} />
        )}
      </div>
    </div>
  );
};

const TimelineScrollIndicator = ({
  height,
  containerRef,
}: {
  height: number;
  containerRef: React.RefObject<HTMLDivElement>;
}) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      style={{ height: height + "px" }}
      className="absolute left-8 top-0 w-[4px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] dark:via-neutral-700 [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8"
    >
      <motion.div
        style={{
          height: heightTransform,
          opacity: opacityTransform,
        }}
        className="absolute inset-x-0 top-0 w-[10px] rounded-full bg-gradient-to-t from-orange-500 via-orange-300 to-transparent from-[0%] via-[10%]"
      />
    </div>
  );
};
