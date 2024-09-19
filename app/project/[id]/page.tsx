"use client";

import ModulesRenderer from "@/core/components/ModulesRenderer";
import useAppContext from "@/core/contexts/AppContext";
import { PROJECTS, TProject } from "@/tmpData";
import { BellIcon } from "@heroicons/react/24/outline";
import { Divider } from "@mui/material";
import clsx from "clsx";
import React from "react";

type TProps = {
  params: { id: string };
};

const page = ({ params }: TProps) => {
  console.log(params.id);
  const { isDrawerOpen, isMobile } = useAppContext();

  const project: TProject = PROJECTS.find(
    (project) => project.id === params.id
  );
  return (
    <main className={clsx("pl-24 pt-12 pr-12", { "pl-64": isDrawerOpen })}>
      <div className="flex justify-between mb-7">
        <h1 className="text-2xl text-black">{project.name}</h1>
        <BellIcon width={30} height={30} color="black" />
      </div>
    </main>
  );
};

export default page;
