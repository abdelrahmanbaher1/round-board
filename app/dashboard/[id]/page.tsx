"use client";

import useAppContext from "@/core/contexts/AppContext";
import { ArrowRightIcon, BellIcon } from "@heroicons/react/24/outline";
import { Divider } from "@mui/material";
import clsx from "clsx";
import Image from "next/image";
import dashboardIcon from "@/core/assets/svgs/user-laptop.svg";
import ProjectCard from "@/core/components/ProjectCard";
import { useState } from "react";
import TaskList from "@/core/components/TaskList";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { REACT_QUERY_KEYS } from "@/core/lib/constants";
import { getApiInstance } from "@/core/server/api";
import DashBoardSkelton from "@/core/components/Loaders/DashBoardSkelton";
import { TProject, TTicket } from "@/core/server/definations";

type TProps = {
  params: { id: string };
};

const Page = ({ params }: TProps) => {
  const { isDrawerOpen, isMobile, setProjectId } = useAppContext();

  const [selectedProject, setSelectedProject] = useState<TProject>(
    {} as TProject
  );
  const userId = document.cookie.split(";")[1].split("=")[1];

  const { data, isLoading, isFetched, isError } = useQuery({
    queryKey: [REACT_QUERY_KEYS.GET_ORGANIZATION_DATA, params.id],
    queryFn: () => getApiInstance().organization.getOrganization(params.id),
  });
  const {
    data: projectData,
    isLoading: isProjectDataLoading,
    isFetched: isProjectDataFetched,
  } = useQuery({
    queryKey: [REACT_QUERY_KEYS.GET_TICKETS, selectedProject.id],
    queryFn: () =>
      getApiInstance().ticket.getTicketsForProject(
        selectedProject.id,
        userId,
        undefined,
        false
      ),
  });

  let TodoTasks: TTicket[] = [];
  let ReadyForReviewTasks: TTicket[] = [];
  if (isProjectDataFetched) {
    TodoTasks = (projectData as TTicket[]).filter(
      (ticket) => ticket.status === "OPEN"
    );

    ReadyForReviewTasks = (projectData as TTicket[]).filter(
      (ticket) => ticket.status === "READY_FOR_REVIEW"
    );
  }

  if (isLoading) return <DashBoardSkelton />;

  const { projects } = data.data[0];

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
              <h2 className="text-xl text-gray-700">Welcome Back,</h2>
              <p className="mt-2 pl-1 text-gray-700 max-w-full">
                In <strong>{selectedProject?.name}</strong> you have{" "}
                <strong>{TodoTasks.length}</strong> tasks to accomplish and{" "}
                <strong>{ReadyForReviewTasks.length}</strong> reviews left in
                your current iteration.
              </p>
            </div>
            {!isMobile && <Image src={dashboardIcon} alt="dashboardIcon" />}
          </div>
          <div>
            <h3 className="mt-10 mb-10">Favorite Projects</h3>
            <ul className="flex gap-4 overflow-scroll md:flex-wrap md:gap-12">
              {((projects as TProject[]) ?? []).map((project: TProject) => (
                <li
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                >
                  <ProjectCard
                    project={project}
                    selected={selectedProject.id === project.id}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 mb-10 w-full md:w-1/3 overflow-hidden p-3">
          <span className="text-xl text-blue-500 mb-10 flex items-center justify-between">
            {selectedProject?.name}
            {selectedProject?.id && (
              <Link
                href={`/${params.id}/${selectedProject?.id}`}
                className="text-sm text-slate-500 flex items-center gap-2 hover:cursor-pointer hover:text-blue-500"
                onClick={() => {
                  console.log({ selectedProject });
                  setProjectId(selectedProject?.id);
                }}
              >
                Go To Project <ArrowRightIcon width={20} height={20} />
              </Link>
            )}
          </span>
          <div className="flex flex-col gap-5">
            <TaskList
              tasks={TodoTasks}
              title="TODOS"
              isLoading={isProjectDataLoading}
            />
            <TaskList
              tasks={ReadyForReviewTasks}
              title="Pending Reviews"
              isLoading={isProjectDataLoading}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
