/**
 * Hero Headline Component
 *
 * Displays the main headline with animation.
 * Following Single Responsibility Principle - only handles headline rendering.
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heading } from "@/components/ui";
import { heroAnimations } from "@/config/animations";

interface HeroHeadlineProps {
  children: React.ReactNode;
}

export const HeroHeadline: React.FC<HeroHeadlineProps> = ({ children }) => {
  return (
    <motion.div
      initial={heroAnimations.headline.initial}
      animate={heroAnimations.headline.animate}
      transition={heroAnimations.headline.transition}
    >
      <Heading level="h1">{children}</Heading>
    </motion.div>
  );
};
