'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Features } from './Features';
import Button from './Button';

export function Hero() {
  return (
    <section className="relative w-full pb-20 justify-center bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden max-w-full rounded-t-[50px] mt-[-50px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://demo.awaikenthemes.com/assets/videos/carefirst-video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 rounded-t-[50px]" />
      </div>

      {/* Content */}
      <div className="relative px-4 flex flex-col justify-center pt-20">
        <div className="justify-center px-4 lg:px-32">
          {/* Main Title with Right-to-Left Fade Animation */}
          <motion.h1
            initial={{ x: 100, opacity: 0 }} // Start off-screen to the right
            animate={{ x: 0, opacity: 1 }} // Slide into position with opacity
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-white font-serif  text-left"
          >
            <span className="block text-4xl lg:text-6xl mb-2 lg:text-left">Destination For</span>
            <span className="block text-4xl lg:text-6xl lg:text-left">Relief &amp; Wellness</span>
          </motion.h1>

          {/* Paragraph with Bottom-to-Up Animation */}
          <motion.p
            initial={{ y: 50, opacity: 0 }} // Start off-screen to the bottom
            animate={{ y: 0, opacity: 1 }} // Slide up into position
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="text-gray-200 md:text-center lg:text-left text-left text-base lg:text-lg mt-6 mb-8 max-w-xl mx-auto lg:mx-0"
          >
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at layout. The point of using lorem
            Ipsum is the less normal distribution of letters.
          </motion.p>

          {/* Buttons with Bottom-to-Up Animation */}
          <motion.div
            initial={{ y: 50, opacity: 0 }} // Start off-screen to the bottom
            animate={{ y: 0, opacity: 1 }} // Slide up into position
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-wrap  lg:justify-start gap-4"
          >
            
            <Button text="Explore Services" icon={<ArrowRight className="h-5 w-5" />} />

            <Button text="Book Appointment" icon={<ArrowRight className="h-5 w-5" />} />
            
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <Features />
    </section>
  );
}
