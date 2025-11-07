/**
 * Heading Component
 *
 * Semantic heading component following SOLID principles:
 * - Single Responsibility: Handles heading rendering and styling only
 * - Open/Closed: Extensible via props without modification
 * - Liskov Substitution: Properly implements heading semantics (h1-h6)
 */

import React from "react";
import { cn } from "@/lib/utils";
import type { HeadingProps, HeadingLevel } from "@/lib/types";

/**
 * Heading size classes mapped to semantic levels
 */
const headingSizes: Record<HeadingLevel, string> = {
  h1: "text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[96px] font-bold tracking-tighter leading-[1.1]",
  h2: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight",
  h3: "text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight",
  h4: "text-xl sm:text-2xl md:text-3xl font-semibold",
  h5: "text-lg sm:text-xl md:text-2xl font-semibold",
  h6: "text-base sm:text-lg md:text-xl font-semibold",
};

/**
 * Heading Component with semantic HTML and gradient support
 */
export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = "h2", gradient = false, className, children, ...props }, ref) => {
    const Component = level as React.ElementType;

    const baseClasses = cn(
      headingSizes[level],
      "text-black dark:text-white",
      "font-[family-name:var(--font-geist-sans)]",
      gradient && [
        "bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600",
        "dark:from-blue-400 dark:via-purple-400 dark:to-blue-400",
        "bg-clip-text text-transparent",
      ],
      className
    );

    return (
      <Component ref={ref as any} className={baseClasses} {...props}>
        {children}
      </Component>
    );
  }
);

Heading.displayName = "Heading";
