"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, TrendingUp, Users, Award } from 'lucide-react';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    platform: "Google Reviews",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    rating: 4.9,
    reviewCount: "13,540",
    quote: "Amazing travel experiences at unbeatable prices. The community aspect makes every trip special!",
    tag: "Travel Community",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    platform: "TripAdvisor",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/TripAdvisor_logo.svg",
    rating: 5,
    reviewCount: "3,750",
    quote: "Best budget travel agency in India. Professional service and incredible destinations.",
    tag: "Verified Travelers",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    platform: "Facebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
    rating: 4.9,
    reviewCount: "1,031",
    quote: "From mountains to beaches, every trip is perfectly organized. Highly recommended!",
    tag: "Community Members",
    color: "from-purple-500/20 to-pink-500/20"
  },
];

const stats = [
  { name: 'Total Reviews', value: '18,321+', icon: TrendingUp },
  { name: 'Average Rating', value: '4.9', icon: Star },
  { name: 'Satisfaction', value: '98%', icon: Award },
];

const TestimonialCard = ({ testimonial, index }: { testimonial: any; index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative h-[400px] cursor-pointer perspective-1000"
      initial={{ opacity: 0, y: 50, rotateX: -20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        z: 50,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      {/* Glowing border effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-accent to-primary opacity-0 blur-xl"
        animate={{
          opacity: isFlipped ? 0.5 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Card container */}
      <motion.div
        className={`relative h-full rounded-3xl bg-gradient-to-br ${testimonial.color} backdrop-blur-sm border border-border/50 p-8 shadow-2xl overflow-hidden`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0"
          animate={{
            opacity: isFlipped ? 1 : 0,
            scale: isFlipped ? 1.5 : 1
          }}
          transition={{ duration: 0.6 }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center gap-x-4 mb-6">
            <motion.div 
              className="relative h-16 w-16 flex-shrink-0 rounded-2xl bg-white p-2 shadow-lg"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={testimonial.logo}
                alt={`${testimonial.platform} logo`}
                fill
                className="object-contain p-1"
              />
            </motion.div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground">
                {testimonial.platform}
              </h3>
              <div className="flex items-center gap-x-2 mt-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.15 + i * 0.1, duration: 0.5 }}
                  >
                    <Star 
                      className={`h-4 w-4 ${i < Math.floor(testimonial.rating) ? 'text-primary fill-primary' : 'text-gray-400'}`}
                    />
                  </motion.div>
                ))}
                <p className="text-sm font-bold text-foreground ml-2">{testimonial.rating}</p>
              </div>
            </div>
          </div>

          {/* Review count badge */}
          <motion.div
            className="absolute top-8 right-8 bg-primary/90 text-primary-foreground px-4 py-2 rounded-full shadow-lg"
            animate={{
              y: isFlipped ? -5 : 0,
              rotate: isFlipped ? 5 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-sm font-bold">{testimonial.reviewCount} reviews</p>
          </motion.div>

          {/* Quote */}
          <blockquote className="flex-grow mt-4">
            <motion.p 
              className="text-lg leading-relaxed text-foreground/90"
              animate={{
                scale: isFlipped ? 1.05 : 1
              }}
              transition={{ duration: 0.3 }}
            >
              "{testimonial.quote}"
            </motion.p>
          </blockquote>

          {/* Tag */}
          <motion.div
            className="mt-auto pt-6"
            animate={{
              y: isFlipped ? -10 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg">
              {testimonial.tag}
            </span>
          </motion.div>
        </div>

        {/* Floating particles effect */}
        <motion.div
          className="absolute top-1/4 right-10 w-2 h-2 rounded-full bg-primary/50"
          animate={{
            y: isFlipped ? [0, -20, 0] : 0,
            opacity: isFlipped ? [0.5, 1, 0.5] : 0
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-10 w-3 h-3 rounded-full bg-accent/50"
          animate={{
            y: isFlipped ? [0, -30, 0] : 0,
            opacity: isFlipped ? [0.5, 1, 0.5] : 0
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
};

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-background via-card/30 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-primary/20"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(241, 196, 15, 0.3)" }}
          >
            <Users className="w-5 h-5" />
            Trusted by Thousands
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              What Our Travelers Say
            </span>
          </h2>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 mb-16">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 bg-card/50 backdrop-blur-sm px-6 py-4 rounded-2xl border border-border/50 shadow-lg"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  boxShadow: "0 10px 30px rgba(241, 196, 15, 0.2)"
                }}
              >
                <stat.icon className="w-6 h-6 text-primary" />
                <div className="text-left">
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}