/**
 * Container Component
 *
 * Layout container component following SOLID principles:
 * - Single Responsibility: Handles content containment and max-width only
 * - Open/Closed: Extensible via props without modification
 */

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ContainerProps } from "@/lib/types";

/**
 * Container variants for different max-widths
 */
const containerVariants = cva(["w-full", "px-4", "sm:px-6", "lg:px-8"], {
  variants: {
    maxWidth: {
      sm: "max-w-[640px]",
      md: "max-w-[768px]",
      lg: "max-w-[900px]",
      xl: "max-w-[1024px]",
      "2xl": "max-w-[1280px]",
      full: "max-w-full",
    },
    centered: {
      true: "mx-auto",
      false: "",
    },
  },
  defaultVariants: {
    maxWidth: "lg",
    centered: true,
  },
});

export type ContainerVariantProps = VariantProps<typeof containerVariants>;

/**
 * Container Component
 */
export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ maxWidth, centered, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(containerVariants({ maxWidth, centered, className }))}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";
