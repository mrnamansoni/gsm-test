"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import CommunityTrips from "@/components/sections/community-trips";
import { motion } from "framer-motion";
import { Users, Globe, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join Our Travel <span className="text-primary">Community</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with 13,540+ fellow adventurers, share stories, plan group trips, and unlock exclusive deals. Travel is better together!
            </p>
          </motion.div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { icon: Users, label: "13,540+", sub: "Active Members", color: "text-primary" },
              { icon: Globe, label: "250+", sub: "Destinations Explored", color: "text-accent" },
              { icon: Calendar, label: "50+", sub: "Group Trips", color: "text-primary" },
              { icon: Award, label: "4.9★", sub: "Community Rating", color: "text-accent" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-card p-8 rounded-xl text-center border border-border/50 hover:border-primary/50 transition-all hover:scale-105 shadow-md hover:shadow-primary/20"
                whileHover={{ y: -5 }}
              >
                <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                <p className="text-3xl font-bold text-foreground mb-1">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* Community Features */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center mb-12">Why Join Our Community?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Share Your Stories', desc: 'Post photos, write blogs, and inspire others with your travel tales. Earn badges and rewards!' },
                { title: 'Group Trip Planning', desc: 'Find travel buddies, organize meetups, and join exclusive group adventures at discounted rates.' },
                { title: 'Exclusive Perks', desc: 'Access member-only deals, early bird bookings, priority support, and community events.' }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="bg-card p-8 rounded-xl text-center hover:bg-primary/5 transition-colors"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button size="lg" variant="outline" className="mr-4 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                Learn More
              </Button>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Join Now
              </Button>
            </div>
          </motion.section>

          {/* Success Stories */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center mb-12">Community Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Priya K.', story: 'Met lifelong friends on a Rajasthan group trip. Best decision ever!', img: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300' },
                { name: 'Ravi S.', story: 'Solo traveler turned community leader. Organized 5 trips now!', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300' },
                { name: 'Anita M.', story: 'Discovered hidden gems in Himalayas thanks to community tips.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300' }
              ].map((story, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-card p-6 rounded-xl border border-border/50 hover:border-accent/50 transition-all"
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                    <Image src={story.img} alt={story.name} width={80} height={80} className="object-cover" />
                  </div>
                  <p className="text-muted-foreground italic mb-3">"{story.story}"</p>
                  <p className="font-semibold text-center">{story.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        <CommunityTrips />
      </div>
      <Footer />
    </main>
  );
}