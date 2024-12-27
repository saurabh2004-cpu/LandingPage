'use client'

import { HeroSection } from '@/components/HeroSection'
import React from 'react'
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion'

const Faqs = () => {
  // faqs
  const faqs = [
    {
      question: "How do I start the landscaping process?",
      answer: "Costs depend on the scope of the project. After our consultation, we provide a detailed estimate tailored to your budget and needs."
    },
    {
      question: "Can you work with my existing garden features?",
      answer: "Yes, we can incorporate and enhance your existing garden features. Our team will assess your current landscape and provide recommendations for integration."
    },
    {
      question: "How much does garden landscaping cost?",
      answer: "Landscaping costs vary based on project size, materials, and complexity. We provide detailed quotes after an initial consultation."
    },
    {
      question: "How do I start the landscaping process?",
      answer: "Begin by scheduling a consultation. We'll discuss your vision, assess your space, and develop a comprehensive plan tailored to your needs."
    },
    {
      question: "Can you work with my existing garden features?",
      answer: "We specialize in working with existing features, enhancing them while integrating new elements seamlessly."
    }
  ]

  return (
    <>
      <HeroSection image='/images/1.jpg' title="FAQ's" />

      {/* faqs */}
      <section className="container  mx-auto px-6 md:px-12 lg:px-24 py-16 flex flex-col lg:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="w-[500px] lg:w-1/2 flex justify-center items-center relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-3/4  aspect-[3/4] bg-[#e5eaec] rounded-3xl shadow-lg overflow-hidden"
          >
            <motion.img
              src="/images/11.jpg"
              alt="Physiotherapy"
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>
        </div>

        {/* FAQ Section */}
        <div className="w-full lg:w-1/2 space-y-8">
          {/* Header */}
          <div className="text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-blue-600 font-medium"
            >
              / FAQ&apos;s
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-serif text-[#003153]"
            >
              Frequently Asked Questions
            </motion.h2>
            <p className="text-gray-600 mt-4">
              Have questions? We&apos;ve got answers! Find the most common inquiries about our services below.
            </p>
          </div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border rounded-xl overflow-hidden shadow-md"
                  >
                    <AccordionTrigger className="px-6 py-4 bg-white text-[#003153] hover:bg-gray-50 hover:text-blue-700 font-medium text-left transition-colors duration-300">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 bg-[#003153] text-white rounded-b-xl">
                      <p>{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

    </>
  )
}

export default Faqs
