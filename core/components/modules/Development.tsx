import React, { useState } from "react";
import DevelopmentTaskList from "../DevelopmentTaskList";
import { TASKS, TTask } from "@/tmpData";
import { useSearchParams } from "next/navigation";

const TASK_STATUS = [
  { title: "To Do", status: "TO_DO" },
  { title: "In Progress", status: "IN_PROGRESS" },
  { title: "Ready For Review", status: "READY_FOR_REVIEW" },
  { title: "Error", status: "ERROR" },
  { title: "Closed", status: "CLOSED" },
];

const Development = () => {
  const [tasks, setTasks] = useState<TTask[]>(TASKS);

  const handleTaskDrop = (taskId: string, newStatus: string) => {
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
        />
      ))}
    </ul>
  );
};

export default Development;
