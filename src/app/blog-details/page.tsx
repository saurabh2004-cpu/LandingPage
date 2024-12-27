'use client'
import {  Facebook,  Instagram, Linkedin, Twitter, } from 'lucide-react'
import { motion } from 'framer-motion';

import Image from 'next/image'
import { HeroSection } from '@/components/HeroSection'

const BlogDetails = () => {

    // const tags = ['Backpain', 'Physiocare', 'Wellness']
    // const careItems = [
    //     'Prevention and Long-Term Care',
    //     'Seeking Professional Care',
    //     'Managing Acute Pain and Injuries',
    //     'The Body’s Response to Injury'
    // ]
    
    return (
        <>
            {/* //hero section */}
            <HeroSection  image={'/images/11.jpg'} title={'Blog Details'}/>

            {/* blog */}
            <section className='relative bg-white rounded-[50px] p-4 top-[-50px]'>
                <div className="container mx-auto p-4 lg:p-24">
                    <div className="relative w-full overflow-hidden rounded-[30px]">
                        {/* Image */}
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
                        <div className="relative aspect-[16/9] md:aspect-[21/9]">
                            <Image
                                src="/images/11.jpg"
                                alt="Therapeutic massage treatment"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
                <div className="container mx-auto p-4 lg:p-8 max-w-6xl">
                    <article className="space-y-6">
                        {/* Initial paragraphs */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="space-y-6 text-slate-700"
                        >
                            <p>
                                Injuries resulting from accidents, falls, or collisions can lead to fractures, sprains, and dislocations. For example, a car accident may cause whiplash or broken bones, while a fall can result in a sprained ankle or wrist.
                            </p>

                            <p>
                                Repetitive activities or excessive strain on specific body parts can cause overuse injuries. Conditions such as tendonitis, stress fractures, and bursitis are common examples. Overuse injuries often occur in athletes or individuals who perform repetitive tasks.Engaging in physical activities with incorrect posture or movement can result in injuries. For instance, lifting weights with poor form can lead to muscle strains or back injuries, while improper running techniques can cause shin splints or knee pain.
                            </p>
                        </motion.div>

                        {/* Quote section */}
                        <motion.blockquote
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                            className=" p-6 rounded-lg my-8 text-slate-700 bg-[#e5eaec] rounded-xl"
                        >
                            <div className="flex gap-4 p-4">
                                <span className="text-4xl text-[#023047] bolder ">&quot;</span>
                                <h3 className='text-xl text-[#023047] bold'>
                                    Activities that involve abrupt, high-impact movements can lead to acute injuries. Sports such as football, basketball, or soccer often involve sudden stops, changes in direction, or collisions that increase the risk of acute injuries.
                                </h3>
                            </div>
                        </motion.blockquote>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="text-slate-700"
                        >
                            Inflammation is a natural and essential response to injury. The affected area becomes red, swollen, warm, and painful as immune cells are mobilized to the site of injury. This process helps to contain and eliminate harmful agents, repair damaged tissues, and restore normal function. Acute pain acts as a warning signal that something is wrong.
                        </motion.p>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="text-4xl md:text-5xl font-serif text-[#023047] my-8"
                        >
                            Managing Acute Pain and Injuries
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="space-y-6 text-slate-700 "
                        >
                            <p>
                                Applying ice to the injured area can help reduce swelling and numb the pain. Ice should be applied for 15-20 minutes every hour during the first 48 hours post-injury. Ensure the ice is wrapped in a cloth to avoid direct contact with the skin.
                            </p>

                            <ul className="space-y-3 list-none text-[#023047] text-lg bolder font-2xl ">
                                <li>• Prevention and Long-Term Care</li>
                                <li>• Seeking Professional Care</li>
                                <li>• Managing Acute Pain and Injuries</li>
                                <li>• The Body&apos;s Response to Injury</li>
                            </ul>

                            <p>
                                Over-the-counter pain relievers, such as ibuprofen or acetaminophen, can help manage pain and reduce inflammation. Always follow the dosage instructions and consult a healthcare provider if you have any concerns or pre-existing conditions.
                            </p>
                        </motion.div>

                        {/* Tags and Social Media */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="flex flex-wrap justify-between items-center pt-8 border-t border-slate-200"
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-slate-700">Tags:</span>
                                <div className="flex gap-2">
                                    <h3 className="bg-[#003049] text-white hover:bg-[#003049]/90 p-2 rounded-xl">Backpain</h3>
                                    <h3 className="bg-[#003049] text-white hover:bg-[#003049]/90 p-2 rounded-xl">Physiocare</h3>
                                    <h3 className="bg-[#003049] text-white hover:bg-[#003049]/90 p-2 rounded-xl">Wellness</h3>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-4 sm:mt-0">
                                <button className="p-2 rounded-xl hover:bg-slate-300 transition-colors bg-[#003049]">
                                    <Facebook className="w-5 h-5 text-white " />
                                </button>
                                <button className="p-2 rounded-xl hover:bg-slate-300 transition-colors bg-[#003049]">
                                    <Linkedin className="w-5 h-5 text-white" />
                                </button>
                                <button className="p-2 rounded-xl hover:bg-slate-300 transition-colors bg-[#003049]">
                                    <Instagram className="w-5 h-5 text-white" />
                                </button>
                                <button className="p-2 rounded-xl hover:bg-slate-300 transition-colors bg-[#003049]">
                                    <Twitter className="w-5 h-5 text-white " />
                                </button>
                            </div>
                        </motion.div>
                    </article>
                </div>
            </section>


        </>
    )
}

export default BlogDetails
