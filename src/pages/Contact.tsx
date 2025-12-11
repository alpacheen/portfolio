import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section
      id="contact"
      className=" mx-auto w-full bg-amber-100 py-20 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="font-coiny decoration bg-amber mb-6 text-4xl font-bold underline"
      >
        Get In Touch
      </motion.h2>

      <form
        action="https://formspree.io/f/your-form-id"
        method="POST"
        className="mx-auto max-w-xl space-y-4 px-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="focus:ring-primary w-full rounded-lg border border-gray-300 bg-white p-3 focus:ring-2 focus:outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="focus:ring-primary w-full rounded-lg border border-gray-300 bg-white p-3 focus:ring-2 focus:outline-none"
          required
        />
        <textarea
          name="message"
          rows={4}
          placeholder="Your Message"
          className="focus:ring-primary w-xl rounded-lg border border-gray-300 bg-white p-3 focus:ring-2 focus:outline-none"
          required
        ></textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-primary max-w-3xs rounded-lg p-3 font-mono text-white cursor-pointer"
        >
          Send Message
        </motion.button>
      </form>
    </section>
  );
}
