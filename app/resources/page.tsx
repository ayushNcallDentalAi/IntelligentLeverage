/**
 * Resources Page
 * Free resources, guides, and newsletter signup
 */

import React from "react";
import type { Metadata } from "next";
import { Container, Heading, Button, Badge } from "@/components/ui";
import { Navbar } from "@/components/features/navigation";
import { Footer } from "@/components/features/footer";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NewsletterForm } from "@/components/features/forms";
import { Download, BookOpen, Video, FileText, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources | IntelligentLeverage.AI",
  description: "Free AI leverage resources, guides, templates, and insights to help you multiply your potential.",
};

const featuredResource = {
  title: "The AI Leverage Framework",
  description: "A comprehensive 40-page guide to building AI systems that compound results. Learn the exact frameworks used by our Academy graduates to achieve 60%+ efficiency gains.",
  type: "PDF Guide",
  icon: BookOpen,
  downloadUrl: "#",
};

const downloadableResources = [
  {
    title: "AI Tool Selection Scorecard",
    description: "Evaluate any AI tool in 10 minutes with our proven assessment framework",
    type: "PDF Template",
    icon: FileText,
    category: "tools",
  },
  {
    title: "Automation Opportunity Audit",
    description: "Identify your top 10 automation opportunities with this step-by-step worksheet",
    type: "Spreadsheet",
    icon: FileText,
    category: "strategy",
  },
  {
    title: "Prompt Engineering Cheat Sheet",
    description: "50+ proven prompts for business applications across marketing, ops, and strategy",
    type: "PDF Guide",
    icon: FileText,
    category: "implementation",
  },
  {
    title: "ROI Calculator for AI Implementation",
    description: "Calculate time savings and financial impact of your AI automation projects",
    type: "Spreadsheet",
    icon: FileText,
    category: "tools",
  },
];

const articles = [
  {
    title: "From Automation to Augmentation: The AI Leverage Spectrum",
    description: "Understanding the difference between replacing tasks and multiplying capabilities",
    readTime: "8 min read",
    category: "strategy",
  },
  {
    title: "Building Your First AI Agent in 30 Minutes",
    description: "A practical guide to creating custom AI agents without coding",
    readTime: "12 min read",
    category: "implementation",
  },
  {
    title: "The Cost of AI Hesitation: What Waiting Really Costs",
    description: "Data-driven analysis of competitive advantage lost through delayed AI adoption",
    readTime: "6 min read",
    category: "strategy",
  },
  {
    title: "Community Intelligence: How Shared Learning Compounds",
    description: "Why the best AI implementations come from collaborative ecosystems",
    readTime: "10 min read",
    category: "community",
  },
];

const videos = [
  {
    title: "AI Leverage Masterclass: 60-Minute Workshop",
    description: "Complete introduction to building AI systems that compound results",
    duration: "60 min",
    category: "strategy",
  },
  {
    title: "Tool Review: ChatGPT vs Claude vs Gemini",
    description: "Side-by-side comparison of top AI assistants for business use",
    duration: "15 min",
    category: "tools",
  },
];

