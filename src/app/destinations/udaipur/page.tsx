"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { motion } from "framer-motion";
import { MapPin, Calendar, Users, Star, Crown, Camera, Utensils, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const highlights = [
  { icon: Crown, text: "Royal Palaces & Heritage" },
  { icon: Camera, text: "Lake Views & Architecture" },
  { icon: Utensils, text: "Traditional Rajasthani Food" },
  { icon: Home, text: "Heritage Hotels" },
];

const packages = [
  {
    title: "Udaipur Heritage Tour",
    duration: "3 Days / 2 Nights",
    price: "₹7,999",
    rating: 4.9,
    includes: ["Hotel", "Meals", "Sightseeing", "Transport"],
  },
  {
    title: "Royal Udaipur Experience",
    duration: "4 Days / 3 Nights",
    price: "₹11,999",
    rating: 4.8,
    includes: ["Heritage Hotel", "Lake Cruise", "City Tour", "Transport"],
  },
  {
    title: "Udaipur Weekend Getaway",
    duration: "2 Days / 1 Night",
    price: "₹5,999",
    rating: 4.7,
    includes: ["Hotel", "Breakfast", "Transport", "Guide"],
  },
];

export default function UdaipurPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2-preview--ghoom-wander-wildly-82-lovable-app/assets/images/photo-1602216056096-3b40cc0c9944-6.webp"
          alt="Udaipur"
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
                Udaipur
              </h1>
              <p className="text-2xl text-muted-foreground mb-6">
                The City of Lakes - Rajasthan
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-white">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Rajasthan</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary fill-current" />
                  <span>4.9 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>1,820+ Travelers</span>
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
            <h2 className="text-4xl font-bold text-white mb-6 text-center">About Udaipur</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center max-w-4xl mx-auto">
              Known as the "Venice of the East," Udaipur is a city of lakes, palaces, and romance. With its stunning 
              architecture, beautiful lakes, and rich cultural heritage, Udaipur offers a royal experience like no other. 
              From the majestic City Palace to serene boat rides on Lake Pichola, every moment is magical.
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
            Udaipur Travel Packages
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
              { name: "City Palace", description: "Magnificent palace complex overlooking Lake Pichola" },
              { name: "Lake Pichola", description: "Scenic lake with boat rides and palace views" },
              { name: "Jag Mandir", description: "Beautiful island palace on Lake Pichola" },
              { name: "Saheliyon Ki Bari", description: "Historic garden with fountains and marble elephants" },
              { name: "Jagdish Temple", description: "Stunning Indo-Aryan temple dedicated to Lord Vishnu" },
              { name: "Fateh Sagar Lake", description: "Artificial lake perfect for boat rides and sunsets" },
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
              Ready to Explore Udaipur?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Experience the royal charm of Udaipur with our carefully curated packages
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