"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { easeOutSoft } from "@/lib/motion";

type AnimatedSectionProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function AnimatedSection({
  children,
  delay = 0,
  className,
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        ease: easeOutSoft,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
