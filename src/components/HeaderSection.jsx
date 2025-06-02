import { Locate, X } from "lucide-react";
import { motion } from "framer-motion";

export default function HeaderSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const socialButtonVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col items-center justify-center min-h-[60vh] mt-25"
    >
      {/* Card */}
      <motion.div
        variants={itemVariants}
        className="
          w-[vw] max-w-xs
          sm:max-w-sm
          md:max-w-[40vw]
          lg:max-w-[32vw]
          xl:max-w-[28vw]
          2xl:max-w-[24vw]
          rounded-[2rem]
          border border-gray-100
          p-4
          flex flex-col items-center shadow-sm
          bg-white
        "
        style={{
          background:
            "linear-gradient(180deg, #fff 60%, #F9CBA6 90%, #7B5CFA 100%)",
          boxShadow:
            "0 4px 24px 0 rgba(123,92,250,0.10), 0 1.5px 8px 0 rgba(249,203,166,0.10)",
        }}
      >
        <motion.div 
          variants={itemVariants}
          className="flex items-center w-full gap-3"
        >
          {/* Image */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-30 h-20 overflow-visible rounded-3xl flex-shrink-0 relative flex items-center justify-center"
          >
            <span className="absolute inset-0 rounded-2xl ring-3 ring-indigo-50 border-2 border-white pointer-events-none"></span>
            <img
              src="/profile.jpg"
              alt="Cyril Egbobiani"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>
          {/* Name and Location */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col justify-center mr-10"
          >
            <motion.span 
              variants={itemVariants}
              className="font-extrabold text-2xl text-left leading-tight Instrument Sans text-gray-700"
            >
              Cyril
            </motion.span>
            <motion.span 
              variants={itemVariants}
              className="font-extrabold text-2xl leading-tight text-left Instrument Sans -mt-1 text-gray-700"
            >
              Egbobiani
            </motion.span>
            <motion.span 
              variants={itemVariants}
              className="flex items-center gap-1 text-emerald-500 font-medium text-sm mt-1 Instrument Sans"
            >
              <Locate className="w-4 h-4" />
              Lagos, Nigeria
            </motion.span>
          </motion.div>
        </motion.div>
        {/* Button */}
        <motion.button
          variants={itemVariants}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 8px 30px rgba(123,92,250,0.2)",
          }}
          whileTap={{ scale: 0.98 }}
          className="
            w-full mt-4 py-3
            rounded-2xl
            text-white font-semibold Instrument Sans
            flex items-center justify-center text-base
            shadow-md
            transition-all duration-150
            relative z-10
          "
          style={{
            background: "linear-gradient(360deg, #181818 80%, #7B5CFA 120%)",
          }}
        >
          Lets talk <motion.span 
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            className="ml-2"
          >👋🏼</motion.span>
        </motion.button>
      </motion.div>
      {/* Description */}
      <motion.div 
        variants={itemVariants}
        className="w-full max-w-md mt-8"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-center text-2xl md:text-3xl font-bold Instrument Sans leading-tight bg-gradient-to-b from-black via-gray-900 to-emerald-300 bg-clip-text text-transparent"
        >
          Software Developer designing with empathy and developing with clarity.
        </motion.h1>
      </motion.div>
      {/* Social Icons */}
      <motion.div 
        variants={containerVariants}
        className="flex gap-4 mt-8"
      >
        {["x", "instagram", "linkedin", "github"].map((social, index) => (
          <motion.button
            key={social}
            variants={socialButtonVariants}
            whileHover="hover"
            whileTap="tap"
            custom={index}
            className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-800 text-xl hover:bg-gray-100 transition"
          >
            <img src={`/${social}.svg`} alt={social} />
          </motion.button>
        ))}
      </motion.div>
    </motion.section>
  );
}

// Don't forget to import X from lucide-react and add FontAwesome CDN for social icons in your index.html if not already present.
