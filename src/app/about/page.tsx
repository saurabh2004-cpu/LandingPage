'use client'
import Button from '@/components/Button'
import {  ArrowRight, ArrowUpRight, Award, Brain, Check, Footprints, MonitorSmartphone, ThumbsUp, Users } from 'lucide-react'
import { Activity, SpadeIcon as Spine, Bone, Briefcase, Home, Heart } from 'lucide-react'
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Play } from 'lucide-react'
import { TherapistTeam } from '@/components/TherapistTeam'
import { ClientTestimonials } from '@/components/clientTestimonials'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HeroSection } from '@/components/HeroSection'

const About = () => {

  //services
  const services = [
    {
      icon: Activity,
      title: "Sports",
      subtitle: "Rehabilitation"
    },
    {
      icon: Spine,
      title: "Backpain",
      subtitle: "Management"
    },
    {
      icon: Bone,
      title: "Orthopedic",
      subtitle: "Rehabilitation"
    },
    {
      icon: Briefcase,
      title: "Occupational",
      subtitle: "Therapy"
    },
    {
      icon: Home,
      title: "Home",
      subtitle: "Physiotherapy"
    },
    {
      icon: Heart,
      title: "Pelvic",
      subtitle: "Rehabilitation"
    }
  ]

  //therapy types
  const therapyTypes = [
    {
      title: "Individual Therapy",
      description: "Individual therapy offers tailored treatment and focused attention to.",
      image: "/images/7.jpg",
      features: [
        "Personalized Treatment Plans",
        "Specialized Techniques",
        "Focused Attention"
      ]
    },
    {
      title: "Family Therapy",
      description: "Family therapy focuses  on improving communication, resolving conflicts.",
      image: "/images/7.jpg",
      features: [
        "Common Issues Addressed",
        "Purpose and Goals",
        "Family Conflict"
      ]
    },
    {
      title: "Manual Therapy",
      description: "Manual therapy involves a range of hands-on techniques used by therapists.",
      image: "/images/7.jpg",
      features: [
        "Enhanced Muscle Function",
        "Increased Range of Motion",
        "Improved Circulation"
      ]
    }
  ]

  //therapy processs
  const processSteps = [
    {
      icon: Users,
      title: "Get Paired With A Therapist",
      description: "Choosing the right therapist is crucial for effective treatment and achieving your health goals."
    },
    {
      icon: Footprints,
      title: "Choose Your Preferred Way To Care",
      description: "We understand that each individual has unique preferences and needs when it comes."
    },
    {
      icon: MonitorSmartphone,
      title: "We Help You Get Better, Faster!",
      description: "Our mission is to accelerate your recovery and improve your overall well-being through expert."
    },
    {
      icon: Brain,
      title: "What Psychotherapy Can Help",
      description: "Discover how our comprehensive therapy approaches can address various mental health concerns."
    }
  ]

  //for youtube video window
  const [isVideoOpen, setIsVideoOpen] = useState(false)

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

  //FAQS
  const faqs = [
    {
      question: "How do I start the landscaping process?",
      answer: "Costs depend on the scope of the project. After our consultation, we provide a detailed estimate tailored to your budget and needs."
    },
    {
      question: "Can you work with my existing garden features?",
      answer: "Yes, we can incorporate and enhance your existing garden features. Our team will assess your current landscape and provide recommendations for integration."
    },
    {
      question: "How much does garden landscaping cost?",
      answer: "Landscaping costs vary based on project size, materials, and complexity. We provide detailed quotes after an initial consultation."
    },
    {
      question: "How do I start the landscaping process?",
      answer: "Begin by scheduling a consultation. We'll discuss your vision, assess your space, and develop a comprehensive plan tailored to your needs."
    },
    {
      question: "Can you work with my existing garden features?",
      answer: "We specialize in working with existing features, enhancing them while integrating new elements seamlessly."
    }
  ]



  return (
    <>
      {/* //hero section */}
      <HeroSection image={'/images/1.jpg'} title={'About Us'} />

      {/* //about us section */}
      <section className="w-full min-h-screen bg-white overflow-hidden lg:px-40 rounded-t-[50px] top-[-50px] z-10 relative">
        <div className="container px-4 py-12 mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-gray-600 text-base sm:text-lg"
                >
                  /About Us
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#003153] leading-tight"
                >
                  We Are The Best For Physiotherapy
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-gray-600 leading-relaxed text-base sm:text-lg"
                >
                  We understand that injuries and acute pain can happen unexpectedly.
                  Our emergency physiotherapy services are designed to provide prompt
                  and effective care to help you manage pain, prevent further injury,
                  and start your recovery process as quickly as possible.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="grid lg:grid-cols-2 gap-6"
              >
                {/* Features */}
                <div className="grid gap-2 p-4">
                  <div className="flex items-center gap-4 hover:bg-gray-100 border ">
                    <div className="flex-shrink-0">
                      <ThumbsUp className="w-12 h-12 text-[#003153]" />
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Team of highly skilled and experienced professionals.
                    </p>
                  </div>

                  <div className="flex items-center gap-4 hover:bg-gray-100 border">
                    <div className="flex-shrink-0">
                      <Award className="w-12 h-12 text-[#003153]" />
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Certified and highly trained physiotherapists.
                    </p>
                  </div>
                </div>

                {/* Highlighted Card */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  <Card className="bg-[#003153] text-white p-6 max-w-full sm:max-w-sm">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                      The Best In Physiotherapy Care
                    </h3>
                    <ul className="space-y-2 text-sm sm:text-base">
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        Expert
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        Effective
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        Expert Team
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        Compassionate
                      </li>
                    </ul>
                  </Card>
                </motion.div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="text-gray-600 leading-relaxed text-sm sm:text-base"
              >
                Our state-of-the-art facility, advanced therapies, and
                patient-centered approach set us apart, making Physiocare the best
                choice for achieving your health and wellness goals.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 1 }}
              >
                <Button text={"Book Appointment"} icon={<ArrowRight />} />
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative h-[400px] sm:h-[500px] lg:h-[600px] lg:block overflow-hidden rounded-tl-[100px] rounded-tr-[100px]"
            >
              {/* Background Gradient for blending */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent z-10"></div>

              {/* Main Image */}
              <img
                src="/images/AboutUs.png"
                alt="Physiotherapy session"
                className="w-full h-full object-contain rounded-tl-[100px] rounded-tr-[100px]"
              />
            </motion.div>
          </div>
        </div>
      </section>


      {/*  */}
      <section className="bg-[#003153] h-full py-28 px-4 rounded-t-[50px]">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <service.icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-white text-lg font-medium">{service.title}</h3>
                <p className="text-white/80 text-sm">{service.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* rehabilitation section  */}
      <section className="py-16 px-4 bg-white rounded-t-[50px] relative top-[-50px]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-gray-600 mb-2"
            >
              / Rehabilitation
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl md:text-5xl font-serif text-[#003153]"
            >
              Basics Of Rehabilitation Therapy
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {therapyTypes.map((therapy, index) => (
              <motion.div
                key={therapy.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + index * 0.2,
                }}
              >
                <Card className="overflow-hidden group cursor-pointer h-full relative">
                  <div className="relative h-[400px] md:h-[450px] lg:h-[500px]">
                    <img
                      src={therapy.image}
                      alt={therapy.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
                    <div className="absolute inset-0 z-20 p-6 flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <motion.h3
                          className="text-2xl font-medium text-white"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {therapy.title}
                        </motion.h3>
                        <motion.div
                          whileHover={{ rotate: 0 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <ArrowUpRight className="text-white opacity-75 group-hover:opacity-100 transition-opacity transform rotate-[45deg] group-hover:rotate-0" />
                        </motion.div>
                      </div>
                      <p className="text-white/90 mb-auto">{therapy.description}</p>
                      <ul className="space-y-2 bg-black/30 p-4 rounded-2xl">
                        {therapy.features.map((feature) => (
                          <motion.li
                            key={feature}
                            className="flex items-center gap-2 text-white"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Check className="w-4 h-4 text-white/90" />
                            <span className="text-sm">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* therapy processs section */}
      <section className="bg-[#003153] min-h-screen py-16 px-4 relative overflow-hidden rounded-t-[50px] top-[-50px] relative">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 sm:gap-16 items-center mb-36">
            <div className="space-y-8">
              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-white/80"
                >
                  / Therapy Process
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight"
                >
                  We&apos;re a Recognized & Quality Leader
                </motion.h2>
              </div>

              <div className="space-y-4">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="relative group">
                      <Card className="p-6 bg-[#e5eaec] text-[#023047] transition-colors overflow-hidden relative">
                        {/* Background animation layer */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#023047] to-[#023047] transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500" />
                        <div className="relative z-10 flex gap-4 text-[#023047] group-hover:text-white">
                          <div className="flex-shrink-0">
                            <step.icon className="w-8 h-8" />
                          </div>
                          <div>
                            <h3 className="text-lg font-medium mb-2">{step.title}</h3>
                            <p className="text-sm">{step.description}</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative h-[600px] w-full flex justify-center items-center lg:block bottom-[-150px] sm:ml-8">
              {/* Center Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="relative w-[80%] h-[70%] sm:h-[80%] rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src="/images/18.jpg"
                  alt="Therapy session"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Top Left Corner Image */}
              <motion.div
                initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
                whileInView={{ opacity: 1, rotate: -10, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="absolute top-[-10%] left-[-1%] sm:left-[-10%] w-[45%] h-[200px] rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src="/images/20.jpg"
                  alt="Relaxing environment"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Bottom Right Corner Image */}
              <motion.div
                initial={{ opacity: 0, rotate: 10, scale: 0.8 }}
                whileInView={{ opacity: 1, rotate: 10, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 1.0 }}
                className="absolute bottom-[14%] right-[1%] sm:right-[18%] w-[45%] h-[200px] rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src="/images/21.jpg"
                  alt="Therapy tools"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute top-8 right-8"
          >
            <Button text="Make An Appointment" icon={<ArrowRight />} className="border-white" />
          </motion.div>
        </div>
      </section>


      {/* video section */}
      <section className="w-full bg-white py-16 px-4 overflow-hidden rounded-t-[50px] top-[-50px] relative">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-gray-600"
                >
                  / Video
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="text-4xl md:text-5xl font-serif text-[#003153]"
                >
                  Our Video
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-gray-600 leading-relaxed"
              >
                Welcome to our video series on psychotherapy, where we delve into the
                benefits and processes of this essential form of mental health support.
                In this video, we will explore how psychotherapy can help individuals
                navigate their emotional and psychological challenges, promoting
                overall well-being and personal growth.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >

                <Button text="Make An Appointment" icon={<ArrowRight />} className='border-[#003153]' />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative aspect-video rounded-2xl overflow-hidden"
            >
              <img
                src="images/19.jpg"
                alt="Physiotherapy session video thumbnail"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 bg-black/20 flex items-center justify-center cursor-pointer"
                onClick={() => setIsVideoOpen(true)}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ rotate: 360 }}

                  className="w-20 h-20 rounded-full flex items-center justify-center relative"
                >
                  {/* Rotating Wheel */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      rotate: {
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <img src="/images/wheel.svg" alt="Rotating Wheel" className="w-full h-full" />
                  </motion.div>

                  {/* Play Icon */}
                  <div className="stuck z-10">
                    <Play className="w-10 h-10 text-white" />
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </div>
        </div>

        <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
          <DialogContent className="max-w-4xl p-0">
            <div className="aspect-video relative">
              <iframe
                width="100%"
                height="100%"
                src={isVideoOpen ? "https://www.youtube.com/embed/Y-x0efG1seA" : ""}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              />
            </div>
          </DialogContent>
        </Dialog>
      </section>

      {/* process section */}
      <section className="bg-[#e5eaec] py-20 px-4 overflow-hidden rounded-t-[50px]">
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
                stiffness: 100
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
            {/* Curved dotted line - visible only on desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full -translate-y-1/2">
              <svg className="w-full" height="50" viewBox="0 0 1200 50" fill="none">
                <path
                  d="M0 25C100 5, 200 45, 300 25C400 5, 500 45, 600 25C700 5, 800 45, 900 25C1000 5, 1100 45, 1200 25"
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
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                  {/* Dot connector - visible only on desktop */}
                  <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-3 h-3 rounded-full bg-[#003153] border-4 border-white" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* therapist team section */}
      <TherapistTeam />

      {/* clients testimonials section */}
      <ClientTestimonials />

      {/* FAQS section */}
      <section className="relative sm:min-h-screen py-20 px-4 overflow-hidden relative rounded-t-[50px] top-[-50px]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-white/70" />
          <img
            src="/images/12.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container  max-w-4xl relative z-10">
          <div className="text-center mb-16 space-y-4 ">
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-gray-600"
            >
              / FAQ&apos;s
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
              Frequently Asked Questions
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Accordion type="single" collapsible className="space-y-4 lg:px-24">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <AccordionItem
                    value={`item &apos${index}`}
                    className="border rounded-lg overflow-hidden bg-white shadow-sm"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                      <span className="text-left text-[#003153] font-medium">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 bg-[#003153] text-white overflow-hidden">
                      <div className="transition-all duration-500 ease-in-out transform">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>


      {/* Book Apointment section */}
      <section className="relative sm:min-h-screen flex items-center justify-center overflow-hidden relative rounded-t-[50px] top-[-50px] mb-[-98px] z-[-11]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 z-10" />
          <img
            src="/images/13.jpg"
            alt="Physiotherapy session"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20 ">
          <div className="max-w-4xl mx-auto my-16 text-center text-white space-y-8 flex flex-col items-center">
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-white/90 text-lg"
            >
              / Book Appointment
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                type: "spring",
                stiffness: 100
              }}
              className="text-3xl md:text-4xl lg:text-4xl xl:text-7xl font-serif leading-tight"
            >
              Take The First Step Towards a{' '}
              <span className="block mt-2">Healthier Mind And Body</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            >
              Your journey to a healthier mind and body begins here. At Physiocare, we offer a holistic approach that
              combines expert psychotherapy with comprehensive physical health support to help you achieve overall well-being.
              Whether you&apos;re seeking to manage stress.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="pt-4 mb-12"
            >
              <Button text="Book Appointment" icon={<ArrowRight className="h-5 w-5" />} />
            </motion.div>
          </div>
        </div>

      </section>

      {/* Bottom Wave */}
      {/* <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="white"
          />
        </svg>
      </div> */}


    </>
  )
}

export default About
