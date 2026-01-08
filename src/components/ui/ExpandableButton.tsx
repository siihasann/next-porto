"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

type Variant = "white" | "dark" | "gradient-orange" | "gradient-blue" | "glass";

type ExpandMode = "right" | "left" | "both";

type IconMode = "static" | "change-direction";

interface Props {
  text?: string;
  variant?: Variant;
  expand?: ExpandMode;
  iconMode?: IconMode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function SecondButton({
  text = "Learn More",
  variant = "white",
  expand = "right",
  iconMode = "change-direction",
  href,
  onClick,
  className = "",
}: Props) {
  const [hover, setHover] = useState(false);

  // ===== Variants styling =====
  const variants = {
    white: {
      bg: "bg-white",
      text: "text-orange-500",
      icon: "text-orange-500",
      shadow: "shadow-md hover:shadow-xl",
    },
    dark: {
      bg: "bg-neutral-900",
      text: "text-white",
      icon: "text-white",
      shadow: "shadow-lg hover:shadow-2xl",
    },
    "gradient-orange": {
      bg: "bg-gradient-to-r from-orange-500 to-pink-500",
      text: "text-white",
      icon: "text-white",
      shadow: "shadow-lg hover:shadow-2xl",
    },
    "gradient-blue": {
      bg: "bg-gradient-to-r from-blue-500 to-purple-500",
      text: "text-white",
      icon: "text-white",
      shadow: "shadow-lg hover:shadow-2xl",
    },
    glass: {
      bg: "backdrop-blur-md bg-white/20 border border-white/30",
      text: "text-white",
      icon: "text-white",
      shadow: "shadow-lg hover:shadow-2xl",
    },
  };

  const V = variants[variant];

  // ===== Expand mode logic =====
  const expandedWidth = 160;
  const collapsedSize = 50;

  const width =
    expand === "right"
      ? hover
        ? expandedWidth
        : collapsedSize
      : expand === "left"
      ? hover
        ? expandedWidth
        : collapsedSize
      : expand === "both"
      ? hover
        ? expandedWidth
        : collapsedSize
      : collapsedSize;

  const justify =
    expand === "right"
      ? hover
        ? "flex-start"
        : "center"
      : expand === "left"
      ? hover
        ? "flex-end"
        : "center"
      : expand === "both"
      ? "center"
      : "center";

  // ===== Icon logic =====
  const Icon =
    iconMode === "change-direction" && hover ? ArrowUpRight : ArrowRight;

  const Component = href ? "a" : "button";

  return (
    <Component
      className={`
    relative flex items-center
    rounded-full ${V.bg} ${V.shadow}
    cursor-pointer overflow-hidden
    transition-all duration-500
  `}
      style={{
        width: hover ? 150 : 48,
        height: 48,
        paddingLeft: hover ? 20 : 0,
        paddingRight: hover ? 20 : 0,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* ICON ALWAYS CENTERED */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: hover ? "auto" : "50%", // center when collapsed
          right: hover ? "20px" : "auto", // move to right on hover
          transform: hover
            ? "translateY(-50%)" // no centering horizontally
            : "translate(-50%, -50%)", // center mode
          transition: "all 450ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <Icon size={20} strokeWidth={2.5} className={V.icon} />
      </div>

      {/* TEXT APPEARS ON HOVER */}
      <span
        className={`${V.text} font-semibold text-base`}
        style={{
          position: "absolute",
          left: hover ? 20 : -999,
          opacity: hover ? 1 : 0,
          transform: hover ? "translateY(0)" : "translateY(3px)",
          transition: "all 450ms cubic-bezier(0.22, 1, 0.36, 1)",
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </span>
    </Component>
  );
}
