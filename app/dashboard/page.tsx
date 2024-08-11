"use client";

import useAppContext from "@/contexts/AppContext";
import { ORGANIZATIONS, PROJECTS, TASKS, TProject } from "@/tmpData";
import { ArrowRightIcon, BellIcon } from "@heroicons/react/24/outline";
import { Divider } from "@mui/material";
import clsx from "clsx";
import Image from "next/image";
import dashboardIcon from "@/core/icons/dashboard1.svg";
import ProjectCard from "@/components/ProjectCard";
import { useState } from "react";
import urget from "@/core/icons";
import TaskList from "@/components/TaskList";

type Props = {};

const page = (props: Props) => {
  const { isDrawerOpen } = useAppContext();
  const { userInfo, teams } = ORGANIZATIONS;
  const [selectedProject, setSelectedProject] = useState<TProject | null>(
    PROJECTS[0]
  );
  const toDo_Tasks = TASKS.filter((task) => task.status == "TO_DO");
  const readyForReviewTasks = TASKS.filter(
    (task) => task.status == "READY_FOR_REVIEW"
  );

  return (
    <main className={clsx("pl-24 pt-12 pr-24", { "pl-64": isDrawerOpen })}>
      <div className="flex justify-between mb-7">
        <h1 className="text-2xl text-black">Dashboard</h1>
        <BellIcon width={30} height={30} color="black" />
      </div>
      <Divider />
      <div className="flex">
        <div className="w-2/3">
          <div className="bg-indigo-100 w-full h-[172px] mt-10 w-full p-10 flex justify-between">
            <h2 className="text-xl">Welcome Back , {userInfo.fullName}</h2>
            <Image src={dashboardIcon} alt="dashboardIcon" />
          </div>
          <div>
            <h3 className="mt-10 mb-10">Favorite Projects </h3>
            <ul className="flex flex-wrap gap-12">
              {PROJECTS.map((project) => (
                <li
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                >
                  <ProjectCard projectTitle={project.name} isSelected={false} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 mb-10 w-1/3 overflow-hidden p-3">
          <span className="text-xl text-blue-500 mb-10 flex items-center justify-between">
            {selectedProject?.name}
            <span className="text-sm text-slate-500 flex items-center gap-2 hover:cursor-pointer hover:text-blue-500">
              {" "}
              Go To Project <ArrowRightIcon width={20} height={20} />
            </span>
          </span>
          <span>TODOS</span>
          <TaskList />
          {/* {JSON.stringify(TASKS)}
           */}
        </div>
      </div>
    </main>
  );
};

export default page;
