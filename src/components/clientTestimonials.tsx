'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const testimonials = [
  {
    text: "The therapists here are amazing! I was dealing with chronic back pain, and after just a few sessions, the difference was unbelievable.",
    name: "Tom H.",
    title: "Marathon Runner",
    avatar: "https://demo1.imithemes.com/html/born-to-give/images/post-detail1.jpg"
  },
  {
    text: "After my knee surgery, the team at Physiocare helped me regain my mobility. The personalized treatment plan was incredible.",
    name: "Chris W.",
    title: "Professional Athlete",
    avatar: "https://demo1.imithemes.com/html/born-to-give/images/post-detail1.jpg"
  },
  {
    text: "Outstanding care and attention to detail. The staff is knowledgeable and truly cares about patient recovery.",
    name: "Sarah M.",
    title: "Yoga Instructor",
    avatar: "https://demo1.imithemes.com/html/born-to-give/images/post-detail1.jpg"
  },
  {
    text: "I've had chronic shoulder pain for years. Their targeted approach has made a significant difference in my daily life.",
    name: "Michael R.",
    title: "Office Worker",
    avatar: "https://demo1.imithemes.com/html/born-to-give/images/post-detail1.jpg"
  },
];

export const ClientTestimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <div ref={ref} className="h-full bg-[#0B2C3D] px-4 py-16 lg:px-16 relative overflow-hidden rounded-t-[50px]">
      <div className="max-w-7xl mx-auto my-16 flex flex-col lg:flex-row gap-16">
        {/* Header Section */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-blue-400 mb-4"
          >
            / Client Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-4xl lg:text-5xl text-white font-medium mb-6"
          >
            Our Clients Reviews
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-gray-300"
          >
            At Physiocare, we pride ourselves on providing exceptional
            physiotherapy services that deliver real results. But dont just
            take our word for it.
          </motion.p>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          className="lg:w-1/2 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 pr-6"
                >
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg h-full"
                  >
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-orange-400 text-orange-400"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-600 mb-6">{testimonial.text}</p>

                    {/* Author */}
                    <div className="flex items-center gap-3 mt-auto">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-medium text-[#0B2C3D]">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-500 text-sm">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={scrollPrev}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={scrollNext}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 border-4 border-white/10 rounded-full -mt-32 -ml-32" />
      <div className="absolute bottom-0 right-0 w-64 h-64 border-4 border-white/10 rounded-full -mb-32 -mr-32" />
    </div>
  );
};
