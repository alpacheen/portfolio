import { motion } from "framer-motion";



const animatedName = ({text = "ALEC MUIR"}) => {
    const letters = text.split("");
    const customDelays = [0, 0.2, 0.3 ,0.4, 0.5 , 0.6, 0.7 ,0.8 ,0.9]
  return (
    <>
      {letters.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block "
            initial={{ opacity: 0, scale:1.5, scaleX:0.5 }}
            animate={{ opacity: 1, scale: 1, scaleX:1 }}
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
