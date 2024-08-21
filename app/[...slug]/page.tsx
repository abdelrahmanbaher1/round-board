"use client";

import ModulesRenderer from "@/components/ModulesRenderer";
import ToolsBar from "@/components/ToolsBar";
import useAppContext from "@/contexts/AppContext";
import { PROJECTS } from "@/tmpData";
import { BellIcon } from "@heroicons/react/24/outline";
import { Box, Divider, Tab, Tabs } from "@mui/material";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

type TProps = {
  params: { slug: [organizationId: string, projectId: string] };
};

const NAV_LINKS = [
  {
    id: "objectives",
    label: "Objectives",
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

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export type TTab =
  | "retrospectives"
  | "objectives"
  | "backlog"
  | "planner"
  | "development";
const Page = ({ params }: TProps) => {
  const [organizationId, projectId, selectedTab] = params.slug;

  const { isDrawerOpen } = useAppContext();
  const pathname = usePathname();
  const router = useRouter();

  const [value, setValue] = React.useState("1");

  if (!selectedTab) {
    const basePath = `/${organizationId}/${projectId}`;
    router.push(`${basePath}/development`);
  }
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const project = PROJECTS.find((project) => project.id === projectId);

  const handleTabChange = (event: React.SyntheticEvent, newValue: TTab) => {
    const basePath = `/${organizationId}/${projectId}`;
    router.push(`${basePath}/${newValue}`);
  };

  return (
    <main className={clsx("pl-24 pt-12 pr-12", { "pl-64": isDrawerOpen })}>
      <div className="flex justify-between ">
        <h1 className="text-2xl text-black flex items-center">
          {project?.name}
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
      <ToolsBar />
      <ModulesRenderer module={selectedTab ?? "development"} />
    </main>
  );
};

export default Page;
