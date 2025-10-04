import React, { useCallback, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { v4 as uuidv4 } from "uuid"
import { cn } from "@/lib/utils"

interface PixelTrailProps {
  pixelSize: number
  fadeDuration?: number
  delay?: number
  className?: string
  pixelClassName?: string
}

interface ActivePixel {
  id: string
  x: number
  y: number
  timestamp: number
}

const PixelTrail: React.FC<PixelTrailProps> = ({
  pixelSize = 20,
  fadeDuration = 500,
  delay = 0,
  className,
  pixelClassName,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activePixels, setActivePixels] = useState<ActivePixel[]>([])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = Math.floor((e.clientX - rect.left) / pixelSize) * pixelSize
      const y = Math.floor((e.clientY - rect.top) / pixelSize) * pixelSize

      const newPixel: ActivePixel = {
        id: uuidv4(),
        x,
        y,
        timestamp: Date.now()
      }

      setActivePixels(prev => [...prev, newPixel])

      // Remove pixel after animation completes
      setTimeout(() => {
        setActivePixels(prev => prev.filter(p => p.id !== newPixel.id))
      }, fadeDuration + delay + 100)
    },
    [pixelSize, fadeDuration, delay]
  )

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 w-full h-full pointer-events-auto", className)}
      onMouseMove={handleMouseMove}
    >
      {activePixels.map(pixel => (
        <motion.div
          key={pixel.id}
          className={cn("absolute pointer-events-none", pixelClassName)}
          style={{
            left: `${pixel.x}px`,
            top: `${pixel.y}px`,
            width: `${pixelSize}px`,
            height: `${pixelSize}px`,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 1] }}
          transition={{
            duration: fadeDuration / 1000,
            delay: delay / 1000,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  )
}

PixelTrail.displayName = "PixelTrail"
export { PixelTrail }