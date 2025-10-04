"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "DESTINATIONS", href: "/destinations" },
  { name: "PACKAGES", href: "/packages" },
  { name: "COMMUNITY", href: "/community" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACT", href: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("HOME");

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary z-[60]" />
      
      <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-lg border-b border-border/30 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="container mx-auto px-4 h-14 sm:h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0" onClick={() => setActiveItem('HOME')}>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden hover:scale-110 transition-transform duration-300 flex-shrink-0">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2-preview--ghoom-wander-wildly-82-lovable-app/assets/images/gsm_logo-BkKwPqTn-1.webp"
                alt="Ghoomo Saste Me Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="hidden md:inline bg-gradient-to-r from-primary to-accent bg-clip-text text-base sm:text-xl font-bold text-transparent">
              ✨ Global Community of Travelers
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActiveItem(item.name)}
                className={`text-sm font-medium transition-colors duration-200 relative group py-7 ${
                  activeItem === item.name
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
                <span className={`absolute bottom-4 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  activeItem === item.name ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <div className="flex items-center space-x-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-3 h-3" />
              <span>+91-9090403075</span>
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 text-sm">
              Book Now
            </Button>
          </div>

          <div className="lg:hidden">
            <Button variant="ghost" size="sm" className="h-10 w-10 p-0 min-h-[44px] min-w-[44px]" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden absolute top-14 left-0 w-full bg-background/95 backdrop-blur border-t border-border/50"
            >
              <nav className="flex flex-col items-center space-y-3 pt-4 pb-6 px-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => {
                      setActiveItem(item.name);
                      setIsMenuOpen(false);
                    }}
                    className={`text-base sm:text-lg font-medium py-3 px-6 rounded-lg w-full text-center max-w-xs ${
                      activeItem === item.name ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-primary hover:bg-accent/10 transition-colors"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="border-t border-border/50 w-full pt-4 mt-2 flex flex-col items-center space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground w-full text-center">
                    <Phone className="w-4 h-4" />
                    <span>+91-9090403075</span>
                  </div>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full max-w-xs py-3 text-sm">
                    Book Now
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;