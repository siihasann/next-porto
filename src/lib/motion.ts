import type { Variants } from "framer-motion";

export const easeOutSoft: [number, number, number, number] = [
  0.21, 0.47, 0.32, 0.98,
];

export const fadeUpContainer = (stagger = 0.08): Variants => ({
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: easeOutSoft,
      staggerChildren: stagger,
    },
  },
});

export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

export const fadeUpCard: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7 } },
};