export default function ResourcesPage() {
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
              <Badge variant="default">Free Resources</Badge>
              <Heading level="h1" className="text-4xl md:text-5xl lg:text-6xl">
                AI Leverage Resources
              </Heading>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Free guides, templates, and insights to help you build AI systems that multiply your potential
              </p>
            </div>
          </Container>
        </section>

        {/* Featured Resource */}
        <section className="py-8">
          <Container maxWidth="xl">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <Badge variant="default" className="mb-2">Featured Resource</Badge>
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        {featuredResource.title}
                      </h2>
                      <p className="text-muted-foreground text-lg">
                        {featuredResource.description}
                      </p>
                    </div>
                    <Button size="lg" className="gap-2">
                      <Download className="w-4 h-4" />
                      Download Free Guide
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Container>
        </section>

        {/* Resource Library */}
        <section className="py-16">
          <Container maxWidth="xl">
            <div className="text-center mb-12">
              <Heading level="h2" className="text-3xl md:text-4xl mb-4">
                Resource Library
              </Heading>
              <p className="text-muted-foreground">
                Practical tools and guides you can use today
              </p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="tools">Tools</TabsTrigger>
                <TabsTrigger value="strategy">Strategy</TabsTrigger>
                <TabsTrigger value="implementation">Guides</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-8">
                {/* Downloads */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Free Downloads
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {downloadableResources.map((resource, index) => {
                      const Icon = resource.icon;
                      return (
                        <Card key={index} className="hover:shadow-lg transition-shadow">
                          <CardHeader>
                            <div className="flex items-start gap-4">
                              <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <Icon className="w-5 h-5 text-primary" />
                              </div>
                              <div className="flex-1">
                                <Badge variant="outline" className="mb-2 text-xs">
                                  {resource.type}
                                </Badge>
                                <h4 className="font-semibold text-lg">{resource.title}</h4>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground text-sm">
                              {resource.description}
                            </p>
                          </CardContent>
                          <CardFooter>
                            <Button variant="outline" className="w-full gap-2">
                              <Download className="w-4 h-4" />
                              Download
                            </Button>
                          </CardFooter>
                        </Card>
                      );
                    })}
                  </div>
                </div>

                {/* Articles */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Articles & Insights
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {articles.map((article, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <Badge variant="outline" className="mb-2 w-fit text-xs">
                            {article.readTime}
                          </Badge>
                          <h4 className="font-semibold text-lg">{article.title}</h4>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm">
                            {article.description}
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="ghost" className="w-full">
                            Read Article →
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Videos */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Video className="w-5 h-5" />
                    Video Tutorials
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {videos.map((video, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Video className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <Badge variant="outline" className="mb-2 text-xs">
                                {video.duration}
                              </Badge>
                              <h4 className="font-semibold text-lg">{video.title}</h4>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm">
                            {video.description}
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full">
                            Watch Now
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="tools">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {downloadableResources
                    .filter((r) => r.category === "tools")
                    .map((resource, index) => {
                      const Icon = resource.icon;
                      return (
                        <Card key={index}>
                          <CardHeader>
                            <div className="flex items-start gap-4">
                              <Icon className="w-6 h-6 text-primary" />
                              <div>
                                <h4 className="font-semibold">{resource.title}</h4>
                                <p className="text-sm text-muted-foreground mt-1">
                                  {resource.description}
                                </p>
                              </div>
                            </div>
                          </CardHeader>
                          <CardFooter>
                            <Button variant="outline" className="w-full">
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </Button>
                          </CardFooter>
                        </Card>
                      );
                    })}
                </div>
              </TabsContent>

              <TabsContent value="strategy">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[...downloadableResources.filter((r) => r.category === "strategy"), ...articles.filter((a) => a.category === "strategy")].map((item, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardHeader>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          {"type" in item ? "Download" : "Read Article"}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="implementation">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {downloadableResources
                    .filter((r) => r.category === "implementation")
                    .map((resource, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <h4 className="font-semibold">{resource.title}</h4>
                          <p className="text-sm text-muted-foreground">{resource.description}</p>
                        </CardHeader>
                        <CardFooter>
                          <Button variant="outline" className="w-full">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </Container>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-muted/30">
          <Container maxWidth="md">
            <Card>
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <Heading level="h2" className="text-2xl md:text-3xl">
                  Get Weekly AI Insights
                </Heading>
                <p className="text-muted-foreground">
                  Join 5,000+ entrepreneurs getting practical AI strategies every Tuesday
                </p>
              </CardHeader>
              <CardContent>
                <NewsletterForm
                  variant="full"
                  placeholder="Enter your email address"
                  buttonText="Subscribe Free"
                />
                <p className="text-xs text-muted-foreground text-center mt-4">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </CardContent>
            </Card>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-16">
          <Container maxWidth="md">
            <div className="text-center space-y-6">
              <Heading level="h2" className="text-3xl md:text-4xl">
                Ready for More?
              </Heading>
              <p className="text-lg text-muted-foreground">
                Get personalized AI implementation support in our programs
              </p>
              <Button size="lg" asChild>
                <a href="/programs">Explore Programs</a>
              </Button>
            </div>
          </Container>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
