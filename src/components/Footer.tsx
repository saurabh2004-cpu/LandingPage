"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail } from 'lucide-react'
import { useInView } from "framer-motion"
import { useRef } from "react"

export const Footer = () => {
    const footerRef = useRef(null)
    const isInView = useInView(footerRef, { once: true })

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    const linkHoverVariants = {
        initial: { opacity: 1 },
        hover: { opacity: 0.7 }
    }

    return (
        <footer
            ref={footerRef}
            className="bg-[#003144] text-white py-16 rounded-t-[68px]"
        >
            <motion.div
                className="container mx-auto px-4 lg:px-8"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.1
                        }
                    }
                }}
            >
                {/* Logo and Heading Section */}
                <motion.div
                    variants={fadeUpVariants}
                    className="mb-16 grid lg:grid-cols-2 gap-8"
                >
                    <div className="flex items-center gap-4">
                        <img src="/placeholder.svg?height=50&width=50" alt="Carefirst Logo" className="h-12" />
                        <h2 className="text-3xl font-semibold">Carefirst</h2>
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold mb-4">#1 Physiotherapy centre in the town</h1>
                        <p className="text-gray-300">
                            We understand that injuries and acute pain can happen unexpectedly. Our emergency
                            physiotherapy We understand that injuries and acute pain can happen.
                        </p>
                    </div>
                </motion.div>

                <div className="h-px w-full bg-white/10 mb-16" />

                {/* Links Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Quick Links */}
                    <motion.div variants={fadeUpVariants}>
                        <h3 className="text-lg font-semibold mb-6 bg-white/10 inline-block px-6 py-2 rounded-full">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {["About Us", "Services", "Contact Us"].map((link) => (
                                <motion.li key={link} className="flex items-center">
                                    <span className="mr-2">•</span>
                                    <motion.a
                                        href="#"
                                        initial="initial"
                                        whileHover="hover"
                                        variants={linkHoverVariants}
                                        className="hover:underline"
                                    >
                                        {link}
                                    </motion.a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* More Services */}
                    <motion.div variants={fadeUpVariants}>
                        <h3 className="text-lg font-semibold mb-6 bg-white/10 inline-block px-6 py-2 rounded-full">
                            More Services
                        </h3>
                        <ul className="space-y-3">
                            {["Manual Therapy", "Chronic Pain", "Hand Therapy"].map((service) => (
                                <motion.li key={service} className="flex items-center">
                                    <span className="mr-2">•</span>
                                    <motion.a
                                        href="#"
                                        initial="initial"
                                        whileHover="hover"
                                        variants={linkHoverVariants}
                                        className="hover:underline"
                                    >
                                        {service}
                                    </motion.a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Working Hours */}
                    <motion.div variants={fadeUpVariants}>
                        <h3 className="text-lg font-semibold mb-6 bg-white/10 inline-block px-6 py-2 rounded-full">
                            Working Hours
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center">
                                <span className="mr-2">•</span>
                                Mon To Fri : 10:00 To 6:00
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">•</span>
                                Sat : 10:00AM To 3:00PM
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">•</span>
                                Sun : Closed
                            </li>
                        </ul>
                    </motion.div>

                    {/* Social Media */}
                    <motion.div variants={fadeUpVariants}>
                        <h3 className="text-lg font-semibold mb-6 bg-white/10 inline-block px-6 py-2 rounded-full">
                            Social Media
                        </h3>
                        <div className="flex gap-6">
                            {[
                                { Icon: Facebook, href: "#" },
                                { Icon: Twitter, href: "#" },
                                { Icon: Linkedin, href: "#" },
                                { Icon: Instagram, href: "#" },
                            ].map(({ Icon, href }, index) => (
                                <motion.a
                                    key={index}
                                    href={href}
                                    initial="initial"
                                    whileHover="hover"
                                    variants={linkHoverVariants}
                                    className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                                >
                                    <Icon className="h-5 w-5" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Help and Support */}
                <motion.div variants={fadeUpVariants} className="mb-16">
                    <h3 className="text-lg font-semibold mb-6 bg-white/10 inline-block px-6 py-2 rounded-full">
                        Help And Support
                    </h3>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <div className="flex items-center gap-3">
                            <Phone className="h-5 w-5" />
                            <span>(+0) 789 3456 012</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="h-5 w-5" />
                            <span>domain@gmail.com</span>
                        </div>
                    </div>
                </motion.div>

                {/* Copyright */}
                <motion.div
                    variants={fadeUpVariants}
                    className="text-center pt-8 border-t border-white/10"
                >
                    <p className="mb-4">Copyright 2024 Physiotherapy. All Rights Reserved.</p>
                    <div className="flex justify-center gap-4">
                        <a href="#" className="text-white hover:text-white/80 transition-colors">Privacy Policy</a>
                        <span>•</span>
                        <a href="#" className="text-white hover:text-white/80 transition-colors">Terms And Conditions</a>
                    </div>
                </motion.div>
            </motion.div>
        </footer>
    )
}

