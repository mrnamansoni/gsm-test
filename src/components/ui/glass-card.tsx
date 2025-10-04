"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
  glowColor?: string;
}

export const GlassCard = ({ 
  children, 
  className,
  hoverScale = 1.03,
  glowColor = "rgba(241, 196, 15, 0.3)"
}: GlassCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      className={cn(
        "relative rounded-2xl backdrop-blur-md bg-card/80 border border-border/50 shadow-xl overflow-hidden",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        scale: hoverScale,
        rotateX: 2,
        rotateY: 2,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Spotlight effect following cursor */}
      <motion.div
        className="absolute inset-0 opacity-0 pointer-events-none"
        animate={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent 40%)`
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

      {/* Border glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        animate={{
          boxShadow: isHovered 
            ? `0 0 30px ${glowColor}, inset 0 0 20px rgba(255,255,255,0.1)`
            : "0 0 0px transparent"
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Animated gradient border */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0"
        style={{
          background: "linear-gradient(45deg, transparent 30%, rgba(241, 196, 15, 0.3) 50%, transparent 70%)",
          backgroundSize: "200% 200%",
        }}
        animate={{
          opacity: isHovered ? 0.3 : 0,
          backgroundPosition: isHovered ? ["0% 0%", "100% 100%"] : "0% 0%"
        }}
        transition={{ 
          opacity: { duration: 0.3 },
          backgroundPosition: { duration: 2, repeat: Infinity }
        }}
      />
    </motion.div>
  );
};