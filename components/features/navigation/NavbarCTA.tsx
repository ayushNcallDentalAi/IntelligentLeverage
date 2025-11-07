/**
 * Navbar CTA Component
 *
 * Call-to-action button for the navbar.
 * Following Single Responsibility Principle - only handles CTA button rendering.
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { NavbarCTAProps } from "@/lib/types";

export const NavbarCTA: React.FC<NavbarCTAProps> = ({
  label,
  href,
  className
}) => {
  return (
    <motion.div
      className={cn("hidden md:block", className)}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      whileHover={{ scale: 1.05 }}
    >
      <a
        href={href}
        className="inline-flex items-center justify-center px-5 py-2 text-sm text-white bg-black dark:bg-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
      >
        {label}
      </a>
    </motion.div>
  );
};
