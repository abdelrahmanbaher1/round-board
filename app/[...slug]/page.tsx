"use client";

import ConferenceIcon from "@/core/assets/icons/ConferenceIcon";
import ModulesRenderer from "@/core/components/ModulesRenderer";
import useAppContext from "@/core/contexts/AppContext";
import { PROJECTS } from "@/tmpData";
import { BellIcon } from "@heroicons/react/24/outline";
import { Divider, Tab, Tabs } from "@mui/material";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import React from "react";

type TProps = {
  params: { slug: [organizationId: string, projectId: string] };
};

const NAV_LINKS = [
  {
    id: "objectives",
    label: "Objectives",
    icon: <ConferenceIcon />,
  },
  {
    id: "backlog",
    label: "Backlog",
  },
  {
    id: "planner",
    label: "Iteration Planner",
  },
  {
    id: "development",
    label: "Development",
  },
  {
    id: "retrospectives",
    label: "Retrospectives",
  },
];

export type TTab =
  | "retrospectives"
  | "objectives"
  | "backlog"
  | "planner"
  | "development";
const Page = ({ params }: TProps) => {
  const router = useRouter();
  const { isDrawerOpen } = useAppContext();

  const [organizationId, projectId, selectedTab] = params.slug;

  if (organizationId === "favicon.ico" || !projectId) router.push("/login");

  if (!selectedTab) {
    const basePath = `/${organizationId}/${projectId}`;
    router.push(`${basePath}/development`);
  }

  const project = PROJECTS.find((project) => project.id === projectId);

  const handleTabChange = (event: React.SyntheticEvent, newValue: TTab) => {
    const basePath = `/${organizationId}/${projectId}`;
    router.push(`${basePath}/${newValue}`);
  };

  return (
    <main className={clsx("pl-24 pt-12 pr-12", { "pl-64": isDrawerOpen })}>
      <div className="flex justify-between ">
        <h1 className="text-2xl text-black flex items-center gap-3">
          {NAV_LINKS.find((link) => link.id === selectedTab)?.label}{" "}
          {NAV_LINKS.find((item) => item.id === selectedTab)?.icon}
        </h1>
        <BellIcon width={30} height={30} color="black" />
      </div>
      <div>
        <Tabs role="tablist" value={selectedTab} onChange={handleTabChange}>
          {NAV_LINKS.map((link, index) => (
            <Tab
              tabIndex={index}
              role="tab"
              id={`navTabs-${index}`}
              onSelect={() => console.log(link.id)}
              value={link.id}
              label={link.label}
              key={link.id}
            />
          ))}
        </Tabs>
        <Divider />
      </div>
      <ModulesRenderer module={selectedTab ?? "development"} />
    </main>
  );
};

export default Page;
