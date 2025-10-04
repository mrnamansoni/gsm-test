"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { motion } from "framer-motion";
import { MapPin, Calendar, Users, Star, Mountain, Camera, Utensils, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const highlights = [
  { icon: Mountain, text: "Sacred Temple & Pilgrimage" },
  { icon: Camera, text: "Himalayan Mountain Views" },
  { icon: Utensils, text: "Simple Satvik Meals" },
  { icon: Home, text: "Basic Guesthouses & Camps" },
];

const packages = [
  {
    title: "Kedarnath Yatra Package",
    duration: "5 Days / 4 Nights",
    price: "₹12,999",
    rating: 4.8,
    includes: ["Hotel", "Helicopter", "Meals", "Puja"],
  },
  {
    title: "Kedarnath Trek Package",
    duration: "6 Days / 5 Nights",
    price: "₹9,999",
    rating: 4.7,
    includes: ["Guest House", "Trek", "Meals", "Guide"],
  },
  {
    title: "Do Dham Yatra",
    duration: "8 Days / 7 Nights",
    price: "₹19,999",
    rating: 4.9,
    includes: ["Hotels", "Transport", "All Meals", "Puja"],
  },
];

export default function KedarnathPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2-preview--ghoom-wander-wildly-82-lovable-app/assets/images/bg2-12.webp"
          alt="Kedarnath"
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
                Kedarnath
              </h1>
              <p className="text-2xl text-muted-foreground mb-6">
                Abode of Lord Shiva - Uttarakhand
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-white">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Uttarakhand</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary fill-current" />
                  <span>4.8 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>2,680+ Pilgrims</span>
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
            <h2 className="text-4xl font-bold text-white mb-6 text-center">About Kedarnath</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center max-w-4xl mx-auto">
              Located at an altitude of 3,583 meters in the Garhwal Himalayas, Kedarnath is one of the holiest Hindu 
              pilgrimage sites. Home to one of the twelve Jyotirlingas of Lord Shiva, this sacred temple attracts 
              devotees and adventure seekers alike. The journey involves a challenging trek through breathtaking 
              mountain landscapes, making it a truly spiritual and transformative experience.
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
            Kedarnath Yatra Packages
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
            Sacred Sites & Attractions
          </motion.h2>
          <div className="space-y-6">
            {[
              { name: "Kedarnath Temple", description: "Ancient Shiva temple, one of the twelve Jyotirlingas" },
              { name: "Bhairavnath Temple", description: "Temple dedicated to Bhairav, guardian deity of Kedarnath" },
              { name: "Gandhi Sarovar", description: "Sacred lake where ashes of Mahatma Gandhi were immersed" },
              { name: "Vasuki Tal", description: "High-altitude lake at 4,150m with stunning mountain views" },
              { name: "Gaurikund", description: "Starting point of Kedarnath trek with hot water springs" },
              { name: "Sonprayag", description: "Confluence of rivers Basuki and Mandakini" },
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
              Ready for Kedarnath Yatra?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Embark on a sacred journey to the abode of Lord Shiva in the Himalayas
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