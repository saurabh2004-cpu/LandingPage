"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Button({ text, icon ,className }: { text: string; icon: React.ReactNode,className?:string }) {
  return (
    <motion.button
      className={` group relative flex items-center overflow-hidden rounded-full bg-[#003144] text-white hover:text-[#003144] border-2 border-[#003144] ${className}`}
      whileHover="hover"
      initial="initial"
    >
      {/* Sliding background */}
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ x: "-100%" }}
        variants={{
          initial: { x: "-100%" },
          hover: { x: "0%" },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />

      {/* Phone number */}
      <span className="relative z-10 px-6 py-3 font-medium">{text}</span>

      {/* Divider and icon container */}
      <div className="relative flex items-center border-l border-[#003144]">
        <div className="z-10 px-4">{icon}</div>
      </div>
    </motion.button>
  );
}
