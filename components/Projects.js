import React from "react";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects">
      <div className="w-full">
        <div className="max-w-[1240px] mx-auto px-2 py-16">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            Projects
          </p>
          <h2 className="py-4">What I've Built</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#7d9ce1]">
              <img
                className="h-[100%] w-[100%] rounded-xl group-hover:opacity-10"
                src="/assets/projects/Ecommerce.jfif"
                alt="Ecommerce Image"
              />
              <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-2xl text-white tracking-wider text-center">
                  Elegant
                </h3>
                <p className="pb-4 pt-2 text-white text-center">Next Js</p>
                <a href="/elegant">
                  <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                    More Info
                  </p>
                </a>
              </div>
            </div>
            <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#7d9ce1]">
              <img
                className="h-[100%] w-[100%] rounded-xl group-hover:opacity-10"
                src="/assets/projects/jnv.jfif"
                alt="Ecommerce Image"
              />
              <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-2xl text-white tracking-wider text-center">
                  School Admission Project
                </h3>
                <p className="pb-4 pt-2 text-white text-center">PHP</p>
                <a href="/school">
                  <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                    More Info
                  </p>
                </a>
              </div>
            </div>
            <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#7d9ce1]">
              <img
                className="h-[100%] w-[100%] rounded-xl group-hover:opacity-10"
                src="/assets/projects/frontend.jfif"
                alt="Ecommerce Image"
              />
              <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-2xl text-white tracking-wider text-center">
                  Front-end Project
                </h3>
                <p className="pb-4 pt-2 text-white text-center">Nextjs</p>
                <a href="/bookmark">
                  <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                    More Info
                  </p>
                </a>
              </div>
            </div>
            <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#7d9ce1]">
              <img
                className="h-[100%] w-[100%] rounded-xl group-hover:opacity-10"
                src="/assets/projects/Model.jfif"
                alt="Ecommerce Image"
              />
              <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-2xl text-white tracking-wider text-center">
                  Heart Disease Predictor
                </h3>
                <p className="pb-4 pt-2 text-white text-center">Python</p>
                <a href="/heart">
                  <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                    More Info
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
