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
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2",
    "font-[family-name:var(--font-inter)]",
  ],
  {
    variants: {
      variant: {
        primary: [
          "text-white",
          "bg-black",
          "border-2 border-black",
          "shadow-[0_4px_12px_rgba(0,0,0,0.3)]",
          "hover:shadow-[0_8px_20px_rgba(0,0,0,0.4)]",
          "hover:bg-gray-900",
        ],
        secondary: [
          "text-white",
          "bg-black",
          "border-2 border-white",
          "hover:bg-white",
          "hover:text-black",
          "shadow-[0_2px_8px_rgba(0,0,0,0.2)]",
          "hover:shadow-[0_4px_16px_rgba(0,0,0,0.3)]",
        ],
        outline: [
          "text-black",
          "bg-transparent",
          "border-2 border-black",
          "hover:bg-black",
          "hover:text-white",
        ],
        ghost: [
          "text-black",
          "bg-transparent",
          "hover:bg-gray-900",
          "hover:text-white",
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
