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
      className="flex flex-col sm:flex-row items-center justify-center gap-4"
    >
      {primary && (
        <motion.a
          href={primary.href}
          whileHover={buttonAnimations.hover}
          whileTap={buttonAnimations.tap}
          className={cn(
            "group inline-flex items-center justify-center gap-2",
            "px-8 py-4 rounded-full text-base font-semibold text-white min-w-[180px]",
            "bg-black",
            "border-2 border-black",
            "shadow-[0_4px_12px_rgba(0,0,0,0.3)]",
            "hover:shadow-[0_8px_20px_rgba(0,0,0,0.4)]",
            "hover:bg-gray-900",
            "transition-all duration-300",
            "font-[family-name:var(--font-inter)]"
          )}
        >
          <span>{primary.text}</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.a>
      )}
    </motion.div>
  );
};
