'use client'

import { ArrowRight, Activity, HandMetal, Brain, Users, Workflow, Timer, } from 'lucide-react'
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
    description: "specialized form of physical therapy delivered through hands-on techniques.",
    image: "https://tse2.mm.bing.net/th?id=OIP.JZ5pkH8RKD78s8vqXrd3dwHaEq&pid=Api&P=0&h=220",
  },
  {
    icon: Brain,
    title: "Chronic Pain",
    description: "refers to persistent pain even after the underlying injury or illness has healed.",
    image: "https://tse2.mm.bing.net/th?id=OIP.JZ5pkH8RKD78s8vqXrd3dwHaEq&pid=Api&P=0&h=220",
  },
  {
    icon: HandMetal,
    title: "Hand Therapy",
    description: "specialized area of physiotherapy that focuses on hand, wrist, and forearm.",
    image: "https://tse2.mm.bing.net/th?id=OIP.JZ5pkH8RKD78s8vqXrd3dwHaEq&pid=Api&P=0&h=220",
  },
  {
    icon: Users,
    title: "Group Therapy",
    description: "therapeutic sessions conducted in small groups for shared recovery goals.",
    image: "https://tse2.mm.bing.net/th?id=OIP.JZ5pkH8RKD78s8vqXrd3dwHaEq&pid=Api&P=0&h=220",
  },
  {
    icon: Workflow,
    title: "Exercise Programs",
    description: "customized exercise routines designed for your specific condition.",
    image: "https://tse2.mm.bing.net/th?id=OIP.JZ5pkH8RKD78s8vqXrd3dwHaEq&pid=Api&P=0&h=220",
  },
  {
    icon: Timer,
    title: "Recovery Planning",
    description: "structured approach to help you achieve optimal recovery outcomes.",
    image: "https://tse2.mm.bing.net/th?id=OIP.JZ5pkH8RKD78s8vqXrd3dwHaEq&pid=Api&P=0&h=220",
  },
]

export const Services = () => {
  return (
    <div>
      <section className="relative overflow-hidden px-36">
        <div className="container mx-auto px-4">
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
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-w-2xl"
          >
            We Provide The Best Services
          </motion.h2>

          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-600 mb-12 max-w-2xl"
          >
            We offer top-quality physiotherapy services tailored to your needs. Our expert therapists use advanced techniques to treat pain, improve mobility.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                viewport={{ once: true }}
              >
                {/* Card Container with Border Radius */}
                <div className="group relative rounded-2xl overflow-hidden z-10 shadow-lg">
                  {/* Background Image with Zoom Effect */}
                  <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110 rounded-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/50 rounded-2xl" />
                  </div>

                  {/* Content */}
                  <div className="relative p-6 min-h-[320px] flex flex-col rounded-2xl">
                    {/* Icon Section */}
                    <div className="ml-4 w-14 h-16 relative bottom-6 z-10 rounded-br-[8px] rounded-bl-[8px] bg-white/10 flex items-center justify-center transition-colors group-hover:bg-blue-600">
                      <service.icon className="w-6 h-6 text-white transition-colors" />
                    </div>

                    {/* Text Content */}
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/80 mb-8">
                      {service.description}
                    </p>

                    {/* Arrow Button */}
                    <div className="mt-auto">
                      <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-colors ">
                        <ArrowRight className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>


          <section className="absolute top-8 right-8 p-24">
            <Button text="Make An Appointment" icon={<ArrowRight className="w-5 h-5" />} />
          </section>
        </div>
      </section>

      <div className="h-full justify-center align-middle flex text-white bg-[#003344] py-24 rounded-tr-[68px] rounded-tl-[68px] relative mb-[-60px] mt-[-75px] z-[-1] px-5">
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 text-lg font-medium"
        >Find Out More About our Services  <Link href="/" ><ArrowRight className="w-4 h-4 hover:bg-gray-600" /></Link>

        </motion.p>
      </div>
    </div>
  )
}
