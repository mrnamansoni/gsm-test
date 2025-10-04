"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, Users, CalendarDays, Plus } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Trip {
  image: string;
  difficulty: string;
  originalPrice: string;
  discountedPrice: string;
  title: string;
  locations: string;
  rating: number;
  reviews: number;
  groupSize: string;
  duration: string;
  date: string;
  highlights: string[];
  includes: string;
}

const tripData: Trip[] = [
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2-preview--ghoom-wander-wildly-82-lovable-app/assets/images/photo-1506905925346-21bda4d32df4-8.webp",
    difficulty: "Moderate",
    originalPrice: "₹14,999",
    discountedPrice: "₹9,999",
    title: "Himachal Adventure Week",
    locations: "Manali • Kasol • Tosh",
    rating: 4.9,
    reviews: 234,
    groupSize: "15-20 People",
    duration: "7 Days / 6 Nights",
    date: "15 Mar 2024",
    highlights: ["River Rafting", "Trekking", "Bonfires"],
    includes: "Accommodation • Meals • Transport • Activities",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2-preview--ghoom-wander-wildly-82-lovable-app/assets/images/photo-1602216056096-3b40cc0c9944-6.webp",
    difficulty: "Easy",
    originalPrice: "₹18,999",
    discountedPrice: "₹12,999",
    title: "Rajasthan Royal Heritage",
    locations: "Udaipur • Jaisalmer • Jodhpur",
    rating: 4.8,
    reviews: 187,
    groupSize: "12-16 People",
    duration: "6 Days / 5 Nights",
    date: "22 Mar 2024",
    highlights: ["Palace Tours", "Desert Safari", "Cultural Shows"],
    includes: "Heritage Hotels • All Meals • AC Transport • Guided Tours",
  },
  {
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2-preview--ghoom-wander-wildly-82-lovable-app/assets/images/photo-1544735716-392fe2489ffa-7.webp",
    difficulty: "Moderate",
    originalPrice: "₹12,999",
    discountedPrice: "₹8,999",
    title: "Uttarakhand Spiritual Journey",
    locations: "Rishikesh • Haridwar • Kedarnath",
    rating: 4.9,
    reviews: 156,
    groupSize: "10-15 People",
    duration: "5 Days / 4 Nights",
    date: "1 Apr 2024",
    highlights: ["Temple Visits", "Yoga Sessions", "Ganga Aarti"],
    includes: "Ashram Stay • Vegetarian Meals • Transport • Helicopter (Kedarnath)",
  },
];

const stats = [
    { value: "50+", label: "Active Community Trips" },
    { value: "2,500+", label: "Community Members" },
    { value: "4.8", label: "Average Rating" },
    { value: "150+", label: "Destinations Covered" },
];

const TripCard = ({ trip }: { trip: Trip }) => (
  <div className="bg-card border border-border rounded-xl shadow-lg shadow-black/20 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30 hover:-translate-y-2">
    <div className="relative">
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Image
          src={trip.image}
          alt={trip.title}
          width={400}
          height={250}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      </motion.div>
      <div className="absolute top-3 left-3 bg-black/50 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
        {trip.difficulty}
      </div>
      <div className="absolute top-3 right-3 bg-primary text-primary-foreground p-2 rounded-lg text-center leading-tight">
        <p className="text-xs line-through opacity-75">{trip.originalPrice}</p>
        <p className="text-lg font-bold">{trip.discountedPrice}</p>
      </div>
    </div>
    <div className="p-5 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-foreground">{trip.title}</h3>
      <p className="text-sm text-muted-foreground mt-1">{trip.locations}</p>
      
      <div className="border-y border-border my-4 py-3 grid grid-cols-2 gap-3 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Star className="w-4 h-4 text-primary" fill="currentColor" />
          <span className="font-semibold text-foreground">{trip.rating}</span>({trip.reviews})
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Users className="w-4 h-4 text-primary" />
          {trip.groupSize}
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <CalendarDays className="w-4 h-4 text-primary" />
          {trip.duration}
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <CalendarDays className="w-4 h-4 text-primary" />
          {trip.date}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-foreground">Trip Highlights:</h4>
        <div className="flex flex-wrap items-center gap-x-2 text-xs text-muted-foreground mt-1">
          {trip.highlights.map((highlight, i) => (
            <span key={i}>{highlight}</span>
          ))}
           <div className="flex items-center justify-center bg-muted-foreground/20 rounded-full w-4 h-4 text-muted-foreground">
               <Plus className="w-3 h-3"/>
           </div>
           <span>1 more</span>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="text-sm font-semibold text-foreground">Package Includes:</h4>
        <p className="text-xs text-muted-foreground mt-1">{trip.includes}</p>
      </div>

      <div className="mt-auto pt-5 grid grid-cols-2 gap-3">
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Join Trip</Button>
        <Button variant="outline" className="w-full">View Details</Button>
      </div>
    </div>
  </div>
);


