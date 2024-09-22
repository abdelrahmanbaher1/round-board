"use client";

import SideBar from "@/core/components/SideBar";
import { AppContextProvider } from "@/core/contexts/AppContext";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import {
  MutationCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { usePathname } from "next/navigation";
import React from "react";

type TProps = {
  children: React.ReactNode;
};

const LayoutClient = ({ children }: TProps) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
        staleTime: 1000,
      },
    },
    mutationCache: new MutationCache({
      onError: (error) => {
        reportError(error);
      },
    }),
  });

  const pathname = usePathname();

  const currentPage = pathname.split("/")[1];

  const showSideBar = ![
    "signup",
    "login",
    "forgotPassword",
    "company-sign-up",
  ].includes(currentPage);

  return (
    <AppContextProvider>
      <AppRouterCacheProvider options={{ key: "css" }}>
        <QueryClientProvider client={queryClient}>
          <DndProvider backend={HTML5Backend}>
            {showSideBar && <SideBar />}
            {children}
          </DndProvider>
        </QueryClientProvider>
      </AppRouterCacheProvider>
    </AppContextProvider>
  );
};

export default LayoutClient;
