/**
 * Founder Section Component
 *
 * Displays founder information in Blog8 style with horizontal cards
 */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { founderCards } from "@/config/founder";
import { fadeInUp, staggerContainer } from "@/config/animations";

export const Founder: React.FC = () => {
  return (
    <section id="founder" className="py-16 md:py-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center"
        >
          <h2 className="mx-auto mb-6 text-pretty text-3xl font-semibold md:text-4xl lg:max-w-3xl">
            Meet Your Guide
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
            Learn from someone who has walked the path and built the frameworks
            to help you succeed.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid gap-y-8 sm:grid-cols-12 sm:gap-y-10 md:gap-y-12 lg:gap-y-14"
        >
          {founderCards.map((card) => (
            <motion.div
              key={card.id}
              variants={fadeInUp}
              className="order-last sm:order-first sm:col-span-12 lg:col-span-12"
            >
              <Card className="border-0 bg-transparent shadow-none px-4 sm:px-6 md:px-12 lg:px-48">
                <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12">
                  {/* Content Column (Left - 5 cols) */}
                  <div className="sm:col-span-5 px-5 sm:px-0">
                    {/* Tags */}
                    <div className="mb-6 md:mb-8">
                      <div className="flex flex-wrap gap-3 text-xs uppercase tracking-wider text-muted-foreground md:gap-5 lg:gap-6">
                        {card.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">
                      {card.title}
                    </h3>

                    {/* Content */}
                    <div className="mt-6 space-y-4 text-muted-foreground md:mt-8">
                      {Array.isArray(card.content) ? (
                        card.content.map((paragraph, index) => (
                          <p key={index} className="whitespace-pre-line">{paragraph}</p>
                        ))
                      ) : (
                        <p className="whitespace-pre-line">{card.content}</p>
                      )}
                    </div>

                    {/* Metadata */}
                    {card.metadata && card.metadata.length > 0 && (
                      <div className="mt-6 flex items-center space-x-4 text-sm md:mt-8">
                        {card.metadata.map((meta, index) => (
                          <React.Fragment key={meta.label}>
                            {index > 0 && (
                              <span className="text-muted-foreground">•</span>
                            )}
                            <span className="text-muted-foreground">
                              {meta.value}
                            </span>
                          </React.Fragment>
                        ))}
                      </div>
                    )}

                    {/* Link */}
                    {card.link && (
                      <div className="mt-6 flex items-center space-x-2 md:mt-8">
                        <a
                          href={card.link.url}
                          className="inline-flex items-center font-semibold hover:underline md:text-base"
                        >
                          <span>{card.link.text}</span>
                          <ArrowRight className="ml-2 size-4 transition-transform hover:translate-x-1" />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Image Column (Right - 5 cols) */}
                  <div className="order-first sm:order-last sm:col-span-5 px-5 sm:px-0">
                    <div className="aspect-[4/5] overflow-clip rounded-lg border border-border">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="h-full w-full object-cover transition-opacity duration-200 hover:opacity-70"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-8"
        >
          <Button size="lg" variant="secondary" asChild>
            <a href="/about">Learn More About Our Story</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

Founder.displayName = "Founder";

