"use client"

import { motion } from "framer-motion"
// import { Phone } from 'lucide-react'

export default function Button({text,icon}: {text: string, icon: React.ReactNode}) {
  return (
    <motion.button
      className="group rounded-full relative flex items-center overflow-hidden rounded-full bg-[#003144] text-white hover:text-black"
      whileHover="hover"
      initial="initial"
      
    >
      {/* Sliding background */}
      <motion.div
        className="absolute inset-0 bg-white rounded-full"
        initial={{ x: "-100%" }}
        variants={{
          initial: { x: "-100%" },
          hover: { x: "0%" }
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />

      {/* Phone number */}
      <span className="relative z-10 px-6 py-3 font-medium ">
        {text}
        {/*  */}
      </span>

      {/* Divider and icon container */}
      <div className="relative flex h-full items-center border-l border-white/10 ">
        <div className="z-10 px-4">
          {icon}
        </div>
      </div>
    </motion.button>
  )
}


