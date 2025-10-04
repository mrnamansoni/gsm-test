"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { motion } from "framer-motion";
import { MapPin, Calendar, Users, Star, Waves, Camera, Utensils, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const highlights = [
  { icon: Waves, text: "Beautiful Beaches & Water Sports" },
  { icon: Camera, text: "Portuguese Architecture" },
  { icon: Utensils, text: "Seafood & Beach Shacks" },
  { icon: Home, text: "Beach Resorts & Villas" },
];

const packages = [
  {
    title: "Goa Beach Getaway",
    duration: "4 Days / 3 Nights",
    price: "₹9,999",
    rating: 4.8,
    includes: ["Hotel", "Breakfast", "Water Sports", "Transport"],
  },
  {
    title: "Goa Party Package",
    duration: "3 Days / 2 Nights",
    price: "₹7,999",
    rating: 4.7,
    includes: ["Hotel", "Club Entry", "Beach Activities", "Transport"],
  },
  {
    title: "Goa Family Vacation",
    duration: "5 Days / 4 Nights",
    price: "₹13,999",
    rating: 4.9,
    includes: ["Resort", "All Meals", "Sightseeing", "Transport"],
  },
];

export default function GoaPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2-preview--ghoom-wander-wildly-82-lovable-app/assets/images/photo-1512343879784-a960bf40e7f2-10.webp"
          alt="Goa"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
                Goa
              </h1>
              <p className="text-2xl text-muted-foreground mb-6">
                India's Beach Paradise - Goa
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-white">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Goa</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary fill-current" />
                  <span>4.8 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>4,250+ Travelers</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6 text-center">About Goa</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center max-w-4xl mx-auto">
              India's smallest state packs a big punch with its sun-kissed beaches, vibrant nightlife, and Portuguese 
              heritage. From peaceful South Goa beaches to party-central North Goa, this coastal paradise offers 
              something for everyone - water sports, historic churches, beach shacks, and unforgettable sunsets.
            </p>
          </motion.div>

          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-card/50 border-border/50 hover:border-primary transition-colors text-center">
                  <CardContent className="p-6">
                    <highlight.icon className="w-12 h-12 text-primary mx-auto mb-3" />
                    <p className="text-sm text-white">{highlight.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-12 text-center"
          >
            Goa Travel Packages
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-card/50 border-border/50 hover:border-primary transition-all h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{pkg.title}</h3>
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="w-4 h-4 text-primary fill-current" />
                      <span className="text-sm text-white">{pkg.rating} Rating</span>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground mb-2">Includes:</p>
                      <div className="flex flex-wrap gap-2">
                        {pkg.includes.map((item, i) => (
                          <span key={i} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Starting from</p>
                        <p className="text-2xl font-bold text-primary">{pkg.price}</p>
                      </div>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Places to Visit */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-12 text-center"
          >
            Top Places to Visit
          </motion.h2>
          <div className="space-y-6">
            {[
              { name: "Baga Beach", description: "Popular beach known for water sports and nightlife" },
              { name: "Basilica of Bom Jesus", description: "UNESCO World Heritage Site with stunning baroque architecture" },
              { name: "Dudhsagar Falls", description: "Majestic four-tiered waterfall in the Western Ghats" },
              { name: "Fort Aguada", description: "17th-century Portuguese fort with panoramic sea views" },
              { name: "Palolem Beach", description: "Serene crescent-shaped beach in South Goa" },
              { name: "Anjuna Flea Market", description: "Vibrant market with handicrafts, clothes, and jewelry" },
            ].map((place, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-card/50 border-border/50 hover:border-primary transition-colors">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{place.name}</h3>
                    <p className="text-muted-foreground">{place.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Explore Goa?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience the perfect blend of beaches, culture, and adventure in India's beach capital
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                View All Packages
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}