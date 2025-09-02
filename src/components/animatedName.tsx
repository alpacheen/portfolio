import { motion } from "framer-motion";



const animatedName = ({text = "ALEC MUIR"}) => {
    const letters = text.split("");
    const customDelays = [0, 0.25, 0.5 ,0.6, 0.6 , 0.8, 1.1 ,1.6 ,1.9]
  return (
    <>
      {letters.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block "
            initial={{ opacity: 0, scale:10 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: customDelays[index] }}
            viewport={{ once: true }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </>
  );
};

export default animatedName;
