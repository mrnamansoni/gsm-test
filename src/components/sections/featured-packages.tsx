"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { PixelTrail } from '@/components/ui/pixel-trail';

type Package = {
  label: string;
  title: string;
  year: string;
  type: string;
  highlights: string[];
  description: string;
  price: string;
  originalPrice: string;
  imageUrl: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
};

const packagesData: Package[] = [
  {
    label: 'FEATURED WORK 01',
    title: 'Europe Explorer Adventure',
    year: '2025',
    type: 'International Expedition',
    highlights: [
      'Multi-Country Journey, Cultural Immersion, Historic Sites, Local Experiences',
      '15 European Countries, 21 Days, Premium Hotels, Expert Guides',
      'Paris to Rome, Amsterdam to Vienna, Complete European Experience',
    ],
    description:
      "Embark on the ultimate European adventure across 15 magnificent countries. From the romantic streets of Paris to the ancient wonders of Rome, experience Europe's rich tapestry of cultures, cuisines, and breathtaking landscapes in our most comprehensive international package.",
    price: '₹1,49,999',
    originalPrice: '₹2,50,000',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2-preview--ghoom-wander-wildly-82-lovable-app/assets/images/photo-1467269204594-9661b134dd2b-2.webp',
    imageAlt: 'Scenic view of a European city street next to a canal',
    imagePosition: 'right',
  },
  {
    label: 'FEATURED WORK 02',
    title: 'Mystical Himalayas Expedition',
    year: '2025',
    type: 'Mountain Adventure',
    highlights: [
      'High Altitude Trekking, Mountain Photography, Monastery Visits, Local Culture',
      'Leh Ladakh Region, 8 Days, Acclimatization Support, Professional Guides',
      'Pangong Lake, Nubra Valley, Khardung La Pass, Ancient Monasteries',
    ],
    description:
      "Journey to the roof of the world in the mystical Himalayas. Experience the raw beauty of Ladakh's landscapes, from pristine high-altitude lakes to ancient Buddhist monasteries, creating memories that will last a lifetime.",
    price: '₹21,999',
    originalPrice: '₹35,000',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2-preview--ghoom-wander-wildly-82-lovable-app/assets/images/photo-1506905925346-21bda4d32df4-8.webp',
    imageAlt: 'Majestic view of the Himalayas with a group of trekkers',
    imagePosition: 'left',
  },
  {
    label: 'FEATURED WORK 03',
    title: 'Tropical Paradise Collection',
    year: '2025',
    type: 'Beach & Island',
    highlights: [
      'Island Hopping, Water Sports, Beach Photography, Cultural Tours',
      'Bali & Thailand, 7-9 Days, Luxury Resorts, Adventure Activities',
      'Ubud Rice Terraces, Phi Phi Islands, Temple Tours, Sunset Cruises',
    ],
    description:
      "Discover the ultimate tropical getaway across Southeast Asia's most stunning destinations. From Bali's spiritual temples to Thailand's pristine beaches, experience paradise with our carefully crafted island adventures.",
    price: '₹49,999',
    originalPrice: '₹75,000',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2-preview--ghoom-wander-wildly-82-lovable-app/assets/images/photo-1518548419970-58e3b4079ab2-4.webp',
    imageAlt: 'A beautiful tropical beach with clear water and palm trees at sunset',
    imagePosition: 'right',
  },
];

