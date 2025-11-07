/**
 * Founder Section Configuration
 * Contains data for the Meet Your Guide section
 */

export interface FounderCard {
  id: string;
  tags: string[];
  title: string;
  content: string | string[];
  metadata: {
    label: string;
    value: string;
  }[];
  link?: {
    text: string;
    url: string;
  };
  image: string;
}

export const founderCards: FounderCard[] = [
  {
    id: "founder-bio",
    tags: ["Founder", "AI Expert", "Entrepreneur"],
    title: "Ryan Watkins: Pioneer in AI-Powered Business Leverage",
    content: [
      "Ryan Watkins is an entrepreneur, strategist, and pioneer in AI-powered business leverage. With over a decade of experience building and scaling technology companies, Ryan has helped hundreds of entrepreneurs transform their businesses through intelligent automation and AI integration.",
      "After experiencing burnout from scaling his first company the traditional way, Ryan discovered the power of leveraging AI to multiply output without sacrificing time or energy. This revelation led to the creation of IntelligentLeverage.AI and the PartnerAI framework.",
      "Today, Ryan is dedicated to helping ambitious entrepreneurs break free from the time-for-money trap and build businesses that scale exponentially through AI leverage.",
    ],
    metadata: [
      { label: "Role", value: "Founder & CEO" },
      { label: "Company", value: "THYNK Unlimited" },
    ],
    link: {
      text: "Read full story",
      url: "/about",
    },
    image: "/images/founder-ryan.jpg",
  },
  {
    id: "achievements",
    tags: ["Experience", "Impact"],
    title: "Proven Track Record of Success",
    content: [
      "🚀 10+ Years in Tech — Built and scaled multiple technology companies with proven systems and frameworks.",
      "🎯 500+ Entrepreneurs Helped — Guided hundreds of business owners in implementing AI strategies that drive real results.",
      "🤖 Creator of PartnerAI — Developed the revolutionary framework for building agentic AI systems that execute business strategy.",
      "📚 AI Integration Expert — Recognized thought leader in practical AI implementation for entrepreneurs and small businesses.",
    ],
    metadata: [
      { label: "Started", value: "Since 2014" },
      { label: "Status", value: "Ongoing" },
    ],
    image: "/images/achievements.jpg",
  },
];

/**
 * Get all founder cards
 */
export function getFounderCards(): FounderCard[] {
  return founderCards;
}

/**
 * Get founder card by ID
 */
export function getFounderCardById(id: string): FounderCard | undefined {
  return founderCards.find((card) => card.id === id);
}
