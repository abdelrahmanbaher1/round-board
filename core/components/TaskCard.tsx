import React from "react";
import { useDrag } from "react-dnd";
import { TTask } from "@/tmpData";
import TaskPriority from "./TaskPriority";
import { Avatar, Tooltip } from "@mui/material";
import TaskType from "./TaskType";

const TaskCard = ({ task, onClick }: { task: TTask; onClick: () => void }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`bg-white w-[284px] min-h-[105px] p-2.5 rounded-md mb-2 text-sm hover:cursor-pointer hover:shadow-xl flex flex-col gap-3 ${
        isDragging ? "opacity-0.5" : ""
      }`}
      onClick={onClick}
    >
      <div className="flex flex-row font-semibold items-center justify-between">
        <div className="flex items-center gap-2">
          <TaskPriority priority={task.priority} />
          {task.id.slice(0, 5)}
        </div>
        <div
          style={{ backgroundColor: task.module.color }}
          className="max-w-fit text-white p-1.5 text-xs rounded-md font-light"
        >
          {task.module.name}
        </div>
      </div>
      <div>{task.title}</div>
      <div className="flex gap-2 items-center">
        <Tooltip title={task.assignee.fullName} placement="top">
          <Avatar
            alt="Member Avatar"
            key={task.assignee.id}
            src={task.assignee.thumbPicture?.link}
            sx={{ width: 20, height: 20 }}
          />
        </Tooltip>
        <TaskType type={task.type} />
      </div>
    </div>
  );
};

export default TaskCard;
