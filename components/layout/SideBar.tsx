"use client";

import React from "react";
import Drawer from "@mui/material/Drawer";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  useTheme,
  useMediaQuery,
  Box,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemButton,
  styled,
  Collapse,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";

import useAppContext from "@/contexts/AppContext";
import {
  ArrowLongDownIcon,
  ArrowLongUpIcon,
  ArrowRightStartOnRectangleIcon,
  Bars3BottomLeftIcon,
  HomeIcon,
  InboxStackIcon,
  StarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { ORGANIZATIONS } from "@/tmpData";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import { Home, People, PeopleAlt, StarBorder } from "@mui/icons-material";
import Link from "next/link";
import { QuestionMarkCircleIcon, UsersIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

type Props = {};

const icons = {
  Home: <HomeIcon height={30} width={30} color="white" />,
  Avatar: <UserCircleIcon height={30} width={30} color="white" />,
  users: <UsersIcon height={30} width={30} color="white" />,
  signOut: (
    <ArrowRightStartOnRectangleIcon height={30} width={30} color="white" />
  ),
  information: <QuestionMarkCircleIcon height={30} width={30} color="white" />,
};

const BOTTOM_LINKS = [
  {
    tooltip: {
      title: "Account",
    },
    href: `/profile`,
  },
];
const SideBar = (props: Props) => {
  const { isDrawerOpen, setIsDrawerOpen } = useAppContext();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { id, key, displayName, userInfo, teams, picture } = ORGANIZATIONS;
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <aside id="navbar">
      <Box>
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          variant="permanent"
          onClose={setIsDrawerOpen}
          PaperProps={{
            sx: {
              backgroundColor: "#31394e",
              gap: "15px",
              padding: "20px",
              width: isDrawerOpen ? "220px" : "72px",
              alignItems: "center",
              transition: "width 0.3s ease-in-out",
              color: "white",
              display: "flex",
              justifyContent: "space-between",
            },
          }}
        >
          <div className="flex justify-between w-full items-center justify-around">
            {isDrawerOpen && <>{displayName}</>}
            <Bars3BottomLeftIcon
              width={30}
              height={30}
              color="white"
              className="hover:cursor-pointer "
              onClick={setIsDrawerOpen}
            />
          </div>

          {/* organization */}

          {/* Dashboard */}
          <Link
            href="/dashboard"
            className="flex gap-3 justify-center items-center hover:bg-gray-500 hover:cursor-pointer w-full"
          >
            <HomeIcon color="white" width={30} height={30} />
            {isDrawerOpen && <span>Dashboard</span>}
          </Link>
          <Divider className="w-full bg-white p-0" />
          <div
            className="flex gap-3 justify-center items-center hover:bg-gray-500 hover:cursor-pointer w-full"
            onClick={() => setOpen(!open)}
          >
            <PeopleAlt />

            {/* {isDrawerOpen && (
              <Collapse in={open}>
                {" "}
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Teams" />
                  </ListItemButton>
                </List>
              </Collapse>
            )} */}
          </div>

          <List
            className={clsx(
              "flex gap-2 w-full justify-between hover:cursor-pointer",
              {
                "flex-row flex-row-reverse": isDrawerOpen,
                "flex-col": !isDrawerOpen,
              }
            )}
          >
            <Tooltip title="Sign Out" placement="top">
              <Link href={`/profile/${id}`}>{icons.signOut}</Link>
            </Tooltip>

            <Link href="/dashboard">{icons.information}</Link>

            <Tooltip title="Account" placement="top">
              <Link href={`/profile/${id}`}>{icons.Avatar}</Link>
            </Tooltip>
          </List>
        </Drawer>
      </Box>
    </aside>
  );
};

export default SideBar;

//  <ListItemButton onClick={handleClick}>
//               <ListItemIcon>
//                 <InboxStackIcon width={30} height={30} />
//               </ListItemIcon>
//               <ListItemText primary="Inbox" />
//               {open ? <ArrowLongUpIcon /> : <ArrowLongDownIcon />}
//             </ListItemButton>
//             <Collapse in={open} timeout="auto" unmountOnExit>
//               <List component="div" disablePadding>
//                 <ListItemButton sx={{ pl: 4 }}>
//                   <ListItemIcon>
//                     <StarIcon />
//                   </ListItemIcon>
//                   <ListItemText primary="Starred" />
//                 </ListItemButton>
//               </List>
//             </Collapse>
