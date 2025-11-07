/**
 * Newsletter subscription validation schema
 */

import { z } from "zod";

/**
 * Simple newsletter schema (for inline forms like footer)
 */
export const newsletterSimpleSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .toLowerCase(),
});

/**
 * Full newsletter schema (for dedicated subscription page)
 */
export const newsletterFullSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .toLowerCase(),

  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters")
    .optional(),

  interests: z
    .array(z.string())
    .optional()
    .default([]),
});

export type NewsletterSimpleData = z.infer<typeof newsletterSimpleSchema>;
export type NewsletterFullData = z.infer<typeof newsletterFullSchema>;

/**
 * Default values for newsletter forms
 */
export const newsletterSimpleDefaults: NewsletterSimpleData = {
  email: "",
};

export const newsletterFullDefaults: NewsletterFullData = {
  email: "",
  firstName: "",
  interests: [],
};
