"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

type ButtonVariant = "orange" | "blue" | "purple" | "gradient";

interface HighlightButtonProps {
  text?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: ButtonVariant;
}

const HighlightButton: React.FC<HighlightButtonProps> = ({
  text = "Contact Me",
  onClick,
  href,
  className = "",
  variant = "orange",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    orange: {
      bg: "bg-orange-500",
      hoverBg: "hover:bg-orange-500",
      text: "text-white",
      highlightBg: "bg-white",
      highlightText: "text-orange-500",
    },
    blue: {
      bg: "bg-blue-500",
      hoverBg: "hover:bg-blue-600",
      text: "text-white",
      highlightBg: "bg-white",
      highlightText: "text-blue-500",
    },
    purple: {
      bg: "bg-purple-500",
      hoverBg: "hover:bg-purple-600",
      text: "text-white",
      highlightBg: "bg-white",
      highlightText: "text-purple-500",
    },
    gradient: {
      bg: "bg-gradient-to-r from-orange-500 to-pink-500",
      hoverBg: "",
      text: "text-white",
      highlightBg: "bg-white",
      highlightText: "text-orange-500",
    },
  };

  const currentVariant = variants[variant];

  const buttonContent = (
    <div className="relative w-full h-full flex items-center justify-between">
      {/* White Highlight Background - Expands on Hover from Right to Left */}
      <div
        className={`
          absolute top-1/2 -translate-y-1/2 rounded-full
          ${currentVariant.highlightBg}
          transition-all duration-500 ease-out
        `}
        style={{
          right: "10px",
          left: isHovered ? "auto" : "auto",
          width: isHovered ? "calc(90% - 6px)" : "34px",
          height: "calc(65% - 6px)",
          zIndex: 1,
        }}
      />

      {/* Text */}
      <span
        className={`
          font-semibold text-lg relative z-10 pl-8
          transition-colors duration-300
          ${isHovered ? currentVariant.highlightText : currentVariant.text}
        `}
      >
        {text}
      </span>

      {/* Icon - Only visible on hover */}
      <div
        className="flex items-center justify-center flex-shrink-0 relative z-10 mr-0"
        style={{ width: "56px" }}
      >
        <ArrowRight
          className={`
            transition-all duration-300 text-orange-500
            ${
              isHovered
                ? `opacity-100 ${currentVariant.highlightText}`
                : "opacity-70"
            }
          `}
          size={20}
          strokeWidth={2.5}
        />
      </div>
    </div>
  );

  const baseClasses = `
    relative inline-flex items-center justify-center
    ${currentVariant.bg} ${currentVariant.hoverBg}
    rounded-full
    transition-all duration-300 ease-out
    cursor-pointer
    shadow-lg hover:shadow-xl
    overflow-hidden
    ${className}
  `;

  const baseStyles: React.CSSProperties = {
    minWidth: "200px",
    height: "60px",
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  if (href) {
    return (
      <a
        href={href}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={baseClasses}
        style={baseStyles}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={baseClasses}
      style={baseStyles}
    >
      {buttonContent}
    </button>
  );
};

export default HighlightButton;
