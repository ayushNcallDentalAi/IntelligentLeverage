/**
 * Hero Subheading Component
 *
 * Displays the subheading/description with animation.
 * Following Single Responsibility Principle - only handles subheading rendering.
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { heroAnimations } from "@/config/animations";

interface HeroSubheadingProps {
  children: React.ReactNode;
  className?: string;
}

export const HeroSubheading: React.FC<HeroSubheadingProps> = ({
  children,
  className,
}) => {
  return (
    <motion.p
      initial={heroAnimations.subheading.initial}
      animate={heroAnimations.subheading.animate}
      transition={heroAnimations.subheading.transition}
      className={cn(
        "text-base sm:text-lg md:text-xl lg:text-2xl",
        "text-black dark:text-white",
        "leading-relaxed max-w-[700px] mx-auto",
        "font-[family-name:var(--font-inter)]",
        "[text-shadow:1px_1px_2px_rgba(0,0,0,0.08)]",
        "dark:[text-shadow:1px_1px_2px_rgba(255,255,255,0.08)]",
        className
      )}
    >
      {children}
    </motion.p>
  );
};
