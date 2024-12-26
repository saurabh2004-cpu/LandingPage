'use client'
import Button from '@/components/Button'
import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion';
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import { HeroSection } from '@/components/HeroSection'
import { MapPin, ArrowRight, ChevronDown } from 'lucide-react'

const page = () => {

    //map 
    const [location, setLocation] = useState({ lat: 40.7128, lng: -74.006 }) // Default: New York City

    const MapEventsHandler = () => {
        useMapEvents({
            click(e: any) {
                setLocation({ lat: e.latlng.lat, lng: e.latlng.lng })
            }
        })
        return null
    }

    //contact us
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })


    const questions = [
        {
            question: "How do I start the landscaping process?",
            answer: "Costs depend on the scope of the project. After our consultation, we provide a detailed estimate tailored to your budget and needs."
        },
        {
            question: "Can you work with my existing garden features?",
            answer: "Yes, we can incorporate and enhance your existing garden features into the new design. We'll assess your current layout and discuss possibilities during the consultation."
        },
        {
            question: "How much does garden landscaping cost?",
            answer: "Costs vary depending on the size of your garden and the scope of work. We provide detailed quotes after an initial consultation."
        },
        {
            question: "How do I start the landscaping process?",
            answer: "Schedule a consultation through our website or phone. We'll discuss your vision, assess your space, and develop a customized plan."
        },
        {
            question: "Can you work with my existing garden features?",
            answer: "We specialize in working with existing features and enhancing them to create your dream garden."
        }
    ]

    return (
        <>
            {/* //hero section */}
            <HeroSection image={'/images/12.jpg'} title='Contact Us' />

            {/*form section */}
            <section className="w-full py-16 px-6 lg:py-24 lg:px-24 rounded-t-[50px] relative bg-white top-[-50px]">
                <div className="container mx-auto grid lg:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-gray-600 mb-2"
                            >
                                / Contact Us
                            </motion.p>
                            <motion.h1
                                initial={{ x: 100, opacity: 0 }} // Start off-screen to the right
                                whileInView={{ x: 0, opacity: 1 }} // Slide into position with fade
                                viewport={{ once: true }} // Trigger animation only once when in view
                                transition={{ duration: 1, ease: 'easeOut' }}
                                className="text-4xl lg:text-5xl font-serif text-[#003153]"
                            >
                                Get In Touch
                            </motion.h1>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                            className="space-y-6"
                        >
                            <p className="text-gray-600">
                                For inquiries, appointments, or more information about our physiotherapy
                                services, feel free to contact us.
                            </p>

                            <div className="space-y-2">
                                <p className="text-gray-800">info@domainname.com</p>
                                <p className="text-gray-800">(+0) 123-456-789</p>
                                <a
                                    href="#"
                                    className="inline-flex items-center text-[#003153] hover:underline"
                                >
                                    Contact Support →
                                </a>
                            </div>

                            <div className="grid grid-cols-2 gap-8 pt-8">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-[#003153]">
                                        <MapPin className="w-5 h-5" />
                                        <h3 className="font-medium">Hackney London</h3>
                                    </div>
                                    <p className="text-gray-600">
                                        Apt. 654 70246 Maryln Ramp,<br />
                                        North Johnville, TX 72520-21
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-[#003153]">
                                        <MapPin className="w-5 h-5" />
                                        <h3 className="font-medium">California Usa</h3>
                                    </div>
                                    <p className="text-gray-600">
                                        Suite 790 Burton Port, West<br />
                                        Myleschester, MD 94511-4421
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Form */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        className="bg-[#e5eaec] p-8 lg:p-12 rounded-3xl"
                    >
                        <div className="max-w-md mx-auto space-y-8">
                            <div>
                                <h2 className="text-3xl font-serif text-[#003153] mb-4">
                                    Contact Us Anytime
                                </h2>
                                <p className="text-gray-600">
                                    For inquiries, appointments, or more information about our physiotherapy
                                    services, feel free to contact us.
                                </p>
                            </div>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#003153]"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#003153]"
                                    />
                                </div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#003153]"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone No"
                                    className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#003153]"
                                />
                                <textarea
                                    placeholder="Message"
                                    rows={4}
                                    className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#003153]"
                                />
                                <button
                                    type="submit"
                                    className="bg-[#003153] text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-[#004170] transition-colors"
                                >
                                    Submit Now →
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* map section  */}
            <section className="relative bg-gray-200 rounded-t-[50px] z-2">
                {/* Selected Location Display */}
                <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg px-4 py-2 z-10 rounded-[50px]">
                    <p className="text-sm font-medium text-gray-700">Current Location:</p>
                    <p className="text-base font-semibold text-blue-600">
                        {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                    </p>
                </div>

                {/* Map Container */}
                <div
                    className="w-full h-screen rounded-t-[50px] overflow-hidden transition-all duration-300"

                >
                    <MapContainer
                        center={[40.7128, -74.006]} // Coordinates for New York City
                        zoom={13}
                        scrollWheelZoom={true}
                        className="w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                    >
                        {/* Map Tiles */}
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {/* Handle User Interactions */}
                        <MapEventsHandler />
                    </MapContainer>
                </div>
            </section>

            {/* faqs section  */}
            <section className="w-full py-16 px-6 lg:p-24  rounded-t-[50px] relative top-[-50px] bg-white z-[2222]" ref={ref}>
                <div className="container mx-auto grid lg:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                className="text-gray-500 text-sm uppercase mb-2"
                            >
                                / Contact Us
                            </motion.p>
                            <motion.h1
                                initial={{ opacity: 0, x: 100 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.8, type: "spring" }}
                                className="text-4xl lg:text-5xl font-serif text-[#003153]"
                            >
                                Do You Have Any
                                <br />
                                Questions For Us?
                            </motion.h1>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <p className="text-gray-600">
                                We're here to help! If you have any questions about our physiotherapy
                                services, treatments, appointment scheduling, or anything else, don't
                                hesitate to reach out. This open-ended invitation makes it easier for
                                potential clients to get the answers they need.
                            </p>

                            <div className="relative inline-block">
                                <Button text="Make An Appointment" icon={<ArrowRight className="w-5 h-5" />} />
                                <div className="absolute inset-0 bg-[#e5eaec] rounded-full transform translate-x-2 translate-y-2 -z-10" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Questions */}
                    <div className="space-y-4">
                        {questions.map((item, index) => (
                            <motion.details
                                key={index}
                                initial={{ opacity: 0, x: 100 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                className="group bg-[#e5eaec] rounded-2xl shadow-sm overflow-hidden"
                            >
                                <summary className="flex  justify-between items-center p-6 cursor-pointer text-[#003153] text-lg font-medium hover:bg-opacity-90 transition-colors">
                                    {item.question}
                                    <ChevronDown className="w-5 h-5 transform transition-transform duration-300 group-open:rotate-180" />
                                </summary>
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="px-6 p-6 text-white bg-[#023047]"
                                >
                                    {item.answer}
                                </motion.div>
                            </motion.details>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}

export default page
