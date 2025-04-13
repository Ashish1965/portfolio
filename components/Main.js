import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ThemeToggle from "./ThememToggle";
const Main = () => {
  return (
    <div
      id="home"
      className="w-full text-center mt-40 lg:mt-12"
    >
      {/* <div className="absolute flex items-end justify-end mt-14 ml-5">
      <ThemeToggle />
      </div> */}
      <div className="fixed top-24 right-8 z-10">
      <ThemeToggle />
      </div>
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          <img
            src="/assets/promo.jpeg"
            alt=""
            className="md:mt-36 rounded-[100%] h-64 w-64"
          />
          <p className="mt-4 uppercase text-sm tracking-widest text-gray-700 dark:text-gray-600">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700 dark:text-gray-600">
            Hi, I'm <span className="text-[#5651e5]">Ashish</span>
          </h1>
          <h1 className="py-2 text-gray-700 dark:text-gray-600">
            A Full-Stack Web Developer
          </h1>
          <p className="py-4 text-gray-700 max-w-[70%] mx-auto dark:text-gray-500">
            A passionate Full Stack Web Developer dedicated to crafting dynamic
            and user-centric digital experiences. With a blend of creativity and
            technical expertise, I thrive on bringing ideas to life through
            innovative web solutions.I'm on a perpetual journey of exploring the
            realms of web development, constantly seeking to merge the artistry
            of design with the precision of code. My love for problem-solving
            and the ever-evolving nature of technology fuels my enthusiasm to
            create robust and elegant web applications.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link href="https://www.linkedin.com/in/ashish-narawariya-7536b6242/">
              <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-6 cursor-pointer hover-scale-effect ">
                <FaLinkedin className="dark:bg-gray-500" />
              </div>
            </Link>
            <Link href="https://github.com/Ashish1965/">
              <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-6 cursor-pointer hover-scale-effect">
                <FaGithub className="dark:bg-gray-500" />
              </div>
            </Link>

            <Link href="https://www.instagram.com/ashishnarawariya/">
              <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-6 cursor-pointer hover-scale-effect">
                <FaInstagram className="dark:bg-gray-500" />
              </div>
            </Link>
            <Link href="https://x.com/AshishNara33521/">
              <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-6 cursor-pointer hover-scale-effect">
                <FaXTwitter className="dark:bg-gray-500" />
              </div>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Main;
