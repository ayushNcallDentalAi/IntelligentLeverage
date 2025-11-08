/**
 * Program offerings configuration
 * Contains data for IntelligentLeverage.AI programs
 */

export interface ProgramFeature {
  text: string;
  included: boolean;
}

export interface Program {
  id: string;
  badge?: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  cta: {
    text: string;
    href: string;
  };
  popular?: boolean;
  detailedFeatures?: ProgramFeature[];
  outcomes?: string[];
  whoItsFor?: string;
}

export const programs: Program[] = [
  {
    id: "community",
    badge: "COMMUNITY",
    title: "IntelligentLeverage.AI Community",
    tagline: "Where the Future Learns Together",
    description: "Join a curated network of entrepreneurs leveraging AI for exponential growth.",
    features: [
      "Monthly mastermind forums",
      "AI tool reviews and recommendations",
      "Private Discord community",
      "Weekly strategy calls",
      "Resource library access",
      "Tool discounts and partnerships",
    ],
    cta: {
      text: "Join Community",
      href: "/apply?program=community",
    },
    whoItsFor: "Entrepreneurs and business owners ready to integrate AI into their operations and connect with like-minded innovators.",
    outcomes: [
      "Master practical AI implementation strategies",
      "Build a network of AI-forward entrepreneurs",
      "Access curated AI tools and resources",
      "Accelerate your AI transformation journey",
    ],
  },
  {
    id: "academy",
    badge: "ACADEMY",
    title: "PartnerAI Academy",
    tagline: "Train Your AI to Execute Your Strategy",
    description: "8-week intensive program to build agentic AI systems that work for you.",
    features: [
      "8-week intensive curriculum",
      "Agentic AI frameworks",
      "1-on-1 implementation support",
      "Custom AI system design",
      "Weekly live workshops",
      "Lifetime community access",
    ],
    cta: {
      text: "Apply for Academy",
      href: "/apply?program=academy",
    },
    whoItsFor: "Serious entrepreneurs ready to invest in building AI-powered systems that execute their business strategy autonomously.",
    outcomes: [
      "Build custom AI agents for your business",
      "Implement agentic AI frameworks",
      "Automate strategic decision-making",
      "Create sustainable AI-driven leverage",
    ],
  },
  {
    id: "labs",
    badge: "ELITE",
    title: "Leverage Labs",
    tagline: "Elite Think-Tank for AI Experimenters",
    description: "Invitation-only lab for pioneers pushing the boundaries of AI leverage.",
    features: [
      "Invite-only membership",
      "Longitudinal data access",
      "Co-creation projects",
      "Quarterly retreats",
      "Direct founder access",
      "Experimental AI frameworks",
    ],
    cta: {
      text: "Request Invitation",
      href: "/apply?program=labs",
    },
    whoItsFor: "Visionary leaders and innovators operating at the cutting edge of AI implementation who want to shape the future of intelligent leverage.",
    outcomes: [
      "Influence the future of AI leverage",
      "Collaborate on breakthrough projects",
      "Access exclusive AI research and data",
      "Join an elite network of AI pioneers",
    ],
  },
];

/**
 * Get program by ID
 */
export function getProgramById(id: string): Program | undefined {
  return programs.find((program) => program.id === id);
}

/**
 * Get featured/popular program
 */
export function getFeaturedProgram(): Program | undefined {
  return programs.find((program) => program.popular);
}
