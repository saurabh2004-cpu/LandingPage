'use client'

import { ArrowRight, Activity, HandMetal, Brain, Users, Workflow, Timer } from 'lucide-react'
import { motion } from "framer-motion"
import Link from 'next/link'
import Button from './Button'

interface Service {
  icon: React.ElementType
  title: string
  description: string
  image: string
}

const services: Service[] = [
  {
    icon: Activity,
    title: "Manual Therapy",
    description: "Specialized form of physical therapy delivered through hands-on techniques.",
    image: "/images/5.jpg",
  },
  {
    icon: Brain,
    title: "Chronic Pain",
    description: "Refers to persistent pain even after the underlying injury or illness has healed.",
    image: "/images/6.jpg",
  },
  {
    icon: HandMetal,
    title: "Hand Therapy",
    description: "Specialized area of physiotherapy that focuses on hand, wrist, and forearm.",
    image: "/images/7.jpg",
  },
  {
    icon: Users,
    title: "Group Therapy",
    description: "Therapeutic sessions conducted in small groups for shared recovery goals.",
    image: "/images/8.jpg",
  },
  {
    icon: Workflow,
    title: "Exercise Programs",
    description: "Customized exercise routines designed for your specific condition.",
    image: "/images/9.jpg",
  },
  {
    icon: Timer,
    title: "Recovery Planning",
    description: "Structured approach to help you achieve optimal recovery outcomes.",
    image: "/images/10.jpg",
  },
]

export const Services = () => {
  return (
    <>
      <section className="relative overflow-hidden px-5 md:px-12 lg:px-36 py-16 bg-[#e5eaec] rounded-t-[50px]">
        <div className="container mx-auto">
          {/* Header Section */}
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-blue-600 mb-4"
          >
            / Services
          </motion.p>

          <motion.h2
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            We Provide The Best Services
          </motion.h2>

          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-600 mb-12 max-w-3xl"
          >
            We offer top-quality physiotherapy services tailored to your needs. Our expert therapists use advanced techniques to treat pain and improve mobility.
          </motion.p>

          {/* Call to Action Button */}
          <div className="mt-8 flex justify-center lg:justify-end relative lg:bottom-40">
            <Button text="Make An Appointment" icon={<ArrowRight className="w-5 h-5" />} />
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                viewport={{ once: true }}
              >
                <div className="group relative rounded-2xl overflow-hidden shadow-lg">
                  {/* Image */}
                  <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110 z-10">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                  </div>

                  {/* Content */}
                  <div className="relative p-6 min-h-[320px] flex flex-col z-50 justify-between">
                    {/* Icon */}
                    <div className="ml-4 w-14 h-16 relative bottom-6 z-10 rounded-br-[8px] rounded-bl-[8px] bg-white/10 flex items-center justify-center transition-colors group-hover:bg-blue-600">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/80 mb-4 ">
                      {service.description}
                    </p>

                    {/* Arrow Button */}
                    <div className="mt-auto sm:mt-0 flex sm:flex-row flex-col sm:items-center">
                      <button className="mt-4 sm:mt-0 w-full sm:w-10 h-10 sm:rounded-full rounded-lg bg-white/10 flex items-center justify-center transition-colors hover:bg-blue-600">
                        <ArrowRight className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <div className="h-full flex justify-center items-center text-white bg-[#003344] py-16 md:py-24 rounded-t-[50px] bottom-[118px] relative">
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 text-lg font-medium"
        >
          Find Out More About our Services  
          <Link href="/">
            <ArrowRight className="w-4 h-4 hover:bg-gray-600" />
          </Link>
        </motion.p>
      </div>
    </>
  )
}
