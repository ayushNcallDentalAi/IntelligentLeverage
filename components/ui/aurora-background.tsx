"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

/**
 * Props for the AuroraBackground component
 */
interface AuroraBackgroundProps
  extends Omit<React.HTMLProps<HTMLDivElement>, "children"> {
  /**
   * Content to be rendered on top of the aurora background
   */
  children: ReactNode;
  /**
   * Whether to show a radial gradient mask for the aurora effect
   * @default true
   */
  showRadialGradient?: boolean;
}

/**
 * AuroraBackground Component
 *
 * Creates an animated aurora borealis (northern lights) background effect
 * with customizable gradient colors and smooth animations.
 *
 * Features:
 * - Animated gradient background with sliding motion
 * - Dual-layer effect for depth
 * - Dark mode support with theme-aware colors
 * - Optional radial gradient masking
 * - Fully responsive and performant
 *
 * @example
 * ```tsx
 * <AuroraBackground>
 *   <h1>Your Content Here</h1>
 * </AuroraBackground>
 * ```
 *
 * @example
 * ```tsx
 * <AuroraBackground showRadialGradient={false} className="custom-class">
 *   <div>Content</div>
 * </AuroraBackground>
 * ```
 */
export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        // Base container styles
        "relative flex flex-col h-[100vh] items-center justify-center",
        // Theme-aware background colors
        "bg-zinc-50 dark:bg-zinc-900",
        // Text color
        "text-slate-950 dark:text-white",
        // Smooth transitions
        "transition-bg",
        // Custom className
        className
      )}
      {...props}
    >
      {/* Aurora effect container */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            // CSS custom property definitions for gradients
            "[--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]",
            "[--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]",
            "[--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]",

            // Background images
            "[background-image:var(--white-gradient),var(--aurora)]",
            "dark:[background-image:var(--dark-gradient),var(--aurora)]",

            // Background sizing and positioning
            "[background-size:300%,_200%]",
            "[background-position:50%_50%,50%_50%]",

            // Blur effect
            "filter blur-[10px]",

            // Pseudo-element for animated layer
            "after:content-['']",
            "after:absolute after:inset-0",
            "after:[background-image:var(--white-gradient),var(--aurora)]",
            "after:dark:[background-image:var(--dark-gradient),var(--aurora)]",
            "after:[background-size:200%,_100%]",
            "after:animate-aurora",
            "after:mix-blend-difference",

            // Positioning and visual effects
            "pointer-events-none",
            "absolute -inset-[10px]",
            "opacity-50",
            "will-change-transform",

            // Optional radial gradient mask
            showRadialGradient &&
              "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]"
          )}
        />
      </div>

      {/* Content rendered on top of aurora */}
      {children}
    </div>
  );
};
