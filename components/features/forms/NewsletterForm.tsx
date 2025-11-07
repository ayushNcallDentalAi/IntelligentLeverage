/**
 * Newsletter Form Component
 * Simple email subscription form with inline and full variants
 */

"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  newsletterSimpleSchema,
  newsletterSimpleDefaults,
  type NewsletterSimpleData,
} from "@/lib/validations/newsletter";
import { subscribeNewsletterSimple, handleMockError } from "@/lib/api/mock";
import { Button } from "@/components/ui";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface NewsletterFormProps {
  variant?: "inline" | "full";
  placeholder?: string;
  buttonText?: string;
}

export const NewsletterForm: React.FC<NewsletterFormProps> = ({
  variant = "inline",
  placeholder = "Enter your email",
  buttonText = "Subscribe",
}) => {
  const form = useForm<NewsletterSimpleData>({
    resolver: zodResolver(newsletterSimpleSchema),
    defaultValues: newsletterSimpleDefaults,
  });

  const onSubmit = async (data: NewsletterSimpleData) => {
    try {
      const response = await subscribeNewsletterSimple(data);

      toast.success(response.message, {
        description: "Welcome to the IntelligentLeverage.AI community!",
        duration: 5000,
      });

      // Reset form
      form.reset();
    } catch (error) {
      toast.error("Subscription Failed", {
        description: handleMockError(error),
        duration: 5000,
      });
    }
  };

  if (variant === "inline") {
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    type="email"
                    placeholder={placeholder}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
            {buttonText}
          </Button>
        </form>
      </Form>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  placeholder={placeholder}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full"
        >
          {form.formState.isSubmitting && (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          )}
          {buttonText}
        </Button>
      </form>
    </Form>
  );
};
