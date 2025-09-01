import { motion } from "framer-motion";



const animatedName = ({text = "ALEC MUIR"}) => {
    const letters = text.split("");
  return (
    <>
      {letters.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block "
            initial={{ opacity: 0, scale:20 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: index * 0.2, }}
            viewport={{ once: true }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </>
  );
};

export default animatedName;
