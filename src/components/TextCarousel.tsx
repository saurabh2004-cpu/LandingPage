'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const carouselItems = [
  "Recover Faster with Expert Physiotherapy Care",
  "Personalized Treatment Plans for Better Results",
  "Professional Care for Your Recovery Journey",
  "Expert Team Dedicated to Your Well-being"
]

export default function TextCarousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % carouselItems.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const next = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % carouselItems.length)
  }

  const previous = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  return (
    <div 
      className="bg-[#003153] relative overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center py-4 md:py-6 relative">
          <div className="flex-1 relative h-12 md:h-16 max-w-3xl mx-auto">
            <AnimatePresence custom={direction} mode="wait">
              <motion.h2
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="text-white text-xl md:text-3xl font-serif absolute inset-0 flex items-center justify-center text-center"
              >
                {carouselItems[current]}
              </motion.h2>
            </AnimatePresence>
          </div>
          
          {/* Navigation buttons positioned absolutely in the middle */}
          <div className="absolute left-0 right-0 flex items-center justify-between px-4 pointer-events-none">
          </div>
        </div>
            <button
              onClick={previous}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors pointer-events-auto"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors pointer-events-auto"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
      </div>

      {/* Decorative angle */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-32 bg-white transform skew-x-[10deg] translate-x-16"
        aria-hidden="true"
      />
    </div>
  )
}

