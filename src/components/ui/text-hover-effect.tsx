"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { motion } from "motion/react";

export const TextHoverEffect = ({
  text,
  duration,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const baseId = useId().replace(/:/g, "");
  const gradientId = `${baseId}-text-gradient`;
  const revealMaskId = `${baseId}-reveal-mask`;
  const maskId = `${baseId}-text-mask`;
  const label = text.trim();
  const characterCount = Math.max(label.length, 4);
  const viewBoxWidth = Math.max(420, characterCount * 86);
  const viewBoxHeight = 170;
  const fontSize = characterCount > 10 ? 96 : 124;
  const centerPosition = {
    cx: viewBoxWidth / 2,
    cy: viewBoxHeight / 2,
  };
  const revealRadius = Math.max(72, viewBoxWidth * 0.12);
  const dashLength = viewBoxWidth * 2;
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState(centerPosition);

  useEffect(() => {
    setMaskPosition({
      cx: viewBoxWidth / 2,
      cy: viewBoxHeight / 2,
    });
  }, [viewBoxHeight, viewBoxWidth]);

  const updateMaskPosition = (clientX: number, clientY: number) => {
    if (!svgRef.current) {
      return;
    }

    const svgRect = svgRef.current.getBoundingClientRect();
    const nextCx = ((clientX - svgRect.left) / svgRect.width) * viewBoxWidth;
    const nextCy = ((clientY - svgRect.top) / svgRect.height) * viewBoxHeight;

    setMaskPosition({
      cx: Math.max(0, Math.min(viewBoxWidth, nextCx)),
      cy: Math.max(0, Math.min(viewBoxHeight, nextCy)),
    });
  };

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      overflow="visible"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      onPointerEnter={(event) => {
        setHovered(true);
        updateMaskPosition(event.clientX, event.clientY);
      }}
      onPointerLeave={() => {
        setHovered(false);
        setMaskPosition(centerPosition);
      }}
      onPointerMove={(event) =>
        updateMaskPosition(event.clientX, event.clientY)
      }
      className="block h-auto w-full select-none overflow-visible"
      style={{ textRendering: "geometricPrecision" }}
      role="img"
      aria-label={label}
    >
      <defs>
        <linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1={viewBoxHeight / 2}
          x2={viewBoxWidth}
          y2={viewBoxHeight / 2}
        >
          <stop offset="0%" stopColor="#eab308" />
          <stop offset="25%" stopColor="#ef4444" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="75%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>

        <motion.radialGradient
          id={revealMaskId}
          gradientUnits="userSpaceOnUse"
          r={revealRadius}
          initial={centerPosition}
          animate={maskPosition}
          transition={{ duration: duration ?? 0.18, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask
          id={maskId}
          maskUnits="userSpaceOnUse"
          maskContentUnits="userSpaceOnUse"
        >
          <rect
            x="0"
            y="0"
            width={viewBoxWidth}
            height={viewBoxHeight}
            fill={`url(#${revealMaskId})`}
          />
        </mask>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Helvetica, Arial, sans-serif"
        fontSize={fontSize}
        fontWeight={700}
        fill="transparent"
        stroke="currentColor"
        strokeWidth={1.5}
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
        strokeLinejoin="round"
        paintOrder="stroke"
        className="text-neutral-200 dark:text-neutral-800"
        style={{ opacity: hovered ? 0.12 : 0 }}
      >
        {label}
      </text>
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Helvetica, Arial, sans-serif"
        fontSize={fontSize}
        fontWeight={700}
        // fill="transparent"
        stroke="currentColor"
        strokeWidth={0.7}
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
        strokeLinejoin="round"
        paintOrder="stroke"
        className="text-neutral-200 dark:text-neutral-800"
        initial={{ strokeDashoffset: dashLength, strokeDasharray: dashLength }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: dashLength,
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
        }}
      >
        {label}
      </motion.text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Helvetica, Arial, sans-serif"
        fontSize={fontSize}
        fontWeight={700}
        fill="transparent"
        stroke={`url(#${gradientId})`}
        strokeWidth={1.5}
        vectorEffect="non-scaling-stroke"
        strokeLinecap="round"
        strokeLinejoin="round"
        paintOrder="stroke"
        mask={`url(#${maskId})`}
        style={{ opacity: hovered ? 1 : 0 }}
      >
        {label}
      </text>
    </svg>
  );
};
