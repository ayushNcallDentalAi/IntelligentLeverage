/**
 * Strategy Call Booking Page
 *
 * Complete page for booking AI strategy consultations
 */

import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/features/navigation";
import { Footer } from "@/components/features/footer";
import { StrategyCallForm } from "@/components/features/forms";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar, Lightbulb, Target, Shield, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Book Your AI Strategy Call | IntelligentLeverage.AI",
  description:
    "Schedule a free 30-minute consultation with our AI experts. Get personalized guidance on implementing AI in your business.",
};

const benefits = [
  {
    icon: Lightbulb,
    title: "Expert Guidance",
    description:
      "Get personalized advice from AI implementation specialists with years of experience helping businesses scale with AI.",
  },
  {
    icon: Target,
    title: "Custom Roadmap",
    description:
      "Walk away with a clear action plan tailored to your specific business needs, goals, and current challenges.",
  },
  {
    icon: Shield,
    title: "No Obligation",
    description:
      "Free 30-minute consultation with zero commitment. We're here to help you succeed, not to pressure you.",
  },
];

const faqs = [
  {
    question: "What should I prepare for the call?",
    answer:
      "Come prepared to discuss your business goals, current challenges, and where you see AI fitting into your operations. Having specific questions or pain points in mind helps us provide more targeted guidance.",
  },
  {
    question: "How long is the consultation?",
    answer:
      "Strategy calls typically last 30 minutes. This gives us enough time to understand your needs and provide meaningful insights without taking up too much of your valuable time.",
  },
  {
    question: "Who will I be speaking with?",
    answer:
      "You'll speak with one of our AI strategy consultants who has extensive experience helping businesses implement AI solutions. They'll understand your industry and can provide relevant, actionable advice.",
  },
  {
    question: "What happens after the call?",
    answer:
      "After the call, you'll receive a summary of our discussion and recommended next steps. There's no obligation to join any program—the call is purely to help you understand your AI opportunities.",
  },
];

export default function CallPage() {
  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pb-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <Container maxWidth="xl">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-500/10 mb-6">
              <Calendar className="w-10 h-10 text-blue-600" />
            </div>

            <Heading level="h1" className="text-4xl md:text-5xl lg:text-6xl">
              Book Your AI Strategy Call
            </Heading>

            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Schedule a personalized 30-minute consultation to discover how AI
              can transform your business. No obligation, just expert guidance.
            </p>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-white">
        <Container maxWidth="xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Form Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <Container maxWidth="lg">
          <StrategyCallForm />
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <Container maxWidth="lg">
          <div className="text-center mb-12">
            <Heading level="h2" className="text-3xl md:text-4xl mb-4">
              Frequently Asked Questions
            </Heading>
            <p className="text-gray-600 text-lg">
              Everything you need to know about your strategy call
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </section>

      {/* Alternative CTAs */}
      <section className="py-12 bg-muted">
        <Container maxWidth="md">
          <div className="text-center space-y-6">
            <p className="text-lg font-semibold text-gray-900">
              Not ready to book a call yet?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/programs"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                View Programs
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/community"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Join Community
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
