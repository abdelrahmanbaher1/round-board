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
  teamsData: TTeamsData[];
  isOpen: boolean;
  isLoading: boolean;
};

const TeamsList = ({ teamsData, isOpen, isLoading }: TProps) => {
  const expandIcon = isOpen ? <ExpandMore /> : <KeyboardArrowRight />;

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
            <IconButton sx={{ color: "white", p: "0" }}>
              {expandIcon}
            </IconButton>
          </ListItemButton>
        </List>
      ))}
    </Collapse>
  );
};

export default TeamsList;
