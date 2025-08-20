import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Variants for stagger effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // delay between paragraphs
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const About = () => {
  return (
    <div id="about" className="w-full p-2 flex items-center mt-24">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        {/* Left Section (Text) */}
        <motion.div
          className="col-span-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            variants={itemVariants}
            className="uppercase text-xl tracking-widest text-[#5651e5]"
          >
            About
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="py-4 text-gray-700 dark:text-gray-600"
          >
            Who I Am
          </motion.h2>

          <motion.p variants={itemVariants} className="py-2 text-gray-700 dark:text-gray-500">
            My journey into the world of web development began with a profound
            fascination for the intersection of design and code...
          </motion.p>

          <motion.p variants={itemVariants} className="py-2 text-gray-600 dark:text-gray-500">
            On the front-end, I'm well-versed in HTML, CSS, Tailwind CSS and JavaScript...
          </motion.p>

          <motion.p variants={itemVariants} className="py-2 text-gray-600 dark:text-gray-500">
            I see every project as an opportunity to innovate and solve real-world challenges...
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link href="/#projects">
              <p className="py-2 text-gray-600 underline cursor-pointer dark:text-blue-500">
                Check out some of my latest projects.
              </p>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Section (Image) */}
        <motion.div
          className="w-full h-auto m-auto shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-xl flex items-center justify-center p-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img src="/assets/about.avif" className="rounded-xl" alt="About" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