const FeaturedPackages = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.2,
        ease: "easeOut"
      }
    })
  };

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const flipVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
    exit: { rotateY: 360 }
  };

  const flipTransition = {
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1],
    transformPerspective: 1000
  };

  return (
    <section ref={ref} className="relative py-16 sm:py-20 bg-background/50 overflow-hidden" style={{ y }}>
      {/* Pixel Trail Effect - Background Layer */}
      <div className="absolute inset-0 z-0">
        <PixelTrail 
          pixelSize={60}
          fadeDuration={800}
          delay={50}
          pixelClassName="rounded-full bg-gradient-to-br from-[#FFA500] to-[#4ecdc4] shadow-lg"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="space-y-8 sm:space-y-12 lg:space-y-20">
          {packagesData.map((pkg, index) => {
            const [isFlipped, setIsFlipped] = useState(false);

            return (
              <motion.div
                key={pkg.title}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={index}
                whileHover={{ 
                  scale: 1.02, 
                  rotateX: 5, 
                  rotateY: 5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                whileTap={{ scale: 0.98 }}
                className="relative bg-card border border-border rounded-xl overflow-hidden shadow-2xl shadow-black/30 group touch-manipulation cursor-pointer perspective-1000 min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] max-w-[95%] sm:max-w-[90%] lg:max-w-[85%] mx-auto"
                style={{ perspective: 1000 }}
                onHoverStart={() => setIsFlipped(true)}
                onHoverEnd={() => setIsFlipped(false)}
              >
                {/* Front Side */}
                <motion.div
                  className="absolute inset-0 backface-hidden"
                  style={{ backfaceVisibility: 'hidden', transformStyle: 'preserve-3d', zIndex: isFlipped ? 0 : 1 }}
                  variants={flipVariants}
                  initial="front"
                  animate={isFlipped ? 'back' : 'front'}
                  transition={flipTransition}
                >
                  <div className="w-full h-full relative">
                    <Image
                      src={pkg.imageUrl}
                      alt={pkg.imageAlt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Hover overlay for front */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>

                {/* Back Side: Content flips in - reduced padding on mobile */}
                <motion.div
                  className="p-4 sm:p-8 lg:p-12 flex flex-col absolute inset-0 backface-hidden"
                  style={{ backfaceVisibility: 'hidden', transformStyle: 'preserve-3d', zIndex: isFlipped ? 1 : 0 }}
                  variants={flipVariants}
                  initial="back"
                  animate={isFlipped ? 'front' : 'back'}
                  transition={flipTransition}
                >
                  <div className={`opacity-0 ${isFlipped ? 'opacity-100 transition-opacity duration-500 delay-300' : ''}`}>
                    <p className="text-xs sm:text-sm font-semibold text-primary tracking-widest mb-2 sm:mb-4">{pkg.label}</p>
                    <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-1 sm:mb-2 leading-tight">{pkg.title}</h3>
                    <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-4 sm:mb-6">
                      {pkg.year} &nbsp; | &nbsp; {pkg.type}
                    </p>
                    <div className="border-t border-border/50 my-4 sm:my-6" />
                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {pkg.highlights.map((highlight, i) => (
                        <p key={i} className="text-sm text-muted-foreground flex items-start leading-relaxed">
                          <span className="text-primary mr-3 mt-0.5 sm:mt-1 flex-shrink-0">-</span>
                          <span className="leading-relaxed">{highlight}</span>
                        </p>
                      ))}
                    </div>
                    <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed mb-auto">{pkg.description}</p>
                    <div className="mt-4 sm:mt-auto pt-4 sm:pt-8 flex flex-col sm:flex-row justify-between items-end sm:items-center gap-4 sm:gap-0">
                      <div className="flex items-end gap-2 sm:gap-3 w-full sm:w-auto">
                        <span className="font-display text-2xl sm:text-3xl font-bold text-primary leading-none">{pkg.price}</span>
                        <span className="text-base sm:text-lg text-muted-foreground line-through leading-none">{pkg.originalPrice}</span>
                      </div>
                      <Button
                        className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold shadow-lg hover:shadow-accent/30 transition-all w-full sm:w-auto min-h-[44px]"
                      >
                        VIEW PACKAGE
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center"
      >
        <Button className="mt-8 sm:mt-12 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300 min-h-[44px]">
          View All Packages
        </Button>
      </motion.div>
    </section>
  );
};

export default FeaturedPackages;