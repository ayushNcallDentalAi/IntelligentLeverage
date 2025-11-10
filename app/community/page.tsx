/**
 * Community Page
 * Community features, benefits, and membership information
 */

import React from "react";
import type { Metadata } from "next";
import { Container, Heading, Button, Badge } from "@/components/ui";
import { Navbar } from "@/components/features/navigation";
import { Footer } from "@/components/features/footer";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Users,
  MessageCircle,
  Calendar,
  BookOpen,
  Zap,
  TrendingUp,
  Award,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Community | IntelligentLeverage.AI",
  description: "Join a curated network of entrepreneurs leveraging AI for exponential growth. Where intelligence compounds.",
};

const features = [
  {
    icon: MessageCircle,
    title: "Private Discord Community",
    description: "24/7 access to a vetted network of AI-forward entrepreneurs. Real-time discussions, tool recommendations, and tactical advice.",
    benefits: [
      "Topic-specific channels (automation, agents, strategy)",
      "Direct message other members",
      "Weekly challenges and competitions",
    ],
  },
  {
    icon: Calendar,
    title: "Monthly Mastermind Forums",
    description: "Live video sessions with 10-15 members tackling real business challenges. Leave with actionable next steps.",
    benefits: [
      "Hot seat problem-solving sessions",
      "AI implementation show-and-tell",
      "Guest expert Q&As",
    ],
  },
  {
    icon: BookOpen,
    title: "Resource Vault",
    description: "Exclusive access to templates, prompts, and frameworks used by successful members. Updated weekly.",
    benefits: [
      "500+ proven AI prompts",
      "Automation workflow templates",
      "Tool selection scorecards",
    ],
  },
  {
    icon: Zap,
    title: "Weekly Strategy Calls",
    description: "Live group coaching on AI implementation, hosted by practitioners building 7-figure AI-powered businesses.",
    benefits: [
      "Tactical AI implementation advice",
      "Tool deep-dives and comparisons",
      "Member success case studies",
    ],
  },
  {
    icon: TrendingUp,
    title: "Peer Networking",
    description: "Connect with entrepreneurs in your industry or with complementary skills. Strategic partnerships emerge organically.",
    benefits: [
      "Member directory with profiles",
      "Industry-specific meetups",
      "Collaboration opportunities",
    ],
  },
  {
    icon: Award,
    title: "Implementation Challenges",
    description: "Monthly challenges to push your AI skills. Winners get featured and win prizes (tool credits, 1-on-1 sessions).",
    benefits: [
      "Build portfolio of AI implementations",
      "Learn from other submissions",
      "Win tool credits and coaching",
    ],
  },
];

const benefits = [
  "Access 500+ entrepreneurs actively implementing AI",
  "Weekly live sessions with AI practitioners",
  "Private Discord with 24/7 discussions",
  "Exclusive tool discounts (save $500-2000/year)",
  "Resource library with 500+ templates & prompts",
  "Monthly challenges with prizes",
  "First access to new programs and events",
  "Lifetime updates to frameworks and content",
];

const testimonials = [
  {
    quote: "The Community isn't just a Slack channel—it's a knowledge compound. I've saved $12K/year by learning which AI tools to skip from other members.",
    author: "Sarah Chen",
    title: "SaaS Founder",
  },
  {
    quote: "Within 2 weeks, I connected with 3 members in my industry. We now share automation workflows and have cut our combined tool costs by 40%.",
    author: "Marcus Rodriguez",
    title: "Agency Owner",
  },
  {
    quote: "The weekly strategy calls alone are worth 10x the membership. I've implemented 15+ AI systems directly from ideas shared in those sessions.",
    author: "Emily Watson",
    title: "E-commerce Entrepreneur",
  },
];

export default function CommunityPage() {
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
              <Badge variant="default">IntelligentLeverage.AI Community</Badge>
              <Heading level="h1" className="text-4xl md:text-5xl lg:text-6xl">
                Where Intelligence Compounds
              </Heading>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join 500+ entrepreneurs who share AI implementations, collaborate on projects, and multiply results together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" asChild>
                  <a href="https://api.leadconnectorhq.com/widget/form/U7ZrY4oXM1dyTpDTtTuL">Join the Community</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/programs">View Pricing</a>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Stats */}
        <section className="py-8">
          <Container maxWidth="xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Active Members</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">$50M+</div>
                  <div className="text-sm text-muted-foreground">Combined Revenue</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Industries</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Active Discussions</div>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>

        {/* Features */}
        <section className="py-16">
          <Container maxWidth="xl">
            <div className="text-center mb-12">
              <Heading level="h2" className="text-3xl md:text-4xl mb-4">
                Community Features
              </Heading>
              <p className="text-muted-foreground">
                Everything you need to accelerate your AI journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card key={feature.title} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="space-y-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <Badge variant="default" className="mt-0.5 w-4 h-4 p-0 flex items-center justify-center">✓</Badge>
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Member Benefits */}
        <section className="py-16 bg-muted/30">
          <Container maxWidth="lg">
            <div className="text-center mb-12">
              <Heading level="h2" className="text-3xl md:text-4xl mb-4">
                Member Benefits
              </Heading>
              <p className="text-muted-foreground">
                What you get as a Community member
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg">
                  <Badge variant="default" className="mt-0.5">✓</Badge>
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <Container maxWidth="xl">
            <div className="text-center mb-12">
              <Heading level="h2" className="text-3xl md:text-4xl mb-4">
                What Members Say
              </Heading>
              <p className="text-muted-foreground">
                Real results from real entrepreneurs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                    <div className="border-t pt-4">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* How to Join */}
        <section className="py-16 bg-muted/30">
          <Container maxWidth="lg">
            <div className="text-center mb-12">
              <Heading level="h2" className="text-3xl md:text-4xl mb-4">
                How to Join
              </Heading>
              <p className="text-muted-foreground">
                Three simple steps to become a member
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <Badge variant="default">1</Badge>
                    <h3 className="text-xl font-bold">Apply</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Tell us about your business and AI goals. We review applications to ensure member alignment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <Badge variant="default">2</Badge>
                    <h3 className="text-xl font-bold">Get Approved</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We'll review your application within 2-3 business days and send an invitation if accepted.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <Badge variant="default">3</Badge>
                    <h3 className="text-xl font-bold">Start Learning</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Complete onboarding, introduce yourself, and start leveraging the collective intelligence.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <a href="https://api.leadconnectorhq.com/widget/form/U7ZrY4oXM1dyTpDTtTuL">Apply to Join Community</a>
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                $497/month · Cancel anytime · 30-day money-back guarantee
              </p>
            </div>
          </Container>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
