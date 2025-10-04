"use client";

import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import TaglineSection from "@/components/sections/tagline";
import FeaturedPackages from "@/components/sections/featured-packages";
import Destinations from "@/components/sections/destinations";
import WhyChooseUs from "@/components/sections/why-choose-us";
import CommunityTrips from "@/components/sections/community-trips";
import Testimonials from "@/components/sections/testimonials";
import Footer from "@/components/sections/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <TaglineSection />
      <FeaturedPackages />
      <Destinations />
      <WhyChooseUs />
      <CommunityTrips />
      <Testimonials />
      <Footer />
    </main>
  );
}