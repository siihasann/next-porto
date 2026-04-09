import { Variants } from "framer-motion";

// Custom easing curves untuk smoothness maksimal
const smoothEase = [0.25, 0.46, 0.45, 0.94]; // Cubic bezier yang sangat smooth
const springConfig = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
  mass: 0.8,
  restDelta: 0.001, // Threshold untuk menghentikan animasi
  restSpeed: 0.001, // Speed threshold untuk smoothness
};

export type RevealDirection = "left" | "right" | "top" | "bottom";

type SlideDirection = RevealDirection | "up" | "down";

type DirectionalRevealOptions = {
  direction?: RevealDirection;
  distance?: number;
  delay?: number;
  opacity?: number;
  scale?: number;
};

type SlideInCustom = {
  direction?: SlideDirection;
  distance?: number;
  delay?: number;
  opacity?: number;
  scale?: number;
};

type TypewriterOptions = {
  blur?: number;
  y?: number;
  duration?: number;
  staggerChildren?: number;
  delayChildren?: number;
};

type TypewriterAnimation = {
  container: Variants;
  item: Variants;
};

const getDirectionalOffset = (direction: SlideDirection, distance: number) => {
  switch (direction) {
    case "right":
      return { x: distance, y: 0 };
    case "top":
    case "down":
      return { x: 0, y: -distance };
    case "bottom":
    case "up":
      return { x: 0, y: distance };
    case "left":
    default:
      return { x: -distance, y: 0 };
  }
};

const createVisibleState = (delay = 0) => ({
  x: 0,
  y: 0,
  opacity: 1,
  scale: 1,
  transition: {
    ...springConfig,
    delay,
  },
});

export const createDirectionalReveal = ({
  direction = "left",
  distance = 60,
  delay = 0,
  opacity = 0,
  scale = 0.95,
}: DirectionalRevealOptions = {}): Variants => {
  const { x, y } = getDirectionalOffset(direction, distance);

  return {
    hidden: {
      x,
      y,
      opacity,
      scale,
    },
    visible: createVisibleState(delay),
  };
};

export const revealFromLeft = createDirectionalReveal({ direction: "left" });
export const revealFromRight = createDirectionalReveal({ direction: "right" });
export const revealFromTop = createDirectionalReveal({ direction: "top" });
export const revealFromBottom = createDirectionalReveal({ direction: "bottom" });

export const createTypewriterAnimation = ({
  blur = 10,
  y = 18,
  duration = 0.42,
  staggerChildren = 0.028,
  delayChildren = 0.06,
}: TypewriterOptions = {}): TypewriterAnimation => ({
  container: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  },
  item: {
    hidden: {
      opacity: 0,
      y,
      filter: `blur(${blur}px)`,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration,
        ease: smoothEase,
      },
    },
  },
});

export const smoothTypewriter = createTypewriterAnimation();

export const smoothStaggerContainer: Variants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

export const smoothRevealItem: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.985,
    filter: "blur(12px)",
  },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.72,
      delay: custom * 0.06,
      ease: smoothEase,
    },
  }),
};

export const smoothHoverTransition = {
  type: "spring" as const,
  stiffness: 220,
  damping: 26,
  mass: 0.8,
};

export const smoothStateTransition = {
  duration: 0.5,
  ease: smoothEase,
};

// --- PAGE TRANSITION (Konten Muncul Samar-samar) ---
export const pageTransition: Variants = {
  initial: {
    opacity: 0.3, // Mulai dengan opacity 30% (samar-samar)
    y: 10,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: smoothEase,
      when: "beforeChildren", // Animate parent dulu
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0.3, // Exit juga samar-samar
    y: -10,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: smoothEase,
    },
  },
};

// --- PAGE TRANSITION ALTERNATIVE (Fade & Blur) ---
export const pageTransitionBlur: Variants = {
  initial: {
    opacity: 0.4, // Samar-samar 40%
    filter: "blur(4px)",
    scale: 0.99,
  },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 0.6,
      ease: smoothEase,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0.3,
    filter: "blur(4px)",
    scale: 0.99,
    transition: {
      duration: 0.4,
      ease: smoothEase,
    },
  },
};

