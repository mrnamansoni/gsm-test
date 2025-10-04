"use client";

import React, { useState, useEffect } from "react";
import { ParticleTextEffect } from "@/components/ui/particle-text-effect";
import { TypingSubtitle } from "@/components/ui/typing-subtitle";
import { motion, useScroll, useTransform } from "framer-motion";

const slideshowImages = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2/generated_images/stunning-panoramic-landscape-photograph--27491fd3-20251003032929.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2/generated_images/breathtaking-aerial-view-of-tropical-tur-d0064af0-20251003032937.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2/generated_images/majestic-ancient-temple-in-misty-morning-0fc8bd60-20251003032945.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2/generated_images/desert-landscape-with-dramatic-sand-dune-73fcff1b-20251003032953.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2/generated_images/lush-green-rice-terraces-in-tropical-mou-d765389d-20251003033000.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2/generated_images/serene-alpine-lake-reflecting-mountain-p-1d7ed36b-20251003033010.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2/generated_images/vibrant-colorful-hot-air-balloons-floati-8cab6e3e-20251003033018.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2/generated_images/dramatic-coastal-cliffs-overlooking-turq-502862f0-20251003033027.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2/generated_images/enchanting-waterfall-cascading-through-l-fa5474f3-20251003033036.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2/generated_images/historic-colorful-architecture-of-europe-3c1eb9b0-20251003033042.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2/generated_images/northern-lights-aurora-borealis-dancing--9e1fc135-20251003033051.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2/generated_images/vast-lavender-field-in-full-bloom-stretc-78ea0ddf-20251003033059.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2/generated_images/spectacular-canyon-landscape-with-red-ro-4719b436-20251003033109.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2/generated_images/peaceful-buddhist-monastery-perched-on-m-6a06cbd8-20251003033117.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2/generated_images/tropical-jungle-river-winding-through-de-354e28da-20251003033126.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2/generated_images/magnificent-ice-cave-with-blue-glacial-f-6f8f5413-20251003033134.jpg",
  "https://v3b.fal.media/files/b/monkey/9v9pmJP96bMlPK9Ey9-Rm_output.png",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2/generated_images/vast-african-savanna-at-golden-hour%2c-a-6d078869-20251003033147.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2/generated_images/pristine-white-sand-beach-with-overwater-eea2c361-20251003033156.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2/generated_images/majestic-volcano-peak-with-snow-cap-agai-0d1bbcc1-20251003033205.jpg"
];

const subtitles = [
"Fun का ठिकाना, Stories का खजाना",
"सस्ते में घूमो, दिल खोल के जियो",
"Adventure की लहर, Memories का सफर",
"Budget में Trip, Luxury का Feel",
"यारों के संग, सफर हो रंग",
"Dream Destinations, Pocket-Friendly Vacations",
"Travel More, Spend Less, Live Best",
"Travel More, Spend Less, Live Best",
"हर मोड़ पर खुशी, हर रास्ते पे दोस्ती",
"Wander Wildly, Travel Wisely, Save Money"];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.2]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Image Slideshow Background with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale }}>
        {slideshowImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1 : 1.1
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <img
              src={image}
              alt={`Travel destination ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
        
        {/* Enhanced overlays */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"
          animate={{
            opacity: [0.7, 0.9, 0.7]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <div className="absolute inset-0 bg-background/40" />
        
        {/* Animated noise texture overlay */}
        <motion.div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: "url(data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E)"
          }}
          animate={{
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>

      {/* Slideshow indicators - HIDDEN */}
      <div className="hidden absolute bottom-8 sm:bottom-16 left-1/2 transform -translate-x-1/2 z-30 flex gap-1 sm:gap-2">
        {slideshowImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? "bg-primary w-6 sm:w-8" 
                : "bg-white/40 hover:bg-white/60"
            } min-w-[20px] min-h-[20px] sm:min-w-auto sm:min-h-auto`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Masked Text at Top Center - responsive sizes - INCREASED BY 20% */}
      <motion.div
        className="absolute top-16 sm:top-24 left-0 right-0 z-30 flex justify-center px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h1 
          className="text-[4.8rem] sm:text-6xl md:text-[8.4rem] lg:text-[10.8rem] font-bold bg-clip-text text-transparent transition-all duration-2000 scale-100 whitespace-nowrap"
          style={{
            backgroundImage: "url('https://wakflow.com/images/bg2')",
            backgroundSize: "200% 200%",
            backgroundPosition: "center center",
            animation: "gradient 3s ease infinite, backgroundMove 8s ease-in-out infinite",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextStroke: "1px rgba(255, 193, 7, 0.6)",
            filter: "brightness(1.1)"
          }}
        >
          Ghoomo Saste Me
        </h1>
      </motion.div>

      {/* Particle Text Effect Layer - Center - INCREASED BY 20% */}
      <motion.div
        className="absolute inset-0 z-20 flex items-center justify-center w-full max-w-[90vw] mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{ opacity }}>
        <div className="w-full h-[240px] sm:h-[360px] max-w-[960px] mx-auto">
          <ParticleTextEffect
            className="w-full h-full" />
        </div>
      </motion.div>

      {/* Tagline at Bottom - Above Stats - responsive position */}
      <motion.div
        className="absolute bottom-20 sm:bottom-24 left-0 right-0 z-30 flex justify-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <TypingSubtitle subtitles={subtitles} />
      </motion.div>

      {/* Simplified Statistics Bar - better mobile wrapping */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20 bg-black/40 backdrop-blur-xl border-t border-white/10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}>
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
            <motion.div
              className="text-center min-w-[80px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary">12,463+</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Happy Travelers</p>
            </motion.div>

            <motion.div
              className="text-center min-w-[50px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary">4.5</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Rating</p>
            </motion.div>

            <motion.div
              className="text-center min-w-[70px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary">230+</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Destinations</p>
            </motion.div>

            <motion.div
              className="text-center min-w-[70px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary">1,250</p>
              <p className="text-xs sm:text-sm text-muted-foreground">This Month</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}