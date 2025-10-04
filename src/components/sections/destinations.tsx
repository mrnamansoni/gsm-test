"use client";

import Image from 'next/image';
import { Star, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { PixelTrail } from '@/components/ui/pixel-trail';

const destinations = [
    {
        name: "Manali",
        state: "Himachal Pradesh",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2-preview--ghoom-wander-wildly-82-lovable-app/assets/images/photo-1626621341517-bbf3d9990a23-5.webp",
        price: "4,999",
        rating: 4.8,
        travelers: "2,340 travelers",
        description: "Breathtaking mountain adventures await in the heart of Himachal.",
        tags: ["Adventure Sports", "Snow Views", "Trekking"]
    },
    {
        name: "Udaipur",
        state: "Rajasthan",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2-preview--ghoom-wander-wildly-82-lovable-app/assets/images/photo-1602216056096-3b40cc0c9944-6.webp",
        price: "5,499",
        rating: 4.9,
        travelers: "1,876 travelers",
        description: "Experience royal luxury and stunning lake views in the City of Lakes.",
        tags: ["Royal Palaces", "Lake Views", "Heritage"]
    },
    {
        name: "Rishikesh",
        state: "Uttarakhand",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2-preview--ghoom-wander-wildly-82-lovable-app/assets/images/photo-1544735716-392fe2489ffa-7.webp",
        price: "3,999",
        rating: 4.7,
        travelers: "3,120 travelers",
        description: "Find peace and adventure by the holy Ganges in the Yoga Capital.",
        tags: ["River Rafting", "Yoga Retreats", "Adventure"]
    },
    {
        name: "Kasol",
        state: "Himachal Pradesh",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2-preview--ghoom-wander-wildly-82-lovable-app/assets/images/photo-1506905925346-21bda4d32df4-3.webp",
        price: "4,499",
        rating: 4.6,
        travelers: "1,654 travelers",
        description: "Discover the mini Israel of India in the beautiful Parvati Valley.",
        tags: ["Parvati Valley", "Trekking", "Cafes"]
    },
    {
        name: "Kedarnath",
        state: "Uttarakhand",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2-preview--ghoom-wander-wildly-82-lovable-app/assets/images/bg2-12.webp",
        price: "6,999",
        rating: 4.9,
        travelers: "987 travelers",
        description: "Embark on a spiritual journey to one of India's holiest shrines.",
        tags: ["Sacred Temple", "Mountain Views", "Pilgrimage"]
    },
    {
        name: "Goa",
        state: "Goa",
        image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5fcea5e6-d6bb-4169-8c84-f1c10f122fc2-preview--ghoom-wander-wildly-82-lovable-app/assets/images/photo-1512343879784-a960bf40e7f2-10.webp",
        price: "5,999",
        rating: 4.8,
        travelers: "4,230 travelers",
        description: "Relax on pristine beaches and enjoy vibrant nightlife by the Arabian Sea.",
        tags: ["Beach Vibes", "Nightlife", "Water Sports"]
    }
];

const Destinations = () => {
    return (
        <section className="py-20 bg-background/50 relative overflow-hidden">
            {/* Pixel Trail Effect - Background Layer */}
            <div className="absolute inset-0 z-0">
                <PixelTrail 
                    pixelSize={60}
                    fadeDuration={800}
                    delay={50}
                    pixelClassName="rounded-full bg-gradient-to-br from-[#d4af37] via-[#FFA500] to-[#4ecdc4] shadow-lg"
                />
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        Popular Destinations
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                        TOP NOTCH{' '}
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            DESTINATIONS
                        </span>
                    </h2>
                    <p className="max-w-3xl mx-auto mt-4 text-muted-foreground">
                        Discover India's most breathtaking destinations with our carefully curated travel experiences. Every journey promises unforgettable memories at unbeatable prices.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {destinations.map((dest, index) => (
                        <DestinationCard key={index} dest={dest} index={index} />
                    ))}
                </div>

                <motion.div 
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <a href="/destinations" className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/20 hover:scale-105">
                        View All Destinations
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

