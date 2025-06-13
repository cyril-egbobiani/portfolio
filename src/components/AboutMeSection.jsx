import React from "react";
import { motion } from "framer-motion";

export default function AboutMeSection() {
  return (
    <motion.section
      id="about"
      className="flex flex-col items-center justify-center py-12  px-4 my-25"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* "About Me" Pill */}
      <motion.span
        className="text-center text-2xl font-bold Instrument Sans leading-tight bg-gradient-to-b from-gray-700 via-gray-900 to-gray-500 bg-clip-text text-transparent border-1 mb-5"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
      >
        About Me
      </motion.span>
      {/* Description */}
      <motion.p
        className="max-w-lg  lg:text-center text-gray-800 text-base md:text-lg font-medium leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
      >
        My aim is to build as many solutions and make as many people happy. As
        much as I would like to say “I can do it all on my own”... I can’t. I so
        much derive joy in working with people and creating not just solutions
        but life transformations together.
      </motion.p>
    </motion.section>
  );
}
