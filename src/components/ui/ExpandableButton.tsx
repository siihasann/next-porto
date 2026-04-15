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
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
}

export default function SecondButton({
  text = "Learn More",
  variant = "white",
  expand = "right",
  iconMode = "change-direction",
  href,
  onClick,
  className = "",
  target,
  rel,
}: Props) {
  const [hover, setHover] = useState(false);
  const expandedWidth = expand === "both" ? 160 : 150;
  const collapsedSize = 48;

  // ===== Variants styling =====
  const variants = {
    white: {
      bg: "bg-white",
      text: "text-[#577E53]",
      icon: "text-[#577E53]",
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

  // ===== Icon logic =====
  const Icon =
    iconMode === "change-direction" && hover ? ArrowUpRight : ArrowRight;

  const rootClassName = `
    relative flex items-center
    rounded-full ${V.bg} ${V.shadow}
    cursor-pointer overflow-hidden
    transition-all duration-500
    ${className}
  `;

  const rootStyle = {
    width: hover ? expandedWidth : collapsedSize,
    height: collapsedSize,
    paddingLeft: hover ? 20 : 0,
    paddingRight: hover ? 20 : 0,
    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
  } as const;

  const handlePointerDown = (event: React.PointerEvent) => {
    event.stopPropagation();
  };

  const sharedProps = {
    className: rootClassName,
    style: rootStyle,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onPointerDown: handlePointerDown,
  };

  const content = (
    <>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: hover ? "auto" : "50%",
          right: hover ? "20px" : "auto",
          transform: hover ? "translateY(-50%)" : "translate(-50%, -50%)",
          transition: "all 450ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <Icon size={20} strokeWidth={2.5} className={V.icon} />
      </div>

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
    </>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} {...sharedProps}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" {...sharedProps}>
      {content}
    </button>
  );
}
