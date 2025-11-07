/**
 * Contact Page
 * Contact form and alternative ways to get in touch
 */

import React from "react";
import type { Metadata } from "next";
import { Container, Heading } from "@/components/ui";
import { Navbar } from "@/components/features/navigation";
import { Footer } from "@/components/features/footer";
import { ContactForm } from "@/components/features/forms";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle, Calendar, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | IntelligentLeverage.AI",
  description: "Get in touch with IntelligentLeverage.AI. We're here to help with your AI transformation journey.",
};

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "General inquiries and support",
    contact: "hello@intelligentleverage.ai",
    action: "mailto:hello@intelligentleverage.ai",
  },
  {
    icon: MessageCircle,
    title: "Join Discord",
    description: "Quick questions from the community",
    contact: "Community members only",
    action: "/community",
  },
  {
    icon: Calendar,
    title: "Schedule a Call",
    description: "Book a 30-minute strategy session",
    contact: "Available for applicants",
    action: "/apply",
  },
];

const faqs = [
  {
    question: "How quickly will I get a response?",
    answer: "We typically respond to all inquiries within 24-48 hours during business days (Monday-Friday). For urgent matters, please mention that in your message subject.",
  },
  {
    question: "Can I schedule a call before applying?",
    answer: "Absolutely! If you have questions about our programs before applying, we're happy to schedule a brief call. Just mention this in your message and we'll send you a calendar link.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 30-day money-back guarantee for all our programs. If you're not satisfied within the first 30 days, we'll refund your investment—no questions asked.",
  },
  {
    question: "How can I partner with IntelligentLeverage.AI?",
    answer: "We're always open to strategic partnerships, affiliate relationships, and collaboration opportunities. Select 'Partnership Opportunity' as your subject and tell us about your proposal.",
  },
];

export default function ContactPage() {
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
              <Heading level="h1" className="text-4xl md:text-5xl lg:text-6xl">
                Get in Touch
              </Heading>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Have questions about our programs? Want to discuss a partnership? We're here to help.
              </p>
            </div>
          </Container>
        </section>

        {/* Contact Form */}
        <section className="py-8">
          <Container maxWidth="xl">
            <ContactForm />
          </Container>
        </section>

        {/* Other Contact Methods */}
        <section className="py-16">
          <Container maxWidth="xl">
            <div className="text-center mb-12">
              <Heading level="h2" className="text-3xl md:text-4xl mb-4">
                Other Ways to Reach Us
              </Heading>
              <p className="text-muted-foreground">
                Choose the method that works best for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <Card key={method.title} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">{method.title}</h3>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm">{method.description}</p>
                      <p className="font-medium text-sm">{method.contact}</p>
                      <a
                        href={method.action}
                        className="inline-block text-primary hover:underline text-sm font-medium"
                      >
                        {method.title.includes("Email") ? "Send Email" :
                         method.title.includes("Discord") ? "Visit Community" :
                         "Book a Call"} →
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Office Info */}
        <section className="py-16 bg-muted/30">
          <Container maxWidth="lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold">Headquarters</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    THYNK Unlimited<br />
                    Remote-First Organization<br />
                    Serving clients globally
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold">Business Hours</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                    Saturday - Sunday: Closed<br />
                    Response time: 24-48 hours
                  </p>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <Container maxWidth="lg">
            <div className="text-center mb-12">
              <Heading level="h2" className="text-3xl md:text-4xl mb-4">
                Common Questions
              </Heading>
              <p className="text-muted-foreground">
                Quick answers before you reach out
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted/30">
          <Container maxWidth="md">
            <div className="text-center space-y-6">
              <Heading level="h2" className="text-3xl md:text-4xl">
                Ready to Get Started?
              </Heading>
              <p className="text-lg text-muted-foreground">
                Skip the back-and-forth and apply directly to our programs
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
                  View Programs
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
