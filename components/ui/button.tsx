/**
 * Button Component
 *
 * Reusable button component following SOLID principles:
 * - Single Responsibility: Handles button rendering and styling only
 * - Open/Closed: Extensible via variants without modification
 * - Dependency Inversion: Depends on ButtonProps interface abstraction
 */

"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonAnimations } from "@/config/animations";
import type { ButtonProps } from "@/lib/types";

/**
 * Button variants using Class Variance Authority
 * Provides consistent styling with flexible customization
 */
const buttonVariants = cva(
  // Base styles shared across all variants
  [
    "inline-flex items-center justify-center gap-2",
    "rounded-full font-semibold",
    "transition-all duration-300",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "font-[family-name:var(--font-inter)]",
  ],
  {
    variants: {
      variant: {
        primary: [
          "text-white",
          "bg-gradient-to-r from-blue-500 to-blue-600",
          "dark:from-blue-400 dark:to-blue-500",
          "shadow-[0_8px_24px_rgba(59,130,246,0.3)]",
          "dark:shadow-[0_8px_32px_rgba(96,165,250,0.4)]",
          "hover:shadow-[0_12px_32px_rgba(59,130,246,0.4)]",
          "dark:hover:shadow-[0_12px_40px_rgba(96,165,250,0.5)]",
        ],
        secondary: [
          "text-black dark:text-white",
          "bg-white/30 dark:bg-zinc-900/30",
          "backdrop-blur-xl backdrop-saturate-150",
          "border-2 border-white/30 dark:border-white/20",
          "hover:bg-white/40 dark:hover:bg-zinc-900/40",
          "hover:border-blue-500/50 dark:hover:border-blue-400/50",
          "shadow-[0_4px_16px_rgba(0,0,0,0.08)]",
          "dark:shadow-[0_4px_16px_rgba(0,0,0,0.3)]",
        ],
        outline: [
          "text-blue-600 dark:text-blue-400",
          "border-2 border-blue-500 dark:border-blue-400",
          "hover:bg-blue-50 dark:hover:bg-blue-950",
        ],
        ghost: [
          "text-gray-700 dark:text-gray-300",
          "hover:bg-gray-100 dark:hover:bg-gray-800",
        ],
      },
      size: {
        sm: "px-6 py-3 text-sm min-w-[140px]",
        default: "px-8 py-4 text-base min-w-[180px]",
        lg: "px-10 py-5 text-lg min-w-[220px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

/**
 * Button Component with animation support
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, children, onClick, disabled, type, ...restProps }, ref) => {
    // Note: asChild prop is accepted for API consistency but not currently implemented
    // To fully support asChild, consider using @radix-ui/react-slot
    return (
      <motion.button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled}
        whileHover={buttonAnimations.hover}
        whileTap={buttonAnimations.tap}
        transition={buttonAnimations.transition}
        className={cn(buttonVariants({ variant, size, className }))}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
