import React, { useCallback } from "react";
import { useDrop } from "react-dnd";
import { TTask } from "@/tmpData";
import TaskCard from "./TaskCard";
import TaskModal from "./Modals/TaskModal";
import Badge from "./Badge";
import { Typography } from "@mui/material";

const DevelopmentTaskList = ({
  title,
  taskCards,
  onTaskDrop,
  status,
}: {
  title: string;
  taskCards: TTask[];
  status: string;
  onTaskDrop: (taskId: string, newStatus: string) => void;
}) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "TASK",
    drop: (item: { id: string }) => onTaskDrop(item.id, status),
    canDrop: () => true,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = canDrop && isOver;
  console.log({ taskCards });

  return (
    <div
      ref={drop}
      className={`bg-gray-100 rounded-md p-2 min-w-[300px] ${
        isActive ? "bg-blue-200" : ""
      }`}
    >
      <span className="text-sm flex gap-3 items-center py-2 text-gray-700 ml-1.5">
        {title}
        <Badge text={taskCards.length} status={status} />
      </span>
      <ul>
        {taskCards.map((taskCard) => (
          <TaskCard
            key={taskCard.id}
            task={taskCard}
            onClick={() => console.log("clciked")}
          />
        ))}
      </ul>
    </div>
  );
};

export default DevelopmentTaskList;
