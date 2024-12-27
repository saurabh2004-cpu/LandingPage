'use client'
import Button from '@/components/Button'
import {  Activity, ArrowRight,   Brain,  HandMetal,  Timer, Users, Workflow } from 'lucide-react'
import { motion } from 'framer-motion';
import Rehabilitation from '@/components/Rehalibitation'
import { HeroSection } from '@/components/HeroSection'
import { ClientTestimonials } from '@/components/clientTestimonials';

const Services = () => {

    interface Service {
        icon: React.ElementType
        title: string
        description: string
        image: string
    }
    // Services
    const services: Service[] = [
        {
            icon: Activity,
            title: "Manual Therapy",
            description: "Specialized form of physical therapy delivered through hands-on techniques.",
            image: "/images/5.jpg",
        },
        {
            icon: Brain,
            title: "Chronic Pain",
            description: "Refers to persistent pain even after the underlying injury or illness has healed.",
            image: "/images/6.jpg",
        },
        {
            icon: HandMetal,
            title: "Hand Therapy",
            description: "Specialized area of physiotherapy that focuses on hand, wrist, and forearm.",
            image: "/images/7.jpg",
        },
        {
            icon: Users,
            title: "Group Therapy",
            description: "Therapeutic sessions conducted in small groups for shared recovery goals.",
            image: "/images/8.jpg",
        },
        {
            icon: Workflow,
            title: "Exercise Programs",
            description: "Customized exercise routines designed for your specific condition.",
            image: "/images/9.jpg",
        },
        {
            icon: Timer,
            title: "Recovery Planning",
            description: "Structured approach to help you achieve optimal recovery outcomes.",
            image: "/images/10.jpg",
        },
    ]

    // Process steps
    const processSteps = [
        {
            title: "Initial Contact",
            description: "Contact clinic via phone, email, or online booking systems.",
        },
        {
            title: "Treatment Planning",
            description: "Treatment plan is developed, outlining the methods and techniques.",
        },
        {
            title: "Discharge and Maintenance",
            description: "Treatment goals are achieved, the patient is discharged from therapy.",
        },
    ]
    return (
        <>
            {/* //hero section */}
           <HeroSection image='/images/servicesHeroImage.jpg' title='Services' />

            {/* process section */}
            <section className="relative bg-[#e5eaec] py-16 px-6 lg:py-24 lg:px-36 rounded-t-[50px] top-[-50px] mb-[-92px]">
                <div className="container mx-auto grid lg:grid-cols-3 gap-12 items-center">
                    {/* Left Section - Process Steps */}
                    <div className="space-y-8">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: index * 0.2 + 0.3 }}
                                className="flex items-start gap-4"
                            >
                                <div className="bg-[#003153] w-8 h-8 flex items-center justify-center text-white rounded-full text-lg font-bold shrink-0">
                                    {index + 1}
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-[#003153] mb-1">
                                        {step.title}
                                    </h4>
                                    <p className="text-sm text-gray-600">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Center Section - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
                        className="relative w-full h-full flex justify-center rounded-2xl overflow-hidden"
                    >
                        <img
                            src="/images/servicesProcessImage.jpg"
                            alt="Physiotherapy Session"
                            className="rounded-lg shadow-lg w-full max-w-lg object-cover"
                        />
                    </motion.div>

                    {/* Right Section - Content */}
                    <div className="space-y-8 p-4">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-gray-600 text-center lg:text-right"
                        >
                            <p>/process</p>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
                            className="text-3xl lg:text-4xl font-serif text-[#003153] text-center lg:text-left"
                        >
                            The Complete Service Process
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-gray-600 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
                        >
                            <p>
                                We understand that injuries and acute pain can happen
                                unexpectedly. Our emergency physiotherapy services are designed to
                                provide prompt and effective care to help you manage.
                            </p>

                            <Button text="Make An Appointment" icon={<ArrowRight className="w-5 h-5" />} />

                        </motion.div>
                    </div>
                </div>
            </section>

            {/* services rehabilitation */}
            <section className="relative overflow-hidden px-5 md:px-12 lg:px-36 py-16 bg-white rounded-t-[50px]">
                <div className="container ">
                    {/* Header Section */}
                    <motion.p
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-gray-400 mb-4 text-center font-semibold font-inherit "
                    >
                        / Rehabilitation
                    </motion.p>

                    <motion.h2
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl  lg:text-5xl font-bold text-gray-900 mb-6 text-center font-serif"
                    >
                        Services
                    </motion.h2>


                    {/* Services Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 * index }}
                                viewport={{ once: true }}
                            >
                                <div className="group relative rounded-2xl overflow-hidden shadow-lg">
                                    {/* Image */}
                                    <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110 z-10">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/50" />
                                    </div>

                                    {/* Content */}
                                    <div className="relative p-6 min-h-[320px] flex flex-col z-50 justify-between">
                                        {/* Icon */}
                                        <div className="ml-4 w-14 h-16 relative bottom-6 z-10 rounded-br-[8px] rounded-bl-[8px] bg-white/10 flex items-center justify-center transition-colors group-hover:bg-blue-600">
                                            <service.icon className="w-6 h-6 text-white" />
                                        </div>

                                        {/* Title and Description */}
                                        <h3 className="text-2xl font-semibold text-white mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-white/80 mb-4">
                                            {service.description}
                                        </p>

                                        {/* Arrow Button */}
                                        <div className="mt-auto sm:mt-0 flex sm:flex-row flex-col sm:items-center">
                                            <button className="mt-4 sm:mt-0 w-full sm:w-10 h-10 sm:rounded-full rounded-lg bg-white/10 flex items-center justify-center transition-colors hover:bg-blue-600">
                                                <ArrowRight className="w-5 h-5 text-white" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



            {/* clients testimonial */}
            < ClientTestimonials />

            {/* rehabilitation */}
            < Rehabilitation className={'hidden'} />
        </>
    )
}

export default Services
