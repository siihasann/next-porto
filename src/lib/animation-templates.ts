import { Variants } from "framer-motion";

// --- Staggered Children Animation ---
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

// --- Fade In & Up Animation ---
export const fadeInUpItem: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

// --- Card Hover Animation ---
export const cardHover: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 14,
      delay: custom * 0.2,
    },
  }),
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

// --- Simple Fade In Animation ---
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// --- Slide In Animation ---
export const slideIn: Variants = {
  hidden: (custom: { direction: string }) => {
    const offset = 50;
    switch (custom.direction) {
      case "right":
        return { x: offset, opacity: 0 };
      case "up":
        return { y: offset, opacity: 0 };
      case "down":
        return { y: -offset, opacity: 0 };
      case "left":
      default:
        return { x: -offset, opacity: 0 };
    }
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
    },
  },
};
