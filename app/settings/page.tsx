"use client";

import MembersList from "@/core/components/MembersList";
import UserInfo from "@/core/components/UserInfo";
import useAppContext from "@/core/contexts/AppContext";
import { BellIcon } from "@heroicons/react/24/outline";
import { Divider } from "@mui/material";
import clsx from "clsx";
import React, { useState } from "react";

type Props = {};

const page = (props: Props) => {
  const { isDrawerOpen, setIsDrawerOpen, isMobile } = useAppContext();
  const [selectedTab, setSelectedTab] = useState<"info" | "members">("info");

  return (
    <main className={clsx("pl-24 pt-12 pr-12", { "pl-64": isDrawerOpen })}>
      <div className="flex justify-between mb-7">
        <h1 className="text-2xl text-black">Space Settings</h1>
        <BellIcon width={30} height={30} color="black" />
      </div>
      <Divider />
      <div className="flex mt-10 ">
        <div className="w-1/4">
          <h3>Space Settings</h3>
          <div className="pl-3 flex flex-col mt-5 gap-8 text-slate-500 text-sm">
            <div
              className={clsx("hover:cursor-pointer", {
                "text-blue-500": selectedTab === "info",
              })}
              onClick={() => setSelectedTab("info")}
            >
              Info
            </div>
            <div
              className={clsx("hover:cursor-pointer", {
                "text-blue-500": selectedTab === "members",
              })}
              onClick={() => setSelectedTab("members")}
            >
              Members
            </div>
          </div>
        </div>
        <div className="w-3/4 text-xl ">
          {selectedTab === "info" ? <UserInfo /> : <MembersList />}
        </div>
      </div>
    </main>
  );
};

export default page;
