import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AnimatedName from "../components/animatedName";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Web Developer";

  useEffect(() => {
    const startDelay = setTimeout(() => {
      let i = 0;
      const timer = setInterval(() => {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
        if (i >= fullText.length) clearInterval(timer);
      }, 80);
    }, 3000);

    return () => clearTimeout(startDelay);
  }, []);
  return (
    <section className="min-h-screen flex items-center bg-primary">
      <div className="container mx-auto text-center">
        <motion.h1 className="text-6xl md:text-8xl font-extrabold font-mono text-balance text-amber-100">
          <AnimatedName />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: displayText ? 1 : 0 }}
          className="mt-4 text-2xl md:text-3xl text-amber-200 font-mono"
        >
          {displayText}
          <span className="animate-pulse">|</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2.5 }}
          className="mt-6 flex justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.01, borderColor: "#fee685" }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-6 py-3 rounded-lg text-amber-100 border
           "
          >
            View Projects
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.01, borderColor: "#fee685" }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className=" text-amber-100 px-6 py-3 rounded-lg border border-amber-200  hover:bg-black/40 "
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ y: [0, 10, 0], opacity: 1 }}
          transition={{ repeat: Infinity, duration: 2, delay: 1 }}
          className="text-gray-400 dark:text-gray-500"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
