/**
 * Animation Configuration
 *
 * Centralized animation settings for Framer Motion.
 * Following the Single Responsibility Principle (SRP) - this file only handles animation configurations.
 */

import type { Variants, Transition } from "framer-motion";

/**
 * Standard easing functions
 */
export const easing = {
  easeOut: [0.22, 1, 0.36, 1],
  easeInOut: [0.43, 0.13, 0.23, 0.96],
  spring: { type: "spring" as const, stiffness: 300, damping: 30 },
} as const;

/**
 * Hero section animation timings
 */
export const heroAnimations = {
  badge: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.1, duration: 0.5, ease: "easeOut" } as Transition,
  },
  headline: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.2, duration: 0.6, ease: "easeOut" } as Transition,
  },
  subheading: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.3, duration: 0.6, ease: "easeOut" } as Transition,
  },
  cta: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.4, duration: 0.6, ease: "easeOut" } as Transition,
  },
} as const;

/**
 * Button hover animations
 */
export const buttonAnimations = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
  transition: { duration: 0.2 },
} as const;

/**
 * Section fade-in animation variants
 */
export const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/**
 * Stagger children animation
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/**
 * Stagger item animation
 */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/**
 * Fade in up animation
 */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
