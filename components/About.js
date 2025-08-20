import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

<<<<<<< HEAD
const textVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

=======
>>>>>>> portfolio/themeBug
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
<<<<<<< HEAD
    <div id="about" className="w-full p-2 flex items-center mt-24">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        
        {/* LEFT SIDE - TEXT */}
        <motion.div
          className="col-span-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            className="uppercase text-xl tracking-widest text-[#5651e5]"
            variants={textVariant}
            custom={0}
          >
            About
          </motion.p>

          <motion.h2
            className="py-4 text-gray-700 dark:text-gray-600"
            variants={textVariant}
            custom={1}
          >
            Who I Am
          </motion.h2>

          <motion.p
            className="py-2 text-gray-700 dark:text-gray-500"
            variants={textVariant}
            custom={2}
          >
            My journey into the world of web development began with a profound
            fascination for the intersection of design and code. Over the years,
            I've delved into the intricacies of both front-end and back-end
            development, finding joy in mastering languages and frameworks that
            power the web.
          </motion.p>

          <motion.p
            className="py-2 text-gray-600 dark:text-gray-500"
            variants={textVariant}
            custom={3}
          >
            On the front-end, I'm well-versed in HTML, CSS, Tailwind CSS and
            JavaScript, utilizing modern frameworks like React , Next to create
            intuitive, responsive, and visually appealing interfaces. I'm
            passionate about user-centric design, ensuring seamless interactions
            and accessibility across devices. When it comes to the back-end, I
            thrive in architecting robust server-side solutions. I've worked
            extensively with Node.js, Express, Nextjs and various databases such
            as MongoDB, MySQL, building scalable and efficient applications.
          </motion.p>

          <motion.p
            className="py-2 text-gray-600 dark:text-gray-500"
            variants={textVariant}
            custom={4}
          >
            I see every project as an opportunity to innovate and solve
            real-world challenges. From optimizing performance and implementing
            secure authentication systems to integrating APIs and exploring
            emerging technologies, I love diving deep into the technical
            intricacies to deliver impactful solutions. I'm not just a
            developer; I'm a collaborator eager to work with like-minded
            individuals and businesses. Whether it's transforming ideas into
            reality, contributing to a team project, or taking on new challenges
            – I'm always excited to explore new opportunities and make a
            difference through technology.
          </motion.p>

          <motion.div variants={textVariant} custom={5}>
            <Link href="/#projects">
              <p className="py-2 text-gray-600 underline cursor-pointer dark:text-blue-500">
                Check out some of my latest projects.
              </p>
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - IMAGE */}
        <motion.div
          className="w-full h-auto m-auto shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-xl flex items-center justify-center p-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <img src="/assets/about.avif" className="rounded-xl" alt="About" />
        </motion.div>
      </div>
    </div>
=======
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
>>>>>>> portfolio/themeBug
  );
};

export default About;
