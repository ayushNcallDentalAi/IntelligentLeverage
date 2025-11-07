/**
 * Class Name Utility
 *
 * Combines clsx for conditional classes with tailwind-merge for deduplication.
 * Following the Single Responsibility Principle - only handles class name merging.
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
