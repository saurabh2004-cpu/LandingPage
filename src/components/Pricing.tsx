'use client'

import { motion, useInView } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { useRef } from 'react'

export const Pricing = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <div
            ref={ref}
            className="h-full w-full relative p-8 pt-24 lg:p-16 overflow-hidden bg-cover bg-center bg-no-repeat rounded-t-[50px]"
            style={{
                backgroundImage: 'url("https://aica.com/wp-content/uploads/2024/09/How-Physiotherapy-Can-Help-You-AICA-Orthopedics-scaled-1.jpg")'
            }}
        >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Main Content */}
            <motion.div
                className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row mb-16"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {/* Header Section */}
                <motion.div className="mb-16 text-center lg:text-left lg:w-1/2" animate={isInView ? "visible" : "hidden"}>
                    <motion.p
                        initial={{ x: 100, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-blue-400 mb-2"
                    >
                        Pricing
                    </motion.p>
                    <motion.h2
                        initial={{ y: 50, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl lg:text-5xl text-white font-medium mb-6"
                    >
                        Our Pricing
                    </motion.h2>
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-gray-300 max-w-2xl mx-auto lg:mx-0"
                    >
                        We offer a range of flexible pricing options tailored to meet your physiotherapy needs. Whether you're starting with an initial assessment or seeking long-term care, our plans provide excellent value with expert care.
                    </motion.p>
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mt-8"
                    >
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-transparent hover:bg-white/10 text-white px-8 py-3 rounded-full border border-white/20 transition-colors flex items-center gap-2 mx-auto lg:mx-0"
                        >
                            Make An Appointment
                            <ArrowRight className="w-4 h-4" />
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Pricing Cards */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8"
                >
                    {/* Starter Plan */}
                    <motion.div
                        animate={isInView ? "visible" : "hidden"}
                        variants={itemVariants}
                        className="relative rounded-3xl overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-lg p-8" />

                        <div className="relative p-8">
                            <div className="absolute top-0 left-6 bg-white/20 px-4 py-1 rounded-b-lg backdrop-blur-sm">
                                <span className="text-white text-sm">Recommended</span>
                            </div>

                            <motion.h3
                                initial={{ y: 20, opacity: 0 }}
                                animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-white text-2xl font-medium mt-6 mb-4"
                            >
                                Starter Plan
                            </motion.h3>

                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-white text-3xl font-bold">$20</span>
                                <span className="text-white/80 text-sm">/month</span>
                                <span className="text-white/60 text-sm ml-1">(Save $10 per user)</span>
                            </div>

                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-white/80 text-sm mb-8"
                            >
                                This plan is perfect for individuals seeking treatment for pain and injuries.
                            </motion.p>

                            <motion.ul
                                initial={{ y: 20, opacity: 0 }}
                                animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                                transition={{ duration: 0.6 }}
                                className="space-y-4 mb-8"
                            >
                                {[
                                    'Trigger Point Therapy',
                                    'Neck Pain Treatment',
                                    'Sports Injury Rehabilitation',
                                    'Post-Natal Physiotherapy',
                                    'Knee Pain Treatment',
                                    'Geriatric Physiotherapy'
                                ].map((feature) => (
                                    <motion.li
                                        key={feature}
                                        animate={isInView ? "visible" : "hidden"}
                                        variants={itemVariants}
                                        className="flex items-center gap-3"
                                    >
                                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-white" />
                                        </span>
                                        <span className="text-white text-sm">{feature}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-white/10 hover:bg-white/20 text-white py-3 px-6 rounded-full backdrop-blur-sm flex items-center justify-between transition-colors"
                            >
                                <span className="font-medium">Choose Plan</span>
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Basic Plan */}
                    <motion.div
                        animate={isInView ? "visible" : "hidden"}
                        variants={itemVariants}
                        className="relative rounded-3xl overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-lg" />

                        <div className="relative p-8">
                            <motion.h3
                                initial={{ y: 20, opacity: 0 }}
                                animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-white text-2xl font-medium mt-6 mb-4"
                            >
                                Basic Plan
                            </motion.h3>

                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-white text-3xl font-bold">$10</span>
                                <span className="text-white/80 text-sm">/month</span>
                                <span className="text-white/60 text-sm ml-1">(Save $10 per user)</span>
                            </div>

                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-white/80 text-sm mb-8"
                            >
                                Our Basic Physiotherapy Plan for clients seeking treatment.
                            </motion.p>

                            <motion.ul
                                initial={{ y: 20, opacity: 0 }}
                                animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                                transition={{ duration: 0.6 }}
                                className="space-y-4 mb-8"
                            >
                                {[
                                    'Custom Exercise Programs',
                                    'Muscle Strain Treatment',
                                    'Tendonitis Treatment',
                                    'Fracture Rehabilitation',
                                    'Pelvic Floor Physiotherapy',
                                    'Neck Pain Treatment'
                                ].map((feature) => (
                                    <motion.li
                                        key={feature}
                                        animate={isInView ? "visible" : "hidden"}
                                        variants={itemVariants}
                                        className="flex items-center gap-3"
                                    >
                                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-white" />
                                        </span>
                                        <span className="text-white text-sm">{feature}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-white/10 hover:bg-white/20 text-white py-3 px-6 rounded-full backdrop-blur-sm flex items-center justify-between transition-colors"
                            >
                                <span className="font-medium">Choose Plan</span>
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}
