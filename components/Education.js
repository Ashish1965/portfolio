import React from "react";
import { motion } from "framer-motion";

// Stagger container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// Each item animation
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Education = () => {
  return (
    <div id="education" className="w-full p-2 flex items-center mt-24">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        {/* Left Section (Image) */}
        <motion.div
          className="w-full h-auto my-8 md:m-auto shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-xl flex items-center justify-center p-4 sm:mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="/assets/education.jpg"
            className="rounded-xl w-full h-full"
            alt="Education"
          />
        </motion.div>

        {/* Right Section (Content) */}
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
            Education
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="py-4 text-gray-700 dark:text-gray-600"
          >
            What I Have Learnt
          </motion.h2>

          <motion.h6
            variants={itemVariants}
            className="text-gray-700 dark:text-gray-600 font-semibold"
          >
            B-TECH IN COMPUTER SCIENCE & Design
          </motion.h6>
          <motion.p
            variants={itemVariants}
            className="py-2 text-gray-700 dark:text-gray-500"
          >
            Enrolled in a B.Tech program specializing in Computer Science and
            Design, integrating technical computing skills with innovative
            design concepts. Maintaining a strong CGPA of 8.3, reflecting
            consistent academic excellence. Studying at Madhav Institute of
            Technology and Science, a reputed institution recognized for its
            high standards in engineering and technology education.
          </motion.p>

          <motion.h6
            variants={itemVariants}
            className="text-gray-700 dark:text-gray-600 font-semibold"
          >
            AISSCE
          </motion.h6>
          <motion.p
            variants={itemVariants}
            className="py-2 text-gray-700 dark:text-gray-500"
          >
            Jawahar Navodaya Vidyalaya, Amarkantaka, a beacon of academic
            excellence amidst the picturesque hills of Madhya Pradesh. In the
            academic year 2019-20, the school set a benchmark by achieving an
            outstanding AISSCE (Class XII) result of 86.2%. This remarkable feat
            reflects the dedication of faculty, commitment of students, and the
            unwavering support of the administration.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
