import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/skill/Skills";
import Projects from "@/components/project/Projects";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import React from "react";
import Experience from "@/components/Experience";



const Home = () => {
  return (
      
    <div className="flex flex-col gap-32 md:gap-12 dark:bg-gray-800">
      <Main />
      <About />
      <Education />
      <Experience/>
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
