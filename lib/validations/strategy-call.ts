/**
 * Strategy call booking validation schema
 */

import { z } from "zod";

export const strategyCallSchema = z.object({
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
    .min(1, "Phone number is required for scheduling calls")
    .refine(
      (val) => /^\+?[1-9]\d{1,14}$/.test(val.replace(/[\s\-\(\)]/g, "")),
      "Please enter a valid phone number"
    ),

  companySize: z
    .string()
    .min(1, "Please select your company size"),

  timePreference: z
    .string()
    .min(1, "Please select your preferred time"),

  preferredDate: z
    .date({
      message: "Please select a preferred date",
    })
    .refine(
      (date) => date > new Date(),
      "Preferred date must be in the future"
    ),

  timezone: z
    .string()
    .min(1, "Timezone is required"),

  notes: z
    .string()
    .max(1000, "Notes must be less than 1000 characters")
    .optional(),
});

export type StrategyCallFormData = z.infer<typeof strategyCallSchema>;

/**
 * Default values for the strategy call form
 */
export const strategyCallDefaults: Partial<StrategyCallFormData> = {
  name: "",
  email: "",
  phone: "",
  companySize: "",
  timePreference: "",
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  notes: "",
};
