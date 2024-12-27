'use client'
import { HeroSection } from '@/components/HeroSection'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/Button'
import { ArrowRight } from 'lucide-react'


const ErrorPage = () => {
  return (
    <>
      <HeroSection image='/images/servicesHeroImage.jpg' title='404 Error' />

      {/* error section */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-[#f8f9fa] py-8 px-4 overflow-hidden  rounded-t-[50px] relative top-[-50px]">
        <img src='/images/astronaut.png' alt="Not Found" className="max-w-full h-auto" />
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif text-[#003049]">
            Oops! Page Not Found
          </h1>
          <p className="text-gray-600">
            The page you are looking for does not exist
          </p>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="/">

            <Button text="Go Home" icon={<ArrowRight />} />
          </Link>
        </motion.div>
      </section>
    </>
  )
}

export default ErrorPage
