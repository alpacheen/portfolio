import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import AnimatedName from '../components/animatedName';

const Hero = () => {
  
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Web Developer';

  useEffect(() => {
    const startDelay = setTimeout(() => {
      let i = 0;
      const timer = setInterval(() => {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
        if (i >= fullText.length) clearInterval(timer);
      }, 80);
    }, 1000);

    return () => clearTimeout(startDelay);
  }, []);

  return (
    <motion.section className="bg-primary flex min-h-screen items-center"
    
    >
      <div className="container mx-auto text-center">
        <motion.h1 className="font-coiny text-6xl text-balance text-amber-100 md:text-8xl">
          <AnimatedName />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: displayText ? 1 : 0 }}
          className="font-galindo mt-4 text-2xl text-amber-200 md:text-3xl"
        >
          {displayText}
          <span className="animate-pulse">|</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2.5 }}
          className="font-galindo mt-6 flex justify-center gap-4 text-lg tracking-wide"
        >
          <motion.a
            whileHover={{ scale: 1.01, borderColor: '#fee685' }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="rounded-lg border px-6 py-3 text-amber-100"
          >
            View Projects
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.01, borderColor: '#fee685' }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="rounded-lg border border-amber-200 px-6 py-3 text-amber-100 hover:bg-black/40"
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
    </motion.section>
  );
};

export default Hero;
