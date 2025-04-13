import React from "react";
import Link from "next/link";
const About = () => {
  return (
    <div id="about" className="w-full p-2 flex items-center mt-24">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4 text-gray-700 dark:text-gray-600">Who I Am</h2>
          <p className="py-2 text-gray-700 dark:text-gray-500">
            My journey into the world of web development began with a profound
            fascination for the intersection of design and code. Over the years,
            I've delved into the intricacies of both front-end and back-end
            development, finding joy in mastering languages and frameworks that
            power the web.
          </p>
          <p className="py-2 text-gray-600 dark:text-gray-500">
            On the front-end, I'm well-versed in HTML, CSS, Tailwind CSS and JavaScript,
            utilizing modern frameworks like React , Next to create
            intuitive, responsive, and visually appealing interfaces. I'm
            passionate about user-centric design, ensuring seamless interactions
            and accessibility across devices. When it comes to the back-end, I
            thrive in architecting robust server-side solutions. I've worked
            extensively with Node.js, Express, Nextjs and various databases such as
            MongoDB, MySQL, building scalable and efficient
            applications.
          </p>
          <p className="py-2 text-gray-600 dark:text-gray-500">
          I see every project as an opportunity to innovate and solve real-world challenges. From optimizing performance and implementing secure authentication systems to integrating APIs and exploring emerging technologies, I love diving deep into the technical intricacies to deliver impactful solutions.I'm not just a developer; I'm a collaborator eager to work with like-minded individuals and businesses. Whether it's transforming ideas into reality, contributing to a team project, or taking on new challenges – I'm always excited to explore new opportunities and make a difference through technology.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer dark:text-blue-500">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-xl flex items-center justify-center p-4 hover-scale-effect">
          <img src="/assets/about.avif" className="rounded-xl" alt="About" />
        </div>
      </div>
    </div>
  );
};

export default About;
