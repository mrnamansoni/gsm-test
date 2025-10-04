"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypingSubtitleProps {
  subtitles: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function TypingSubtitle({
  subtitles,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000
}: TypingSubtitleProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentSubtitle = subtitles[currentIndex];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    if (!isDeleting && displayedText === currentSubtitle) {
      setIsPaused(true);
      return;
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % subtitles.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          setDisplayedText(currentSubtitle.substring(0, displayedText.length - 1));
        } else {
          setDisplayedText(currentSubtitle.substring(0, displayedText.length + 1));
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, isPaused, currentIndex, subtitles, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <div className="text-center">
      <motion.p
        className="text-2xl md:text-4xl font-bold text-primary drop-shadow-lg min-h-[3rem] flex items-center justify-center -translate-y-12 !w-full !h-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>

        {displayedText}
        <motion.span
          className="inline-block w-1 h-8 md:h-10 bg-primary ml-1"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }} />

      </motion.p>
    </div>);

}