import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Newgen Software – Software Engineer Intern",
    duration: "Feb 2025 – Present",
    description:
<<<<<<< HEAD
      "Worked on core products such as Omnidocs, IBPS, BAM, BRMS, and NewgenONE. Contributed to backend (Java) and frontend (JavaScript) features, including real-time interfaces that streamlined user interactions.",
=======
      " During my internship at Newgen Software, I worked on core products such as Omnidocs,IBPS, BAM, BRMS, and NewgenONE, gaining valuable insights into enterprise content and process automation platforms. My role involved contributing to the backend using Javaand implementing dynamic client-side features using JavaScript. I also participated in creating real-time web interfaces that streamlined user interactions and enhanced customer experience.",
>>>>>>> portfolio/themeBug
  },
  {
    company: "Jobsdoor360 – Software Engineer Intern",
    duration: "Jan 2025 – Feb 2025",
    description:
<<<<<<< HEAD
      "Developed website interface using HTML, EJS, and Firebase. Implemented dynamic rendering, Firebase Authentication, and seamless data handling for secure logins and better user engagement.",
=======
      "At Jobsdoor360, I was responsible for developing the website interface using HTML, EJS, and Firebase. I implemented dynamic rendering to enhance interactivity and user engagement. I worked on both the client and server sides to ensure responsiveness and seamless data handling. The integration with Firebase Authentication helped in managing secure logins and user data efficiently.",
>>>>>>> portfolio/themeBug
  },
  {
    company: "Bluestock Fintech – Frontend Developer Intern",
    duration: "Jul 2024 – Aug 2024",
    description:
<<<<<<< HEAD
      "Built responsive interfaces using HTML5, CSS3, and JavaScript. Developed fintech dashboards with user-friendly layouts, improving accessibility and usability.",
=======
      "As a frontend developer intern at Bluestock Fintech, I built responsive and accessible interfaces using HTML5, CSS3, and JavaScript. I contributed to the development of user-centric fintech dashboards, ensuring intuitive layouts and high usability. This experience helped me understand real-world design principles and gave me practical exposure to front-end development in a fintech environment.",
>>>>>>> portfolio/themeBug
  },
];

const Experience = () => {
  return (
    <div id="experience" className="w-full py-16 flex items-center">
      <div className="max-w-[1240px] m-auto px-4">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Experience
        </p>
<<<<<<< HEAD
        <h2 className="py-4 text-gray-700 dark:text-gray-300">
=======
        <h2 className="py-4 text-gray-700 dark:text-gray-600">
>>>>>>> portfolio/themeBug
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
<<<<<<< HEAD
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {exp.company}
                </h4>
                <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-2">
                  {exp.duration}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
=======
                <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-500">
                  {exp.company}
                </h4>
                <p className="text-sm italic text-gray-700 dark:text-gray-500 mb-2">
                  {exp.duration}
                </p>
                <p className="text-gray-600 dark:text-gray-500">
>>>>>>> portfolio/themeBug
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
