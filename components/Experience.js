import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Newgen Software – Software Engineer Intern",
    duration: "Feb 2025 – Present",
    description:
      "Worked on core products such as Omnidocs, IBPS, BAM, BRMS, and NewgenONE. Contributed to backend (Java) and frontend (JavaScript) features, including real-time interfaces that streamlined user interactions.",
  },
  {
    company: "Jobsdoor360 – Software Engineer Intern",
    duration: "Jan 2025 – Feb 2025",
    description:
      "Developed website interface using HTML, EJS, and Firebase. Implemented dynamic rendering, Firebase Authentication, and seamless data handling for secure logins and better user engagement.",
  },
  {
    company: "Bluestock Fintech – Frontend Developer Intern",
    duration: "Jul 2024 – Aug 2024",
    description:
      "Built responsive interfaces using HTML5, CSS3, and JavaScript. Developed fintech dashboards with user-friendly layouts, improving accessibility and usability.",
  },
];

const Experience = () => {
  return (
    <div id="experience" className="w-full py-16 flex items-center">
      <div className="max-w-[1240px] m-auto px-4">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Experience
        </p>
        <h2 className="py-4 text-gray-700 dark:text-gray-300">
          Where I’ve Worked
        </h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-[#5651e5] dark:border-[#888] ml-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-10 ml-6"
            >
              {/* Dot Icon */}
              <span className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-[#5651e5] text-white rounded-full ring-4 ring-white dark:ring-gray-800 shadow-md">
                <Briefcase size={18} />
              </span>

              {/* Card */}
              <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl  transition-transform duration-300">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {exp.company}
                </h4>
                <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-2">
                  {exp.duration}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
