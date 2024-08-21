import { TTask } from "@/tmpData";
import React from "react";
import TaskPriority from "./TaskPriority";
import { Avatar, Tooltip } from "@mui/material";
import TaskType from "./TaskType";

const TaskCard = ({
  task,
  onDragStart,
  onClick,
}: {
  task: TTask;
  onDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
  onClick: () => void;
}) => {
  const { id, type, priority, status, title, assignee, module } = task;
  const { thumbPicture, fullName, id: assigneeId } = assignee;

  const renderModule = () => {
    return (
      <div
        style={{ backgroundColor: module.color }}
        className="max-w-fit text-white p-1.5 text-xs rounded-md font-light"
      >
        {module.name}
      </div>
    );
  };

  return (
    <div
      className="bg-white w-[284px] min-h-[105px] p-2.5 rounded-md mb-2 text-sm  hover:cursor-pointer hover:shadow-xl flex flex-col gap-3"
      draggable
      onDragStart={onDragStart}
      onClick={onClick}
    >
      <div className="flex flex-row  font-semibold  items-center justify-between">
        <div className="flex items-center gap-2">
          <TaskPriority priority={priority} />
          {id.slice(0, 5)}
        </div>
        {renderModule()}
      </div>
      <div>{title}</div>
      <div className="flex gap-2 items-center">
        <Tooltip title={fullName} placement="top">
          <Avatar
            alt="Member Avatar"
            key={assignee.id}
            src={thumbPicture?.link}
            sx={{ width: 20, height: 20 }}
          />
        </Tooltip>
        <TaskType type={type} />
      </div>
    </div>
  );
};

export default TaskCard;
