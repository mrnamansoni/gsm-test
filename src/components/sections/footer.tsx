"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Trophy,
  Star,
  Users,
  ShieldCheck,
  Headset,
  Award,
  Plane,
  Heart,
  Send,
  MessageCircle,
  User,
  ArrowUp,
} from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';

const quickLinks = [
  'About Us',
  'Destinations',
  'Community Trips',
  'Corporate Tours',
  'Travel Blog',
  'Contact Us',
];

const popularDestinations = [
  'Manali',
  'Udaipur',
  'Rishikesh',
  'Kasol',
  'Goa',
  'Kedarnath',
];

const policies = [
  'Privacy Policy',
  'Terms & Conditions',
  'Cancellation Policy',
  'Payment Terms',
  'Refund Policy',
];

const trustBadges = [
  { icon: Trophy, text: "India's #1 Budget Travel Platform" },
  { icon: Star, text: '4.9/5 Rating' },
  { icon: Users, text: '13,540+ Happy Travelers' },
];

const certifications = [
  { icon: ShieldCheck, text: '100% Secure Payments' },
  { icon: Headset, text: '24/7 Customer Support' },
  { icon: Award, text: 'ISO Certified' },
  { icon: Plane, text: 'IATA Approved' },
];

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const { scrollY } = useScroll();
  const scrollToTopOpacity = useTransform(scrollY, [0, 300], [0, 1]);
  const scrollToTopScale = useTransform(scrollY, [0, 300], [0, 1]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <footer className="bg-[#14161A] text-muted-foreground pt-20 pb-8 relative" id="contact">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Column 1 & 2: About & Contact */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <motion.div className="flex items-center gap-3 mb-4" whileHover={{ scale: 1.02 }}>
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2-preview--ghoom-wander-wildly-82-lovable-app/assets/images/gsm_logo-BkKwPqTn-1.webp"
                  alt="Ghoomo Saste Me Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <h3 className="text-2xl font-bold text-white">Ghoomo Saste Me</h3>
              </motion.div>
              <motion.p 
                className="text-sm max-w-sm"
                variants={itemVariants}
              >
                Join India's largest budget travel community and explore incredible destinations with like-minded adventurers. Making travel accessible to everyone.
              </motion.p>
              <motion.div className="mt-6 space-y-3 text-sm" variants={itemVariants}>
                <motion.a 
                  href="tel:+91-9090403075" 
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>+91-9090403075</span>
                </motion.a>
                <motion.a 
                  href="mailto:hello@ghoomosasteme.com" 
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>hello@ghoomosasteme.com</span>
                </motion.a>
                <motion.div className="flex items-center gap-3" whileHover={{ x: 5 }}>
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Delhi, India</span>
                </motion.div>
              </motion.div>
              <motion.div className="flex mt-6 space-x-4" variants={itemVariants}>
                <motion.a href="#" aria-label="Facebook" className="hover:text-primary transition-colors" whileHover={{ rotate: 360, scale: 1.1 }}>
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a href="#" aria-label="Instagram" className="hover:text-primary transition-colors" whileHover={{ rotate: 360, scale: 1.1 }}>
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a href="#" aria-label="Twitter" className="hover:text-primary transition-colors" whileHover={{ rotate: 360, scale: 1.1 }}>
                  <Twitter className="w-5 h-5" />
                </motion.a>
                <motion.a href="#" aria-label="Youtube" className="hover:text-primary transition-colors" whileHover={{ rotate: 360, scale: 1.1 }}>
                  <Youtube className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Column 3: Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-accent mb-5">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                {quickLinks.map((link, i) => (
                  <motion.li 
                    key={link} 
                    initial={{ opacity: 0, x: -20 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link href="#" className="hover:text-primary transition-colors block py-1" whileHover={{ x: 5 }}>
                      {link}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Column 4: Popular Destinations */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-accent mb-5">Popular Destinations</h4>
              <ul className="space-y-3 text-sm">
                {popularDestinations.map((dest, i) => (
                  <motion.li 
                    key={dest} 
                    initial={{ opacity: 0, x: -20 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link href="#" className="hover:text-primary transition-colors block py-1" whileHover={{ x: 5 }}>
                      {dest}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* Column 5: Newsletter & Policies + Animated Contact Form */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-accent mb-5">Get In Touch</h4>
              <motion.div 
                className="space-y-4 mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form 
                      key="form" 
                      className="space-y-3"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div whileHover={{ scale: 1.02 }}>
                        <Input
                          type="text"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="h-10 text-sm rounded-lg border-border bg-card focus:ring-primary"
                          required
                        />
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.02 }}>
                        <Input
                          type="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="h-10 text-sm rounded-lg border-border bg-card focus:ring-primary"
                          required
                        />
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.02 }}>
                        <Textarea
                          placeholder="Your Message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="h-20 text-sm rounded-lg border-border bg-card focus:ring-primary resize-none"
                          required
                        />
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.02 }}>
                        <Button
                          type="submit"
                          className="w-full h-10 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold rounded-lg shadow-md hover:shadow-primary/25 transition-all duration-300"
                          whileTap={{ scale: 0.98 }}
                        >
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </Button>
                      </motion.div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      className="flex items-center justify-center p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Message sent! We'll get back to you soon.
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <h4 className="text-lg font-semibold text-accent mb-5">Policies</h4>
              <ul className="space-y-3 text-sm">
                {policies.map((policy, i) => (
                  <motion.li 
                    key={policy} 
                    initial={{ opacity: 0, x: -20 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link href="#" className="hover:text-primary transition-colors block py-1" whileHover={{ x: 5 }}>
                      {policy}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <div className="border-t border-border/20 my-10"></div>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-between items-center gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p className="text-sm text-center sm:text-left" variants={itemVariants}>
              © 2024 Ghoomo Saste Me. All Rights Reserved. Made with <Heart className="inline w-4 h-4 text-red-500 fill-current" /> for travelers.
            </motion.p>
            <motion.div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6" variants={itemVariants}>
              {trustBadges.map((badge, index) => (
                <motion.div key={index} className="flex items-center gap-2 text-sm" whileHover={{ scale: 1.05, y: -2 }}>
                  <badge.icon className="w-5 h-5 text-primary" />
                  <span>{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className="border-t border-border/20 my-8"></div>

          <motion.div 
            className="flex justify-center items-center gap-8 sm:gap-12 flex-wrap"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {certifications.map((cert, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-3 text-sm" 
                whileHover={{ scale: 1.05, y: -2 }}
                variants={itemVariants}
              >
                <cert.icon className="w-6 h-6 text-accent" />
                <span>{cert.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Animated Scroll to Top Button */}
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: scrollToTopOpacity, scale: scrollToTopScale }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-primary hover:bg-primary/90 text-primary-foreground p-4 rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </footer>
    </>
  );
};

export default Footer;