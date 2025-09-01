import { projects } from "../data/projects";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-primary min-h-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-cream font-bold mb-12 font-mono underline decoration-">
          Projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="block p-6 bg-amber-100 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold font-mono mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