const DestinationCard = ({ dest, index }: { dest: any; index: number }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <motion.article 
            className="bg-card rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row relative group perspective-1000"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ 
                scale: 1.03,
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
            }}
        >
            {/* Image Section with Hover Effects */}
            <motion.div 
                className="relative w-full aspect-square sm:aspect-video md:aspect-auto overflow-hidden"
            >
                {/* Lazy loaded image with fade in */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: imageLoaded ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Image
                        src={dest.image}
                        alt={`Beautiful landscape of ${dest.name}`}
                        fill
                        className="object-cover transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                        onLoad={() => setImageLoaded(true)}
                        style={{
                            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                        }}
                    />
                </motion.div>

                {/* Darken overlay on hover */}
                <motion.div 
                    className="absolute inset-0 bg-black pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 0.3 : 0 }}
                    transition={{ duration: 0.3 }}
                />

                {/* Price tag with animation */}
                <motion.div 
                    className="absolute bottom-4 right-4 bg-primary text-primary-foreground text-lg font-bold py-2 px-4 rounded-full shadow-lg z-10"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    ₹{dest.price}
                </motion.div>

                {/* Sliding overlay from bottom on hover */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent flex items-end p-6 z-10"
                    initial={{ y: "100%" }}
                    animate={{ y: isHovered ? "0%" : "100%" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    <div className="text-white">
                        <h4 className="text-xl font-bold mb-2">{dest.name}</h4>
                        <p className="text-sm opacity-90">{dest.description}</p>
                    </div>
                </motion.div>
            </motion.div>

            {/* Content Section */}
            <div className="p-3 sm:p-6 w-full flex flex-col">
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <motion.div 
                        className="flex items-center gap-1.5"
                        whileHover={{ scale: 1.1 }}
                    >
                        <Star className="w-5 h-5 text-primary fill-primary" />
                        <span className="font-bold text-foreground">{dest.rating}</span>
                    </motion.div>
                    <motion.div 
                        className="flex items-center gap-1.5"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Users className="w-5 h-5" />
                        <span>{dest.travelers}</span>
                    </motion.div>
                </div>
                
                <div className="mt-2 sm:mt-4">
                    <h3 className="text-2xl font-semibold text-foreground">{dest.name}</h3>
                    <p className="text-sm text-muted-foreground">{dest.state}</p>
                </div>
                
                <p className="mt-2 sm:mt-4 text-xs sm:text-sm text-muted-foreground flex-grow">
                    {dest.description}
                </p>
                
                <div className="mt-3 sm:mt-4 flex flex-wrap gap-1 sm:gap-2">
                    {dest.tags.map((tag, i) => (
                        <motion.span 
                            key={tag} 
                            className="bg-muted px-2 py-1 rounded-md text-xs font-medium text-muted-foreground"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + i * 0.05, duration: 0.3 }}
                            whileHover={{ scale: 1.1, backgroundColor: "var(--color-primary)", color: "var(--color-primary-foreground)" }}
                        >
                            {tag}
                        </motion.span>
                    ))}
                </div>
                
                <motion.a 
                    href="#" 
                    className="mt-4 sm:mt-6 w-full bg-secondary text-secondary-foreground font-semibold py-3 rounded-lg transition-all overflow-hidden relative min-h-[44px]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.span
                        className="absolute inset-0 bg-accent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10">Explore {dest.name}</span>
                </motion.a>
            </div>

            {/* 3D depth shadow effect */}
            <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none"
                initial={{ boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                animate={{ 
                    boxShadow: isHovered 
                        ? "0 20px 60px rgba(241, 196, 15, 0.3)" 
                        : "0 10px 30px rgba(0,0,0,0.2)"
                }}
                transition={{ duration: 0.3 }}
            />
        </motion.article>
    );
};

export default Destinations;