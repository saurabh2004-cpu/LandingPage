'use client'

import { motion } from 'framer-motion'
import { UserCheck, Stethoscope, ClipboardCheck } from 'lucide-react'

// Feature data
const features = [
  {
    icon: UserCheck,
    title: "Expert Therapists",
    description: "Easy treatment with expert",
  },
  {
    icon: Stethoscope,
    title: "Emergency Service",
    description: "24/7 Emergency Available",
  },
  {
    icon: ClipboardCheck,
    title: "Free Consultant",
    description: "Advice with Experts",
  },
]

// Parent and child animation variants
const containerVariants = {
  hidden: { opacity: 0 }, 
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }, 
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 }, 
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, 
}

export function Features() {
  return (
    <section className="bg-[#023047] text-white py-8 rounded-[50px] relative top-[188px] mb-4">
      <div className="container mx-auto px-4 flex lg:justify-around">
        <motion.div
          variants={containerVariants} 
          initial="hidden"
          whileInView="visible" // Animation triggered on viewport entry
          viewport={{ once: true, amount: 0.3 }} // Runs once, when 30% of the container is visible
          className="grid grid-cols-1 md:grid-cols-3  gap-4 sm:gap-6 md:gap-8 lg:gap-20 md:divide-x divide-white/20 mb-24"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants} 
                className="flex items-start space-x-4 px-4"
              >
                <div className="flex-shrink-0">
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
