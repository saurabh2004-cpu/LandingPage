'use client'
import { motion } from 'framer-motion';


export const HeroSection = ({ image, title, }: { image: string, title: string }) => {
    return (
        <section className="relative w-full sm:h-[500px] pb-20 flex items-center justify-center bg-black">
            {/* Background image */}
            <div className="absolute inset-0 overflow-hidden max-w-full rounded-t-[50px] mt-[-50px]">
                <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 rounded-t-[50px]" />
            </div>

            {/* Content */}
            <div className="relative px-4 flex flex-col items-center text-center pt-20">
                <div className="flex flex-col items-center px-4 lg:px-32">
                    {/* Main Title with Right-to-Left Fade Animation */}
                    <motion.h1
                        initial={{ x: 100, opacity: 0 }} // Start off-screen to the right
                        animate={{ x: 0, opacity: 1 }} // Slide into position with opacity
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="text-white font-serif"
                    >
                        <span className="block text-4xl lg:text-6xl mb-2">{title}</span>
                    </motion.h1>

                    {/* Paragraph with Bottom-to-Up Animation */}
                    <motion.p
                        initial={{ y: 50, opacity: 0 }} // Start off-screen to the bottom
                        animate={{ y: 0, opacity: 1 }} // Slide up into position
                        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                        className="text-gray-200 text-base lg:text-lg mt-6 mb-8 max-w-xl"
                    >
                        Home / {title}
                    </motion.p>

                    {/* Buttons with Bottom-to-Up Animation */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }} // Start off-screen to the bottom
                        animate={{ y: 0, opacity: 1 }} // Slide up into position
                        transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                    </motion.div>
                </div>
            </div>
        </section>

    )
}


