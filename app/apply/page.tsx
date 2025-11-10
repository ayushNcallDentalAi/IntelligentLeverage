/**
 * Apply Page
 * Application form and alternative contact options
 */

import React from "react";
import type { Metadata } from "next";
import { Container, Heading } from "@/components/ui";
import { ApplicationForm } from "@/components/features/forms";
import { Navbar } from "@/components/features/navigation";
import { Footer } from "@/components/features/footer";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui";
import { Calendar, Mail, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Apply | IntelligentLeverage.AI",
  description: "Join the IntelligentLeverage.AI community and transform your approach to AI implementation.",
};

export default function ApplyPage() {
  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="pt-24 pb-16 min-h-screen">
        <Container maxWidth="xl">
          {/* Page Header */}
          <div className="text-center mb-12 space-y-4">
            <Heading level="h1" className="text-4xl md:text-5xl">
              Apply to Join IntelligentLeverage.AI
            </Heading>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Take the first step toward mastering AI leverage. We review applications within 2-3 business days.
            </p>
          </div>

          {/* Application Form */}
          <div className="mb-16">
            <ApplicationForm />
          </div>

          <Separator className="my-12" />

          {/* Alternative Options */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Not Ready to Apply?</h2>
              <p className="text-muted-foreground">
                Explore other ways to connect with us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Book Strategy Call */}
              <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Book a Strategy Call</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Schedule a 30-minute consultation to discuss your AI goals
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://api.leadconnectorhq.com/widget/form/U7ZrY4oXM1dyTpDTtTuL">Book Call</a>
                </Button>
              </div>

              {/* Join Newsletter */}
              <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Join Our Newsletter</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get weekly insights on AI implementation and leverage
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/resources">Subscribe</a>
                </Button>
              </div>

              {/* Contact Us */}
              <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Get in Touch</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Have questions? Send us a message and we'll respond shortly
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 max-w-2xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              By submitting this application, you acknowledge that you have read and agree to our{" "}
              <a href="/privacy" className="underline hover:text-foreground">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="/terms" className="underline hover:text-foreground">
                Terms of Service
              </a>
              .
            </p>
          </div>
        </Container>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
