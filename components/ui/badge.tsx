/**
 * Badge Component
 *
 * Reusable badge/pill component following SOLID principles:
 * - Single Responsibility: Handles badge rendering and styling only
 * - Open/Closed: Extensible via variants without modification
 * - Dependency Inversion: Depends on BadgeProps interface abstraction
 */

"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { BadgeProps } from "@/lib/types";

/**
 * Badge variants using Class Variance Authority
 */
const badgeVariants = cva(
  [
    "inline-flex items-center gap-2",
    "px-4 py-2 rounded-full",
    "text-xs font-medium uppercase tracking-wider",
    "backdrop-blur-xl backdrop-saturate-150",
    "transition-all duration-300",
    "font-[family-name:var(--font-inter)]",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-white/30 dark:bg-zinc-900/30",
          "border border-white/20 dark:border-white/10",
          "text-black dark:text-white",
          "shadow-[0_4px_16px_rgba(59,130,246,0.1)]",
          "dark:shadow-[0_4px_16px_rgba(96,165,250,0.15)]",
        ],
        secondary: [
          "bg-gray-100/80 dark:bg-gray-800/80",
          "border border-gray-200 dark:border-gray-700",
          "text-gray-700 dark:text-gray-300",
        ],
        outline: [
          "bg-transparent",
          "border-2 border-blue-500 dark:border-blue-400",
          "text-blue-600 dark:text-blue-400",
        ],
        success: [
          "bg-green-100/80 dark:bg-green-900/30",
          "border border-green-200 dark:border-green-800",
          "text-green-700 dark:text-green-400",
        ],
        warning: [
          "bg-yellow-100/80 dark:bg-yellow-900/30",
          "border border-yellow-200 dark:border-yellow-800",
          "text-yellow-700 dark:text-yellow-400",
        ],
        error: [
          "bg-red-100/80 dark:bg-red-900/30",
          "border border-red-200 dark:border-red-800",
          "text-red-700 dark:text-red-400",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export type BadgeVariantProps = VariantProps<typeof badgeVariants>;

/**
 * Badge Component
 */
export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, emoji, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant, className }))}
        {...props}
      >
        {emoji && <span className="text-2xl">{emoji}</span>}
        <span>{children}</span>
      </div>
    );
  }
);

Badge.displayName = "Badge";
