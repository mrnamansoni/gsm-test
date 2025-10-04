"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { motion } from "framer-motion";
import { RefreshCcw, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const refundProcess = [
  {
    icon: AlertCircle,
    step: "Step 1",
    title: "Submit Request",
    description: "Contact our support team with booking details",
  },
  {
    icon: Clock,
    step: "Step 2",
    title: "Review",
    description: "Our team reviews within 24-48 hours",
  },
  {
    icon: CheckCircle,
    step: "Step 3",
    title: "Approval",
    description: "Refund approved as per policy terms",
  },
  {
    icon: RefreshCcw,
    step: "Step 4",
    title: "Processing",
    description: "Amount credited within 7-10 business days",
  },
];

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-6">
              <RefreshCcw className="w-16 h-16 text-primary" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">Refund Policy</h1>
            <p className="text-xl text-muted-foreground">
              Understanding our refund process and timelines
            </p>
          </motion.div>

          {/* Refund Process */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {refundProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="bg-card/50 border-border/50 h-full hover:border-primary transition-colors">
                  <CardContent className="p-6 text-center">
                    <step.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="text-sm text-primary mb-2">{step.step}</p>
                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="prose prose-invert max-w-none"
          >
            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Refund Eligibility</h2>
                <p>
                  You are eligible for a refund if:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You cancel within the terms of our cancellation policy</li>
                  <li>We cancel the trip due to insufficient bookings</li>
                  <li>Weather conditions make travel impossible</li>
                  <li>Government restrictions prevent travel</li>
                  <li>Medical emergency with proper documentation</li>
                  <li>Service failure on our part (subject to assessment)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Refund Amounts</h2>
                <p>
                  Refund amounts depend on cancellation timing:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white">30+ days before:</strong> 75% refund (25% cancellation fee)</li>
                  <li><strong className="text-white">15-30 days before:</strong> 50% refund (50% cancellation fee)</li>
                  <li><strong className="text-white">7-14 days before:</strong> 25% refund (75% cancellation fee)</li>
                  <li><strong className="text-white">Less than 7 days:</strong> No refund (100% cancellation fee)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Refund Methods</h2>
                <p>
                  Refunds are processed through:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Original payment method (preferred)</li>
                  <li>Bank transfer to registered account</li>
                  <li>Cheque payment (for amounts over ₹50,000)</li>
                  <li>Credit note for future bookings (optional)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Processing Time</h2>
                <p><strong className="text-white">Standard Processing:</strong></p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Review and approval: 24-48 hours</li>
                  <li>Refund initiation: Within 3 business days of approval</li>
                  <li>Credit to account: 7-10 business days</li>
                  <li>Bank processing may add 3-5 days</li>
                </ul>

                <p><strong className="text-white">Expedited Processing:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Available for medical emergencies</li>
                  <li>Requires proper documentation</li>
                  <li>May incur processing fee</li>
                  <li>Completed within 3-5 business days</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Non-Refundable Items</h2>
                <p>
                  The following are not eligible for refund:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Visa application fees</li>
                  <li>Travel insurance premiums</li>
                  <li>Third-party service charges</li>
                  <li>Processing and administrative fees</li>
                  <li>Customization charges</li>
                  <li>Services already availed</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Partial Refunds</h2>
                <p>
                  For partial cancellations in group bookings:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Individual cancellation fees apply per person</li>
                  <li>Remaining travelers may face price adjustments</li>
                  <li>Group discounts may be recalculated</li>
                  <li>Shared accommodation costs redistributed</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Refund Deductions</h2>
                <p>
                  Refund amounts may be reduced by:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Cancellation charges as per policy</li>
                  <li>Non-refundable service provider fees</li>
                  <li>Transaction processing charges (2-3%)</li>
                  <li>Bank transfer fees (if applicable)</li>
                  <li>GST on cancellation charges</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Special Situations</h2>
                <p><strong className="text-white">Trip Cancelled by Us:</strong></p>
                <p className="mb-4">
                  If we cancel your trip, you receive 100% refund or option to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Reschedule to alternative dates</li>
                  <li>Choose different destination</li>
                  <li>Credit note with 10% bonus value</li>
                </ul>

                <p><strong className="text-white">Weather-Related Cancellations:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Full refund if trip cannot proceed</li>
                  <li>Partial refund if itinerary modified</li>
                  <li>Option to reschedule without penalty</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Refund Request Documentation</h2>
                <p>
                  To process your refund request, provide:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Booking reference number</li>
                  <li>Original payment receipt</li>
                  <li>Cancellation reason (in writing)</li>
                  <li>Medical certificates (if applicable)</li>
                  <li>Bank details for refund transfer</li>
                  <li>ID proof of booking person</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Refund Tracking</h2>
                <p>
                  Track your refund status:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email notifications at each stage</li>
                  <li>SMS updates on refund initiation</li>
                  <li>Customer portal access for status check</li>
                  <li>Refund reference number provided</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Disputes and Queries</h2>
                <p>
                  If you have concerns about your refund:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact our refunds team immediately</li>
                  <li>Provide transaction reference numbers</li>
                  <li>Allow 48 hours for investigation</li>
                  <li>Escalation to management if needed</li>
                  <li>All disputes subject to Delhi jurisdiction</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Contact Refunds Team</h2>
                <p>
                  For refund-related assistance:
                </p>
                <p className="mt-2">
                  Email: refunds@ghoomosasteme.com<br />
                  Phone: +91-9090403075<br />
                  Hours: Monday-Saturday, 9 AM - 6 PM IST<br />
                  Response Time: Within 24-48 hours
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}