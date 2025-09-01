
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 w-full mx-auto text-center bg-cream">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-6"
      >
        Get In Touch
      </motion.h2>

      <form
        action="https://formspree.io/f/your-form-id"
        method="POST"
        className="space-y-4 mx-auto max-w-xl px-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg border border-gray-300  bg-white "
          required
        />
        <textarea
          name="message"
          rows={4}
          placeholder="Your Message"
          className="w-xl p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
          required
        ></textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="max-w-3xs p-3 rounded-lg bg-primary text-white font-medium"
        >
          Send Message
        </motion.button>
      </form>
    </section>
  );
}
