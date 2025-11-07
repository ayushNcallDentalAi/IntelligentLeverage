/**
 * Application form validation schema
 */

import { z } from "zod";

export const applicationSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),

  email: z
    .string()
    .email("Please enter a valid email address")
    .toLowerCase(),

  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^\+?[1-9]\d{1,14}$/.test(val.replace(/[\s\-\(\)]/g, "")),
      "Please enter a valid phone number"
    ),

  businessRole: z
    .string()
    .min(10, "Please provide at least 10 characters describing your business/role")
    .max(500, "Description must be less than 500 characters"),

  aiChallenge: z
    .string()
    .min(20, "Please provide at least 20 characters describing your biggest AI challenge")
    .max(1000, "Description must be less than 1000 characters"),

  goals: z
    .string()
    .min(20, "Please provide at least 20 characters describing what you hope to achieve")
    .max(1000, "Description must be less than 1000 characters"),

  howHeard: z
    .string()
    .min(1, "Please select how you heard about us"),

  whyAccept: z
    .string()
    .min(50, "Please provide at least 50 characters explaining why we should accept you")
    .max(1500, "Description must be less than 1500 characters"),

  investmentConfirm: z
    .boolean()
    .refine((val) => val === true, {
      message: "You must confirm your investment commitment to proceed",
    }),

  programInterest: z
    .string()
    .min(1, "Please select a program you're interested in"),
});

export type ApplicationFormData = z.infer<typeof applicationSchema>;

/**
 * Default values for the application form
 */
export const applicationDefaults: Partial<ApplicationFormData> = {
  name: "",
  email: "",
  phone: "",
  businessRole: "",
  aiChallenge: "",
  goals: "",
  howHeard: "",
  whyAccept: "",
  investmentConfirm: false,
  programInterest: "",
};