export default function CommunityTrips() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} className="relative py-16 sm:py-20 overflow-hidden" style={{ y: backgroundY }}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.3, 0.5]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl sm:max-w-4xl mx-auto">
          <div className="inline-block bg-secondary/10 text-secondary border border-secondary/20 text-sm px-4 py-1.5 rounded-full mb-4">
            Community Travel Packages
          </div>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-primary mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            UPCOMING COMMUNITY TRIPS
          </motion.h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Join like-minded travelers on carefully planned group adventures. Share experiences, make friends, and explore incredible destinations together.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {tripData.map((trip, i) => (
            <motion.div
              key={trip.title}
              variants={cardVariants}
              custom={i}
              className="group bg-card/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 min-h-[500px] sm:min-h-[550px]"
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                rotateX: 5,
                rotateY: 5
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Image
                  src={trip.image}
                  alt={trip.title}
                  width={400}
                  height={250}
                  className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </motion.div>
              <div className="p-4 sm:p-5 flex flex-col flex-grow min-h-[300px] sm:min-h-[350px]">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 sm:mb-2">{trip.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{trip.locations}</p>
                
                <div className="border-y border-border my-3 sm:my-4 py-2 sm:py-3 grid grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Star className="w-4 h-4 text-primary" fill="currentColor" />
                    <span className="font-semibold text-foreground">{trip.rating}</span>({trip.reviews})
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4 text-primary" />
                    {trip.groupSize}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CalendarDays className="w-4 h-4 text-primary" />
                    {trip.duration}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CalendarDays className="w-4 h-4 text-primary" />
                    {trip.date}
                  </div>
                </div>

                <div className="mb-3 sm:mb-4">
                  <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-1">Trip Highlights:</h4>
                  <div className="flex flex-wrap items-center gap-1 sm:gap-x-2 text-xs text-muted-foreground">
                    {trip.highlights.map((highlight, i) => (
                      <span key={i} className="inline-block">{highlight}</span>
                    ))}
                     <div className="flex items-center justify-center bg-muted-foreground/20 rounded-full w-4 h-4 text-muted-foreground ml-1">
                         <Plus className="w-3 h-3"/>
                     </div>
                     <span className="ml-1">1 more</span>
                  </div>
                </div>

                <div className="mb-4 sm:mb-auto">
                  <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-1">Package Includes:</h4>
                  <p className="text-xs text-muted-foreground">{trip.includes}</p>
                </div>

                <div className="mt-auto pt-4 sm:pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 min-h-[44px]">Join Trip</Button>
                  <Button variant="outline" className="w-full min-h-[44px]">View Details</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 sm:mt-20 py-8 sm:py-12 bg-card/50 rounded-xl border border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="px-2 sm:px-4">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">{stat.value}</p>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <Button size="lg" className="px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[0_0_20px_theme(colors.primary/50%)] hover:shadow-[0_0_30px_theme(colors.primary)] transition-shadow duration-300 min-h-[44px]">
            Join Our Travel Community
          </Button>
        </div>
      </div>
    </section>
  );
}