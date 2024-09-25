"use client";

import React, { useEffect, useState } from "react";
import DevelopmentTaskList from "../DevelopmentTaskList";
import { TASKS, TTask } from "@/tmpData";
import { useQuery } from "@tanstack/react-query";
import { REACT_QUERY_KEYS } from "@/core/lib/constants";
import useAppContext from "@/core/contexts/AppContext";
import { getApiInstance } from "@/core/server/api";

const TASK_STATUS = [
  { title: "To Do", status: "TO_DO" },
  { title: "In Progress", status: "IN_PROGRESS" },
  { title: "Ready For Review", status: "READY_FOR_REVIEW" },
  { title: "Error", status: "ERROR" },
  { title: "Closed", status: "CLOSED" },
];

const Development = () => {
  const { projectId } = useAppContext();

  const userId = document.cookie.split(";")[1].split("=")[1];

  const {
    data: projectData,
    isLoading: isProjectDataLoading,
    isFetched: isProjectDataFetched,
    isSuccess,
  } = useQuery({
    queryKey: [REACT_QUERY_KEYS.GET_TICKETS, projectId],
    queryFn: () =>
      getApiInstance().ticket.getTicketsForProject(
        projectId,
        userId,
        undefined,
        false
      ),
  });
  const [tasks, setTasks] = useState<TTask[]>(TASKS);

  const handleTaskDrop = (
    taskId: string,
    newStatus: string,
    hoverIndex: number
  ) => {
    setTasks((prevTasks) => {
      const taskToMove = prevTasks.find((task) => task.id === taskId);
      if (!taskToMove) return prevTasks;

      const updatedTasks = prevTasks.filter((task) => task.id !== taskId);

      updatedTasks.splice(hoverIndex, 0, { ...taskToMove, status: newStatus });
      return updatedTasks;
    });
  };
  const sortedTasks = tasks.sort((a, b) => {
    const priorityOrder = { URGENT: 1, HIGH: 2, MEDIUM: 3, LOW: 4 };
    return (priorityOrder[a.priority] || 5) - (priorityOrder[b.priority] || 5);
  });

  return (
    <ul className="flex mt-5 gap-3">
      {TASK_STATUS.map((task) => (
        <DevelopmentTaskList
          key={task.status}
          title={task.title}
          taskCards={sortedTasks.filter(
            (task2) => task2.status === task.status
          )}
          status={task.status}
          onTaskDrop={handleTaskDrop}
          isLoading={isProjectDataLoading}
        />
      ))}
    </ul>
  );
};

export default Development;
