"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { motion } from "framer-motion";
import { MapPin, Calendar, Users, Star, Waves, Camera, Utensils, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const highlights = [
  { icon: Waves, text: "River Rafting & Water Sports" },
  { icon: Camera, text: "Spiritual & Scenic Beauty" },
  { icon: Utensils, text: "Healthy Satvik Food" },
  { icon: Home, text: "Riverside Camps & Ashrams" },
];

const packages = [
  {
    title: "Rishikesh Adventure Package",
    duration: "3 Days / 2 Nights",
    price: "₹6,999",
    rating: 4.8,
    includes: ["Camp", "Rafting", "Meals", "Transport"],
  },
  {
    title: "Yoga & Meditation Retreat",
    duration: "7 Days / 6 Nights",
    price: "₹15,999",
    rating: 4.9,
    includes: ["Ashram", "Yoga Classes", "Meals", "Meditation"],
  },
  {
    title: "Weekend Rishikesh Escape",
    duration: "2 Days / 1 Night",
    price: "₹4,999",
    rating: 4.7,
    includes: ["Camp", "Activities", "Meals", "Transport"],
  },
];

export default function RishikeshPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2-preview--ghoom-wander-wildly-82-lovable-app/assets/images/photo-1544735716-392fe2489ffa-7.webp"
          alt="Rishikesh"
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
                Rishikesh
              </h1>
              <p className="text-2xl text-muted-foreground mb-6">
                The Yoga Capital of the World - Uttarakhand
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
                  <span>3,120+ Travelers</span>
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
            <h2 className="text-4xl font-bold text-white mb-6 text-center">About Rishikesh</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center max-w-4xl mx-auto">
              Nestled in the foothills of the Himalayas along the holy Ganges River, Rishikesh is a spiritual haven 
              and adventure paradise. Famous for yoga, meditation, and white-water rafting, this sacred city offers 
              the perfect blend of tranquility and thrill. Experience ancient temples, ashrams, and breathtaking nature.
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
            Rishikesh Travel Packages
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
              { name: "Laxman Jhula", description: "Iconic suspension bridge over the Ganges River" },
              { name: "Ram Jhula", description: "Historic iron bridge connecting temples and ashrams" },
              { name: "Beatles Ashram", description: "Abandoned ashram with Beatles connection and art" },
              { name: "Triveni Ghat", description: "Sacred bathing spot with evening Ganga Aarti" },
              { name: "Neer Garh Waterfall", description: "Beautiful waterfall perfect for trekking" },
              { name: "Parmarth Niketan", description: "Largest ashram in Rishikesh with yoga programs" },
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
              Ready to Explore Rishikesh?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Find your inner peace or adventure thrill in the spiritual heart of India
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