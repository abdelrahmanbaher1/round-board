import React from "react";

type TProps = {
  projectTitle: string;
  isSelected: boolean;
};

const ProjectCard = ({ projectTitle, isSelected }: TProps) => {
  const projectInitials = projectTitle
    .split(" ")
    .map((word) =>
      word
        .replace(/[^a-zA-Z]/g, "")
        .charAt(0)
        .toUpperCase()
    )
    .join("");
  return (
    <div className="max-w-[82px] flex flex-col gap-2.5 hover:cursor-pointer hover:bg-gray-200 hover:rounded">
      <div className="w-[80px] h-[80px] flex justify-center items-center p-2 rounded-md bg-red-500 text-white">
        {projectInitials}
      </div>
      <span className="text-slate-500 text-center">{projectTitle}</span>
    </div>
  );
};

export default ProjectCard;
