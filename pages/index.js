import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/skill/Skills";
import Projects from "@/components/project/Projects";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col gap-32 md:gap-12">
      <Navbar />
      <Main />
      <Education />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
