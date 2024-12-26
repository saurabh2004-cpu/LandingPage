'use client'

import { motion } from "framer-motion"
import { Users, MonitorSmartphone, Footprints, Target, Award, Users2, ArrowRight } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { QualityTreatment } from "./QualityTreatement"
import Button from "./Button"

const features = [
  {
    icon: Users,
    title: "Experienced Team",
  },
  {
    icon: MonitorSmartphone,
    title: "Advanced Technology",
  },
  {
    icon: Footprints,
    title: "Personalized Treatment",
  },
  {
    icon: Target,
    title: "Convenient And Accessible",
  },
  {
    icon: Award,
    title: "Expertise And Experience",
  },
  {
    icon: Users2,
    title: "Community Involvement",
  },
]

export default function Rehabilitation({className}: {className?:string}) {
  return (
    <>
      <div className="container mx-auto px-6 md:px-12 lg:px-40 py-12 md:py-24 bg-white rounded-tr-[68px] rounded-tl-[68px]">
        <div className="relative mb-16">
          {/* Heading Section */}
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-500 mb-4"
          >
            / Rehabilitation
          </motion.p>
          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#003049] max-w-3xl leading-tight"
          >
            Excellence In Care And Rehabilitation
          </motion.h1>

          {/* Button Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 flex relative md:justify-center lg:justify-end lg:bottom-40"
          >
            <Button text="Make An Appointment" icon={<ArrowRight />} />
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 ">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.1 * index,
              }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#023047] text-white h-full ">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <feature.icon className="h-8 w-8 mb-4" strokeWidth={1} />
                  <h3 className="font-medium leading-tight text-sm">
                    {feature.title}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quality Treatment Section */}
      <section className={`${className}`}>
      <QualityTreatment />
      </section>
    </>
  )
}
