'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Facebook, Youtube, Instagram, Twitter, Mail, Phone, Award, UserRound } from 'lucide-react'
import { HeroSection } from '@/components/HeroSection'

const page = () => {
    return (
        <>
            <HeroSection image='/images/1.jpg' title='Team Details' />

            {/* details  */}
            <section className=' bg-white relative rounded-[50px] top-[-50px]'>
                <div className="container mx-auto px-4 py-12 max-w-7xl bg-white ">
                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                        {/* Image Section with reveal animation */}
                        <div className="relative rounded-3xl overflow-hidden bg-slate-100 aspect-[3/4] lg:aspect-auto lg:h-[600px]">
                            <motion.div
                                initial={{ width: "100%" }}
                                whileInView={{ width: "0%" }}
                                transition={{
                                    duration: 1,
                                    ease: "easeInOut",
                                }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="absolute inset-0 z-10 bg-white"
                                style={{ originX: 0 }}
                            />
                            <Image
                                src="/images/15.jpg"
                                alt="Dr. Emily Brown"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Content Section */}
                        <div className="space-y-8">
                            {/* Social Icons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="flex sm:justify-end justify-center gap-4"
                            >
                                {[Facebook, Youtube, Instagram, Twitter].map((Icon, index) => (
                                    <button
                                        key={index}
                                        className="p-2 text-[#003049] hover:text-[#003049]/70 transition-colors"
                                    >
                                        <Icon className="w-6 h-6" />
                                    </button>
                                ))}
                            </motion.div>

                            {/* Name and Title */}
                            <div>
                                <motion.h1
                                    initial={{ opacity: 0, x: 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="sm:text-5xl text-3xl font-serif text-[#003049]"
                                >
                                    Dr. Emily Brown
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-xl text-slate-600 mt-2"
                                >
                                    Therapists
                                </motion.p>
                            </div>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="text-slate-600 leading-relaxed"
                            >
                                The physiotherapist will begin by asking detailed questions about your current level of activity and any specific issues you're experiencing. They will want to understand your daily routine, exercise habits, and any limitations you might be facing. This helps them get a comprehensive picture of your physical condition and the factors contributing to your symptoms.
                            </motion.p>

                            {/* Info Grid */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="grid sm:grid-cols-2 gap-6"
                            >
                                {/* Position */}
                                <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl">
                                    <div className="p-3 bg-white rounded-lg">
                                        <UserRound className="w-6 h-6 text-[#003049]" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-[#003049]">Position</h3>
                                        <p className="text-slate-600">Physiotherapist</p>
                                    </div>
                                </div>

                                {/* Experience */}
                                <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl">
                                    <div className="p-3 bg-white rounded-lg">
                                        <Award className="w-6 h-6 text-[#003049]" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-[#003049]">Experience</h3>
                                        <p className="text-slate-600">06 years</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl">
                                    <div className="p-3 bg-white rounded-lg">
                                        <Mail className="w-6 h-6 text-[#003049]" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-[#003049]">Email</h3>
                                        <p className="text-slate-600">domain@gmail.com</p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl">
                                    <div className="p-3 bg-white rounded-lg">
                                        <Phone className="w-6 h-6 text-[#003049]" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-[#003049]">Phone</h3>
                                        <p className="text-slate-600">(+0) 123 456 789</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
