'use client'
import {   ChevronDown, ChevronRight, Clock,  PhoneIcon,  } from 'lucide-react'
import React, {  useRef } from 'react'
import { motion, } from 'framer-motion';
import { HeroSection } from '@/components/HeroSection';


const ServiceDetails = () => {

    const sectionRef = useRef(null)
    // const imagesRef = useRef(null)

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             setIsSticky(!entry.isIntersecting)
    //         },
    //         { threshold: 0.5 }
    //     )

    //     if (imagesRef.current) {
    //         observer.observe(imagesRef.current)
    //     }

    //     return () => observer.disconnect()
    // }, [])

    const services = [
        "Manual Therapy",
        "Chronic Pain",
        "Joint Therapy",
        "Sports Therapy",
        "Geriatric Therapy"
    ]

    const hours = [
        { day: "Mon - Sat", time: "8:00 AM - 9:00 PM" },
        { day: "Sun", time: "10:00 AM - 4:00 PM" },
        { day: "Friday", status: "Closed" },
        { day: "Emergency", status: "24 Hours" }
    ]

    const features = [
        "Customized Treatment Plans",
        "Evidence-Based Exercise",
        "Advanced Pain Management",
        "Patient Education And Assessment",
        "Ongoing Rehabilitation",
        "Sports Performance Strategies",
        "Nerve Release Techniques",
        "Improved Mobility"
    ]

    const questions = [
        "How can physiotherapy help with recovery after a sports injury or surgery?",
        "What types of exercises do physiotherapists recommend for improving pain?",
        "How often should I see a physiotherapist for effective treatment and progress?",
        "What role does manual therapy play in the overall physiotherapy treatment plan?",
        "Can physiotherapy aid in improving balance and preventing falls in older adults?"
    ]

    return (
        <>
            {/* //hero section */}
            <HeroSection image={'/images/2.jpg'} title='Service Details' />

            {/*  */}
            <section
                ref={sectionRef}
                className="w-full min-h-screen bg-[#ffffff] px-4 lg:p-24 rounded-[50px] relative top-[-50px]"
            >
                <div className="container mx-auto grid lg:grid-cols-[350px,1fr] gap-8 py-16">
                    {/* Left Sidebar */}
                    <div className="space-y-8 lg:sticky lg:top-8 h-max">
                        {/* Services List */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            className="bg-[#e5eaec] rounded-xl p-6 shadow-sm"
                        >
                            <h3 className="text-lg font-medium mb-4">All Services</h3>
                            <ul className="space-y-2">
                                {services.map((service, index) => (
                                    <motion.li
                                        key={service}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center justify-between p-3 rounded-xl hover:bg-[#003153] bg-white hover:text-white transition-colors cursor-pointer group"
                                    >
                                        {service}
                                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Opening Hours */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                            className="bg-[#e5eaec] rounded-xl p-6 shadow-sm"
                        >
                            <h3 className="text-lg font-medium mb-4">Opening Hours</h3>
                            <ul className="space-y-2">
                                {hours.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center justify-between p-3 rounded-xl hover:bg-[#003153] bg-white hover:text-white transition-colors cursor-pointer group"
                                    >
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-gray-400 group-hover:text-white" />
                                            <span>{item.day}</span>
                                        </div>
                                        <span>{item.time || item.status}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Contact Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
                            className="bg-[#003153] text-white rounded-xl p-6 shadow-sm h-1/6 relative overflow-hidden"
                            style={{
                                backgroundImage: 'url("/images/20.jpg")',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="relative z-10">
                                <div className="flex flex-col items-center text-center">
                                    <div className="bg-white p-3 rounded-full mb-4">
                                        <PhoneIcon className="w-8 h-8 text-[#003153]" />
                                    </div>
                                    <h3 className="text-lg font-medium mb-2">Need Help? Call Here</h3>
                                    <span className="text-xl font-semibold">+1 (123) 698-5245</span>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-[#003153]/50 to-[#003153]/80" />
                        </motion.div>
                    </div>

                    {/* Right Content */}
                    <div className="space-y-12">
                        {/* Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="w-full rounded-xl overflow-hidden group"
                        >
                            <img
                                src="/images/1.jpg"
                                alt="Physiotherapy Hero"
                                className="w-full h-[400px] object-cover rounded-xl transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(0,49,83,0.2)]"
                            />
                        </motion.div>



                        {/* Manual Therapy Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <h1 className="text-4xl font-serif text-[#003153]">Manual Therapy</h1>
                            <p className="text-gray-600">
                                Manual Therapy is a specialized treatment used by physiotherapists to treat muscle stiffness and joint pain.
                                Through hands-on techniques, we help improve flexibility, reduce pain, and enhance overall function.
                            </p>
                        </motion.div>

                        {/* Individualized Approach */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl font-serif text-[#003153]">Individualized Approach</h2>
                            <p className="text-gray-600">
                                We provide personalized treatment solutions creating a clear and interactive road to meet required
                                outcomes. Our evidence-based approach ensures that every session has a beneficial impact on your recovery.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4 py-8">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={feature}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-2 text-gray-700"
                                    >
                                        <div className="w-2 h-2 bg-[#003153] rounded-full" />
                                        {feature}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        {/* Additional Images Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                                className="w-full rounded-xl overflow-hidden"
                            >
                                <img
                                    src="/images/2.jpg"
                                    alt="Physiotherapy Session"
                                    className="w-full h-[300px] object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                                className="w-full rounded-xl overflow-hidden"
                            >
                                <img
                                    src="/images/3.jpg"
                                    alt="Physiotherapy Equipment"
                                    className="w-full h-[300px] object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                                />
                            </motion.div>
                        </div>

                        {/* FAQ Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl font-serif text-[#003153]">Free ask question?</h2>
                            <div className="space-y-4">
                                {questions.map((question, index) => (
                                    <motion.details
                                        key={question}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group bg-[#e5eaec] rounded-xl shadow-sm"
                                    >
                                        <summary className="flex justify-between items-center p-4 cursor-pointer hover:bg-[#023047] hover:text-white rounded-xl">
                                            <span className="font-medium">{question}</span>
                                            <ChevronDown className="w-5 h-5 transform transition-transform group-open:rotate-180" />
                                        </summary>
                                        <div className="p-4 text-gray-600">
                                            Answer to the question goes here. This is a placeholder text that would be replaced with the actual detailed answer.
                                        </div>
                                    </motion.details>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default ServiceDetails
