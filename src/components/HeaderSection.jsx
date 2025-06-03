import { Locate, X } from "lucide-react";
import { easeOut, motion, useScroll, useTransform } from "framer-motion";

export default function HeaderSection() {
  const { scrollYProgress } = useScroll();
  const cardY = useTransform(scrollYProgress, [0, 0.5], [0, -20]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.96,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const socialButtonVariants = {
    hover: {
      scale: 1.1,
      rotate: 10,
      transition: { duration: 0.009, easeOut },
    },
    tap: {
      scale: 0.99,
    },
  };

  const nameVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      x: [0, 2, -2, 0],
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const locationVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  const dynamicStyle = {
    background: "linear-gradient(180deg, #fff 60%, #F9CBA6 90%, #7B5CFA 100%)",
    boxShadow:
      "0 4px 24px 0 rgba(123,92,250,0.10), 0 1.5px 8px 0 rgba(249,203,166,0.10)",
  };

  return (
    <motion.section
      id="home"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col items-center justify-center min-h-[60vh] mt-10 lg:mt-20"
    >
      {/* Card */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        style={{
          ...dynamicStyle,
          y: cardY,
          opacity: cardOpacity,
        }}
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
          transform-gpu
          will-change-transform
          hover:shadow-lg
          transition-shadow duration-300
        "
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center w-full gap-3"
        >
          {/* Image */}
          <motion.div
            className="w-30 h-20 overflow-visible rounded-3xl flex-shrink-0 relative flex items-center justify-center"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.span
              className="absolute inset-0 rounded-2xl ring-3 ring-indigo-50 border-2 border-white pointer-events-none"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.5,
                  ease: "easeOut",
                },
              }}
              whileHover={{
                boxShadow: "0 0 0 4px rgba(123,92,250,0.1)",
                transition: { duration: 0.2 },
              }}
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 0.4,
                  duration: 0.5,
                  ease: "easeOut",
                },
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              src="/profile.jpg"
              alt="Cyril Egbobiani"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>
          {/* Name and Location */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center mr-5"
          >
            <motion.span
              variants={nameVariants}
              whileHover="hover"
              className="font-extrabold text-2xl text-left leading-tight Instrument Sans text-gray-700"
            >
              Cyril
            </motion.span>
            <motion.span
              variants={nameVariants}
              whileHover="hover"
              className="font-extrabold text-2xl leading-tight text-left Instrument Sans -mt-1 text-gray-700"
            >
              Egbobiani
            </motion.span>
            <motion.span
              variants={locationVariants}
              whileHover="hover"
              className="flex items-center gap-1 text-emerald-400 font-medium text-sm mt-1 Instrument Sans"
            >
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
              >
                <Locate className="w-4 h-4" />
              </motion.div>
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
            y: -2,
          }}
          whileTap={{ scale: 0.98, y: 0 }}
          className="
            w-full mt-4 py-3
            rounded-2xl
            text-white font-semibold Instrument Sans
            flex items-center justify-center text-base
            shadow-md
            transition-all duration-150
            relative z-10
            overflow-hidden
          "
          style={{
            background: "linear-gradient(360deg, #181818 80%, #7B5CFA 120%)",
          }}
        >
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Lets talk
          </motion.span>
          <motion.span
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
            className="ml-2"
          >
            👋🏼
          </motion.span>
        </motion.button>
      </motion.div>
      {/* Description */}
      <motion.div variants={itemVariants} className="w-full max-w-md mt-8">
        <motion.h1
          variants={itemVariants}
          className="text-center text-2xl md:text-3xl font-bold Instrument Sans leading-tight bg-gradient-to-b from-gray-700 via-gray-900 to-gray-500 bg-clip-text text-transparent"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Software Developer designing with empathy and developing with clarity.
        </motion.h1>
      </motion.div>
      {/* Social Icons */}
      <motion.div variants={containerVariants} className="flex gap-4 mt-8">
        {["x", "instagram", "linkedin", "github"].map((social, index) => (
          <motion.button
            key={social}
            variants={socialButtonVariants}
            whileHover="hover"
            whileTap="tap"
            custom={index}
            className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-800 text-xl hover:bg-gray-50 transition"
          >
            <motion.img
              src={`/${social}.svg`}
              alt={social}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </motion.button>
        ))}
      </motion.div>
    </motion.section>
  );
}

// Don't forget to import X from lucide-react and add FontAwesome CDN for social icons in your index.html if not already present.
