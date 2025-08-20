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

// Variants for each child (project card)
const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
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
          <h2 className="py-4 text-gray-700 dark:text-gray-600">
            What I've Built
          </h2>

          {/* Parent container with stagger animation */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Wrap each project in motion.div */}
            <motion.div variants={itemVariants}>
              <ProjectItem
                imageUrl="/assets/projects/netflix.png"
                title="Aflix"
                language="Next Js"
                link="/netflix"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <ProjectItem
                imageUrl="/assets/projects/Ecommerce.jfif"
                title="Elegant"
                language="Next Js"
                link="/elegant"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <ProjectItem
                imageUrl="/assets/projects/frontend.jfif"
                title="Front-end Project"
                language="Next Js"
                link="/bookmark"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <ProjectItem
                imageUrl="/assets/projects/score.webp"
                title="Cricket Score Predictor"
                language="Python"
                link="/score"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
