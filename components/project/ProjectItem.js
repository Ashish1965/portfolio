import React from "react";

const ProjectItem = (props) => {
    const {imageUrl , title , language , link} = props;
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#7d9ce1]">
      <img
        className="h-[100%] w-[100%] rounded-xl group-hover:opacity-10"
        src={imageUrl}
        alt="Ecommerce Image"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{language}</p>
        <a href={link}>
          <p className="px-4 text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
