/**
 * FooterNewsletter Component
 *
 * Newsletter signup form
 */

"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export interface FooterNewsletterProps {
  title: string;
  description: string;
  className?: string;
}

export const FooterNewsletter: React.FC<FooterNewsletterProps> = ({
  title,
  description,
  className,
}) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // TODO: Implement newsletter signup API call
    // Simulate API call for now
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <div className={className}>
      <h4 className="text-sm font-bold text-black mb-4 uppercase tracking-wider">
        {title}
      </h4>
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
        {description}
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === "loading" || status === "success"}
            className="pl-10 bg-white border-gray-300"
          />
        </div>

        <Button
          type="submit"
          size="sm"
          className="w-full"
          disabled={status === "loading" || status === "success"}
        >
          {status === "loading" && "Subscribing..."}
          {status === "success" && "Subscribed!"}
          {(status === "idle" || status === "error") && "Subscribe"}
        </Button>

        {status === "error" && (
          <p className="text-xs text-red-600">
            Something went wrong. Please try again.
          </p>
        )}
        {status === "success" && (
          <p className="text-xs text-green-600">
            Successfully subscribed to our newsletter!
          </p>
        )}
      </form>
    </div>
  );
};

FooterNewsletter.displayName = "FooterNewsletter";
