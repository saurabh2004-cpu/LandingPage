'use client';

import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const linkHoverVariants = {
    initial: { opacity: 1 },
    hover: { opacity: 0.7 },
  };

  return (
    <footer
      ref={footerRef}
      className="bg-[#003144] text-white py-10 sm:py-16 rounded-t-[50px]"
    >
      <motion.div
        className="container mx-auto px-4 lg:px-8"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {/* Logo and Heading Section */}
        <motion.div
          variants={fadeUpVariants}
          className="mb-12 grid sm:grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <div className="flex items-center gap-4">
            <img
              src="https://demo.awaikenthemes.com/html-preview/carefirst/images/logo.svg"
              alt="Carefirst Logo"
              className="h-10 sm:h-12"
            />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
              #1 Physiotherapy centre in the town
            </h1>
            <p className="text-gray-300 text-sm sm:text-base">
              We understand that injuries and acute pain can happen unexpectedly. Our emergency
              physiotherapy services are designed to provide immediate relief and aid in faster
              recovery.
            </p>
          </div>
        </motion.div>

        <div className="h-px w-full bg-white/10 mb-12 sm:mb-16" />

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Quick Links */}
          <motion.div variants={fadeUpVariants} className="order-1 lg:order-1">
            <h3 className="text-lg font-semibold mb-4 bg-white/10 inline-block px-4 py-2 rounded-full">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {['About Us', 'Services', 'Contact Us'].map((link) => (
                <motion.li key={link} className="flex items-center">
                  <span className="mr-2">•</span>
                  <motion.a
                    href="#"
                    initial="initial"
                    whileHover="hover"
                    variants={linkHoverVariants}
                    className="hover:underline"
                  >
                    {link}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Working Hours */}
          <motion.div variants={fadeUpVariants} className="order-3 lg:order-2">
            <h3 className="text-lg font-semibold mb-4 bg-white/10 inline-block px-4 py-2 rounded-full">
              Working Hours
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Mon To Fri : 10:00 To 6:00
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Sat : 10:00AM To 3:00PM
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Sun : Closed
              </li>
            </ul>
          </motion.div>

          {/* More Services */}
          <motion.div variants={fadeUpVariants} className="order-2 lg:order-4">
            <h3 className="text-lg font-semibold mb-4 bg-white/10 inline-block px-4 py-2 rounded-full">
              More Services
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {['Manual Therapy', 'Chronic Pain', 'Hand Therapy'].map((service) => (
                <motion.li key={service} className="flex items-center">
                  <span className="mr-2">•</span>
                  <motion.a
                    href="#"
                    initial="initial"
                    whileHover="hover"
                    variants={linkHoverVariants}
                    className="hover:underline"
                  >
                    {service}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div variants={fadeUpVariants} className="order-4 lg:order-3">
            <h3 className="text-lg font-semibold mb-4 bg-white/10 inline-block px-4 py-2 rounded-full">
              Social Media
            </h3>
            <div className="flex gap-4 sm:gap-6">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Linkedin, href: '#' },
                { Icon: Instagram, href: '#' },
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  initial="initial"
                  whileHover="hover"
                  variants={linkHoverVariants}
                  className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Help and Support */}
        <motion.div variants={fadeUpVariants} className="mb-12 sm:mb-16">
          <h3 className="text-lg font-semibold mb-4 bg-white/10 inline-block px-4 py-2 rounded-full">
            Help And Support
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>(+0) 789 3456 012</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>domain@gmail.com</span>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={fadeUpVariants}
          className="text-center pt-8 border-t border-white/10"
        >
          <p className="mb-4 text-sm sm:text-base">
            Copyright 2024 Physiotherapy. All Rights Reserved.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#" className="text-white hover:text-white/80 transition-colors text-sm sm:text-base">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="text-white hover:text-white/80 transition-colors text-sm sm:text-base">
              Terms And Conditions
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};
