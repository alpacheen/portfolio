import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      className="bg-primary relative mx-auto h-screen w-full py-20 flex flex-col items-center justify-start text-center"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="font-coiny text-5xl font-extrabold text-amber-200 underline"
      >
        About Me
      </motion.h2>
      <div className="font-galindo max-w-3xl text-lg md:text-3xl lg:text-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 leading-relaxed text-amber-100"
        >
          Hi, I’m Alec — a developer passionate about crafting clean, modern web
          apps. I love working with React, TypeScript, and animations that make
          interfaces feel alive.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default About;
