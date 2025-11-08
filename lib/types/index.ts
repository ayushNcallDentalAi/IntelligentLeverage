/**
 * Shared TypeScript Type Definitions
 *
 * Centralized type definitions following the Interface Segregation Principle (ISP).
 * Each interface is focused and specific to its use case.
 */

import type { ReactNode, HTMLAttributes, ButtonHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";

/**
 * Base component props that all components can extend
 */
export interface BaseComponentProps {
  children?: ReactNode;
  className?: string;
}

/**
 * Button variant types
 */
export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "default" | "lg";

/**
 * Button component props
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  children: ReactNode;
  className?: string;
}

/**
 * Badge variant types
 */
export type BadgeVariant = "default" | "secondary" | "outline" | "success" | "warning" | "error";

/**
 * Badge component props
 */
export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
  emoji?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Heading levels
 */
export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

/**
 * Heading component props
 */
export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  gradient?: boolean;
  children: ReactNode;
  className?: string;
}

/**
 * Container component props
 */
export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  centered?: boolean;
  children: ReactNode;
  className?: string;
}

/**
 * Hero section props
 */
export interface HeroProps {
  announcement?: {
    emoji?: string;
    text: string;
  };
  headline: string;
  subheading: string;
  cta?: {
    primary?: {
      text: string;
      href: string;
    };
    secondary?: {
      text: string;
      href: string;
    };
  };
}

/**
 * Section props (generic for About, Resources, Product sections)
 */
export interface SectionProps extends HTMLAttributes<HTMLElement> {
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

/**
 * Animation prop types
 */
export interface AnimationProps {
  delay?: number;
  duration?: number;
  ease?: string | number[];
}

/**
 * Icon component props
 */
export interface IconProps extends HTMLAttributes<SVGElement> {
  size?: number;
  className?: string;
}

/**
 * Navigation item type
 */
export interface NavigationItem {
  label: string;
  href: string;
}

/**
 * Header component props
 */
export interface HeaderProps {
  className?: string;
}

/**
 * Navbar component props
 */
export interface NavbarProps {
  className?: string;
  showLogo?: boolean;
}

/**
 * Navbar logo props
 */
export interface NavbarLogoProps {
  alt?: string;
  href?: string;
}

/**
 * Navbar links props
 */
export interface NavbarLinksProps {
  items: NavigationItem[];
  className?: string;
}

/**
 * Navbar CTA props
 */
export interface NavbarCTAProps {
  label: string;
  href: string;
  className?: string;
}

/**
 * Navbar mobile menu props
 */
export interface NavbarMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavigationItem[];
  cta: {
    label: string;
    href: string;
  };
}
