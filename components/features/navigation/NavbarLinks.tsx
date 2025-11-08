/**
 * Navbar Links Component
 *
 * Desktop navigation links component.
 * Following Single Responsibility Principle - only handles desktop navigation links.
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { NavbarLinksProps } from "@/lib/types";

export const NavbarLinks: React.FC<NavbarLinksProps> = ({ items, className }) => {
  return (
    <nav className={cn("hidden md:flex items-center space-x-8", className)}>
      {items.map((item) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <a
            href={item.href}
            className="text-sm text-black dark:text-gray-100 hover:text-black/70 dark:hover:text-gray-400 transition-colors font-geist-sans font-medium"
          >
            {item.label}
          </a>
        </motion.div>
      ))}
    </nav>
  );
};
