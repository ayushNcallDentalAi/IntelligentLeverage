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
  alt = "Logo",
  href = "/"
}) => {
  return (
    <a href={href} className="flex items-center">
      <motion.div
        className="w-8 h-8 mr-6"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        whileHover={{ rotate: 10 }}
        transition={{ duration: 0.3 }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label={alt}
        >
          <circle cx="16" cy="16" r="16" fill="url(#paint0_linear)" />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="0"
              y1="0"
              x2="32"
              y2="32"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF9966" />
              <stop offset="1" stopColor="#FF5E62" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </a>
  );
};
