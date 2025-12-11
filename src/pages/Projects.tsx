import { projects } from '../data/projects';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PhonePreview from '../components/PhonePreview';

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
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const project = projects.find((p) => p.id === activeProject);

  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;

    const handleScroll = () => {
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        if (modal.scrollTop + modal.clientHeight >= modal.scrollHeight - 5) {
          setActiveProject(null);
        }
      }, 30000);
    };
    modal.addEventListener('scroll', handleScroll);
    return () => {
      modal.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [activeProject]);
  return (
    <section id="projects" className="bg-primary py-20">
      <div className="container mx-auto text-center">
        <h2 className="font-coiny mb-12 text-5xl font-bold text-amber-200 underline">
          Projects
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto flex max-w-4xl flex-col justify-center"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -8,
                rotateY: 10,
                rotateX: 5,
                rotate: 1,
                boxShadow: '0px 5px 5px rgba(155,155,155,0.8)',
              }}
              whileTap={{ scale: 0.95, rotateY: 0, rotateX: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
              className="mt-4 cursor-pointer rounded-xl bg-amber-100 p-6 text-left font-mono"
              onClick={() => setActiveProject(project.id)}
            >
              <h3 className="mb-2 font-mono text-3xl font-semibold">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {activeProject && project && (
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-primary/75 bg-opacity-10 fixed inset-0 z-50 flex items-center justify-center"
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                key="modal"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{
                  scale: 0.8,
                  opacity: 0,
                  transition: { duration: 1, ease: 'easeInOut' },
                }}
                transition={{ duration: 1 }}
                ref={modalRef}
                className="h-[90vh] w-full max-w-4xl overflow-y-auto rounded-t-2xl bg-amber-100 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="space-y-6 p-6">
                  <h3 className="font-coiny text-3xl">
                    {project.title} - 2025
                  </h3>
                  <p className="text-lg text-gray-700">{project.description}</p>

                  {/*Video*/}
                  {project.video && (
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      className="w-full rounded-lg shadow-lg"
                    />
                  )}
                  {project.id === 3 && project.screenshots?.length && (
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                      {project.screenshots.map((src, index) => (
                        <PhonePreview key={index} src={src} />
                      ))}
                    </div>
                  )}

                  
                    {project.technologies && (
                      <div className="p-4">
                        <h4 className="font-coiny mb-2 text-2xl">Tech Stack</h4>
                        <ul className=" text-primary font-mono">
                          {project.technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  <div>
                    <button className="rounded-lg border-2 p-2 hover:bg-primary/20">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline
                       
                        "
                      >
                        Visit Site
                      </a>
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
