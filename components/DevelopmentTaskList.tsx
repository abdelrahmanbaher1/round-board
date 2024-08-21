"use client";

import { TTask } from "@/tmpData";
import React, { useCallback, useState } from "react";
import TaskCard from "./TaskCard";
import TaskModal from "./Modals/TaskModal";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Badge from "./Badge";
import { Typography } from "@mui/material";

const DevelopmentTaskList = ({
  title,
  taskCards,
  onDrop,
  onDragOver,
  onDragStart,
  TasksStatus,
}: {
  title: string;
  taskCards: TTask[];
  TasksStatus: string;
  onDrop: (taskId: string, newStatus: string) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
}) => {
  const taskCount = taskCards.length;
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskInfo, setTaskInfo] = useState<TTask>({} as TTask);
  const handleModalOpen = (taskInfo: TTask) => {
    setIsModalOpen(true);
    setTaskInfo(taskInfo);
  };
  console.log({ searchParams });

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  const handleOpenModal = (taskCard: TTask) => {
    setIsModalOpen(true);
    setTaskInfo(taskCard);
    router.push(
      pathname +
        "?" +
        createQueryString("issue", taskCard.id) +
        "&" +
        createQueryString("tab", "comments")
    );
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    const params = new URLSearchParams(searchParams.toString());
    params.delete("issue"); // Remove the 'issue' query param
    router.push(pathname);
  };

  return (
    <div
      className="bg-gray-100 rounded-md p-2 min-w-[300px]"
      onDrop={(e) => onDrop(e, title)}
      onDragOver={onDragOver}
    >
      <span className="text-sm flex gap-3 items-center  py-2 text-gray-700 ml-1.5">
        {title}
        <Badge text={taskCount} status={TasksStatus} />{" "}
      </span>
      <ul>
        {taskCards.map((taskCard) => (
          <TaskCard
            task={taskCard}
            key={taskCard.id}
            onDragStart={onDragStart}
            onClick={() => {
              handleOpenModal(taskCard);
            }}
          />
        ))}
      </ul>
      <TaskModal
        isOpen={isModalOpen}
        handleClose={handleCloseModal}
        taskInfo={taskInfo}
      />
    </div>
  );
};

export default DevelopmentTaskList;
