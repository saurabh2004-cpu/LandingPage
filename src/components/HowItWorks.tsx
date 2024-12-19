'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp, Users, GiftIcon as Massage, CupSoda } from 'lucide-react'

export const HowItWorks = () => {
    const [expandedCard, setExpandedCard] = useState<string>('appointment')

    // Services array
    const services = [
        {
            id: 'appointment',
            icon: <Users className="w-6 h-6" />,
            title: 'Book an Appointment',
            description: 'Some clinics provide an address or an online form for appointment requests. Send an email with your preferred times and details.',
        },
        {
            id: 'manual',
            icon: <Massage className="w-6 h-6" />,
            title: 'Manual Therapy Treat',
            description: 'Professional manual therapy services tailored to your specific needs and conditions.',
        },
        {
            id: 'chronic',
            icon: <Users className="w-6 h-6" />,
            title: 'Chronic Care',
            description: 'Specialized ongoing care for chronic conditions and long-term rehabilitation needs.',
        },
        {
            id: 'cupping',
            icon: <CupSoda className="w-6 h-6" />,
            title: 'Cupping Care',
            description: 'Traditional and modern cupping therapy techniques for pain relief and recovery.',
        },
    ]

    // Images array
    const images = [
        'https://aica.com/wp-content/uploads/2024/09/How-Physiotherapy-Can-Help-You-AICA-Orthopedics-scaled-1.jpg',
        'https://aica.com/wp-content/uploads/2024/09/How-Physiotherapy-Can-Help-You-AICA-Orthopedics-scaled-1.jpg',
        'https://aica.com/wp-content/uploads/2024/09/How-Physiotherapy-Can-Help-You-AICA-Orthopedics-scaled-1.jpg',
        'https://aica.com/wp-content/uploads/2024/09/How-Physiotherapy-Can-Help-You-AICA-Orthopedics-scaled-1.jpg',
    ]

    return (
        <div className="min-h-screen w-full flex flex-col lg:flex-row bg-white p-24 justify-center align-center rounded-t-[70px] relative top-[-63px]">
            {/* Left Section - Image Grid */}
            <div className="w-full lg:w-1/2 relative overflow-hidden">
                <div className="h-full w-full p-24 flex">
                    <div className="h-full w-full">
                        <div className="h-1/3 w-full">
                            <motion.img
                                src={images[0]}
                                alt="Treatment 1"
                                className="w-full h-full object-cover"
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 0.5 }} // Trigger when 50% in viewport
                                transition={{ duration: 0.8 }}
                            />
                        </div>

                        <div className="h-2/3 w-full">
                            <motion.img
                                src={images[1]}
                                alt="Treatment 2"
                                className="w-full h-full object-cover"
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.8 }}
                            />
                        </div>
                    </div>

                    <div className="h-full w-full">
                        <div className="h-4/6 w-full">
                            <motion.img
                                src={images[2]}
                                alt="Treatment 3"
                                className="w-full h-full object-cover"
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.8 }}
                            />
                        </div>

                        <div className="h-2/6 w-full">
                            <motion.img
                                src={images[3]}
                                alt="Treatment 4"
                                className="w-full h-full object-cover"
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.8 }}
                            />
                        </div>
                    </div>
                </div>

                {/* Overlay to create depth effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Right Section - Content */}
            <div className="w-full lg:w-[50%] mx-auto p-4 lg:p-8">
                {/* Subtitle */}
                <p className="text-blue-600 flex items-center gap-2 text-sm font-medium mb-2">
                    / How It Works
                </p>

                {/* Main Title */}
                <h1 className="text-3xl lg:text-5xl font-medium text-[#0B2C3D] leading-tight mb-8">
                    We Proudly Give Quality Treatment
                </h1>

                {/* Service Cards */}
                <div className="space-y-2">
                    {services.map((service) => (
                        <button
                            key={service.id}
                            onClick={() => setExpandedCard(expandedCard === service.id ? '' : service.id)}
                            className={`w-full text-left ${expandedCard === service.id
                                ? 'bg-[#0B2C3D] text-white'
                                : 'bg-gray-50 hover:bg-gray-100'
                                } rounded-lg transition-all duration-300`}
                        >
                            <div className="p-4 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div
                                        className={`${expandedCard === service.id
                                            ? 'bg-white/10 text-white'
                                            : 'bg-gray-200 text-gray-600'
                                            } p-2 rounded-full`}
                                    >
                                        {service.icon}
                                    </div>
                                    <span className="text-lg lg:text-xl">{service.title}</span>
                                </div>
                                {expandedCard === service.id ? (
                                    <ChevronUp className="w-5 h-5" />
                                ) : (
                                    <ChevronDown className="w-5 h-5" />
                                )}
                            </div>
                            {expandedCard === service.id && (
                                <div className="px-4 pb-4 text-sm lg:text-base rounded-lg">
                                    {service.description}
                                </div>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
