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
    id: "jake-cortez-bio",
    tags: ["FOUNDER", "AI ARCHITECT", "SYSTEMS ENGINEER"],
    title: "Jake Cortez: Architecting AI-Powered Operating Systems for Entrepreneurs",
    content: [
      "Jake Cortez operates at the intersection of artificial intelligence, psychometric science, and systematic wealth creation—architecting operating systems that transform entrepreneurial potential into measurable market dominance.",
      "Track Record:\n• Built $5M+ net worth through manufactured home communities and residential development\n• Secured multi-million dollar strategic deals with national homebuilders\n• Designated 'Plat MVP' (highest performer) during Platinum Partnership\n• Trusted advisor to 7-8 figure entrepreneurs across multiple industries",
      "Mission:\n\"Architect AI-powered operating systems for entrepreneurs to scale wealth, wisdom, and impact—simultaneously. This is a systematic integration of material abundance and meaningful contribution, engineered through intelligent technology that amplifies human potential.\"",
      "Active Ecosystem:\nJake is building a multi-brand portfolio including AI Growth Advisor (agentic AI systems for 7-8 figure companies), ProdigyFlow.AI (workforce transformation), IdentityUpgrade.AI (executive transformation), and iSimplify.io (AI discipleship platform launching October 2025).",
    ],
    metadata: [
      { label: "Focus", value: "AI Systems Architecture" },
      { label: "Specialization", value: "Wealth Creation & Executive Transformation" },
    ],
    link: {
      text: "Learn more about Jake's work",
      url: "/about",
    },
    image: "/Jake_Cortez.jpeg",
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
