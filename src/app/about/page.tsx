"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import WhyChooseUs from "@/components/sections/why-choose-us";
import Testimonials from "@/components/sections/testimonials";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
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
              About <span className="text-primary">Ghoomo Saste Me</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              India's #1 Budget Travel Platform - Making Travel Accessible for Everyone Since 2018
            </p>
          </motion.div>

          {/* Mission & Vision Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-primary">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  To democratize travel across India by offering affordable, safe, and unforgettable experiences that connect people with the world's beauty. We curate handpicked adventures starting from just ₹5,000, ensuring every journey is budget-friendly yet extraordinary.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center"><span className="text-primary mr-3">•</span> 100% Safe &amp; Secure Travel</li>
                  <li className="flex items-center"><span className="text-primary mr-3">•</span> 24/7 Expert Support</li>
                  <li className="flex items-center"><span className="text-primary mr-3">•</span> Community-Driven Experiences</li>
                  <li className="flex items-center"><span className="text-primary mr-3">•</span> Eco-Friendly Initiatives</li>
                </ul>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2-preview--ghoom-wander-wildly-82-lovable-app/assets/images/photo-1506905925346-21bda4d32df4-8.webp"
                  alt="Team exploring mountains"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.section>

          {/* Our Journey Timeline */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { year: '2018', title: 'Founded', desc: 'Started as a small travel blog sharing budget tips for Indian adventurers.' },
                { year: '2020', title: 'Launch', desc: 'Officially launched with 50+ destinations and 1,000+ bookings in first year.' },
                { year: '2023', title: 'Milestone', desc: 'Reached 13,540+ happy travelers and expanded to international packages.' },
                { year: '2025', title: 'Future', desc: 'Aiming for 50,000+ community members and sustainable travel initiatives.' }
              ].map((item, idx) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-card p-6 rounded-xl text-center border border-border/50 hover:border-primary/50 transition-colors"
                >
                  <p className="text-3xl font-bold text-primary mb-2">{item.year}</p>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Team Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Amit Sharma', role: 'Founder & CEO', img: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2-preview--ghoom-wander-wildly-82-lovable-app/assets/images/photo-1507003211169-0a1dd7228f2d.jpg' },
                { name: 'Priya Patel', role: 'Head of Operations', img: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2-preview--ghoom-wander-wildly-82-lovable-app/assets/images/photo-1438761681033-6461ffad8d80.jpg' },
                { name: 'Rohan Singh', role: 'Adventure Guide Lead', img: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2-preview--ghoom-wander-wildly-82-lovable-app/assets/images/photo-1500648767791-00dcc994a43e.jpg' }
              ].map((member, idx) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="text-center"
                >
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 shadow-lg">
                    <Image src={member.img} alt={member.name} width={192} height={192} className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Join Our Team
              </Button>
            </div>
          </motion.section>
        </div>

        <WhyChooseUs />
        <Testimonials />
      </div>
      <Footer />
    </main>
  );
}