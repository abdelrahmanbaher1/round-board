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
import TaskList from "@/components/TaskList";
import Link from "next/link";

type Props = {};

const page = (props: Props) => {
  const { isDrawerOpen, isMobile } = useAppContext();

  const { userInfo, teams, id: OrgId } = ORGANIZATIONS;

  const [selectedProject, setSelectedProject] = useState<TProject>(PROJECTS[0]);
  const toDo_Tasks = TASKS.filter((task) => task.status == "TO_DO");

  const readyForReviewTasks = TASKS.filter(
    (task) => task.status == "READY_FOR_REVIEW"
  );

  return (
    <main className={clsx("pl-24 pt-12 pr-12", { "pl-64": isDrawerOpen })}>
      <div className="flex justify-between mb-7">
        <h1 className="text-2xl text-black">Dashboard</h1>
        <BellIcon width={30} height={30} color="black" />
      </div>
      <Divider />
      <div className="flex flex-col sm:flex-row">
        <div className="w-full md:w-2/3">
          <div className="bg-indigo-100 w-full h-[172px] mt-10 w-full p-8 flex justify-between">
            <div>
              <h2 className="text-xl text-gray-700">
                Welcome Back , {userInfo.fullName}
              </h2>
              <p className="mt-2 pl-1 text-gray-700 max-w-full ">
                In <strong>{selectedProject?.name}</strong> you have{" "}
                <strong>{toDo_Tasks.length}</strong> tasks to accomplish and{" "}
                <strong>{readyForReviewTasks.length} </strong>reviews left in
                your current iteration.{" "}
              </p>
            </div>
            {!isMobile && <Image src={dashboardIcon} alt="dashboardIcon" />}
          </div>
          <div>
            <h3 className="mt-10 mb-10">Favorite Projects </h3>
            <ul className="flex gap-4 overflow-scroll md:flex-wrap md:gap-12">
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
        <div className="mt-10 mb-10 w-full md:w-1/3 overflow-hidden p-3">
          <span className="text-xl text-blue-500 mb-10 flex items-center justify-between">
            {selectedProject?.name}
            <Link
              href={`/${OrgId}/${selectedProject.id}`}
              className="text-sm text-slate-500 flex items-center gap-2 hover:cursor-pointer hover:text-blue-500"
            >
              {" "}
              Go To Project <ArrowRightIcon width={20} height={20} />
            </Link>
          </span>
          <div className="flex flex-col gap-5">
            <TaskList tasks={toDo_Tasks} title="TODOS" />
            <TaskList tasks={readyForReviewTasks} title="Pending Reviews" />
          </div>

          {/* {JSON.stringify(TASKS)}
           */}
        </div>
      </div>
    </main>
  );
};

export default page;
