import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import FeaturedPackages from "@/components/sections/featured-packages";
import CommunityTrips from "@/components/sections/community-trips";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function PackagesPage() {
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
            Our Travel <span className="text-primary">Packages</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover handpicked adventures tailored for every budget and preference. From solo escapes to family getaways, find your perfect package with up to 50% off.
          </p>
        </motion.div>

        {/* Package Categories Filter */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="outline" className="border-accent text-accent">All Packages</Button>
            <Button variant="outline" className="border-accent text-accent">Budget</Button>
            <Button variant="outline" className="border-accent text-accent">Luxury</Button>
            <Button variant="outline" className="border-accent text-accent">Group</Button>
            <Button variant="outline" className="border-accent text-accent">Solo</Button>
          </div>
          <div className="flex justify-center">
            <div className="relative max-w-sm w-full">
              <Input placeholder="Search packages by destination or type..." className="pr-10" />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </motion.section>

        <FeaturedPackages />

        <CommunityTrips />

        {/* Package Benefits */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12">What's Included in Every Package</h2>
          <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { icon: '🚌', title: 'Transport', desc: 'AC Vehicles & Flights' },
              { icon: '🏨', title: 'Accommodation', desc: 'Premium Stays' },
              { icon: '🍲', title: 'Meals', desc: 'Daily Breakfast & Dinner' },
              { icon: '🧳', title: 'Guides', desc: 'Expert Local Guides' },
              { icon: '🛡️', title: 'Insurance', desc: 'Full Coverage' }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-card p-6 rounded-xl text-center border border-border/50 hover:border-primary/50 transition-all hover:scale-105"
              >
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Start Your Journey Today</h2>
          <p className="text-muted-foreground mb-8">Limited spots available - Book now and save up to 50% on selected packages.</p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl">
            Explore Packages
          </Button>
        </motion.section>
      </div>
      <Footer />
    </main>
  );
}