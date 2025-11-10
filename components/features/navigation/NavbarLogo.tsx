/**
 * Navbar Logo Component
 *
 * Logo component for the navbar.
 * Following Single Responsibility Principle - only handles logo rendering.
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import type { NavbarLogoProps } from "@/lib/types";

export const NavbarLogo: React.FC<NavbarLogoProps> = ({
  alt = "IntelligentLeverage.AI",
  href = "/"
}) => {
  return (
    <a href={href} className="flex items-center">
      <motion.span
        className="font-geist-sans text-xl font-bold text-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        IntelligentLeverage.AI
      </motion.span>
    </a>
  );
};
