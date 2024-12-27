'use client'
import { HeroSection } from '@/components/HeroSection'
import React from 'react'
import { motion } from "framer-motion"
import { ClientTestimonials } from '@/components/clientTestimonials'
import { ArrowRight, Calendar } from 'lucide-react'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Button from '@/components/Button'

const BookApointment = () => {

    //process steps
    const steps = [
        {
            number: "01",
            title: "Select Services",
            description: "Services is the first step towards effective mental health support."
        },
        {
            number: "02",
            title: "Make Appointment",
            description: "Follow these easy steps to schedule your appointment at Physiocare."
        },
        {
            number: "03",
            title: "Completed Payment",
            description: "You will receive a payment confirmation of your appointment."
        },
        {
            number: "04",
            title: "Enjoy Your Therapy",
            description: "Your journey is an important step towards better health."
        }
    ]

    //form services
    const services = [
        "Physiotherapy",
        "Massage Therapy",
        "Sports Rehabilitation",
        "Manual Therapy",
        "Acupuncture"
    ]

    return (
        <>
            <HeroSection image='/images/servicesHeroImage.jpg' title='Book Appointment' />

            {/* appointment section */}
            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <div className="space-y-8">
                    <div className="space-y-2">
                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-sm text-muted-foreground"
                        >
                            / Appointment
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#003049]"
                        >
                            Make an appointment
                        </motion.h1>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="grid gap-6 md:grid-cols-2"
                    >
                        <div className="space-y-4">
                            <Input
                                type="text"
                                placeholder="Enter Your Name"
                                className="w-full bg-[#e5eaec] border-0 h-12 rounded-xl"
                            />
                            <Input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full bg-[#e5eaec] border-0 h-12 rounded-xl"
                            />
                        </div>

                        <div className="space-y-4 ">
                            <Input
                                type="email"
                                placeholder="Enter Your Email"
                                className="w-full bg-[#e5eaec] border-0 h-12 rounded-xl"
                            />
                            <Select>
                                <SelectTrigger className="w-full bg-[#e5eaec] border-0 h-12 rounded-xl">
                                    <SelectValue placeholder="Select Service" />
                                </SelectTrigger>
                                <SelectContent className='bg-[#e5eaec] rounded-xl'>
                                    {services.map((service) => (
                                        <SelectItem key={service} value={service.toLowerCase()}>
                                            {service}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-4">
                            <div className="relative">
                                <Input
                                    type="date"
                                    placeholder="mm/dd/yyyy"
                                    className="w-full bg-[#e5eaec] border-0 h-12 rounded-xl"
                                />
                                <Calendar className="absolute right-3 top-3 h-6 w-6 text-gray-400" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <Input
                                type="time"
                                placeholder="--:-- --"
                                className="w-full bg-[#e5eaec] border-0 h-12 rounded-xl"
                            />
                        </div>

                        <div className="md:col-span-2 flex justify-center">
                            <Button text="Book Appointment" icon={<ArrowRight />} />
                                
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* clients testimonials */}
            <ClientTestimonials />

            {/* process section */}
            <section className="bg-[#e5eaec] py-20 px-4 overflow-hidden rounded-t-[50px] relative ">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16 space-y-4">
                        <motion.p
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-gray-600"
                        >
                            / Process
                        </motion.p>

                        <motion.h2
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                                delay: 0.2,
                                type: "spring",
                                stiffness: 100,
                            }}
                            className="text-4xl md:text-5xl font-serif text-[#003153]"
                        >
                            Easy Steps To Get Our Services
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="max-w-2xl mx-auto text-gray-600"
                        >
                            We strive to make accessing our services as straightforward and convenient as possible.
                            Here&apos;s a simple guide to help you get started with our expert care.
                        </motion.p>
                    </div>

                    <div className="relative">
                        {/* Straight dotted line */}
                        <div className="absolute top-1/2 left-0 w-full -translate-y-1/2">
                            <svg className="w-full" height="2" viewBox="0 0 1200 2" fill="none">
                                <line
                                    x1="0"
                                    y1="1"
                                    x2="1200"
                                    y2="1"
                                    stroke="#003153"
                                    strokeDasharray="4 4"
                                    strokeWidth="1"
                                    strokeOpacity="0.3"
                                />
                            </svg>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.6 + index * 0.1,
                                    }}
                                    className="text-center relative"
                                >
                                    <div className="mb-6">
                                        <span className="text-6xl font-bold text-gray-100">
                                            {step.number}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-medium text-[#003153] mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">{step.description}</p>
                                    {/* Dot connector */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <div className="w-3 h-3 rounded-full bg-[#003153] border-4 border-white" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/*  */}
        </>
    )
}

export default BookApointment
