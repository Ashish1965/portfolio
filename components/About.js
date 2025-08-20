import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
  // Variants for container and staggered children
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  const imageHover = {
    scale: 1.05,
    boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  };

  const linkHover = {
    scale: 1.05,
    color: "#5651e5",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  };

  return (
    <section id="about" className="w-full p-2 flex items-center mt-24">
      <motion.div
        className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Text Section */}
        <motion.div className="col-span-2" variants={containerVariants}>
          <motion.p className="uppercase text-xl tracking-widest text-[#5651e5]" variants={itemVariants}>
            About
          </motion.p>
          <motion.h2 className="py-4 text-gray-700 dark:text-gray-600" variants={itemVariants}>
            Who I Am
          </motion.h2>
          <motion.p className="py-2 text-gray-600 dark:text-gray-500" variants={itemVariants}>
            My journey into the world of web development began with a profound fascination for the intersection of design and code. Over the years, I've delved into the intricacies of both front-end and back-end development, finding joy in mastering languages and frameworks that power the web.
          </motion.p>
          <motion.p className="py-2 text-gray-600 dark:text-gray-500" variants={itemVariants}>
            On the front-end, I'm well-versed in HTML, CSS, Tailwind CSS, and JavaScript, utilizing modern frameworks like React and Next.js to create intuitive, responsive, and visually appealing interfaces. I'm passionate about user-centric design, ensuring seamless interactions and accessibility across devices. On the back-end, I thrive in architecting robust server-side solutions, working extensively with Node.js, Express, Next.js, and databases such as MongoDB and MySQL to build scalable and efficient applications.
          </motion.p>
          <motion.p className="py-2 text-gray-600 dark:text-gray-500" variants={itemVariants}>
            I see every project as an opportunity to innovate and solve real-world challenges. From optimizing performance and implementing secure authentication systems to integrating APIs and exploring emerging technologies, I love diving deep into technical intricacies to deliver impactful solutions. I'm not just a developer; I'm a collaborator eager to work with like-minded individuals and businesses.
          </motion.p>
          <Link href="/#projects">
            <motion.p 
              className="py-2 text-gray-600 underline cursor-pointer dark:text-blue-500"
              whileHover={linkHover}
              variants={itemVariants}
            >
              Check out some of my latest projects.
            </motion.p>
          </Link>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full h-auto m-auto shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-xl flex items-center justify-center p-4 cursor-pointer"
          whileHover={imageHover}
        >
          <img
            src="/assets/about.avif"
            className="rounded-xl"
            alt="About"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
