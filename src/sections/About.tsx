import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className=" bg-primary relative mx-auto py-20 w-full text-center">
        <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
         className="text-3xl font-extrabold text-cream font-mono underline">
          About Me
        </motion.h2>
        <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-amber-100 mt-6 max-w-2xl mx-auto leading-relaxed"
      >
        Hi, I’m Alec — a developer passionate about crafting clean, modern
        web apps. I love working with React, TypeScript, and animations
        that make interfaces feel alive.
      </motion.p>
      
    </section>
  );
};

export default About;
