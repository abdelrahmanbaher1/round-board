"use client";

import {
  Collapse,
  List,
  ListItemButton,
  IconButton,
  Skeleton,
} from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import React, { useState } from "react";
import useAppContext from "@/core/contexts/AppContext";

type TProject = {
  id: string;
  name: string;
  description: string | null;
  isFavorite: boolean;
  teamId: string;
};

type TTeamsData = {
  teams: {
    id: string;
    name: string;
    description: string | null;
    organizationId: string;
  };
  projects: TProject[] | null;
};

type TProps = {
  isTeamsDataSuccess: boolean;
  teamsData: TTeamsData[];
  id: string;
  isOpen: boolean;
  handleClose: () => void;
  handleToggle: () => void;
  isLoading: boolean;
};

const TeamsList = ({
  isTeamsDataSuccess,
  teamsData,
  id,
  isOpen,
  handleClose,
  handleToggle,
  isLoading,
}: TProps) => {
  const [hover, setHover] = useState("");
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [isClicked, setIsClicked] = useState<string[]>([]);
  const expandIcon = isOpen ? <ExpandMore /> : <KeyboardArrowRight />;
  const { isDrawerOpen } = useAppContext();

  const [collapse, setCollapse] = useState<Number[]>([]);

  const handleClick = (clickedIndex: Number) => {
    if (collapse.includes(clickedIndex)) {
      const openCopy = collapse.filter((element) => {
        return element !== clickedIndex;
      });
      setCollapse(openCopy);
    } else {
      const openCopy = [...collapse];
      openCopy.push(clickedIndex);
      setCollapse(openCopy);
    }
  };

  if (isLoading)
    return <Skeleton variant="rectangular" width={210} height={118} />;

  return (
    <Collapse in={isOpen} timeout="auto" unmountOnExit>
      {teamsData.map((item, index) => (
        <List key={item.teams.id} component="div">
          <ListItemButton
            onClick={() => handleClick(index)}
            className="flex items-center justify-around w-full"
          >
            {item.teams.name}
            <IconButton sx={{ color: "white", p: "0" }} onClick={handleToggle}>
              {expandIcon}
            </IconButton>
          </ListItemButton>
        </List>
      ))}
    </Collapse>
  );
};

export default TeamsList;
