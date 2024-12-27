'use client'
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'
import { motion, } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image'
import Link from 'next/link'
import { HeroSection } from '@/components/HeroSection';

const Blogs = () => {

    // Blog Cards
    const posts = [
        {
            title: "The Benefits of Physiotherapy for Injury Recovery",
            date: "September 15, 2024",
            tag: "Manual Therapy",
            image: "/images/18.jpg",
            href: "/blog/benefits-physiotherapy"
        },
        {
            title: "How to Speed Up Your Post-Surgery Recovery",
            date: "September 12, 2024",
            tag: "Chronic Pain",
            image: "/images/18.jpg",
            href: "/blog/post-surgery-recovery"
        },
        {
            title: "The Role of Physiotherapy in Managing Chronic Pain",
            date: "September 9, 2024",
            tag: "Hand Therapy",
            image: "/images/18.jpg",
            href: "/blog/managing-chronic-pain"
        },
        {
            title: "5 Warning Signs That You Need to See a Physiotherapist",
            date: "September 5, 2024",
            tag: "Sports Therapy",
            image: "/images/18.jpg",
            href: "/blog/warning-signs"
        },
        {
            title: "How Shockwave Therapy Can Relieve Tendon Pain",
            date: "September 3, 2024",
            tag: "Orthopedic Therapy",
            image: "/images/18.jpg",
            href: "/blog/shockwave-therapy"
        },
        {
            title: "Dry Needling: How It Works and Who Can Benefit",
            date: "September 1, 2024",
            tag: "Cupping Therapy",
            image: "/images/18.jpg",
            href: "/blog/dry-needling"
        }
    ]

    return (
        <>
            {/* /// Hero Section */}
            <HeroSection image={'/images/1.jpg'} title={'Blogs'} />

            {/* cards section */}
            <div className="container mx-auto p-4 lg:p-32 relative bg-white rounded-[50px] top-[-50px]">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: [0.4, 0, 0.2, 1],
                            }}
                        >
                            <Card className="group overflow-hidden border-none bg-white shadow-lg rounded-2xl h-fulln border-none">
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <div className="absolute right-3 top-3 z-10">
                                        <span className="rounded-md text-[#023047] bg-white/20 px-3 py-1 text-sm font-medium backdrop-blur-lg rounded   ">
                                            {post.tag}
                                        </span>
                                    </div>
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-2xl"
                                    />
                                </div>
                                <CardContent className="p-4 text-left text-[#023047] flex flex-col h-[calc(100%-240px)]">
                                    <time className="text-sm text-muted-foreground">{post.date}</time>
                                    <h3 className="mt-2 text-xl font-semibold leading-tight flex-grow">
                                        {post.title}
                                    </h3>
                                    <Link
                                        href={post.href}
                                        className="mt-4 inline-flex items-center justify-left gap-2 text-sm font-medium text-primary hover:underline"
                                    >
                                        Read More
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-12 flex justify-center gap-2">
                    <Button variant="outline" size="icon" className='bg-[bg-[#e5eaec] ] hover:bg-[#023047] text[#023047] hover:text-white rounded-xl'>
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="default" className='bg-[bg-[#e5eaec] ] hover:bg-[#023047] text[#023047] hover:text-white rounded-xl'>1</Button>
                    <Button variant="outline" className='bg-[bg-[#e5eaec] ] hover:bg-[#023047] text[#023047] hover:text-white rounded-xl'>2</Button>
                    <Button variant="outline" className='bg-[bg-[#e5eaec] ] hover:bg-[#023047] text[#023047] hover:text-white rounded-xl'>3</Button>
                    <Button variant="outline" size="icon" className='bg-[bg-[#e5eaec] ] hover:bg-[#023047] text[#023047] hover:text-white rounded-xl'>
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>

        </>
    )
}

export default Blogs
