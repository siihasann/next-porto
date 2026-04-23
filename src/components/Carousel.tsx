import { useEffect, useMemo, useRef, useState } from "react";
import { motion, PanInfo, useMotionValue, useTransform } from "motion/react";
import React, { JSX } from "react";

// replace icons with your own if needed
import {
  FiCircle,
  FiCode,
  FiFileText,
  FiLayers,
  FiLayout,
} from "react-icons/fi";
import ExpandableButton from "./ui/ExpandableButton";
export interface CarouselItem {
  title: string;
  description: string;
  id: number;
  icon: React.ReactNode;
  imageUrl?: string;
  compactImageFit?: "contain" | "cover";
  compactImagePosition?: string;
  compactImageScale?: number;
  primaryLink?: {
    label: string;
    href: string;
  };
}

export interface CarouselProps {
  items?: CarouselItem[];
  baseHeight?: number;
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
}

const DEFAULT_ITEMS: CarouselItem[] = [
  {
    title: "Landing Pages",
    description: "uat.humancapabilityinitiative.org",
    id: 1,
    icon: <FiFileText className="h-[16px] w-[16px] text-white" />,
    imageUrl: "/assets/images/work/uat.humancapabilityinitiative.org-1.png",
    compactImageFit: "contain",
    compactImagePosition: "center",
    primaryLink: {
      label: "View Portfolio",
      href: "https://uat.humancapabilityinitiative.org/en",
    },
  },
  {
    title: "Barong Solo",
    description:
      "Barong (barongsolo.com) is a mini startup initiative built by my team and me to connect scrap collectors with the community, addressing both economic and environmental challenges. The platform helps reduce unmanaged waste by enabling users to sell recyclable materials efficiently instead of disposing of them improperly.",
    id: 2,
    icon: <FiCircle className="h-[16px] w-[16px] text-white" />,
    imageUrl: "/assets/images/work/barongsolo.png",
    compactImageFit: "contain",
    compactImagePosition: "center",
    primaryLink: {
      label: "barongsolo.com",
      href: "https://barongsolo.com",
    },
  },
  {
    title: "CRM Dashboard Barong Solo App",
    description:
      "CRM Dashboard for Barong Solo, a mini startup initiative connecting scrap collectors with the community. The dashboard provides tools for managing user, master data, transactions, and reporting.",
    id: 2,
    icon: <FiCircle className="h-[16px] w-[16px] text-white" />,
    imageUrl: "/assets/images/work/cms_barong.png",
    compactImageFit: "contain",
    compactImagePosition: "center",
    primaryLink: {
      label: "barongsolo.com",
      href: "https://barongsolo.com",
    },
  },
  {
    title: "Task Management App",
    description: "Task management app for team collaboration and productivity.",
    id: 3,
    icon: <FiLayers className="h-[16px] w-[16px] text-white" />,
    imageUrl: "/assets/images/work/cc-task.png",
    compactImageFit: "contain",
    compactImagePosition: "center",
    primaryLink: {
      label: "Case Study",
      href: "https://example.com",
    },
  },
  // {
  //   title: "Klephone App",
  //   description:
  //     "Klephone is a dashboard app for monitoring and managing mobile phone stocks and sales.",
  //   id: 4,
  //   icon: <FiLayout className="h-[16px] w-[16px] text-white" />,
  //   imageUrl: "/assets/images/work/klephone_app.png",
  //   primaryLink: {
  //     label: "View Portfolio",
  //     href: "https://example.com",
  //   },
  // },
  {
    title: "Zornicare SaaS Dashboard",
    description:
      "Saas Daycare dashboard for monitoring and managing daycare operations.",
    id: 5,
    icon: <FiCode className="h-[16px] w-[16px] text-white" />,
    imageUrl: "/assets/images/work/work-zornicare.png",
    compactImageFit: "contain",
    compactImagePosition: "center",
    compactImageScale: 0.92,
    primaryLink: {
      label: "GitHub Repo",
      href: "https://github.com",
    },
  },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring" as const, stiffness: 300, damping: 30 };

interface CarouselItemProps {
  item: CarouselItem;
  index: number;
  itemWidth: number;
  round: boolean;
  trackItemOffset: number;
  x: any;
  transition: any;
}

function CarouselItem({
  item,
  index,
  itemWidth,
  round,
  trackItemOffset,
  x,
  transition,
}: CarouselItemProps) {
  const range = [
    -(index + 1) * trackItemOffset,
    -index * trackItemOffset,
    -(index - 1) * trackItemOffset,
  ];
  const outputRange = [90, 0, -90];
  const rotateY = useTransform(x, range, outputRange, { clamp: false });
  const isCompact = !round && itemWidth <= 340;
  const compactImageFit = item.compactImageFit ?? "contain";
  const compactImagePosition =
    item.compactImagePosition ?? (compactImageFit === "contain" ? "center" : "center top");
  const compactImageScale =
    item.compactImageScale ?? (compactImageFit === "contain" ? 0.96 : 1);
  const compactImageClass =
    compactImageFit === "contain"
      ? "max-h-full max-w-full object-contain"
      : "h-full w-full object-cover";

  return (
    <motion.div
      key={`${item?.id ?? index}-${index}`}
      className={`relative box-border shrink-0 flex h-full flex-col ${
        round
          ? "items-center justify-center text-center bg-[#060010] border-0"
          : isCompact
            ? "items-start justify-start bg-[#222] border border-[#222] rounded-[12px]"
            : "items-start justify-between bg-[#222] border border-[#222] rounded-[12px]"
      } overflow-hidden cursor-grab active:cursor-grabbing`}
      style={{
        width: itemWidth,
        height: round ? itemWidth : "100%",
        rotateY: rotateY,
        ...(round && { borderRadius: "50%" }),
      }}
      transition={transition}
    >
      {item.imageUrl ? (
        isCompact ? (
          <div className="w-full shrink-0 px-5 pt-5">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[20px] border border-white/6 bg-[#141414]">
              {compactImageFit === "contain" ? (
                <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className={compactImageClass}
                    style={{
                      objectPosition: compactImagePosition,
                      transform: `scale(${compactImageScale})`,
                      transformOrigin: "center",
                    }}
                    draggable={false}
                  />
                </div>
              ) : (
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className={compactImageClass}
                  style={{ objectPosition: compactImagePosition }}
                  draggable={false}
                />
              )}
              <div className="absolute inset-0 rounded-[20px] ring-1 ring-inset ring-white/4" />
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 bg-black">
            <div
              className="absolute inset-0 scale-105 opacity-45"
              style={{
                backgroundImage: `url(${item.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(24px)",
              }}
            />
            <img
              src={item.imageUrl}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-contain"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/35 to-black/80" />
          </div>
        )
      ) : null}
      <div
        className={`${
          round
            ? "m-0 p-0"
            : isCompact
              ? "relative shrink-0 px-5 pb-0 pt-4"
              : "relative mb-4 p-5"
        }`}
      >
        <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#060010]">
          {item.icon}
        </span>
      </div>
      <div
        className={`relative w-full ${
          isCompact ? "flex min-h-0 flex-1 flex-col px-5 pb-5 pt-4" : "p-5"
        }`}
      >
        <div
          className={`font-heading text-white ${
            isCompact ? "mb-3 text-[1.35rem] leading-[1.12] tracking-[-0.03em]" : "mb-1 text-xl"
          }`}
        >
          {item.title}
        </div>
        <p
          className={`font-text text-white/90 ${
            isCompact
              ? "text-sm leading-6 [display:-webkit-box] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:4]"
              : "text-base"
          }`}
        >
          {item.description}
        </p>

        {/* {item.primaryLink ? (
          <a
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/20"
            href={item.primaryLink.href}
            target="_blank"
            rel="noreferrer"
          >
            {item.primaryLink.label}
            <span className="text-orange-200">→</span>
          </a>
        ) : null} */}
        <div
          className={`flex w-full ${isCompact ? "mt-auto pt-5 justify-start" : "justify-end"}`}
        >
          <ExpandableButton
            text="Get Started"
            href={item.primaryLink?.href}
            target={item.primaryLink ? "_blank" : undefined}
            rel={item.primaryLink ? "noreferrer" : undefined}
            className="pointer-events-auto"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  baseHeight = 360,
  autoplay = false,
  autoplayDelay = 100000,
  pauseOnHover = false,
  loop = false,
  round = false,
}: CarouselProps): JSX.Element {
  const containerPadding = !round && baseWidth <= 360 ? 16 : 24;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;
  const itemsForRender = useMemo(() => {
    if (!loop) return items;
    if (items.length === 0) return [];
    return [items[items.length - 1], ...items, items[0]];
  }, [items, loop]);

  const [position, setPosition] = useState<number>(loop ? 1 : 0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isJumping, setIsJumping] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (!autoplay || itemsForRender.length <= 1) return undefined;
    if (pauseOnHover && isHovered) return undefined;

    const timer = setInterval(() => {
      setPosition((prev) => Math.min(prev + 1, itemsForRender.length - 1));
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, itemsForRender.length]);

  useEffect(() => {
    const startingPosition = loop ? 1 : 0;
    setPosition(startingPosition);
    x.set(-startingPosition * trackItemOffset);
  }, [items.length, loop, trackItemOffset, x]);

  useEffect(() => {
    if (!loop && position > itemsForRender.length - 1) {
      setPosition(Math.max(0, itemsForRender.length - 1));
    }
  }, [itemsForRender.length, loop, position]);

  const effectiveTransition = isJumping ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    if (!loop || itemsForRender.length <= 1) {
      setIsAnimating(false);
      return;
    }
    const lastCloneIndex = itemsForRender.length - 1;

    if (position === lastCloneIndex) {
      setIsJumping(true);
      const target = 1;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    if (position === 0) {
      setIsJumping(true);
      const target = items.length;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    setIsAnimating(false);
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ): void => {
    const { offset, velocity } = info;
    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
          ? -1
          : 0;

    if (direction === 0) return;

    setPosition((prev) => {
      const next = prev + direction;
      const max = itemsForRender.length - 1;
      return Math.max(0, Math.min(next, max));
    });
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * Math.max(itemsForRender.length - 1, 0),
          right: 0,
        },
      };

  const activeIndex =
    items.length === 0
      ? 0
      : loop
        ? (position - 1 + items.length) % items.length
        : Math.min(position, items.length - 1);

  return (
    <div
      ref={containerRef}
      className={`relative box-border overflow-hidden p-6 ${
        round
          ? "rounded-full border border-white"
          : "rounded-[24px] border border-[#222]"
      }`}
      style={{
        width: `${baseWidth}px`,
        height: round ? `${baseWidth}px` : `${baseHeight}px`,
      }}
    >
      <motion.div
        className="flex h-full"
        drag={isAnimating ? false : "x"}
        {...dragProps}
        style={{
          width:
            itemsForRender.length > 0
              ? itemsForRender.length * trackItemOffset - GAP
              : 0,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${
            position * trackItemOffset + itemWidth / 2
          }px 50%`,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(position * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationStart={handleAnimationStart}
        onAnimationComplete={handleAnimationComplete}
      >
        {itemsForRender.map((item, index) => (
          <CarouselItem
            key={`${item?.id ?? index}-${index}`}
            item={item}
            index={index}
            itemWidth={itemWidth}
            round={round}
            trackItemOffset={trackItemOffset}
            x={x}
            transition={effectiveTransition}
          />
        ))}
      </motion.div>
      <div
        className={`flex w-full justify-center ${
          round ? "absolute z-20 bottom-12 left-1/2 -translate-x-1/2" : ""
        }`}
      >
        <div className="mt-2 flex w-[150px] justify-between px-8">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${
                activeIndex === index
                  ? round
                    ? "bg-white"
                    : "bg-[#333333]"
                  : round
                    ? "bg-[#555]"
                    : "bg-[rgba(51,51,51,0.4)]"
              }`}
              animate={{
                scale: activeIndex === index ? 1.2 : 1,
              }}
              onClick={() => setPosition(loop ? index + 1 : index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
