import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ThemeToggle from "./ThememToggle";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <div id="home" className="w-full text-center mt-40 lg:mt-12">
      {/* Theme Toggle */}
      <div className="fixed top-24 right-8 z-10">
        <ThemeToggle />
      </div>

      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          {/* Profile Image with Animation */}
          <motion.img
            src="/assets/promo.jpeg"
            alt="profile"
            className="md:mt-36 rounded-full h-64 w-64 shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          />

          {/* Subtitle */}
          <motion.p
            className="mt-4 uppercase text-sm tracking-widest text-gray-700 dark:text-gray-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            LET&apos;S BUILD SOMETHING TOGETHER
          </motion.p>

          {/* Title */}
          <motion.h1
            className="py-4 text-gray-700 dark:text-gray-600 text-3xl sm:text-4xl font-bold"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Hi, I&apos;m <span className="text-[#5651e5]">Ashish</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h1
            className="py-2 text-gray-700 dark:text-gray-600 text-2xl sm:text-3xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            A Full-Stack Web Developer
          </motion.h1>

          {/* Description */}
          <motion.p
            className="py-4 text-gray-700 max-w-[70%] mx-auto dark:text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            A passionate Full Stack Web Developer dedicated to crafting dynamic
            and user-centric digital experiences. With a blend of creativity and
            technical expertise, I thrive on bringing ideas to life through
            innovative web solutions. I&apos;m on a perpetual journey of exploring
            the realms of web development, constantly seeking to merge the
            artistry of design with the precision of code.
          </motion.p>

          {/* Social Icons with Animation */}
          <motion.div
            className="flex items-center justify-between max-w-[330px] m-auto py-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <Link href="https://www.linkedin.com/in/ashish-narawariya-7536b6242/">
              <motion.div
                className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-6 cursor-pointer hover-scale-effect"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin className="dark:bg-gray-500" />
              </motion.div>
            </Link>

            <Link href="https://github.com/Ashish1965/">
              <motion.div
                className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-6 cursor-pointer hover-scale-effect"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub className="dark:bg-gray-500" />
              </motion.div>
            </Link>

            <Link href="https://www.instagram.com/ashishnarawariya/">
              <motion.div
                className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-6 cursor-pointer hover-scale-effect"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram className="dark:bg-gray-500" />
              </motion.div>
            </Link>

            <Link href="https://x.com/AshishNara33521/">
              <motion.div
                className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-6 cursor-pointer hover-scale-effect"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaXTwitter className="dark:bg-gray-500" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Main;
