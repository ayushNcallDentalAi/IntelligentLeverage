/**
 * Mock API handlers for form submissions
 * No backend - these functions simulate API responses
 */

import type { ApplicationFormData } from "@/lib/validations/application";
import type { NewsletterSimpleData, NewsletterFullData } from "@/lib/validations/newsletter";
import type { ContactFormData } from "@/lib/validations/contact";
import type { StrategyCallFormData } from "@/lib/validations/strategy-call";

/**
 * Mock response type
 */
export interface MockApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  id?: string;
}

/**
 * Simulate network delay
 */
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Generate mock ID
 */
function generateMockId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Submit application form
 */
export async function submitApplication(
  data: ApplicationFormData
): Promise<MockApiResponse<ApplicationFormData>> {
  console.log("📝 Application Form Submission:", data);

  // Simulate API delay
  await delay(1500);

  // Mock validation - check for test emails
  if (data.email.includes("test@test.com")) {
    throw new Error("This email is already registered");
  }

  // Mock success response
  return {
    success: true,
    message: "Application submitted successfully! We'll review your application and get back to you within 2-3 business days.",
    id: generateMockId(),
    data,
  };
}

/**
 * Subscribe to newsletter (simple)
 */
export async function subscribeNewsletterSimple(
  data: NewsletterSimpleData
): Promise<MockApiResponse<NewsletterSimpleData>> {
  console.log("📧 Newsletter Subscription (Simple):", data);

  // Simulate API delay
  await delay(1000);

  // Mock validation
  if (data.email.includes("spam")) {
    throw new Error("Invalid email address");
  }

  return {
    success: true,
    message: "Successfully subscribed! Check your email to confirm your subscription.",
    id: generateMockId(),
    data,
  };
}

/**
 * Subscribe to newsletter (full)
 */
export async function subscribeNewsletterFull(
  data: NewsletterFullData
): Promise<MockApiResponse<NewsletterFullData>> {
  console.log("📧 Newsletter Subscription (Full):", data);

  // Simulate API delay
  await delay(1000);

  return {
    success: true,
    message: `Welcome${data.firstName ? `, ${data.firstName}` : ""}! Check your email to confirm your subscription.`,
    id: generateMockId(),
    data,
  };
}

/**
 * Submit contact form
 */
export async function submitContact(
  data: ContactFormData
): Promise<MockApiResponse<ContactFormData>> {
  console.log("💬 Contact Form Submission:", data);

  // Simulate API delay
  await delay(1200);

  return {
    success: true,
    message: "Message sent successfully! We'll get back to you within 24-48 hours.",
    id: generateMockId(),
    data,
  };
}

/**
 * Submit strategy call booking
 */
export async function submitStrategyCall(
  data: StrategyCallFormData
): Promise<MockApiResponse<StrategyCallFormData>> {
  console.log("📞 Strategy Call Booking:", data);

  // Simulate API delay
  await delay(1500);

  return {
    success: true,
    message: "Strategy call requested! We'll send you a calendar invite to confirm your appointment.",
    id: generateMockId(),
    data,
  };
}

/**
 * Mock error handler
 */
export function handleMockError(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return "An unexpected error occurred. Please try again.";
}
