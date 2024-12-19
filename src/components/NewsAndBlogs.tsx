"use client"

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ChevronRight } from 'lucide-react'
import Button from './Button'

interface BlogPost {
  id: number
  title: string
  date: string
  tag: string
  image: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Top 10 Benefits of Physiotherapy for Injury Recovery",
    date: "September 15, 2024",
    tag: "Manual Therapy",
    image: "https://happipuncture.co.nz/wp-content/uploads/2021/09/35.png",
  },
  {
    id: 2,
    title: "How to Speed Up Your Post-Surgery Recovery with Physiocare",
    date: "September 12, 2024",
    tag: "Chronic Pain",
    image: "https://happipuncture.co.nz/wp-content/uploads/2021/09/35.png",
  },
  {
    id: 3,
    title: "The Role of Physiotherapy in Managing Chronic Pain",
    date: "September 9, 2024",
    tag: "Hand Therapy",
    image: "https://happipuncture.co.nz/wp-content/uploads/2021/09/35.png",
  },
]

export default function NewsAndBlogs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-16 px-4 md:px-40 bg-white w-full mx-auto rounded-t-[68px] relative bottom-[65px]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div className="space-y-2">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="text-blue-500"
          >
            / News & Blog
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#0B3558]"
          >
            Our Latest Insights and Updates
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          
          <Button text={'View All Blog'} icon={<ChevronRight className="w-4 h-4" />} />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              ease: "easeOut",
            }}
          >
            <Card className="overflow-hidden group border-none shadow-lg">
              <div className="relative overflow-hidden">
                {/* Image */} 
                <div className="relative overflow-hidden aspect-[16/10]">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Tag */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-4 py-1.5 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-[#0B3558]">
                    {post.tag}
                  </span>
                </div>
              </div>

              <CardHeader className="pt-6">
                <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold text-[#0B3558] line-clamp-2 leading-tight">
                  {post.title}
                </h3>
              </CardHeader>

              <CardFooter>
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-[#0B3558] hover:text-[#0B3558]/80 font-medium"
                >
                  Read More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
