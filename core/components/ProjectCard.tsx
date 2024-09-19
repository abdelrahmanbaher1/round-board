import React from "react";

type TProps = {
  project: { name: string; color: string };
  selected?: boolean;
};

const ProjectCard = ({ project, selected }: TProps) => {
  const { name, color } = project;
  const projectInitials = name
    .split(" ")
    .map((word) =>
      word
        .replace(/[^a-zA-Z]/g, "")
        .charAt(0)
        .toUpperCase()
    )
    .join("");

  return (
    <div
      className={`max-w-[82px] pb-3 flex flex-col gap-2.5 hover:cursor-pointer rounded ${
        selected ? "bg-gray-300" : "bg-white"
      }`}
    >
      <div
        style={{
          backgroundColor: color,
        }}
        className="w-[80px] h-[80px] flex justify-center items-center p-2 rounded-md text-white"
      >
        {projectInitials}
      </div>
      <span className="text-slate-500 text-center">{name}</span>
    </div>
  );
};

export default ProjectCard;
