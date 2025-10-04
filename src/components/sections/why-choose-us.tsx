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

const FeatureCard = ({ feature, isDesktop }: { feature: Feature; isDesktop: boolean; }) => {
  const Icon = feature.icon;

  return (
    <div
      className={cn(
        "relative rounded-2xl p-6 text-white shadow-lg transition-all duration-300 ease-out",
        feature.bgClass,
        isDesktop ? `${feature.desktopPosition} hover:scale-105 hover:shadow-2xl hover:z-40` : ""
      )}
    >
      <div className="absolute -top-2 left-1/2 -translate-x-1/2">
        <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
        <div className="w-[1px] h-2 bg-white/50 mx-auto"></div>
      </div>
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between">
          <div className="bg-black/20 rounded-lg p-2">
            <Icon className="w-6 h-6" />
          </div>
          <span className="font-bold text-lg bg-black/20 px-3 py-1 rounded-full text-xs sm:text-sm">
            {feature.metric}
          </span>
        </div>
        <h3 className="text-xl font-bold mt-4">{feature.title}</h3>
        <p className="text-white/80 text-sm mt-2 flex-grow">{feature.description}</p>
      </div>
    </div>
  );
};

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1], [0, -100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.8 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} className="py-20 relative overflow-hidden" style={{ y }}>
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
          <Sparkles className="h-4 w-4" />
          Why Ghoomo Saste Me?
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-text-primary">
          Why Thousands Choose Us
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-text-secondary leading-relaxed">
          We're not just another travel agency. We're your adventure partners,
          committed to making every journey unforgettable and affordable.
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-3 gap-8 mt-16"
        variants={containerVariants}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative group cursor-pointer p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
            whileHover={{ 
              rotateX: 5, 
              rotateY: 5,
              scale: 1.05 
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <feature.icon className="w-8 h-8 text-primary-foreground" />
            </motion.div>
            <div className="absolute -top-2 left-1/2 -translate-x-1/2">
              <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
              <div className="w-[1px] h-2 bg-white/50 mx-auto"></div>
            </div>
            <div className="flex flex-col h-full">
              <div className="flex items-start justify-between">
                <div className="bg-black/20 rounded-lg p-2">
                  <feature.icon className="w-6 h-6" />
                </div>
                <span className="font-bold text-lg bg-black/20 px-3 py-1 rounded-full text-xs sm:text-sm">
                  {feature.metric}
                </span>
              </div>
              <h3 className="text-xl font-bold mt-4">{feature.title}</h3>
              <p className="text-white/80 text-sm mt-2 flex-grow">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div
        className="absolute inset-0"
        style={{ y: useTransform(scrollY, [0, 1], [0, -100]) }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent"></div>
      </motion.div>
      
      <div className="mt-16 text-center w-full z-50">
         <div className="bg-card/50 backdrop-blur-md border border-primary/20 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto shadow-[0_0_80px_rgba(241,196,15,0.15)]">
          <h3 className="text-2xl sm:text-3xl font-bold text-text-primary">
            Ready to Start Your Adventure?
          </h3>
          <p className="text-text-secondary mt-3">
            Join thousands of happy travelers who've discovered the world with
            us. Your next unforgettable journey is just a click away!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base">
              Browse Destinations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="font-bold border-accent text-accent hover:bg-accent hover:text-accent-foreground text-base">
              Join Community
            </Button>
          </div>
         </div>
      </div>
    </section>
  );
}