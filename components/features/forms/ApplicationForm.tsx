/**
 * Application Form Component
 * Complete application form with validation
 */

"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { applicationSchema, applicationDefaults, type ApplicationFormData } from "@/lib/validations/application";
import { submitApplication, handleMockError } from "@/lib/api/mock";
import { howHeardOptions, programInterestOptions } from "@/config/forms";
import { Button } from "@/components/ui";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export const ApplicationForm: React.FC = () => {
  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: applicationDefaults,
  });

  const onSubmit = async (data: ApplicationFormData) => {
    try {
      const response = await submitApplication(data);

      toast.success(response.message, {
        description: "We're excited to review your application!",
        duration: 5000,
      });

      // Reset form after successful submission
      form.reset();
    } catch (error) {
      toast.error("Submission Failed", {
        description: handleMockError(error),
        duration: 5000,
      });
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <h2 className="text-2xl font-bold">Application Form</h2>
        <p className="text-muted-foreground">
          Tell us about yourself and why you'd be a great fit for IntelligentLeverage.AI
        </p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone Field */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number (Optional)</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="+1 (555) 123-4567" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Business/Role Field */}
            <FormField
              control={form.control}
              name="businessRole"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What is your current business/role? *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your business, your role, and what you do..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Please provide at least 10 characters
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* AI Challenge Field */}
            <FormField
              control={form.control}
              name="aiChallenge"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What is your biggest AI challenge right now? *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe the specific challenges you're facing with AI implementation..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Please provide at least 20 characters
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Goals Field */}
            <FormField
              control={form.control}
              name="goals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What do you hope to achieve with IntelligentLeverage.AI? *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Share your goals and what success looks like for you..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Please provide at least 20 characters
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* How Heard Field */}
            <FormField
              control={form.control}
              name="howHeard"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How did you hear about us? *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {howHeardOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Program Interest Field */}
            <FormField
              control={form.control}
              name="programInterest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Which program are you most interested in? *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a program" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {programInterestOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          <div>
                            <div className="font-semibold">{option.label}</div>
                            <div className="text-xs text-muted-foreground">{option.description}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Why Accept Field */}
            <FormField
              control={form.control}
              name="whyAccept"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Why should we accept you into this program? *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us what makes you a great fit and what unique value you'll bring to the community..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Please provide at least 50 characters - be specific and authentic
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Investment Confirmation */}
            <FormField
              control={form.control}
              name="investmentConfirm"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <input
                      type="checkbox"
                      checked={field.value}
                      onChange={field.onChange}
                      className="h-4 w-4 rounded border-gray-300"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      I confirm that I am ready to invest in my growth and commit to the program *
                    </FormLabel>
                    <FormDescription>
                      This is a serious commitment to your development and success
                    </FormDescription>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                size="lg"
              >
                {form.formState.isSubmitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                {form.formState.isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
