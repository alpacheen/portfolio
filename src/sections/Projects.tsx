import { projects } from "../data/projects";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      
    },
  },
};
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-primary min-h-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-cream font-bold mb-12 font-mono underline decoration-">
          Projects
        </h2>
        <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -8,
                rotateY:10,
                rotateX:5,
                rotate:1,
                boxShadow: "0px 5px 5px rgba(155,155,155,0.8)",
              }}
              whileTap={{ scale: 0.95, rotateY:0, rotateX:0 }}
              transition={{ type: "spring", stiffness: 400, damping:25 }}
              style={{ transformStyle: "preserve-3d",perspective: 1000 }}
              className="block p-6 bg-amber-100 rounded-xl "
            >
              <h3 className="text-xl font-semibold font-mono mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.description}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
