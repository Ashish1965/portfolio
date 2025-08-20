import React from "react";
import ProjectItem from "./ProjectItem";
import { motion } from "framer-motion";

// Variants for parent container (controls stagger)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // delay each child animation by 0.2s
    },
  },
};

const Projects = () => {
  return (
    <section id="projects">
      <div className="w-full">
        <div className="max-w-[1240px] mx-auto px-2 py-16">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            Projects
          </p>
          <h2 className="py-4 text-gray-700 dark:text-gray-600">What I've Built</h2>

          {/* Wrap grid with motion.div */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <ProjectItem imageUrl="/assets/projects/netflix.png" title="Aflix" language="Next Js" link="/netflix" />
            <ProjectItem imageUrl="/assets/projects/Ecommerce.jfif" title="Elegant" language="Next Js" link="/elegant" />
            <ProjectItem imageUrl="/assets/projects/frontend.jfif" title="Front-end Project" language="Next Js" link="/bookmark" />
            <ProjectItem imageUrl="/assets/projects/score.webp" title="Cricket Score Predictor" language="Python" link="/score" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
