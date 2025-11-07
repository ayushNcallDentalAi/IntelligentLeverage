/**
 * About Page
 * Company mission, principles, team, and story
 */

import React from "react";
import type { Metadata } from "next";
import { Container, Heading } from "@/components/ui";
import { Navbar } from "@/components/features/navigation";
import { Footer } from "@/components/features/footer";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui";
import {
  Target,
  Lightbulb,
  Users,
  Rocket,
  Shield,
  Zap,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About | IntelligentLeverage.AI",
  description: "Learn about our mission to multiply human potential through intelligent AI leverage.",
};

const principles = [
  {
    icon: Target,
    title: "Leverage Over Labor",
    description: "We believe in building systems that compound, not trading time for money.",
  },
  {
    icon: Lightbulb,
    title: "Intelligence Compounds",
    description: "When shared in aligned ecosystems, knowledge multiplies exponentially.",
  },
  {
    icon: Users,
    title: "Community-First",
    description: "The future is built together, not in isolation.",
  },
  {
    icon: Rocket,
    title: "Bias Toward Action",
    description: "Perfect is the enemy of leverage. Ship, learn, iterate.",
  },
  {
    icon: Shield,
    title: "Ethical AI",
    description: "Technology should amplify human potential, not replace humanity.",
  },
  {
    icon: Zap,
    title: "Radical Transparency",
    description: "We share what works, what doesn't, and the data to prove it.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Evolution",
    description: "The only constant is change. We adapt, experiment, and evolve.",
  },
];

const differentiators = [
  {
    title: "Practitioners, Not Theorists",
    description: "Every framework we teach comes from real implementations in 7-figure+ businesses. We don't sell theories—we share what actually works.",
  },
  {
    title: "Data-Driven Community",
    description: "We track what works across our network and share longitudinal data. When a member achieves a 60% efficiency gain, we document exactly how—and help others replicate it.",
  },
  {
    title: "AI-Native Operations",
    description: "We practice what we preach. IntelligentLeverage.AI itself is powered by AI systems that handle operations, content, and support—letting us focus on strategic growth.",
  },
];

export default function AboutPage() {
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
            <div className="text-center space-y-6">
              <Badge variant="default">Our Story</Badge>
              <Heading level="h1" className="text-4xl md:text-5xl lg:text-6xl">
                Where Intelligence Compounds
              </Heading>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're on a mission to teach humanity how to multiply potential through intelligent AI leverage—not just automation, but true strategic advantage.
              </p>
            </div>
          </Container>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-muted/30">
          <Container maxWidth="xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold">Our Mission</h2>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower 10,000 entrepreneurs to build AI-powered leverage systems that create $10B+ in collective value by 2030. We're not just teaching AI tools—we're building a movement of system thinkers who understand how to turn intelligence into exponential advantage.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold">Our Vision</h2>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    A world where entrepreneurial leverage isn't limited by time, capital, or connections—but amplified by intelligent systems. Where the smartest people aren't working harder, but thinking more strategically about how AI can multiply their impact.
                  </p>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>

        {/* Core Principles */}
        <section className="py-16">
          <Container maxWidth="xl">
            <div className="text-center mb-12">
              <Heading level="h2" className="text-3xl md:text-4xl mb-4">
                Our Core Principles
              </Heading>
              <p className="text-muted-foreground">
                The values that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {principles.map((principle) => {
                const Icon = principle.icon;
                return (
                  <Card key={principle.title} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="space-y-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">{principle.title}</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{principle.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </Container>
        </section>

        {/* What Makes Us Different */}
        <section className="py-16 bg-muted/30">
          <Container maxWidth="lg">
            <div className="text-center mb-12">
              <Heading level="h2" className="text-3xl md:text-4xl mb-4">
                What Makes Us Different
              </Heading>
              <p className="text-muted-foreground">
                Why entrepreneurs choose IntelligentLeverage.AI
              </p>
            </div>

            <div className="space-y-8">
              {differentiators.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <Badge variant="outline" className="text-lg px-3 py-1">
                        {index + 1}
                      </Badge>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Founder Section */}
        <section className="py-16">
          <Container maxWidth="lg">
            <div className="text-center mb-12">
              <Heading level="h2" className="text-3xl md:text-4xl mb-4">
                Built by Strategists Who Leverage AI Daily
              </Heading>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                IntelligentLeverage.AI was founded by entrepreneurs who have built, scaled, and exited multiple ventures using AI as strategic leverage.
              </p>
            </div>

            <Card className="max-w-3xl mx-auto">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Our founding team consists of serial entrepreneurs, AI researchers, and system thinkers who have collectively:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Built AI-powered companies generating $50M+ in annual revenue",
                      "Implemented automation systems saving 10,000+ hours annually",
                      "Advised Fortune 500 companies on AI transformation",
                      "Published research on human-AI collaboration",
                      "Built and sold 3 AI-enabled SaaS businesses",
                    ].map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Badge variant="default" className="mt-1">✓</Badge>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground leading-relaxed pt-4">
                    We don't just teach AI leverage—we live it. Every day, we use the same systems, frameworks, and strategies we share with our community. Our business is proof of concept: a lean team generating outsized impact through intelligent automation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted/30">
          <Container maxWidth="md">
            <div className="text-center space-y-6">
              <Heading level="h2" className="text-3xl md:text-4xl">
                Ready to Join the Movement?
              </Heading>
              <p className="text-lg text-muted-foreground">
                Be part of the community multiplying human potential through AI
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/apply"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Apply to Join
                </a>
                <a
                  href="/programs"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Explore Programs
                </a>
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
