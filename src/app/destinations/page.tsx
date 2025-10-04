import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Destinations from "@/components/sections/destinations";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 mb-16 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Explore Our <span className="text-primary">Destinations</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover 250+ breathtaking locations across India and beyond. From Himalayan treks to beach escapes, find your perfect adventure starting from ₹5,000.
          </p>
        </motion.div>

        {/* Filter & Search Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="outline" className="border-accent text-accent">Adventure</Button>
            <Button variant="outline" className="border-accent text-accent">Heritage</Button>
            <Button variant="outline" className="border-accent text-accent">Beach</Button>
            <Button variant="outline" className="border-accent text-accent">Spiritual</Button>
            <Button variant="outline" className="border-accent text-accent">Wildlife</Button>
          </div>
          <div className="flex justify-center">
            <div className="relative max-w-md w-full">
              <Input placeholder="Search destinations..." className="pr-10" />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </motion.section>

        <Destinations />

        {/* Popular Categories */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Destination Categories</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { cat: 'Himalayan Adventures', count: '45+', img: '/himalaya-placeholder.jpg', color: 'from-primary to-accent' },
              { cat: 'Royal Heritage', count: '32+', img: '/heritage-placeholder.jpg', color: 'from-accent to-primary' },
              { cat: 'Tropical Beaches', count: '28+', img: '/beach-placeholder.jpg', color: 'from-primary to-accent' },
              { cat: 'Spiritual Journeys', count: '50+', img: '/spiritual-placeholder.jpg', color: 'from-accent to-primary' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-card rounded-xl overflow-hidden group cursor-pointer hover:scale-105 transition-all shadow-lg hover:shadow-primary/20"
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48">
                  <Image src={item.img} alt={item.cat} fill className="object-cover group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold">{item.cat}</h3>
                    <p className="text-primary/80">{item.count} Destinations</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Explore?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your dream destination today and create memories that last a lifetime with our expert-guided tours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
              Book Now
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent w-full sm:w-auto">
              View All
            </Button>
          </div>
        </motion.section>
      </div>
      <Footer />
    </main>
  );
}