// --- INSTANT PRELOAD (Konten Langsung Tampil Samar) ---
export const instantPreload: Variants = {
  initial: {
    opacity: 0.5, // Langsung tampil 50% opacity
    y: 0, // Tidak ada movement
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: smoothEase,
      staggerChildren: 0.06,
    },
  },
  exit: {
    opacity: 0.4,
    transition: {
      duration: 0.2,
      ease: smoothEase,
    },
  },
};

// --- Staggered Children Animation (Optimized) ---
export const staggerContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15, // Kurangi delay agar lebih cepat
      ease: smoothEase,
      duration: 0.5,
    },
  },
};

// --- Fade In & Up Animation (Ultra Smooth) ---
export const fadeInUpItem: Variants = {
  hidden: {
    y: 30,
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 25,
      mass: 0.5,
      restDelta: 0.001,
      restSpeed: 0.001,
    },
  },
};

// --- Card Hover Animation (No Jank) ---
export const cardHover: Variants = {
  hidden: {
    y: 40,
    opacity: 0,
    scale: 0.95,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 0.8,
      delay: custom * 0.12,
      restDelta: 0.001,
      restSpeed: 0.001,
    },
  }),
  hover: {
    y: -6,
    scale: 1.03,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25,
      mass: 0.6,
      restDelta: 0.001,
      restSpeed: 0.001,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 30,
    },
  },
};

// --- Simple Fade In Animation (Buttery Smooth) ---
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: smoothEase,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: smoothEase,
    },
  },
};

// --- Slide In Animation (Perfectly Smooth) ---
export const slideIn: Variants = {
  hidden: (custom: SlideInCustom = {}) => {
    const {
      direction = "left",
      distance = 60,
      opacity = 0,
      scale = 0.95,
    } = custom;
    const { x, y } = getDirectionalOffset(direction, distance);

    return {
      x,
      y,
      opacity,
      scale,
    };
  },
  visible: (custom: SlideInCustom = {}) => createVisibleState(custom.delay),
};

// --- Scale Animation (Bonus - Super Smooth) ---
export const scaleIn: Variants = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
      mass: 0.7,
      restDelta: 0.001,
      restSpeed: 0.001,
    },
  },
};

// --- Rotate & Fade (Bonus - No Jitter) ---
export const rotateFade: Variants = {
  hidden: {
    rotate: -5,
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    rotate: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 0.8,
      restDelta: 0.001,
      restSpeed: 0.001,
    },
  },
};

// --- Blur Fade In (Bonus - Premium Feel) ---
export const blurFadeIn: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: smoothEase,
    },
  },
};

// ============================================
// HERO/PAGE PRELOAD ANIMATIONS
// (Untuk Hero Section di semua halaman)
// ============================================

// --- Hero Preload Container (Main wrapper) ---
export const heroPreloadContainer: Variants = {
  hidden: {
    opacity: 0.4, // Langsung tampil 40% sejak awal
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: smoothEase,
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// --- Hero Preload Item (Text, buttons, content) ---
export const heroPreloadItem: Variants = {
  hidden: {
    opacity: 0.3, // Item langsung tampil samar 30%
    y: 12,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 22,
      mass: 0.8,
      restDelta: 0.001,
      restSpeed: 0.001,
    },
  },
};

// --- Card Preload (For hero cards/highlights) ---
export const cardPreload: Variants = {
  hidden: {
    opacity: 0.35, // Card langsung tampil samar 35%
    y: 20,
    scale: 0.97,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 0.8,
      delay: index * 0.12,
      restDelta: 0.001,
      restSpeed: 0.001,
    },
  }),
};

// --- Hero Heading Preload (For large hero titles) ---
export const heroHeadingPreload: Variants = {
  hidden: {
    opacity: 0.25,
    y: 20,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 24,
      mass: 0.9,
      restDelta: 0.001,
      restSpeed: 0.001,
    },
  },
};

// --- Image Preload (For hero images/backgrounds) ---
export const imagePreload: Variants = {
  hidden: {
    opacity: 0.2,
    scale: 1.05,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: smoothEase,
    },
  },
};
