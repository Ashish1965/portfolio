import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div id="education" className="w-full p-2 flex items-center mt-24">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        
        {/* LEFT SIDE IMAGE */}
        <motion.div
          className="w-full h-auto my-8 md:m-auto shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-xl flex items-center justify-center p-4 sm:mb-16"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/assets/education.jpg"
            className="rounded-xl w-full h-full"
            alt="Education"
          />
        </motion.div>

        {/* RIGHT SIDE CONTENT */}
        <div className="col-span-2">
          <motion.p
            className="uppercase text-xl tracking-widest text-[#5651e5]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Education
          </motion.p>
          <motion.h2
            className="py-4 text-gray-700 dark:text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            What I Have Learnt
          </motion.h2>

          {/* BOX 1 - B.Tech */}
          <motion.div
            className="p-6 my-4 rounded-xl shadow-lg shadow-gray-400 dark:shadow-gray-700 bg-white dark:bg-gray-800 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h6 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              🎓 B.Tech in Computer Science & Design
            </h6>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
              Enrolled in a B.Tech program specializing in Computer Science and
            Design, which integrates technical computing skills with innovative
            design concepts. Maintaining a strong <b>CGPA of 8.3</b>, reflecting
            consistent academic excellence and commitment to the field. Studying
            at Madhav Institute of Technology and Science, a reputed institution
            recognized for its high standards in engineering and technology
            education.
            </p>
          </motion.div>

          {/* BOX 2 - AISSCE */}
          <motion.div
            className="p-6 my-4 rounded-xl shadow-lg shadow-gray-400 dark:shadow-gray-700 bg-white dark:bg-gray-800 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h6 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              🏫 AISSCE (Class XII) – 86.2%
            </h6>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
              Jawahar Navodaya Vidyalaya, Amarkantaka, A Beacon of Academic
            Excellence Nestled amidst the picturesque hills of Amarkantaka,
            Madhya Pradesh, <b>Jawahar Navodaya Vidyalaya</b> stands as a testament to
            the power of education in transforming lives. In the academic year
            2019-20, Jawahar Navodaya Vidyalaya, Amarkantaka, set a new
            benchmark by achieving an outstanding <b>AISSCE (Class XII) result of
            86.2%</b>. This remarkable feat is a testament to the dedication of the
            school's faculty, the commitment of its students, and the unwavering
            support of the school administration.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Education;
