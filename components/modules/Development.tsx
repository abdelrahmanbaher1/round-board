"use client";

import React, { useState } from "react";
import TaskCard from "../TaskCard";
import { TASKS, TTask } from "@/tmpData";
import DevelopmentTaskList from "../DevelopmentTaskList";
import { useSearchParams } from "next/navigation";

type Props = {};

const TASK_STATUS = [
  {
    title: "To Do",
    status: "TO_DO",
  },

  {
    title: "In Progress",
    status: "IN_PROGRESS",
  },
  {
    title: "Ready For Review",
    status: "READY_FOR_REVIEW",
  },

  {
    title: "Error",
    status: "ERROR",
  },
  {
    title: "Closed",
    status: "CLOSED",
  },
];

const Development = (props: Props) => {
  const searchParams = useSearchParams();
  console.log({ searchParams });

  const [tasks, setTasks] = useState<TTask[]>(TASKS);

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    newStatus: string
  ) => {
    event.preventDefault();
    const taskId = event.dataTransfer.getData("text/plain");

    setTasks((prevTasks) => {
      const taskToMove = prevTasks.find((task) => task.id === taskId);
      if (!taskToMove) return prevTasks;

      const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
      const updatedTask = { ...taskToMove, status: newStatus };
      return [...updatedTasks, updatedTask];
    });
  };
  const sortedTasks = tasks.sort((a, b) => {
    const priorityOrder = { URGENT: 1, HIGH: 2, MEDIUM: 3, LOW: 4 };
    return (priorityOrder[a.priority] || 5) - (priorityOrder[b.priority] || 5);
  });

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("text/plain", event.currentTarget.id);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <ul className="flex mt-5 gap-3">
      {TASK_STATUS.map((task) => (
        <DevelopmentTaskList
          title={task.title}
          taskCards={sortedTasks.filter(
            (task2) => task2.status === task.status
          )}
          key={task.status}
          onDrop={(e) => handleDrop(e, task.status)}
          onDragOver={handleDragOver}
          onDragStart={handleDragStart}
          TasksStatus={task.status}
        />
      ))}
    </ul>
  );
};

export default Development;
