'use client'

import { HeroSection } from '@/components/HeroSection'
import { PlayCircle } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Dialog, DialogContent } from '@/components/ui/dialog'

const VideoTestimonials = () => {

    const videos = [
        {
            id: 1,
            image: '/images/17.jpg',
            title: 'Physical Therapy Session',
            isVideo: true,
        },
        {
            id: 2,
            image: '/images/17.jpg',
            title: 'Joint Mobilization Techniques',
            isVideo: true,
        },
        {
            id: 3,
            image: '/images/17.jpg',
            title: 'Relaxation Therapy',
            isVideo: true,
        },
        {
            id: 4,
            image: '/images/17.jpg',
            title: 'Range of Motion Exercises',
            isVideo: true,
        },
        {
            id: 5,
            image: '/images/17.jpg',
            title: 'Manual Therapy Techniques',
            isVideo: true,
        },
        {
            id: 6,
            image: '/images/17.jpg',
            title: 'Neck Pain Treatment',
            isVideo: true,
        },
    ]
    const [isVideoOpen, setIsVideoOpen] = useState(false)

    return (
        <>
            <HeroSection image='/images/1.jpg' title='Team Details' />

            {/* cards  */}
            <section className='container mx-auto px-6 md:px-12 lg:px-24 p-8 md:py-24 bg-white relative top-[-45px] rounded-t-[50px]'>
                <div className="container mx-auto px-4 py-12">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {videos.map((video, index) => (
                            <motion.div
                                key={video.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    ease: [0.4, 0, 0.2, 1],
                                }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="group relative cursor-pointer"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                                    <Image
                                        src={video.image}
                                        alt={video.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />

                                    {/* Gray transparent overlay on hover */}
                                    <div className="absolute inset-0  transition-colors duration-300 group-hover:bg-gray-600/70" />

                                    {/* Play button that appears on hover */}
                                    {video.isVideo && (
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                            onClick={() => setIsVideoOpen(true)}
                                        >
                                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg">
                                                <PlayCircle className="h-8 w-8" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                    <DialogContent className="max-w-4xl p-0">
                        <button
                            className="absolute top-[-30px] z-50 right-0 text-white bg-black/70 p-2 hover:bg-black transition"
                            onClick={() => setIsVideoOpen(false)}
                        >
                            ✕
                        </button>

                        {/* Video iframe */}
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

        </>
    )
}

export default VideoTestimonials
