"use client";

import SideBar from "@/components/layout/SideBar";
import { AppContextProvider } from "@/contexts/AppContext";
import React from "react";

type TProps = {
  children: React.ReactNode;
};

const LayoutClient = ({ children }: TProps) => {
  return (
    <div>
      <AppContextProvider>
        <SideBar />
        {children}
      </AppContextProvider>
    </div>
  );
};

export default LayoutClient;
