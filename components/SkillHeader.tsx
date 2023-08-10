import React, { FC } from "react";

interface SkillHeaderProps {
  title: string;
  tagline: string;
}

const SkillHeader: FC<SkillHeaderProps> = ({ title, tagline }) => {
  return (
    <div className="bg-lightgrey w-full rounded-xl py-12 px-16">
      <h1 className="font-meche text-4xl">{title}</h1>
      <h2 className="font-meche text-4xl">{tagline}</h2>
    </div>
  );
};

export default SkillHeader;
