/**
 * Navbar Mobile Menu Component
 *
 * Mobile menu overlay component.
 * Following Single Responsibility Principle - only handles mobile menu rendering.
 */

"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { NavbarMobileMenuProps } from "@/lib/types";

export const NavbarMobileMenu: React.FC<NavbarMobileMenuProps> = ({
  isOpen,
  onClose,
  items,
  cta,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-white dark:bg-zinc-900 z-50 pt-24 px-6 md:hidden"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          <motion.button
            className="absolute top-6 right-6 p-2"
            onClick={onClose}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-gray-900 dark:text-gray-100" />
          </motion.button>

          <div className="flex flex-col space-y-6">
            {items.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 + 0.1 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <a
                  href={item.href}
                  className="text-base text-gray-900 dark:text-gray-100 font-medium"
                  onClick={onClose}
                >
                  {item.label}
                </a>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              exit={{ opacity: 0, y: 20 }}
              className="pt-6"
            >
              <a
                href={cta.href}
                className="inline-flex items-center justify-center w-full px-5 py-3 text-base text-white bg-black dark:bg-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                onClick={onClose}
              >
                {cta.label}
              </a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
