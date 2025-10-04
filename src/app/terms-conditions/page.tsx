"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-6">
              <FileText className="w-16 h-16 text-primary" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">Terms & Conditions</h1>
            <p className="text-muted-foreground">Last updated: March 2024</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="prose prose-invert max-w-none"
          >
            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using Ghoomo Saste Me's services, you accept and agree to be bound by these Terms
                  and Conditions. If you do not agree with any part of these terms, you should not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Booking and Payment</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All bookings are subject to availability and confirmation</li>
                  <li>Prices are quoted in Indian Rupees (INR) and are subject to change</li>
                  <li>Full or partial payment may be required at the time of booking</li>
                  <li>Payment can be made via credit/debit card, UPI, or bank transfer</li>
                  <li>All transactions are processed securely through encrypted channels</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Cancellation Policy</h2>
                <p>Cancellation charges vary based on the package and timing:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>30+ days before travel: 25% of total cost</li>
                  <li>15-30 days before travel: 50% of total cost</li>
                  <li>7-14 days before travel: 75% of total cost</li>
                  <li>Less than 7 days: 100% of total cost (no refund)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Travel Documents</h2>
                <p>
                  It is your responsibility to ensure you have valid travel documents including ID proofs, permits,
                  and any required visas. Ghoomo Saste Me is not responsible for denied travel due to inadequate
                  documentation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Health and Safety</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Travelers must be in adequate physical condition for adventure activities</li>
                  <li>Pre-existing medical conditions must be disclosed at booking</li>
                  <li>Travel insurance is highly recommended</li>
                  <li>Follow all safety instructions provided by guides and tour leaders</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Liability</h2>
                <p>
                  Ghoomo Saste Me acts as an intermediary between travelers and service providers. While we strive
                  to ensure quality services, we are not liable for acts of God, political situations, natural
                  disasters, or service provider failures beyond our control.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Behavior and Conduct</h2>
                <p>
                  Travelers are expected to behave responsibly and respectfully. We reserve the right to remove
                  anyone from a trip whose behavior endangers others or disrupts the experience.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. Changes will be effective immediately
                  upon posting on our website. Continued use of our services constitutes acceptance of modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Contact Information</h2>
                <p>
                  For questions about these Terms & Conditions, contact us at:
                </p>
                <p className="mt-2">
                  Email: hello@ghoomosasteme.com<br />
                  Phone: +91-9090403075<br />
                  Address: Delhi, India
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