import React from "react";
import SkillsItem from "./skills-item";

// Import images
import Html from "@/public/assets/skills/html.png";
import Css from "@/public/assets/skills/css.png";
import Github from "@/public/assets/skills/github1.png";
import Javascript from "@/public/assets/skills/javascript.png";
import Mongo from "@/public/assets/skills/mongo.png";
import Nextjs from "@/public/assets/skills/nextjs.png";
import Node from "@/public/assets/skills/node.png";
import Numpy from "@/public/assets/skills/numpy.png";
import Pandas from "@/public/assets/skills/pandas.png";
import Php from "@/public/assets/skills/php.png";
import Python from "@/public/assets/skills/python.png";
import Reactjs from "@/public/assets/skills/react.png";
import Seaborn from "@/public/assets/skills/seaborn.png";
import Sql from "@/public/assets/skills/sql.png";
import Tailwind from "@/public/assets/skills/tailwind.png";
import Express from "@/public/assets/skills/express.png";
import C from "@/public/assets/skills/C.png";
import Flask from "@/public/assets/skills/Flask.png";

// Animation
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div id="skills" className="w-full p-2 mt-24">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4 text-gray-700 dark:text-gray-600">What I Can Do</h2>

        {/* Programming Languages */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-500 mb-4">
            Programming Languages
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <SkillsItem title="C++" imageUrl={C} />
            <SkillsItem title="Python" imageUrl={Python} />
            {/* <SkillsItem title="PHP" imageUrl={Php} /> */}
            <SkillsItem title="Javascript" imageUrl={Javascript} />
          </div>
        </motion.div>

        {/* Markup & Styling */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-500 mb-4">
            Markup & Styling
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <SkillsItem title="Html" imageUrl={Html} />
            <SkillsItem title="CSS" imageUrl={Css} />
            <SkillsItem title="Tailwind" imageUrl={Tailwind} />
          </div>
        </motion.div>

        {/* Frameworks & Libraries */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-500 mb-4">
            Frameworks & Libraries
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <SkillsItem title="React" imageUrl={Reactjs} />
            <SkillsItem title="Next.js" imageUrl={Nextjs} />
            <SkillsItem title="Node.js" imageUrl={Node} />
            <SkillsItem title="Express" imageUrl={Express} />
            <SkillsItem title="Flask" imageUrl={Flask} />
            <SkillsItem title="Numpy" imageUrl={Numpy} />
            <SkillsItem title="Pandas" imageUrl={Pandas} />
            <SkillsItem title="Seaborn" imageUrl={Seaborn} />
          </div>
        </motion.div>

        {/* Databases & Tools */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-500 mb-4">
            Databases & Tools
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <SkillsItem title="MongoDB" imageUrl={Mongo} />
            <SkillsItem title="SQL" imageUrl={Sql} />
            <SkillsItem title="Github" imageUrl={Github} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
