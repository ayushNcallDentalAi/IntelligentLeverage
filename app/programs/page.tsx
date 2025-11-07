/**
 * Programs Page
 * Detailed view of all IntelligentLeverage.AI programs
 */

import React from "react";
import type { Metadata } from "next";
import { Container, Heading, Button } from "@/components/ui";
import { Navbar } from "@/components/features/navigation";
import { Footer } from "@/components/features/footer";
import { Programs } from "@/components/features/programs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Programs | IntelligentLeverage.AI",
  description: "Explore our AI leverage programs: Community, Academy, and Labs. Find the perfect fit for your AI transformation journey.",
};

const comparisonFeatures = [
  {
    category: "Access & Support",
    features: [
      { name: "Monthly Mastermind Forums", community: true, academy: true, labs: true },
      { name: "Private Discord Community", community: true, academy: true, labs: true },
      { name: "Weekly Strategy Calls", community: true, academy: true, labs: true },
      { name: "1-on-1 Implementation Support", community: false, academy: true, labs: true },
      { name: "Direct Founder Access", community: false, academy: false, labs: true },
    ],
  },
  {
    category: "Learning & Development",
    features: [
      { name: "AI Tool Reviews & Recommendations", community: true, academy: true, labs: true },
      { name: "Resource Library Access", community: true, academy: true, labs: true },
      { name: "8-Week Intensive Curriculum", community: false, academy: true, labs: true },
      { name: "Agentic AI Frameworks", community: false, academy: true, labs: true },
      { name: "Custom AI System Design", community: false, academy: true, labs: true },
      { name: "Experimental AI Frameworks", community: false, academy: false, labs: true },
    ],
  },
  {
    category: "Exclusive Opportunities",
    features: [
      { name: "Tool Discounts & Partnerships", community: true, academy: true, labs: true },
      { name: "Weekly Live Workshops", community: false, academy: true, labs: true },
      { name: "Quarterly Retreats", community: false, academy: false, labs: true },
      { name: "Co-creation Projects", community: false, academy: false, labs: true },
      { name: "Longitudinal Data Access", community: false, academy: false, labs: true },
    ],
  },
];

const faqs = [
  {
    question: "What's the difference between the Community and Academy?",
    answer: "The Community is perfect for entrepreneurs who want ongoing support, networking, and AI insights. The Academy is an intensive 8-week program focused on building custom AI systems with 1-on-1 implementation support. Think of Community as continuous learning and networking, while Academy is deep implementation work.",
  },
  {
    question: "How do I get invited to Leverage Labs?",
    answer: "Leverage Labs is invitation-only for proven AI innovators. Invitations are extended to Community and Academy members who demonstrate exceptional results and thought leadership. You can also apply directly if you're already operating at the cutting edge of AI implementation.",
  },
  {
    question: "Can I upgrade from Community to Academy?",
    answer: "Absolutely! Many of our Academy students start in the Community. When you upgrade, your Community membership fees are credited toward the Academy investment for that quarter.",
  },
  {
    question: "What if I'm not satisfied with my program?",
    answer: "We offer a 30-day satisfaction guarantee for all programs. If you're not seeing value within the first month, we'll refund your investment—no questions asked.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes! The Academy offers 3-month and 6-month payment plans. Contact us after applying to discuss payment options that work for your situation.",
  },
  {
    question: "What kind of results can I expect?",
    answer: "Results vary based on your commitment and implementation. Community members typically report 20-40% time savings through AI automation. Academy graduates often achieve 60%+ operational efficiency gains and build AI systems worth $50K+ in value. Labs members are pushing the boundaries of what's possible with AI.",
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="pt-24 pb-16 min-h-screen">
        {/* Hero Section */}
        <section className="py-16">
          <Container maxWidth="lg">
            <div className="text-center space-y-4">
              <Heading level="h1" className="text-4xl md:text-5xl lg:text-6xl">
                Choose Your Leverage Path
              </Heading>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From community learning to elite experimentation—find the program that matches your AI ambition.
              </p>
            </div>
          </Container>
        </section>

        {/* Programs Section */}
        <section className="py-8">
          <Programs />
        </section>

        {/* Comparison Table */}
        <section className="py-16 bg-muted/30">
          <Container maxWidth="xl">
            <div className="text-center mb-12">
              <Heading level="h2" className="text-3xl md:text-4xl mb-4">
                Program Comparison
              </Heading>
              <p className="text-muted-foreground">
                See what's included in each program at a glance
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-background rounded-lg overflow-hidden">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold">Community</th>
                    <th className="text-center p-4 font-semibold">Academy</th>
                    <th className="text-center p-4 font-semibold">Labs</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((category, categoryIndex) => (
                    <React.Fragment key={category.category}>
                      <tr className="bg-muted/50">
                        <td colSpan={4} className="p-4 font-semibold text-sm uppercase tracking-wide">
                          {category.category}
                        </td>
                      </tr>
                      {category.features.map((feature, featureIndex) => (
                        <tr key={featureIndex} className="border-b last:border-b-0">
                          <td className="p-4">{feature.name}</td>
                          <td className="text-center p-4">
                            {feature.community ? (
                              <Check className="w-5 h-5 text-green-600 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />
                            )}
                          </td>
                          <td className="text-center p-4">
                            {feature.academy ? (
                              <Check className="w-5 h-5 text-green-600 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />
                            )}
                          </td>
                          <td className="text-center p-4">
                            {feature.labs ? (
                              <Check className="w-5 h-5 text-green-600 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />
                            )}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <Container maxWidth="lg">
            <div className="text-center mb-12">
              <Heading level="h2" className="text-3xl md:text-4xl mb-4">
                Frequently Asked Questions
              </Heading>
              <p className="text-muted-foreground">
                Everything you need to know about our programs
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <Container maxWidth="md">
            <div className="text-center space-y-6">
              <Heading level="h2" className="text-3xl md:text-4xl">
                Ready to Transform Your AI Strategy?
              </Heading>
              <p className="text-lg text-muted-foreground">
                Join hundreds of entrepreneurs who are already leveraging AI to multiply their impact
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/apply">Apply Now</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/contact">Schedule a Call</a>
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
