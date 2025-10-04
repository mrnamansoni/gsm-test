"use client";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "10 Budget Travel Tips for Exploring India",
    excerpt: "Discover how to travel across India without breaking the bank. From local transportation to affordable accommodations...",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2-preview--ghoom-wander-wildly-82-lovable-app/assets/images/hero-travel-ptdU3cD5-11.jpg",
    author: "Priya Sharma",
    date: "March 15, 2024",
    category: "Budget Travel",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Hidden Gems in Himachal Pradesh",
    excerpt: "Beyond Manali and Shimla lies a treasure trove of unexplored destinations. Let's explore the hidden gems...",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2-preview--ghoom-wander-wildly-82-lovable-app/assets/images/photo-1626621341517-bbf3d9990a23-5.webp",
    author: "Rahul Verma",
    date: "March 12, 2024",
    category: "Destinations",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Solo Travel Safety Guide for Women",
    excerpt: "Essential safety tips and tricks for women travelers in India. Learn how to travel confidently and safely...",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2-preview--ghoom-wander-wildly-82-lovable-app/assets/images/photo-1602216056096-3b40cc0c9944-6.webp",
    author: "Anjali Gupta",
    date: "March 10, 2024",
    category: "Travel Tips",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Best Street Food Trails in India",
    excerpt: "From Delhi's chaat to Mumbai's vada pav, explore India's incredible street food culture and where to find it...",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2-preview--ghoom-wander-wildly-82-lovable-app/assets/images/photo-1512343879784-a960bf40e7f2-10.webp",
    author: "Vikram Singh",
    date: "March 8, 2024",
    category: "Food & Culture",
    readTime: "8 min read",
  },
  {
    id: 5,
    title: "Monsoon Travel: Best Places to Visit",
    excerpt: "Embrace the rains! Discover the most beautiful destinations in India during the monsoon season...",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2-preview--ghoom-wander-wildly-82-lovable-app/assets/images/photo-1544735716-392fe2489ffa-7.webp",
    author: "Neha Reddy",
    date: "March 5, 2024",
    category: "Seasonal Travel",
    readTime: "5 min read",
  },
  {
    id: 6,
    title: "Weekend Getaways from Delhi Under ₹5000",
    excerpt: "Quick escapes from the capital city that won't empty your wallet. Perfect weekend trips for busy professionals...",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2-preview--ghoom-wander-wildly-82-lovable-app/assets/images/photo-1506905925346-21bda4d32df4-8.webp",
    author: "Amit Kumar",
    date: "March 3, 2024",
    category: "Weekend Trips",
    readTime: "6 min read",
  },
];

const categories = ["All", "Budget Travel", "Destinations", "Travel Tips", "Food & Culture", "Seasonal Travel", "Weekend Trips"];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Travel <span className="text-primary">Blog</span> & Stories
            </h1>
            <p className="text-xl text-muted-foreground">
              Inspiring travel stories, practical tips, and destination guides from our community of wanderers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Button
                  variant={category === "All" ? "default" : "outline"}
                  className={category === "All" ? "bg-primary text-primary-foreground" : "border-border hover:border-primary"}
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-card/50 border-border/50 overflow-hidden hover:border-primary transition-all h-full flex flex-col">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border/30">
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      <Link href={`/blog/${post.id}`}>
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/90">
                          Read More <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-muted-foreground mb-6">
              Get the latest travel stories, tips, and exclusive deals delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg bg-card border border-border text-white flex-1 max-w-md"
              />
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}