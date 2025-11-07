/**
 * Hero CTA (Call-to-Action) Component
 *
 * Displays primary and secondary CTA buttons with animation.
 * Following Single Responsibility Principle - only handles CTA button group rendering.
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { heroAnimations, buttonAnimations } from "@/config/animations";

interface CTAButton {
  text: string;
  href: string;
}

interface HeroCTAProps {
  primary?: CTAButton;
  secondary?: CTAButton;
}

export const HeroCTA: React.FC<HeroCTAProps> = ({ primary, secondary }) => {
  if (!primary && !secondary) return null;

  return (
    <motion.div
      initial={heroAnimations.cta.initial}
      animate={heroAnimations.cta.animate}
      transition={heroAnimations.cta.transition}
      className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
    >
      {primary && (
        <motion.a
          href={primary.href}
          whileHover={buttonAnimations.hover}
          whileTap={buttonAnimations.tap}
          className={cn(
            "group inline-flex items-center justify-center gap-2",
            "px-8 py-4 rounded-full text-base font-semibold text-white min-w-[180px]",
            "bg-gradient-to-r from-blue-500 to-blue-600",
            "dark:from-blue-400 dark:to-blue-500",
            "shadow-[0_8px_24px_rgba(59,130,246,0.3)]",
            "dark:shadow-[0_8px_32px_rgba(96,165,250,0.4)]",
            "hover:shadow-[0_12px_32px_rgba(59,130,246,0.4)]",
            "dark:hover:shadow-[0_12px_40px_rgba(96,165,250,0.5)]",
            "transition-all duration-300",
            "font-[family-name:var(--font-inter)]"
          )}
        >
          <span>{primary.text}</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.a>
      )}

      {secondary && (
        <motion.a
          href={secondary.href}
          whileHover={buttonAnimations.hover}
          whileTap={buttonAnimations.tap}
          className={cn(
            "group inline-flex items-center justify-center gap-2",
            "px-8 py-4 rounded-full text-base font-semibold min-w-[180px]",
            "text-black dark:text-white",
            "bg-white/30 dark:bg-zinc-900/30",
            "backdrop-blur-xl backdrop-saturate-150",
            "border-2 border-white/30 dark:border-white/20",
            "hover:bg-white/40 dark:hover:bg-zinc-900/40",
            "hover:border-blue-500/50 dark:hover:border-blue-400/50",
            "shadow-[0_4px_16px_rgba(0,0,0,0.08)]",
            "dark:shadow-[0_4px_16px_rgba(0,0,0,0.3)]",
            "transition-all duration-300",
            "font-[family-name:var(--font-inter)]"
          )}
        >
          <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span>{secondary.text}</span>
        </motion.a>
      )}
    </motion.div>
  );
};
