"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Users,
  Globe,
  ShieldCheck,
  Award,
  IndianRupee,
  Zap,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  metric: string;
  bgClass: string;
  desktopPosition: string;
}

const features: Feature[] = [
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Join 13,540+ travelers in our vibrant community. Make friends, share experiences, and create memories together.",
    metric: "13,540+ Members",
    bgClass: "bg-purple-600",
    desktopPosition: "lg:absolute lg:top-1/4 lg:left-[5%] lg:w-[28%] lg:-rotate-6 lg:z-10",
  },
  {
    icon: Globe,
    title: "250+ Destinations",
    description:
      "From exotic international locations to hidden Indian gems, we cover destinations across the globe.",
    metric: "250+ Places",
    bgClass: "bg-cyan-500",
    desktopPosition: "lg:absolute lg:top-1/4 lg:right-[5%] lg:w-[28%] lg:rotate-6 lg:z-10",
  },
  {
    icon: ShieldCheck,
    title: "100% Safe & Secure",
    description:
      "Your safety is our priority. All trips are carefully planned with emergency support and insurance coverage.",
    metric: "Zero Incidents",
    bgClass: "bg-green-600",
    desktopPosition: "lg:absolute lg:top-1/2 lg:right-[15%] lg:w-[30%] lg:-rotate-3 lg:z-20",
  },
  {
    icon: Award,
    title: "Award Winning Service",
    description:
      "Rated #1 travel community in India with 4.9+ ratings across all platforms. Excellence is our standard.",
    metric: "4.9★ Rating",
    bgClass: "bg-blue-600",
    desktopPosition: "lg:absolute lg:top-[5%] lg:right-1/4 lg:w-[32%] lg:rotate-3 lg:z-30",
  },
  {
    icon: IndianRupee,
    title: "Budget Friendly",
    description:
      "Incredible adventures starting at just ₹5000. We believe amazing experiences shouldn't break the bank.",
    metric: "From ₹5,000",
    bgClass: "bg-orange-500",
    desktopPosition: "lg:absolute lg:top-[55%] lg:left-[12%] lg:w-[30%] lg:rotate-4 lg:z-20",
  },
  {
    icon: Zap,
    title: "Instant Bookings",
    description:
      "Book your dream trip in minutes with our simple process. Quick confirmations and easy cancellations.",
    metric: "2-Min Booking",
    bgClass: "bg-pink-600",
    desktopPosition: "lg:absolute lg:top-[5%] lg:left-1/4 lg:w-[32%] lg:-rotate-3 lg:z-30",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollY } = useScroll();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9, rotateX: -15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <motion.div
        className="container mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Centered badge */}
        <motion.div 
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Sparkles className="h-4 w-4" />
          Why Ghoomo Saste Me?
        </motion.div>

        {/* Centered heading with gradient text effect like destinations */}
        <motion.h2 
          className="text-4xl lg:text-5xl font-bold mt-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          WHY THOUSANDS{' '}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            CHOOSE US
          </span>
        </motion.h2>

        {/* Centered subtitle */}
        <motion.p 
          className="mt-4 max-w-2xl mx-auto text-text-secondary leading-relaxed text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          We're not just another travel agency. We're your adventure partners,
          committed to making every journey unforgettable and affordable.
        </motion.p>
      </motion.div>

      {/* Enhanced animated and dynamic cards */}
      <motion.div
        className="grid md:grid-cols-3 gap-8 mt-16 container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative group cursor-pointer"
            whileHover={{ 
              y: -15,
              rotateY: 5,
              rotateX: 5,
              scale: 1.05,
              transition: { duration: 0.4, ease: "easeOut" }
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Glowing effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/50 via-accent/50 to-primary/50 opacity-0 blur-xl"
              whileHover={{ opacity: 0.6 }}
              transition={{ duration: 0.3 }}
            />

            {/* Card content */}
            <motion.div
              className="relative p-6 rounded-2xl bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0"
                whileHover={{ opacity: 1, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              />

              {/* Icon with enhanced animations */}
              <motion.div
                className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg relative z-10"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ 
                  rotate: 360,
                  scale: 1.2,
                  transition: { duration: 0.6 }
                }}
              >
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </motion.div>

              {/* Metric badge with animation */}
              <motion.div
                className="text-center mb-3 relative z-10"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <span className="inline-block font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent px-3 py-1 rounded-full text-sm border border-primary/30">
                  {feature.metric}
                </span>
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold mt-4 text-center relative z-10">{feature.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mt-2 text-center relative z-10">
                {feature.description}
              </p>

              {/* Floating particles */}
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/50"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              />
              <motion.div
                className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-accent/50"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.2 }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Animated background gradients */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      {/* 3D Rotating "Ready to Start Your Adventure?" Form */}
      <div className="mt-16 text-center w-full z-50 container mx-auto px-4">
        <motion.div 
          className="relative max-w-3xl mx-auto"
          style={{ perspective: "1000px" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.div
            className="bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md border border-primary/20 rounded-2xl p-6 sm:p-8 shadow-[0_0_80px_rgba(241,196,15,0.15)] relative overflow-hidden"
            style={{ 
              transformStyle: "preserve-3d",
            }}
            whileHover={{ 
              rotateY: 5,
              rotateX: 5,
              scale: 1.02,
              transition: { duration: 0.4 }
            }}
            animate={{
              rotateY: [0, 5, 0, -5, 0],
              rotateX: [0, -3, 0, 3, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Animated shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
              animate={{
                x: ["-100%", "200%"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Content */}
            <div className="relative z-10">
              <motion.h3 
                className="text-2xl sm:text-3xl font-bold text-text-primary"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Ready to Start Your Adventure?
              </motion.h3>
              <p className="text-text-secondary mt-3">
                Join thousands of happy travelers who've discovered the world with
                us. Your next unforgettable journey is just a click away!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <motion.div whileHover={{ scale: 1.1, rotate: 2 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base shadow-lg">
                    Browse Destinations
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1, rotate: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="font-bold border-accent text-accent hover:bg-accent hover:text-accent-foreground text-base shadow-lg">
                    Join Community
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* 3D depth layers */}
            <motion.div
              className="absolute inset-0 rounded-2xl border border-primary/10"
              style={{ transform: "translateZ(-20px)" }}
            />
            <motion.div
              className="absolute inset-0 rounded-2xl border border-accent/10"
              style={{ transform: "translateZ(-40px)" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}