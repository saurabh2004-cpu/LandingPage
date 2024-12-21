'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export const QualityTreatment = () => {
    return (
        <div className="w-full flex flex-wrap bg-white">
            {/* Left Section */}
            <div className="w-full lg:w-1/2 p-6 sm:p-12 lg:p-24 bg-[#e5eaec] flex items-center relative rounded-tl-[50px]">
                <div className="w-full max-w-2xl mb-16">
                    {/* Subtitle */}
                    <motion.p
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-blue-600 mb-6 flex items-center gap-2 text-sm font-medium"
                    >
                        <span className="text-lg">/</span> Quality Treatment
                    </motion.p>

                    {/* Main Text */}
                    <motion.h1
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-medium text-[#0B2C3D] leading-[1.2] mb-8 break-words"
                    >
                        We Proudly Give <br /> Quality Treatment
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-gray-600 mb-10 text-base sm:text-lg"
                    >
                        We understand that injuries and acute pain can happen unexpectedly. Our emergency physiotherapy services are designed to provide prompt and effective care to help you manage.
                    </motion.p>

                    {/* Bullet Points */}
                    <motion.ul
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-4 mb-10"
                    >
                        {[
                            'We Understand That Injuries',
                            'Can Happen Unexpectedly, Our Emergency',
                            'We Understand That Injuries',
                        ].map((item, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <span className="text-blue-600">
                                    <Check className="w-5 h-5" />
                                </span>
                                <span className="text-[#0B2C3D] text-base sm:text-lg">{item}</span>
                            </li>
                        ))}
                    </motion.ul>

                    {/* Button */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <button className="bg-[#0B2C3D] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-blue-900 transition-all flex items-center gap-2 text-base sm:text-lg font-medium">
                            Make An Appointment
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-1/2 relative overflow-hidden lg:flex hidden justify-center items-center min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] rounded-tr-[50px]">
                <div className="bg-[#e5eaec] w-1/4 h-[99.7%] z-50 rounded-br-[68px] relative top-[-61px] left-[77px] ml-[-78px]"></div>
                <motion.img
                    src="/images/11.jpg"
                    alt="Physiotherapy"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                />
            </div>

        </div>
    )
}
