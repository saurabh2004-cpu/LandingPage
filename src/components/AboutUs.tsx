'use client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Services } from './Services'
import Button from './Button'
import { ArrowRight } from 'lucide-react'

export const AboutUs = () => {
  const images = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
  ]

  return (
    <>
      <section className="bg-white text-black py-8 rounded-t-[50px] relative mb-20 z-50 px-5">
        <div className="flex flex-wrap w-full min-h-[600px] p-2"> {/* Adjusted for smaller devices */}
          {/* First Section */}
          <div className="w-full lg:w-1/2 text-black p-4 sm:p-6 lg:p-20 flex flex-col">
            {/* Link Animation */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="text-blue-600">/ About Us</Link>
            </motion.div>

            {/* Header Animation */}
            <motion.h1
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            >
              We are the best for{" "}
              <motion.span
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-blue-600"
              >
                physiotherapy
              </motion.span>
            </motion.h1>

            {/* Paragraph Animation */}
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-500 text-base sm:text-lg mb-6"
            >
              We understand that injuries and acute pain can happen unexpectedly. Our emergency physiotherapy services are designed to provide prompt and effective care to help you manage pain, prevent further injury, and start your recovery process as quickly as possible.
            </motion.p>

            {/* Features List */}
            <div className="w-full flex flex-wrap">
              <div className="w-full sm:w-1/2 mb-6 sm:mb-0">
                <motion.ul
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-3 text-gray-700"
                >
                  <li className="flex items-center">
                    <span className="text-blue-500 text-xl mr-3">↪</span>
                    Expert Therapist
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 text-xl mr-3">≡</span>
                    Advanced Techniques
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 text-xl mr-3">✔</span>
                    Personalized Care
                  </li>
                </motion.ul>
              </div>

              {/* Animated Rating Card */}
              <div className="w-full sm:w-1/2">
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  viewport={{ once: true }}
                >
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle>
                        <Image
                          src="https://demo.awaikenthemes.com/html-preview/carefirst/images/about-trusted-customer-img.png"
                          alt="Trusted customers"
                          width={100}
                          height={100}
                        />
                      </CardTitle>
                      <CardDescription>
                        <span className="text-yellow-500 text-2xl sm:text-3xl">★★★★★</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm sm:text-base">Trusted by 4k+ customers</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>

            <div className='block my-4'>
              <Button text="Book Appointment" icon={<ArrowRight className="w-5 h-5 text-white" />} />
            </div>
          </div> 


          {/* Second Section - Circular Images */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="relative flex items-center justify-center w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] rounded-full overflow-hidden">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 * index }}
                  viewport={{ once: true }}
                  className={`absolute w-1/2 h-1/2`}
                  style={{
                    top: index < 2 ? 0 : '50%',
                    left: index % 2 === 0 ? 0 : '50%',
                  }}
                >
                  <Image
                    src={image}
                    alt={`Image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </motion.div>
              ))}
              {/* Center Logo */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bg-white rounded-full flex items-center justify-center w-[70px] h-[70px] sm:w-[100px] sm:h-[100px]"
              >
                <Image
                  src="https://demo.awaikenthemes.com/html-preview/carefirst/images/about-circle-logo.svg"
                  alt="logo.svg"
                  width={50}
                  height={50}
                  className="sm:w-[70px] sm:h-[70px]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Services />
    </>
  )
}
