import React, { useState } from "react";
import { TObjective } from "./modules/Objectives";
import TaskPriority from "./TaskPriority";
import { Avatar, AvatarGroup, Tooltip } from "@mui/material";

type TProps = {
  objective: TObjective;
};

const ObjectiveItem = ({ objective }: TProps) => {
  const { id, title, description, priority, status, fullName, checkMarks } =
    objective;

  const renderStatusBadge = () => (
    <div className="w-[130px] h-[32px] bg-zinc-300 rounded-md text-white text-base flex items-center justify-center py-2">
      <>{status === "CLOSED" ? "Done" : "Not Done"}</>
    </div>
  );

  const renderAvatarAssignees = () => (
    <AvatarGroup
      max={4}
      sx={{
        textAlign: "center",
        "&.MuiAvatarGroup-root .MuiAvatar-root": {
          marginLeft: "-2rem",
        },

        "&.MuiAvatarGroup-root .MuiAvatar-root:first-of-type": {
          marginLeft: "0px",
        },
        "&.MuiAvatarGroup-root": {
          flexDirection: "row",
          justifyContent: "center",
        },
      }}
    >
      <Tooltip title="john Doe" placement="top">
        <Avatar
          alt="john Doe"
          src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
        />
      </Tooltip>
      <Tooltip title={fullName} placement="top">
        <Avatar src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" />
      </Tooltip>
      <Tooltip title="Abdelrahman Baher" placement="top">
        <Avatar
          alt="Cindy Baker"
          src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
        />
      </Tooltip>
    </AvatarGroup>
  );
  return (
    <div className="flex items-center gap-4">
      <div className="w-[500px] pl-3">{title}</div>
      <div className="w-[155px]">
        <TaskPriority priority={priority} text />
      </div>
      <div className="w-[155px]"> {renderStatusBadge()}</div>
      <div className="w-[155px] pl-4">{renderAvatarAssignees()}</div>
      <div className="w-[155px] pl-4">{description}</div>
      <div className="w-[155px] pl-5">{`${checkMarks.length}/10`}</div>
    </div>
  );
};

export default ObjectiveItem;
