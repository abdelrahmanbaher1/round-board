"use client";

import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import { Box, IconButton, List, Skeleton, Tooltip } from "@mui/material";
import useAppContext from "@/core/contexts/AppContext";
import {
  ArrowRightStartOnRectangleIcon,
  Bars3BottomLeftIcon,
  Cog8ToothIcon,
  HomeIcon,
  PlusIcon,
  UserCircleIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import { ExpandMore, PeopleAlt, KeyboardArrowRight } from "@mui/icons-material";
import Link from "next/link";
import clsx from "clsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getApiInstance } from "@/core/server/api";
import { REACT_QUERY_KEYS } from "@/core/lib/constants";
import CustomModal from "./CustomModal";
import TeamCreationForm from "./Dashboard/TeamCreationForm";
import SideBarSkeleton from "./Loaders/SideBarSkeleton";
import TeamsList from "./TeamsList";
import SmallLogo from "@/core/assets/icons/SmallLogo";
import { GetCurrentUserResponse, TError } from "@/core/server/definations";

const IconWrapper = (
  IconComponent: React.ReactNode,
  size: number,
  color: string
) => (
  <IconButton
    sx={{
      ":hover": {
        bgcolor: "grey",
      },
    }}
  >
    {React.cloneElement(IconComponent as React.ReactElement, {
      height: size,
      width: size,
      color,
    })}
  </IconButton>
);
const icons = {
  Home: IconWrapper(<HomeIcon />, 30, "white"),
  Avatar: IconWrapper(<UserCircleIcon />, 30, "white"),
  signOut: IconWrapper(<ArrowRightStartOnRectangleIcon />, 30, "white"),
  information: IconWrapper(<QuestionMarkCircleIcon />, 30, "white"),
  addIcon: IconWrapper(<PlusIcon />, 20, "white"),
  horizontalBars: IconWrapper(<Bars3BottomLeftIcon />, 30, "white"),
  settings: IconWrapper(<Cog8ToothIcon />, 30, "white"),
  teams: IconWrapper(<PeopleAlt />, 30, "white"),
};

const SideBar = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useAppContext();
  const [open, setOpen] = React.useState(true);
  const [isModalOpen, setModalOpen] = useState(false);

  const expandIcon = open ? <ExpandMore /> : <KeyboardArrowRight />;

  const SideBarStyles = {
    backgroundColor: "#31394e",
    padding: "20px",
    fontSize: "14px",
    width: isDrawerOpen ? "220px" : "72px",
    alignItems: "center",
    transition: "width 0.2s ease-in-out",
    color: "white",
    display: "flex",
  };
  const {
    mutate: getTeams,
    data: TeamsData,
    isPending: isTeamsDataPending,
    isSuccess: isTeamsDataSuccess,
    isError: isTeamsDataError,
  } = useMutation({
    mutationFn: () =>
      getApiInstance().team.getTeamsForOrganization(
        userData.data.organizationId
      ),
    onSuccess: (response) => {
      console.log("Mutation success response:", response);
    },
    onError: (error) => {
      console.log({ error });
      console.error("Error getting Teams:", error);
    },
  });

  const {
    data: userData,
    isLoading,
    isError: isUserDataError,
  } = useQuery<GetCurrentUserResponse | TError>({
    queryKey: [REACT_QUERY_KEYS.GET_USER],
    queryFn: () => getApiInstance().user.getCurrentUser(),
  });

  const { mutate, isPending, isError } = useMutation({
    mutationFn: () => getApiInstance().auth.signOut(),
    mutationKey: [REACT_QUERY_KEYS.SIGN_OUT],
    onSuccess: () => {
      window.location.href = "/login";
    },
  });

  if (isLoading) return <SideBarSkeleton />;
  if (isUserDataError || isTeamsDataError || isError) return <>Error</>;

  const userInfo = (userData as GetCurrentUserResponse).data;

  const renderFooterIcons = () => (
    <List
      className={clsx(
        "flex gap-2 w-full justify-between hover:cursor-pointer",
        {
          "flex-row flex-row-reverse": isDrawerOpen,
          "flex-col": !isDrawerOpen,
        }
      )}
    >
      <Tooltip title="Sign Out" placement="top" onClick={() => mutate()}>
        {icons.signOut}
      </Tooltip>

      <Tooltip title="Support" placement="top">
        {icons.information}
      </Tooltip>

      <Tooltip title="Account" placement="top">
        <Link href={`/profile/${userInfo.id}`}>{icons.Avatar}</Link>
      </Tooltip>
    </List>
  );

  const handleToggle = () => setOpen(!open);

  return (
    <aside id="navbar">
      <Drawer
        anchor={"left"}
        open={isDrawerOpen}
        variant="permanent"
        onClose={setIsDrawerOpen}
        PaperProps={{
          sx: SideBarStyles,
        }}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="flex flex-col gap-5">
            <div className="flex  w-full items-center justify-between">
              {isDrawerOpen && <SmallLogo />}
              <div onClick={setIsDrawerOpen}>{icons.horizontalBars}</div>
            </div>

            <Link
              href={`/dashboard/${userInfo.organizationId}`}
              className="flex gap-3 justify-center items-center"
            >
              {icons.Home}
              {isDrawerOpen && <span>Dashboard</span>}
            </Link>
            <Link
              href="/settings"
              className="flex gap-3 justify-center items-center"
            >
              {icons.settings}
              {isDrawerOpen && <>Space Settings</>}
            </Link>

            <List
              sx={{
                borderBottom: "1px solid white",
                borderTop: "1px solid white",
              }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <div className="flex  items-center w-full justify-around">
                <PeopleAlt />
                {isDrawerOpen && <>Teams</>}
                {isDrawerOpen && (
                  <div className="hover:rounded-md flex items-center">
                    <div onClick={() => setModalOpen(true)}>
                      {isDrawerOpen && icons.addIcon}
                    </div>
                    <div
                      className="transition-all hover:bg-gray-700 hover:rounded-md"
                      onClick={() => {
                        !open && getTeams();
                        handleToggle();
                      }}
                    >
                      {expandIcon}
                    </div>
                  </div>
                )}
              </div>
              {isTeamsDataPending ? (
                <div className="flex flex-col gap-2 p-2 ">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Skeleton
                      key={index}
                      variant="rounded"
                      width="100%"
                      height={28}
                      sx={{ bgcolor: "gray" }}
                    />
                  ))}
                </div>
              ) : (
                isTeamsDataSuccess &&
                isDrawerOpen && (
                  <TeamsList
                    isOpen={open}
                    teamsData={TeamsData.data}
                    isLoading={isTeamsDataPending}
                  />
                )
              )}
            </List>
          </div>

          {renderFooterIcons()}
        </div>
      </Drawer>

      <CustomModal isOpen={isModalOpen} handleClose={() => setModalOpen(false)}>
        <TeamCreationForm organizationId={userInfo.organizationId} />
      </CustomModal>
    </aside>
  );
};

export default SideBar;
