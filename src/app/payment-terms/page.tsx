"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { motion } from "framer-motion";
import { CreditCard, Shield, Lock, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const paymentMethods = [
  {
    icon: CreditCard,
    title: "Credit/Debit Cards",
    description: "Visa, Mastercard, RuPay, American Express",
  },
  {
    icon: Shield,
    title: "UPI",
    description: "PhonePe, Google Pay, Paytm, BHIM",
  },
  {
    icon: Lock,
    title: "Net Banking",
    description: "All major Indian banks supported",
  },
  {
    icon: CheckCircle,
    title: "Wallets",
    description: "Paytm, Mobikwik, Amazon Pay",
  },
];

export default function PaymentTermsPage() {
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
              <CreditCard className="w-16 h-16 text-primary" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">Payment Terms</h1>
            <p className="text-xl text-muted-foreground">
              Secure and flexible payment options for your travel bookings
            </p>
          </motion.div>

          {/* Payment Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="bg-card/50 border-border/50 h-full hover:border-primary transition-colors">
                  <CardContent className="p-6 text-center">
                    <method.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">{method.title}</h3>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
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
                <h2 className="text-2xl font-bold text-white mb-4">Payment Structure</h2>
                <p><strong className="text-white">Booking Amount:</strong></p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Minimum 30% advance payment required to confirm booking</li>
                  <li>Remaining balance due 15 days before departure</li>
                  <li>Some packages may require full payment at booking</li>
                  <li>Corporate bookings can request customized payment terms</li>
                </ul>

                <p><strong className="text-white">Payment Deadlines:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Advance payment: Within 24 hours of booking confirmation</li>
                  <li>Final payment: 15 days before travel date</li>
                  <li>Late payment may result in booking cancellation</li>
                  <li>No services will be rendered without full payment</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Payment Security</h2>
                <p>
                  We prioritize the security of your financial information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All transactions are encrypted using SSL/TLS protocols</li>
                  <li>PCI-DSS compliant payment gateway</li>
                  <li>We do not store your complete card details</li>
                  <li>Two-factor authentication for added security</li>
                  <li>Fraud detection and prevention systems in place</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Payment Confirmation</h2>
                <p>
                  After successful payment, you will receive:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Instant payment confirmation email</li>
                  <li>SMS notification with transaction details</li>
                  <li>Booking voucher within 24 hours</li>
                  <li>Invoice for accounting purposes</li>
                  <li>Receipt with GST details (if applicable)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Failed Transactions</h2>
                <p>
                  If your payment fails:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Check with your bank for sufficient funds</li>
                  <li>Verify card details and limits</li>
                  <li>Try alternative payment method</li>
                  <li>Contact our support team for assistance</li>
                  <li>Amount will be auto-refunded within 5-7 business days if debited</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Price Components</h2>
                <p>
                  Your total payment includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Base package cost</li>
                  <li>Accommodation charges</li>
                  <li>Transportation costs</li>
                  <li>Activity and entrance fees</li>
                  <li>GST and applicable taxes</li>
                  <li>Service charges (if any)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Additional Charges</h2>
                <p>
                  Charges not included in package price:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Personal expenses and shopping</li>
                  <li>Meals not mentioned in itinerary</li>
                  <li>Travel insurance premiums</li>
                  <li>Tips and gratuities</li>
                  <li>Any services not specifically mentioned</li>
                  <li>Cost of visa/permits (if required)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Currency and Exchange</h2>
                <p>
                  All prices are quoted in Indian Rupees (INR). For international travelers:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Payment must be made in INR only</li>
                  <li>Currency conversion rates as per your bank</li>
                  <li>International transaction fees may apply</li>
                  <li>We recommend using cards with no foreign transaction fees</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Installment Options</h2>
                <p>
                  EMI facilities available for select bookings:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Minimum booking value: ₹20,000</li>
                  <li>EMI tenure: 3, 6, 9, or 12 months</li>
                  <li>Interest rates as per your bank</li>
                  <li>Processing fee may apply</li>
                  <li>Subject to credit approval</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Group Bookings</h2>
                <p>
                  Special payment terms for groups (10+ travelers):
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Flexible payment schedules available</li>
                  <li>Volume discounts on total booking value</li>
                  <li>Customized invoicing options</li>
                  <li>Multiple payment method combinations allowed</li>
                  <li>Contact our group sales team for details</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Disputes and Chargebacks</h2>
                <p>
                  In case of payment disputes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact us first before initiating chargeback</li>
                  <li>We will work to resolve issues amicably</li>
                  <li>Unjustified chargebacks may result in legal action</li>
                  <li>All disputes subject to Delhi jurisdiction</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Payment Support</h2>
                <p>
                  For payment-related queries:
                </p>
                <p className="mt-2">
                  Email: payments@ghoomosasteme.com<br />
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