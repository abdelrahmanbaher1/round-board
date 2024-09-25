import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { TTask } from "@/tmpData";
import TaskCard from "./TaskCard";
import Badge from "./Badge";
import clsx from "clsx";
import TaskCardSkeleton from "./Loaders/TaskCardSkeleton";

const DevelopmentTaskList = ({
  title,
  taskCards,
  onTaskDrop,
  status,
  isLoading,
}: {
  title: string;
  taskCards: TTask[];
  status: string;
  isLoading: boolean;
  onTaskDrop: (taskId: string, newStatus: string, hoverIndex: number) => void;
}) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "TASK",
    drop: (item: { id: string }) => {
      if (hoverIndex !== null) {
        const updatedTaskCards = [...taskCards];
        updatedTaskCards.splice(hoverIndex, 0, item as TTask);
      }
      onTaskDrop(item.id, status, hoverIndex as number);
    },
    hover: (item, monitor) => {
      console.log({ item });

      const clientOffset = monitor.getClientOffset();
      const hoverPosition = clientOffset?.y ?? 0;
      const currentCardIndex = findHoveredTaskIndex(hoverPosition);

      if (hoverIndex !== currentCardIndex) {
        setHoverIndex(currentCardIndex);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const findHoveredTaskIndex = (hoverY: number): number | null => {
    let currentTaskIndex = null;

    taskCards.forEach((taskCard, index) => {
      const taskCardElement = document.getElementById(
        `task-card-${taskCard.id}`
      );
      const boundingBox = taskCardElement?.getBoundingClientRect();

      if (
        boundingBox &&
        hoverY >= boundingBox.top &&
        hoverY <= boundingBox.bottom
      ) {
        currentTaskIndex = index;
      }
    });

    return currentTaskIndex;
  };

  const getBackgroundColor = () => {
    if (isOver && canDrop) {
      switch (status) {
        case "TO_DO":
          return "#bfdbfe";
        case "IN_PROGRESS":
          return "#fde68a";
        case "READY_FOR_REVIEW":
          return "#f5d0fe";
        case "ERROR":
          return "#fecdd3";
        case "CLOSED":
          return "#bbf7d0";
      }
    } else if (isOver) {
      return "lightcoral";
    }
    return "";
  };

  if (isLoading)
    return (
      <div className={"bg-gray-100 rounded-md p-2 min-w-[300px]"} ref={drop}>
        <span className="text-sm flex gap-3 items-center py-2 text-gray-700 ml-1.5">
          {title}
          <Badge text={taskCards.length} status={status} />
        </span>
        <ul>
          {[...Array(3)].map((_, index) => (
            <TaskCardSkeleton key={index} />
          ))}
        </ul>
      </div>
    );

  return (
    <div
      ref={drop}
      className={"bg-gray-100 rounded-md p-2 min-w-[300px]"}
      style={{ backgroundColor: getBackgroundColor() }}
    >
      <span className="text-sm flex gap-3 items-center py-2 text-gray-700 ml-1.5">
        {title}
        <Badge text={taskCards.length} status={status} />
      </span>
      <ul>
        {taskCards.map((taskCard, index) => (
          <div
            key={taskCard.id}
            id={`task-card-${taskCard.id}`}
            className={clsx("transition-transform duration-150", {
              "transform -translate-y-1":
                hoverIndex !== null && index < hoverIndex,
              "transform translate-y-1":
                hoverIndex !== null && index > hoverIndex,
            })}
          >
            <TaskCard
              key={taskCard.id}
              task={taskCard}
              onClick={() => console.log("clicked")}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default DevelopmentTaskList;
