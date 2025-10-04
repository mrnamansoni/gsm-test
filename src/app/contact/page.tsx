"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to plan your next adventure? Our team is here to help make your dream trip a reality. Reach out anytime!
            </p>
          </motion.div>

          {/* FAQ Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { q: 'How do I book a trip?', a: 'Booking is simple! Choose your destination, select a package, and complete payment. Our team confirms within 24 hours.' },
                { q: 'What payment methods do you accept?', a: 'We support UPI, cards, net banking, and EMI options for easy, secure payments.' },
                { q: 'Is travel insurance included?', a: 'Yes, all packages include comprehensive travel insurance for your peace of mind.' },
                { q: 'Can I customize my itinerary?', a: 'Absolutely! Contact us to tailor your adventure to your preferences and group size.' },
                { q: 'What about COVID-19 safety?', a: 'We follow all government guidelines with sanitized transport, masks, and health checks.' },
                { q: 'How do I join the community?', a: 'Sign up on our community page to connect with travelers, share stories, and get exclusive deals.' }
              ].map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, height: 0 }}
                  whileInView={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors"
                >
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              
              {/* Enhanced Contact Details */}
              <div className="space-y-6 mb-8">
                {[
                  { icon: Phone, label: "Phone", value: "+91-9090403075", desc: "Call us for instant support" },
                  { icon: Mail, label: "Email", value: "hello@ghoomosasteme.com", desc: "Email for detailed queries" },
                  { icon: MapPin, label: "Location", value: "Connaught Place, Delhi, India", desc: "Visit our office" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="flex items-start space-x-4 p-6 bg-card rounded-lg hover:scale-105 transition-transform shadow-md hover:shadow-primary/20"
                    whileHover={{ x: 5 }}
                  >
                    <item.icon className={`w-6 h-6 mt-1 ${item.color}`} />
                    <div>
                      <p className="font-semibold text-lg">{item.label}</p>
                      <p className="text-muted-foreground">{item.value}</p>
                      <p className="text-xs text-accent">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="p-6 bg-card rounded-lg border border-border/50">
                <h3 className="text-xl font-bold mb-4 text-primary">Office Hours</h3>
                <p className="text-muted-foreground mb-2">Monday - Saturday: 9:00 AM - 7:00 PM IST</p>
                <p className="text-muted-foreground">Sunday: 10:00 AM - 5:00 PM IST</p>
                <p className="text-xs text-accent mt-2">Emergency support available 24/7</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-6">We'll respond within 24 hours.</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm hover:shadow-md"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm hover:shadow-md"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm hover:shadow-md"
                    placeholder="+91-XXXXXXXXXX"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm hover:shadow-md resize-none"
                    placeholder="Tell us about your dream adventure..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all shadow-lg hover:shadow-primary/30"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}