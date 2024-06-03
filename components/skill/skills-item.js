import React from "react";
import Image from "next/image";
const SkillsItem = (props) => {
  const { title, imageUrl } = props;
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 h-auto">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image src={imageUrl} width="64px" height="64px" alt="/" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillsItem;
