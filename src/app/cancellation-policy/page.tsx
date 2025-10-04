"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { motion } from "framer-motion";
import { XCircle, Clock, Calendar, RefreshCw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const cancellationTiers = [
  {
    icon: Calendar,
    period: "30+ Days Before",
    charge: "25% Cancellation Fee",
    refund: "75% Refund",
    color: "text-green-400",
  },
  {
    icon: Calendar,
    period: "15-30 Days Before",
    charge: "50% Cancellation Fee",
    refund: "50% Refund",
    color: "text-yellow-400",
  },
  {
    icon: Clock,
    period: "7-14 Days Before",
    charge: "75% Cancellation Fee",
    refund: "25% Refund",
    color: "text-orange-400",
  },
  {
    icon: XCircle,
    period: "Less than 7 Days",
    charge: "100% Cancellation Fee",
    refund: "No Refund",
    color: "text-red-400",
  },
];

export default function CancellationPolicyPage() {
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
              <RefreshCw className="w-16 h-16 text-primary" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">Cancellation Policy</h1>
            <p className="text-xl text-muted-foreground">
              Understanding our cancellation terms and refund process
            </p>
          </motion.div>

          {/* Cancellation Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {cancellationTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="bg-card/50 border-border/50 h-full hover:border-primary transition-colors">
                  <CardContent className="p-6 text-center">
                    <tier.icon className={`w-12 h-12 mx-auto mb-4 ${tier.color}`} />
                    <h3 className="text-lg font-bold text-white mb-2">{tier.period}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{tier.charge}</p>
                    <p className={`text-lg font-semibold ${tier.color}`}>{tier.refund}</p>
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
                <h2 className="text-2xl font-bold text-white mb-4">General Cancellation Terms</h2>
                <p>
                  Our cancellation policy is designed to be fair to both travelers and our business partners.
                  Cancellation fees increase as the departure date approaches because we incur increasing costs
                  from our service providers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">How to Cancel Your Booking</h2>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Contact our customer service team via email or phone</li>
                  <li>Provide your booking reference number</li>
                  <li>Submit a written cancellation request</li>
                  <li>Receive cancellation confirmation within 24 hours</li>
                  <li>Refund will be processed within 7-10 business days</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Special Circumstances</h2>
                <p><strong className="text-white">Medical Emergencies:</strong></p>
                <p className="mb-4">
                  In case of documented medical emergencies, we may waive cancellation fees on a case-by-case basis.
                  Medical certificates must be provided.
                </p>
                
                <p><strong className="text-white">Natural Disasters or Force Majeure:</strong></p>
                <p className="mb-4">
                  If travel becomes impossible due to natural disasters, political unrest, or pandemic situations,
                  we will work with you to reschedule or provide alternative options.
                </p>

                <p><strong className="text-white">Government Restrictions:</strong></p>
                <p>
                  If travel is prohibited by government order, full refund or trip rescheduling will be offered
                  without cancellation fees.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Modification Policy</h2>
                <p>If you need to modify your booking instead of canceling:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Date changes: Subject to availability and ₹2,000 modification fee</li>
                  <li>Destination changes: Treated as cancellation + new booking</li>
                  <li>Package upgrades: Pay the difference in package prices</li>
                  <li>Traveler name changes: ₹1,000 processing fee per person</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">No-Show Policy</h2>
                <p>
                  If you fail to show up for your trip without prior cancellation notification, it will be treated
                  as a cancellation with less than 7 days notice. No refund will be provided for no-shows.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Partial Cancellations</h2>
                <p>
                  For group bookings, if only some members cancel:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The same cancellation fees apply per person</li>
                  <li>Package pricing may change if group size drops significantly</li>
                  <li>Remaining travelers may need to pay adjusted rates</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Refund Process</h2>
                <p>
                  Refunds are processed to the original payment method within 7-10 business days after cancellation
                  approval. For bank transfers, it may take an additional 3-5 days to reflect in your account.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Travel Insurance</h2>
                <p>
                  We strongly recommend purchasing travel insurance that covers trip cancellations. This can protect
                  you from losing money due to unforeseen circumstances.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Contact for Cancellations</h2>
                <p>
                  To cancel or modify your booking, contact our customer service team:
                </p>
                <p className="mt-2">
                  Email: cancellations@ghoomosasteme.com<br />
                  Phone: +91-9090403075<br />
                  Hours: Monday-Saturday, 9 AM - 6 PM IST
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