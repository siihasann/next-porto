"use client";

import { motion } from "framer-motion";
import { pageTransition } from "@/lib/animation-templates";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="min-h-screen overflow-x-hidden pt-16 sm:pt-20"
    >
      {children}
    </motion.div>
  );
}
