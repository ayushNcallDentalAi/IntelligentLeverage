/**
 * Contact form validation schema
 */

import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),

  email: z
    .string()
    .email("Please enter a valid email address")
    .toLowerCase(),

  subject: z
    .string()
    .min(1, "Please select a subject"),

  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(2000, "Message must be less than 2000 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

/**
 * Default values for the contact form
 */
export const contactDefaults: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
