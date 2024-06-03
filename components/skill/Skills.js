import React from "react";
import SkillsItem from "./skills-item";
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


const Skills = () => {
  return (
    <div id="skills" className="w-full p-2 mt-24">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <SkillsItem title="C++" imageUrl={C} />
          <SkillsItem title="Html" imageUrl={Html} />
          <SkillsItem title="CSS" imageUrl={Css} />
          <SkillsItem title="Tailwind" imageUrl={Tailwind} />
          <SkillsItem title="Javascript" imageUrl={Javascript} />
          <SkillsItem title="Node" imageUrl={Node} />
          <SkillsItem title="Express" imageUrl={Express} />
          <SkillsItem title="React" imageUrl={Reactjs} />
          <SkillsItem title="Next" imageUrl={Nextjs} />
          <SkillsItem title="PHP" imageUrl={Php} />
          <SkillsItem title="Mongo" imageUrl={Mongo} />
          <SkillsItem title="SQL" imageUrl={Sql} />
          <SkillsItem title="Github" imageUrl={Github} />
          <SkillsItem title="Python" imageUrl={Python} />
          <SkillsItem title="Numpy" imageUrl={Numpy} />
          <SkillsItem title="Pandas" imageUrl={Pandas} />
          <SkillsItem title="Seaborn" imageUrl={Seaborn} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
