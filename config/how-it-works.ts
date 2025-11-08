/**
 * How It Works / Process Steps Configuration
 * Contains data for the IntelligentLeverage.AI transformation journey
 */

import type { LucideIcon } from "lucide-react";
import {
  FileText,
  Rocket,
  GraduationCap,
  Settings,
  Network,
} from "lucide-react";

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  {
    id: "apply",
    step: 1,
    title: "Apply",
    description:
      "Submit your application and tell us about your business goals, current challenges, and vision for AI implementation.",
    icon: FileText,
  },
  {
    id: "onboard",
    step: 2,
    title: "Onboard",
    description:
      "Get personalized onboarding with our team. We assess your needs and design a custom roadmap for your success.",
    icon: Rocket,
  },
  {
    id: "learn",
    step: 3,
    title: "Learn",
    description:
      "Access our proven frameworks, live workshops, and expert guidance to master AI leverage strategies for your business.",
    icon: GraduationCap,
  },
  {
    id: "implement",
    step: 4,
    title: "Implement",
    description:
      "Build and deploy AI systems with 1-on-1 support. We help you execute your strategy and overcome technical challenges.",
    icon: Settings,
  },
  {
    id: "multiply",
    step: 5,
    title: "Multiply",
    description:
      "Share wins, compound knowledge, elevate others",
    icon: Network,
  },
];

/**
 * Get process step by ID
 */
export function getProcessStepById(id: string): ProcessStep | undefined {
  return processSteps.find((step) => step.id === id);
}

/**
 * Get all process steps
 */
export function getProcessSteps(): ProcessStep[] {
  return processSteps;
}

/**
 * Get process step by step number
 */
export function getProcessStepByNumber(stepNumber: number): ProcessStep | undefined {
  return processSteps.find((step) => step.step === stepNumber);
}
